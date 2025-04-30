<script setup>
import { ref,watch} from 'vue';
import flatPickr from 'vue-flatpickr-component';
    //預約人，預約電話，預約人數，預約時間，備註
    let userName = ref("");
    let userPhoneNumber = ref("");
    let userNumber = ref("");
    //拆分兩個 一個是日期 一個是時間
    let userInputData =ref(null);
    let userDateY = ref("");
    let userDateM = ref("");
    let userDateD = ref("");
    let userTimeH = ref("");
    let userTimeM = ref("");
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
    let submitBoolean = false;
    const submitReserve = async() =>{
        if(submitBoolean){
            console.log("送出中")
            alert("送出中 請勿重複送出")
        }
        submitBoolean = true;
        if(!userName.value){
            alert("請填寫預約人名稱")
            submitBoolean = false;
            return;
        }
        if(!userPhoneNumber.value){
            alert("請填寫電話號碼")
            submitBoolean = false;
            return;
        }
        if(!userInputData.value){
            alert("請填寫時間")
            submitBoolean = false;
            return;
        }
        
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdEV-TqJT7BwDtKC16xrAXRM89scPTVtRINDiAhTR31BWJ5wg/formResponse"
        let formbody = new FormData();
        formbody.append("entry.1780283652",userName.value)
        formbody.append("entry.1572574824",userPhoneNumber.value)
        formbody.append("entry.1551313712",userNumber.value)
        formbody.append("entry.1840599118",userRemark.value)
        formbody.append("entry.1296829386_year",userDateY.value)
        formbody.append("entry.1296829386_month",userDateM.value)
        formbody.append("entry.1296829386_day",userDateD.value)
        formbody.append("entry.838828077_hour",userTimeH.value)
        formbody.append("entry.838828077_minute",userTimeM.value)
        try {
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formbody
            })
            alert('送出成功！')
            clearClick();
            submitBoolean = false;
        } catch (err) {
            console.error('送出失敗', err)
        }
    }
    function onInput(e) {
        const filtered = e.target.value.replace(/[^\d]/g, '');
        userPhoneNumber.value = filtered;
    }
    watch(userInputData,()=>{
        if(userInputData.value){
            let [date,time] = userInputData.value.split(" ");
            let[Y,M,D]= date.split("-")
            userDateY.value = Y;
            userDateM.value = M;
            userDateD.value = D;
            let[h,m] = time.split(":")
            userTimeH.value = h;
            userTimeM.value = m;
        }
    })
    const config = {
        enableTime: true,            // 啟用時間選擇
        dateFormat: 'Y-m-d H:i',     // 顯示格式
        minTime:'09:00',
        maxTime:'20:00',
        minDate: 'today',
        allowInput: false,           // 不讓使用者直接輸入
        placeholder:"請選擇日期",
        time_24hr: true,
        disableMobile: true,
        disable: [
            new Date(),
            function(date) {
            // 禁用每週的星期一
            return date.getDay() === 6 || date.getDay() === 0 ; // 1 代表星期一
            }
        ]
    }
    const clearClick = ()=>{
        userName.value = "";
        userPhoneNumber.value ="";
        userNumber.value= "";
        userInputData.value =null;
        userDateY.value = "";
        userDateM.value = "";
        userDateD.value = "";
        userTimeH.value = "";
        userTimeM.value = "";
        userRemark.value = "";
    }
</script>
<template>
    <div id="reserve" class="reserveDiv">
        <h2>開始預約</h2>
        <div class="reserveList">
            <form action="" @submit.prevent="submitReserve" class="reserveGrid">
                <div class="reserveInput inputBox1">
                    <label for="entry.1780283652">名稱</label>
                    <input type="text" name="entry.1780283652" id="userName" v-model = "userName" required >
                </div>
                <div class="reserveInput inputBox2">
                    <label for="entry.1572574824">電話號碼</label>
                    <input type="tel" name="entry.1572574824" id="userPhoneNumber" @input="onInput" v-model="userPhoneNumber" maxlength="10" required>
                </div>
                <div class="reserveInput inputBox3">
                    <label for="userNumber">預約人數</label>
                    <input type="number" name="userNumber" id="userNumber" v-model="userNumber" min="1" max="15" required>
                </div>
                <div class="reserveInput inputBox4">
                    <label for="">預約時間</label>
                    <flat-pickr v-model="userInputData" :config="config" required/>
                </div>
                <div class="reserveInput inputBox5">
                    <label for="remark">備註</label>
                    <textarea name="remark" id="" v-model="userRemark"></textarea>
                </div>
                <div class="reserveButtonDiv inputBox6">
                    <button type="submit">提交</button>
                    <button type="button" @click="clearClick">清除</button>
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
        width: 90%;
    }
    .reserveButtonDiv button{
        width: 40%;
        border-radius: 8px;
        padding: 1rem;
        transition: all 0.3s;
    }
    .reserveButtonDiv button:hover{
        opacity: 0.7;
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
    .inputBox6{
        grid-column: 1/3;
        grid-row:4/5
    }
    label{
        width: 90%;
        text-align: left;
        margin: 0 0 4px 0;
    }
    input{
        background-color: var(--color-1);
        padding: 1rem;
        width: 90%;
        border-radius: 8px;
        color: var(--text-color);
    }
    textarea{
        width: 95%;
        height: 90%;
        padding: 1rem;
        border-radius: 8px;
        background-color: var(--color-1);
        color: var(--text-color);
    }
    textarea::placeholder{
        color: var(--text-color);
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
        .inputBox6{
            grid-column: 1/2;
            grid-row:6/7
        }
        textarea{
            width: 90%;
        }
    }
</style>