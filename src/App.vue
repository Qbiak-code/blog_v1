<template>
  <div class="gradient" />
  <div class="bg" />
  <div class="logo">
    <img src="./assets/logo.png" title="Misia's Blog" />
  </div>
  <SidebarBase />
  <div
    class="background-transition"
    :style="{
      'margin-left': bodyLeftMargin,
      'margin-top': '150px',
      'margin-right': '15px',
    }"
  >
    <router-view />
  </div>
</template>
<script>
import SidebarBase from "@/components/sidebar/SidebarBase";
import { bodyLeftMargin } from "@/components/sidebar/state";
export default {
  components: { SidebarBase },
  setup() {
    return { bodyLeftMargin };
  },
};
</script>

<style>
#app {
  font-family: "Roboto", "Gill Sans", "Gill Sans MT", "Trebuchet MS",
    "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.bg {
  /* The image used */
  background-image: url("./assets/background.jpg");

  position: fixed;
  top: 0;
  left: 0;

  /* Full height */
  height: 100%;
  width: 100%;
  z-index: -1;

  /* Center and scale the image nicely */

  background-repeat: no-repeat;
  background-size: cover;
}
.gradient {
  background: -moz-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 75%,
    #000000 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 75%,
    #000000 100%
  );
  background: linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, #000000 100%);
  position: fixed;
  top: 0;
  left: 0;

  /* Full height */
  height: 100%;
  width: 100%;
  z-index: 1;

  /* Center and scale the image nicely */

  background-repeat: no-repeat;
  background-size: cover;
}
.logo {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 2em;
}

.background-transition {
  transition: 0.3s ease;
}
</style>
