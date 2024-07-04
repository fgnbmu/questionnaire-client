<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    // import QuestionCreating from './QuestionCreating.vue';
    import axios from 'axios';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();
    const status = ref(localStorage.getItem('surveyStatus') || 'опубликован');
    const action = ref(localStorage.getItem('surveyAction') || 'Редактировать');

    const surveyName = ref('');
    const surveyDescription = ref('');
    const startDate = ref('');
    const expirationDate = ref('');


    // const data = ref<Array<{ id: number, title: string, description: string, startDate: string, expirationDate: string }>>([]);

    const getAllAboutSurvey = async () => {
      try {
          const response = await axios.get(`${store.getters.getApiUrl}/surveys/${store.getters.getSelectedSurveyId}`, {
              headers: {
                  // 'Authorization': `Bearer ${token}`
                  'Authorization': `Bearer ${store.getters.getToken}`
              }
          });
          // console.log(response.data.title);
          surveyName.value = response.data.title;
          surveyDescription.value = response.data.description;
          startDate.value = response.data.startDate;
          expirationDate.value = response.data.expirationDate;
      } catch (error) {
          console.error(error);
      }
    };

    const updateSurvey = async (): Promise<number | void> => {
      try {
        const surveyData = {
          title: surveyName.value,
          description: surveyDescription.value,
          startDate: store.getters.getStartDate,
          expirationDate: store.getters.getExpirationDate,
          // userAccess: 1,
          // facultyAccess: 1,
          // createdAt: new Date().toISOString(),
          // updatedAt: new Date().toISOString()
        };

        const response = await axios.patch(`${store.getters.getApiUrl}/surveys/${store.getters.getSelectedSurveyId}`, surveyData, {
          headers: {
              // 'Authorization': `Bearer ${token}`
              'Authorization': `Bearer ${store.getters.getToken}`
          }
        });
        console.log('Survey updated:', response.data);
        return response.data.id;  // Возвращаем идентификатор созданного опроса
      } catch (error) {
        console.error('Error creating survey:', error);
        return;  // Возвращаем undefined в случае ошибки
      }
    };

    const toggleStatus = () => {
        status.value = status.value === 'не опубликован' ? 'опубликован' : 'не опубликован';
        action.value = status.value === 'не опубликован' ? 'Опубликовать' : 'Редактировать';
        localStorage.setItem('surveyStatus', status.value); // Save status to localStorage
        localStorage.setItem('surveyAction', action.value); // Save status to localStorage
    };

    const toggleStatusAndUpdateSurvey = async () => {

        if (status.value === 'не опубликован') {
            await updateSurvey();
            router.push('/surveysAdmin');
        }
        else {
          store.dispatch('updateStartDate', startDate.value);
          store.dispatch('updateExpirationDate', expirationDate.value);
        }

        toggleStatus();
    };

    onMounted(() => {
      getAllAboutSurvey();

      // watch(status, (newStatus) => {
      //     action.value = newStatus === 'не опубликован' ? 'Опубликовать' : 'Редактировать';
      // });
      })

</script>

<template>
  <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex-direction: column; gap: 30px;">
    <div style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; justify-content: space-between; align-items: center; display: inline-flex">
      <div v-if="status === 'опубликован'" style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word; border: none; outline: none;">{{ surveyName }}</div>
      <input v-model="surveyName" type="text" v-if="status === 'не опубликован'" style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word; border: none; outline: none;" :placeholder="surveyName || 'Название'"/>
      <div style="justify-content: flex-start; align-items: center; gap: 20px; display: flex">
        <div style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Статус: </div>
        <div style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">{{ status }}</div>
      </div>
    </div>

    <div style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; border-bottom: 2px #0F2232 solid; justify-content: space-between; align-items: center; display: inline-flex">
      <div v-if="status === 'опубликован'" style="color: #A9A9A9; font-size: 24px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; border: none; outline: none; width: 800px;">{{ surveyDescription }}</div>
      <input v-model="surveyDescription" type="text" v-if="status === 'не опубликован'" style="color: #A9A9A9; font-size: 24px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; border: none; outline: none; width: 800px;" :placeholder="surveyDescription || 'Описание'"/>
      <img src="/src/assets/bluePen.svg">
    </div>

    <div class="publish">
        <div style="width: 924px; height: 100%; flex-direction: column; justify-content: center; align-items: flex-end; display: inline-flex; padding-bottom: 10px;">
            <div class="actionButton" @click="toggleStatusAndUpdateSurvey">
                <div style="text-align: center; color: white; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">{{ action }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
</style>