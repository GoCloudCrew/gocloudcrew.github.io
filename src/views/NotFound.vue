<template>
    <v-container fluid pa-0>
        <v-row align="center" justify="center" style="height:95vh">
            <v-col cols="12" class="fill-height d-flex flex-column justify-center align-center">
                <p class="header">404.</p>
                <p>Sorry, it appears you are lost. Wanna go <router-link to="/">home</router-link>?</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.header {
    font-size: 148px;
    font-weight: bold;
    text-decoration: underline;
}
</style>