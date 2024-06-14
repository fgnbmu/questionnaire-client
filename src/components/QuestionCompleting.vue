<script setup lang="ts">
    // import TypesOfQuestionCompleting from "./TypesOfQuestionCompleting.vue"

    import { ref } from 'vue';

    // interface ComponentProps {
    //     status: string;
    // }

    // const props = defineProps<ComponentProps>();
    // const props = defineProps({
    //     status: String
    // })
    const selectedOption = ref('Текст'); // Default selected option
    console.log(selectedOption);
</script>

<template>
    <div class="typeOfQuestion">
        <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
            <div style="color: black; font-size: 32px; font-family: Montserrat; font-weight: 600; white-space: pre-wrap; word-wrap: break-word; overflow-x: hidden; width: 100%; background: #E9ECEE; outline: none; border: none; ">Текст вопроса</div>
        </div>
        <div class="text" v-if="selectedOption === 'Текст'">
            <input type="text" placeholder="Введите ответ" style="width: 100%; border: none; outline: none; background: #E9ECEE; color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word;">
        </div>
        <div class="file" v-if="selectedOption === 'Файл'">
            <img src="/src/assets/fileIcon.svg">
            <div style="text-align: center; color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Вставьте файл</div>
        </div>
        <div class="one" v-if="selectedOption === 'Один из списка'">
            <div class="variantInOne">
                <input type="radio" id="answer1" name="answer">
                <label for="answer1">
                    <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Ответ 1</div>
                </label>
            </div>
            <div class="variantInOne">
                <input type="radio" id="answer2" name="answer">
                <label for="answer2">
                    <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Ответ 2</div>
                </label>
            </div>
            <div class="variantInOne">
                <input type="radio" id="addOther" name="answer">
                <label for="addOther">
                    <div style="color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Добавить ответ или "Другое"</div>
                </label>
            </div>
        </div>
        <div class="multiply" v-if="selectedOption === 'Несколько из списка'">
            <div class="variantInMultiply">
                <input type="checkbox" id="answer1">
                <label for="answer1">
                    <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Ответ 1</div>
                </label>
            </div>
            <div class="variantInMultiply">
                <input type="checkbox" id="answer2">
                <label for="answer2">
                    <div style="color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Ответ 2</div>
                </label>
            </div>
            <div class="variantInMultiply">
                <input type="checkbox" id="addOther">
                <label for="addOther">
                    <div style="color: #A9A9A9; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Добавить ответ или “Другое”</div>
                </label>
            </div>
        </div>
    </div>
</template>