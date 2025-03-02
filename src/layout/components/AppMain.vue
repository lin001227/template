<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script setup>
  const route = useRoute();
</script>

<style lang="scss" scoped>
  // .app-main {
  //   /* 50= navbar  50  */
  //   // min-height: calc(100vh - 230px);
  //   width: 100%;
  //   position: relative;
  //   overflow: hidden;
  //   height:calc( 100% - 52px );
  // }
  .app-main {
    flex: auto;
    min-height: 0;
    height: 100%;
  }
</style>
