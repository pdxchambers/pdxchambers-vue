<script setup lang="ts">
import { ref } from 'vue'
import siteLogo from '@/assets/SP-Studio.png'
import SiteNav from './SiteNav.vue'
import data from './scaffold/MainContent.json'

const navVisible = window.innerWidth >= 992 ? ref(true) : ref(false)

const toggleNav = () => {
  if (window.innerWidth >= 992) {
    return
  }
  navVisible.value = !navVisible.value
}

const headerData = {
  title: data.header.title,
  subtitle: data.header.subtitle,
  logoAlt: data.header.logoAlt
}
</script>

<template>
  <header class="header">
    <img :src="siteLogo" :alt="headerData.logoAlt" class="header__logo" />
    <div class="header__title">
      <h1>{{ headerData.title }}</h1>
      <span>{{ headerData.subtitle }}</span>
    </div>
    <div class="header__social">
      <ul>
        <li class="header__socialIcon"><a href="https://bsky.app/profile/pdxchambers.com"><font-awesome-icon :icon="['fab', 'bluesky']"></font-awesome-icon></a></li>
        <li class="header__socialIcon"><a href="www.linkedin.com/in/julienchambers"><font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon></a></li>
        <!-- li class="header__socialIcon"><a href="https://github.com/pdxchambers"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></a></li -->
      </ul>
    </div>
    <button @click="toggleNav" aria-label="Toggle Navigation" class="header__navToggle">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </header>
  <SiteNav v-if="navVisible" id="HeaderNav" class="navigation" />
</template>

<style lang="less" scoped>
.header {
  display: grid;
  grid-template-areas:
    "logo title nav"
    "logo title nav"
    "social social social";
  padding: var(--base-padding);
  align-content: center;
  background-color: var(--color-accent-bg);
  border-bottom: thick solid var(--color-accent);
  position: relative;
  &__title {
    grid-area: title;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 1.5rem;
      margin: 0;
    }
  }
  &__logo {
    grid-area: logo;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    vertical-align: middle;
  }
  &__social {
    grid-area: social;
    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      padding: 0;
      margin: 0;
      a {
        text-decoration: none;
        color: var(--color-text);
        font-size: 1.5rem;
      }
    }
  }
  &__navToggle {
    background-color:transparent;
    border: none;
    border-radius: 0.25rem;
    color: var(--color-accent-text);
    cursor: pointer;
    font-size: 1.5rem;
    grid-area: nav;

  }
  div {
    span {
      font-style: italic;
    }
  }
}

.navigation {
  grid-area: nav;
  background-color: var(--color-accent-bg);
  border-radius: 0.25rem;
  width: 100%;
  position: absolute;
  top: 75px;
  z-index: 10;
}



@media (min-width: 768px) {
  header {
    column-gap: 1rem;
    grid-template-columns: 100px 400px auto;
    grid-template-areas:
    "logo title social nav"
    "logo title social nav";
    position: static;
  }

  .header-title h1 {
    font-size: 2rem;

  }

  .social ul {
    display: block;
  }

  .social ul li {
    margin: .5rem 0;
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px;
  }

  .navigation {
    width: 25%;
    right: 2rem;
    top: 6rem;
  }
}

@media (min-width: 992px) {
  .header {
    column-gap: 1rem;;
    grid-template-columns: 100px 775px auto;
    grid-template-rows: auto;
    grid-template-areas:
      "logo title social"
      "nav nav nav";
    position: static;
  }

  .navigation {
    align-self: stretch;
    position: static;
    width: 100%;
  }

  .navToggle{
    display: none;
  }
}

</style>
