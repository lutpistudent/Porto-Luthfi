<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-vue-next'
import { profile } from '@/data/profile'

const nameParts = profile.fullName.split(' ')
const firstName = nameParts[0] || profile.fullName
const remainingName = nameParts.slice(1).join(' ')
const emailSubject = encodeURIComponent('Portfolio Contact')
const emailBody = encodeURIComponent(
  'Halo Luthfiansyah,\n\nSaya ingin menghubungi kamu terkait portfolio/project.\n\n'
)
const emailHref = `mailto:${profile.contact.email}?subject=${emailSubject}&body=${emailBody}`

const scrollToSection = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const navbarOffset = 96
    const targetTop = el.getBoundingClientRect().top + window.scrollY - navbarOffset

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <section
    id="home"
    class="min-h-[85vh] flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20 px-6 max-w-6xl mx-auto border-b"
    :style="{ borderColor: 'var(--border)' }"
  >
    <!-- Top Meta Tag -->
    <div class="flex items-center gap-2 mb-6 animate-fade-in-up" style="animation-delay: 0.1s">
      <span
        class="inline-block px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded-sm border"
        :style="{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--text-muted)',
        }"
      >
        Available for Internship & Projects
      </span>
      <span class="h-[1px] w-12" :style="{ backgroundColor: 'var(--border)' }"></span>
      <span
        class="text-[10px] font-mono tracking-wider uppercase font-bold"
        :style="{ color: 'var(--accent)' }"
      >
        Yogyakarta, ID
      </span>
    </div>

    <!-- Editorial Name Header -->
    <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.2s" id="hero-display-name">
      <h1
        class="text-4xl sm:text-6xl md:text-[88px] font-black tracking-normal leading-[0.95] uppercase select-none break-words"
        :style="{ color: 'var(--text-primary)' }"
      >
        {{ firstName }}<br />
        <span class="animate-floating inline-block" :style="{ color: 'var(--text-secondary)' }">
          {{ remainingName }}
        </span><span :style="{ color: 'var(--accent)' }">.</span>
      </h1>
      <p
        class="mt-4 font-mono text-sm sm:text-base uppercase tracking-widest font-semibold flex items-center gap-2"
        :style="{ color: 'var(--accent)' }"
      >
        <span>—</span> {{ profile.role }}
      </p>
    </div>

    <!-- Editorial Layout -->
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t items-start animate-fade-in-up"
      :style="{ borderColor: 'var(--border-light)' }"
      style="animation-delay: 0.4s"
      id="hero-content"
    >
      <!-- Left Metadata -->
      <div class="lg:col-span-4 flex flex-col gap-3" id="hero-metadata">
        <span class="font-mono text-[11px] uppercase tracking-widest" :style="{ color: 'var(--text-muted)' }">
          Core Philosophy
        </span>
        <h3 class="text-xl font-bold font-sans leading-snug" :style="{ color: 'var(--text-secondary)' }">
          "Code is architecture, interface is human experience."
        </h3>
        <!-- Social Icons -->
        <div class="flex items-center gap-2 mt-2" id="hero-social-links">
          <a
            :href="profile.contact.github"
            target="_blank"
            class="p-2 border transition-all duration-200 hover-lift"
            :style="{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-muted)',
            }"
            id="hero-github-link"
          >
            <Github class="w-4 h-4" />
          </a>
          <a
            :href="profile.contact.linkedin"
            target="_blank"
            class="p-2 border transition-all duration-200 hover-lift"
            :style="{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-muted)',
            }"
            id="hero-linkedin-link"
          >
            <Linkedin class="w-4 h-4" />
          </a>
          <a
            :href="emailHref"
            class="p-2 border transition-all duration-200 hover-lift"
            :style="{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-muted)',
            }"
            id="hero-email-link"
          >
            <Mail class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Right Description + CTAs -->
      <div class="lg:col-span-8 flex flex-col gap-6" id="hero-main-bio">
        <p
          class="text-base sm:text-lg leading-relaxed font-sans max-w-2xl"
          :style="{ color: 'var(--text-muted)' }"
        >
          {{ profile.description }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 pt-2" id="hero-cta-buttons">
          <button
            @click="scrollToSection('#projects')"
            class="group px-6 py-3.5 border-2 font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer"
            :style="{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              boxShadow: '4px 4px 0px var(--shadow)',
            }"
            @mouseenter="($event.target as HTMLElement).style.borderColor = 'var(--accent)'; ($event.target as HTMLElement).style.boxShadow = '4px 4px 0px var(--shadow-accent)'"
            @mouseleave="($event.target as HTMLElement).style.borderColor = 'var(--border)'; ($event.target as HTMLElement).style.boxShadow = '4px 4px 0px var(--shadow)'"
            id="hero-btn-projects"
          >
            Explore Projects
            <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            @click="scrollToSection('#contact')"
            class="px-6 py-3.5 bg-transparent border font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
            :style="{
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
            }"
            id="hero-btn-contact"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
