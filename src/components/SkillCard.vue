<script setup lang="ts">
import type { Skill } from '@/types'
import { Layers, Terminal, Sparkles } from 'lucide-vue-next'
import { computed } from 'vue'

/**
 * SkillCard — Displays a single skill with category icon, level badge, and progress indicator.
 * Props: skill (Skill interface)
 */
const props = defineProps<{
  skill: Skill
}>()

const categoryIcon = computed(() => {
  if (props.skill.category === 'Frontend') return Layers
  if (props.skill.category === 'Backend') return Terminal
  return Sparkles
})

const levelDots = computed(() => {
  if (props.skill.level === 'Advanced') return 5
  if (props.skill.level === 'Intermediate') return 4
  return 2
})
</script>

<template>
  <div
    class="group border p-6 flex flex-col justify-between transition-all duration-300 hover-lift cursor-default"
    :style="{
      backgroundColor: 'var(--bg-card)',
      borderColor: 'var(--border)',
      boxShadow: '3px 3px 0px var(--shadow)',
    }"
    @mouseenter="($event.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px var(--accent)'; ($event.currentTarget as HTMLElement).style.borderColor = 'var(--text-muted)'"
    @mouseleave="($event.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px var(--shadow)'; ($event.currentTarget as HTMLElement).style.borderColor = 'var(--border)'"
    :id="`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
  >
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <div
          class="p-2.5 border transition-all"
          :style="{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border)',
          }"
        >
          <component :is="categoryIcon" class="w-4 h-4" :style="{ color: 'var(--accent)' }" />
        </div>
        <div>
          <h3
            class="text-lg font-bold font-sans transition-colors"
            :style="{ color: 'var(--text-secondary)' }"
          >
            {{ skill.name }}
          </h3>
          <span
            class="text-[10px] font-mono uppercase tracking-widest"
            :style="{ color: 'var(--text-muted)' }"
          >
            {{ skill.category }}
          </span>
        </div>
      </div>

      <!-- Level Badge -->
      <span
        class="text-[9px] font-mono uppercase tracking-widest px-2 py-1 border"
        :style="{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border)',
          color: 'var(--accent)',
        }"
      >
        {{ skill.level }}
      </span>
    </div>

    <!-- Description -->
    <p
      v-if="skill.description"
      class="mt-3 text-xs leading-relaxed font-sans"
      :style="{ color: 'var(--text-muted)' }"
    >
      {{ skill.description }}
    </p>

    <!-- Progress Dots -->
    <div
      class="mt-6 pt-4 border-t flex items-center justify-between"
      :style="{ borderColor: 'var(--border-light)' }"
    >
      <span
        class="text-[10px] font-mono uppercase tracking-wider"
        :style="{ color: 'var(--text-muted)' }"
      >
        Expertise Index
      </span>
      <div class="flex gap-1">
        <span
          v-for="n in 5"
          :key="n"
          class="w-2 h-2 border transition-colors duration-300"
          :style="{
            backgroundColor: n <= levelDots ? 'var(--accent)' : 'var(--bg-primary)',
            borderColor: n <= levelDots ? 'var(--accent)' : 'var(--border)',
          }"
        ></span>
      </div>
    </div>
  </div>
</template>
