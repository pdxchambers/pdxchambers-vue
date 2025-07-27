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
  <div class="project-card">
    <img :src="computedLink" :alt="props.name" class="project-image" />
    <h3 class="project-title">{{ props.name }}</h3>
    <p class="project-description">{{ props.description }}</p>
    <div class="project-links">
      <a v-if="props.link !==''" :href="props.link" target="_blank" rel="noopener noreferrer" class="project-link">
        Live Demo
      </a>
      <a v-if="props.githubUrl !== ''" :href="props.githubUrl" target="_blank" rel="noopener noreferrer" class="project-github-link">
        GitHub Repository
      </a>
    </div>

  </div>
</template>

<style scoped>
  .project-card {
    background-color: var(--color-accent-bg);
    border: thin solid var(--color-accent);
    border-radius: var(--base-border-radius);
    margin: 1rem 0;
    padding: var(--base-padding);
  }
  .project-image {
    max-width: 100%;
  }
  .project-links {
    display: flex;
    justify-content: space-between;
  }
  .project-links a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: var(--base-border-radius);
    border: thin solid var(--color-accent);
    margin-top: var(--base-margin);
  }
</style>
