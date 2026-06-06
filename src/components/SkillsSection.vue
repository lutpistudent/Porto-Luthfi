<script setup lang="ts">
import { ref, computed } from 'vue'
import { skills } from '@/data/skills'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import SectionTitle from './SectionTitle.vue'
import SkillCard from './SkillCard.vue'

const categories = ['All', 'Frontend', 'Backend', 'Tools & Design'] as const
type Category = (typeof categories)[number]

const activeTab = ref<Category>('All')

const filteredSkills = computed(() => {
  if (activeTab.value === 'All') return skills
  return skills.filter((skill) => skill.category === activeTab.value)
})

const { elementRef } = useIntersectionObserver()
</script>

<template>
  <section
    id="skills"
    ref="elementRef"
    class="reveal py-24 px-6 max-w-6xl mx-auto border-b"
    :style="{ borderColor: 'var(--border)' }"
  >
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="skills-section-header">
      <SectionTitle
        section-number="02"
        title="Skills & Technologies"
        highlight="Skills"
        subtitle="Teknologi dan kemampuan teknis yang digunakan untuk membangun frontend, backend, dan workflow pengembangan."
      />

      <!-- Filter Tabs -->
      <div
        class="flex flex-wrap gap-1 border p-1.5"
        :style="{
          backgroundColor: 'var(--bg-card-alt)',
          borderColor: 'var(--border)',
        }"
        id="skills-filter-tabs"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeTab = cat"
          :class="[
            'px-4 py-2 text-[11px] font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer',
          ]"
          :style="{
            backgroundColor: activeTab === cat ? 'var(--accent)' : 'transparent',
            color: activeTab === cat ? 'white' : 'var(--text-muted)',
            boxShadow: activeTab === cat ? '2px 2px 0px var(--shadow)' : 'none',
          }"
          :id="`skill-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children" :class="{ visible: true }" id="skills-cards-grid">
      <TransitionGroup name="skill-card">
        <SkillCard
          v-for="skill in filteredSkills"
          :key="skill.name"
          :skill="skill"
        />
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.skill-card-enter-active,
.skill-card-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.skill-card-enter-from {
  opacity: 0;
  transform: translateY(15px) scale(0.97);
}
.skill-card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
