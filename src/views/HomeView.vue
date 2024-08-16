<script setup lang="ts">
import DailyTime from '../components/DailyTime.vue'
import ControlPanel from '../components/ControlPanel.vue'
</script>

<template>
  <main>
    <ControlPanel />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
