<script setup>
    console.log("Header is loading");
</script>
<template>
    <nav >
        <ul class="headerNav">
            <li><a href="#">關於我們</a></li>
            <li><a href="#News">最新消息</a></li>
            <li>餐點</li>
            <li>位置</li>
            <li>預約</li>
        </ul>
    </nav>
</template>
<style>
    .headerNav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
</style>