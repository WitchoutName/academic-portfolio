<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterLink } from 'vue-router'

watchEffect(() => {
  document.title = 'Page not found — Portfolio'
})
</script>

<template>
  <div class="container">
    <div class="card nf">
      <div class="title">404</div>
      <div class="subtitle">This page doesn’t exist.</div>
      <div class="actions">
        <RouterLink class="btn btn-primary" to="/">Go home</RouterLink>
        <RouterLink class="btn btn-secondary" to="/malicious-domains">PP1</RouterLink>
        <RouterLink class="btn btn-secondary" to="/estimating-airways">PP2</RouterLink>
        <RouterLink class="btn btn-secondary" to="/osu-neur-in">OSU / NEUR-IN</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nf {
  padding: 22px;
  border-radius: var(--radius);
  border: 1px solid var(--stroke);
  background: var(--card);
  box-shadow: var(--shadow);
}

.title {
  font-size: 42px;
  font-weight: 760;
  letter-spacing: -0.03em;
}

.subtitle {
  margin-top: 6px;
  color: var(--muted);
  font-size: 14px;
}

.actions {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>

