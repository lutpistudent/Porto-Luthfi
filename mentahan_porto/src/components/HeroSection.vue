<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-vue-next';
import { profile } from '@/src/data/profile';

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section 
    id="home" 
    class="min-h-[85vh] flex flex-col justify-center py-20 px-6 max-w-6xl mx-auto border-b border-[#2f2f2f]"
  >
    <!-- Top Meta tag (Small mono text) -->
    <div class="flex items-center gap-2 mb-6 animate-fade-in-up" style="animation-delay: 100s;">
      <span class="inline-block w-2- h-2- px-2.5 py-1 text-[10px] font-mono tracking-widest bg-[#181818] border border-[#2f2f2f] text-neutral-400 uppercase rounded-sm">
        Available for School Projects & Freelance
      </span>
      <span class="h-[1px] w-12 bg-[#2f2f2f]"></span>
      <span class="text-[10px] font-mono tracking-wider text-[#9f3434] uppercase font-bold">
        Yogyakarta, ID
      </span>
    </div>

    <!-- Editorial Name Header -->
    <div class="mb-8 animate-fade-in-up" id="hero-display-name">
      <h1 class="text-5xl sm:text-7xl md:text-[95px] font-black tracking-tighter leading-[0.9] text-[#e5e5e5] uppercase select-none">
        Designing<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#e5e5e5] via-[#a3a3a3] to-[#e5e5e5] hover:text-[#b23a3a] transition-all duration-300">Digital</span> Code<span class="text-[#b23a3a]">.</span>
      </h1>
      <p class="mt-4 font-mono text-sm sm:text-base text-[#b23a3a] uppercase tracking-widest font-semibold flex items-center gap-2">
        <span>—</span> {{ profile.role }}
      </p>
    </div>

    <!-- Editorial Layout: Left column name metadata, right column bio + buttons -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#1f1f1f] items-start animate-fade-in-up" id="hero-content">
      <!-- Left Metadata -->
      <div class="lg:col-span-4 flex flex-col gap-3" id="hero-metadata">
        <span class="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">Core Philosophy</span>
        <h3 class="text-xl font-bold font-sans text-neutral-300 leading-snug">
          "Code is architecture, interface is human experience."
        </h3>
        <!-- Social Icons Minimal -->
        <div class="flex items-center gap-2 mt-2" id="hero-social-links">
          <a 
            :href="profile.contact.github" 
            target="_blank" 
            class="p-2 border border-[#2f2f2f] bg-[#181818] text-neutral-400 hover:text-white hover:border-[#b23a3a] hover:bg-[#b23a3a]/10 transition-all duration-200"
            id="hero-github-link"
          >
            <Github class="w-4 h-4" />
          </a>
          <a 
            :href="profile.contact.linkedin" 
            target="_blank" 
            class="p-2 border border-[#2f2f2f] bg-[#181818] text-neutral-400 hover:text-white hover:border-[#b23a3a] hover:bg-[#b23a3a]/10 transition-all duration-200"
            id="hero-linkedin-link"
          >
            <Linkedin class="w-4 h-4" />
          </a>
          <a 
            :href="`mailto:${profile.contact.email}`" 
            class="p-2 border border-[#2f2f2f] bg-[#181818] text-neutral-400 hover:text-white hover:border-[#b23a3a] hover:bg-[#b23a3a]/10 transition-all duration-200"
            id="hero-email-link"
          >
            <Mail class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Right Description and CTAs -->
      <div class="lg:col-span-8 flex flex-col gap-6" id="hero-main-bio">
        <p class="text-base sm:text-lg text-neutral-400 leading-relaxed font-sans max-w-2xl">
          {{ profile.description }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 pt-2" id="hero-cta-buttons">
          <button 
            @click="scrollToSection('#projects')"
            class="group px-6 py-3.5 bg-neutral-900 border-2 border-neutral-700 hover:border-[#b23a3a] text-[#e5e5e5] hover:text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 shadow-[4px_4px_0px_#1f1f1f] hover:shadow-[4px_4px_0px_#9f3434] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            id="hero-btn-projects"
          >
            Explore Projects
            <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <button 
            @click="scrollToSection('#contact')"
            class="px-6 py-3.5 bg-transparent border border-[#2f2f2f] hover:border-neutral-400 text-neutral-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-all duration-300"
            id="hero-btn-contact"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
