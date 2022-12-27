import { ref, computed } from "vue";

export const collapsed = ref(true);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export const SIDEBAR_WIDTH = 180;
export const SIDEBAR_WIDTH_COLLAPSED = 38;
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);
export const bodyLeftMargin = computed(() => {
  if (collapsed.value) {
    return SIDEBAR_WIDTH_COLLAPSED + 30 + "px";
  } else {
    return SIDEBAR_WIDTH + 30 + "px";
  }
});
