import{_ as y,r as n,o as C,c as x,w as s,a as t,b as a}from"./index.823fdf08.js";const A={data(){return{name:"",message:"",emailAddress:"",newsLetter:!1,privacy:!1}},methods:{clearForm(){this.name="",this.message="",this.emailAddress="",this.newsLetter=!1,this.privacy=!1},sendEmail(){const r="contact@gocloudcrew.com",e=encodeURIComponent("Hi Cloud Crew, Give me more information."),m=`
${encodeURIComponent(this.message)}%0D%0A
-----------------------------------------%0D%0A%0D%0A
From: ${encodeURIComponent(this.name)}%0D%0A
${encodeURIComponent(this.emailAddress)}%0D%0A
Newsletter ${this.newsLetter?"yes":"no"} %0D%0A
Read Privacy: ${this.privacy?"yes":"no"} %0D%0A
            `,c=`mailto:${r}?subject=${e}&body=${m}`;window.open(c,"_blank"),this.clearForm()}}};function U(r,e,m,c,o,u){const p=n("v-card-title"),_=n("v-textarea"),d=n("v-text-field"),i=n("v-checkbox"),v=n("router-link"),f=n("v-btn"),b=n("v-form"),V=n("v-card-text"),w=n("v-card");return C(),x(w,null,{default:s(()=>[t(p,null,{default:s(()=>[a(" Contact Us ")]),_:1}),t(V,null,{default:s(()=>[t(b,null,{default:s(()=>[t(_,{name:"message",label:"Your Message",modelValue:o.message,"onUpdate:modelValue":e[0]||(e[0]=l=>o.message=l)},null,8,["modelValue"]),t(d,{label:"Your Name",modelValue:o.name,"onUpdate:modelValue":e[1]||(e[1]=l=>o.name=l)},null,8,["modelValue"]),t(d,{label:"Your Email Address",modelValue:o.emailAddress,"onUpdate:modelValue":e[2]||(e[2]=l=>o.emailAddress=l)},null,8,["modelValue"]),t(i,{label:"I would like to sign up with my email address to receive Cloud Crew communications with updates, valuable resources and useful tips",modelValue:o.newsLetter,"onUpdate:modelValue":e[3]||(e[3]=l=>o.newsLetter=l)},null,8,["modelValue"]),t(i,{modelValue:o.privacy,"onUpdate:modelValue":e[4]||(e[4]=l=>o.privacy=l)},{label:s(()=>[a(" I have read and agree to the \xA0 "),t(v,{class:"link",to:"/privacy-policy"},{default:s(()=>[a("privacy policy")]),_:1})]),_:1},8,["modelValue"]),t(f,{color:"blue",onClick:u.sendEmail},{default:s(()=>[a(" Lets Get In Touch ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const k=y(A,[["render",U]]);export{k as C};
