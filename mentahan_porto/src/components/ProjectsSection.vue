<script setup lang="ts">
import { projects } from '@/src/data/projects';
import { ArrowUpRight, Github } from 'lucide-vue-next';
</script>

<template>
  <section 
    id="projects" 
    class="py-24 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f]"
  >
    <!-- Header -->
    <div class="mb-16" id="projects-section-header">
      <div class="font-mono text-5xl md:text-7xl font-extrabold text-neutral-800 tracking-tighter mb-4 select-none">
        03 /
      </div>
      <h2 class="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
        Featured Projects
      </h2>
      <div class="h-1 w-12 bg-[#b23a3a] mb-4"></div>
      <p class="font-mono text-xs text-neutral-500 max-w-sm leading-relaxed">
        Pilihan aplikasi web lengkap, kustomisasi antarmuka pengguna, dan integrasi fisik IoT yang dirancang dengan dedikasi penuh.
      </p>
    </div>

    <!-- Project Lists (Editorial Column layout) -->
    <div class="flex flex-col gap-12" id="projects-list-container">
      <div 
        v-for="project in projects"
        :key="project.id"
        class="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-[#2f2f2f] hover:border-[#b23a3a] transition-all duration-300"
        :id="`project-row-${project.id}`"
      >
        <!-- Big Number Indicator -->
        <div class="lg:col-span-2 flex items-start" id="project-index-col">
          <span class="text-5xl lg:text-[75px] font-black font-mono leading-none tracking-tight text-[#1f1f1f] group-hover:text-[#b23a3a] select-none transition-colors duration-300">
            {{ project.id }}
          </span>
        </div>

        <!-- Project Info -->
        <div class="lg:col-span-7 flex flex-col justify-between" id="project-info-col">
          <div>
            <h3 class="text-2xl font-bold text-neutral-200 group-hover:text-white transition-colors flex items-center gap-3">
              {{ project.title }}
              <!-- Featured Pill -->
              <span 
                v-if="project.isFeatured" 
                class="inline-block text-[9px] font-mono tracking-widest uppercase font-normal bg-neutral-900 border border-[#b23a3a]/40 text-[#b23a3a] px-2 py-0.5"
              >
                Featured
              </span>
            </h3>
            
            <p class="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-sans">
              {{ project.description }}
            </p>
          </div>

          <!-- Tags list -->
          <div class="flex flex-wrap gap-2 mt-6" id="project-tags">
            <span 
              v-for="tag in project.tags"
              :key="tag"
              class="text-[10px] font-mono tracking-wider text-neutral-500 bg-neutral-950 border border-[#1f1f1f] px-2.5 py-1 uppercase rounded-sm group-hover:border-[#2f2f2f] group-hover:text-neutral-400 transition-all"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Action Links -->
        <div class="lg:col-span-3 flex lg:flex-col lg:justify-center items-start lg:items-end gap-3 mt-4 lg:mt-0" id="project-actions-col">
          <!-- Github link -->
          <a
            :href="project.githubUrl"
            target="_blank"
            class="w-full sm:w-auto text-center font-mono text-[11px] tracking-widest uppercase border border-[#2f2f2f] hover:border-white text-neutral-400 hover:text-white bg-[#121212] px-4 py-3 flex items-center justify-center gap-2 transition-all duration-200"
            :id="`project-github-${project.id}`"
          >
            <Github class="w-3.5 h-3.5" />
            Repository
          </a>

          <!-- Demo / Detail link -->
          <a
            :href="project.demoUrl"
            class="w-full sm:w-auto text-center font-mono text-[11px] tracking-widest uppercase bg-[#b23a3a] border border-[#b23a3a] text-white px-4 py-3 flex items-center justify-center gap-2 hover:bg-transparent hover:text-[#b23a3a] transition-all duration-200"
            :id="`project-demo-${project.id}`"
          >
            Live Preview
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
