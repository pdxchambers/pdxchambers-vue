<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <Analytics />
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>
