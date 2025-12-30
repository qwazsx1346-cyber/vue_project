<script setup>
import { reactive } from 'vue';

const state = reactive ( {
  pushUp: 0,
  sitUp: 0
});
const increasePushUp = () => state.pushUp++ ;
const increaseSithUp = () => state.sitUp++ ;

</script>

<template>
<h3>Page114.vue</h3>
<hr>
<div>팔 굽혀 펴기: {{ state.pushUp }}</div>
<div>윗몸 일으키기: {{ state.sitUp }}</div>
<hr>
<br>
<button @click="increasePushUp">팔 굽혀 펴기 증가</button>
<button @click="increaseSithUp">윗몸 일으키기 증가</button>
</template>

<style scoped>

</style>