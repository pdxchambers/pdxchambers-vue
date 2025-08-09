<script setup lang="ts">
  import ProjectData from './scaffold/ProjectsScaffold.json'
  import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="projects">
    <h2 class="projects__title">Sample Projects</h2>
    <div class="projects__list">
      <div v-for="project in ProjectData.projectList" :key="project.projectName" class="projects__list--section">
        <ProjectCard
          :name="project.projectName"
          :description="project.projectDescription"
          :imageUrl="project.projectImage"
          :link="project.projectLink"
          :githubUrl="project.projectGitHub"
        />
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .projects {
    &__list{
      padding: var(--base-padding);
      margin: 0 auto;
      max-width: var(--content-max-width);
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      &--section{
        @media (min-width: 768px) {
          flex: 1 1 calc(50% - 2rem);
          max-height: 100%;
          margin: .5rem;
        }
      }
    }
    &__title {
      text-align: center;
    }
  }

</style>
