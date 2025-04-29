<script setup>

</script>
<template>
    <footer>
        <div class="footerConnect">
            <p >聯繫方法</p>
            <p >電話號碼:0917-871-819</p>
            <p >信箱:ailafeka@gmail.com</p>
            <p >聯繫時間:1000~2000</p>
        </div>
        <div class="footerDirections">
            <p  >本網站是以Vue配合google製作，並放在github上使用，僅供用於展示</p>
        </div>
        <div class="footerCopyright">
            <p >Copyright© 劉星緯 2025</p>
        </div>
    </footer>
</template>
<style>
    footer{
        padding: 1rem;
        width: 100%;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2,minmax(0,1fr));
        grid-template-rows: repeat(2,minmax(0,1fr));
        align-items: center;
        justify-content: center;
        background-color: var(--header-color);
        text-align: center;
    }
    .footerConnect{
        grid-column: 1/2;
        grid-row: 1/3;
    }
    @media (max-width:768px) {
        footer{
            grid-template-columns:1fr
        }
    }
</style>