import{_ as y,R as x,r as s,o as c,e as b,c as d,w as e,f as u,a as n,d as i,t as h}from"./index.4adc2ba5.js";const w={name:"PageView",data(){return{title:"",subTitle:"",image:"",body:""}},watch:{$route(t){const r=/page/g,a=t.path.match(r);a&&a.length>0&&this.load()}},methods:{async load(){try{const t=await x.load(this.$route.params.id);this.title=t.title,this.subTitle=t.subTitle,this.image=t.image,this.body=t.body;return}catch{console.error(`${this.$route.params.id} JSON not found`)}this.$router.push("/NotFound")}},async created(){this.load()}},T={id:"page"},k={style:{"font-size":"124px",color:"#fff"},class:"white--text"},N={style:{"font-size":"28px",color:"#fff","font-weight":"bold"},class:"white--text"},V=["innerHTML"];function B(t,r,a,C,o,P){const l=s("v-card"),_=s("v-row"),f=s("v-sheet"),p=s("v-img"),m=s("v-card-text"),g=s("v-col"),v=s("v-container");return c(),b("div",T,[o.image&&o.title?(c(),d(p,{key:0,src:o.image,height:"300px",cover:""},{default:e(()=>[n(f,{color:"rgba(0, 0, 0, 0.5)",transparent:"",height:"100%",tile:""},{default:e(()=>[n(_,{class:"fill-height",align:"center",justify:"center"},{default:e(()=>[n(l,{flat:"",class:"display-3 px-4",color:"rgba(0, 0, 0, 0.5)"},{default:e(()=>[i("div",k,h(o.title),1),i("div",N,h(o.subTitle),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["src"])):u("",!0),n(v,null,{default:e(()=>[n(_,null,{default:e(()=>[n(g,null,{default:e(()=>[n(l,null,{default:e(()=>[o.body?(c(),d(m,{key:0},{default:e(()=>[i("div",{innerHTML:o.body},null,8,V)]),_:1})):u("",!0)]),_:1})]),_:1})]),_:1})]),_:1})])}const H=y(w,[["render",B]]);export{H as default};