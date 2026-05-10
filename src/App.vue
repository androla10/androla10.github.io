<template>
  <div class="page">
    <div class="background gradient">
      <ul class="bg-bubbles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>

    <div class="container">
      <AppHeader />

      <div class="card-started" id="home-card">
        <HeroSection />
      </div>

      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
</script>
