<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <MainHeader
    title="Julien A. Chambers"
    subtitle="Full-Stack Software Engineer"
    logoAlt="PDXChambers"
  />

  <RouterView />
  <MainFooter />
</template>
