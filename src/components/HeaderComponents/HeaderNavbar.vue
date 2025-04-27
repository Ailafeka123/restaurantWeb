<script setup>
    import { ref, onMounted, watch } from 'vue';
    //動態選單，可以收回
    //抓取Y軸
    let scrollY = ref(0);
    let headerClass = ref("header")
    //往上往下
    let Move = ref("down");
    //間隔開關
    let moveB = false;
    onMounted(()=>{
        moveB = true;
    })
    //監聽滑動以及判斷往上往下
    window.addEventListener("scroll",()=>{
        if(scrollY.value < document.documentElement.scrollTop){
            Move.value = "down"
        }else{
            Move.value = "up"
        }
        scrollY.value = document.documentElement.scrollTop;
    })
    //根據狀態變化選單
    watch(scrollY,()=>{
        if(moveB){
            if(scrollY > "80px" && Move.value === "down"){
                headerClass.value = "header header-close"
            }else{
                headerClass.value = "header"
            }
            moveB = false;
            setTimeout(()=>{
                moveB = true;
            },300)
        }
    })
    //點擊收回選單
    const CloseHeader = () =>{
        moveB = false;
        headerClass.value = "header header-close"
        setTimeout(()=>{
            moveB = true;
        },500)
    }
</script>
<template>
    <header :class="headerClass" >
        <nav class="nav">
            <ul class="headerNav">
                <li><a  href="#">關於我們</a></li>
                <li><a @click="CloseHeader" href="#News">最新消息</a></li>
                <li><a @click="CloseHeader" href="#menuList">菜單</a></li>
                <li>位置</li>
                <li>預約</li>
            </ul>
        </nav>
    </header>
</template>
<style>
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        height: var(--header-height);
        width: 100%;
        background-color: var(--header-color);
        z-index: 999;
        transition: all 0.5s;
    }
    
    .header-close{
        transform: translateY(-100%);
        
    }
    .headerNav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: all 0.5s;
    }
    @media (max-width:786px) {
        .header{
            position: fixed;
            flex-direction: column;
            top: 100%;
            left: 0;
        }
        .nav{
            width: 100%;
        }
        .headerNav{
            width: 100%;
            justify-content: space-around;
        }
    }
</style>