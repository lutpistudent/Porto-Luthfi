<script setup lang="ts">
import { experiences } from '@/src/data/experience';
import { Calendar, Briefcase } from 'lucide-vue-next';
</script>

<template>
  <section 
    id="experience" 
    class="py-24 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f]"
  >
    <!-- Header -->
    <div class="mb-16" id="experience-section-header">
      <div class="font-mono text-5xl md:text-7xl font-extrabold text-neutral-800 tracking-tighter mb-4 select-none">
        04 /
      </div>
      <h2 class="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
        Work & Organizational Experience
      </h2>
      <div class="h-1 w-12 bg-[#b23a3a] mb-4"></div>
      <p class="font-mono text-xs text-neutral-500 max-w-sm leading-relaxed">
        Jejak rekam keterlibatan aktif dalam proyek teknologi intra-sekolah dan kepemimpinan dalam organisasi kesiswaan.
      </p>
    </div>

    <!-- Timeline Layout -->
    <div class="relative pl-6 sm:pl-8 border-l border-[#2f2f2f] ml-2 sm:ml-4 space-y-12" id="experience-timeline">
      <!-- Marker dot list -->
      <div 
        v-for="exp in experiences" 
        :key="exp.id" 
        class="relative"
        :id="`experience-item-${exp.id.toLowerCase()}`"
      >
        <!-- Custom Bullet Shape -->
        <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-[#0f0f0f] border-2 border-[#b23a3a] z-10 flex items-center justify-center rounded-none shadow-[2px_2px_0px_#2f2f2f]" id="timeline-node">
          <div class="w-1.5 h-1.5 bg-[#b23a3a]"></div>
        </div>

        <!-- Experience Card Component -->
        <div class="bg-[#181818] border border-[#2f2f2f] p-6 sm:p-8 hover:border-neutral-500 transition-all duration-300 shadow-[3px_3px_0px_#121212] hover:shadow-[4px_4px_0px_#1f1f1f]" id="experience-card">
          <!-- Stamp and Role -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2f2f2f] pb-4 mb-4" id="experience-card-header">
            <div>
              <h3 class="text-xl font-bold font-sans text-neutral-200 flex items-center gap-2">
                <Briefcase class="w-4 h-4 text-[#b23a3a]" />
                {{ exp.role }}
              </h3>
              <p class="text-sm font-mono text-neutral-400 mt-1">
                {{ exp.company }}
              </p>
            </div>

            <!-- Period Stamp -->
            <div class="flex items-center gap-2 text-xs font-mono text-[#b23a3a] bg-neutral-900 border border-[#2f2f2f] px-3 py-1.5 w-fit" id="experience-period">
              <Calendar class="w-3.5 h-3.5" />
              {{ exp.period }}
            </div>
          </div>

          <!-- Description -->
          <p class="text-neutral-400 text-sm leading-relaxed mb-4 font-sans">
            {{ exp.description }}
          </p>

          <!-- Contributions Bullet List -->
          <div class="space-y-2" id="experience-contributions">
            <h4 class="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              Key Contributions & Tasks
            </h4>
            <ul class="space-y-2 text-xs sm:text-sm text-neutral-400 pl-4 list-disc marker:text-[#b23a3a]">
              <li 
                v-for="(contrib, i) in exp.contributions" 
                :key="i"
                class="leading-relaxed font-sans"
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
