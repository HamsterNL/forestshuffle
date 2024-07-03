import{_ as b,u as c,o as l,c as d,F as y,r as v,a as s,b as x,t as m,d as u,n as C,p as k,e as w,f as S,g as p,m as O,h as i,i as f}from"./index-KaFynfVQ.js";const F={name:"SymbolAmountEditor",props:{playerName:String},computed:{forest(){return c().getForestByPlayerName(this.playerName)}},methods:{update(e,n){c().setSymbolCount(this.playerName,e,n)},add(e){c().addSymbolCount(this.playerName,e)}}},I={class:"d-flex justify-content-around"},B={class:"text-center"},E=["for","onClick"],j=["src","alt"],D=["id","value","onInput"];function L(e,n,a,h,_,t){return l(),d("div",I,[(l(),d(y,null,v(["beech","linden","silverFir","horseChestnut","birch"],(r,o)=>s("div",B,[s("label",{for:"#"+r+"CountInput",onClick:g=>t.add(r)},[s("img",{src:"./img/symbols/"+r+".png",alt:r,width:"32",class:"img-fluid"},null,8,j)],8,E),s("input",{id:r+"CountInput",value:t.forest[r+"Count"],onInput:g=>t.update(r,g.target.value),type:"number",class:"form-control amount-input",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,D)])),64))])}const P=b(F,[["render",L],["__scopeId","data-v-997b556a"]]),V={name:"CardAmountEditor",components:{SymbolAmountEditor:P,FontAwesomeIcon:x},props:{card:Object,forest:Object},computed:{playerName(){return this.forest.playerName}},methods:{addCard(){c().addCard(this.playerName,this.card.name)},removeCard(){c().removeCard(this.playerName,this.card.name)},paramAdd(e){c().addParam(this.playerName,this.card.name,e)},paramSub(e){c().subParam(this.playerName,this.card.name,e)}}},z=e=>(k("data-v-d430584b"),e=e(),w(),e),H={class:"d-flex mt-2"},q={class:"fw-bold card-amount"},G={key:0},T={class:"flex-grow-1"},J=["src"],K={class:"ms-2"},M={key:0},Q={key:0,class:"mt-1 mb-3 d-flex align-items-center"},R=z(()=>s("div",{class:"card-amount"},null,-1)),U={class:"fw-bold card-amount"},W={key:0},X={class:"flex-grow-1"},Y=["onClick"],Z={class:"ms-2"},$=["onClick"];function ee(e,n,a,h,_,t){return l(),d(y,null,[s("div",H,[s("div",q,[a.card.count>0?(l(),d("span",G,m(a.card.count)+"×",1)):u("",!0)]),s("div",T,[s("button",{onClick:n[0]||(n[0]=(...r)=>t.addCard&&t.addCard(...r)),class:C(["btn-"+a.card.symbols[0],"btn btn-primary btn-sm btn-card"])},[s("img",{src:"./img/symbols/"+a.card.symbols[0]+".png",height:"20"},null,8,J),s("span",K,m(e.$t(a.card.name)),1)],2),s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:n[1]||(n[1]=(...r)=>t.removeCard&&t.removeCard(...r))},"×")]),s("div",null,[a.card.count>0&&a.card.symbols.indexOf("butterfly")<0?(l(),d("span",M,m(a.card.points),1)):u("",!0)])]),(l(!0),d(y,null,v(a.card.params,r=>(l(),d("div",{class:"mt-1 mb-2",key:r.name},[r.type==="number"?(l(),d("div",Q,[R,s("div",U,[a.card.count>0?(l(),d("span",W,m(r.value),1)):u("",!0)]),s("div",X,[s("button",{onClick:o=>t.paramAdd(r.name),class:C(["btn-"+a.card.symbols[0],"btn btn-sm btn-primary btn-card"])},[s("span",Z,m(e.$t(r.name)),1)],10,Y),s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:o=>t.paramSub(r.name)},"×",8,$)])])):u("",!0)]))),128))],64)}const A=b(V,[["render",ee],["__scopeId","data-v-d430584b"]]),te={name:"CardAmountEditorList",components:{SymbolAmountEditor:P,CardAmountEditor:A},props:{cards:Array,forest:S,symbol:String,symbol2:String,heading:String},computed:{totalPoints(){return this.symbol==="butterfly"?this.forest.butterflyPoints:this.cards.map(e=>e.points).reduce((e,n)=>n+=e,0)}}},se=["src","alt"],re=["src","alt"],ae={class:"ms-1 fs-5 flex-grow-1"},ne={class:"fs-5"};function le(e,n,a,h,_,t){const r=p("CardAmountEditor");return l(),d(y,null,[s("div",O(e.$attrs,{class:"d-flex align-items-center"}),[s("img",{src:"./img/symbols/"+a.symbol+".png",height:"24",alt:e.$t(a.heading)},null,8,se),a.symbol2?(l(),d("img",{key:0,src:"./img/symbols/"+a.symbol2+".png",height:"24",alt:e.$t(a.heading)},null,8,re)):u("",!0),s("div",ae,m(e.$t(a.heading)),1),s("div",ne,m(t.totalPoints),1)],16),(l(!0),d(y,null,v(a.cards,o=>(l(),d("div",{key:"cae_"+o.name,class:"d-block"},[i(r,{card:o,forest:a.forest},null,8,["card","forest"])]))),128))],64)}const de=b(te,[["render",le]]),oe={name:"PlayerNavigation",computed:{players(){return f().players.map(e=>({...e,points:c().getForestByPlayerName(e.name).points}))},currentPlayer(){return f().currentPlayer},points(){return c().getForestByPlayerName(this.currentPlayer.name).points}},methods:{addPlayer(){const e=this.$t("player")+" "+(this.players.length+1);c().addForest(e),f().addPlayer(e),f().selectPlayer(e)},selectPlayer(e){f().selectPlayer(e)}}},ie={class:"wrapper text-light"},ce={class:"player-nav d-flex"},me=["onClick"],ue={class:"ms-2 fw-bold"},fe={key:0,class:"current-player d-flex justify-content-between px-3 fs-1 fw-bold position-absolute w-100"};function ye(e,n,a,h,_,t){return l(),d("div",ie,[s("div",ce,[(l(!0),d(y,null,v(t.players,r=>(l(),d("div",{class:"ms-1 player-nav-item border border-light text-light",onClick:o=>t.selectPlayer(r.name)},[s("span",{class:C({underline:r.name===t.currentPlayer.name})},m(r.name),3),s("span",ue,m(r.points),1)],8,me))),256)),t.players.length<5?(l(),d("button",{key:0,class:"btn btn-sm btn-light py-0 ms-1 z-99",onClick:n[0]||(n[0]=(...r)=>t.addPlayer&&t.addPlayer(...r))},"+")):u("",!0)]),t.currentPlayer?(l(),d("div",fe,[s("div",null,m(t.currentPlayer.name),1),s("div",null,m(t.points),1)])):u("",!0)])}const be=b(oe,[["render",ye],["__scopeId","data-v-abb619c9"]]),he={components:{PlayerNavigation:be,SymbolAmountEditor:P,CardAmountEditorList:de,CardAmountEditor:A},computed:{playerName(){var e;return(e=f().currentPlayer)==null?void 0:e.name},forest(){return c().getForestByPlayerName(this.playerName)},cards(){return c().getForestByPlayerName(this.playerName).cards},trees(){return this.cards.filter(e=>e.symbols.indexOf("tree")>=0)},birds(){return this.cards.filter(e=>e.symbols.indexOf("bird")>=0)},butterflies(){return this.cards.filter(e=>e.symbols.indexOf("butterfly")>=0)},others(){return this.forest.cards.filter(e=>e.name==="redSquirrel")},plants(){return this.cards.filter(e=>e.symbols.indexOf("plant")>=0)},mushrooms(){return this.cards.filter(e=>e.symbols.indexOf("mushroom")>=0)},amphibians(){return this.cards.filter(e=>e.symbols.indexOf("amphibian")>=0)},insectsBottom(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="bottom")},pawedBottom(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="bottom")},insectsSide(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="side")},bats(){return this.cards.filter(e=>e.symbols.indexOf("bat")>=0)},deerAndCloven(){return this.cards.filter(e=>e.symbols.indexOf("deer")>=0||e.symbols.indexOf("clovenHoofedAnimal")>=0)},roeDeerPresent(){return this.forest.roeDeerPresent()},pawedSide(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="side")},points(){return c().getForestByPlayerName(this.playerName).points}},methods:{setCaveCount(e){c().setCaveCount(this.playerName,e)}},mounted(){if(!this.playerName){const e=f();if(e.players.length===0){const n=this.$t("player")+" 1";e.addPlayer(n),e.selectPlayer(n),c().addForest(n)}else e.selectPlayer(e.players[0].name)}}},_e=e=>(k("data-v-b91598e8"),e=e(),w(),e),ge={key:0,class:"container"},pe=_e(()=>s("div",{class:"distance-keeper position-relative"},null,-1)),ve={class:"mt-4 fs-2 border-primary border-bottom"},Ce={class:"mt-4 fs-2 border-primary border-bottom"},Pe={class:"mt-4 fs-2 border-primary border-bottom"},Ne={key:0,class:"d-flex justify-content-center align-items-center"},ke={class:"fs-5 d-none d-md-flex me-md-2"},we={class:"d-flex justify-content-center align-items-center mt-4 mb-5"},Ae=["alt"],xe=["value"];function Se(e,n,a,h,_,t){const r=p("PlayerNavigation"),o=p("CardAmountEditorList"),g=p("SymbolAmountEditor");return l(),d(y,null,[i(r),t.forest?(l(),d("div",ge,[pe,i(o,{cards:t.trees,forest:t.forest,symbol:"tree",heading:"trees"},null,8,["cards","forest"]),s("div",ve,m(e.$t("tops")),1),i(o,{class:"mt-1",cards:t.birds,forest:t.forest,symbol:"bird",heading:"birds"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.butterflies,forest:t.forest,symbol:"butterfly",heading:"butterflies"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.others,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Ce,m(e.$t("bottoms")),1),i(o,{class:"mt-1",cards:t.plants,forest:t.forest,symbol:"plant",heading:"plants"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.mushrooms,forest:t.forest,symbol:"mushroom",heading:"mushrooms"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.amphibians,forest:t.forest,symbol:"amphibian",heading:"amphibians"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.insectsBottom,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.pawedBottom,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Pe,m(e.$t("sides")),1),i(o,{class:"mt-2",cards:t.insectsSide,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.bats,forest:t.forest,symbol:"bat",heading:"bats"},null,8,["cards","forest"]),i(o,{class:"mt-4",cards:t.deerAndCloven,forest:t.forest,symbol:"deer",symbol2:"clovenHoofedAnimal",heading:"deerAndCloven"},null,8,["cards","forest"]),t.roeDeerPresent?(l(),d("div",Ne,[s("div",ke,m(e.$t("treeTypeCount")),1),i(g,{class:"mt-2","player-name":t.playerName},null,8,["player-name"])])):u("",!0),i(o,{class:"mt-4",cards:t.pawedSide,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",we,[s("img",{src:"./img/cave.png",alt:e.$t("cave"),onClick:n[0]||(n[0]=N=>t.setCaveCount(t.forest.caveCount+1))},null,8,Ae),s("input",{value:t.forest.caveCount,onInput:n[1]||(n[1]=N=>t.setCaveCount(Number(N.target.value))),type:"number",class:"form-control flex-grow-0 w-auto fs-5",size:"1",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,xe)])])):u("",!0)],64)}const Fe=b(he,[["render",Se],["__scopeId","data-v-b91598e8"]]);export{Fe as default};
