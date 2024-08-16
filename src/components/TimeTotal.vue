<script setup lang="ts">
defineProps(['total'])
</script>

<template>
  <div class="col">
    <span>Total</span>
    <h3>{{ total }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  h3 {
    font-size: 2rem;
  }

  span {
    color: var(--p-emerald-300);
  }
}
</style>
