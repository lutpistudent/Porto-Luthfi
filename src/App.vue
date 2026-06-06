<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import EducationSection from './components/EducationSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div
    class="min-h-screen font-sans overflow-x-hidden"
    :style="{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
    }"
    id="app-root-container"
  >
    <!-- Navbar -->
    <Navbar />

    <!-- Core Content Sections -->
    <main class="w-full" id="main-content-flow">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>
