<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const isMenuOpen = ref(false);
const activeSection = ref('home');
const scrollY = ref(0);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
  
  // Update active section based on scroll position
  for (const item of navItems) {
    const el = document.querySelector(item.href);
    if (el) {
      const rect = el.getBoundingClientRect();
      // If the top of the element is visible near the top of the viewport
      if (rect.top <= 120 && rect.bottom > 120) {
        activeSection.value = item.href.substring(1);
        break;
      }
    }
  }
};

const scrollToSection = (href: string) => {
  isMenuOpen.value = false;
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = href.substring(1);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // initial call
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    :class="[
      'sticky top-0 z-50 transition-all duration-300 border-b',
      scrollY > 20 
        ? 'bg-[#0f0f0f]/90 backdrop-blur-md border-[#2f2f2f] py-4' 
        : 'bg-[#0f0f0f] border-transparent py-6'
    ]"
    id="main-navbar"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a 
        href="#home" 
        @click.prevent="scrollToSection('#home')"
        class="text-xl font-black tracking-tighter text-[#e5e5e5] hover:text-[#b23a3a] transition-colors duration-200 uppercase flex items-center gap-1 id-brand"
        id="navbar-logo"
      >
        Luthfi<span class="text-[#b23a3a]">.</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1" id="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          :class="[
            'px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 border rounded-none',
            activeSection === item.href.substring(1)
              ? 'bg-[#181818] text-[#b23a3a] border-[#b23a3a] shadow-[2px_2px_0px_#b23a3a]'
              : 'text-neutral-400 border-transparent hover:text-[#e5e5e5] hover:bg-[#181818] hover:border-[#2f2f2f]'
          ]"
          :id="`nav-link-${item.name.toLowerCase()}`"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- CTA or Status (Minimal editorial) -->
      <div class="hidden md:block" id="nav-cta-wrapper">
        <a 
          href="#contact" 
          @click.prevent="scrollToSection('#contact')"
          class="font-mono text-xs tracking-wider uppercase text-neutral-300 border border-[#2f2f2f] hover:border-[#b23a3a] hover:bg-[#b23a3a] hover:text-white transition-all duration-300 px-4 py-2 shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#9f3434] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]"
          id="btn-nav-contact"
        >
          Hire Me
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu"
        class="md:hidden p-2 text-neutral-400 hover:text-[#e5e5e5] border border-transparent hover:border-[#2f2f2f] transition-all"
        aria-label="Toggle menu"
        id="mobile-menu-toggle-btn"
      >
        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-[#0f0f0f] border-b border-[#2f2f2f] py-4 px-6 animate-fade-in"
      id="mobile-menu-drawer"
    >
      <nav class="flex flex-col gap-2">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          :class="[
            'px-4 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-200 border text-center',
            activeSection === item.href.substring(1)
              ? 'bg-[#181818] text-[#b23a3a] border-[#b23a3a] shadow-[3px_3px_0px_#b23a3a]'
              : 'text-neutral-400 border-[#1f1f1f] bg-[#121212] hover:text-[#e5e5e5] hover:bg-[#181818] hover:border-[#2f2f2f]'
          ]"
          :id="`mobile-nav-link-${item.name.toLowerCase()}`"
        >
          {{ item.name }}
        </a>
        <a 
          href="#contact" 
          @click.prevent="scrollToSection('#contact')"
          class="mt-2 text-center font-mono text-sm tracking-widest uppercase text-white bg-[#b23a3a] border border-[#b23a3a] py-3 shadow-[4px_4px_0px_#1f1f1f] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#1f1f1f]"
          id="btn-nav-contact-mobile"
        >
          Contact Me
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
