<script setup lang="ts">
import { type characterData } from './lib/authorization';

const props = defineProps<{
  character: characterData;
}>();


</script>

<template>
    <div class="widgets__wowList__character">
      <h2 class="widgets__wowList__character__name">{{ props.character?.name }}</h2>
      <span class="widgets__wowList__character__meta">Level {{ props.character?.level }} {{ props.character?.specialization }}
        {{ props.character?.class }}</span>
      <span class="widgets__wowList__character__gender">{{ props.character?.gender }} {{ props.character?.race }}</span>
      <img v-if="props.character?.faction.toLowerCase() == 'horde'" class="widgets__wowList__character__icon"
        src="@/assets/horde_crest.png" alt="Horde Logo" />
      <img v-else class="widgets__wowList__character__icon" src="@/assets/alliance_crest.png" alt="Alliance Logo" />
    </div>
</template>

<style lang="less" scoped>
.widgets{
  &__wowList {
    &__character {
      display: grid;
      grid-template-areas:
        "name icon"
        "meta meta"
        "gender gender";
      background-color: var(--color-accent-bg);
      border: thin solid var(--color-accent);
      border-radius: var(--base-border-radius);
      padding: var(--base-padding);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 300px;
      margin: var(--base-margin) auto;
      &__name {
        grid-area: name;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color-accent-text);
      }

      &__meta {
        grid-area: meta;
        font-size: 1rem;
        color: var(--color-text-secondary);
      }

      &__icon {
        grid-area: icon;
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin: .5rem auto;
      }
    }
  }
}
</style>
