<script setup lang="ts">
import { educations } from '@/data/education'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { GraduationCap, Landmark, CheckSquare } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'

const { elementRef } = useIntersectionObserver()
</script>

<template>
  <section
    id="education"
    ref="elementRef"
    class="reveal py-24 px-6 max-w-6xl mx-auto border-b"
    :style="{ borderColor: 'var(--border)' }"
  >
    <SectionTitle
      section-number="05"
      title="Academic Education & Focus"
      subtitle="Pendidikan formal vokasi yang membina pemahaman fundamental hingga lanjutan dalam rekayasa teknologi digital."
    />

    <!-- Education Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="education-grid">
      <!-- Left Decorative -->
      <div
        class="lg:col-span-4 flex flex-col items-center justify-center border p-8 aspect-video lg:aspect-square text-center"
        :style="{
          backgroundColor: 'var(--bg-card-alt)',
          borderColor: 'var(--border)',
          boxShadow: '3px 3px 0px var(--shadow)',
        }"
        id="education-decor"
      >
        <GraduationCap class="w-16 h-16 mb-4" :style="{ color: 'var(--accent)' }" />
        <h3 class="text-lg font-bold" :style="{ color: 'var(--text-secondary)' }">
          Vocational Tech Education
        </h3>
      </div>

      <!-- Right Cards -->
      <div class="lg:col-span-8 space-y-6" id="education-cards">
        <div
          v-for="edu in educations"
          :key="edu.institution"
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
                <Landmark class="w-4 h-4" :style="{ color: 'var(--accent)' }" />
                {{ edu.institution }}
              </h3>
              <p class="text-xs font-mono uppercase tracking-wide mt-1" :style="{ color: 'var(--text-muted)' }">
                {{ edu.period }} | {{ edu.location }}
              </p>
            </div>

            <span
              class="text-[10px] font-mono font-bold uppercase tracking-wider border px-3 py-1.5"
              :style="{
                color: 'var(--accent)',
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border)',
              }"
            >
              Vocational High School
            </span>
          </div>

          <!-- Description -->
          <p class="text-sm leading-relaxed mb-6 font-sans" :style="{ color: 'var(--text-muted)' }">
            {{ edu.description }}
          </p>

          <!-- Key Subjects -->
          <div class="mt-6 pt-4 border-t" :style="{ borderColor: 'var(--border-light)' }">
            <h4
              class="text-[11px] font-mono uppercase tracking-wider mb-3 block"
              :style="{ color: 'var(--text-muted)' }"
            >
              Core Learning Focus
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                v-for="(subject, idx) in edu.keySubjects"
                :key="idx"
                class="flex items-start gap-2 border p-3 text-xs font-mono"
                :style="{
                  backgroundColor: 'var(--bg-card-alt)',
                  borderColor: 'var(--border-light)',
                  color: 'var(--text-secondary)',
                }"
              >
                <CheckSquare class="w-4 h-4 shrink-0 mt-0.5" :style="{ color: 'var(--accent)' }" />
                <span class="leading-normal">{{ subject }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
