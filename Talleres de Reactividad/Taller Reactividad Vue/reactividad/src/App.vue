<template>
  <div class="app">
    <h1>Ejemplos de Reactividad en Vue.js</h1>

    <section>
      <h2>1. Contador</h2>
      <Counter />
    </section>

    <section>
      <h2>2. Transformación de Texto</h2>
      <TextTransform />
    </section>

    <section>
      <h2>3. Imagen Interactiva</h2>
      <ImageHover />
    </section>

    <section>
      <h2>4. Control de Tamaño de Texto</h2>
      <FontSizeControl />
    </section>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import TextTransform from './components/TextTransform.vue'
import ImageHover from './components/ImageHover.vue'
import FontSizeControl from './components/FontSizeControl.vue'

export default {
  name: 'App',
  components: {
    Counter,
    TextTransform,
    ImageHover,
    FontSizeControl
  }
}
</script>
