<script setup>
    import { ref,onMounted ,watch } from 'vue';
    const MenuList = ref([])
    onMounted(()=>{
        MenuList.value=[
        {name:"喔喔",price:20},
        {name:"恩恩",price:20},
        {name:"隨便",price:35},
        {name:"都行",price:35},
        {name:"你選",price:40},
        {name:"都可以",price:50},
        {name:"我都行",price:50},
        {name:"聽你的",price:50},
        {name:"你選吧",price:60},
        {name:"你說吧",price:60},
        {name:"隨便吧",price:60},
        {name:"你點吧",price:70},
        {name:"不知道",price:100}
    ]
    })
    const showList = ref([])
    watch(MenuList,()=>{
        for(let i = 0; i < MenuList.value.length ; i+=2){
            if(i+1 < MenuList.value.length){
                showList.value.push({name1:MenuList.value[i].name,
                    name2:MenuList.value[i+1].name,
                    price1:MenuList.value[i].price,
                    price2:MenuList.value[i+1].price
                })
            }else{
                showList.value.push({name1:MenuList.value[i].name,
                    price1:MenuList.value[i].price
                })
            }
            
        }
        console.log(showList.value)
    })
</script>
<template>
    <div id="menuList" class="menuList">
        <h2>菜單</h2>
        <table class="menuTable">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>價格</th>
                    <th>名稱</th>
                    <th>價格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(index,key) in showList" :key = "key">
                    <td>{{index.name1}}</td>
                    <td>{{index.price1}}元</td>
                    <td v-if="index.name2">{{ index.name2 }}</td>
                    <td v-else></td>
                    <td v-if="index.price2">{{ index.price2 }}元</td>
                    <td v-else></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
    .menuList{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: min(1000px,100vh);
        gap: 1rem;
    }
    .menuTable{
        width: 80%;
        height: 80%;
        border: 2px solid var(--text-color);
        border-collapse: collapse;
        border-radius: 8%;
        /* table-layout:20% 30%; */
        
    }
    tr, td{
        text-align: center;
        gap: 1rem;
        background-color: #832525;
        border: 2px solid var(--text-color);
        border-width: 1px 0;
    }
    th:nth-child(even){
        width: 20%;
        background-color: #b44a4a;
    }
    td:nth-child(even){
        width: 20%;
        background-color: #b44a4a;
    }
</style>