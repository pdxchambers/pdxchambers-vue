<script setup lang="ts">
  import WorkHistory from './WorkHistory.vue'
  import data from '../components/scaffold/ResumeScaffold.json';
</script>

<template>
  <div class="resume">
    <section class="resume__summary">
      <h2>Summary</h2>
      <p>
        {{ data.summary }}
      </p>
    </section>
    <section class="resume__introduction">
      <h2>Introduction</h2>
      <p>
        {{ data.introduction }}
      </p>
    </section>
    <section class="resume__education">
      <h2>Education</h2>
      <h3>{{ data.education.institution }} - <span>{{ data.education.location }}</span></h3>
      <span class="resume__degree">{{ data.education.degree }}</span>
    </section>
    <section class="resume__military">
      <h2>Military</h2>
      <h3>{{ data.military.branch }}</h3>
      <span>{{ data.military.rate }}</span>: <span>{{ data.military.rank }}</span>
      <hr />
      <h3 class="resume__militaryAwards">Military Awards</h3>
      <ul>
        <li v-for="(award, index) in data.military.awards" :key="index">{{ award }}</li>
      </ul>

    </section>
    <section class="resume__skills">
      <h2>Skills</h2>
        <div class="resume__skills--container" v-for="(skill, index) in data.skills" :key="index">
          <div class="resume__skills--skillCat">{{skill.sectionTitle}}</div>
          <div class="resume__skills--skillList">
            <ul>
              <li v-for="(item, itemIndex) in skill.skillList" :key="itemIndex">{{ item }}</li>
            </ul>
          </div>
        </div>
    </section>
    <section class="resume__history">
      <h2>Work History</h2>
      <WorkHistory
        v-for="(job, index) in data.history" :key="index"
        id="work-history-{{ index }}"
        :companyName="job.company.name"
        :companyLocation="job.company.location"
        :startDate="job.startDate"
        :endDate="job.endDate"
        :position="job.position"
        :description="job.description"
        :achievements="Array.isArray(job.achievements) ? job.achievements : [job.achievements]"
      ></WorkHistory>
    </section>
    <section class="resume__additional">
      <h2>Additional Experience</h2>
      <ul>
        <li v-for="(experience, index) in data.additionalExperience" :key="index">{{ experience }}</li>
      </ul>
    </section>
  </div>
</template>

<style lang="less" scoped>
  .resume {
    margin: 0 auto;
    max-width: var(--content-max-width);
    &__skills {
      &--container {
        display: grid;
        grid-template-areas:
          "skillCat"
          "skillList";
        margin-bottom: 32px;
        @media (min-width: 576px) {
          grid-template-areas:
            "skillCat skillList";
          grid-template-columns: 1fr 2fr;
        }
      }
      &--skillCat {
        grid-area: skillCat;
        font-weight: bold;
        color: var(--color-accent-text);
      }
      &--skillList {
        grid-area: skillList;
        ul {
          list-style-type: none;
          padding-left: 0;
          text-align: center;
          li {
            display: inline-block;
            font-size: 75%;
            border-right: thin solid var(--color-accent);
            padding: 0 var(--base-padding);
            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }

    section {
      padding: var(--base-padding);
      h2 {
        text-align: center;
        border-bottom: thin solid var(--color-accent);
        color: var(--color-accent-text);
      }
      p {
        line-height: var(--base-line-height);
        padding-top: var(--base-padding);
      }
      hr {
        color: var(--color-accent);
        margin-top: var(--base-margin);
      }
      span{
        font-style: italic;
      }
      ul {
        list-style-type: none;
      }

      td ul {
        text-align: center;
      }

      li{
        @media (min-width: 768px) {
            display: inline-block;
            border-right: thin solid var(--color-accent);
            padding: 0 var(--base-padding);
            &:last-child {
              border-right: none;
            }
        }
      }
    }
  }
</style>
