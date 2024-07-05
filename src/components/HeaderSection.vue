<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const router = useRouter();
const store = useStore();
const menuOpen = ref(false);

const openMenu = () => {
  menuOpen.value = true;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const closeAndExit = () => {
  closeMenu();
  store.dispatch('updateToken', null);
  console.log(store.getters.getToken);
  router.push('/');
};

const handleClickOutside = (event: MouseEvent) => {
  if (!(event.target as Element).closest(".burgerMenu") && !(event.target as Element).closest(".burgerMenuOpened")) {
    closeMenu();
  }
};

// Добавляем слушателя события клика при монтировании компонента
// чтобы закрывать меню при клике вне него
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Убираем слушателя события при размонтировании компонента
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div style="height: 65px; background-color: #F3F3F4; display: flex; align-items: center; justify-content: center; align-self: stretch;">
    <div style="width: 976.73px; height: 100%; display: inline-flex; justify-content: flex-end; position: relative;">
      <div v-show="!menuOpen" class="burgerMenu" @click="openMenu">
        <img width="80px" src="/src/assets/userIcon.svg">
      </div>
      <div v-show="menuOpen" class="burgerMenuOpened" @click="closeMenu">
        <img width="80px" src="/src/assets/userIcon.svg">
        <div class="menuLine" @click="closeAndExit">
          <div class="exitFont">Выйти</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.burgerMenu {
  display: flex;
  position: absolute;
  top: 5px;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}

.burgerMenu:hover {
  background: #D5F2FF;
}

.burgerMenuOpened {
  display: flex;
  position: absolute;
  top: 5px;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  background: #D5F2FF;
}

.menuLine {
  display: flex; align-self: center; height: 40px;
  cursor: pointer;
}

.exitFont {
  font-size: 21px; font-family: Montserrat; font-weight: 500; word-wrap: break-word; color: #00B2FF
}

.exitFont:hover {
  color: #009ADC;
}

</style>