import { ref, watch } from 'vue'

const isDark = ref(true)

/**
 * Initialize theme from localStorage or default to dark.
 */
function initTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isDark.value = false
  } else {
    isDark.value = true
  }
  applyTheme()
}

/**
 * Apply the current theme to the HTML root element.
 */
function applyTheme() {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.add('light')
    root.classList.remove('dark')
  }
}

/**
 * Toggle between dark and light mode.
 */
function toggleTheme() {
  isDark.value = !isDark.value
}

// Watch for changes and persist
watch(isDark, (newVal) => {
  localStorage.setItem('theme', newVal ? 'dark' : 'light')
  applyTheme()
})

/**
 * Composable for dark/light theme management.
 */
export function useTheme() {
  initTheme()
  return {
    isDark,
    toggleTheme,
  }
}
