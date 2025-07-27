<script lang="ts" setup>
  import meImg from '../assets/me2.jpg'
</script>

<template>
  <div class="about">
    <section class="image">
      <img
        :src=meImg
        alt="Julien Chambers"
      />
    </section>
    <section class="copy">
      <h2>About Julien Chambers</h2>
      <p>
        Julien A. Chambers is a Full-Stack web developer with a passion for
        building efficient and scalable web applications. With a background in
        computer science and extensive experience in both front-end and back-end
        development, Julien has worked on various projects that showcase his
        skills in modern web technologies.
      </p>
      <p>
        In his most recent role, Julien attained the position of Subject Matter
        Expert for Harley-Davidson related projects at Dealer Spike where he
        worked closely with Product Owners and other stakeholders to ensure timely
        model year updates and other enhancements to the Dealer Spike platform. His
        expertise in JavaScript, TypeScript, and various front-end frameworks has
        allowed him to create intuitive and responsive user interfaces that meet
        the needs of clients and end-users alike.
      </p>
      <p>
        Julien is also an advocate for continuous learning and professional growth.
        He has completed numerous online courses and certifications, including those
        from Treehouse, to stay updated with the latest industry trends and best practices.
        His commitment to excellence and attention to detail make him a valuable asset
        to any development team.
      </p>
      <p>
        Julien currently resides in Oregon City, Oregon with his wife and son.
        In his free time, he enjoys spending time with his family, exploring the Oregon Coast,
        and tinkering with new technologies. He is always looking for new challenges and opportunities
        to apply his skills in innovative ways.
      </p>

      <hr />

      <h2>About This Site</h2>

      <p>
        This site is built on the foundation of demonstrating Julien's skills as a full-stack developer. Built as a
        Single Page Application (SPA) using Vue 3 and TypeScript, a great deal of attention has been paid to ensuring
        a seamless user experience and responsive design. It also showcases some features demonstrating Julien's skill and
        experience with integrating third-party APIs.
      </p>
      <h3>Feature Summary:</h3>
      <ul>
        <li>Built on Vue 3 and Typescript.</li>
        <li>Has a mobile-first, responsive design.</li>
        <li>Leverages the Blizzard API to pull data on characters Julien plays in World of Warcraft and displays them on the home page.</li>
        <li>Uses the same Blizzard API to disply the current uptime status of the World of Warcraft realm julien plays on (Sen'Jin)</li>
        <li>Calls the Bluesky API to obtain and display the single most current post Julien has made on the Bluesky platform.</li>
        <li>Some of the data displayed (such as the resume page) is dynamically rendered from a JSON file to make updating such data easier.</li>
      </ul>

      <hr />

      <h3>What's Next for PDXChambers.com?</h3>
      <p>Julien is planning on turnig this site into a lightweight Contant Management System (CMS) with a .NET back-end. This is currently in the
        planning stage, but the goal is to further demonstrate his skills with .NET and C# as well as to make it easier to update the content on this site.
      </p>
    </section>
  </div>
</template>

<style>
  .image img {
    max-width: 100%;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .about {
    padding: var(--base-padding);
    max-width: var(--content-max-width);
    margin: 0 auto;
  }
  .about p{
    margin-bottom: var(--base-margin);
    line-height: var(--base-line-height);
  }

  @media (min-width: 768px) {
    .about {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      align-items: start;
    }
  }
</style>
