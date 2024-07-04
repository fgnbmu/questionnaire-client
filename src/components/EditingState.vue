
<script setup lang="ts">
  import HeaderSection from "./HeaderSection.vue"
  // import Menu from "./Menu.vue"
  import SurveyEditing from "./SurveyEditing.vue"
  import StatisticsSection from "./StatisticsSection.vue";
  import SettingsSection from "./SettingsSection.vue";

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
    <HeaderSection></HeaderSection>
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
                <div class="variant" @click="selectMenu('settings')" :style="{ borderBottom: activeMenu === 'settings' ? '1px black solid' : '' }">
                    <img src="/src/assets/p.svg">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Настройки</div>
                </div>
            </div>
        </div>
        <SurveyEditing v-if="activeMenu === 'questions'"></SurveyEditing>
        <StatisticsSection v-if="activeMenu === 'statistics'"></StatisticsSection>
        <SettingsSection v-if="activeMenu === 'settings'"></SettingsSection>
        <!-- <component :is="activeMenu === 'questions' ? 'Survey' : activeMenu === 'statistics' ? 'Statistics' : 'Settings'"></component> -->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
