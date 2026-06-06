<script setup lang="ts">
import { educations } from '@/src/data/education';
import { GraduationCap, Landmark, CheckSquare } from 'lucide-vue-next';
</script>

<template>
  <section 
    id="education" 
    class="py-24 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f]"
  >
    <!-- Header -->
    <div class="mb-16" id="education-section-header">
      <div class="font-mono text-5xl md:text-7xl font-extrabold text-neutral-800 tracking-tighter mb-4 select-none">
        05 /
      </div>
      <h2 class="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
        Academic Education & focus
      </h2>
      <div class="h-1 w-12 bg-[#b23a3a] mb-4"></div>
      <p class="font-mono text-xs text-neutral-500 max-w-sm leading-relaxed">
        Pendidikan formal vokasi yang membina pemahaman fundamental hingga lanjutan dalam rekayasa teknologi digital.
      </p>
    </div>

    <!-- Education Content -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="education-grid">
      <!-- Left decorative or logo column -->
      <div class="lg:col-span-4 flex flex-col items-center justify-center bg-[#121212] border border-[#2f2f2f] p-8 aspect-video lg:aspect-square text-center shadow-[3px_3px_0px_#181818]" id="education-decor">
        <GraduationCap class="w-16 h-16 text-[#b23a3a] mb-4" />
        <h3 class="text-lg font-bold text-neutral-200">Vocational Tech Education</h3>
        <p class="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mt-1">SIJA & PPLG Department</p>
      </div>

      <!-- Right detail column -->
      <div class="lg:col-span-8 space-y-6" id="education-cards">
        <div 
          v-for="edu in educations" 
          :key="edu.institution"
          class="bg-[#181818] border border-[#2f2f2f] p-6 sm:p-8 shadow-[3px_3px_0px_#121212] hover:border-neutral-500 transition-all duration-300"
          :id="`education-card-${edu.institution.toLowerCase().replace(/[^a-z0-9]/g, '-')}`"
        >
          <!-- Title & School name -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2f2f2f] pb-4 mb-4" id="education-card-header">
            <div>
              <h3 class="text-xl font-bold font-sans text-neutral-200 flex items-center gap-2">
                <Landmark class="w-4 h-4 text-[#b23a3a]" />
                {{ edu.institution }}
              </h3>
              <p class="text-xs font-mono text-neutral-400 uppercase tracking-wide mt-1">
                {{ edu.period }} | {{ edu.location }}
              </p>
            </div>
            
            <span class="text-[10px] font-mono text-[#b23a3a] bg-neutral-900 border border-[#2f2f2f] px-3 py-1.5 font-bold uppercase tracking-wider">
              High School Vokasional
            </span>
          </div>

          <!-- Description -->
          <p class="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
            {{ edu.description }}
          </p>

          <!-- Core Curriculum focus items -->
          <div class="mt-6 pt-4 border-t border-[#1f1f1f]" id="education-curriculum">
            <h4 class="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3 block">
              Core Learning Focus / Focus Belajar
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="education-subjects-grid">
              <div 
                v-for="(subject, idx) in edu.keySubjects"
                :key="idx"
                class="flex items-start gap-2 bg-[#121212] border border-[#1f1f1f] p-3 text-xs text-neutral-300 font-mono"
              >
                <CheckSquare class="w-4 h-4 text-[#b23a3a] shrink-0 mt-0.5" />
                <span class="leading-normal">{{ subject }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
