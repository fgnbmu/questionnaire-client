<script setup lang="ts">
    import { ref } from 'vue';

    import QuestionCompleting from './QuestionCompleting.vue';

    // const status = ref('не опубликован');
    // const action = ref('Опубликовать');
    const questions = ref([0]); // Initialize with one Question component

    // const addQuestion = () => {
    //     questions.value.push(questions.value.length);
    // };

    // const toggleStatus = () => {
    //     status.value = status.value === 'не опубликован' ? 'опубликован' : 'не опубликован';
    //     action.value = action.value === 'Опубликовать' ? 'Редактировать' : 'Опубликовать';
    // };
</script>

<template>
  <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; flex-direction: column; gap: 30px;">
    <div style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; justify-content: space-between; align-items: center; display: inline-flex">
      <div style="color: #0F2232; font-size: 32px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Опрос 1</div>
    </div>

    <div style="width: 924px; height: 100%; padding-top: 10px; padding-bottom: 10px; border-bottom: 2px #0F2232 solid; justify-content: space-between; align-items: center; display: inline-flex">
      <div style="color: #A9A9A9; font-size: 24px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; border: none; outline: none; width: 800px;">Описание</div>
    </div>

    <template v-for="index in questions" :key="index">
      <QuestionCompleting :index="index"/>
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