<script setup lang="ts">
import type { Certification } from '@/types'
import { Award, ExternalLink, Calendar } from 'lucide-vue-next'

/**
 * CertificationCard — LinkedIn-style certification display card.
 * Props: certification (Certification interface)
 */
defineProps<{
  certification: Certification
}>()

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <div
    class="border p-6 sm:p-8 transition-all duration-300 hover-lift"
    :style="{
      backgroundColor: 'var(--bg-card)',
      borderColor: 'var(--border)',
      boxShadow: '3px 3px 0px var(--shadow)',
    }"
    @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = 'var(--text-muted)'; ($event.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px var(--shadow-accent)'"
    @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; ($event.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px var(--shadow)'"
    :id="`cert-card-${certification.id}`"
  >
    <!-- Header Row -->
    <div class="flex items-start gap-4 border-b pb-4 mb-4" :style="{ borderColor: 'var(--border)' }">
      <!-- Certificate Icon / Image -->
      <div
        class="flex-shrink-0 w-12 h-12 border flex items-center justify-center"
        :style="{
          backgroundColor: 'var(--bg-card-alt)',
          borderColor: 'var(--border)',
        }"
      >
        <img
          v-if="certification.image_url"
          :src="certification.image_url"
          :alt="certification.issuer"
          class="w-8 h-8 object-contain"
        />
        <Award v-else class="w-6 h-6" :style="{ color: 'var(--accent)' }" />
      </div>

      <div class="flex-1 min-w-0">
        <h3
          class="text-lg font-bold font-sans leading-snug"
          :style="{ color: 'var(--text-primary)' }"
        >
          {{ certification.title }}
        </h3>
        <p class="text-sm font-mono mt-0.5" :style="{ color: 'var(--text-secondary)' }">
          {{ certification.issuer }}
        </p>
      </div>
    </div>

    <!-- Date & Skill -->
    <div class="flex flex-wrap gap-3 mb-4">
      <span
        class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 border"
        :style="{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border)',
          color: 'var(--accent)',
        }"
      >
        <Calendar class="w-3.5 h-3.5" />
        Issued {{ formatDate(certification.issued_date) }}
      </span>
    </div>

    <!-- Skills Tags -->
    <div class="flex flex-wrap gap-2 mb-4" v-if="certification.skill">
      <span
        v-for="sk in certification.skill.split(',')"
        :key="sk"
        class="text-[10px] font-mono tracking-wider px-2 py-1 border uppercase rounded-sm"
        :style="{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-light)',
          color: 'var(--text-muted)',
        }"
      >
        {{ sk.trim() }}
      </span>
    </div>

    <!-- Description -->
    <p
      v-if="certification.description"
      class="text-sm leading-relaxed font-sans mb-4"
      :style="{ color: 'var(--text-muted)' }"
    >
      {{ certification.description }}
    </p>

    <!-- Credential Link -->
    <a
      v-if="certification.credential_url"
      :href="certification.credential_url"
      target="_blank"
      class="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase border px-4 py-2.5 transition-all duration-200"
      :style="{
        borderColor: 'var(--border)',
        color: 'var(--text-secondary)',
      }"
    >
      <ExternalLink class="w-3.5 h-3.5" />
      Show Credential
    </a>
  </div>
</template>
