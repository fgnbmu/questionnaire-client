<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps({
        question: {
            type: Object, // Assuming the question is an object
            required: true
        }
    });

    const selectedOption = ref('Текст'); // Default selected option
    console.log(selectedOption);
</script>

<template>
    <div class="typeOfQuestion">
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div style="color: black; font-size: 32px; font-family: Montserrat; font-weight: 600; white-space: pre-wrap; word-wrap: break-word; overflow-x: hidden; width: 100%; background: #E9ECEE; outline: none; border: none; ">{{ props.question.title }}</div>
        </div>
        <div class="text" v-if="props.question.questionType === 1">
            <input type="text" placeholder="Введите ответ" style="width: 100%; border: none; outline: none; background: #E9ECEE; color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word;">
        </div>
        <div class="file" v-if="props.question.questionType === 4">
            <img src="/src/assets/fileIcon.svg">
            <div style="text-align: center; color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Вставьте файл</div>
        </div>
        <div class="one" v-if="props.question.questionType === 2">
            <div class="variantInOne" v-for="(option, index) in props.question.questionOptions" :key="index">
                <input type="radio" :id="'answer' + index" name="answer">
                <label :for="'answer' + index">
                    <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">{{ option.optionTitle }}</div>
                </label>
            </div>
        </div>
        <div class="multiply" v-if="props.question.questionType === 3">
            <div class="variantInMultiply" v-for="(option, index) in props.question.questionOptions" :key="index">
                <input type="checkbox" :id="'answer' + index" name="answer">
                <label :for="'answer' + index">
                    <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">{{ option.optionTitle }}</div>
                </label>
            </div>
        </div>
    </div>
</template>