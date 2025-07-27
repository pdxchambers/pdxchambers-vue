<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  const props = defineProps<{
    id: string
    label: string
    type?: 'button' | 'submit' | 'reset'
    icon?: string
    routePath: string
  }>()

  const clickHandler = () => {
    console.log(`Button ${props.id} clicked!`)
  }
</script>

<template>
  <RouterLink :id="id" :to="routePath" class="cta-link">
    <button

      :type="type || 'button'"
      class="cta-button"
      @click="clickHandler"
    >
      {{ icon }} {{ label }}
    </button>
  </RouterLink>
</template>

<style scoped>
.cta-button {
  background-color: var(--color-accent-bg);
  border: thin solid var(--color-accent);
  border-radius: 1.75rem;
  color: var(--color-accent-text);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}
</style>
