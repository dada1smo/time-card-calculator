<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import { ref, watch } from 'vue'
import TimeInput from './TimeInput.vue'
import TimeTotal from './TimeTotal.vue'
import { getTimeTotal, handleInititalTime } from '@/utils/time'

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
    <TimeInput id="firstEntrance" label="1ª entrada">
      <DatePicker v-model="firstEntrance" inputId="firstExist" fluid timeOnly />
    </TimeInput>

    <TimeInput id="firstExit" label="1ª saída">
      <DatePicker v-model="firstExit" inputId="firstEntrance" label="1a entrada" fluid timeOnly />
    </TimeInput>

    <TimeInput id="secondEntrance" label="2ª entrada">
      <DatePicker
        v-model="secondEntrance"
        inputId="secondEntrance"
        label="1a entrada"
        fluid
        timeOnly
      />
    </TimeInput>

    <TimeInput id="secondExit" label="2ª saída">
      <DatePicker v-model="secondExit" inputId="secondExit" label="1a entrada" fluid timeOnly />
    </TimeInput>

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
