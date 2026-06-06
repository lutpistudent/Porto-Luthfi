<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import EducationSection from './components/EducationSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans selection:bg-[#b23a3a] selection:text-white overflow-x-hidden" id="app-root-container">
    <!-- Navbar -->
    <Navbar />

    <!-- Core Content Sections -->
    <main class="w-full" id="main-content-flow">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
/* Smooth scrolling is activated globally */
html {
  scroll-behavior: smooth;
}

/* Custom subtle scrollbar styling matching editorial dark theme */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0f0f0f;
}
::-webkit-scrollbar-thumb {
  background: #2f2f2f;
  border: 1px solid #0f0f0f;
}
::-webkit-scrollbar-thumb:hover {
  background: #b23a3a;
}
</style>
