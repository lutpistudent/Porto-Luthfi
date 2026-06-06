<script setup lang="ts">
import { computed } from 'vue'

/**
 * SectionTitle - Reusable editorial section header.
 */
const props = defineProps<{
  sectionNumber: string
  title: string
  highlight?: string
  subtitle?: string
}>()

const highlightedTitle = computed(() => {
  const highlight = props.highlight?.trim() || props.title.split(/\s+/)[0] || ''
  const highlightIndex = props.title.toLowerCase().indexOf(highlight.toLowerCase())

  if (!highlight || highlightIndex === -1) {
    return {
      before: '',
      highlight: props.title,
      after: '',
    }
  }

  return {
    before: props.title.slice(0, highlightIndex),
    highlight: props.title.slice(highlightIndex, highlightIndex + highlight.length),
    after: props.title.slice(highlightIndex + highlight.length),
  }
})
</script>

<template>
  <div class="mb-10 md:mb-14" :id="`section-title-${sectionNumber}`">
    <div class="flex items-end gap-4 mb-4" aria-hidden="true">
      <span
        class="font-mono text-5xl md:text-7xl font-extrabold leading-none select-none"
        style="color: var(--section-number)"
      >
        {{ sectionNumber }}
      </span>
      <span
        class="font-mono text-4xl md:text-6xl font-extrabold leading-none select-none"
        style="color: var(--border)"
      >
        /
      </span>
    </div>

    <h2
      class="font-mono text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest leading-tight"
    >
      <span v-if="highlightedTitle.before" style="color: var(--text-muted)">
        {{ highlightedTitle.before }}
      </span>
      <span class="section-title-highlight">{{ highlightedTitle.highlight }}</span>
      <span v-if="highlightedTitle.after" style="color: var(--text-muted)">
        {{ highlightedTitle.after }}
      </span>
    </h2>

    <div class="mt-3 mb-4 flex items-center gap-3">
      <div class="h-1 w-14" style="background-color: var(--accent)"></div>
      <div class="h-px w-24" style="background-color: var(--border)"></div>
    </div>

    <p
      v-if="subtitle"
      class="font-mono text-xs sm:text-sm max-w-xl leading-relaxed"
      style="color: var(--text-muted)"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-title-highlight {
  color: var(--accent);
}
</style>
