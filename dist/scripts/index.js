!function(e){function t(t){for(var s,n,o=t[0],i=t[1],r=0,c=[];r<o.length;r++)n=o[r],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&c.push(a[n][0]),a[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(l&&l(t);c.length;)c.shift()()}var s={},a={index:0};function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[],s=a[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=o);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.src=function(e){return n.p+"bundles/"+({"afrikaans-json":"afrikaans-json","albanian-json":"albanian-json","armenian-json":"armenian-json","azeri-json":"azeri-json","croatian-json":"croatian-json","czech-json":"czech-json","danish-json":"danish-json","dutch-json":"dutch-json","english-json":"english-json","estonian-json":"estonian-json","finnish-json":"finnish-json","french-json":"french-json","georgian-json":"georgian-json","german-json":"german-json","greek-json":"greek-json","hungarian-json":"hungarian-json","icelandic-json":"icelandic-json","indonesian-json":"indonesian-json","irish-json":"irish-json","italian-json":"italian-json","latvian-json":"latvian-json","lithuanian-json":"lithuanian-json","norwegian-json":"norwegian-json","polish-json":"polish-json","portuguese-json":"portuguese-json","romanian-json":"romanian-json","russian-json":"russian-json","sicilian-json":"sicilian-json","slovak-json":"slovak-json","slovenian-json":"slovenian-json","spanish-json":"spanish-json","swedish-json":"swedish-json","turkish-json":"turkish-json","welcome-screen":"welcome-screen","welsh-json":"welsh-json","zulu-json":"zulu-json"}[e]||e)+"."+{"afrikaans-json":"17a5","albanian-json":"eb8c","armenian-json":"70ec","azeri-json":"0d67","croatian-json":"2be5","czech-json":"aaa8","danish-json":"61ef","dutch-json":"3fdd","english-json":"b4c8","estonian-json":"9a50","finnish-json":"9cec","french-json":"e472","georgian-json":"7a65","german-json":"2000","greek-json":"0079","hungarian-json":"40e2","icelandic-json":"5fc0","indonesian-json":"00f9","irish-json":"3686","italian-json":"4264","latvian-json":"a498","lithuanian-json":"5906","norwegian-json":"2c33","polish-json":"825c","portuguese-json":"0f7f","romanian-json":"beaf","russian-json":"7503","sicilian-json":"2567","slovak-json":"1d9a","slovenian-json":"5e75","spanish-json":"9bed","swedish-json":"b026","turkish-json":"f187","welcome-screen":"6377","welsh-json":"f804","zulu-json":"a5c2"}[e]+".js"}(e);var l=new Error;i=function(t){r.onerror=r.onload=null,clearTimeout(c);var s=a[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,s[1](l)}a[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(t)},n.m=e,n.c=s,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="modules/token-mold/scripts/",n.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var l=i;n(n.s="./src/scripts/index.js")}({"./src/scripts/dict lazy recursive ^\\.\\/.*\\.json$":
/*!***************************************************************!*\
  !*** ./src/scripts/dict lazy ^\.\/.*\.json$ namespace object ***!
  \***************************************************************/
/*! no static exports found */function(e,t,s){var a={"./afrikaans.json":["./src/scripts/dict/afrikaans.json","afrikaans-json"],"./albanian.json":["./src/scripts/dict/albanian.json","albanian-json"],"./armenian.json":["./src/scripts/dict/armenian.json","armenian-json"],"./azeri.json":["./src/scripts/dict/azeri.json","azeri-json"],"./croatian.json":["./src/scripts/dict/croatian.json","croatian-json"],"./czech.json":["./src/scripts/dict/czech.json","czech-json"],"./danish.json":["./src/scripts/dict/danish.json","danish-json"],"./dutch.json":["./src/scripts/dict/dutch.json","dutch-json"],"./english.json":["./src/scripts/dict/english.json","english-json"],"./estonian.json":["./src/scripts/dict/estonian.json","estonian-json"],"./finnish.json":["./src/scripts/dict/finnish.json","finnish-json"],"./french.json":["./src/scripts/dict/french.json","french-json"],"./georgian.json":["./src/scripts/dict/georgian.json","georgian-json"],"./german.json":["./src/scripts/dict/german.json","german-json"],"./greek.json":["./src/scripts/dict/greek.json","greek-json"],"./hungarian.json":["./src/scripts/dict/hungarian.json","hungarian-json"],"./icelandic.json":["./src/scripts/dict/icelandic.json","icelandic-json"],"./indonesian.json":["./src/scripts/dict/indonesian.json","indonesian-json"],"./irish.json":["./src/scripts/dict/irish.json","irish-json"],"./italian.json":["./src/scripts/dict/italian.json","italian-json"],"./latvian.json":["./src/scripts/dict/latvian.json","latvian-json"],"./lithuanian.json":["./src/scripts/dict/lithuanian.json","lithuanian-json"],"./norwegian.json":["./src/scripts/dict/norwegian.json","norwegian-json"],"./polish.json":["./src/scripts/dict/polish.json","polish-json"],"./portuguese.json":["./src/scripts/dict/portuguese.json","portuguese-json"],"./romanian.json":["./src/scripts/dict/romanian.json","romanian-json"],"./russian.json":["./src/scripts/dict/russian.json","russian-json"],"./sicilian.json":["./src/scripts/dict/sicilian.json","sicilian-json"],"./slovak.json":["./src/scripts/dict/slovak.json","slovak-json"],"./slovenian.json":["./src/scripts/dict/slovenian.json","slovenian-json"],"./spanish.json":["./src/scripts/dict/spanish.json","spanish-json"],"./swedish.json":["./src/scripts/dict/swedish.json","swedish-json"],"./turkish.json":["./src/scripts/dict/turkish.json","turkish-json"],"./welsh.json":["./src/scripts/dict/welsh.json","welsh-json"],"./zulu.json":["./src/scripts/dict/zulu.json","zulu-json"]};function n(e){if(!s.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],n=t[0];return s.e(t[1]).then((function(){return s.t(n,3)}))}n.keys=function(){return Object.keys(a)},n.id="./src/scripts/dict lazy recursive ^\\.\\/.*\\.json$",e.exports=n},"./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */function(e,t,s){"use strict";s.r(t);var a=s(/*! ./token-mold.js */"./src/scripts/token-mold.js");Hooks.on("init",()=>{game["token-mold"]=new a.default}),Hooks.on("ready",async()=>{if(!game.user.isGM)return;const e=game.modules.get("token-mold"),t=e.data.title,a=e.data.version;game.settings.register(t,"version",{name:t+" Version",default:"0.0.0",type:String,scope:"world"});const n=game.settings.get(t,"version");isNewerVersion(a,n)&&(await s.e(/*! import() | welcome-screen */"welcome-screen").then(s.bind(null,/*! ./welcome-screen.js */"./src/scripts/welcome-screen.js"))).default()})},"./src/scripts/overlay.js":
/*!********************************!*\
  !*** ./src/scripts/overlay.js ***!
  \********************************/
/*! exports provided: TokenMoldOverlay */function(e,t,s){"use strict";s.r(t),s.d(t,"TokenMoldOverlay",(function(){return a}));class a extends BasePlaceableHUD{static get defaultOptions(){const e=super.defaultOptions;return e.classes=e.classes.concat(["token-mold-overlay"]),e.template="modules/token-mold/templates/overlay.html",e.id="token-mold-overlay",e}getData(){const e=super.getData();return e.stats=this.attrs.map(e=>{const t={icon:e.icon,path:e.path,value:getProperty(this.object.actor.data,e.path)};return""===t.value||null==t.value?null:t}).filter(e=>null!==e),e}setPosition(){if(!this.object)return;const e={width:this.object.w,height:this.object.h,left:this.object.x,top:this.object.y,"font-size":canvas.grid.size/5+"px"};this.element.css(e)}}},"./src/scripts/sticky-templates.js":
/*!*****************************************!*\
  !*** ./src/scripts/sticky-templates.js ***!
  \*****************************************/
/*! exports provided: initStickyTemplates */function(e,t,s){"use strict";s.r(t),s.d(t,"initStickyTemplates",(function(){return a}));const a=function(){Hooks.on("ready",()=>{Hooks.on("renderMeasuredTemplateConfig",(e,t,s)=>{const a=t.find('button[type="submit"]'),n=getProperty(s,"object.flags.token-mold.sticky-templates.tokenId")||-1,o=`\n\t\t\t<div class="form-group">\n\t\t\t\t<label>Stick to Token </label>\n\t\t\t\t<select name="flags.token-mold.sticky-templates.tokenId" data-dtype="String">\n\t\t\t\t\t<option value="-1" ${n<0?"selected":""}>None</option>\n\t\t\t\t\t\t${canvas.tokens.ownedTokens.map(e=>`<option value="${e.id}" ${e.id===n?"selected":""}>${e.name}</option>`).join("")}\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t${"rect"===s.object.t?"":`\n\t\t\t<div class="form-group">\n\t\t\t\t<label>Rotate with sticked token?</label>\n\t\t\t\t<input type="checkbox" name="flags.token-mold.sticky-templates.rotate" data-dtype="Boolean" ${!0===getProperty(s.object,"flags.token-mold.sticky-templates.rotate")?"checked":""}/>\n\t\t\t</div>`}\n\t\t\t`;a.before(o)}),Hooks.on("preUpdateMeasuredTemplate",(e,t,s,a)=>{const n=getProperty(a,"currentData.flags.token-mold.sticky-templates.tokenId"),o=getProperty(s,"flags.token-mold.sticky-templates.tokenId"),i=s.id;if(n!==o&&-2!==o){if(n){const e=canvas.tokens.ownedTokens.find(e=>e.id===n);if(void 0!==e){let s=duplicate(getProperty(e,"data.flags.token-mold.sticky-templates.templateIds")||[]);const a=s.indexOf(i);a>-1&&(s.splice(a,1),e.update(t,{"flags.token-mold.sticky-templates.templateIds":s}))}}if(o){const e=canvas.tokens.ownedTokens.find(e=>e.id===o);if(void 0!==e){let t=duplicate(getProperty(e,"data.flags.token-mold.sticky-templates.templateIds")||[]);t.push(i),e.update({"flags.token-mold.sticky-templates.templateIds":t})}}}}),Hooks.on("preUpdateToken",(e,t,s)=>{const a=canvas.tokens.get(s._id);let n=duplicate(getProperty(a,"data.flags.token-mold.sticky-templates.templateIds")||[]);if(0===n.length)return;const o=a.data.x,i=a.data.y,r=s.x||o,l=s.y||i,c=r-o,d=l-i,u=a.data.rotation,h=getProperty(s,"rotation");if(c===d===0&&void 0===h)return;const p=void 0===h?0:h-u;n.forEach(async e=>{const t=canvas.scene.getEmbeddedEntity("MeasuredTemplate",e);if(!t)return;let s={};if("rect"!==t.t&&0!==p&&!0===getProperty(t,"flags.token-mold.sticky-templates.rotate")){const e=a.center;let n=t.x,o=t.y;"rect"===t.t&&(n+=t.width/2,o+=t.height/2);const i=toRadians(p),r=n-e.x,l=o-e.y;s={x:e.x+Math.cos(i)*r-Math.sin(i)*l,y:e.y+Math.sin(i)*r+Math.cos(i)*l,direction:t.direction+("rect"===t.t?0:p)}}else s={x:t.x+c,y:t.y+d};s._id=e,await canvas.scene.updateEmbeddedEntity("MeasuredTemplate",s)})}),Hooks.on("preDeleteMeasuredTemplate",(e,t,s)=>{let a=getProperty(e,"data.flags.token-mold.sticky-templates.tokenId");if(void 0===a||t!==canvas.scene.id)return;let n=canvas.tokens.get(a);if(void 0===n)return;let o=duplicate(getProperty(n,"data.flags.token-mold.sticky-templates.templateIds")||[]);const i=o.indexOf(e.id);i>-1&&(o.splice(i,1),n.update(t,{"flags.token-mold.sticky-templates.templateIds":o}))}),Hooks.on("preDeleteToken",(e,t,s)=>{let a=getProperty(e,"data.flags.token-mold.sticky-templates.templateIds")||[];0!==a.length&&a.map(e=>canvas.templates.placeables.find(t=>t.id===e)).forEach(async e=>await e.update(t,{"flags.token-mold.sticky-templates":{}}))}),Hooks.on("preCreateToken",(e,t,s)=>{void 0!==getProperty(s,"flags.token-mold.sticky-templates.templateIds")&&setProperty(s,"flags.token-mold.sticky-templates.templateIds",[])})})}},"./src/scripts/token-mold.js":
/*!***********************************!*\
  !*** ./src/scripts/token-mold.js ***!
  \***********************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return o}));var a=s(/*! ./overlay.js */"./src/scripts/overlay.js"),n=s(/*! ./sticky-templates.js */"./src/scripts/sticky-templates.js");class o{constructor(){this.counter={},this._rollTableList={},this.dict=null,this.initHooks()}initHooks(){Hooks.on("renderActorDirectory",(e,t,s)=>{game.user.isGM&&this._hookActorDirectory(t)}),Object(n.initStickyTemplates)(),this.registerSettings(),this.loadSettings(),this.systemSupported=null!==/dnd5e|pf2e/.exec(game.data.system.id),Hooks.on("ready",async()=>{Hooks.on("renderHeadsUpDisplay",async(e,t,s)=>{t.append('<template id="token-mold-overlay"></template>'),canvas.hud.TokenMold=new a.TokenMoldOverlay}),Hooks.on("hoverToken",async(e,t)=>{e&&(e.actor.permission<CONST.ENTITY_PERMISSIONS.OBSERVER||void 0!==canvas.hud.TokenMold&&0!==this.data.overlay.attrs.length&&(t&&!0===this.data.overlay.use?(canvas.hud.TokenMold.attrs=this.data.overlay.attrs,canvas.hud.TokenMold.bind(e)):canvas.hud.TokenMold.clear()))}),game.user.isGM&&(Hooks.on("deleteToken",(...e)=>{canvas.hud.TokenMold&&canvas.hud.TokenMold.clear()}),this._hookPreTokenCreate(),this.barAttributes=await this._getBarAttributes(),this._loadDicts(),await this._getRolltables(),await this._loadTable())})}get languages(){return["afrikaans","albanian","armenian","azeri","croatian","czech","danish","dutch","english","estonian","finnish","french","georgian","german","greek","hungarian","icelandic","indonesian","irish","italian","latvian","lithuanian","norwegian","polish","portuguese","romanian","russian","sicilian","slovak","slovenian","spanish","swedish","turkish","welsh","zulu"]}async _loadDicts(){if(!game.user||!game.user.isGM||"replace"!==this.data.name.replace)return;this.dict||(this.dict={});this.data.name.options;let e=this.languages;for(let t of e)this.dict[t]||(this.dict[t]=(await s("./src/scripts/dict lazy recursive ^\\.\\/.*\\.json$")(`./${t}.json`)).default)}async _loadTable(){let e;try{e=await fromUuid(this.data.name.prefix.table)}catch(t){e=await fromUuid(this.defaultSettings().name.prefix.table),this.data.name.prefix.table=this.defaultSettings().name.prefix.table}this.adjectives=e}async _getRolltables(){const e=game.packs.filter(e=>"RollTable"===e.entity);this._rollTableList={},game.tables.size>0&&(this._rollTableList.World=[]);for(const e of game.tables)this._rollTableList.World.push({name:e.name,uuid:"RollTable."+e.id});for(const t of e){const e=await t.getIndex();this._rollTableList[t.metadata.label]=[];const s=`Compendium.${t.collection}.`;for(let a of e)this._rollTableList[t.metadata.label].push({name:a.name,uuid:s+a._id})}console.debug("Token Mold | Rollable Tables found",this._rollTableList)}async _hookActorDirectory(e){this.section=document.createElement("section"),this.section.classList.add("token-mold");const t=e[0].querySelector(".directory-header");t.parentNode.insertBefore(this.section,t),void 0!==this.data&&this._renderActorDirectoryMenu()}async _renderActorDirectoryMenu(){const e=this.section;e.insertAdjacentHTML("afterbegin",`\n        <h3>Token Mold</h3>\n        <label class='label-inp' title='(De-)activate Name randomizing'>\n            <input class='name rollable' type='checkbox' name='name.use' ${this.data.name.use?"checked":""}><span><span class='checkmark'></span>&nbsp;Name</span>\n        </label>\n        ${"dnd5e"===game.data.system.id?`\n        <label class='label-inp' title='(De-)activate Hit Point rolling'>\n            <input class='hp rollable' type='checkbox' name='hp.use' ${this.data.hp.use?"checked":""} ><span><span class='checkmark'></span>&nbsp;HP</span>\n        </label>`:""}\n        <label class='label-inp' title='(De-)activate Token Config Overwrite'>\n            <input class='config rollable' type='checkbox' name='config.use' ${this.data.config.use?"checked":""}><span><span class='checkmark'></span>&nbsp;Config</span>\n        </label>\n        <label class='label-inp' title='(De-)activate Stat Overlay On Hover'>\n            <input class='config rollable' type='checkbox' name='overlay.use' ${this.data.overlay.use?"checked":""}><span><span class='checkmark'></span>&nbsp;Overlay</span>\n        </label>\n\n\n        <a class='refresh-selected' title="Reapplies all settings to selected tokens as if those were replaced onto the scene."><i class="fas fa-sync-alt"></i></a>\n        <a class='token-rand-form-btn' title='Settings'><i class="fa fa-cog"></i></a>\n        <h2></h2>\n        `);const t=e.querySelectorAll('input[type="checkbox"]');for(let e of t)e.addEventListener("change",e=>{setProperty(this.data,e.target.name,e.target.checked),this.saveSettings()});this.section.querySelector(".refresh-selected").addEventListener("click",e=>this._refreshSelected()),this.section.querySelector(".token-rand-form-btn").addEventListener("click",e=>{void 0===this.form&&(this.form=new i(this)),this.form.render(!0)})}_updateCheckboxes(){document.querySelectorAll("section.token-mold input").forEach(e=>{const t=e.name;e.checked=getProperty(this.data,t)})}_hookPreTokenCreate(){Hooks.on("preCreateToken",(e,t,s,a)=>{this._setTokenData(e,t)})}_setTokenData(e,t){const s=game.actors.get(t.actorId);return this.data.size.use&&!0===this.systemSupported&&this._setCreatureSize(t,s,e.id),!game.user.isGM||t.actorLink&&this.data.unlinkedOnly||(void 0===this.counter[e.id]&&(this.counter[e.id]={}),this.data.name.use&&(t.name=this._modifyName(t,s,e.id)),"dnd5e"===game.data.system.id&&this.data.hp.use&&this._rollHP(t,s),this.data.config.use&&this._overwriteConfig(t,s)),t}async _refreshSelected(){const e=canvas.tokens.controlled;let t=[];for(const s of e)t.push(this._setTokenData(canvas.scene,duplicate(s.data)));canvas.scene.updateEmbeddedEntity("Token",t)}_overwriteConfig(e,t){mergeObject(e,this.data.config.data);for(let[s,a]of Object.entries(this.data.config))if(!0===a.use)if(void 0!==a.value)e[s]=a.value;else if(void 0!==a.min&&void 0!==a.max){let t=e[s]||1;e[s]=t*Math.floor(100*(Math.random()*(a.max-a.min)+a.min))/100}else void 0!==a.attribute&&void 0!==getProperty(t,"data.data."+a.attribute)?e[s].attribute=a.attribute:void 0===a.attribute&&void 0===a.min&&void 0===a.max&&void 0===a.value&&(e[s]=Boolean(Math.round(Math.random())))}_rollHP(e,t){const s=t.data.data.attributes.hp.formula;if(s){const t=new Roll(s.replace(" ",""));t.roll(),this.data.hp.toChat&&t.toMessage({rollMode:"gmroll",flavor:e.name+" rolls for hp!"});const a=Math.max(t.total,1);setProperty(e,"actorData.data.attributes.hp.value",a),setProperty(e,"actorData.data.attributes.hp.max",a)}else ui.notifications.warn("Can not randomize hp. HP formula is not set.")}_modifyName(e,t,s){let a=t.data.token.name;if(""!==this.data.name.replace&&"nothing"!==this.data.name.replace&&(a=""),this.data.name.number.use){let t=0;if(void 0!==this.counter[s][e.actorId])t=this.counter[s][e.actorId];else{const a=game.scenes.get(s).data.tokens.filter(t=>t.actorId===e.actorId)||[];if(0!==a.length){let e=a[a.length-1].name.split(this.data.name.number.prefix).pop();""!==e&&(t=e.split(this.data.name.number.suffix)[0])}}switch(this.data.name.number.type){case"ar":t=parseInt(t);break;case"alu":t=this._dealphabetize(t.toString(),"upper");break;case"all":t=this._dealphabetize(t.toString(),"lower");break;case"ro":t=this._deromanize(t)}switch(isNaN(t)?t=0:this.data.name.number.range>1?t+=Math.ceil(Math.random()*this.data.name.number.range):t++,this.data.name.number.type){case"alu":t=this._alphabetize(t,"upper");break;case"all":t=this._alphabetize(t,"lower");break;case"ro":t=this._romanize(t)}this.counter[s][e.actorId]=t,a+=this.data.name.number.prefix+t+this.data.name.number.suffix}return"replace"===this.data.name.replace&&(a=this._pickNewName(t)+" "+a),this.data.name.prefix.use&&(a=this.adjectives.roll().results[0].text+" "+a),a}_chooseWeighted(e){var t=Object.keys(e),s=Object.values(e),a=s.reduce((e,t)=>e+t,0),n=0;s=s.map(e=>n=e+n);var o=Math.random()*a;return t[s.filter(e=>e<=o).length]}_chgCase(e,t,s){var a="",n="";for(n of e){let e=t.indexOf(n);a+=e<0?n:s[e]}return a}_pickNewName(e){const t=this.data.name.options.attributes||[];let s;for(let a of t){if(s=a.languages[String(getProperty(e.data,a.attribute)).toLowerCase()],void 0!==s)break}if(void 0===s&&(s=this.data.name.options.default),"random"===s){const e=Object.keys(this.dict);s=e[Math.floor(Math.random()*e.length)]}const a=this.data.name.options.min||6,n=this.data.name.options.max||9,o=Math.floor(Math.random()*(n-a+1))+a;let i=this._chooseWeighted(this.dict[s].beg);const r=(e,t,s)=>e in s&&t in s[e]&&Object.keys(s[e][t]).length>0&&s[e][t];for(let e=4;e<=o;e++){const t=i.slice(-2,-1),a=i.slice(-1),n=r(t,a,e==o?this.dict[s].end:this.dict[s].mid)||r(t,a,this.dict[s].all)||{};if(t==a&&t in n&&delete n[t],0==Object.keys(n).length)break;i+=this._chooseWeighted(n)}return i=i[0]+this._chgCase(i.slice(1),this.dict[s].upper,this.dict[s].lower),i}_dealphabetize(e,t){if("0"===e)return 0;let s=0;const a={upper:64,lower:96}[t];for(const t of e)s+=t.charCodeAt(0)-a;return s}_alphabetize(e,t){let s="";const a={upper:64,lower:96}[t];for(;e>=26;)s+=String.fromCharCode(a+26),e-=26;return s+=String.fromCharCode(a+e),s}_romanize(e){if(!+e)return!1;for(var t=String(+e).split(""),s=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],a="",n=3;n--;)a=(s[+t.pop()+10*n]||"")+a;return Array(+t.join("")+1).join("M")+a}_deromanize(e){if("string"!=typeof e)return 0;let t,s=e.toUpperCase(),a=/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,n={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},o=0;if(!s||!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(s))return!1;for(;t=a.exec(s);)o+=n[t[0]];return o}_setCreatureSize(e,t,s){let a={tiny:.5,sm:.8,med:1,lg:2,huge:3,grg:4}[t.data.data.traits.size];if(void 0===a)return;const n=game.scenes.get(s);if(null!==/(ft)|eet/.exec(n.data.gridUnits)&&(a*=5/n.data.gridDistance),a<1)e.scale=a,e.width=e.height=1;else{const t=Math.floor(a);e.width=e.height=t,e.scale=a/t,e.scale=Math.max(e.scale,.25)}}registerSettings(){game.settings.register("Token-Mold","everyone",{name:"Token Mold Settings",hint:"Settings definitions for the Token Mold Module",default:this.defaultSettings(),type:Object,scope:"world",onChange:e=>{this.data=e,this._updateCheckboxes()}})}defaultSettings(){return console.log("Token Mold | Loading default Settings"),{unlinkedOnly:!0,name:{use:!0,number:{use:!0,prefix:" (",suffix:")",type:"ar"},remove:!1,prefix:{use:!0,table:"Compendium.token-mold.adjectives.H0BSHD6uCDodIT5x"},replace:"",options:{default:"random",attributes:[{attribute:"",languages:{"":"random"}}],min:3,max:9}},hp:{use:!0,toChat:!0},size:{use:!0},config:{use:!1,vision:{use:!1,value:!0},displayBars:{use:!1,value:40},bar1:{use:!1},bar2:{use:!1},displayName:{use:!1,value:40},disposition:{use:!1,value:0},rotation:{use:!1,min:0,max:360},scale:{use:!1,min:.8,max:1.2}},overlay:{use:!0,attrs:i.defaultAttrs}}}loadSettings(){if(this.data=game.settings.get("Token-Mold","everyone"),void 0!==this.data.config.data){for(let[e,t]of Object.entries(this.data.config.data))this.data.config[e]={use:!0,value:t};delete this.data.config.data,this.saveSettings()}if(getProperty(this.data,"overlay.attrs")&&0===this.data.overlay.attrs.length&&delete this.data.overlay.attrs,getProperty(this.data,"name.options.attributes")&&0===this.data.name.options.attributes.length&&delete this.data.name.options.attributes,this.data=mergeObject(this.defaultSettings(),this.data),"dnd5e"===game.data.system.id&&void 0===this.data.name.options){const e=this.dndDefaultNameOptions;this.data.name.options.default=e.default,this.data.name.options.attributes=e.attributes}this._loadDicts(),console.log("Token Mold | Loading Settings",this.data)}get dndDefaultNameOptions(){return{default:"random",attributes:[{attribute:"name",languages:{orc:"turkish",goblin:"indonesian",kobold:"norwegian"}},{attribute:"data.details.type",languages:{humanoid:"irish",aberration:"icelandic",beast:"danish",celestial:"albanian",construct:"azeri",dragon:"latvian",elemental:"swedish",fey:"romanian",fiend:"sicilian",giant:"german",monstrosity:"slovenian",ooze:"welsh",plant:"zulu",undead:"french"}}]}}async saveSettings(){this.adjectives.uuid!==this.data.name.prefix.table&&this._loadTable(),await game.settings.set("Token-Mold","everyone",this.data),this._loadDicts(),console.log("Token Mold | Saving Settings",this.data)}async _getBarAttributes(){let e={};const t=game.system.model.Actor;for(const s in t){const a=t[s],n=TokenConfig.getTrackedAttributes(a),o=TokenConfig.getTrackedAttributeChoices(n);for(const t of Object.keys(o)){e[t]||(e[t]=[]);for(const a of o[t]){const n=e[t].find(e=>e.attribute.includes(a));void 0===n?e[t].push({entity:s,attribute:a}):n.entity+=", "+s}}}return e}}class i extends FormApplication{constructor(e,t){super(e,t),this.data=e.data,this.barAttributes=e.barAttributes||[]}static get defaultOptions(){const e=super.defaultOptions;return e.template="modules/token-mold/templates/token-mold.html",e.width=420,e.height=461,e.resizable=!0,e.classes=["token-mold"],e.title="Token Mold",e.closeOnSubmit=!1,e.submitOnClose=!0,e.submitOnChange=!0,e.tabs=[{navSelector:".tabs",contentSelector:"form",initial:"name"}],e}_getHeaderButtons(){let e=super._getHeaderButtons();return e[0].label="Save & Close",e}async _onSubmit(e){const t=$(this.form).find(".attributes");let s=[];t.each((e,t)=>{const a=$(t),n=a.find(".icon").val(),o=a.find(".value").val();""!==n&&""!==o&&s.push({icon:n,path:o})}),this.data.overlay.attrs=s,this.data.name.options.default=this.form.querySelector(".default-group").querySelector(".language").value;const a=[];this.form.querySelectorAll(".attribute-selection").forEach(e=>{let t={languages:{}};t.attribute=e.querySelector(".attribute").value,e.querySelectorAll(".language-group").forEach(e=>{t.languages[e.querySelector(".value").value.toLowerCase()]=e.querySelector(".language").value}),a.push(t)}),this.data.name.options.attributes=a,super._onSubmit(e)}async _updateObject(e,t){let s=t["name.options.min"],a=t["name.options.max"];if(s<0&&(s=0),a<0&&(a=0),s>a){const e=s;s=a,a=e}if(t["name.options.min"]=s,t["name.options.max"]=a,this.object.data=mergeObject(this.data,t),!0===this._resetOptions){const e=this.object.dndDefaultNameOptions;this.object.data.name.options.default=e.default,this.object.data.name.options.attributes=e.attributes,this._resetOptions=!1,this.render()}this.object.saveSettings()}getData(){let e={data:this.data,numberStyles:{ar:"arabic numerals",alu:"alphabetic UPPER",all:"alphabetic LOWER",ro:"roman numerals"}};return e.barAttributes=this.barAttributes,e.actorAttributes=this._actorAttributes,e.displayModes=CONST.TOKEN_DISPLAY_MODES,e.dispositions=CONST.TOKEN_DISPOSITIONS,e.defaultIcons=this.defaultIcons,e.showHP="dnd5e"===game.data.system.id,e.showSystem=this.object.systemSupported,e.languages=this.languages,e.rollTableList=this.object._rollTableList,console.debug("Token Mold | Prepared data",e,this._rollTableList),e}static get defaultAttrs(){return"dnd5e"===game.data.system.id?[{value:"data.attributes.ac.value",label:"Armor Class",icon:'<i class="fas fa-eye"></i>'},{value:"data.skills.prc.passive",label:"Passive Perception",icon:'<i class="fas fa-shield-alt"></i>'}]:[{icon:'<i class="fas fa-eye"></i>',value:""}]}get defaultIcons(){return["&#xf06e;","&#xf3ed; ","&#xf6cf; ","&#xf21e; ","&#xf6e8; ","&#xf54b; ","&#xf554; ","&#xf70c; ","&#xf51e; ","&#xf619; ","&#xf290; ","&#xf53a;","&#xf0f2;","&#xf06d;","&#xf1b0;","&#xf787;","&#xf5d7;","&#xf6d7;","&#xf5d1;","&#xf6de;","&#xf669;","&#xf753;","&#xf186;","&#xf135;","&#xf5dc;","&#xf1ae;"]}get languages(){return this.object.languages}activateListeners(e){if(super.activateListeners(e),e.find(".add-attribute").on("click",e=>{const t=$(e.target),s=t.prev().clone();s.find("select").val(""),t.before(s)}),e.on("click",".remove",e=>{const t=$(e.currentTarget).closest(".form-group");(t.prev('.form-group:not(".header")').length>0||t.next(".form-group").length>0)&&t.remove()}),e.find(".overlay").on("change keyup","input.icon",e=>{e.target.parentNode.parentNode.getElementsByClassName("prev")[0].innerHTML="17&nbsp;"+e.target.value}),e.find(".name-replace").on("change",e=>{const t=e.currentTarget.parentNode.parentNode.querySelector(".name-randomizer-options");"replace"===e.currentTarget.value?t.style.display="block":t.style.display="none"}),e.find(".name-replace").change(),e.on("click",".add-language-value",e=>{const t=$(e.target),s=t.prev().clone();s.find("input").val(""),s.find("select").val("random"),t.before(s)}),e.on("click",".add-language-attribute",e=>{const t=$(e.target),s=t.prev().clone();s.children(".attribute").val(""),s.children(".language-selection").children(".language-group").each((e,t)=>{e>0&&t.remove()});const a=s.children(".language-selection");a.find("input").val(""),a.find("select").val("random"),t.before(s)}),e.on("click",".lang-remove",e=>{const t=$(e.currentTarget).closest(".form-group");if(t.prev(".form-group").length>0||t.next(".form-group").length>0)t.remove();else{const e=t.closest(".attribute-group");(e.prev('.attribute-group:not(".default")').length>0||e.next('.attribute-group:not(".default")').length>0)&&e.remove()}}),"dnd5e"===game.system.id){const t=e.find(".reset");t[0].innerHTML='<i class="fas fa-undo"></i>';t.on("click",e=>{this._resetOptions=!0,this._onSubmit(e)})}e[0].querySelector(".reroll-names").addEventListener("click",e=>{const t=canvas.tokens.controlledTokens;let s=[];for(let e of t)s.push({_id:e.id,name:this.object._pickNewName(e.actor.data)});canvas.scene.updateManyEmbeddedEntities("Token",s)}),e.on("click",".reset-counter",async e=>{const t=canvas.scene.id;this.object.counter[t]={};const s=canvas.scene.getEmbeddedCollection("Token");for(const e of s)e.actorId&&(this.object.counter[t][e.actorId]=0);ui.notifications.notify("Finished resetting counters")})}get _actorAttributes(){let e=function(t,s){s=s||[];let a=[];for(let[n,o]of Object.entries(t)){let i=s.concat([n]);o instanceof Object?a=a.concat(e(t[n],i)):a.push(i)}return a},t=[];for(let s in game.system.model.Actor){let a=e(game.system.model.Actor[s]).map(e=>e.join("."));for(let e of a){let a=t.find(t=>t[1].includes(e));void 0===a?t.push([s].concat(e)):a[0]+=", "+s}}let s={};for(var a of t){const e=a[1].split("."),t=a[0],n=e[0];void 0===s[n]&&(s[n]=[]),s[n].push({entity:t,attribute:e.splice(1).join(".")})}if("dnd5e"===game.data.system.id){let e=function(e,t){return e.attribute>t.attribute?1:e.attribute<t.attribute?-1:0};for(let e of Object.keys(game.system.model.Actor.npc.skills))s.skills.push({entity:"character, npc",attribute:e+".passive"});s.skills.sort(e),s.attributes.push({entity:"character, npc",attribute:"ac.value"}),s.attributes.sort(e)}return s}}}});
//# sourceMappingURL=index.js.map