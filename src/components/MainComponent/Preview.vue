<script setup>
    import { onMounted,ref } from "vue";
    import preview1 from "@/assets/preview1.jpg"
    const userAgent = navigator.userAgent;
    console.log(userAgent)

</script>
<template>
    <div id="about" class="previewDiv" :style="{backgroundImage:` linear-gradient(to right, rgba(132, 25, 34,0), rgba(132, 25, 34,0.7)),url(${preview1})`}">
        <div class="perviewTextdDiv">
            <h2>隨便餐廳</h2>
            <p>本餐廳的特色是當顧客不知道吃什麼的時候，可以採用隨機的方式幫顧客準備好吃的料理。</p>
        </div>
    </div>
</template>
<style>
.previewDiv{
    width: 100%;
    margin-top: var(--header-height);
    height: max(500px,100vh);
    background-size: cover;
    background-position:top;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
}
.perviewTextdDiv{
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap:7rem;
    padding: 3rem;
}

@media (max-width:768px) {
    .previewDiv{
        height: 100vh;
        background-size: auto 100%;
        margin-top: 0;
    }
    .perviewTextdDiv{
        width: 100%;
        align-items: center;
        justify-content: start;
    }
}
</style>