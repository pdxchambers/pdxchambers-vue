<script setup lang="ts">
  import WorkHistory from './WorkHistory.vue'
  import data from '../components/scaffold/ResumeScaffold.json';
</script>

<template>
  <div class="resume">
    <section class="summary">
      <h2>Summary</h2>
      <p>
        {{ data.summary }}
      </p>
    </section>
    <section class="introduction">
      <h2>Introduction</h2>
      <p>
        {{ data.introduction }}
      </p>
    </section>
    <section class="education">
      <h2>Education</h2>
      <h3>{{ data.education.institution }} - <span>{{ data.education.location }}</span></h3>
      <span class="degree">{{ data.education.degree }}</span>
    </section>
    <section class="military">
      <h2>Military</h2>
      <h3>{{ data.military.branch }}</h3>
      <span>{{ data.military.rate }}</span>: <span>{{ data.military.rank }}</span>
      <hr />
      <h3 class="militaryAwards">Military Awards</h3>
      <ul>
        <li v-for="(award, index) in data.military.awards" :key="index">{{ award }}</li>
      </ul>

    </section>
    <section class="skills">
      <h2>Skills</h2>
      <table>
        <tr v-for="(skill, index) in data.skills" :key="index">
          <th>{{skill.sectionTitle}}</th>
          <td>
            <ul>
              <li v-for="(item, itemIndex) in skill.skillList" :key="itemIndex">{{ item }}</li>
            </ul>
          </td>
        </tr>
      </table>
    </section>
    <section class="history">
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
    <section class="additional">
      <h2>Additional Experience</h2>
      <ul>
        <li v-for="(experience, index) in data.additionalExperience" :key="index">{{ experience }}</li>
      </ul>

    </section>
  </div>
</template>

<style scoped>
  .resume {
    margin: 0 auto;
    max-width: var(--content-max-width);
  }
  section {
    padding: var(--base-padding);
    /*margin-bottom: var(--base-margin);*/
  }
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
  th, td {
    border-bottom: thin solid var(--color-accent);
    border-collapse: collapse;
    padding: var(--base-padding) 0;
  }
  ul {
    list-style-type: none;
  }

  td ul {
    text-align: center;
  }

  @media (min-width: 768px) {
    li {
      display: inline-block;
      border-right: thin solid var(--color-accent);
      padding: 0 var(--base-padding);
    }

    li:last-child {
      border-right: none;
    }
  }
</style>
