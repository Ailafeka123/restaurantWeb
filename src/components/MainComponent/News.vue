<script setup>
    import New1 from '@/assets/new1.jpg?format=webp&w=500'
    import New2 from '@/assets/new2.jpg?format=webp&w=500'
    import { ref, onMounted } from 'vue';
</script>
<template>
    <div id="News" class="News" style="scroll-margin-top: var(100px);" >
        <h2>最新消息</h2>
        <div class="NewsCardDiv">
            <div class="NewsCards" >
                <div class="NewsImgDiv">
                    <img class="NewsImg" loading="lazy" v-lazy="New1" alt="新消息圖片">
                </div>
                <div class="NewsCardTextDiv">
                    <h3>開幕優惠</h3>
                    <p class="NewCardTextContent">
                        為了慶祝開幕，本餐廳將無限期延長開幕的時間(不會開店)。  
                    </p>
                    <div>
                        2025/04/26
                    </div>
                </div>
            </div>

            <div class="NewsCards">
                <div class="NewsImgDiv">
                    <img class="NewsImg" loading="lazy" v-lazy="New2" alt="新消息圖片">
                </div>
                <div class="NewsCardTextDiv">
                    <h3>開幕大特價</h3>
                    <p class="NewCardTextContent">
                        為了慶祝開幕大優惠，本餐廳所有餐點打11折。
                    </p>
                    <div>
                        2025/04/26
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .News{
        padding: 3rem;
        height: min(1000px,100vh);
        width: 80%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        
    }
    .NewsCardDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap:2rem;
    }
    .NewsCards{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: min(50%,500px);
        height: 100%;
        overflow: hidden;
        background-color: var(--header-color);
    }
    .NewsImgDiv {
        width: 100%;
        height: 50%;
        overflow: hidden;
        transition: all 0.5s;
    }
    .NewsImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: all 0.5s
    }
    .NewsCards:hover .NewsImg{
        transform: scale(1.1);
        opacity: 0.5;
    }
    .NewsCardTextDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 50%;
    }
    .NewCardTextContent{
        width: 100%;
        height: 50%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden ;
        /* -webkit-line-clamp: 5; */
        text-overflow: ellipsis;
        padding: 1rem;
    }
    @media (max-width:768px) {
        .News{
            width: 100%;
            flex-direction: row;
            gap: 1rem;
            padding:0.5rem;
        }
        .NewsCardDiv{
            flex-direction: column;
        }
        .NewsCards{
            position: relative;
            flex-direction: row;
            width: 100%;
            height: 50%;
        
        }
        .NewsImgDiv{
            height: 100%;
            width: 100%;
            opacity: 0.8;
        }
        .NewsCardTextDiv{
            position: absolute;
            padding: 1rem;
            height: 100%;
            width: 100%;
        }
    }
    @media (max-width:425px) {
        .News{
            flex-direction: column;
        }   
    }
</style>