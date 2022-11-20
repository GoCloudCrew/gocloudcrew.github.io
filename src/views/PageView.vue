<script>
import Reader from '@/classes/reader';

export default {
    name: "PageView",
    data() {
        return {
            title: "",
            subTitle: "",
            image: "",
            body: ""
        }
    },
    watch: {
        $route(val) {
            const regex = /page/g;
            const isPage = val.path.match(regex);
            if(isPage && isPage.length > 0){
                this.load();
            }
        },
    },
    methods: {
        async load() {
            try {
                const page = await Reader.load(this.$route.params.id)
                this.title = page.title;
                this.subTitle = page.subTitle;
                this.image = page.image;
                this.body = page.body;
                return;
            } catch (e) {
                console.error(`${this.$route.params.id} JSON not found`);
            }
            this.$router.push("/NotFound")
        }
    },
    async created() {
        this.load()
    }
}
</script>
<template>
    <div id="page">
        <v-img v-if="image && title" :src="image" height="300px" cover>
            <v-sheet color="rgba(0, 0, 0, 0.5)" transparent height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                    <v-card flat class="display-3 px-4" color="rgba(0, 0, 0, 0.5)">
                        <div style="font-size:124px;color:#fff;" class="white--text">
                            {{ title }}
                        </div>
                        <div style="font-size: 28px; color:#fff; font-weight: bold" class="white--text">
                            {{ subTitle }}
                        </div>
                    </v-card>
                </v-row>
            </v-sheet>
        </v-img>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-text v-if="body">
                            <div v-html="body"></div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>