<!-- TextTransform.vue -->
<template>
  <div class="text-transform-container">
    <input
      v-model="text"
      @blur="transformText"
      type="text"
      placeholder="Escribe algo..."
      class="text-input"
    >
    <p class="transformed-text">Texto transformado: {{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TextTransform',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    transformText() {
      this.text = this.text.toUpperCase()
    }
  }
}
</script>

<style scoped>
.text-input {
  padding: 8px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}
</style>
