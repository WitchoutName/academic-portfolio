<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { watchEffect } from 'vue'

watchEffect(() => {
  document.title = 'Tomáš Foltyn — Portfolio'
})

const projects = [
  {
    title: 'Malicious Domain Detection in the Internet',
    subtitle: 'Project Practice 1 (FIT BUT, 2023/2024) — NES@FIT',
    to: '/malicious-domains',
    description:
      'Cybersecurity-focused ML: phishing + DGA domain detection, dataset analysis, hyperparameter tuning, and research artefacts used in internal workflows.',
    tags: ['Cybersecurity', 'ML', 'DNS/TLS/RDAP', 'Random Forest', 'Research'],
  },
  {
    title: 'Estimating Airway Dimensions from Bronchoscopy Footage',
    subtitle: 'Project Practice 2 (FIT BUT, 2024/2025) — StRaDe@FIT',
    to: '/estimating-airways',
    description:
      'Medical CV proof-of-concept: tool-as-scale estimation, Blender experiments, cartilage detection pipeline, and clinician-facing PyQt apps.',
    tags: ['Medical CV', 'Geometry', 'PyQt', 'Blender', 'Experiments'],
  },
  {
    title: 'EXCELES / NEUR-IN — 3D pose signal-processing tooling',
    subtitle: 'University of Ostrava (part-time research SWE)',
    to: '/osu-neur-in',
    description:
      'End-to-end depth → pose → signal analysis tooling (desktop + web) delivered as part of the nationally funded EXCELES/NEUR-IN project; modular libraries, documentation, and Zenodo-published apps.',
    tags: ['Research SWE', 'RealSense', 'Pose', 'Signal Processing', 'Gradio'],
  },
]
</script>

<template>
  <div class="container">
    <section class="hero">
      <div class="hero-card">
        <div class="hero-kicker">Portfolio</div>
        <h1 class="hero-title">Research-oriented engineering, documented like research.</h1>
        <p class="hero-lead">
          I build end-to-end computer vision and data-processing pipelines and turn them into tools researchers (and
          clinicians) can actually use—reproducible, inspectable, and well documented.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="mailto:studies@foltyn.online">Contact</a>
          <a class="btn btn-secondary" href="https://github.com/WitchoutName" target="_blank" rel="noopener"
            >GitHub</a
          >
          <a
            class="btn btn-secondary"
            href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-foltyn-902ba826a/"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Projects linked from my CV</h2>
        <div class="section-subtitle">Each page includes a report embed (where applicable) and curated references.</div>
      </div>

      <div class="grid">
        <RouterLink v-for="p in projects" :key="p.to" class="card card-link" :to="p.to">
          <div class="card-top">
            <div class="card-title">{{ p.title }}</div>
            <div class="card-subtitle">{{ p.subtitle }}</div>
          </div>
          <div class="card-body">
            <p class="card-text">{{ p.description }}</p>
            <div class="tags">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
          <div class="card-bottom">
            <span class="card-cta">Open →</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="section section-compact">
      <div class="callout">
        <div class="callout-title">Note on the PDFs</div>
        <div class="callout-text">
          The embedded PDFs are opened at page 3 by default (to get past title pages and jump into the core content).
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 10px 0 28px;
}

.hero-card {
  border: 1px solid var(--stroke);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.04));
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow);
}

.hero-kicker {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.hero-title {
  font-size: clamp(28px, 4.2vw, 44px);
  line-height: 1.06;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
}

.hero-lead {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.55;
  margin: 0 0 16px;
  max-width: 82ch;
}

.context-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(118, 168, 255, 0.35);
  background: rgba(118, 168, 255, 0.12);
  color: var(--accent-2);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 13px;
  margin-bottom: 14px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.section {
  padding: 18px 0;
}

.section-compact {
  padding-top: 0;
}

.section-head {
  display: grid;
  gap: 6px;
  margin-bottom: 14px;
}

.section-title {
  font-size: 18px;
  margin: 0;
}

.section-subtitle {
  font-size: 13px;
  color: var(--muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.card-link {
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: var(--radius);
  border: 1px solid var(--stroke);
  background: var(--card);
  transition:
    transform 140ms ease,
    background 140ms ease,
    border-color 140ms ease;
}

.card-link:hover {
  transform: translateY(-2px);
  background: var(--card-strong);
  border-color: rgba(118, 168, 255, 0.35);
}

.card-title {
  font-weight: 720;
  letter-spacing: -0.01em;
}

.card-subtitle {
  margin-top: 6px;
  font-size: 13px;
  color: var(--muted);
}

.card-text {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.tag {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.78);
  background: rgba(255, 255, 255, 0.05);
}

.card-bottom {
  display: flex;
  justify-content: flex-end;
  color: var(--accent-2);
  font-size: 13px;
}

.callout {
  border: 1px solid var(--stroke);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  padding: 16px 18px;
}

.callout-title {
  font-weight: 700;
  margin-bottom: 6px;
}

.callout-text {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
