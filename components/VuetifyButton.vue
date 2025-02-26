<template>
  <div :class="className">{{ text }}</div>
  <div>{{ label }} 2</div>
</template>
<script setup lang="ts">
defineProps({
  text: { type: String, default: '' },
});

const className = ref('container');
const label = ref('3');
</script>

<style scoped lang="scss"></style>
