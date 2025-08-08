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
  }
  );


});

</script>

<template>
  <div id="main">
    <div class="hero">
      <h2>{{data.introduction.title}}</h2>
    </div>

    <div class="introduction">
      <p>
        {{data.introduction.description}}
      </p>
    </div>


    <div class="ctas">
      <CtaBanner id="treehouse-cta" class="ctas__treehouse" imgSrc="TreehouseBanner.png" imgAlt="Treehouse Logo"
        link="https://www.teamtreehouse.com/?via=julien" text="Learn with Treehouse" />
      <CtaBanner id="github-cta" class="ctas__github" imgSrc="GitHubBanner.png" imgAlt="GitHub Logo" link="https://github.com/pdxchambers"
        text="View My GitHub" />
    </div>

    <div class="widgets">
      <div class="widgets__bluesky">
        <Suspense>
          <BlueskyWidget />
        </Suspense>
      </div>

      <div class="widgets__divider">
        <img :src="wowCamp" alt="World of Warcraft Campsite" class="wow-camp" />
      </div>

      <div class="widgets__wowList">
        <div class="widgets__wowList__header">
          <h2 class="widgets__wowList__header--title">World of Warcraft</h2>
          <div class="widgets__wowList__status">
            <h3>{{ realmStatus.name }} realm status:</h3>
            <div class="widgets__wowList__status-block">
              <span class="widgets__wowList__status-text">{{ realmStatus.status }}</span>
              <img v-if="realmStatus.status.toLowerCase() === 'up'" :src="realmUp" alt="Realm Down" class="widgets__wowList__status-icon" />
              <img v-else :src="realmDown" alt="Realm Down" class="widgets__wowList__status-icon" />
            </div>
          </div>
        </div>
        <h3>My top 6 played toons:</h3>
        <div class="widgets__wowList__wowCharacters">
          <CharacterWidget v-for="(toon, id) in WowCharacter" v-bind:key="id" :character="toon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#main {
  .hero {
    background-image: url('../assets/developer.jpg');
    background-size: cover;
    background-position: center;
    grid-area: home;
    margin: 0 auto;
    padding: var(--base-padding);
    max-width: var(--content-max-width);
    h2 {
      color: var(--color-text);
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
    }
  }

  .introduction {
    grid-area: introduction;

    p {
      line-height: var(--base-line-height);
      padding: var(--base-padding);
    }
  }

  .widgets {
    display: grid;
    grid-area: widgets;
    grid-template-areas:
      "bluesky"
      "divider"
      "wow";
    gap: var(--base-gap);
    align-items: stretch;
    padding: var(--base-padding);
    max-width: var(--content-max-width);
    margin: 0 auto;

    &__bluesky {
      grid-area: bluesky;
      max-width: 100%;
    }

    &__divider {
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

    &__wowList {
      background-color: var(--color-accent-bg);
      grid-area: wow;
      max-width: 300px;
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
      &__status-icon {
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
  }

  @media (min-width: 768px) {
    background-color: var(--color-accent-bg);
    border-radius: var(--base-border-radius);
    border: thin solid var(--color-accent);
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
      grid-template-areas:
      "wow divider bluesky";
    }
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  grid-area: ctas;
  justify-content: space-evenly;
  &__treehouse {
    grid-area: treehouse;
    max-width: 33.33%
  }
  &__github {
    grid-area: github;
    max-width: 33.33%
  }

  @media (min-width: 768px) {
    &__treehouse,
    &__github {
      max-width: 200px;
    }
  }

  @media (min-width: 992px) {
      display: grid;
      grid-template-areas:
        "home home"
        "ctas ctas"
        "widgets widgets";
      grid-template-columns: 1fr 1fr;
      gap: var(--base-gap);
    }
  }
}
</style>
