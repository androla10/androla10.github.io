<template>
  <div class="profile">
    <div class="slide" style="background-image: url('/images/bg.jpg');"></div>

    <div class="image">
      <img src="/images/profile4.png" alt="Benji Villarreal" />
    </div>

    <div class="title">Zeler Benji Villarreal Marcelo</div>
    <div class="subtitle">Full Stack Java Developer</div>

    <div class="social">
      <a target="_blank" href="https://twitter.com/zelerbenji">
        <font-awesome-icon :icon="['fab', 'twitter']" /></a>
      <a target="_blank" href="https://github.com/androla10">
        <font-awesome-icon :icon="['fab', 'github']" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/zeler-benji-villarreal-marcelo-5988b7a0/">
        <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a target="_blank" href="https://stackoverflow.com/users/6885003/benji-villarreal">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" /></a>
    </div>

    <div class="lnks">
      <a href="#" class="lnk">
        <span class="text">Download CV</span>
        <font-awesome-icon :icon="['fas', 'download']" /></a>
      <RouterLink to="/contact" class="lnk discover">
        <span class="text">Contáctame</span>
        <span class="arrow"></span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
