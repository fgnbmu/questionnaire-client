<script setup lang="ts">
    
</script>

<template>
    <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; ">
        <div style="width: 844px; height: 100%; padding-left: 40px; padding-right: 40px; justify-content: space-between; align-items: flex-start; display: inline-flex">
            <div class="calendar">
                <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Срок проведения опроса:</div>
                </div>
                <div style="align-self: stretch; padding-top: 10px; padding-bottom: 10px; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="padding: 10px; border-bottom: 1px black solid; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                        <img src="/src/assets/calendar.svg">
                        <div style="width: 148px; height: 33px; color: black; font-size: 20px; font-family: Montserrat; font-weight: 500; word-wrap: break-word">14.03.2024</div>
                    </div>
                    <div style="color: black; font-size: 40px; font-family: Montserrat; font-weight: 500; word-wrap: break-word">-</div>
                    <div style="padding: 10px; border-bottom: 1px black solid; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                        <img src="/src/assets/calendar.svg">
                        <div style="width: 148px; height: 33px; color: black; font-size: 20px; font-family: Montserrat; font-weight: 500; word-wrap: break-word">19.04.2024</div>
                    </div>
                </div>
            </div>
            <div class="success">
                <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                    <div style="color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Доступ к опросу:</div>
                </div>
                <div style="align-self: stretch; height: 196px; padding-top: 10px; padding-bottom: 10px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                    <div style="width: 323px; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <input type="checkbox" id="department1">
                        <label for="department1">
                            <div style="flex: 1 1 0; color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Отдел 1</div>
                        </label>
                    </div>
                    <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <input type="checkbox" id="department2">
                        <label for="department2">
                            <div style="flex: 1 1 0; color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Отдел 2</div>
                        </label>
                    </div>
                    <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
                        <input type="checkbox" id="department3">
                        <label for="department3">
                            <div style="flex: 1 1 0; color: black; font-size: 22px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Отдел 3</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<style>
/* CSS for larger checkboxes */

</style>