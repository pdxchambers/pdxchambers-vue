<script setup lang="ts">
  import ProjectData from './scaffold/ProjectsScaffold.json'
  import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="projects-content">
    <h2 class="section-title">Sample Projects</h2>
    <div class="projects">
      <div v-for="project in ProjectData.projectList" :key="project.projectName" class="project-section">
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

<style scoped>
  .projects-content {
    padding: var(--base-padding);
    margin: 0 auto;
    max-width: var(--content-max-width);
  }

  .section-title {
    text-align: center;
  }
  @media (min-width: 768px) {
    .projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .project-section {
      flex: 1 1 calc(50% - 2rem);
      max-height: 100%;
      margin: .5rem;
    }
  }

</style>
