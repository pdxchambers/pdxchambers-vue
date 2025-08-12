<script lang="ts" setup>
  import meImg from '../assets/me2.jpg'
  import data from '../components/scaffold/AboutScaffold.json'
</script>

<template>
  <div class="about">
    <section class="about__image">
      <img
        :src=meImg
        alt="Julien Chambers"
      />
    </section>
    <section class="about__copy">
      <h2>{{ data.aboutMe.title }}</h2>
      <p>
        {{ data.aboutMe.paragraphOne }}
      </p>
      <p>
        {{ data.aboutMe.paragraphTwo }}
      </p>
      <p>
        {{ data.aboutMe.paragraphThree }}
      </p>
      <p>
        {{ data.aboutMe.paragraphFour }}
      </p>

      <hr />

      <h2>{{ data.siteFeatures.title }}</h2>

      <p>
        {{ data.siteFeatures.intoduction }}
      </p>
      <h3>{{ data.siteFeatures.subtitle }}</h3>
      <ul>
        <li v-for="feature in data.siteFeatures.features" :key="feature.title">
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </li>
      </ul>

      <hr />

      <h3>{{ data.futureRoadmap.title }}</h3>
      <p>
        {{ data.futureRoadmap.description }}
      </p>
    </section>
  </div>
</template>

<style lang="less" scoped>
  .about {
    padding: var(--base-padding);
    max-width: var(--content-max-width);
    margin: 0 auto;
    &__image{
      img {
        max-width: 100%;
        border-radius: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
    &__copy {
      h2, h3 {
        margin: var(--base-margin) 0;
      }
      p{
        margin-bottom: var(--base-margin);
        line-height: var(--base-line-height);
      }
      hr {
        margin: 1rem auto
      }
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
        align-items: start;
    }
  }
</style>
