<script>
import Reader from '@/classes/reader';
import Module from '@/components/ModuleComponent.vue';
export default {
  name: "HomeView",
  components: {
    Module
  },
  data() {
    return {
      featured: [
        {
          "name": "sharepoint",
          "src": "/imgs/sharepoint/sharepoint.png",
          "title": "Sharepoint",
          "description": "Let us upgrade your Sharepoint enviornment"
        }
      ],
      subMenu: [],
      modules: []
    }
  },
  methods: {
    async loadFeatured() {
      try {
        const data = await Reader.load("featured")
        this.featured = data.featured;
        return;
      } catch (e) {
        console.error(`Featured JSON not found`);
      }
    },
    async loadModules() {
      try {
        const data = await Reader.modules();
        this.modules = data.modules;
        return;
      } catch (e) {
        console.error(`Modules JSON not found`);
      }
    }
  },
  async created() {
    this.loadFeatured();
    this.loadModules();
    const system = await Reader.system();
    this.subMenu = system.subMenu;
  }
}
</script>

<template>
  <v-carousel height="400" hide-delimiters progress="blue-darken-2" cycle>
    <v-carousel-item v-for="(item, i) in featured" :key="i" :src="item.src" cover>
      <v-sheet height="100%" color="rgba(0, 0, 0, 0.5)" transparent>
        <div class="d-flex fill-height justify-center align-center">
          <v-card flat class="display-3 px-4" :to="'/page/' + item.name" color="rgba(0, 0, 0, 0.5)">
            <span style="font-size: 144px; color:cornflowerblue; font-weight: bold;">
              0{{ i + 1 }}</span>
            <span style="color:#fff;" class="text-h2 white--text">
              {{ item.title }}
            </span>
            <div style="font-size: 28px; color:#fff; font-weight: bold" class="white--text">
              {{ item.description }}
            </div>
          </v-card>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-tabs optional align-tabs="center" dark>
    <v-tab link v-for="item in subMenu" :key="item.title" :to="item.path">{{ item.title }}</v-tab>
  </v-tabs>
  <v-container fluid>
    <v-row v-for="module in modules" :key="module.title">
      <v-col>
        <module :module="module" />
      </v-col>
    </v-row>
  </v-container>
</template>
