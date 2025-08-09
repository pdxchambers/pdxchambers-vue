<script lang="ts" setup>
  const props = defineProps<{
    id: string
    companyName: string
    companyLocation: string
    startDate: string
    endDate: string
    position: string
    description: string
    achievements: Array<string>
  }>();
</script>

<template>
  <div :id class="position">
    <div class="position__header">
      <h3>{{ props.position }}</h3>
      <p class="position__companyName">{{ props.companyName }} - {{ props.companyLocation }}</p>
      <p class="position__tenure">{{ props.startDate }} - {{ props.endDate }}</p>
    </div>
    <div>
      <p>{{ props.description }}</p>
      <ul>
        <li v-for="(achievement, index) in props.achievements" :key="index">{{ achievement }}</li>
      </ul>
      </div>
  </div>
</template>

<style lang="less" scoped>
  .position {
    border-bottom: thin solid var(--color-accent);
    padding-bottom: var(--base-padding);

    &__header {
      border-bottom: thin solid var(--color-accent);
      margin: var(--base-margin) 0;
      padding-bottom: var(--base-padding);
    }

    &__companName {
      font-style: italic;
    }

    &__tenure {
      text-align: right;
      font-weight: bold;
    }
  }
</style>
