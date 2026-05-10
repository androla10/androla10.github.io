<template>
  <header class="header">
    <div class="top-menu">
      <ul>
        <li>
          <RouterLink to="/about" :class="{ active: isActiveRoute('/about') }">
            <font-awesome-icon :icon="['fas', 'user']" class="icon" />
            <span class="link">Sobre mí</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/resume" :class="{ active: isActiveRoute('/resume') }">
            <font-awesome-icon :icon="['fas', 'bookmark']" class="icon" />
            <span class="link">Resumen</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/services" :class="{ active: isActiveRoute('/services') }">
            <font-awesome-icon :icon="['fas', 'code']" class="icon" />
            <span class="link">Servicios</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" :class="{ active: isActiveRoute('/contact') }">
            <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
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
