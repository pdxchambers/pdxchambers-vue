<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  id: string
}>()

</script>

<template>
    <nav :id="props.id" class="navigation">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/resume">Resume</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
      </ul>
    </nav>
</template>

<style lang="less" scoped>
  ul {
    background-color: var(--color-accent-bg);
    list-style-type: none;
    padding: 0;
    width: 100%;
    @media (min-width: 768px) {
      width: 100%;
    }
  }

  li {
    background-color: var(--color-accent-bg);
    border-bottom: thin solid var(--color-accent);
    padding: 0.5rem;
    margin-top: 0.1rem;
    width: 100%;
    @media (min-width: 992px) {
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-text);
  }
</style>
