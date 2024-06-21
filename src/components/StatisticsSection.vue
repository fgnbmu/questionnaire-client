<template>
    <div style="width: 100%; display: inline-flex; align-items: center; justify-content: center; align-self: stretch; ">
        <div style="width: 844px; height: 100%; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="text-align: center; color: black; font-size: 24px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Общая статистика</div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="width: 32px; height: 32px; background: #6AFFA6; border-radius: 9999px"></div>
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Отдел 1</div>
                    </div>
                    <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">70%</div>
                </div>
                <div style="width: 844px; height: 10px; position: relative">
                    <div style="width: 100%; height: 10px; left: 0px; top: 0px; position: absolute; background: #E9ECEE; border-radius: 15px"></div>
                    <div style="width: var(--progress-width); height: 10px; left: 0px; top: 0px; position: absolute; background: #6AFFA6; border-radius: 15px"></div>
                </div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                    <div style="justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                        <div style="width: 32px; height: 32px; background: #BAA5E6; border-radius: 9999px"></div>
                        <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">Отдел 2</div>
                    </div>
                    <div style="text-align: center; color: black; font-size: 20px; font-family: Montserrat; font-weight: 700; word-wrap: break-word">30%</div>
                </div>
                <div style="width: 400px; height: 10px; position: relative">
                    <div style="width: 400px; height: 10px; left: 0px; top: 0px; position: absolute; background: #E9ECEE; border-radius: 15px"></div>
                    <div style="width: 120px; height: 10px; left: 0px; top: 0px; position: absolute; background: #BAA5E6; border-radius: 15px"></div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
div:nth-child(2) {
    --progress-width: 70%; /* Например, установим ширину в 50% */
}
</style>
