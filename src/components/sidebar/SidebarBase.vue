<template>
  <div
    class="sidebar"
    :style="{ width: sidebarWidth }"
    @mouseenter="collapsed = false"
    @mouseleave="collapsed = true"
  >
    <h1>
      <img
        class="image-fit"
        :class="{ visible: !collapsed, hidden: collapsed }"
        src="../../assets/sidebar-cat.png"
        title="Misia's Blog"
      />
    </h1>

    <SidebarLink
      v-for="link in links"
      v-bind:key="link.id"
      :to="link.to"
      :icon="link.icon"
      :name="link.name"
    >
      {{ link.name }}
    </SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      :title="collapsed ? 'Expand' : 'Collapse'"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>
<script>
import {
  collapsed,
  toggleSidebar,
  sidebarWidth,
  bodyLeftMargin,
} from "./state";
import SidebarLink from "./SidebarLink";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    const links = [
      { id: 1, to: "/", icon: "fas fa-home", name: "Home" },
      { id: 2, to: "/dashboard", icon: "fas fa-columns", name: "Dashboard" },
      { id: 3, to: "/friends", icon: "fas fa-users", name: "Friends" },
      { id: 4, to: "/art", icon: "fas fa-image", name: "Art" },
    ];
    collapsed.value = true;

    return { collapsed, toggleSidebar, sidebarWidth, bodyLeftMargin, links };
  },
};
</script>
<style>
:root {
  --sidebar-bg-color: rgba(47, 87, 133, 0.3);
  --sidebar-item-hover: rgba(94, 152, 218, 0.3);
  --sidebar-item-active: rgba(17, 52, 92, 0.3);
  --sidebar-item-text: rgba(255, 255, 255, 0.7);
  --sidebar-item-text-active: rgb(255, 255, 255);
}
</style>
<style scoped>
.sidebar {
  color: var(--sidebar-item-text-active);
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em 0.5em 0.5em 0.5em;
  margin-right: 2em;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  backdrop-filter: blur(20px);

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: var(--sidebar-item-text-active);

  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.image-fit {
  width: 100%;
  object-fit: cover;
}
.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s linear;
}
/* Fade-Out Effect */
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.3s, opacity 0.3s linear;
}
</style>
