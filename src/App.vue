<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
</template>
<script>
import Navbar from '@/components/NavBar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 99;
}

.fade-enter-from {
  transform: translateX(-100%);
  position: relative;
  z-index: 99;
}

</style>
