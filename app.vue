<template>
  <div :class="$style.container">
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
// TODO 참고 후 삭제한다.
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
console.log('🍍Pinia store. Count:', counterStore.count)
</script>

<style module lang="scss">
.container {
  background-color: #00DC82;
  padding: 0.5rem;
}
</style>
