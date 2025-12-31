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
});     //then 에게는 뒤에 소괄호안에있는 콜백함수 주소값을 보냄

const changeSizeUrl = item => {
  const width = parseInt(item.width * 0.1);
  const height = parseInt(item.height * 0.1);
  return `https://picsum.photos/id/${item.id}/${width}/${height}`;
}
</script>

<template>
<h3>Page126.vue</h3>

<div v-for="item in state.imgList" :key="item.id">
  <img
  :src="changeSizeUrl(item)"
  :alt="item.author"
  >
  <div>{{ item.author }}</div>
</div>

</template>

<style scoped>

</style>