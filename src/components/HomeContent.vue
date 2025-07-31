<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HomeImage from '../assets/manWorking.png';
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
  <div class="home">
    <div class="home-img">
      <img :src="HomeImage" alt="Illustration of man working at computer." class="main-img" />
    </div>

    <div class="home-copy">
      <h2>{{data.introduction.title}}</h2>
      <p>
        {{data.introduction.description}}
      </p>
    </div>
  </div>

  <div class="home-ctas">
    <CtaBanner id="treehouse-cta" imgSrc="TreehouseBanner.png" imgAlt="Treehouse Logo"
      link="https://www.teamtreehouse.com/?via=julien" text="Learn with Treehouse" />
    <CtaBanner id="github-cta" imgSrc="GitHubBanner.png" imgAlt="GitHub Logo" link="https://github.com/pdxchambers"
      text="View My GitHub" />
  </div>

  <div class="home-widgets">
    <div class="bluesky-post">
      <Suspense>
        <BlueskyWidget />
      </Suspense>
    </div>

    <div class="widget_divider">
      <img :src="wowCamp" alt="World of Warcraft Campsite" class="wow-camp" />
    </div>

    <div class="wow-list">
      <div class="wow-list__header">
        <h2 class="wow-list__header--title">World of Warcraft</h2>
        <div class="wow-list__status">
          <h3>{{ realmStatus.name }} realm status:</h3>
          <div class="wow-list__status-block">
            <span class="wow-list__status-text">{{ realmStatus.status }}</span>
            <img v-if="realmStatus.status.toLowerCase() === 'up'" :src="realmUp" alt="Realm Down" class="wow-list__status-icon" />
            <img v-else :src="realmDown" alt="Realm Down" class="wow-list__status-icon" />
          </div>
        </div>
      </div>
      <h3>My top 6 played toons:</h3>
      <div class="wow-characters">
        <CharacterWidget v-for="(toon, id) in WowCharacter" v-bind:key="id" :character="toon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-areas:
    "home-img home-img"
    "home-copy home-copy";
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  padding: var(--base-padding);
  max-width: var(--content-max-width);
}

.home-img {
  grid-area: home-img;
  margin: 0 auto;
  width: 65%;
  text-align: center;
  border-radius: var(--base-border-radius);
}

.home-copy {
  grid-area: home-copy;
}

.home-copy h2 {
  font-size: 1.25rem;
  text-align: center;
}

.home-copy p {
  line-height: var(--base-line-height);
  padding: var(--base-padding);
}

.home-widgets {
  display: grid;
  grid-template-areas:
    "bluesky-post"
    "divider"
    "wow-list";
  gap: var(--base-gap);
  align-items: stretch;
  padding: var(--base-padding);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.bluesky-post {
  grid-area: bluesky-post;
  max-width: 100%;
}

.widget_divider {
  grid-area: divider;
  max-width: 300px;
  margin: 0 auto;
  padding: var(--base-padding);
}

.widget_divider > img {
  width: 100%;
}

.wow-list {
  background-color: var(--color-accent-bg);
  grid-area: wow-list;
  max-width: 300px;
  margin: 0 auto;
  padding: var(--base-padding);
  border-radius: var(--base-border-radius);
}

.wow-list__header--title {
  text-align: center;
  border-bottom: thin solid var(--color-accent);
}

.wow-list__status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--base-margin);
}

.wow-list__status-block {
  display: flex;
  align-items: center;
  font-size: 24px;
}
.wow-list__status-icon {
  width: 24px;
  height: 24px;
}

.wow-characters {
  max-height: 157px;
  overflow-y: scroll;
}

.home-ctas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.main-img {
  border-radius: 1rem;
  grid-area: logo-img;
  max-width: 100%;
  vertical-align: middle;
}

/* Grid areas */
#treehouse-cta {
  grid-area: treehouse;
  max-width: 33.33%
}

#github-cta {
  grid-area: github;
  max-width: 33.33%
}

/* Media Queries */
@media (min-width: 576px) {
  .home-widgets{
    grid-template-areas:
        "wow-list bluesky-post ";
  }

  .widget_divider {
    display: none;
  }
}
@media (min-width: 768px) {
  .home {
    grid-template-areas:
      "home-img home-copy";
  }

  .home-widgets {
    background-color: var(--color-accent-bg);
    border-radius: var(--base-border-radius);
    border: thin solid var(--color-accent);
    margin-bottom: 1rem;
  }

  #treehouse-cta,
  #github-cta {
    max-width: 200px;
  }

  .wow-characters {
  max-height: 190px;
}
}

@media (min-width: 992px) {
  .home-widgets {
    grid-template-areas:
      "wow-list divider bluesky-post";
  }

  .widget_divider {
    display: block;
  }
}
</style>
