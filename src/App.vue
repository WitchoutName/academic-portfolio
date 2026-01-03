<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="site-header">
      <div class="container header-inner">
        <RouterLink class="brand" to="/">
          <div class="brand-title">Tomáš Foltyn</div>
          <div class="brand-subtitle">Computer Vision • Applied ML • Research Software Engineering</div>
        </RouterLink>

        <nav class="nav">
          <RouterLink class="nav-link" to="/malicious-domains">PP1</RouterLink>
          <RouterLink class="nav-link" to="/estimating-airways">PP2</RouterLink>
          <RouterLink class="nav-link" to="/osu-neur-in">OSU / NEUR-IN</RouterLink>
          <a class="nav-link nav-link-muted" href="mailto:studies@foltyn.online">Email</a>
          <a class="nav-link nav-link-muted" href="https://github.com/WitchoutName" target="_blank" rel="noopener"
            >GitHub</a
          >
          <a
            class="nav-link nav-link-muted"
            href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-foltyn-902ba826a/"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
        </nav>
      </div>
    </header>

    <main class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-left">
          <div class="footer-title">Tomáš Foltyn</div>
          <div class="footer-subtitle">Brno, Czech Republic • studies@foltyn.online</div>
        </div>
        <div class="footer-right">
          <a class="footer-link" href="mailto:studies@foltyn.online">Email</a>
          <a class="footer-link" href="https://github.com/WitchoutName" target="_blank" rel="noopener">GitHub</a>
          <a
            class="footer-link"
            href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-foltyn-902ba826a/"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --bg: #0a0f1c;
  --card: rgba(255, 255, 255, 0.06);
  --card-strong: rgba(255, 255, 255, 0.09);
  --stroke: rgba(255, 255, 255, 0.12);
  --text: rgba(255, 255, 255, 0.92);
  --muted: rgba(255, 255, 255, 0.68);
  --muted-2: rgba(255, 255, 255, 0.55);
  --accent: #76a8ff;
  --accent-2: #b3c7ff;
  --shadow: 0 22px 60px rgba(0, 0, 0, 0.55);
  --radius: 16px;
}

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

body {
  margin: 0;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    'Apple Color Emoji',
    'Segoe UI Emoji';
  color: var(--text);
  background-color: var(--bg);
  background:
    radial-gradient(1100px 700px at 10% 0%, rgba(118, 168, 255, 0.18), transparent 60%),
    radial-gradient(900px 600px at 100% 20%, rgba(179, 199, 255, 0.14), transparent 60%),
    linear-gradient(180deg, #070b14, var(--bg));
  background-repeat: no-repeat;
  background-attachment: fixed;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(10, 15, 28, 0.72);
  border-bottom: 1px solid var(--stroke);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
}

.brand {
  display: grid;
  gap: 4px;
}

.brand-title {
  font-weight: 720;
  letter-spacing: 0.2px;
}

.brand-subtitle {
  font-size: 12px;
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-link {
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
  color: var(--text);
}

.nav-link:hover {
  border-color: var(--stroke);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link-muted {
  color: var(--muted);
}

.site-main {
  flex: 1;
  padding: 28px 0 44px;
}

.site-footer {
  border-top: 1px solid var(--stroke);
  background: rgba(10, 15, 28, 0.6);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-title {
  font-weight: 720;
}

.footer-subtitle {
  color: var(--muted);
  font-size: 13px;
}

.footer-right {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--muted);
  font-size: 13px;
}

.footer-link:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-size: 13px;
  font-weight: 650;
  line-height: 1;
  transition:
    background 140ms ease,
    border-color 140ms ease,
    transform 140ms ease;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(118, 168, 255, 0.35);
  transform: translateY(-1px);
}

.btn-primary {
  border-color: rgba(118, 168, 255, 0.5);
  background: linear-gradient(180deg, rgba(118, 168, 255, 0.22), rgba(118, 168, 255, 0.12));
  color: rgba(255, 255, 255, 0.95);
}

.btn-primary:hover {
  border-color: rgba(118, 168, 255, 0.75);
  background: linear-gradient(180deg, rgba(118, 168, 255, 0.3), rgba(118, 168, 255, 0.16));
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.btn-ghost {
  border-color: transparent;
  background: transparent;
  color: var(--accent-2);
}

.btn-ghost:hover {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.card {
  border-radius: var(--radius);
  border: 1px solid var(--stroke);
  background: var(--card);
}

@media (max-width: 820px) {
  .header-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    justify-content: flex-start;
  }
}
</style>
