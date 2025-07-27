<script setup lang="ts">
const props = defineProps<{
  navId: string
}>()

const toggleNav = () => {
  const nav = document.getElementById(props.navId)
  if (nav) {
    nav.classList.toggle('hidden')
  }
}
</script>

<template>
  <font-awesome-icon :icon="['fas', 'bars']" @click="toggleNav"></font-awesome-icon>
</template>
