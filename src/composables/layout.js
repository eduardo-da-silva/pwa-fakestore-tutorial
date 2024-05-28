import { defineAsyncComponent, onMounted, onUnmounted, ref, shallowRef } from 'vue'

export function useLayout() {
  const layout = shallowRef()
  const currentWidth = ref(0)

  const updateLayout = () => {
    const width = window.innerWidth
    if (width < 768 && width != currentWidth.value) {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutSmall.vue'))
    } else if (width < 1200 && width != currentWidth.value) {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutMedium.vue'))
    } else {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutLarge.vue'))
    }
  }

  onMounted(() => {
    updateLayout()
    // window.addEventListener('resize', updateLayout)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout)
  })

  return { layout }
}
