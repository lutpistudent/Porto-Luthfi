<script setup lang="ts">
import { ref, computed } from 'vue';
import { skills } from '@/src/data/skills';
import { Layers, Terminal, Sparkles, Code2 } from 'lucide-vue-next';

const categories = ['All', 'Frontend', 'Backend', 'Tools & Design'] as const;
type Category = typeof categories[number];

const activeTab = ref<Category>('All');

const filteredSkills = computed(() => {
  if (activeTab.value === 'All') return skills;
  return skills.filter(skill => skill.category === activeTab.value);
});

// Helper for graphic icons on headers
const getCategoryIcon = (category: string) => {
  if (category === 'Frontend') return Layers;
  if (category === 'Backend') return Terminal;
  return Sparkles;
};
</script>

<template>
  <section 
    id="skills" 
    class="py-24 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f]"
  >
    <!-- Header with 02 Index -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="skills-section-header">
      <div id="skills-heading-block">
        <div class="font-mono text-5xl md:text-7xl font-extrabold text-neutral-800 tracking-tighter mb-4 select-none">
          02 /
        </div>
        <h2 class="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
          Skills & Technologies
        </h2>
        <div class="h-1 w-12 bg-[#b23a3a]"></div>
      </div>
      
      <!-- Filter Tabs -->
      <div class="flex flex-wrap gap-1 bg-[#121212] border border-[#2f2f2f] p-1.5" id="skills-filter-tabs">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeTab = cat"
          :class="[
            'px-4 py-2 text-[11px] font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer',
            activeTab === cat
              ? 'bg-[#b23a3a] text-white shadow-[2px_2px_0px_#1f1f1f]'
              : 'text-neutral-400 hover:text-white hover:bg-[#181818]'
          ]"
          :id="`skill-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Skills Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="skills-cards-grid">
      <div 
        v-for="(skill, index) in filteredSkills"
        :key="skill.name"
        class="group bg-[#181818] border border-[#2f2f2f] hover:border-neutral-500 p-6 flex flex-col justify-between transition-all duration-300 shadow-[3px_3px_0px_#121212] hover:shadow-[4px_4px_0px_#b23a3a] hover:translate-x-[-1px] hover:translate-y-[-1px]"
        :id="`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
      >
        <div class="flex items-start justify-between" id="skill-card-top-row">
          <div class="flex items-center gap-3">
            <!-- Icon Component placeholder/styling -->
            <div class="p-2.5 bg-[#0f0f0f] border border-[#2f2f2f] group-hover:border-[#b23a3a] transition-all">
              <component :is="getCategoryIcon(skill.category)" class="w-4 h-4 text-[#b23a3a]" />
            </div>
            <div>
              <h3 class="text-lg font-bold font-sans text-neutral-200 group-hover:text-white transition-colors">
                {{ skill.name }}
              </h3>
              <span class="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                {{ skill.category }}
              </span>
            </div>
          </div>

          <!-- Proficiency Badge -->
          <span class="text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-neutral-900 border border-[#2f2f2f] text-[#b23a3a]">
            {{ skill.level }}
          </span>
        </div>

        <!-- Custom Visual Progress Bar (Sleek minimalist, monochrome) -->
        <div class="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center justify-between" id="skill-progress-bar">
          <span class="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Expertise Index</span>
          <div class="flex gap-1">
            <span 
              v-for="n in 5" 
              :key="n"
              :class="[
                'w-2 h-2 border transition-colors duration-300',
                n <= (skill.level === 'Advanced' ? 5 : 4)
                  ? 'bg-[#b23a3a] border-[#b23a3a]' 
                  : 'bg-[#0f0f0f] border-[#2f2f2f]'
              ]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
