<script setup lang="ts">
import { profile } from '@/src/data/profile';
import { ArrowUp, Code2 } from 'lucide-vue-next';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#0f0f0f] border-t border-[#1f1f1f] py-12 px-6" id="main-footer">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6" id="footer-inner-content">
      
      <!-- Brand stamp -->
      <div class="flex items-center gap-3" id="footer-logo-block">
        <span class="text-base font-black tracking-widest text-[#e5e5e5] uppercase">
          LUTHFI<span class="text-[#b23a3a]">.</span>
        </span>
        <span class="h-4 w-[1px] bg-[#2f2f2f] hidden md:inline"></span>
        <span class="font-mono text-[10px] text-neutral-500 uppercase tracking-widest hidden md:inline">
          PORTFOLIO ARCHIVE v3
        </span>
      </div>

      <!-- Built info with small icon -->
      <div class="flex items-center gap-2 text-neutral-500 font-mono text-[11px] text-center" id="footer-stack-info">
        <Code2 class="w-3.5 h-3.5 text-[#b23a3a]" />
        <span>Built with Vue 3 & Tailwind CSS — Muted Neo Brutalism</span>
      </div>

      <!-- Copyright and scroll link -->
      <div class="flex items-center gap-6" id="footer-copyright-and-top">
        <span class="font-mono text-xs text-neutral-500 tracking-wider">
          &copy; {{ currentYear }} {{ profile.name }}. All Rights Reserved.
        </span>
        
        <!-- Button Scroll to Top (Neo Brutalist style) -->
        <button 
          @click="scrollToTop"
          class="p-2 border border-[#2f2f2f] hover:border-[#b23a3a] bg-[#121212] hover:bg-[#b23a3a]/10 text-neutral-400 hover:text-white transition-all duration-300 shadow-[2px_2px_0px_#1f1f1f] active:translate-x-[1px] active:translate-y-[1px]"
          aria-label="Scroll to top"
          id="btn-footer-scroll-top"
        >
          <ArrowUp class="w-4 h-4" />
        </button>
      </div>

    </div>
  </footer>
</template>
