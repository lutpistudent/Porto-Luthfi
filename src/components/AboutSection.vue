<script setup lang="ts">
import { profile } from '@/data/profile'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionTitle from './SectionTitle.vue'

const { elementRef } = useIntersectionObserver()
</script>

<template>
  <section
    id="about"
    ref="elementRef"
    class="reveal py-20 md:py-24 px-6 max-w-6xl mx-auto border-b grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
    :style="{ borderColor: 'var(--border)' }"
  >
    <!-- Left Column -->
    <div class="lg:col-span-3 flex flex-col justify-start lg:sticky lg:top-28" id="about-heading-column">
      <SectionTitle
        section-number="01"
        title="About Profile"
      />
    </div>

    <!-- Right Column -->
    <div class="lg:col-span-9 flex flex-col gap-7 max-w-3xl" id="about-content-column">
      <!-- Quote -->
      <blockquote
        class="text-xl sm:text-2xl md:text-3xl font-semibold tracking-normal border-l-4 pl-5 sm:pl-6 py-1 leading-snug max-w-3xl"
        :style="{
          color: 'var(--text-primary)',
          borderColor: 'var(--accent)',
        }"
        id="about-quote"
      >
        "I'm focused on building
        <span :style="{ color: 'var(--accent)' }">clean interfaces</span>,
        structured backends, and useful digital experiences."
      </blockquote>

      <div class="space-y-7 lg:-ml-48 xl:-ml-[18.5rem] lg:w-[calc(100%+12rem)] xl:w-[calc(100%+18.5rem)]" id="about-lower-content">
        <!-- Bio -->
        <div class="space-y-5 max-w-5xl" id="about-detailed-text">
          <p class="text-sm sm:text-base leading-8 font-sans" :style="{ color: 'var(--text-muted)' }">
            {{ profile.aboutDetailed }}
          </p>
          <p class="text-sm sm:text-base leading-8 font-sans" :style="{ color: 'var(--text-muted)' }">
            {{ profile.aboutExtra }}
          </p>
        </div>

        <!-- Stats Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-7 border-t max-w-3xl"
          :style="{ borderColor: 'var(--border-light)' }"
          id="about-stats"
        >
          <div
            v-for="(stat, i) in profile.stats"
            :key="i"
            class="border p-5 hover-lift min-h-28 flex flex-col justify-center"
            :style="{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: '3px 3px 0px var(--shadow)',
            }"
            :id="`about-stat-${i + 1}`"
          >
            <span
              class="block text-2xl sm:text-3xl font-black font-mono leading-none mb-3"
              :style="{ color: stat.accent ? 'var(--accent)' : 'var(--text-secondary)' }"
            >
              {{ stat.value }}
            </span>
            <span class="text-[11px] font-mono uppercase tracking-widest leading-relaxed" :style="{ color: 'var(--text-muted)' }">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
