<script setup lang="ts">
    const copyrightDate = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <span class="footer__copyright">&copy; {{ copyrightDate }} Julien A. Chambers, All rights reserved.</span>
    </footer>
</template>

<style lang="less" scoped>
    .footer {
      background-color: var(--color-accent-bg);
      padding: var(--base-padding);
      border-top: thick solid var(--color-accent);
      text-align: center;
      &__copyright {
        font-size: 0.8rem;
        font-style: italic;
      }
    }
</style>
