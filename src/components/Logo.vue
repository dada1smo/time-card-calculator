<template>
  <div class="row">
    <i class="pi pi-calculator"></i>
    <div class="logo">
      <div class="first">Calculadora</div>
      <div class="second">de ponto</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator {
  font-size: 2rem;
}

.row {
  display: flex;
  align-items: center;
  color: var(--p-zinc-600);
  gap: 8px;
}

.logo {
  display: flex;
  flex-direction: column;
}

.first {
  font-weight: 100;
  text-transform: uppercase;
  color: var(--p-zinc-400);
  letter-spacing: 2px;
}

.second {
  font-weight: 100;
  text-transform: uppercase;
  color: var(--p-zinc-400);
  letter-spacing: 2px;
}
</style>
