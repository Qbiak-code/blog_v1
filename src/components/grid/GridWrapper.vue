<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(100px, auto);
  justify-items: stretch;
  align-items: stretch;
}
/deep/ .nested {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, auto);
  grid-gap: 1em;
  padding: 0px !important;
}
.wrapper >>> div {
  padding: 1em;
}
.wrapper >>> div:nth-child(odd) {
}
.nested >>> div {
  padding: 1em;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="wrapper"] {
    grid-template-columns: 1fr;
  }
}
</style>
