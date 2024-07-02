<script setup lang="ts">
    import { ref,Ref } from 'vue';
    import QuestionCreating from './QuestionCreating.vue';
    import axios from 'axios';
    import { useStore } from 'vuex';

    const store = useStore();
    const status = ref('не опубликован');
    const action = ref('Опубликовать');
    const questions: Ref<Question[]> = ref([]);

    const surveyName = ref('');
    const surveyDescription = ref('');

    interface Question {
      title: string;
      answerType: number;
      answerOptions: { optionCount: number; optionTitle: string; }[];
      maxAnswerCount: number;
      attachedImages: string[]; // предположим, что attachedImages должен быть массивом строк
    }

    const addQuestion = () => {
      questions.value.push({
        title: '',
        answerType: 1,
        answerOptions: [{ optionCount: 1, optionTitle: 'Ответ 1' }],
        maxAnswerCount: 1,
        attachedImages: []
      });
    };

    const updateQuestion = (updatedQuestion: Question, index: number) => {
      questions.value[index] = updatedQuestion;
      console.log(questions.value);
    };

    const toggleStatus = () => {
        status.value = status.value === 'не опубликован' ? 'опубликован' : 'не опубликован';
        action.value = action.value === 'Опубликовать' ? 'Редактировать' : 'Опубликовать';
    };

    const createSurvey = async (): Promise<number | void> => {
      try {
        const surveyData = {
          title: surveyName.value,
          description: surveyDescription.value,
          startDate: new Date().toISOString(),
          expirationDate: new Date().toISOString(),
          // userAccess: 1,
          // facultyAccess: 1,
          // createdAt: new Date().toISOString(),
          // updatedAt: new Date().toISOString()
        };

        const response = await axios.post(`${store.getters.getApiUrl}/surveys/`, surveyData, {
          headers: {
              // 'Authorization': `Bearer ${token}`
              'Authorization': `Bearer ${store.getters.getToken}`
          }
        });
        console.log('Survey created:', response.data.id);
        return response.data.id;  // Возвращаем идентификатор созданного опроса
      } catch (error) {
        console.error('Error creating survey:', error);
        return;  // Возвращаем undefined в случае ошибки
      }
    };

    const addQuestionToSurvey = async (surveyId, requestData) => {
      try {
        const response = await axios.post(`${store.getters.getApiUrl}/surveys/${surveyId}/question`, requestData, {
          headers: {
              'Authorization': `Bearer ${store.getters.getToken}`
          }
        });
        console.log('Questions added to the survey:', response.data);
        console.log(requestData);
        console.log(store.getters.getToken);
      } catch (error) {
        console.error('Error adding questions to the survey:', error);
        console.log(store.getters.getToken);
      }
    };

    const toggleStatusAndCreateSurvey = async () => {
        const formattedQuestions = questions.value.map((question) => {
            return {
                title: question.title,
                questionType: question.answerType,
                description: '',
                questionOptions: question.answerOptions.map((option) => {
                    return {
                        optionCount: option.optionCount,
                        optionTitle: option.optionTitle
                    };
                }),
                maxAnswerCount: question.maxAnswerCount,
                attachedImages: question.attachedImages
            };
        });

        const requestData = {
            questions: formattedQuestions
        };

        if (status.value === 'не опубликован') {
            const surveyId = await createSurvey();
            if (surveyId) {
              await addQuestionToSurvey(surveyId, requestData);
            }
        }

        toggleStatus();

        console.log(requestData);
    };

</script>

<template>
  <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex-direction: column; gap: 30px;">
    <div style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; justify-content: space-between; align-items: center; display: inline-flex">
      <input v-model="surveyName" type="text" :readonly="status === 'опубликован'" style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word; border: none; outline: none;" placeholder="Опрос 1"/>
      <div style="justify-content: flex-start; align-items: center; gap: 20px; display: flex">
        <div style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Статус: </div>
        <div style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">{{ status }}</div>
      </div>
    </div>

    <div style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; border-bottom: 2px #0F2232 solid; justify-content: space-between; align-items: center; display: inline-flex">
      <input v-model="surveyDescription" type="text" :readonly="status === 'опубликован'" style="color: #A9A9A9; font-size: 24px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; border: none; outline: none; width: 800px;" placeholder="Описание"/>
      <img src="/src/assets/bluePen.svg">
    </div>

    <template v-for="(question, index) in questions" :key="index">
      <QuestionCreating :index="index" :status="status" :question="question" @updateQuestion="updateQuestion"/>
    </template>

    <div v-if="status === 'не опубликован'" class="addQuestion" @click="addQuestion">
      <div style="width: 844px; padding-left: 40px; padding-right: 40px; padding-top: 30px; padding-bottom: 30px; background: #E9ECEE; border-radius: 15px; border: 2px #DDDDDD solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
        <div style="align-self: stretch; padding-bottom: 5px; padding-left: 5px; padding-right: 5px; justify-content: center; align-items: center; display: inline-flex">
          <div style="text-align: center; color: black; font-size: 32px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Добавить вопрос</div>
        </div>
      </div>
    </div>
    <div class="publish">
        <div style="width: 924px; height: 100%; flex-direction: column; justify-content: center; align-items: flex-end; display: inline-flex; padding-bottom: 10px;">
            <div @click="toggleStatusAndCreateSurvey" class="actionButton">
                <div style="text-align: center; color: white; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">{{ action }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
</style>