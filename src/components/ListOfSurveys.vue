<script setup lang="ts">
    import Header from './HeaderSection.vue'
</script>

<template>
    <div style="width: 100%; display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px">
        <Header></Header>
        <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 20px;">
            <div style="width: 844px; height: 100%; padding-left: 40px; padding-right: 40px; justify-content: space-between; align-items: flex-start; display: inline-flex">
                <div style="width: 100%; height: 100%; padding-left: 40px; padding-right: 40px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                    <div style="align-self: stretch; padding-top: 5px; padding-bottom: 5px; justify-content: flex-start; align-items: center; gap: 50px; display: inline-flex">
                        <div style="color: #0F2232; font-size: 27px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Доступные опросы</div>
                    </div>
                    <div style="align-self: stretch; padding-top: 10px; padding-bottom: 10px; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
                        <div style="width: 200px; height: 210px; padding-top: 10px; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; background: white; border-radius: 15px; overflow: hidden; border: 2px #DDDDDD solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                            <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 50px; display: inline-flex">
                                <div style="flex: 1 1 0; color: #0F2232; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Опрос 1</div>
                            </div>
                            <div style="align-self: stretch; flex: 1 1 0; padding-left: 10px; padding-right: 10px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex">
                                <div style="width: 187px; color: #B3B3B3; font-size: 15px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Описание</div>
                                <div style="display: flex; justify-content: flex-end; width: 100%;">
                                    <img src="/src/assets/arrowRight.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 844px; height: 100%; padding-left: 40px; padding-right: 40px; justify-content: space-between; align-items: flex-start; display: inline-flex">
                <div style="width: 100%; height: 100%; padding-left: 40px; padding-right: 40px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
                    <div style="align-self: stretch; padding-top: 5px; padding-bottom: 5px; justify-content: flex-start; align-items: center; gap: 50px; display: inline-flex">
                        <div style="color: #0F2232; font-size: 27px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">История</div>
                    </div>
                    <div style="align-self: stretch; padding-top: 10px; padding-bottom: 10px; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
                        <div style="width: 200px; height: 210px; padding-top: 10px; padding-bottom: 20px; padding-left: 10px; padding-right: 10px; background: #E9ECEE; border-radius: 15px; overflow: hidden; border: 2px #DDDDDD solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
                            <div style="align-self: stretch; padding: 10px; justify-content: flex-start; align-items: center; gap: 50px; display: inline-flex">
                                <div style="flex: 1 1 0; color: #0F2232; font-size: 24px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Опрос 1</div>
                            </div>
                            <div style="align-self: stretch; flex: 1 1 0; padding-left: 10px; padding-right: 10px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: flex">
                                <div style="width: 187px; color: #B3B3B3; font-size: 15px; font-family: Montserrat; font-weight: 600; word-wrap: break-word">Описание</div>
                                <div style="display: flex; justify-content: flex-end; width: 100%;">
                                    <img src="/src/assets/arrowRight.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>