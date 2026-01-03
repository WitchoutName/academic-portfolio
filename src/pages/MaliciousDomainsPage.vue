<script setup lang="ts">
import { watchEffect } from 'vue'
import ProjectSplitLayout from '@/components/ProjectSplitLayout.vue'

watchEffect(() => {
  document.title = 'Malicious Domain Detection — Portfolio'
})
</script>

<template>
  <ProjectSplitLayout
    title="Malicious Domain Detection in the Internet"
    subtitle="Project Practice 1 (FIT BUT, 2023/2024) — cybersecurity-focused machine learning for phishing + DGA domains."
    :badges="['Phishing', 'Machine Learning', 'Domain based features', 'Cybersecurity']"
    :links="[
      {
        label: 'GitHub',
        href: 'https://github.com/WitchoutName/pp-research-tools',
        kind: 'primary',
      },
      {
        label: 'FETA project',
        href: 'https://www.fit.vut.cz/research/project/1530/.en',
        kind: 'secondary',
      },
    ]"
    pdf-path="malicious-domains/IP1_RandomForestPhishingDetection.pdf"
    :pdf-start-page="10"
    pdf-title="Technical report"
  >
    <section class="md">
      <h2>Overview</h2>
      <p>
        This project addresses the detection of malicious domains on the internet, with emphasis on
        <strong>phishing</strong> and <strong>Domain Generation Algorithm (DGA)</strong> domains. The report documents an
        end-to-end workflow: literature review, feature sources and protocol context, dataset exploration, model
        training, and evaluation.
      </p>

      <div class="callout">
        <div class="callout-title">What I contributed (high level)</div>
        <ul>
          <li>Dataset analysis to understand feature behaviour and failure modes.</li>
          <li>Hyperparameter tuning and experimental runs to improve classifier performance and stability.</li>
          <li>Research artefacts (data prep + experimental outputs) produced in a structured, reusable form.</li>
        </ul>
      </div>

      <h2>Problem</h2>
      <p>
        Blocklists and heuristic rules struggle with <em>zero-hour</em> domains and fast-changing attacker
        infrastructure. ML-based detection can help by learning signals from domain-related data and network
        metadata.
      </p>

      <h2>Approach (report-guided)</h2>
      <ul>
        <li>Focused on domain-based detection for phishing and DGA-related malicious infrastructure.</li>
        <li>
          Considered protocol and metadata sources commonly used for features:
          <strong>DNS</strong>, <strong>TLS/SSL</strong>, and <strong>RDAP/WHOIS</strong>.
        </li>
        <li>
          Ran experiments across classical ML classifiers and improved performance through careful tuning and
          dataset-driven iteration.
        </li>
        <li>Documented the workflow in a technical report for reuse and reproducibility.</li>
      </ul>

      <h2>DomainRadar (reference mentioned in the report)</h2>
      <p>
        The report also discusses DomainRadar as an experimental threat-detection and incident-response tool used in
        the research context. For background, see the referenced documentation link above.
      </p>

      <h2>Deliverables</h2>
      <ul>
        <li>
          Technical report: <code>IP1_RandomForestPhishingDetection.pdf</code>
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
