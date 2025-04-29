<script setup>
  import Loading from './components/LoadingComponent/Loading.vue';

  import HeaderNavbar from './components/HeaderComponents/HeaderNavbar.vue';
  import Preview from './components/MainComponent/Preview.vue';
  import News from './components/MainComponent/News.vue';
  import MenuList from './components/MainComponent/MenuList.vue';
  import MapIfram from './components/MainComponent/Map.vue';
  import reserve from './components/MainComponent/reserve.vue';

  import FooterComponent from './components/FooterComponents/Footer.vue';

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
    <MapIfram />
    <reserve />
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
</style>

