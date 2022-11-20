<script>
import Reader from '@/classes/reader';

export default {
  data() {
    return {
      theme: "dark",
      tab:null,
      siteName:"Cloud Crew",
      menu: [],
    }
  },
  methods: {
    onClick() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      window.localStorage.theme = this.theme;
    }
  },
  async created(){
    this.theme = window.localStorage.theme || 'dark'; 
    const settings = await Reader.system();
    this.siteName = settings.siteName;
    this.menu = settings.menu;
  }
}
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar color="blue-darken-3">
      <div class="d-flex align-center ml-2">
        &nbsp;
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="/imgs/cloud-logo.png" transition="scale-transition"
          width="40" />
        <div style="font-size:24px;" @click="$router.push('/')">
          {{siteName}}
        </div>
      </div>
      <v-spacer></v-spacer>

      <v-btn :prepend-icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">{{ theme ===
          'dark' ? 'Light Mode' : 'Dark Mode'
      }}</v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" centered show-arrows>
          <v-tab v-for="(item) in menu" :key="item.title" :to="item.path">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer app dark padless>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} <strong>Cloud Crew LLC.</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

