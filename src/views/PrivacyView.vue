<script>
export default {
    name: "PrivactView",
    data() {
        return {
            page: {
                pageName: "privacy-policy",
                data: {
                    pageTitle: "Privacy Policy",
                    pageSubTitle: "",
                    pageImage: "/imgs/privacy/privacy.jpeg",
                    pageContent: `<p>
            Cloud Crew values individual privacy and we want to give our Site´s visitors the opportunity to know what information we collect about them and how it is treated by us.
            </p>
            <p>
            This Privacy Policy (this “Policy”) explains:
            <ol>
              <li>Which information about you we collect</li>
              <li>Purposes of using your personal information and legal basis.</li>
              <li>Retention of your personal information.</li>
              <li>Disclosures of personal information.</li>
              <li>Where is your personal information stored and which are your access rights.</li>
              <li>Contact us.</li>
            </ol>
            </p>
            <ol>
                <li>Information about you we collect.
                    <ol type="a">
                        <li> Information collected automatically when you visit our site:
                           <p>When navigating our websites and accessing or using our Services, Cloud Crew will collect and store Cookies. If you would like more information, please visit our cookie policy page.</p>
                           <p>Cloud Crew will also collect and store Cookies. “Cookies” are text files placed in your computer’s browser to store certain preferences and information, which may enhance your browsing experience on Cloud Crew’s websites. Cookies may be used to personalize your website experience, such as recognizing you by name when you return. Cloud Crew does not use Cookies to track or collect personal identification information from website users. If you desire, instructions for your browser will allow you to make certain settings on your computer to warn you before a Cookie is stored, block all Cookies or erase Cookies from your hard drive.</p>
                        </li>
                        <li> Information is collected when you volunteer to identify yourself, and provide requested information:
                           <p>You may choose to write to us, or fill out certain forms or online data requests, which provide your name, telephone number, e-mail address, job and related information.</p>
                        </li>
                    </ol>
                </li>
                <li>Purposes of using your personal information and legal basis.
                    <p>Cloud Crew uses the information collected from you to: (i) to respond to your inquiries; (ii) consider your request or application, (iii) send you appropriate information in regards to news, events, job openings and related information you subscribed to, and (iv) for direct marketing purposes, including to send you newsletters, client alerts and information we think may interest you. Cloud Crew may also use such data for market and consumer studies regarding product types, demographics and consumer preferences.</p>
                    <p>We are entitled to use your personal information based on (i) our legitimate interest such as for research and development, to market and promote our services, to protect our legal rights and interests, to the extent that your interests or your fundamental rights are not overridden; (ii) your consent to do so for a specific purpose; or (iii) to process your data to comply with a legal obligation.</p>
                </li>
                <li>Retention of your personal information.
                    <p>Cloud Crew will retain your personal information for as long as necessary to fulfill the purposes for which it was collected or as necessary to comply with our legal obligations, resolve disputes, and maintain appropriate business records. Once the purpose has been fulfilled your personal information will be retained blocked up due to the possibility of legal and governmental requirements and until their status of limitations have run out.</p>
                </li>
                <li>Disclosures of personal information.
                    <p>Cloud Crew may share your personal information with affiliated companies.</p>
                    <p>In addition, Cloud Crew reserves the right to disclose information where required by law or to comply with valid legal process (such as a search warrant, subpoena or court order) as well as to protect Cloud Crews’s rights or property, including without limitation in the event of a transfer of control of Cloud Crew or substantially all of its assets, or during emergencies when safety is at risk.</p>
                </li>
                <li>Where is your personal information stored and which are your access rights.
                    <ul>
                        <li>Storage of the Information
                            <p>All of the information collected by Cloud Crew through the Website is stored on secured servers, to protect against unauthorized use and access.</p>
                        </li>
                        <li>Your access rights.
                            <p>You can exercise your rights of access, rectification, erasure, restriction, opposition, personal information portability, and / or withdrawal of consent regarding your personal information which is stored in our server by email to the following address: <a href="mailto:privacy@gocloudcrew.com">privacy@gocloudcrew.com</a></p>
                        </li>
                    </ul>
                </li>
                <li><h3>Contact us.</h3>
                    <p>If you have questions or concerns regarding the way in which your personal data is being processed or this Policy, please email us at privacy@gocloudcrew.com or reach out to Cloud Crew using the contact information below:</p>
                    <p>
                    Cloud Crew LLC <br/>
                    PO Box 123<br/>
                    Someplace, US, 12345-1234
                    </p>
                </li>
            </ol>`,
                    categories: ['system']
                },
                featured: false
            }
        }
    }
}
</script>
<template>
    <div id="page">
        <v-img v-if="page.data.pageImage" :src="page.data.pageImage" height="300px" cover>
            <v-sheet color="rgba(0, 0, 0, 0.5)" transparent height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                    <v-card flat class="display-3 px-4" color="rgba(0, 0, 0, 0.5)">
                        <div style="font-size:124px;color:#fff;" class="white--text">
                            {{ page.data.pageTitle }}
                        </div>
                        <div style="font-size: 28px; color:#fff; font-weight: bold" class="white--text">
                            {{ page.data.pageSubTitle }}
                        </div>
                    </v-card>
                </v-row>
            </v-sheet>
        </v-img>
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="pa-4">
                        <v-card-text v-if="page.data.pageContent">
                            <div v-html="page.data.pageContent"></div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>