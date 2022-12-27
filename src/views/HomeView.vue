<template>
  <div>
    <GridWrapper class="center">
      <CardBase
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :image="post.image"
        :date="post.date"
        :text="post.text"
        :route="post.route"
      />
    </GridWrapper>
  </div>
</template>

<script>
import GridWrapper from "@/components/grid/GridWrapper";
import CardBase from "@/components/card/CardBase";
import { reactive } from "vue";

export default {
  components: { CardBase, GridWrapper },
  name: "HomeView",
  setup() {
    const posts = reactive([
      {
        id: 1,
        title: "Art 1",
        image: "art1.jpg",
        date: "12th December, 2018",
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        route: "/1",
      },
      {
        id: 2,
        title: "Art 2",
        image: "art2.jpg",
        date: "11th December, 2018",
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        route: "/2",
      },
      {
        id: 3,
        title: "Art 3",
        image: "art3.jpg",
        date: "10th December, 2018",
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        route: "/3",
      },
      {
        id: 4,
        title: "Art 4",
        image: "art4.jpg",
        date: "9th December, 2018",
        text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        route: "/4",
      },
    ]);

    return {
      posts,
    };
  },
};
</script>
<style scoped>
h1 {
  color: rgb(34, 34, 182, 0.5) !important;
}

.center {
  margin: auto;
  width: 80%;
}
</style>
