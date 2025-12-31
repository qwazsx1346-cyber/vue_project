<script setup>
import { reactive } from 'vue';

//객체안에 속성 form이 있고 form은 또 속성 id와 pw를 가지고있음
const state = reactive ({
form : {
    id: '',
    pw: ''
    } //문자열도 사실 객체다.
});

const login = () => {
    //예외처리
    if(state.form.id.length === 0 || !state.form.pw ) {
        // .을 찍을 수 있는건 객체주소값을 받을 수있는 공간
        alert('아이디/비밀번호를 확인해 주세요.');
        return;
    }
    alert(`${state.form.id}님 환영합니다!`) ; //void메소드이다. 혼자 덩그러니 있기때문
}
</script>

<template>
<h3>Page125.vue</h3>
<!-- prevent 막는다. 원래 submit에서 하는 작업(action과 method | action="abc", method="get")을 막는다. -->

<form @submit.prevent="login" >
    <input type="text" placeholder="아이디" v-model="state.form.id">
    <input type="password" placeholder="패스워드" v-model="state.form.pw">
    <button>로그인</button>
</form>

</template>

<style scoped>

</style>