<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const email = ref("");
const password = ref("");
const isAdmin = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post(`${store.getters.getApiUrl}/auth/login`, {
      email: email.value,
      password: password.value,
    });
    store.dispatch('updateToken', response.data.access_token);
    // router.push('/surveysAdmin');
    console.log(store.getters.getToken);
  } catch (error) {
    // Обработка ошибки при выполнении запроса
  }
};

const getProfile = async () => {
  try {
      const response = await axios.get(`${store.getters.getApiUrl}/auth/profile`, {
          headers: {
              // 'Authorization': `Bearer ${token}`
              'Authorization': `Bearer ${store.getters.getToken}`
          }
      });
      isAdmin.value = response.data.isAdmin;
      // console.log(isAdmin.value);

      if (isAdmin.value) {
        router.push('/surveysAdmin');
      }
      else {
        router.push('/surveys');
      }

  } catch (error) {
      console.error(error);
  }
};

const authorization = async () => {
  await handleLogin();
  await getProfile();
}

</script>

<template>
  <div class="registrationPage">
    <div class="registrationBlock">
      <div class="data">
        <div style="color: #0f2232; font-size: 35px; font-family: Montserrat; font-weight: 600; word-wrap: break-word;">
          Авторизация
        </div>
        <input v-model="email" type="email" class="dataField" style="color: rgba(15, 34, 50, 0.6); font-size: 24px; font-family: Montserrat; font-weight: 400;" placeholder="employee@psu.ru" />
        <input v-model="password" type="password" class="dataField" style="color: rgba(15, 34, 50, 0.6); font-size: 24px; font-family: Montserrat; font-weight: 600;" placeholder="••••••••••••" />
      </div>
      <div style="align-self: stretch; justify-content: flex-end; align-items: center; display: inline-flex;">
        <div @click="authorization" class="buttonEnter">
          <div style="text-align: center; color: white; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word;">
            Войти
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.registrationPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registrationBlock {
  padding: 30px;
  background: #f4f4f4;
  border-radius: 15px;
  border: 3px #0f2232 solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  display: inline-flex;
}

.data {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  display: flex;
}

.dataField {
  width: 560px;
  height: 55px;
  padding: 13px 22px;
  background: rgba(233, 236, 238, 0.5);
  border-radius: 15px;
  border: 1px #00b2ff solid;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dataField:focus,
.dataField:active {
  outline: none; /* Убираем внешнюю подсветку или обводку при фокусировке или активации */
}

.buttonReg,
.buttonEnter {
  width: 200px;
  height: 55px;
  padding: 13px 15px;
  border-radius: 15px;
  border: 1px #00b2ff solid;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  cursor: pointer;
}

.buttonEnter {
  background: #00b2ff;
  color: white;
}
</style>