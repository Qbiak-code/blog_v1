<template>
  <div class="card" style="text-shadow: 4px 0px 13px rgba(0,0,0,0.45);">
    <h2>{{ title }}</h2>
    <h4 class="date">{{ date }}</h4>
    <section>
      <img :src="require('@/assets/' + image)" class="card-image" alt="" />
      <p >
        {{ text }}
      </p>
      <a :href="route">Read More</a>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    text: { type: String, required: true },
    route: { type: String, required: true },
  },
  setup() {},
};
</script>
<style scoped>
.card {
  border-radius: 8px;
  backdrop-filter: blur(20px);
  background-color: var(--sidebar-bg-color);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
  box-shadow: rgba(255, 255, 255, 0.15) 0px 48px 100px 0px;
}
.card-image {
  margin-right: 15px;
  max-width: 50%;
  max-height: 50%;
  object-fit: cover;
  float: left;
  box-shadow: inset 1px 1px 1px 1px black;
}
h1, h2, h3, h4 {
  color: var(--sidebar-item-text-active);
}
p {
  color: var(--sidebar-item-text);
}
a:link {
  color: var(--sidebar-item-text);
}

a:visited {
  color: var(--sidebar-item-text);
}

a:hover {
  color: red;
}

a:active {
  color: blue;
}
</style>
