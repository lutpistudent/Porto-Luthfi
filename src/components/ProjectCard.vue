<script setup lang="ts">
import type { GitHubRepo } from '@/types'
import { ArrowUpRight, Github, Star, Code2 } from 'lucide-vue-next'

/**
 * ProjectCard — Displays a single GitHub repository project.
 * Props: project (GitHubRepo), index (display number)
 */
defineProps<{
  project: GitHubRepo
  index: number
}>()
</script>

<template>
  <div
    class="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b transition-all duration-300"
    :style="{ borderColor: 'var(--border)' }"
    @mouseenter="($event.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'"
    @mouseleave="($event.currentTarget as HTMLElement).style.borderColor = 'var(--border)'"
    :id="`project-row-${index}`"
  >
    <!-- Big Number -->
    <div class="lg:col-span-2 flex items-start">
      <span
        class="text-5xl lg:text-[75px] font-black font-mono leading-none tracking-tight select-none transition-colors duration-300"
        :style="{ color: 'var(--section-number)' }"
        :class="'group-hover:!text-[var(--accent)]'"
      >
        {{ String(index).padStart(2, '0') }}
      </span>
    </div>

    <!-- Project Info -->
    <div class="lg:col-span-7 flex flex-col justify-between">
      <div>
        <h3
          class="text-2xl font-bold transition-colors flex items-center gap-3"
          :style="{ color: 'var(--text-secondary)' }"
        >
          {{ project.name }}
        </h3>

        <p
          class="mt-3 text-sm sm:text-base leading-relaxed max-w-xl font-sans"
          :style="{ color: 'var(--text-muted)' }"
        >
          {{ project.description || 'No description available.' }}
        </p>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-6">
        <!-- Language badge -->
        <span
          v-if="project.language"
          class="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border rounded-sm flex items-center gap-1"
          :style="{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border)',
            color: 'var(--accent)',
          }"
        >
          <Code2 class="w-3 h-3" />
          {{ project.language }}
        </span>

        <!-- Stars -->
        <span
          v-if="project.stargazers_count > 0"
          class="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border rounded-sm flex items-center gap-1"
          :style="{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border)',
            color: 'var(--text-muted)',
          }"
        >
          <Star class="w-3 h-3" />
          {{ project.stargazers_count }}
        </span>

        <!-- Topics -->
        <span
          v-for="topic in project.topics?.slice(0, 3)"
          :key="topic"
          class="text-[10px] font-mono tracking-wider px-2.5 py-1 border rounded-sm uppercase transition-all"
          :style="{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-light)',
            color: 'var(--text-muted)',
          }"
        >
          #{{ topic }}
        </span>
      </div>
    </div>

    <!-- Actions -->
    <div class="lg:col-span-3 flex lg:flex-col lg:justify-center items-start lg:items-end gap-3 mt-4 lg:mt-0">
      <a
        :href="project.html_url"
        target="_blank"
        class="w-full sm:w-auto text-center font-mono text-[11px] tracking-widest uppercase border px-4 py-3 flex items-center justify-center gap-2 transition-all duration-200"
        :style="{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg-card-alt)',
          color: 'var(--text-muted)',
        }"
        id="project-github-link"
      >
        <Github class="w-3.5 h-3.5" />
        Repository
      </a>

      <a
        v-if="project.homepage"
        :href="project.homepage"
        target="_blank"
        class="w-full sm:w-auto text-center font-mono text-[11px] tracking-widest uppercase border px-4 py-3 flex items-center justify-center gap-2 transition-all duration-200 text-white"
        :style="{
          backgroundColor: 'var(--accent)',
          borderColor: 'var(--accent)',
        }"
        id="project-demo-link"
      >
        Live Preview
        <ArrowUpRight class="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.group:hover span[class*="group-hover"] {
  color: var(--accent) !important;
}
</style>
