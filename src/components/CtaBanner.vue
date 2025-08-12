<script setup lang="ts">
  const props = defineProps<{
    id: string
    imgSrc: string
    imgAlt: string
    text: string
    link: string
  }>()

  const computedLink = "/assets/" + props.imgSrc
</script>

<template>
  <div class="ctaBanner" :id>
    <a :href="link"><img :src="computedLink" :alt="props.imgAlt" class="ctaBanner__image" /></a>
  </div>
</template>

<style lang="less" scoped>
  .ctaBanner {
    display: grid;
    grid-template-areas:
      "image"
      "text";
    place-items: center;
    width: 100%;
    margin: var(--base-margin) 0;
    &__image {
      grid-area: image;
      width: 100%;
      border-radius: var(--base-border-radius);
      border: thin solid var(--color-accent);
    }
  }
</style>
