<!-- Counter.vue -->
<template>
  <div class="counter-container">
    <button
      @click="increment"
      :disabled="isDisabled"
      class="increment-button"
    >
      Incrementar
    </button>
    <span class="counter-display">{{ count }}</span>
    <p class="increment-info">Incremento actual: {{ currentIncrement }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Counter',
  data() {
    return {
      count: 0,
      currentIncrement: 1,
      isDisabled: false
    }
  },
  methods: {
    increment() {
      this.count += this.currentIncrement

      // Actualizar el incremento basado en el valor actual
      if (this.count >= 10) {
        this.currentIncrement = 3
      } else if (this.count >= 5) {
        this.currentIncrement = 2
      }

      // Deshabilitar el botón al llegar a 100
      if (this.count >= 100) {
        this.isDisabled = true
      }
    }
  }
}
</script>

<style scoped>
.counter-container {
  padding: 20px;
}
.increment-button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.increment-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.counter-display {
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
}
</style>
