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
  <div class="cta-banner" :id>
    <a :href="link"><img :src="computedLink" :alt="props.imgAlt" class="cta-image" /></a>
  </div>
</template>

<style scoped>
  .cta-banner {
    border-radius: var(--base-border-radius);
    border: thin solid var(--color-accent);
    display: grid;
    grid-template-areas:
      "image"
      "text";
    place-items: center;
    width: 100%;
    margin: var(--base-margin) 0;
  }

  .cta-image {
    grid-area: image;
    width: 100%;
    border-radius: 0.25rem;
  }
  .cta-text {
    grid-area: text;
    text-align: center;
    font-size: 1.25rem;
  }
  .cta-text a {
    color: var(--color-accent-text);
    text-decoration: none;
    font-weight: bold;
  }
</style>
