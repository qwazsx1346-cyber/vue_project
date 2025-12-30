<script setup>
import { computed, onMounted, reactive, ref } from 'vue'; //vue는 변수,상수, 함수를 리턴함
import axios from 'axios'; //axios는 객체 주소값을 리턴함

const state = reactive({
    imgList: []
})

const currenPage = ref(0)

onMounted( () => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
          .then( res => state.imgList = res.data ); //promise객체가 넘어오기때문에 .then을 쓸 수 있음
});

const grouped = computed (() => {
  const map = {}
  state.imgList.forEach(item => {
    if(!map[item.id]) map[item.id] = []
    map[item.id].push(item)
  })
  return Object.values(map)
})

const pageImages = computed(() => {
  return grouped.value[currenPage.value] || []
})
</script>

<template>
<h3>Page126.vue</h3>

<img v-for="item in pageImages" :key="item.id" 
  :src="item.download_url"
  class="thumb"
  >
<button @click="currenPage--" :disabled="currenPage === 0">이전</button>
<button @click="currenPage++" :disabled="currenPage >= grouped.length - 1">다음</button>


</template>

<style scoped>
.thumb {
  width: 10%;
  height: 10%;
}
</style>