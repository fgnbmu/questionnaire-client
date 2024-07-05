<script setup lang="ts">
    import { ref, onMounted, onUpdated } from 'vue';
    import QuestionCompleting from './QuestionCompleting.vue';
    import { useStore } from 'vuex';
    import axios from 'axios';

    const store = useStore();

    const selectedSurveyId = store.state.selectedSurveyId; 

    interface SurveyData {
      survey: {
          id: number;
          title: string;
          description: string;
          startDate: string;
          expirationDate: string;
      };
      questions: Array<{
          id: number;
          title: string;
          description: string;
          questionType: number;
          questionOptions: Array<{
              optionCount: number;
              optionTitle: string;
          }>;
          maxAnswerCount: number;
          attachedImages: string[];
      }>;

    }

    const data = ref<SurveyData | null>(null);

    onMounted(() => {
      console.log("Value from Vuex store:", store.state.selectedSurveyId);
      startSurvey(selectedSurveyId);
    }); 

    const startSurvey = async (surveyId: number) => {
    try {
        const response = await axios.get(`${store.getters.getApiUrl}/surveys/${surveyId}/start`, {
            headers: {
                // 'Authorization': `Bearer ${token}`
                'Authorization': `Bearer ${store.getters.getToken}`
            }
        });
        console.log('survey started');
        console.log(response.data);
        data.value = response.data; // Запись полученных данных в реактивную переменную
        console.log(data.value);
    } catch (error) {
        console.error(error);
    }
    };

    const answers = ref<{ surveyId: number; surveyTitle: string; expirationDate: string;  answers: { questionId: number; answer: string; }[] }>({
      surveyId: 0, // Initialize surveyId to 0 or update when data is available
      surveyTitle: '',
      expirationDate: '',
      answers: []
    });


    const updateAnswers = () => {
      answers.value.surveyId = store.getters.getSelectedSurveyId;
      answers.value.surveyTitle = data.value ? data.value.survey.title : '';
      answers.value.expirationDate = data.value ? data.value.survey.expirationDate : '';
      answers.value.answers = data.value ? data.value.questions.map(question => ({ questionId: question.id, answer: '' })) : [];
    };

    onUpdated(() => {
      updateAnswers();
      console.log(answers.value);
    });

    // Function to update the answer based on questionId
    // const updateAnswer = (questionId: number, answer: string) => {
    //   const foundAnswer = answers.value.answers.find(a => a.questionId === questionId);
    //   if (foundAnswer) {
    //     foundAnswer.answer = answer;
    //   }
    // };

    const postAnswers = async () => {
    const answersData = {
        surveyId: answers.value.surveyId,
        answers: answers.value.answers.map(answer => ({
            questionId: answer.questionId,
            answer: answer.answer
        }))
    };

    try {
        const response = await axios.post(
            `${store.getters.getApiUrl}/surveys/question`,
            answersData,
            {
                headers: {
                    'Authorization': `Bearer ${store.getters.getToken}`
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

// Logging the answers array for verification


</script>

<template>
  <div v-if="data" style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex-direction: column; gap: 30px;">
    <div v-if="data" style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; justify-content: space-between; align-items: center; display: inline-flex">
      <div style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">{{ data.survey.title }}</div>
    </div>

    <div v-if="data" style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; border-bottom: 2px #0F2232 solid; justify-content: space-between; align-items: center; display: inline-flex">
      <div style="color: #A9A9A9; font-size: 24px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; border: none; outline: none; width: 800px;">{{ data.survey.description }}</div>
    </div>

    <template v-for="question in data.questions" :key="question.id">
      <QuestionCompleting :question="question" />
    </template>

    <div class="publish">
        <div style="width: 924px; height: 100%; flex-direction: column; justify-content: center; align-items: flex-end; display: inline-flex; padding-bottom: 10px;">
            <div class="actionButton" @click="postAnswers()">
                <div style="text-align: center; color: white; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Отправить</div>
            </div>
            <!-- При отправке опроса переход на страницу с выбором опроса и историей -->
        </div>
    </div>
  </div>
</template>

<style>
</style>