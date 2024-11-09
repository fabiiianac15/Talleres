<!-- ImageHover.vue -->
<template>
  <div class="image-container">
    <img
      :src="currentImage"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      alt="Imagen interactiva"
      class="hover-image"
    >
  </div>
</template>

<script>
export default {
  name: 'ImageHover',
  data() {
    return {
      defaultImage: 'https://www.cbr.com/wp-content/uploads/2019/12/mirio-face.jpg',
      alternateImage: 'https://www.nahsvikingsaga.org/wp-content/uploads/2020/11/DEKU.png',
      currentImage: 'https://www.cbr.com/wp-content/uploads/2019/12/mirio-face.jpg'
    }
  },
  methods: {
    handleMouseEnter() {
      this.currentImage = this.alternateImage
    },
    handleMouseLeave() {
      this.currentImage = this.defaultImage
    }
  }
}
</script>

<style scoped>
.hover-image {
  max-width: 300px;
  transition: all 0.3s ease;
}
</style>
