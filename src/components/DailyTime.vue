<script setup lang="ts">
import { ref, watch } from 'vue'
import TimeInput from './TimeInput.vue'
import TimeTotal from './TimeTotal.vue'
import { getTimeTotal, handleInititalTime } from '@/utils/time'

defineProps(['id'])

const firstEntrance = ref(handleInititalTime(9))
const firstExit = ref(handleInititalTime(12))
const secondEntrance = ref(handleInititalTime(13))
const secondExit = ref(handleInititalTime(18))
const total = ref(
  getTimeTotal(firstEntrance.value, firstExit.value, secondEntrance.value, secondExit.value)
)

watch([firstEntrance, firstExit, secondEntrance, secondExit], () => {
  const totalTime = getTimeTotal(
    firstEntrance.value,
    firstExit.value,
    secondEntrance.value,
    secondExit.value
  )

  total.value = `${totalTime}`
})
</script>

<template>
  <div class="row">
    <TimeInput :id="`firstEntrance-${id}`" label="1ª entrada" v-model="firstEntrance" />
    <TimeInput :id="`firstExit-${id}`" label="1ª saída" v-model="firstExit" />
    <TimeInput :id="`secondEntrance-${id}`" label="2ª entrada" v-model="secondEntrance" />
    <TimeInput :id="`secondExit-${id}`" label="2ª saída" v-model="secondExit" />

    <TimeTotal :total="total" />
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  gap: 16px;
  align-items: center;
  max-width: 1040px;
  margin: 0 auto;
}
</style>
