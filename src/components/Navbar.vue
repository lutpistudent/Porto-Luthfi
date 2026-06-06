<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const AUTO_HIDE_START = 180
const HIDE_AFTER_SCROLL_DOWN = 96

const isMenuOpen = ref(false)
const activeSection = ref('home')
const scrollY = ref(0)
const lastScrollY = ref(0)
const downwardScrollDistance = ref(0)
const isNavbarVisible = ref(true)
const hasSolidNavbar = computed(() => scrollY.value > 24 || isMenuOpen.value)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    isNavbarVisible.value = true
  }
}

const handleScroll = () => {
  const currentScrollY = Math.max(window.scrollY, 0)
  const scrollDelta = currentScrollY - lastScrollY.value

  scrollY.value = currentScrollY

  if (isMenuOpen.value || currentScrollY < 16) {
    isNavbarVisible.value = true
    downwardScrollDistance.value = 0
  } else if (scrollDelta > 8) {
    downwardScrollDistance.value += scrollDelta
    if (
      currentScrollY > AUTO_HIDE_START &&
      downwardScrollDistance.value > HIDE_AFTER_SCROLL_DOWN
    ) {
      isNavbarVisible.value = false
    }
  } else if (scrollDelta < -8) {
    isNavbarVisible.value = true
    downwardScrollDistance.value = 0
  }

  lastScrollY.value = currentScrollY

  for (const item of navItems) {
    const el = document.querySelector(item.href)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120 && rect.bottom > 120) {
        activeSection.value = item.href.substring(1)
        break
      }
    }
  }
}

const scrollToSection = (href: string) => {
  isMenuOpen.value = false
  isNavbarVisible.value = true
  const el = document.querySelector(href)
  if (el) {
    const navbarOffset = 96
    const targetTop = el.getBoundingClientRect().top + window.scrollY - navbarOffset

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    })

    if (window.location.hash !== href) {
      window.history.pushState(null, '', href)
    }

    activeSection.value = href.substring(1)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  if (window.location.hash) {
    requestAnimationFrame(() => scrollToSection(window.location.hash))
  } else {
    handleScroll()
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transform-gpu transition-all duration-300 border-b',
      isNavbarVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full',
      hasSolidNavbar
        ? 'backdrop-blur-md py-4'
        : 'py-5 md:py-6',
    ]"
    :style="{
      backgroundColor: hasSolidNavbar ? 'color-mix(in srgb, var(--bg-primary) 84%, transparent)' : 'transparent',
      borderColor: hasSolidNavbar ? 'var(--border)' : 'transparent',
      boxShadow: hasSolidNavbar ? '0 10px 30px color-mix(in srgb, var(--bg-primary) 55%, transparent)' : 'none',
    }"
    id="main-navbar"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-end lg:justify-between">
      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1" id="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          :class="[
            'px-3 py-2 font-mono text-[11px] tracking-wider uppercase transition-all duration-200 border rounded-none',
            activeSection === item.href.substring(1)
              ? 'border-[var(--accent)]'
              : 'border-transparent hover:border-[var(--border)]'
          ]"
          :style="{
            backgroundColor: activeSection === item.href.substring(1) ? 'var(--bg-card)' : 'transparent',
            color: activeSection === item.href.substring(1) ? 'var(--accent)' : 'var(--text-muted)',
            boxShadow: activeSection === item.href.substring(1) ? '2px 2px 0px var(--accent)' : 'none',
          }"
          :id="`nav-link-${item.name.toLowerCase()}`"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Right side: Theme Toggle + CTA + Mobile Menu -->
      <div class="flex items-center gap-3">
        <ThemeToggle />

        <!-- CTA Button (Desktop) -->
        <a
          href="#contact"
          @click.prevent="scrollToSection('#contact')"
          class="hidden lg:inline-flex font-mono text-[11px] tracking-wider uppercase border transition-all duration-300 px-4 py-2 items-center gap-2 hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]"
          :style="{
            color: 'var(--text-secondary)',
            borderColor: 'var(--border)',
            boxShadow: '3px 3px 0px var(--shadow)',
          }"
          @mouseenter="($event.target as HTMLElement).style.borderColor = 'var(--accent)'; ($event.target as HTMLElement).style.backgroundColor = 'var(--accent)'; ($event.target as HTMLElement).style.color = 'white'; ($event.target as HTMLElement).style.boxShadow = '3px 3px 0px var(--shadow-accent)'"
          @mouseleave="($event.target as HTMLElement).style.borderColor = 'var(--border)'; ($event.target as HTMLElement).style.backgroundColor = 'transparent'; ($event.target as HTMLElement).style.color = 'var(--text-secondary)'; ($event.target as HTMLElement).style.boxShadow = '3px 3px 0px var(--shadow)'"
          id="btn-nav-contact"
        >
          Hire Me
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 transition-all border border-transparent cursor-pointer"
          :style="{ color: 'var(--text-muted)' }"
          aria-label="Toggle menu"
          id="mobile-menu-toggle-btn"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="drawer">
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 w-full border-b py-4 px-6"
        :style="{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border)',
        }"
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
                ? 'border-[var(--accent)]'
                : 'border-[var(--border-light)]'
            ]"
            :style="{
              backgroundColor: activeSection === item.href.substring(1) ? 'var(--bg-card)' : 'var(--bg-card-alt)',
              color: activeSection === item.href.substring(1) ? 'var(--accent)' : 'var(--text-muted)',
              boxShadow: activeSection === item.href.substring(1) ? '3px 3px 0px var(--accent)' : 'none',
            }"
            :id="`mobile-nav-link-${item.name.toLowerCase()}`"
          >
            {{ item.name }}
          </a>
          <a
            href="#contact"
            @click.prevent="scrollToSection('#contact')"
            class="mt-2 text-center font-mono text-sm tracking-widest uppercase py-3 text-white transition-all"
            :style="{
              backgroundColor: 'var(--accent)',
              borderColor: 'var(--accent)',
              border: '1px solid var(--accent)',
              boxShadow: '4px 4px 0px var(--shadow)',
            }"
            id="btn-nav-contact-mobile"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
