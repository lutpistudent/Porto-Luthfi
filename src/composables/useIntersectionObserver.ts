import { ref, onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Composable for IntersectionObserver-based scroll reveal animation.
 * Adds 'visible' class when element enters viewport.
 *
 * @param options - IntersectionObserver options
 * @returns elementRef to bind to a DOM element, and isVisible reactive state
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
) {
  const elementRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          entry.target.classList.add('visible')
          // Once visible, stop observing (animate once)
          observer?.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    elementRef,
    isVisible,
  }
}
