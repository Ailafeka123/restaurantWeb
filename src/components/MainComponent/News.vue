<script setup>
    import New1 from '@/assets/new1.jpg'
    import New2 from '@/assets/new2.jpg'
</script>
<template>
    <div id="News" class="News" style="scroll-margin-top: var(100px);" >
        <h2>最新消息</h2>
        <div class="NewsCardDiv">
            <div class="NewsCards" >
                <img :src="New1" alt="">
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
                <img :src="New2" alt="">
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
        padding: 80px 3rem 3rem 3rem ;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 3rem;
        
    }
    .NewsCardDiv{
        display: flex;
        height: 100%;
        gap:2rem;
    }
    .NewsCards{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 50%;
        height: 100%;
        overflow: hidden;
        background-color: var(--header-color);
    }
    .NewsCards img{
        object-fit:cover;
        object-position: center;
        width: 100%;
        height: 50%;
        transition: all 0.5s;
    }
    .NewsCards:hover img{
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
            flex-direction: row;
            gap: 1rem;
            padding: 0.5rem;
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
        .NewsCards img{
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