<script setup>
const routerList = [ 'component', 'page98', 'page103', 'page108', 'page110',
                    'mission01', 'page114', 'page118', 'page123', 'page125', 'page126'
                  ];
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in routerList" :to="`/${item}`" :key="item">
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