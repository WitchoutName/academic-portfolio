<script setup lang="ts">
import { computed } from 'vue'
import { pdfUrl, withBasePath } from '@/lib/url'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconPdf from '@/components/icons/IconPdf.vue'

type LinkKind = 'primary' | 'secondary' | 'ghost'

type Link = {
  label: string
  href: string
  kind?: LinkKind
}

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    badges?: string[]
    links?: Link[]
    pdfPath?: string
    pdfStartPage?: number
    pdfTitle?: string
  }>(),
  {
    subtitle: undefined,
    badges: () => [],
    links: () => [],
    pdfPath: undefined,
    pdfStartPage: 3,
    pdfTitle: 'Report PDF',
  },
)

const pdfHref = computed(() => (props.pdfPath ? withBasePath(props.pdfPath) : null))
const pdfFrameSrc = computed(() =>
  props.pdfPath ? pdfUrl(props.pdfPath, { page: props.pdfStartPage ?? 3 }) : null,
)

function isGitHubUrl(href: string): boolean {
  return href.includes('github.com')
}
</script>

<template>
  <div class="container page">
    <header class="page-header">
      <div class="page-title-row">
        <div>
          <h1 class="page-title">{{ title }}</h1>
          <div v-if="subtitle" class="page-subtitle">{{ subtitle }}</div>
        </div>
      </div>

      <div v-if="badges.length > 0" class="badges">
        <span v-for="b in badges" :key="b" class="badge">{{ b }}</span>
      </div>

      <div v-if="links.length > 0 || pdfHref" class="actions">
        <a
          v-for="l in links"
          :key="l.href + l.label"
          class="btn"
          :class="l.kind ? `btn-${l.kind}` : 'btn-secondary'"
          :href="l.href"
          target="_blank"
          rel="noopener"
        >
          <IconGitHub v-if="isGitHubUrl(l.href)" class="btn-icon" />
          <span>{{ l.label }}</span>
        </a>
        <a
          v-if="pdfHref"
          class="btn btn-secondary"
          :href="pdfHref"
          target="_blank"
          rel="noopener"
        >
          <IconPdf class="btn-icon" />
          <span>PDF report</span>
        </a>
      </div>
    </header>

    <div class="split">
      <article class="readme">
        <slot />
      </article>

      <aside v-if="pdfFrameSrc" class="aside">
        <div class="aside-card">
          <div class="aside-top">
            <div class="aside-title">{{ pdfTitle }}</div>
            <a v-if="pdfHref" class="aside-link" :href="pdfHref" target="_blank" rel="noopener">Open</a>
          </div>
          <iframe class="pdf-frame" :src="pdfFrameSrc" :title="pdfTitle" loading="lazy" />
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  gap: 16px;
}

.page-header {
  border: 1px solid var(--stroke);
  background: var(--card);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow);
}

.page-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.page-title {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.02em;
  line-height: 1.12;
}

.page-subtitle {
  margin-top: 6px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.45;
  text-align: center;
}

.badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
  justify-content: center;
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

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
  justify-content: center;
}

.btn-icon {
  width: 14px;
  height: 14px;
  opacity: 0.92;
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr);
  gap: 14px;
  align-items: start;
}

.readme {
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius);
  padding: 18px;
}

.aside {
  position: relative;
}

.aside-card {
  position: sticky;
  top: 88px;
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius);
  overflow: hidden;
}

.aside-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 10px;
  border-bottom: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.04);
}

.aside-title {
  font-weight: 720;
  font-size: 13px;
}

.aside-link {
  font-size: 13px;
  color: var(--accent-2);
}

.aside-link:hover {
  color: var(--text);
}

.pdf-frame {
  width: 100%;
  height: min(72vh, 780px);
  border: 0;
  background: rgba(255, 255, 255, 0.02);
}

.aside-hint {
  padding: 10px 12px 12px;
  border-top: 1px solid var(--stroke);
  color: var(--muted);
  font-size: 12px;
}

@media (max-width: 980px) {
  .split {
    grid-template-columns: 1fr;
  }

  .aside-card {
    position: static;
  }
}
</style>
