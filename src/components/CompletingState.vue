
<script setup lang="ts">
  import Header from "./HeaderSection.vue"
  // import Menu from "./Menu.vue"
  import SurveyCompleting from "./SurveyCompleting.vue"
  import Statistics from "./StatisticsSection.vue";

  import { ref } from 'vue';

  const activeMenu = ref('questions');

  const selectMenu = (menu: string) => {
      activeMenu.value = menu;
  };

  // import { ref } from 'vue';
  // const activeMenu = ref('questions');
</script>

<template>
  <div style="width: 100%; display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px">
    <Header></Header>
    <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: flex-start; flex-direction: column; gap: 20px;">
      <div class="scrollable">
        <div class="menuBar">
            <div class="menu">
                <div class="variant" @click="selectMenu('questions')" :style="{ borderBottom: activeMenu === 'questions' ? '1px black solid' : '' }">
                    <img src="/src/assets/q.svg">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Вопросы</div>
                </div>
                <div class="variant" @click="selectMenu('statistics')" :style="{ borderBottom: activeMenu === 'statistics' ? '1px black solid' : '' }">
                    <img src="/src/assets/s.svg">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Статистика</div>
                </div>
            </div>
        </div>
        <SurveyCompleting v-if="activeMenu === 'questions'"></SurveyCompleting>
        <Statistics v-if="activeMenu === 'statistics'"></Statistics>
        <!-- <component :is="activeMenu === 'questions' ? 'Survey' : activeMenu === 'statistics' ? 'Statistics' : 'Settings'"></component> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollable {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-height: 650px; /* Задаем высоту */
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
}
</style>
