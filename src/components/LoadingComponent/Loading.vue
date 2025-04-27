<script setup>
    import { ref,defineProps } from 'vue';
    const loadingClass = ref("LoadingDiv");
    const props = defineProps({
        ClassList : String,
    })
    
</script>
<template>
    <div :class="ClassList">
        <div class="LoadingText">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    </div>
</template>
<style>
    .LoadingDiv{
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        flex: row;
        align-items: center;
        justify-content: center;
        width: 100vW;
        height: 100vh;
        z-index: 1000;
        transition: all 1s;
    }
    .LoadingDone{
        opacity: 0;
    }
    .LoadingText{
        text-align:center;
    }
    .LoadingText span{
        display: inline-block;
        color:black;
        font-size: 10vw;
        animation: LoadingAnimaion 2s linear infinite;
    }
    .LoadingText span:nth-child(1){
        animation-delay: 0ms;
    }
    .LoadingText span:nth-child(2){
        animation-delay: 100ms;
    }
    .LoadingText span:nth-child(3){
        animation-delay: 200ms;
    }
    .LoadingText span:nth-child(4){
        animation-delay: 300ms;
    }
    .LoadingText span:nth-child(5){
        animation-delay: 400ms;
    }
    .LoadingText span:nth-child(6){
        animation-delay: 500ms;
    }
    .LoadingText span:nth-child(7){
        animation-delay: 600ms;
    }
    .LoadingText span:nth-child(8){
        animation-delay: 700ms;
    }
    .LoadingText span:nth-child(9){
        animation-delay: 800ms;
    }
    .LoadingText span:nth-child(10){
        animation-delay: 900ms;
    }
    @keyframes LoadingAnimaion{
        0%{
            transform: translateY(0%);
        }
        12.5%{
            transform: translateY(-30%);
        }
        25%{
            transform: translateY(0%);
        }
        37.5%{
            transform: translateY(20%);
        }
        50%{
            transform: translateY(0);
        }
    }
    .LoadingDiv::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: 500px;
        height: 500px;
        background-color: var(--background-color);
        transform:translate(150%,-50%) rotate(45deg);
        transition: all 1s;
    }
    .LoadingDiv.LoadingDone::after{
        transform:translate(-50%,-50%) rotate(45deg) scale(3);
    }
    
</style>