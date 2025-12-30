<script setup>
import { onMounted, reactive } from 'vue'; //vue는 변수,상수, 함수를 리턴함
import axios from 'axios'; //axios는 객체 주소값을 리턴함

const state = reactive({
    imgList: []
})

onMounted( () => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
          .then( res => state.imgList = res.data ); //promise객체가 넘어오기때문에 .then을 쓸 수 있음
});

</script>

<template>
<h3>Page126.vue</h3>

<img v-for="item in state.imgList" :key="item.id" 
  :src="item.download_url"
  class="thumb"
  >

</template>

<style scoped>
.thumb {
  width: 10%;
  height: 10%;
}
</style>