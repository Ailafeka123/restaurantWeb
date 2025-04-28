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
        // 初始化地圖，這裡用台北的經緯度
        console.log("地圖初始化")
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
            // content:"隨便餐廳"
        })
        // 建立訊息視窗（InfoWindow）
        const infoWindow = new google.maps.InfoWindow({
            content: "<a style='color:black' href='https://maps.app.goo.gl/AxNZAgazbKVFoAbn7'><h3>隨便餐廳</h3><p style='color:black'>這是測試用位置</p><a>"
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
        <div id="map" class="googleMapDIv" style="width: 100%; height: 600px;"></div>
        <a class="MapButton" href='https://maps.app.goo.gl/AxNZAgazbKVFoAbn7'>前往地圖</a>
    </div>
</template>
<style>
    .mapIfram{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 3rem;
        width: 80%;
        height: max(1000px,100vh);
    }
    .googleMapDIv{
        color: black;
    }
    .MapButton{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 20%;
        border-radius: 100px;
        font-size: 5vw;
        text-align: center;
        background-color: #fff;
        color: black;
        box-shadow: 10px 10px;
    }
    .MapButton:hover{
        background-color:#c9bfbf;
        box-shadow: 5px 5px;
    }
    @media (max-width:768px){
        .mapIfram{
            width: 100%;
        }
        .MapButton{
            width: 80%;
            font-size: max(5vw, 2rem);
        }
    }
</style>