<script>
export default {
    data() {
        return {
            name: "",
            message: "",
            emailAddress: "",
            newsLetter: false,
            privacy: false
        }
    },
    methods: {
        clearForm() {
            this.name = "";
            this.message = "";
            this.emailAddress = "";
            this.newsLetter = false;
            this.privacy = false;

        },
        sendEmail() {
            //mailto:nowhere@mozilla.org?
            //  cc=name2@rapidtables.com&
            //  bcc=name3@rapidtables.com&
            //  subject=The%20subject%20of%20the%20email&
            //  body=The%20body%20of%20the%20email
            const contact = "contact@gocloudcrew.com";
            const subject = encodeURIComponent("Hi Cloud Crew, Give me more information.");
            const body = `
${encodeURIComponent(this.message)}%0D%0A
-----------------------------------------%0D%0A%0D%0A
From: ${encodeURIComponent(this.name)}%0D%0A
${encodeURIComponent(this.emailAddress)}%0D%0A
Newsletter ${this.newsLetter ? 'yes' : 'no'} %0D%0A
Read Privacy: ${this.privacy ? 'yes' : 'no'} %0D%0A
            `;
            
            const URL = `mailto:${contact}?subject=${subject}&body=${body}`;
            window.open(URL, '_blank');
            this.clearForm();
        }
    }
}
</script>
<template>
    <v-card>
        <v-card-title> Contact Us </v-card-title>
        <v-card-text>
            <v-form>
                <v-textarea name="message" label="Your Message" v-model="message"></v-textarea>
                <v-text-field label="Your Name" v-model="name" />
                <v-text-field label="Your Email Address" v-model="emailAddress" />
                <v-checkbox
                    label="I would like to sign up with my email address to receive Cloud Crew communications with updates, valuable resources and useful tips"
                    v-model="newsLetter">
                </v-checkbox>
                <v-checkbox v-model="privacy">
                    <template v-slot:label>
                        I have read and agree to the &nbsp;
                        <router-link class="link" to="/privacy-policy">privacy policy</router-link>
                    </template>
                </v-checkbox>
                <v-btn color="blue" @click="sendEmail"> Lets Get In Touch </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>