<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CtaBanner from './CtaBanner.vue';
import CharacterWidget from '@/widgets/worldofwarcraft/CharacterWidget.vue';
import BlueskyWidget from '@/widgets/bluesky/BlueskyWidget.vue';
import { fetchCharacterData, type characterData, getWowRealmStatus, type realmData } from '../widgets/worldofwarcraft/lib/authorization';
import realmUp from '../assets/realm-status-up.png';
import realmDown from '../assets/realm-status-down.png';
import wowCamp from '../assets/WoW-campsite.png';
import data from './scaffold/MainContent.json';

const WowCharacter = ref<characterData[]>([]);
const realmStatus = ref<realmData>({ id: 0, name: '', status: '' });

const characterList = [
  { name: 'meshonah', realm: 'senjin' },
  { name: 'thaelisa', realm: 'senjin' },
  { name: 'vordix', realm: 'senjin' },
  { name: 'tinybob', realm: 'senjin' },
  { name: 'aur', realm: 'senjin' },
  { name: 'mersias', realm: 'senjin' }

];

onMounted(async () => {
  const fetchedCharacter = await Promise.all(
    characterList.map(
      c => fetchCharacterData(c.name, c.realm)
    )
  )
  WowCharacter.value = fetchedCharacter.filter(Boolean);

  const status = getWowRealmStatus();
  status.then((data) => {
    realmStatus.value = data;
  }).catch((error) => {
    console.error('Error fetching realm status:', error);
  });
});

</script>

<template>
  <div class="main">
    <div class="main__hero">
      <h2 class="main__hero--title">{{data.hero.title}}</h2>
      <p class="main__hero--description">
        {{data.hero.description}}
      </p>
    </div>

    <div class="main__introduction">
      <div class="main__introduction--image"></div>
      <p class="main__introduction--copy">
        {{data.copy}}
      </p>
    </div>


    <div class="main__ctas">
      <CtaBanner id="treehouse-cta" class="main__ctas--treehouse" imgSrc="TreehouseBanner.png" imgAlt="Treehouse Logo"
        link="https://www.teamtreehouse.com/?via=julien" text="Learn with Treehouse" />
      <CtaBanner id="github-cta" class="main__ctas--github" imgSrc="GitHubBanner.png" imgAlt="GitHub Logo" link="https://github.com/pdxchambers"
        text="View My GitHub" />
    </div>

    <div class="main__widgets">
      <div class="main__widgets--bluesky">
        <Suspense>
          <BlueskyWidget />
        </Suspense>
      </div>

      <div class="main__widgets--divider">
        <img :src="wowCamp" alt="World of Warcraft Campsite" class="wow-camp" />
      </div>

      <div class="main__widgets--wowList">
        <div class="main__widgets--wowList__header">
          <h2 class="main__widgets--wowList__header--title">World of Warcraft</h2>
          <div class="main__widgets--wowList__status">
            <h3>{{ realmStatus.name }} realm status:</h3>
            <div class="main__widgets--wowList__status-block">
              <span class="main__widgets--wowList__status-text">{{ realmStatus.status }}</span>
              <img v-if="realmStatus.status.toLowerCase() === 'up'" :src="realmUp" alt="Realm Down" class="main__widgets--wowList__statusIcon" />
              <img v-else :src="realmDown" alt="Realm Down" class="main__widgets--wowList__statusIcon" />
            </div>
          </div>
        </div>
        <h3>My top 6 played toons:</h3>
        <div class="main__widgets--wowList__wowCharacters">
          <CharacterWidget v-for="(toon, id) in WowCharacter" v-bind:key="id" :character="toon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  max-width: var(--base-max-width);
  &__hero {
    background-image: url('../assets/developer.jpg');
    background-size: cover;
    background-position: center;
    border-bottom: thin solid var(--color-accent);
    grid-area: home;
    margin: 0 auto;
    padding: var(--base-padding);
    &--title {
      color: var(--color-text);
      font-size: 3rem;
      font-weight: bold;
      text-align: center;
      @media(min-width: 768px) {
        border-right: thick solid var(--color-accent);
      }
    }
    &--description {
      border-top: thin solid var(--color-accent);
      font-size: 1.25rem;
      text-align: center;
      margin-top: 1rem;
      @media(min-width: 768px) {
        border-top: none;
        padding: 2rem;
      }
    }
    @media (min-width: 768px) {

      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    }
  }

  &__introduction {
    display: grid;
    grid-template-areas:
      "introImage"
      "introCopy";
    grid-column-gap: var(--base-gap);
    align-items: stretch;
    background-color: #fff;
    color: var(--color-accent-bg);
    grid-area: introduction;
    padding: var(--base-padding);
    &--image {
      grid-area: introImage;
      width: 100%;
      height: 200px;
      background-image: url('../assets/me2.jpg');
      background-size: cover;
      background-position: center;
      margin: 0 auto;
      border-radius: var(--base-border-radius);
      margin-bottom: var(--base-margin);
    }
    &--copy {
      grid-area: introCopy;
      line-height: var(--base-line-height);
    }
    @media(min-width: 768px) {
      grid-template-areas:
        "introImage introCopy";
      grid-template-columns: 1fr 2fr;
      &--image {
        width: 100%;
        height: auto;
        margin: 0;
      }
    }
  }

  &__widgets {
    background-color: var(--color-accent-bg);
    border-top: thin solid var(--color-accent);
    border-bottom: thin solid var(--color-accent);
    display: grid;
    grid-area: widgets;
    grid-template-areas:
      "bluesky"
      "divider"
      "wow";
    gap: var(--base-gap);
    align-items: stretch;
    padding: var(--base-padding);
    margin: 0 auto;
    width: 100%;

    &--bluesky {
      grid-area: bluesky;
      max-width: 100%;
    }

    &--divider {
      grid-area: divider;
      max-width: 300px;
      margin: 0 auto;
      padding: var(--base-padding);
      img {
        width: 100%;
      }
      @media (min-width: 576px) {
        display: none;
      }

      @media (min-width: 992px) {
        display: block;
      }
    }

    &--wowList {
      background-color: var(--color-accent-bg);
      grid-area: wow;
      margin: 0 auto;
      padding: var(--base-padding);
      border-radius: var(--base-border-radius);
      &__header{
        &--title {
          text-align: center;
          border-bottom: thin solid var(--color-accent);
        }
      }
      &__status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: var(--base-margin);
      }
      &__status-block {
        display: flex;
        align-items: center;
        font-size: 24px;
      }
      &__statusIcon {
        width: 24px;
        height: 24px;
      }
      &__wowCharacters {
        max-height: 157px;
        overflow-y: scroll;
        @media (min-width: 768px) {
          max-height: 190px;
        }
      }
    }

  @media (min-width: 576px) {
    grid-template-areas:
      "wow bluesky";
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-areas:
    "wow divider bluesky";
  }
}

&__ctas {
  background-color: var(--color-accent);
  display: grid;
  justify-content: center;
  grid-area: ctas;
  grid-template-areas:
    "treehouse github";
  grid-template-columns: 1fr 1fr;
  gap: var(--base-gap);
  padding: var(--base-padding);
  &--treehouse {
    grid-area: treehouse;
  }

  &--github {
    grid-area: github;
  }
  @media (min-width: 575px) {
    display: grid;
    grid-template-areas:
      "treehouse"
      "github";
    grid-template-columns: 1fr;
  }
}
  @media (min-width: 576px) {
    display: grid;
    grid-template-areas:
      "home home"
      "introduction ctas"
      "widgets widgets";
    grid-template-columns: 2fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-areas:
      "home home"
      "introduction ctas"
      "widgets widgets";
  }
}
</style>
