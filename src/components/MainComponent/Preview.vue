<script setup>
    import preview1 from "@/assets/preview1.jpg"
</script>
<template>
    <div class="previewDiv" :style="{backgroundImage:` linear-gradient(to right, rgba(132, 25, 34,0), rgba(132, 25, 34,0.7)),url(${preview1})`}">
        <!-- <img :src="preview1" alt=""> -->
        <!-- linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), -->
        <!-- <div class="previewImg1" ></div> -->
    </div>
</template>
<style>
.previewDiv{
    margin-top: var(--header-height);
    height: max(500px,100vh);
    background-position:top;
    background-size: 100%;
    background-repeat: no-repeat;
    /* display: flex;
    align-items: start;
    justify-content: start; */
    overflow: hidden;
    /* background-color: #834f4f; */
}


.previewDiv img{
    height: 100%;   
    width: 30%;
    overflow: hidden;
    object-fit:cover;
    object-position: center;
}
</style>