<script>
import ContactUs from "@/components/ContactUs.vue";
export default {
  name: "AboutView",
  components: {
    ContactUs
  }
}
</script>
<template>
  <v-container fluid fill-height>
    <v-row class="banner2">
      <v-col>
        <v-sheet color="transparent" transparent height="100%" tile>
          <v-row align="center" justify="center">
            <v-card flat class="pa-4 c-center" tile color="transparent">
              <v-card-title>Work with Cloud Crew</v-card-title>
              <v-card-text>Working with Cloud Crew is simple, Just fill out the form below
                and someone will contact you.</v-card-text>
            </v-card>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card tile flat>
          <v-card-title>High ROI</v-card-title>
          <v-card-text>
            Do you spend most of your IT budget on maintaining your current
            system? Many companies find that constant maintenance eats into
            their budget for new technology. By outsourcing your IT management
            to us, you can focus on what you do best--running your business.
          </v-card-text>
        </v-card>
        <v-card tile flat>
          <v-card-title>Satisfaction Guaranteed</v-card-title>
          <v-card-text>
            The world of technology can be fast-paced and scary. That's why our
            goal is to provide an experience that is tailored to your company's
            needs. No matter the budget, we pride ourselves on providing
            professional customer service. We guarantee you will be satisfied
            with our work.
          </v-card-text>
        </v-card>
        <v-card tile flat>
          <v-card-title>Technical Experience</v-card-title>
          <v-card-text>
            We are well-versed in a variety of operating systems, networks, and
            databases. We work with just about any technology that a small
            business would encounter. We use this expertise to help customers
            with small to mid-sized projects.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <contact-us />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" offset-lg="3" offset-md="3">
        <v-card color="blue darken-1" dark class="ma-3">
          <v-card-title>Meet Us</v-card-title>
          <v-card-text>
            Scattered Across the United States, Cloud Crew can provide a custom
            software experience that makes sense. Our company specializes in
            Cloud Services at affordable costs. Join the crew here at cloud crew
            and let us help you with all your cloud needs.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-card dark color="black">
      <v-card dark color="black" class="mx-auto pa-4" tile>
        <v-card-title class="justify-center text-center">
          Want to Join our team?
        </v-card-title>
        <v-card-subtitle class="text-center">
          <h3>Currently we don't not have any open positions</h3>
        </v-card-subtitle>
      </v-card>
    </v-card>

  </v-container>
</template>
