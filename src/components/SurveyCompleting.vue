<script setup lang="ts">
    import { ref, onMounted } from 'vue';
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
            <div class="actionButton">
                <div style="text-align: center; color: white; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Отправить</div>
            </div>
            <!-- При отправке опроса переход на страницу с выбором опроса и историей -->
        </div>
    </div>
  </div>
</template>

<style>
</style>