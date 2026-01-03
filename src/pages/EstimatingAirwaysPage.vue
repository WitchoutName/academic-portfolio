<script setup lang="ts">
import { watchEffect } from 'vue'
import ProjectSplitLayout from '@/components/ProjectSplitLayout.vue'

watchEffect(() => {
  document.title = 'Estimating Airway Dimensions — Portfolio'
})
</script>

<template>
  <ProjectSplitLayout
    title="Estimating Airway Dimensions from Bronchoscopy Footage"
    subtitle="Project Practice 2 (FIT BUT, 2024/2025) — probe-based measurement, experiments, and clinician-facing tooling."
    :badges="['Bronchoscopy', 'Computer Vision', 'Airway Measurement', 'Lung Cancer']"
    :links="[
      {
        label: 'GitHub',
        href: 'https://github.com/WitchoutName/strade-bronchocam',
        kind: 'primary',
      },
    ]"
    pdf-path="estimating-airways/2025-PPFIT-CVAirwayEstim.pdf"
    :pdf-start-page="9"
    pdf-title="Technical report"
  >
    <section class="md">
      <h2>Overview</h2>
      <p>
        In late-stage lung cancer, airway narrowing complicates stent selection. CT-based measurement can fail due to
        obstructions or deformation, so clinicians may need to rely on video bronchoscopy (VB) footage—despite VB
        lacking intrinsic scale and being prone to noise and optical distortion.
      </p>
      <p>
        This project explores a <strong>probe-based</strong> approach: use a visible tool (e.g., biopsy forceps) as a known
        scale reference and estimate airway dimensions from 2D VB frames.
      </p>

      <div class="callout">
        <div class="callout-title">Key results (from the report abstract)</div>
        <ul>
          <li>
            A simplified <strong>Blender</strong> experiment achieved a mean error of <strong>0.45 mm</strong> for circular
            cross-sections.
          </li>
          <li>Built a CV pipeline to detect <strong>C-shaped tracheal cartilages</strong> in real VB images.</li>
          <li>
            Delivered 2 clinician-facing <strong>PyQt5</strong> tools: a polygon annotation app for dimension computation,
            and an interactive “virtual probe” app for probe placement/scaling.
          </li>
        </ul>
      </div>

      <h2>Methodology</h2>
      <ul>
        <li>
          Framed the measurement problem as calibration + geometry: infer millimeter-scale dimensions from 2D imagery
          using a known-diameter reference tool in-frame.
        </li>
        <li>
          Validated feasibility in controlled settings first (3D tube simulation), then moved toward real clinical VB
          frames with targeted CV components.
        </li>
        <li>
          Prioritized practical robustness: support noisy frames, occlusions, and distortion by enabling user-guided
          estimation workflows rather than relying on brittle full automation.
        </li>
      </ul>

      <h2>What I built</h2>
      <ul>
        <li>Blender-based 3D tube simulation for controlled evaluation and error analysis.</li>
        <li>Cartilage detection pipeline (C-shaped tracheal cartilage patterns) for real VB images.</li>
        <li>Polygon Dimension Estimator (PyQt5): manual polygon annotation + dimension computation.</li>
        <li>Virtual Probe Provider (PyQt5): interactive probe placement/scaling support in VB imagery.</li>
      </ul>

      <h2>Deliverables</h2>
      <ul>
        <li>
          Technical report: <code>2025-PPFIT-CVAirwayEstim.pdf</code>.
        </li>
        <li>Supplementary code: referenced in the report as “Downloadable code”.</li>
      </ul>
    </section>
  </ProjectSplitLayout>
</template>

<style scoped>
.md :is(h2) {
  margin: 18px 0 10px;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.md :is(p) {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 13.5px;
}

.md :is(ul) {
  margin: 0 0 12px;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 13.5px;
}

.md strong {
  color: var(--text);
}

.md code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.84);
}

.callout {
  border: 1px solid rgba(118, 168, 255, 0.22);
  background: rgba(118, 168, 255, 0.08);
  border-radius: 12px;
  padding: 12px 14px;
  margin: 14px 0;
}

.callout-title {
  font-weight: 720;
  margin-bottom: 8px;
}
</style>
