<script setup lang="ts">
defineProps(['label', 'id'])

const model = defineModel<Date>()
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <DatePicker v-model="model" :inputId="id" fluid timeOnly />
  </div>
</template>

<style lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--p-emerald-300);
  width: 100%;
}
</style>
