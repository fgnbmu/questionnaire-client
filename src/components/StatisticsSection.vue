<!-- <script setup lang="ts">
import { ref} from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();

const data = ref<Array<{ id: number, title: string, description: string, expirationDate: string, startDate: string }>>([]);

const getStatistic = async () => {
    try {
        const response = await axios.get(`${store.getters.getApiUrl}/surveys/${store.getters.getSelectedSurveyId}/statistic`, {
            headers: {
                // 'Authorization': `Bearer ${token}`
                'Authorization': `Bearer ${store.getters.getToken}`
            }
        });
        // console.log(response.data);
        data.value = response.data; 
    } catch (error) {
        console.error(error);
    }
};
</script> -->

<template>
    <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex-direction: column; gap:50px ">
        <div style="width: 844px; height: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="text-align: center; color: black; font-size: 26px; font-family: Montserrat; font-weight: 700; word-wrap: break-word; ">Общая статистика</div>
            <div style="text-align: center; color: black; font-size: 24px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Опрос прошли 80 человек</div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Отдел 1:</div>
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">20%</div>
                    </div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Отдел 2:</div>
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">80%</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 844px; height: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="text-align: center; color: black; font-size: 26px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Статистика отдела: Отдел 1</div>
            <div style="text-align: center; color: black; font-size: 24px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Опрос прошли 8 человек</div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Прошли опрос</div>
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">30%</div>
                    </div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Проигнорировали опрос</div>
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">70%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
div:nth-child(2) {
    --progress-width: 70%; /* Например, установим ширину в 50% */
}
</style>
