<script setup>
  import Loading from './components/LoadingComponent/Loading.vue';

  import HeaderNavbar from './components/HeaderComponents/HeaderNavbar.vue';
  import Preview from './components/MainComponent/Preview.vue';
  import News from './components/MainComponent/News.vue';
  import MenuList from './components/MainComponent/MenuList.vue';
  import MapIfram from './components/MainComponent/Map.vue';
  import reserve from './components/MainComponent/reserve.vue';

  import FooterComponent from './components/FooterComponents/Footer.vue';
  
  import 'flatpickr/dist/flatpickr.css'
  import { ref,onMounted} from 'vue';
  //loading
  const LoadingState = ref(true);
  const LoadingClass = ref("LoadingDiv")
  onMounted(()=>{
    setTimeout(()=>{
      LoadingClass.value = "LoadingDiv LoadingDone";
    },100)
    setTimeout(()=>{
      LoadingState.value = false
    },1000)
  })
  //loading End
  
</script>

<template>
  <Loading :classList ="LoadingClass"  v-if="LoadingState"/>
  <HeaderNavbar/>
  <main class="main">
    <Preview/>
    <News />
    <MenuList />
    <div class="mapAndReserve">
      <MapIfram />
      <reserve />

    </div>
  </main>
  <FooterComponent />
</template>

<style>
  .main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mapAndReserve{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    padding:3rem 0;
    gap: 1rem;
    
  }
  @media (min-width:768px){
    .mapAndReserve{
      flex-direction: row;
      min-height: 500px;
    }
  }
</style>

