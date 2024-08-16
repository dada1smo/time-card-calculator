<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <div class="panel">
    <div class="controls">
      <Logo />
      <Button severity="contrast" icon="pi pi-refresh" outlined />
    </div>
    <Divider />
    <div class="content">
      <DailyTime />
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  background-color: var(--p-zinc-800);
  height: auto;
  padding: 20px 0 16px;
  border: 1px solid var(--p-zinc-700);
  border-radius: var(--p-border-radius-md);
}

.controls {
  padding: 0 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.content {
  padding: 8px 16px 0;
}
</style>
