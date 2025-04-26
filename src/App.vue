<script setup>
  import HeaderNavbar from './components/HeaderComponents/HeaderNavbar.vue';
  import Preview from './components/MainComponent/Preview.vue';
  import News from './components/MainComponent/News.vue';
</script>

<template>
  <loading>

  </loading>
  <header>
    <HeaderNavbar/>
  </header>

  <main>
    <Preview/>
    <News/>
  </main>
</template>

