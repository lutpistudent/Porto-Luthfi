<script setup lang="ts">
import { certifications } from '@/data/certifications'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { ShieldCheck } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'
import CertificationCard from './CertificationCard.vue'

const { elementRef } = useIntersectionObserver()
</script>

<template>
  <section
    id="certifications"
    ref="elementRef"
    class="reveal py-24 px-6 max-w-6xl mx-auto border-b"
    :style="{ borderColor: 'var(--border)' }"
  >
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <SectionTitle
        section-number="04"
        title="Licenses & Certifications"
        subtitle="Sertifikasi dan lisensi profesional yang disimpan langsung di dalam program."
      />

      <div
        class="flex items-center gap-2 px-4 py-2 border self-start"
        :style="{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border)',
        }"
      >
        <ShieldCheck class="w-4 h-4" :style="{ color: 'var(--accent)' }" />
        <span class="font-mono text-[10px] uppercase tracking-widest" :style="{ color: 'var(--text-muted)' }">
          {{ certifications.length }} Credentials
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="certifications-grid">
      <CertificationCard
        v-for="cert in certifications"
        :key="cert.id"
        :certification="cert"
      />
    </div>
  </section>
</template>
