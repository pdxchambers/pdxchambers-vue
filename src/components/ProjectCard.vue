<script setup lang="ts">
  const props = defineProps<{
    name: string
    description: string
    imageUrl: string
    link: string
    githubUrl: string
  }>()
  const computedLink = "src/assets/projectImages/" + props.imageUrl
</script>

<template>
  <div class="projectCard">
    <img :src="computedLink" :alt="props.name" class="projectCard__image" />
    <h3 class="projectCard__title">{{ props.name }}</h3>
    <p class="projectCard__description">{{ props.description }}</p>
    <div class="projectCard__links">
      <a v-if="props.link !==''" :href="props.link" target="_blank" rel="noopener noreferrer" class="projectCard__links--link">
        Live Demo
      </a>
      <a v-if="props.githubUrl !== ''" :href="props.githubUrl" target="_blank" rel="noopener noreferrer" class="projectCard__links--link">
        GitHub Repository
      </a>
    </div>

  </div>
</template>

<style lang="less" scoped>
  .projectCard {
    background-color: var(--color-accent-bg);
    border: thin solid var(--color-accent);
    border-radius: var(--base-border-radius);
    margin: 1rem 0;
    padding: var(--base-padding);
    &__image {
      max-width: 100%;
    }
    &__links {
      display: flex;
      justify-content: space-between;
      &--link {
        color: var(--color-text);
        text-decoration: none;
        padding: 0.5rem;
        border-radius: var(--base-border-radius);
        border: thin solid var(--color-accent);
        margin-top: var(--base-margin);
      }
    }
  }
</style>
