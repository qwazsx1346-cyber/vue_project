<script setup>
import { globalState } from './globalState';
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in globalState" :to="`/${item}`" :key="item">
      {{ item }}</router-link>

      <!--
      <router-link to="/component">컴포넌트</router-link>
      <router-link to="/Page98">Page98</router-link>
      <router-link to="/Page103">Page103</router-link>
      <router-link to="/Page108">Page108</router-link>
      <router-link to="/Page110">Page110</router-link>
      <router-link to="/Mission01">Mission01</router-link>
      -->
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
nav > a { display: inline-block;}
</style>