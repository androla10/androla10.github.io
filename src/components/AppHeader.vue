<template>
  <header class="header">
    <div class="top-menu">
      <ul>
        <li>
          <RouterLink to="/about" :class="{ active: isActiveRoute('/about') }">
            <span class="icon ion-md-person"></span>
            <span class="link">Sobre mí</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/resume" :class="{ active: isActiveRoute('/resume') }">
            <span class="icon ion-md-bookmarks"></span>
            <span class="link">Resumen</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/services" :class="{ active: isActiveRoute('/services') }">
            <span class="icon ion-md-code-working"></span>
            <span class="link">Servicios</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" :class="{ active: isActiveRoute('/contact') }">
            <span class="icon ion-md-at"></span>
            <span class="link">Contáctame</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (path: string) => {
  return route.path === path
}
</script>
