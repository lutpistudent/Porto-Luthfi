<script setup lang="ts">
import { profile } from '@/data/profile'
import { ArrowUp, Code2, Github, Linkedin, Mail, Phone } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const contactItems = [
  {
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: profile.contact.github.replace('https://github.com/', '@'),
    href: profile.contact.github,
    icon: Github,
  },
  {
    label: 'Phone',
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone}`,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'Luthfiansyah Aufa Windra',
    href: profile.contact.linkedin,
    icon: Linkedin,
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t py-16 px-6 scroll-mt-24"
    :style="{
      backgroundColor: 'var(--bg-primary)',
      borderColor: 'var(--border-light)',
    }"
    id="contact"
  >
    <div class="max-w-6xl mx-auto">
      <div class="mb-10" id="footer-contact-header">
        <span
          class="block font-mono text-xs uppercase tracking-widest mb-3"
          :style="{ color: 'var(--accent)' }"
        >
          Contact
        </span>
        <h2
          class="text-2xl sm:text-3xl font-black uppercase tracking-tight"
          :style="{ color: 'var(--text-primary)' }"
        >
          Let's talk about the next project.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12" id="footer-contact-list">
        <a
          v-for="item in contactItems"
          :key="item.label"
          :href="item.href"
          :target="/^(mailto|tel):/.test(item.href) ? undefined : '_blank'"
          rel="noreferrer"
          class="group flex items-center gap-5 p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1"
          :style="{
            backgroundColor: 'var(--text-primary)',
            borderColor: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            boxShadow: '4px 4px 0px var(--shadow)',
          }"
          :id="`footer-contact-${item.label.toLowerCase()}`"
        >
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center border"
            :style="{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
            }"
          >
            <component :is="item.icon" class="w-5 h-5" />
          </span>
          <span class="min-w-0">
            <span class="block font-mono text-[10px] uppercase tracking-widest opacity-60">
              {{ item.label }}
            </span>
            <span class="block font-mono text-sm sm:text-base font-bold tracking-wider truncate">
              {{ item.value }}
            </span>
          </span>
        </a>
      </div>

      <div class="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-6" :style="{ borderColor: 'var(--border-light)' }">
        <!-- Built With -->
        <div class="flex items-center gap-2 font-mono text-[11px] text-center" :style="{ color: 'var(--text-muted)' }">
          <Code2 class="w-3.5 h-3.5" :style="{ color: 'var(--accent)' }" />
          <span>Built with Vue 3, Vite & Tailwind CSS</span>
        </div>

        <!-- Copyright + Scroll Top -->
        <div class="flex items-center gap-6">
          <span class="font-mono text-xs tracking-wider" :style="{ color: 'var(--text-muted)' }">
            &copy; {{ currentYear }} {{ profile.fullName }}
          </span>

          <button
            @click="scrollToTop"
            class="p-2 border transition-all duration-300 active:translate-x-[1px] active:translate-y-[1px] cursor-pointer hover-lift"
            :style="{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-card-alt)',
              color: 'var(--text-muted)',
              boxShadow: '2px 2px 0px var(--shadow)',
            }"
            aria-label="Scroll to top"
            id="btn-footer-scroll-top"
          >
            <ArrowUp class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
