<script setup lang="ts">
import { experiences } from '@/data/experience'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { Calendar, Briefcase } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'

const { elementRef } = useIntersectionObserver()
</script>

<template>
  <section
    id="experience"
    ref="elementRef"
    class="reveal py-24 px-6 max-w-6xl mx-auto border-b"
    :style="{ borderColor: 'var(--border)' }"
  >
    <SectionTitle
      section-number="05"
      title="Work & Organizational Experience"
      subtitle="Jejak rekam keterlibatan aktif dalam proyek teknologi intra-sekolah dan kepemimpinan dalam organisasi kesiswaan."
    />

    <!-- Timeline -->
    <div
      class="relative pl-6 sm:pl-8 border-l ml-2 sm:ml-4 space-y-12"
      :style="{ borderColor: 'var(--border)' }"
      id="experience-timeline"
    >
      <div
        v-for="exp in experiences"
        :key="exp.id"
        class="relative"
        :id="`experience-item-${exp.id.toLowerCase()}`"
      >
        <!-- Timeline Node -->
        <div
          class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 border-2 z-10 flex items-center justify-center rounded-none"
          :style="{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--accent)',
            boxShadow: '2px 2px 0px var(--border)',
          }"
        >
          <div class="w-1.5 h-1.5" :style="{ backgroundColor: 'var(--accent)' }"></div>
        </div>

        <!-- Experience Card -->
        <div
          class="border p-6 sm:p-8 transition-all duration-300 hover-lift"
          :style="{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: '3px 3px 0px var(--shadow)',
          }"
        >
          <!-- Header -->
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 mb-4"
            :style="{ borderColor: 'var(--border)' }"
          >
            <div>
              <h3
                class="text-xl font-bold font-sans flex items-center gap-2"
                :style="{ color: 'var(--text-secondary)' }"
              >
                <Briefcase class="w-4 h-4" :style="{ color: 'var(--accent)' }" />
                {{ exp.role }}
              </h3>
              <p class="text-sm font-mono mt-1" :style="{ color: 'var(--text-muted)' }">
                {{ exp.company }}
              </p>
            </div>

            <!-- Period -->
            <div
              class="flex items-center gap-2 text-xs font-mono border px-3 py-1.5 w-fit"
              :style="{
                color: 'var(--accent)',
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border)',
              }"
            >
              <Calendar class="w-3.5 h-3.5" />
              {{ exp.period }}
            </div>
          </div>

          <!-- Description -->
          <p class="text-sm leading-relaxed mb-4 font-sans" :style="{ color: 'var(--text-muted)' }">
            {{ exp.description }}
          </p>

          <!-- Contributions -->
          <div class="space-y-2">
            <h4 class="text-[11px] font-mono uppercase tracking-wider" :style="{ color: 'var(--text-muted)' }">
              Key Contributions & Tasks
            </h4>
            <ul class="space-y-2 text-xs sm:text-sm pl-4 list-disc" :style="{ color: 'var(--text-muted)' }">
              <li
                v-for="(contrib, i) in exp.contributions"
                :key="i"
                class="leading-relaxed font-sans"
                style="marker-color: var(--accent)"
              >
                {{ contrib }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
li::marker {
  color: var(--accent);
}
</style>
