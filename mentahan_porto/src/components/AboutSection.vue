<script setup lang="ts">
import { profile } from '@/src/data/profile';
</script>

<template>
  <section 
    id="about" 
    class="py-24 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
  >
    <!-- Left Section Title and Huge Identifier -->
    <div class="lg:col-span-4 flex flex-col justify-start" id="about-heading-column">
      <!-- Section Number -->
      <div class="font-mono text-5xl md:text-7xl font-extrabold text-neutral-800 tracking-tighter mb-4 select-none" id="about-section-number">
        01 /
      </div>
      <h2 class="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2" id="about-section-title">
        About Profile
      </h2>
      <div class="h-1 w-12 bg-[#b23a3a] mb-6" id="about-title-line"></div>
      <p class="font-mono text-xs text-neutral-500 max-w-xs leading-relaxed" id="about-meta-text">
        Dedicated student developer focusing on building robust systems and aesthetic, ultra-clean web experiences.
      </p>
    </div>

    <!-- Right Section Main Content (Editorial layout) -->
    <div class="lg:col-span-8 flex flex-col gap-8" id="about-content-column">
      <!-- Huge Headline intro statement -->
      <blockquote 
        class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#e5e5e5] border-l-4 border-[#b23a3a] pl-6 py-2 leading-snug"
        id="about-quote"
      >
        "I'm focused on building <span class="text-[#b23a3a]">clean interfaces</span>, structured backends, and useful digital experiences."
      </blockquote>

      <!-- Detailed biographical statements -->
      <div class="space-y-6 text-neutral-400" id="about-detailed-text">
        <p class="text-base sm:text-lg leading-relaxed font-sans">
          {{ profile.aboutDetailed }}
        </p>

        <p class="text-sm sm:text-base leading-relaxed font-sans text-neutral-500">
          Melalui kombinasi pembelajaran formal di kelas dan pengerjaan proyek riil secara mandiri maupun dalam tim, saya terus berupaya menguasai alur kerja rekayasa perangkat lunak modern. Hal ini mencakup menulis kode yang terstruktur bersih, merancang skema basis data ternormalisasi, mengamankan endpoint API, dan menyajikan desain UI yang mengutamakan kenyamanan pengguna (User Centricity).
        </p>
      </div>

      <!-- Creative stats grid (Minimal Neo-Brutalist) -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-[#1f1f1f]" id="about-stats">
        <div class="bg-[#181818] border border-[#2f2f2f] p-4 shadow-[3px_3px_0px_#121212]" id="about-stat-1">
          <span class="block text-2xl font-black font-mono text-[#b23a3a]">10+</span>
          <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Completed Projects</span>
        </div>
        <div class="bg-[#181818] border border-[#2f2f2f] p-4 shadow-[3px_3px_0px_#121212]" id="about-stat-2">
          <span class="block text-2xl font-black font-mono text-neutral-300">3+ Year</span>
          <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Learning Coding</span>
        </div>
        <div class="col-span-2 md:col-span-1 bg-[#181818] border border-[#2f2f2f] p-4 shadow-[3px_3px_0px_#121212]" id="about-stat-3">
          <span class="block text-2xl font-black font-mono text-[#b23a3a]">99%</span>
          <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Clean Design Mindset</span>
        </div>
      </div>
    </div>
  </section>
</template>
