<script setup lang="ts">
import { watchEffect } from 'vue'
import { withBasePath } from '@/lib/url'

watchEffect(() => {
  document.title = 'OSU / NEUR-IN — Portfolio'
})

const apps = [
  {
    title: 'BagPoseStudio',
    subtitle: 'Gradio pipeline for RealSense `.bag` → 3D pose time series',
    zenodoUrl: 'https://zenodo.org/records/15161080',
    doi: '10.5281/zenodo.15161080',
    doiBadgeUrl: 'https://zenodo.org/badge/DOI/10.5281/zenodo.15161080.svg',
    screenshot: withBasePath('osu-neur-in/gradio.png'),
    description:
      "BagPoseStudio is a Gradio-based pipeline for turning Intel RealSense `.bag` files into analyzable 3D pose time series. It supports parsing, cached DWPose inference, filtering/FFTs, and export workflows for reproducible tremor and motion analysis in neurology research and clinical studies (e.g., Parkinson's disease).",
    bullets: [
      'Upload or select `.bag` recordings and unpack to per-frame color/depth/confidence maps.',
      'Run cached or fresh DWPose inference to generate 3D pose dictionaries and time series.',
      'Compute 2D/3D vector magnitudes, apply smoothing (moving average, Gaussian, Savitzky–Golay), and inspect FFTs.',
      'Visualize reconstructed video with synchronized pose data and export axes/vectors as JSON.',
      'Chain tabs so parsing enables processing, which enables visualization with updated file selectors.',
    ],
  },
  {
    title: 'ReachTrace',
    subtitle: 'PyQt desktop tool for reaching-task quantification',
    zenodoUrl: 'https://zenodo.org/records/17993064',
    doi: '10.5281/zenodo.17993064',
    doiBadgeUrl: 'https://zenodo.org/badge/DOI/10.5281/zenodo.17993064.svg',
    screenshot: withBasePath('osu-neur-in/pointing.png'),
    description:
      "Desktop PyQt application for replaying preprocessed pose sessions to quantify hand-to-face reaching tasks for neurology research in movement disorders (e.g., Parkinson's disease).",
    bullets: [
      'Load preprocessed pose caches and synchronized video; derive nose-to-hand distance signals and hand trajectory time series.',
      'Compute reach onset/offset, peak velocities, movement time, accuracy metrics, and smoothness indicators (e.g., spectral arc length, jerk-based measures).',
      'Support signal smoothing (moving average, Gaussian, Savitzky–Golay), segmentation of reaches, and export workflows (CSV/JSON/NPZ).',
      'Visualize reconstructed video with synchronized pose overlays, reach markers, and temporal plots of hand-to-nose distance and velocity.',
    ],
  },
  {
    title: 'GaitPulse',
    subtitle: 'PyQt desktop tool for gait analysis and symmetry metrics',
    zenodoUrl: 'https://zenodo.org/records/18001320',
    doi: '10.5281/zenodo.18001320',
    doiBadgeUrl: 'https://zenodo.org/badge/DOI/10.5281/zenodo.18001320.svg',
    screenshot: withBasePath('osu-neur-in/gait.png'),
    description:
      "Desktop PyQt application for replaying preprocessed pose time series to quantify gait cycles, cadence, symmetry, and contact dynamics for neurology researchers studying gait impairment in movement disorders (e.g., Parkinson's disease).",
    bullets: [
      'Load preprocessed pose caches and synchronized video; construct per-frame joint trajectories and foot-contact signals.',
      'Compute gait cycles, cadence, step length estimates, foot-contact/contact-time approximations, and symmetry metrics.',
      'Support signal smoothing (moving average, Gaussian, Savitzky–Golay), peak detection for cadence, and export workflows (CSV/JSON/NPZ).',
      'Visualize reconstructed video with synchronized pose overlays and gait-cycle annotations.',
    ],
  },
]
</script>

<template>
  <div class="container page">
    <header class="header">
      <div class="kicker">University of Ostrava — EXCELES-funded NEUR-IN (National Institute for Neurological Research)</div>
      <h1 class="title">Neuro-degenerative disease research: 3D pose signal-processing tooling</h1>
      <p class="lead">
        Research software engineering work delivered as part of a <strong>nationally funded</strong> NEUR-IN project
        (EXCELES grant): end-to-end CV pipelines and tools used by a research team, from RealSense depth recordings to
        pose-derived metrics, analysis, and exportable outputs.
      </p>

      <div class="badges">
        <span class="badge">Research SWE</span>
        <span class="badge">Computer Vision</span>
        <span class="badge">Depth + Pose</span>
        <span class="badge">Signal Processing</span>
        <span class="badge">National grant deliverables</span>
      </div>
    </header>

    <section class="section">
      <div class="section-title">What I built</div>
      <div class="cols">
        <div class="col card">
          <div class="card-title">End-to-end pipeline</div>
          <ul class="list">
            <li>RealSense depth recordings ingestion (incl. <code>.bag</code>)</li>
            <li>Pose estimation and alignment/transforms</li>
            <li>Signal processing utilities (FFT, filtering, segmentation, peak detection)</li>
            <li>Video–signal synchronization, metrics, and export</li>
          </ul>
        </div>
        <div class="col card">
          <div class="card-title">Researcher-facing tooling</div>
          <ul class="list">
            <li>2× PyQt5 desktop apps (pointing analysis, gait analysis)</li>
            <li>Gradio web app for parsing, visualization, and interactive workflows</li>
            <li>Parallel inference (where applicable), caching, and automation for fast iteration</li>
            <li>Extensive manuals (incl. ~30-page user/admin guide for the web app)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title">Apps</div>
      <div class="apps">
	        <article v-for="app in apps" :key="app.zenodoUrl" class="app-card">
	          <div class="app-head">
	            <div>
	              <div class="app-title-row">
	                <div class="app-title">{{ app.title }}</div>
	                <a class="doi-badge-link" :href="`https://doi.org/${app.doi}`" target="_blank" rel="noopener">
	                  <img class="doi-badge" :src="app.doiBadgeUrl" :alt="`DOI badge: ${app.doi}`" loading="lazy" />
	                </a>
	              </div>
	              <div class="app-subtitle">{{ app.subtitle }}</div>
	            </div>
	            <a class="btn btn-primary" :href="app.zenodoUrl" target="_blank" rel="noopener">Zenodo</a>
	          </div>

          <div class="app-body">
            <img class="shot" :src="app.screenshot" :alt="`${app.title} screenshot`" />
            <div class="app-text">
              <p class="app-desc">{{ app.description }}</p>
              <div class="app-kicker">Key capabilities</div>
              <ul class="list">
                <li v-for="b in app.bullets" :key="b">{{ b }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  gap: 16px;
}

.header {
  border: 1px solid var(--stroke);
  background: var(--card);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow);
}

.kicker {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.title {
  margin: 0 0 10px;
  font-size: 26px;
  letter-spacing: -0.02em;
  line-height: 1.12;
}

.lead {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.6;
  max-width: 95ch;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid rgba(118, 168, 255, 0.28);
  color: rgba(179, 199, 255, 0.95);
  background: rgba(118, 168, 255, 0.1);
}

.section {
  display: grid;
  gap: 12px;
}

.section-title {
  font-weight: 720;
  letter-spacing: -0.01em;
}

.cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.col {
  padding: 16px 18px;
  border-radius: var(--radius);
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.03);
}

.card-title {
  font-weight: 720;
  margin-bottom: 10px;
}

.list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.6;
}

.list code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.84);
}

.apps {
  display: grid;
  gap: 14px;
}

.app-card {
  border: 1px solid var(--stroke);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
}

.app-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.04);
}

.app-title {
  font-weight: 720;
}

.app-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.doi-badge-link {
  display: inline-flex;
  align-items: center;
  opacity: 0.95;
}

.doi-badge-link:hover {
  opacity: 1;
}

.doi-badge {
  height: 18px;
  width: auto;
}

.app-subtitle {
  margin-top: 6px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.45;
}

.app-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
  gap: 14px;
  padding: 16px;
}

.app-text {
  display: grid;
  gap: 10px;
  align-content: start;
}

.app-desc {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.6;
}

.app-kicker {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.shot {
  width: 400px;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.02);
}

.app-foot {
  padding: 12px 16px 14px;
  border-top: 1px solid var(--stroke);
}

.muted {
  color: var(--muted-2);
  font-size: 12px;
}

@media (max-width: 980px) {
  .cols {
    grid-template-columns: 1fr;
  }

  .app-body {
    grid-template-columns: 1fr;
  }
}
</style>
