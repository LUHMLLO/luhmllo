/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt=globalThis,Ht=mt.ShadowRoot&&(void 0===mt.ShadyCSS||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),kt=new WeakMap;let ce=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ht&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=kt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&kt.set(e,t))}return t}toString(){return this.cssText}};const Te=t=>new ce("string"==typeof t?t:t+"",void 0,Mt),at=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new ce(n,t,Mt)},Le=(t,e)=>{if(Ht)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),i=mt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}},zt=Ht?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Te(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:De,defineProperty:He,getOwnPropertyDescriptor:Me,getOwnPropertyNames:Ne,getOwnPropertySymbols:Ue,getPrototypeOf:Be}=Object,N=globalThis,Ft=N.trustedTypes,je=Ft?Ft.emptyScript:"",Ct=N.reactiveElementPolyfillSupport,it=(t,e)=>t,gt={toAttribute(t,e){switch(e){case Boolean:t=t?je:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Nt=(t,e)=>!De(t,e),Vt={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:Nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&He(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=Me(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const r=null==i?void 0:i.call(this);o.call(this,e),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;const t=Be(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){const t=this.properties,e=[...Ne(t),...Ue(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(zt(t))}else void 0!==t&&e.push(zt(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null==(n=i.converter)?void 0:n.toAttribute)?i.converter:gt).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(n=t.converter)?void 0:n.fromAttribute)?t.converter:gt;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Nt)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[it("elementProperties")]=new Map,I[it("finalized")]=new Map,null==Ct||Ct({ReactiveElement:I}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=globalThis,yt=ot.trustedTypes,It=yt?yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ae="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+H,We=`<${de}>`,z=document,st=()=>z.createComment(""),rt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,he=Array.isArray,ke=t=>he(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Pt="[ \t\n\f\r]",nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Xt=/>/g,W=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Kt=/"/g,ue=/^(?:script|style|textarea|title)$/i,ze=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),X=ze(1),Y=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Jt=new WeakMap,k=z.createTreeWalker(z,129);function fe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==It?It.createHTML(e):e}const Fe=(t,e)=>{const n=t.length-1,i=[];let o,r=2===e?"<svg>":"",s=nt;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,a=s.exec(n),null!==a);)d=s.lastIndex,s===nt?"!--"===a[1]?s=qt:void 0!==a[1]?s=Xt:void 0!==a[2]?(ue.test(a[2])&&(o=RegExp("</"+a[2],"g")),s=W):void 0!==a[3]&&(s=W):s===W?">"===a[0]?(s=o??nt,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?W:'"'===a[3]?Kt:Yt):s===Kt||s===Yt?s=W:s===qt||s===Xt?s=nt:(s=W,o=void 0);const h=s===W&&t[e+1].startsWith("/>")?" ":"";r+=s===nt?n+We:c>=0?(i.push(l),n.slice(0,c)+ae+n.slice(c)+H+h):n+H+(-2===c?e:h)}return[fe(t,r+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class lt{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const s=t.length-1,l=this.parts,[a,c]=Fe(t,e);if(this.el=lt.createElement(a,n),k.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=k.nextNode())&&l.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(ae)){const e=c[r++],n=i.getAttribute(t).split(H),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?Ie:"?"===s[1]?qe:"@"===s[1]?Xe:bt}),i.removeAttribute(t)}else t.startsWith(H)&&(l.push({type:6,index:o}),i.removeAttribute(t));if(ue.test(i.tagName)){const t=i.textContent.split(H),e=t.length-1;if(e>0){i.textContent=yt?yt.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],st()),k.nextNode(),l.push({type:2,index:++o});i.append(t[e],st())}}}else if(8===i.nodeType)if(i.data===de)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(H,t+1));)l.push({type:7,index:o}),t+=H.length-1}o++}}static createElement(t,e){const n=z.createElement("template");return n.innerHTML=t,n}}function K(t,e,n=t,i){var o,r;if(e===Y)return e;let s=void 0!==i?null==(o=n._$Co)?void 0:o[i]:n._$Cl;const l=rt(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==l&&(null==(r=null==s?void 0:s._$AO)||r.call(s,!1),void 0===l?s=void 0:(s=new l(t),s._$AT(t,n,i)),void 0!==i?(n._$Co??(n._$Co=[]))[i]=s:n._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,i)),e}class Ve{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=((null==t?void 0:t.creationScope)??z).importNode(e,!0);k.currentNode=i;let o=k.nextNode(),r=0,s=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new dt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Ye(o,this,t)),this._$AV.push(e),l=n[++s]}r!==(null==l?void 0:l.index)&&(o=k.nextNode(),r++)}return k.currentNode=z,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class dt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),rt(t)?t===$||null==t||""===t?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ke(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=lt.createElement(fe(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===o)this._$AH.p(n);else{const t=new Ve(o,this),e=t.u(this.options);t.p(n),this.T(e),this._$AH=t}}_$AC(t){let e=Jt.get(t.strings);return void 0===e&&Jt.set(t.strings,e=new lt(t)),e}k(t){he(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new dt(this.S(st()),this.S(st()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null==(n=this._$AP)||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,e,0),r=!rt(t)||t!==this._$AH&&t!==Y,r&&(this._$AH=t);else{const i=t;let s,l;for(t=o[0],s=0;s<o.length-1;s++)l=K(this,i[n+s],e,s),l===Y&&(l=this._$AH[s]),r||(r=!rt(l)||l!==this._$AH[s]),l===$?t=$:t!==$&&(t+=(l??"")+o[s+1]),this._$AH[s]=l}r&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ie extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class qe extends bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Xe extends bt{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??$)===Y)return;const n=this._$AH,i=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==$&&(n===$||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ye{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const Rt=ot.litHtmlPolyfillSupport;null==Rt||Rt(lt,dt),(ot.litHtmlVersions??(ot.litHtmlVersions=[])).push("3.1.4");const Ke=(t,e,n)=>{const i=(null==n?void 0:n.renderBefore)??e;let o=i._$litPart$;if(void 0===o){const t=(null==n?void 0:n.renderBefore)??null;i._$litPart$=o=new dt(e.insertBefore(st(),t),t,void 0,n??{})}return o._$AI(t),o};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ke(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Y}}var le;C._$litElement$=!0,C.finalized=!0,null==(le=globalThis.litElementHydrateSupport)||le.call(globalThis,{LitElement:C});const Tt=globalThis.litElementPolyfillSupport;null==Tt||Tt({LitElement:C}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Je={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:Nt},Ze=(t=Je,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const o=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=n;return function(n){const o=this[i];e.call(this,n),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function At(t){return(e,n)=>"object"==typeof n?Ze(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Ge(t,e){return(e,n,i)=>pe(e,n,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qe(t){return(e,n)=>{const{slot:i,selector:o}=t??{},r="slot"+(i?`[name=${i}]`:":not([name])");return pe(e,n,{get(){var e;const n=null==(e=this.renderRoot)?void 0:e.querySelector(r),i=(null==n?void 0:n.assignedElements(t))??[];return void 0===o?i:i.filter((t=>t.matches(o)))}})}}var tn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,me=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?en(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&tn(e,n,r),r};let vt=class extends C{constructor(){super(...arguments),this.tmpl="default-y"}render(){return X` <slot></slot> `}};vt.styles=at`
		:host(:is(ly-app)) {
			--bg: var(--clr-background);
			background-color: var(--bg);

			--clr: var(--clr-text);
			color: var(--clr);

			--gap: 0;
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: fixed;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-app)) {
			color: var(--clr);
			display: grid;
			height: 100dvh;
			isolation: isolate;
			overflow: clip;
			width: 100dvw;
			z-index: 1;
		}

		:host(:is(ly-app[tmpl='default-x'])) {
			grid-auto-columns: max-content;
			grid-auto-flow: column;
			overflow-x: auto;
			overflow-y: clip;
		}

		:host(:is(ly-app[tmpl='default-y'])) {
			grid-auto-columns: max-content;
			grid-auto-flow: column;
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) {
			display: grid;
			grid-auto-rows: max-content;
			grid-template-columns:
				[grid-expand-start] minmax(var(--prefers-containerOutterWidth), 1fr)
				[grid-contain-start] minmax(0, var(--prefers-containerWidth))
				[grid-contain-end] minmax(var(--prefers-containerOutterWidth), 1fr)
				[grid-expand-end];
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted(*) {
			grid-column: grid-contain;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: grid-expand;
		}

		:host(:is(ly-app[tmpl='container']))
			::slotted([tmpl-expand]:not([tmpl-expand='uncontained'])) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-subgrid]) {
			grid-auto-rows: inherit;
			grid-template-columns: subgrid;
			grid-column: grid-expand;
		}

		:host(:is(ly-app[tmpl='row'])) {
			display: flex;
			flex-direction: row;
		}

		:host(:is(ly-app[tmpl='col'])) {
			display: flex;
			flex-direction: column;
		}
	`,me([At({type:String,reflect:!0})],vt.prototype,"tmpl",2),vt=me([ht("ly-app")],vt);const ge=["top","right","bottom","left"],Zt=["start","end"],Gt=ge.reduce(((t,e)=>t.concat(e,e+"-"+Zt[0],e+"-"+Zt[1])),[]),M=Math.min,A=Math.max,wt=Math.round,pt=Math.floor,U=t=>({x:t,y:t}),nn={left:"right",right:"left",bottom:"top",top:"bottom"},on={start:"end",end:"start"};function Qt(t,e,n){return A(t,M(e,n))}function G(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function T(t){return t.split("-")[1]}function ye(t){return"x"===t?"y":"x"}function ve(t){return"y"===t?"height":"width"}function ut(t){return["top","bottom"].includes(V(t))?"y":"x"}function we(t){return ye(ut(t))}function sn(t,e,n){void 0===n&&(n=!1);const i=T(t),o=we(t),r=ve(o);let s="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=te(s)),[s,te(s)]}function rn(t){return t.replace(/start|end/g,(t=>on[t]))}function te(t){return t.replace(/left|right|bottom|top/g,(t=>nn[t]))}function ln(t){return{top:0,right:0,bottom:0,left:0,...t}}function cn(t){return"number"!=typeof t?ln(t):{top:t,right:t,bottom:t,left:t}}function xt(t){const{x:e,y:n,width:i,height:o}=t;return{width:i,height:o,top:n,left:e,right:e+i,bottom:n+o,x:e,y:n}}function ee(t,e,n){let{reference:i,floating:o}=t;const r=ut(e),s=we(e),l=ve(s),a=V(e),c="y"===r,d=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,u=i[l]/2-o[l]/2;let p;switch(a){case"top":p={x:d,y:i.y-o.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-o.width,y:h};break;default:p={x:i.x,y:i.y}}switch(T(e)){case"start":p[s]-=u*(n&&c?-1:1);break;case"end":p[s]+=u*(n&&c?-1:1)}return p}const an=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=ee(c,i,a),u=i,p={},f=0;for(let n=0;n<l.length;n++){const{name:r,fn:m}=l[n],{x:g,y:y,data:v,reset:w}=await m({x:d,y:h,initialPlacement:i,placement:u,strategy:o,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});d=g??d,h=y??h,p={...p,[r]:{...p[r],...v}},w&&f<=50&&(f++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(c=!0===w.rects?await s.getElementRects({reference:t,floating:e,strategy:o}):w.rects),({x:d,y:h}=ee(c,u,a))),n=-1)}return{x:d,y:h,placement:u,strategy:o,middlewareData:p}};async function J(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=G(e,t),f=cn(p),m=l[u?"floating"===h?"reference":"floating":h],g=xt(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(m)))||n?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),y="floating"===h?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},x=xt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:a}):y);return{top:(g.top-x.top+f.top)/w.y,bottom:(x.bottom-g.bottom+f.bottom)/w.y,left:(g.left-x.left+f.left)/w.x,right:(x.right-g.right+f.right)/w.x}}function dn(t,e,n){return(t?[...n.filter((e=>T(e)===t)),...n.filter((e=>T(e)!==t))]:n.filter((t=>V(t)===t))).filter((n=>!t||(T(n)===t||!!e&&rn(n)!==n)))}const hn=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o;const{rects:r,middlewareData:s,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:u=Gt,autoAlignment:p=!0,...f}=G(t,e),m=void 0!==h||u===Gt?dn(h||null,p,u):u,g=await J(e,f),y=(null==(n=s.autoPlacement)?void 0:n.index)||0,v=m[y];if(null==v)return{};const w=sn(v,r,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:m[0]}};const x=[g[V(v)],g[w[0]],g[w[1]]],$=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:v,overflows:x}],b=m[y+1];if(b)return{data:{index:y+1,overflows:$},reset:{placement:b}};const _=$.map((t=>{const e=T(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(o=_.filter((t=>t[2].slice(0,T(t[0])?2:3).every((t=>t<=0))))[0])?void 0:o[0])||_[0][0];return A!==l?{data:{index:y+1,overflows:$},reset:{placement:A}}:{}}}};function ne(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ie(t){return ge.some((e=>t[e]>=0))}const un=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...o}=G(t,e);switch(i){case"referenceHidden":{const t=ne(await J(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:ie(t)}}}case"escaped":{const t=ne(await J(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:ie(t)}}}default:return{}}}}};async function fn(t,e){const{placement:n,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),s=V(n),l=T(n),a="y"===ut(n),c=["left","top"].includes(s)?-1:1,d=r&&a?-1:1,h=G(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(p="end"===l?-1*f:f),a?{x:p*d,y:u*c}:{x:u*c,y:p*d}}const pn=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=e,a=await fn(e,t);return s===(null==(n=l.offset)?void 0:n.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:o+a.x,y:r+a.y,data:{...a,placement:s}}}}},mn=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=G(t,e),c={x:n,y:i},d=await J(e,a),h=ut(V(o)),u=ye(h);let p=c[u],f=c[h];if(r){const t="y"===u?"bottom":"right";p=Qt(p+d["y"===u?"top":"left"],p,p-d[t])}if(s){const t="y"===h?"bottom":"right";f=Qt(f+d["y"===h?"top":"left"],f,f-d[t])}const m=l.fn({...e,[u]:p,[h]:f});return{...m,data:{x:m.x-n,y:m.y-i}}}}},gn=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:o,elements:r}=e,{apply:s=(()=>{}),...l}=G(t,e),a=await J(e,l),c=V(n),d=T(n),h="y"===ut(n),{width:u,height:p}=i.floating;let f,m;"top"===c||"bottom"===c?(f=c,m=d===(await(null==o.isRTL?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(m=c,f="end"===d?"top":"bottom");const g=p-a.top-a.bottom,y=u-a.left-a.right,v=M(p-a[f],g),w=M(u-a[m],y),x=!e.middlewareData.shift;let $=v,b=w;if(h?b=d||x?M(w,y):y:$=d||x?M(v,g):g,x&&!d){const t=A(a.left,0),e=A(a.right,0),n=A(a.top,0),i=A(a.bottom,0);h?b=u-2*(0!==t||0!==e?t+e:A(a.left,a.right)):$=p-2*(0!==n||0!==i?n+i:A(a.top,a.bottom))}await s({...e,availableWidth:b,availableHeight:$});const _=await o.getDimensions(r.floating);return u!==_.width||p!==_.height?{reset:{rects:!0}}:{}}}};function Q(t){return xe(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(xe(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function xe(t){return t instanceof Node||t instanceof E(t).Node}function P(t){return t instanceof Element||t instanceof E(t).Element}function R(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function oe(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof E(t).ShadowRoot)}function ft(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function yn(t){return["table","td","th"].includes(Q(t))}function Ut(t){const e=Bt(),n=S(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function vn(t){let e=B(t);for(;R(e)&&!Z(e);){if(Ut(e))return e;e=B(e)}return null}function Bt(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Z(t){return["html","body","#document"].includes(Q(t))}function S(t){return E(t).getComputedStyle(t)}function Et(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function B(t){if("html"===Q(t))return t;const e=t.assignedSlot||t.parentNode||oe(t)&&t.host||L(t);return oe(e)?e.host:e}function $e(t){const e=B(t);return Z(e)?t.ownerDocument?t.ownerDocument.body:t.body:R(e)&&ft(e)?e:$e(e)}function ct(t,e,n){var i;void 0===e&&(e=[]),void 0===n&&(n=!0);const o=$e(t),r=o===(null==(i=t.ownerDocument)?void 0:i.body),s=E(o);return r?e.concat(s,s.visualViewport||[],ft(o)?o:[],s.frameElement&&n?ct(s.frameElement):[]):e.concat(o,ct(o,[],n))}function _e(t){const e=S(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=R(t),r=o?t.offsetWidth:n,s=o?t.offsetHeight:i,l=wt(n)!==r||wt(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}function jt(t){return P(t)?t:t.contextElement}function q(t){const e=jt(t);if(!R(e))return U(1);const n=e.getBoundingClientRect(),{width:i,height:o,$:r}=_e(e);let s=(r?wt(n.width):n.width)/i,l=(r?wt(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const wn=U(0);function be(t){const e=E(t);return Bt()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:wn}function xn(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==E(t))&&e}function F(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const o=t.getBoundingClientRect(),r=jt(t);let s=U(1);e&&(i?P(i)&&(s=q(i)):s=q(t));const l=xn(r,n,i)?be(r):U(0);let a=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,d=o.width/s.x,h=o.height/s.y;if(r){const t=E(r),e=i&&P(i)?E(i):i;let n=t,o=n.frameElement;for(;o&&i&&e!==n;){const t=q(o),e=o.getBoundingClientRect(),i=S(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,s=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=r,c+=s,n=E(o),o=n.frameElement}}return xt({width:d,height:h,x:a,y:c})}const $n=[":popover-open",":modal"];function Wt(t){return $n.some((e=>{try{return t.matches(e)}catch{return!1}}))}function _n(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t;const r="fixed"===o,s=L(i),l=!!e&&Wt(e.floating);if(i===s||l&&r)return n;let a={scrollLeft:0,scrollTop:0},c=U(1);const d=U(0),h=R(i);if((h||!h&&!r)&&(("body"!==Q(i)||ft(s))&&(a=Et(i)),R(i))){const t=F(i);c=q(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+d.x,y:n.y*c.y-a.scrollTop*c.y+d.y}}function bn(t){return Array.from(t.getClientRects())}function Ae(t){return F(L(t)).left+Et(t).scrollLeft}function An(t){const e=L(t),n=Et(t),i=t.ownerDocument.body,o=A(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=A(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Ae(t);const l=-n.scrollTop;return"rtl"===S(i).direction&&(s+=A(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:l}}function En(t,e){const n=E(t),i=L(t),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,a=0;if(o){r=o.width,s=o.height;const t=Bt();(!t||t&&"fixed"===e)&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:s,x:l,y:a}}function Sn(t,e){const n=F(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=R(t)?q(t):U(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}function se(t,e,n){let i;if("viewport"===e)i=En(t,n);else if("document"===e)i=An(L(t));else if(P(e))i=Sn(e,n);else{const n=be(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return xt(i)}function Ee(t,e){const n=B(t);return!(n===e||!P(n)||Z(n))&&("fixed"===S(n).position||Ee(n,e))}function On(t,e){const n=e.get(t);if(n)return n;let i=ct(t,[],!1).filter((t=>P(t)&&"body"!==Q(t))),o=null;const r="fixed"===S(t).position;let s=r?B(t):t;for(;P(s)&&!Z(s);){const e=S(s),n=Ut(s);!n&&"fixed"===e.position&&(o=null),(r?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||ft(s)&&!n&&Ee(t,s))?i=i.filter((t=>t!==s)):o=e,s=B(s)}return e.set(t,i),i}function Cn(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[..."clippingAncestors"===n?Wt(e)?[]:On(e,this._c):[].concat(n),i],s=r[0],l=r.reduce(((t,n)=>{const i=se(e,n,o);return t.top=A(i.top,t.top),t.right=M(i.right,t.right),t.bottom=M(i.bottom,t.bottom),t.left=A(i.left,t.left),t}),se(e,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Pn(t){const{width:e,height:n}=_e(t);return{width:e,height:n}}function Rn(t,e,n){const i=R(e),o=L(e),r="fixed"===n,s=F(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=U(0);if(i||!i&&!r)if(("body"!==Q(e)||ft(o))&&(l=Et(e)),i){const t=F(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else o&&(a.x=Ae(o));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function Lt(t){return"static"===S(t).position}function re(t,e){return R(t)&&"fixed"!==S(t).position?e?e(t):t.offsetParent:null}function Se(t,e){const n=E(t);if(Wt(t))return n;if(!R(t)){let e=B(t);for(;e&&!Z(e);){if(P(e)&&!Lt(e))return e;e=B(e)}return n}let i=re(t,e);for(;i&&yn(i)&&Lt(i);)i=re(i,e);return i&&Z(i)&&Lt(i)&&!Ut(i)?n:i||vn(t)||n}const Tn=async function(t){const e=this.getOffsetParent||Se,n=this.getDimensions,i=await n(t.floating);return{reference:Rn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ln(t){return"rtl"===S(t).direction}const Dn={convertOffsetParentRelativeRectToViewportRelativeRect:_n,getDocumentElement:L,getClippingRect:Cn,getOffsetParent:Se,getElementRects:Tn,getClientRects:bn,getDimensions:Pn,getScale:q,isElement:P,isRTL:Ln};function Hn(t,e){let n,i=null;const o=L(t);function r(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function s(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:d,width:h,height:u}=t.getBoundingClientRect();if(l||e(),!h||!u)return;const p={rootMargin:-pt(d)+"px "+-pt(o.clientWidth-(c+h))+"px "+-pt(o.clientHeight-(d+u))+"px "+-pt(c)+"px",threshold:A(0,M(1,a))||1};let f=!0;function m(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return s();e?s(!1,e):n=setTimeout((()=>{s(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch{i=new IntersectionObserver(m,p)}i.observe(t)}(!0),r}function Mn(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=jt(t),d=o||r?[...c?ct(c):[],...ct(e)]:[];d.forEach((t=>{o&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const h=c&&l?Hn(c,n):null;let u=-1,p=null;s&&(p=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame((()=>{var t;null==(t=p)||t.observe(e)}))),n()})),c&&!a&&p.observe(c),p.observe(e));let f,m=a?F(t):null;return a&&function e(){const i=F(t);m&&(i.x!==m.x||i.y!==m.y||i.width!==m.width||i.height!==m.height)&&n(),m=i,f=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{o&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=p)||t.disconnect(),p=null,a&&cancelAnimationFrame(f)}}const Nn=J,Un=pn,Bn=hn,jn=mn,Wn=gn,kn=un,zn=(t,e,n)=>{const i=new Map,o={platform:Dn,...n},r={...o.platform,_c:i};return an(t,e,{...o,platform:r})};var Fn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,St=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Vn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Fn(e,n,r),r};let j=class extends C{constructor(){super(...arguments),this.open=!1}firstUpdated(){this.addEventListener("focus",(()=>this.focus())),document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",(()=>this.focus())),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return X`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${this.open?X`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:$}
		`}clickOutsideHandler(t){var e;const n=t.composedPath()[0],i=!(null!=(e=this.shadowRoot)&&e.contains(n)||this.contains(n));this.open&&i&&(this.open=!1)}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=Mn(this._dropsummary[0],this._dropmenu,(async()=>{await zn(this._dropsummary[0],this._dropmenu,{middleware:[Bn({autoAlignment:!0,alignment:"bottom",allowedPlacements:["top","bottom"],crossAxis:!0,padding:3}),Un(3),jn({crossAxis:!0,mainAxis:!0,padding:3}),Wn({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await Nn(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})},kn()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e,middlewareData:n})=>{n.hide&&Object.assign(this._dropmenu.style,{opacity:n.hide.referenceHidden?"0":"1",pointerEvents:n.hide.referenceHidden?"none":"initial"}),Object.assign(this._dropmenu.style,{inset:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}))}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}};j.styles=at`
		:host(:is(ly-dropdown)) {
			display: inline-flex;
			min-height: 0;
			position: relative;
			width: fit-content;
			visibility: hidden;
		}

		:host(:is(ly-dropdown)) > * {
			visibility: visible;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu) {
			--bg: var(--clr-background);
			--gap: 0;
			--outln-clr: var(--bg);
			--radius: var(--scale-sm);
			--spacing: var(--scale-5xs);

			background-color: var(--bg);
			border-radius: var(--radius);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			height: max-content;
			isolation: isolate;
			max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--scale-5xl));
			max-width: calc(100dvw - var(--scale-sm));
			min-height: max-content;
			min-width: max-content;
			outline: solid
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					gray 16%
				);
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			transition: top var(--animDefaults), bottom var(--animDefaults),
				opacity var(--animDefaults), visbility var(--animDefaults);
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: clip;
			overflow-y: auto;
			transition-delay: var(--animDuration);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`,j.properties={delegatesFocus:{type:Boolean,reflect:!0}},j.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0},St([At({type:Boolean,reflect:!0})],j.prototype,"open",2),St([Qe({slot:"summary",flatten:!0})],j.prototype,"_dropsummary",2),St([Ge('div[part="dropmenu"]')],j.prototype,"_dropmenu",2),j=St([ht("ly-dropdown")],j);var In=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Xn=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?qn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&In(e,n,r),r};let Dt=class extends C{render(){return X` <slot></slot> `}};Dt.styles=at`
		:host(:is(ly-fragment)) {
			--bg: none;
			background-color: var(--bg);

			--clr: inherit;
			color: var(--clr);

			--gap: 0;
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: relative;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-fragment)) {
			display: contents;
		}
	`,Dt=Xn([ht("ly-fragment")],Dt);var Yn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Oe=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Kn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Yn(e,n,r),r};let $t=class extends C{constructor(){super(...arguments),this.stacked="over"}render(){return X` <slot></slot> `}};$t.styles=at`
		:host(:is(ly-layer)) {
			/* local vars */
			--bg: none;
			--clr: var(--clr-text);
			--m: auto;
			--ps: fixed;

			background-color: var(--bg);
			color: var(--clr);
			display: flex;
			flex-direction: column;
			height: 100dvh;
			inset: 0;
			isolation: isolate;
			margin: var(--m) !important;
			overflow: clip;
			position: var(--ps) !important;
			visibility: hidden;
			width: 100dvw;
		}

		:host(:is(ly-layer)) ::slotted(*) {
			visibility: visible;
		}

		:host(:is(ly-layer[stacked='under'])) {
			z-index: -1;
		}

		:host(:is(ly-layer[stacked='over'])) {
			z-index: 2;
		}
	`,Oe([At({type:String,reflect:!0})],$t.prototype,"stacked",2),$t=Oe([ht("ly-layer")],$t);var Jn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Ce=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Zn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Jn(e,n,r),r};let _t=class extends C{constructor(){super(...arguments),this.axis="x"}render(){return X` <slot></slot> `}};_t.styles=at`
		:host(:is(ly-slider)) {
			--bg: none;
			background-color: var(--bg);

			--clr: var(--clr-text);
			color: var(--clr);

			--gap: var(--scale-2xl);
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: auto;
			margin: var(--margin);

			--placement: fixed;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-slider)) {
			display: grid;
			height: max-content;
			/*scroll-snap-padding-block: var(--gap);*/
		}

		:host(:is(ly-slider)) ::slotted(*) {
			min-height: max-content;
			min-width: max-content;
			/*scroll-snap-align: start;*/
		}

		:host(:is(ly-slider)[axis='x']) {
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			overflow-x: auto;
			overflow-y: visible;
			/*scroll-snap-type: x proximity;*/
		}

		:host(:is(ly-slider)[axis='y']) {
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: visible;
			overflow-y: auto;
			/*scroll-snap-type: y proximity;*/
		}
	`,Ce([At({type:String,reflect:!0})],_t.prototype,"axis",2),_t=Ce([ht("ly-slider")],_t);export{vt as App,j as Dropdown,Dt as Fragment,$t as Layer,_t as Slider};