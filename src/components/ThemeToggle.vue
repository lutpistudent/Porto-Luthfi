<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative p-2 border rounded-none cursor-pointer transition-all duration-300"
    :class="[
      isDark
        ? 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)]'
        : 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]'
    ]"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    id="theme-toggle-btn"
  >
    <Transition name="theme-icon" mode="out-in">
      <Sun v-if="isDark" class="w-4 h-4" :key="'sun'" />
      <Moon v-else class="w-4 h-4" :key="'moon'" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.2s ease;
}
.theme-icon-enter-from {
  transform: rotate(-90deg) scale(0.5);
  opacity: 0;
}
.theme-icon-leave-to {
  transform: rotate(90deg) scale(0.5);
  opacity: 0;
}
</style>
