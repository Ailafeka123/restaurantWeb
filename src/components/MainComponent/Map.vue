<script setup>
    import { ref,onMounted } from 'vue';
    onMounted(()=>{
        if (!window.google) {
            const script = document.createElement('script')
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcrZYuxybTbMR1rj8xIeAlYpkXXHfy_Qs&callback=initMap"
            script.async = true
            script.defer = true 
            document.head.appendChild(script)
        } else {
            initMap()
        }
    })
    window.initMap =  () =>{
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 25.105337, lng: 121.464154 },//中心位置
            zoom: 15,
            disableDefaultUI:true,
            draggable:false
        })
        // 在地圖上加一個標記（Marker）
        const marker = new google.maps.Marker({
            position: { lat: 25.105337, lng: 121.464154 }, // 這個標記的位置
            map: map, // 把標記加到地圖上
            title: "這是餐廳位置(假的)", // 當使用者滑鼠移到標記上會顯示的文字
        })
        const infoWindow = new google.maps.InfoWindow({
            content: "<a style='color:black' href='https://maps.app.goo.gl/AxNZAgazbKVFoAbn7'><h3>隨便餐廳</h3><p style='color:black'>點擊前往測試用位置</p><a>"
        })
        // 當標記被點擊時顯示訊息視窗
        marker.addListener("click", () => {
            infoWindow.open(map, marker)
        })
    }
</script>
<template>
    <div id="googleMap" class="mapIfram">
        <h2>位置</h2>
        <div id="map" class="googleMapDIv" style="width: 100%;"></div>
        <!-- <a class="MapButton" href='https://maps.app.goo.gl/AxNZAgazbKVFoAbn7'>前往地圖</a> -->
    </div>
</template>
<style>
    .mapIfram{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 3rem;
        width: 100%;
        height: max(500px,100vh);
        padding:0;
        
    }
    .googleMapDIv{
        width: 100%;
        height: 100%;
        color: black;
    }
    @media (min-width:768px){
        .mapIfram{
            width: 50%;
            padding:0 1rem;
        }
    }
</style>