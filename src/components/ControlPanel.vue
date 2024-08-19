<script setup lang="ts">
import { ref } from 'vue'
import Logo from './Logo.vue'

const items = ref([1])

function refresh() {
  items.value = [items.value[0] - 1]
}

function add() {
  items.value.push(items.value[items.value.length - 1] + 1)
}
</script>

<template>
  <div class="panel">
    <div class="header">
      <Logo />
      <div class="controls">
        <Button @click="add" severity="contrast" icon="pi pi-plus" outlined />
        <Divider layout="vertical" />
        <Button @click="refresh" severity="contrast" icon="pi pi-refresh" outlined />
      </div>
    </div>
    <Divider />
    <div class="content">
      <div class="item" v-for="item in items" :key="item">
        <div class="daily"><DailyTime :id="item" /></div>
        <Divider v-if="item !== items[items.length - 1]" />
      </div>
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

.header {
  padding: 0 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
}

.controls {
  display: flex;
  align-items: stretch;
  gap: 8px;
}

.content {
  display: flex;
  flex-direction: column;
}

.item {
  padding: 8px 0;

  .daily {
    padding: 0 16px 12px;
  }
}
</style>
