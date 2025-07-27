<script setup lang="ts">
    const copyrightDate = new Date().getFullYear();
</script>

<template>
    <footer>
        <span>&copy; {{ copyrightDate }} Julien A. Chambers, All rights reserved.</span>
    </footer>
</template>

<style scoped>
    footer {
        background-color: var(--color-accent-bg);
        padding: var(--base-padding);
        border-top: thick solid var(--color-accent);
        text-align: center;
    }

    footer > span {
        font-size: 0.8rem;
        font-style: italic;
    }
</style>
