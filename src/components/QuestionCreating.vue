<script setup lang="ts">
    import TypesOfQuestion from "./TypesOfQuestion.vue"

    import { ref, watch } from 'vue';

    import { defineProps, defineEmits } from 'vue';

    interface Question {
        title: string;
        answerType: number;
        answerOptions: { optionCount: number; optionTitle: string; }[];
        maxAnswerCount: number;
        attachedImages: string[];
    }

    const props = defineProps({
        index: Number,
        status: String,
        question: Object as () => Question // явно указываем тип данных для question
    });

    const emits = defineEmits(['updateQuestion']);

    const editQuestion = (newTitle: string, newAnswerType: number, newAnswerOptions: { optionCount: number; optionTitle: string; }[], newMaxAnswerCount: number) => {
        const updatedQuestion = { ...props.question, title: newTitle, answerType: newAnswerType, answerOptions: newAnswerOptions, maxAnswerCount: newMaxAnswerCount };
        emits('updateQuestion', updatedQuestion, props.index);
    };

    const selectedOption = ref('Текст'); // Default selected option
    // console.log(selectedOption);

    // const answerText = ref(''); // Реактивная переменная для хранения текста вопроса

    const answersForOne = ref(['', '']); // Initial answers with empty strings

    const addNewAnswerToOne = () => {
      answersForOne.value.push('');
    };

    const answersForMultiply = ref(['', '']); // Initial answers with empty strings

    const addNewAnswerToMultiply = () => {
      answersForMultiply.value.push('');
    };

    const questionText = ref(''); // Реактивная переменная для хранения текста вопроса

    // watch([questionText], ([question]) => {
    //     // console.log('Изменился вопрос:', question);
    //     editQuestion(question, 1, [{ newOptionCount: 1, newOptionTitle: '' }], 1);
    // }, { deep: true });

    // watch([answersForOne], ([answers]) => {
    //     const updatedAnswerOptions = answers.map((answer, index) => {
    //         return { newOptionCount: index + 1, newOptionTitle: answer };
    //     });
    //     editQuestion(questionText.value, 2, updatedAnswerOptions, answers.length);
    // }, { deep: true });

    // watch([answersForMultiply], ([answers]) => {
    //     const updatedAnswerOptions = answers.map((answer, index) => {
    //         return { newOptionCount: index + 1, newOptionTitle: answer };
    //     });
    //     editQuestion(questionText.value, 3, updatedAnswerOptions, answers.length);
    // }, { deep: true });

    watch([questionText, answersForOne, answersForMultiply], ([question, answersOne, answersMultiply]) => {
        if (selectedOption.value === 'Один из списка') {
            const updatedAnswerOptions = answersOne.map((answer, index) => {
                return { optionCount: index + 1, optionTitle: answer };
            });
            editQuestion(question, 2, updatedAnswerOptions, answersOne.length);
        } else if (selectedOption.value === 'Несколько из списка') {
            const updatedAnswerOptions = answersMultiply.map((answer, index) => {
                return { optionCount: index + 1, optionTitle: answer };
            });
            editQuestion(question, 3, updatedAnswerOptions, answersMultiply.length);
        } else {
            editQuestion(question, 1, [{ optionCount: 1, optionTitle: '' }], 1);
        }
    }, { deep: true });

</script>

<template>
    <div class="typeOfQuestion">
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <input v-model="questionText" type="text" :readonly="props.status === 'опубликован'" style="color: black; font-size: 32px; font-family: Montserrat; font-weight: 600; white-space: pre-wrap; word-wrap: break-word; overflow-x: hidden; width: 100%; background: #E9ECEE; outline: none; border: none; " placeholder="Текст вопроса">
            <div style="justify-content: flex-start; align-items: center; gap: 50px; display: flex">
                <div style="width: 358px; justify-content: center; align-items: center; display: flex">
                    <TypesOfQuestion :selectedOption="selectedOption" @update:selectedOption="selectedOption = $event"></TypesOfQuestion>
                </div>
                <img src="/src/assets/bluePen.svg">
            </div>
        </div>
        <div class="text" v-if="selectedOption === 'Текст'">
            <div style="color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word; border: none; outline: none; background-color: #E9ECEE; width: 100%;">Введите ответ</div>
        </div>
        <div class="file" v-if="selectedOption === 'Файл'">
            <img src="/src/assets/fileIcon.svg">
            <div style="text-align: center; color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Вставьте файл</div>
        </div>
        <div class="one" v-if="selectedOption === 'Один из списка'">
            <div v-for="(answer, index) in answersForOne" :key="index" class="variantInOne">
                <img src="/src/assets/circle.svg">
                <!-- <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Ответ 1</div> -->
                <input v-model="answersForOne[index]" type="text" :placeholder="`Ответ ${index + 1}`" style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word; border: none; outline: none; background-color: #E9ECEE; width: 100%;"/>
            </div>
            <div @click="addNewAnswerToOne" class="variantInOne">
                <img src="/src/assets/circle.svg">
                <div style="color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Добавить ответ или “Другое”</div>
            </div>
        </div>
        <div class="multiply" v-if="selectedOption === 'Несколько из списка'">
            <div v-for="(answer, index) in answersForMultiply" :key="index" class="variantInMultiply">
                <img src="/src/assets/rectangle.svg">
                <input v-model="answersForMultiply[index]" type="text" :placeholder="`Ответ ${index + 1}`" style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word; border: none; outline: none; background-color: #E9ECEE; width: 100%;"/>
            </div>
            <div @click="addNewAnswerToMultiply" class="variantInMultiply">
                <img src="/src/assets/rectangle.svg">
                <div style="color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Добавить ответ или “Другое”</div>
            </div>
        </div>

    </div>
</template>