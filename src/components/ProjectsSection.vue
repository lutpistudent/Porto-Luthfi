<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { GitHubRepo } from '@/types'
import { fetchGitHubRepos } from '@/services/githubService'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { AlertCircle, Loader2 } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'

const repos = ref<GitHubRepo[]>([])
const isLoading = ref(true)
const hasError = ref(false)
const username = import.meta.env.VITE_GITHUB_USERNAME || ''

const { elementRef } = useIntersectionObserver()

onMounted(async () => {
  try {
    repos.value = await fetchGitHubRepos(username)
    if (repos.value.length === 0 && username) {
      hasError.value = true
    }
  } catch {
    hasError.value = true
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section
    id="projects"
    ref="elementRef"
    class="reveal py-24 px-6 max-w-6xl mx-auto border-b"
    :style="{ borderColor: 'var(--border)' }"
  >
    <SectionTitle
      section-number="03"
      title="Featured Projects"
      subtitle="Pilihan repository dari akun GitHub — diambil secara otomatis melalui GitHub REST API."
    />

    <!-- Loading State -->
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 gap-4">
      <Loader2
        class="w-8 h-8 animate-spin"
        :style="{ color: 'var(--accent)' }"
      />
      <span class="font-mono text-xs uppercase tracking-widest" :style="{ color: 'var(--text-muted)' }">
        Fetching repositories from GitHub...
      </span>
    </div>

    <!-- Error / No Username State -->
    <div
      v-else-if="hasError || (!username && repos.length === 0)"
      class="border p-8 text-center"
      :style="{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }"
    >
      <AlertCircle class="w-10 h-10 mx-auto mb-4" :style="{ color: 'var(--accent)' }" />
      <h3 class="text-lg font-bold font-mono mb-2" :style="{ color: 'var(--text-primary)' }">
        {{ !username ? 'GitHub Username Not Configured' : 'Failed to Load Projects' }}
      </h3>
      <p class="font-mono text-xs max-w-md mx-auto leading-relaxed" :style="{ color: 'var(--text-muted)' }">
        {{ !username
          ? 'Set VITE_GITHUB_USERNAME in your .env file to fetch repositories automatically.'
          : 'GitHub API might be temporarily unavailable. Please try again later.'
        }}
      </p>
    </div>

    <!-- Projects List -->
    <div v-else class="flex flex-col gap-4" id="projects-list-container">
      <ProjectCard
        v-for="(repo, index) in repos.slice(0, 6)"
        :key="repo.id"
        :project="repo"
        :index="index + 1"
      />
    </div>
  </section>
</template>
