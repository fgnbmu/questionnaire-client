<template>
    <div style="width: 226px; height: 76px; background: white; border-radius: 15px; overflow: hidden; border: 2px #00B2FF solid; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
        <div @click="selectOption('Пройти опрос')" class="surveyOption" style="border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom: 1px #00B2FF solid;">
            <div style="width: 187px; align-self: stretch; text-align: center; color: #0F2232; font-size: 15px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Пройти опрос</div>
        </div>
        <div @click="selectOption('Редактировать опрос')" class="surveyOption" style="border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
            <div style="width: 187px; text-align: center; color: #0F2232; font-size: 15px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Редактировать опрос</div>
        </div>
    </div>
</template>

<script>
// import { defineProps } from 'vue';

export default {
    props: {
        selectedOption: String
    },
    methods: {
        selectOption(option) {
            this.$emit('update:selectedOption', option);
        }
    }
}
</script>

<style scoped>
    .surveyOption {
        cursor: pointer;
        align-self: stretch; padding-top: 10px; padding-bottom: 10px; background: white; justify-content: center; align-items: center; gap: 10px; display: inline-flex
    }

    .surveyOption:hover {
        background: #CFF0FF;
    }
</style>