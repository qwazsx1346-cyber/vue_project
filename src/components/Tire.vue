<script setup>
// props 부모 컴포넌트로부터 데이터를 전달받고 싶을 때 사용 
const props = defineProps({
    color: String //props받고자 하는 속성의 타입까지 적어주면 됨
});
</script>

<template>
    <div :style="{ color: props.color }">{{ props.color || 'BLACK' }} TIRE</div>

    <div style="color: blue; background-color: black;">blue TIRE</div>
</template>