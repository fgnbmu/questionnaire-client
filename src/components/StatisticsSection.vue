<script setup lang="ts">
import { ref, onMounted} from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();


const data = ref<{
  totalUsers: number;
  passedUsers: number;
  notPassedUsers: number;
  departmentStats: { departmentId: number; passedUsers: number; notPassedUsers: number }[];
}>({
  totalUsers: 0,
  passedUsers: 0,
  notPassedUsers: 0,
  departmentStats: [],
});

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

        console.log(data.value);
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    getStatistic();
})
</script>

<template>
    <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex-direction: column; gap:50px ">
        <div style="width: 844px; height: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <!-- <div style="text-align: center; color: black; font-size: 26px; font-family: Montserrat; font-weight: 700; word-wrap: break-word; ">Общая статистика</div> -->
            <div style="text-align: center; color: black; font-size: 26px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Опрос прошли {{ data.passedUsers }} человек</div>
            
        </div>
        <div v-for="department in data.departmentStats" :key="department.departmentId" style="width: 844px; height: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="text-align: center; color: black; font-size: 26px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Статистика отдела: {{ department.departmentId }}</div>
            <div style="text-align: center; color: black; font-size: 24px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Опрос прошли {{ department.passedUsers }} человек</div>
            <template v-if="department.passedUsers > 0">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Прошли опрос: </div>
                            <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">{{ (department.passedUsers / (department.passedUsers + department.notPassedUsers) * 100).toFixed(0) + '%' }} сотрудников отдела {{ department.departmentId }}</div>
                        </div>
                    </div>
                </div>
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                            <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Проигнорировали опрос: </div>
                            <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">{{ (department.notPassedUsers / (department.passedUsers + department.notPassedUsers) * 100).toFixed(0) + '%' }} сотрудников отдела {{ department.departmentId }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

