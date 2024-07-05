<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();

const data = ref<Array<{ id: number, faculty: string, department: string }>>([]);
const selectedFaculties = ref<Array<{ id: number }>>([]);

const date1 = ref<string>('');
const date2 = ref<string>('');
const dateError = ref<string>(''); // New variable for date error

const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
  const year = date.getUTCFullYear();
  return `${day}.${month}.${year}`;
};

date1.value = store.getters.getStartDate
    ? formatDate(store.getters.getStartDate)
    : '';
date2.value = store.getters.getExpirationDate
    ? formatDate(store.getters.getExpirationDate)
    : '';

const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;

const getAllFaculties = async () => {
    try {
        const response = await axios.get(`${store.getters.getApiUrl}/facultyDepartment`, {
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

onMounted(() => {
    getAllFaculties();

    watch([date1, date2], ([newDate1, newDate2]) => {
        if (datePattern.test(newDate1) && datePattern.test(newDate2)) {
            const startDate = parseDateWithTime(newDate1);
            const expirationDate = parseDateWithTime(newDate2);
            
            if (startDate && expirationDate) {
                store.dispatch('updateStartDate', startDate.toISOString());
                store.dispatch('updateExpirationDate', expirationDate.toISOString());
            }
        }
        });
    date1.value = store.getters.getStartDate
    ? formatDate(store.getters.getStartDate)
    : '';
    date2.value = store.getters.getExpirationDate
    ? formatDate(store.getters.getExpirationDate)
    : '';    

})

const saveSettings = () => {
    // Check if the dates are in the correct format and exist
    if (datePattern.test(date1.value) && datePattern.test(date2.value)) {
        const startDate = parseDateWithTime(date1.value);
        const expirationDate = parseDateWithTime(date2.value);
        
        // Check if parsed dates are valid
        if (startDate && expirationDate) {
            // Save the dates to the store
            store.dispatch('updateStartDate', startDate.toISOString());
            store.dispatch('updateExpirationDate', expirationDate.toISOString());
            
            console.log(store.getters.getStartDate);
            console.log(store.getters.getExpirationDate);
            console.log(date1);
            console.log(date2);
            dateError.value = '';

        } else {
            dateError.value = 'Invalid dates. Please enter valid dates in the format DD.MM.YYYY.';
        }
    } else {
        dateError.value = 'Dates are not in the correct format. Please enter dates in the format DD.MM.YYYY.';
    }
}

// Helper function to parse date in the format DD.MM.YYYY and include time 00:00:00
const parseDateWithTime = (dateString: string): Date | null => {
    const [day, month, year] = dateString.split('.');
    const parsedDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
    
    // Adjust the time to the specified timezone
    parsedDate.setHours(parsedDate.getHours() + 5);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
}

watch(selectedFaculties, (newSelectedFaculties) => {
    const facultiesIds = newSelectedFaculties.map(faculty => faculty.id);
    store.dispatch('updateSelectedFaculties', facultiesIds);
});

</script>

<template>
    <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch;">
        <div style="width: 844px; height: 100%; padding-left: 40px; padding-right: 40px; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div class="calendar">
                <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Срок проведения опроса:</div>
                </div>
                <div style="align-self: stretch; padding-top: 10px; padding-bottom: 10px; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="padding: 10px; border-bottom: 1px black solid; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                        <img src="/src/assets/calendar.svg">
                        <input
                            style="width: 148px; height: 33px; color: black; font-size: 20px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; outline: none; border: none;"
                            placeholder="ДД.ММ.ГГГГ"
                            v-model="date1"
                        >
                    </div>
                    <div style="color: black; font-size: 40px; font-family: Montserrat; font-weight: 500; word-wrap: break-word">-</div>
                    <div style="padding: 10px; border-bottom: 1px black solid; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                        <img src="/src/assets/calendar.svg">
                        <input
                            style="width: 148px; height: 33px; color: black; font-size: 20px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; outline: none; border: none;"
                            placeholder="ДД.ММ.ГГГГ"
                            v-model="date2"
                        >
                    </div>
                </div>
                <div v-if="dateError" class="date-error-message">
                    {{ dateError }}
                </div>
            </div>
            <div class="access">
                <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Доступ к опросу:</div>
                </div>
                <div v-for="item in data" :key="item.id" style="align-self: stretch; padding-top: 5px; padding-bottom: 5px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <input type="checkbox" :id="`department_${item.id}`" v-model="selectedFaculties" :value="{ id: item.id }">
                        <label :for="`department_${item.id}`">
                            <div style="flex: 1 1 0; color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">{{ item.faculty }}</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="publish">
        <div style="width: 924px; height: 100%; flex-direction: column; justify-content: center; align-items: flex-end; display: inline-flex; padding-bottom: 10px;">
            <div class="actionButton" @click="saveSettings()">
                <div style="text-align: center; color: white; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Сохранить</div>
            </div>
        </div>
    </div>
</template>

<style>
  .date-error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    font-family: Montserrat;
    width: 300px;
  }
</style>