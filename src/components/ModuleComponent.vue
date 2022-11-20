<script>
export default {
    props: ["module"]
}
</script>
<template>
    <v-card v-if="module.imgAlign == 'left'" class="mx-auto" flat max-width="900" tile>
        <v-row align="start">
            <v-col class="shrink">
                <v-img :src="module.img" class="ml-3" max-width="450"></v-img>
            </v-col>
            <v-col>
                <v-card-title>
                    <div class="highlight">&nbsp;</div>
                    {{ module.title }}
                </v-card-title>
                <v-card-subtitle>
                    <h2>{{ module.subTitle }}</h2>
                </v-card-subtitle>
                <v-card-text v-html="module.body"></v-card-text>
            </v-col>
        </v-row>
    </v-card>
    <v-card v-else-if="module.imgAlign == 'right'" class="mx-auto" flat max-width="900" tile>
        <v-row align="start">
            <v-col>
                <v-card-title>
                    <div class="highlight">&nbsp;</div>
                    {{ module.title }}
                </v-card-title>
                <v-card-subtitle>
                    <h2>{{ module.subTitle }}</h2>
                </v-card-subtitle>
                <v-card-text v-html="module.body"></v-card-text>
            </v-col>
            <v-col class="shrink">
                <v-img :src="module.img" class="ml-3" max-width="450"></v-img>
            </v-col>
        </v-row>
    </v-card>
    <v-card v-else color="blue-darken-2">
    <v-card :color="module.color ? module.color : 'blue-darken-2'" class="mx-auto pa-4"  tile>
        <v-card-title class="justify-center text-center" v-html="module.subTitle"></v-card-title>
        <v-card-subtitle class="text-center">
            <h3>{{ module.title }}</h3>
        </v-card-subtitle>
    </v-card>
    </v-card>
</template>
<style scoped>
.highlight {
    display: inline-block;
    line-height: 25px;
    border-left-color: cornflowerblue;
    border-left-width: 2px;
    border-left-style: solid;
}
</style>