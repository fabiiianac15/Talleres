<!-- FontSizeControl.vue -->
<template>
  <div class="font-size-control">
    <div class="buttons-container">
      <button
        @click="increaseFontSize"
        :disabled="fontSize >= maxSize"
        class="size-button increase"
      >
        Aumentar tamaño
      </button>
      <button
        @click="decreaseFontSize"
        :disabled="fontSize <= minSize"
        class="size-button decrease"
      >
        Disminuir tamaño
      </button>
    </div>
    <h1 :style="{ fontSize: fontSize + 'px' }" class="sample-text">
      Hola Como estan?
    </h1>
    <p class="size-info">Tamaño actual: {{ fontSize }}px</p>
  </div>
</template>

<script>
export default {
  name: 'FontSizeControl',
  data() {
    return {
      fontSize: 16,
      minSize: 16,
      maxSize: 32
    }
  },
  methods: {
    increaseFontSize() {
      if (this.fontSize < this.maxSize) {
        this.fontSize += 2
      }
    },
    decreaseFontSize() {
      if (this.fontSize > this.minSize) {
        this.fontSize -= 2
      }
    }
  }
}
</script>

<style scoped>
.font-size-control {
  padding: 20px;
}
.buttons-container {
  margin-bottom: 20px;
}
.size-button {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.increase {
  background-color: #4CAF50;
  color: white;
}
.decrease {
  background-color: #f44336;
  color: white;
}
.sample-text {
  transition: font-size 0.3s ease;
}
</style>
