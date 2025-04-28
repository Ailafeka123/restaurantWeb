<script setup>
    import { ref, onMounted, watch } from 'vue';
    //抓取要顯示手機還是電腦
    let HeaderMenuSelect = ref("")
    if(window.innerWidth > 768){
        HeaderMenuSelect.value = "computer"
    }else{
        HeaderMenuSelect.value = "phone"
    }
    //動態選單
    let headerClass = ref("")
    //電腦版參數設定
    //滾動位置紀錄
    let scrollY = ref(0);
    //方向判定
    let Move = ref("down");
    //間隔開關
    let moveB = false;
    //監聽滑動以及判斷往上往下
    const scrollDetest = () =>{
        if(scrollY.value < document.documentElement.scrollTop){
            Move.value = "down"
        }else{
            Move.value = "up"
        }
        scrollY.value = document.documentElement.scrollTop;
    }


    //手機版餐數設定
    //開關
    let MenuOpen = ref(false);
    const MenuOpenClick = ()=>{
        MenuOpen.value = !MenuOpen.value;
    }
    //點擊選單讓選單收起
    const MenuItemClick = ()=>{
        MenuOpen.value = false;
    }
    onMounted(()=>{
        if(HeaderMenuSelect.value === "computer"){
            moveB = true;
            window.addEventListener("scroll",scrollDetest)
            headerClass.value = "header";
            watch(scrollY,()=>{
                if(moveB){
                    if(scrollY > "200px" && Move.value === "down"){
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
        }else{
            headerClass.value = "headerPhone headerPhoneClose" 
            watch(MenuOpen,()=>{
                if(MenuOpen.value){
                    headerClass.value = "headerPhone" 
                }else{
                    headerClass.value = "headerPhone headerPhoneClose"  
                }
            })
        }
    })

    

    
    //根據狀態變化選單
   
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
            <ul class="headerNav" v-if="HeaderMenuSelect === `computer`">
                <li><a  href="#">關於我們</a></li>
                <li><a @click="CloseHeader" href="#News">最新消息</a></li>
                <li><a @click="CloseHeader" href="#menuList">菜單</a></li>
                <li>位置</li>
                <li>預約</li>
            </ul>

            <ul class="headerNavPhone" v-else >
                <li class="closePhoneMenu">
                    <div @click="MenuOpenClick" class="ClosePhoneMunuButton">
                        <span>—</span>
                        <span>—</span>
                        <span>—</span>
                    </div>
                </li>
                <li><a href="#" @click="MenuItemClick">關於我們</a></li>
                <li><a href="#News" @click="MenuItemClick">最新消息</a></li>
                <li><a href="#menuList" @click="MenuItemClick">菜單</a></li>
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
        width: 100%;
        height: 100%;
        gap: 1rem;
        transition: all 0.5s;
    }


    .headerPhone{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: min(100vw,500px);
        background-color: var(--header-color);
        z-index: 999;
        transition: all 0.5s;
    }
    .headerPhoneClose{
        transform: translateX(-100%);
    }
    .nav{
        width: 100%;
        height: 100%;
    }
    .headerNavPhone{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 2rem;
        height: 100%;
        width: 100%;
    }
    .headerNavPhone li{
        border: 4px solid black;
        border-width: 0 0 4px 0;
    }
    .closePhoneMenu{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        width: 100%;
        padding: 0.5rem;
        font-size: 10vw;
        background-color: var(--header-color);
        border-width: 0 !important;
    }
    .ClosePhoneMunuButton{
        position: relative;
        display: flex;
        width: 12vw;
        height:12vw;
        background-color: var(--header-color);
    }
    .ClosePhoneMunuButton span{
        position: absolute;
        text-align: center;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
    }
    .ClosePhoneMunuButton:hover{
        opacity: 0.5;
    }
    .ClosePhoneMunuButton span:nth-child(1){
        top: 0;
        transform: rotate(405deg);
    }
    .ClosePhoneMunuButton span:nth-child(2){
        top: 0;
        transform: rotate(-405deg);
    }
    .ClosePhoneMunuButton span:nth-child(3){
        top: 0;
        transform: rotate(-405deg);
    }
    .headerPhoneClose .ClosePhoneMunuButton span:nth-child(1){
        transform: rotate(0);
        top: 30%;
    }
    .headerPhoneClose .ClosePhoneMunuButton span:nth-child(2){
        transform:  rotate(0);
        top: 0;
    }
    .headerPhoneClose .ClosePhoneMunuButton span:nth-child(3){
        transform:  rotate(0);
        top: -30%;
    }
    .headerPhoneClose .closePhoneMenu{
        transform: translateX(15vw);
    }
</style>