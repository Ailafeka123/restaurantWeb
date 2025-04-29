<script setup>
import { ref,watch} from 'vue';
    //預約人，預約電話，預約人數，預約時間，備註
    let userName = ref("");
    let userPhoneNumber = ref();
    let userNumber = ref();
    //拆分兩個 一個是日期 一個是時間
    let userInputData =ref(null);
    let userDateY = ref();
    let userDateM = ref();
    let userDateD = ref();
    let userTimeH = ref();
    let userTimeM = ref();
    //備註
    let userRemark = ref("");

    //以下紀錄google表單參數
    // https://docs.google.com/forms/d/e/1FAIpQLSdEV-TqJT7BwDtKC16xrAXRM89scPTVtRINDiAhTR31BWJ5wg/formResponse
    // entry.1780283652 名稱
    // entry.1572574824 電話
    // entry.1551313712 人數
    // entry.1840599118 備註
    // entry.1296829386_year 時間_年
    // entry.1296829386_month 時間_月
    // entry.1296829386_day 時間_日
    // entry.838828077_hour 時間_時
    // entry.838828077_minute 時間 分
    watch(userInputData,()=>{
        console.log(userInputData.value)
    })
    const config = {
        enableTime: true,
        dateFormat: "Y-m-d H:i", // 顯示格式
        defaultHour: 9,
        defaultMinute: 0,
        time_24hr: true, // 使用 24 小時制
        allowInput: false
    }
    const fp = ref(null)
    const dataFocus = ()=>{
        fp.value.focus();
    }

    const nowDate = new Date();
    console.log(nowDate)
</script>
<template>
    <div id="reserve" class="reserveDiv">
        <h2>開始預約</h2>
        <div class="reserveList">
            <form action="" @submit.prevent="" class="reserveGrid">
                <div class="reserveInput inputBox1">
                    <label for="entry.1780283652">名稱</label>
                    <input type="text" name="entry.1780283652" id="userName" v-model = "userName">
                </div>
                <div class="reserveInput inputBox2">
                    <label for="entry.1572574824">電話號碼</label>
                    <input type="number" name="entry.1572574824" id="userPhoneNumber" v-model="userPhoneNumber">
                </div>
                <div class="reserveInput inputBox3">
                    <label for="userNumber">預約人數</label>
                    <input type="number" name="userNumber" id="userNumber" v-model="userNumber">
                </div>
                <div class="reserveInput inputBox4" @click="dataFocus">
                    <label for="">預約時間</label>
                    <input  ref="fp" type="datetime-local" name="" id="" v-model="userInputData">
                    <!-- <Flatpickr ref="fp":readonly="true"  v-model="userInputData" :config="config" /> -->
                </div>
                <div class="reserveInput inputBox5">
                    <label for="remark">備註</label>
                    <textarea name="remark" id="" v-model="userRemark" placeholder="請輸入文字"></textarea>
                </div>
                <div class="reserveButtonDiv">
                    <button type="submit">提交</button>
                    <button type="button">清除</button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<style> 
    .reserveDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: min(100vh,1000px);
        gap: 2rem;
    }
    .reserveList{
        width: 80%;
        height: 80%;
    }
    .reserveGrid{
        display: grid;
        grid-template-rows: repeat(4,minmax(0,1fr));;
        grid-template-columns: repeat(2, minmax(0,1fr));;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .reserveButtonDiv{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }
    .reserveInput{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .inputBox1{
        grid-column: 1/2;
        grid-row: 1/2;
    }
    .inputBox2{
        grid-column: 2/3;
        grid-row:1/2;
    }
    .inputBox3{
        grid-column: 1/2;
        grid-row:2/3;
    }
    .inputBox4{
        grid-column: 2/3;
        grid-row:2/3
    }
    .inputBox5{
        grid-column: 1/3;
        grid-row:3/4
    }
    label{
        
    }
    input{
        width: 90%;
        border-radius: 8px;
    }
    textarea{
        width: 100%;
        height: 90%;
    }
    @media (max-width:768px){
        .reserveGrid{
            grid-template-columns: minmax(0,1fr);
            grid-template-rows: repeat(6,minmax(0,1fr));
        }
        .inputBox1{
            grid-column: 1/2;
            grid-row: 1/2;
        }
        .inputBox2{
            grid-column: 1/2;
            grid-row:2/3;
        }
        .inputBox3{
            grid-column: 1/2;
            grid-row:3/4;
        }
        .inputBox4{
            grid-column: 1/2;;
            grid-row:4/5;
        }
        .inputBox5{
            grid-column: 1/2;
            grid-row:5/6
        }
    }
</style>