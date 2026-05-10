<template>
  <div class="profile">
    <div class="slide" style="background-image: url('/images/bg.jpg');"></div>

    <div class="image">
      <img src="/images/profile4.png" alt="Benji Villarreal" />
    </div>

    <div class="title">Benji Villarreal</div>
    <div class="subtitle">Full Stack Java Developer</div>

    <div class="social">
      <a target="_blank" href="https://twitter.com/zelerbenji">
        <span class="fab fa-twitter"></span>
      </a>
      <a target="_blank" href="https://github.com/androla10">
        <span class="fab fa-github"></span>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/zeler-benji-villarreal-marcelo-5988b7a0/">
        <span class="fab fa-linkedin"></span>
      </a>
      <a target="_blank" href="https://stackoverflow.com/users/6885003/benji-villarreal">
        <span class="fab fa-stack-overflow"></span>
      </a>
    </div>

    <div class="lnks">
      <a href="#" class="lnk">
        <span class="text">Download CV</span>
        <span class="ion ion-archive"></span>
      </a>
      <RouterLink to="/contact" class="lnk discover">
        <span class="text">Contáctame</span>
        <span class="arrow"></span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
