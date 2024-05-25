/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _t=globalThis,Kt=_t.ShadowRoot&&(void 0===_t.ShadyCSS||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),ie=new WeakMap;let _e=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=ie.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ie.set(e,t))}return t}toString(){return this.cssText}};const Ve=t=>new _e("string"==typeof t?t:t+"",void 0,Jt),R=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new _e(i,t,Jt)},qe=(t,e)=>{if(Kt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=_t.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},ne=Kt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ve(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Xe,defineProperty:Ye,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Ke,getOwnPropertySymbols:Je,getPrototypeOf:Ze}=Object,F=globalThis,oe=F.trustedTypes,Qe=oe?oe.emptyScript:"",Ut=F.reactiveElementPolyfillSupport,lt=(t,e)=>t,$t={toAttribute(t,e){switch(e){case Boolean:t=t?Qe:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Zt=(t,e)=>!Xe(t,e),re={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Zt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);class Z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=re){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Ye(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Ge(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){const n=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??re}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=Ze(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,e=[...Ke(t),...Je(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ne(t))}else void 0!==t&&e.push(ne(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qe(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null==(i=s.converter)?void 0:i.toAttribute)?s.converter:$t).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:$t;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Zt)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[lt("elementProperties")]=new Map,Z[lt("finalized")]=new Map,null==Ut||Ut({ReactiveElement:Z}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=globalThis,At=at.trustedTypes,le=At?At.createPolicy("lit-html",{createHTML:t=>t}):void 0,$e="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,Ae="?"+B,ts=`<${Ae}>`,G=document,ct=()=>G.createComment(""),dt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Ee=Array.isArray,es=t=>Ee(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),jt="[ \t\n\f\r]",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,ce=/>/g,X=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,he=/"/g,Se=/^(?:script|style|textarea|title)$/i,ss=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),y=ss(1),tt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),pe=new WeakMap,Y=G.createTreeWalker(G,129);function Oe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==le?le.createHTML(e):e}const is=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=rt;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,a=o.exec(i),null!==a);)d=o.lastIndex,o===rt?"!--"===a[1]?o=ae:void 0!==a[1]?o=ce:void 0!==a[2]?(Se.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=X):void 0!==a[3]&&(o=X):o===X?">"===a[0]?(o=r??rt,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?X:'"'===a[3]?he:de):o===he||o===de?o=X:o===ae||o===ce?o=rt:(o=X,r=void 0);const h=o===X&&t[e+1].startsWith("/>")?" ":"";n+=o===rt?i+ts:c>=0?(s.push(l),i.slice(0,c)+$e+i.slice(c)+B+h):i+B+(-2===c?e:h)}return[Oe(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class ht{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,c]=is(t,e);if(this.el=ht.createElement(a,i),Y.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Y.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith($e)){const e=c[n++],i=s.getAttribute(t).split(B),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?os:"?"===o[1]?rs:"@"===o[1]?ls:kt}),s.removeAttribute(t)}else t.startsWith(B)&&(l.push({type:6,index:r}),s.removeAttribute(t));if(Se.test(s.tagName)){const t=s.textContent.split(B),e=t.length-1;if(e>0){s.textContent=At?At.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ct()),Y.nextNode(),l.push({type:2,index:++r});s.append(t[e],ct())}}}else if(8===s.nodeType)if(s.data===Ae)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(B,t+1));)l.push({type:7,index:r}),t+=B.length-1}r++}}static createElement(t,e){const i=G.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,s){var r,n;if(e===tt)return e;let o=void 0!==s?null==(r=i._$Co)?void 0:r[s]:i._$Cl;const l=dt(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=et(t,o._$AS(t,e.values),o,s)),e}class ns{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??G).importNode(e,!0);Y.currentNode=s;let r=Y.nextNode(),n=0,o=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new ut(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new as(r,this,t)),this._$AV.push(e),l=i[++o]}n!==(null==l?void 0:l.index)&&(r=Y.nextNode(),n++)}return Y.currentNode=G,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ut{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),dt(t)?t===_||null==t||""===t?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==tt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):es(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&dt(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=ht.createElement(Oe(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new ns(r,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=pe.get(t.strings);return void 0===e&&pe.set(t.strings,e=new ht(t)),e}k(t){Ee(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ut(this.S(ct()),this.S(ct()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=et(this,t,e,0),n=!dt(t)||t!==this._$AH&&t!==tt,n&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=et(this,s[i+o],e,o),l===tt&&(l=this._$AH[o]),n||(n=!dt(l)||l!==this._$AH[o]),l===_?t=_:t!==_&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class os extends kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class rs extends kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class ls extends kt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??_)===tt)return;const i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class as{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Bt=at.litHtmlPolyfillSupport;null==Bt||Bt(ht,ut),(at.litHtmlVersions??(at.litHtmlVersions=[])).push("3.1.3");const cs=(t,e,i)=>{const s=(null==i?void 0:i.renderBefore)??e;let r=s._$litPart$;if(void 0===r){const t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=r=new ut(e.insertBefore(ct(),t),t,void 0,i??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return tt}}var be;$._$litElement$=!0,$.finalized=!0,null==(be=globalThis.litElementHydrateSupport)||be.call(globalThis,{LitElement:$});const Wt=globalThis.litElementPolyfillSupport;null==Wt||Wt({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ds={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Zt},hs=(t=ds,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function A(t){return(e,i)=>"object"==typeof i?hs(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ps(t,e){return(e,i,s)=>Ce(e,i,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function us(t){return(e,i)=>{const{slot:s}=t??{},r="slot"+(s?`[name=${s}]`:":not([name])");return Ce(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(r);return(null==i?void 0:i.assignedNodes(t))??[]}})}}var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,Pe=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?ms(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&fs(e,i,n),n};let Et=class extends ${constructor(){super(...arguments),this.tmpl="default"}render(){return y` <slot></slot> `}};Et.styles=R`
		:host(:is(ly-app)) {
			/* local vars */
			--bg: var(--clr-background);
			--clr: var(--clr-text);
			--m: auto;
			--ps: fixed;

			/* theming */
			background-color: var(--bg);
			color: var(--clr);

			/* base styles */
			display: flex;
			height: 100dvh;
			inset: 0;
			isolation: isolate;
			margin: var(--m) !important;
			overflow: clip;
			position: var(--ps) !important;
			width: 100dvw;
			z-index: 1;
		}

		:host(:is(ly-app[tmpl='default'])) {
			flex-direction: column;
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) {
			display: grid;
			grid-auto-rows: max-content;
			grid-template-columns:
				[expand-start] minmax(var(--prefers-containerOutterWidth), 1fr)
				[contain-start] minmax(0, var(--prefers-containerWidth))
				[contain-end] minmax(var(--prefers-containerOutterWidth), 1fr)
				[expand-end];
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: expand;
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
			grid-column: expand;
		}

		:host(:is(ly-app[tmpl='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[tmpl='col'])) {
			flex-direction: column;
		}
	`,Pe([A({type:String,reflect:!0})],Et.prototype,"tmpl",2),Et=Pe([S("ly-app")],Et);var gs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,ft=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?ys(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&gs(e,i,n),n};let N=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this._toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this._toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this._toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this._toggleChecked()}))}render(){return y`
			<ly-flex axis='x' part="row">
				<ly-icon ?solid="${this.checked}"> ${this._handleVariant()} </ly-icon>
				${this.label?y`<label part="label">${this.label}</label>`:_}
			</ly-flex>
			${this.checked?y`<slot></slot>`:_}
		`}_toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}_handleVariant(){switch(this.variant){case"checkbox":return y`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return y`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return y`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return y``}}};N.styles=R`
		:host(:is(ly-check)) {
			/* local vars */
			--gap: var(--scale-5xs);

			/* base styles */
			cursor: pointer;
			display: inline-flex;
			flex-direction: column;
			flex-shrink: 0;
			gap: var(--gap);
			height: max-content;
			overflow: clip;
		}

		:host(:is(ly-check):focus-visible) {
			outline: solid 0.125rem var(--clr-accent);
		}

		:host(:is(ly-check))::part(row) {
			gap: inherit;
		}

		:host(:is(ly-check))::part(label) {
			display: inline-flex;
			flex-shrink: 1;
		}

		:host(:is(ly-check)) > ly-icon {
			cursor: pointer;
		}
	`,N.properties={delegatesFocus:{type:Boolean,reflect:!0}},N.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0},ft([A({type:Boolean,reflect:!0})],N.prototype,"checked",2),ft([A({type:String,reflect:!0})],N.prototype,"group",2),ft([A({type:String,reflect:!0})],N.prototype,"label",2),ft([A({type:"checkbox",reflect:!0})],N.prototype,"variant",2),N=ft([S("ly-check")],N);const vs=["top","right","bottom","left"],ue=["start","end"],fe=vs.reduce(((t,e)=>t.concat(e,e+"-"+ue[0],e+"-"+ue[1])),[]),W=Math.min,C=Math.max,St=Math.round,bt=Math.floor,z=t=>({x:t,y:t}),xs={left:"right",right:"left",bottom:"top",top:"bottom"},ws={start:"end",end:"start"};function me(t,e,i){return C(t,W(e,i))}function mt(t,e){return"function"==typeof t?t(e):t}function J(t){return t.split("-")[0]}function M(t){return t.split("-")[1]}function Re(t){return"x"===t?"y":"x"}function Te(t){return"y"===t?"height":"width"}function gt(t){return["top","bottom"].includes(J(t))?"y":"x"}function Le(t){return Re(gt(t))}function bs(t,e,i){void 0===i&&(i=!1);const s=M(t),r=Le(t),n=Te(r);let o="x"===r?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=ge(o)),[o,ge(o)]}function _s(t){return t.replace(/start|end/g,(t=>ws[t]))}function ge(t){return t.replace(/left|right|bottom|top/g,(t=>xs[t]))}function $s(t){return{top:0,right:0,bottom:0,left:0,...t}}function As(t){return"number"!=typeof t?$s(t):{top:t,right:t,bottom:t,left:t}}function Ot(t){const{x:e,y:i,width:s,height:r}=t;return{width:s,height:r,top:i,left:e,right:e+s,bottom:i+r,x:e,y:i}}function ye(t,e,i){let{reference:s,floating:r}=t;const n=gt(e),o=Le(e),l=Te(o),a=J(e),c="y"===n,d=s.x+s.width/2-r.width/2,h=s.y+s.height/2-r.height/2,p=s[l]/2-r[l]/2;let u;switch(a){case"top":u={x:d,y:s.y-r.height};break;case"bottom":u={x:d,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:h};break;case"left":u={x:s.x-r.width,y:h};break;default:u={x:s.x,y:s.y}}switch(M(e)){case"start":u[o]-=p*(i&&c?-1:1);break;case"end":u[o]+=p*(i&&c?-1:1)}return u}const Es=async(t,e,i)=>{const{placement:s="bottom",strategy:r="absolute",middleware:n=[],platform:o}=i,l=n.filter(Boolean),a=await(null==o.isRTL?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=ye(c,s,a),p=s,u={},f=0;for(let i=0;i<l.length;i++){const{name:n,fn:m}=l[i],{x:y,y:g,data:v,reset:x}=await m({x:d,y:h,initialPlacement:s,placement:p,strategy:r,middlewareData:u,rects:c,platform:o,elements:{reference:t,floating:e}});d=y??d,h=g??h,u={...u,[n]:{...u[n],...v}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await o.getElementRects({reference:t,floating:e,strategy:r}):x.rects),({x:d,y:h}=ye(c,p,a))),i=-1)}return{x:d,y:h,placement:p,strategy:r,middlewareData:u}};async function Dt(t,e){var i;void 0===e&&(e={});const{x:s,y:r,platform:n,rects:o,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=mt(e,t),f=As(u),m=l[p?"floating"===h?"reference":"floating":h],y=Ot(await n.getClippingRect({element:null==(i=await(null==n.isElement?void 0:n.isElement(m)))||i?m:m.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),g="floating"===h?{x:s,y:r,width:o.floating.width,height:o.floating.height}:o.reference,v=await(null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),x=await(null==n.isElement?void 0:n.isElement(v))&&await(null==n.getScale?void 0:n.getScale(v))||{x:1,y:1},b=Ot(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(y.top-b.top+f.top)/x.y,bottom:(b.bottom-y.bottom+f.bottom)/x.y,left:(y.left-b.left+f.left)/x.x,right:(b.right-y.right+f.right)/x.x}}function Ss(t,e,i){return(t?[...i.filter((e=>M(e)===t)),...i.filter((e=>M(e)!==t))]:i.filter((t=>J(t)===t))).filter((i=>!t||(M(i)===t||!!e&&_s(i)!==i)))}const Os=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var i,s,r;const{rects:n,middlewareData:o,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:p=fe,autoAlignment:u=!0,...f}=mt(t,e),m=void 0!==h||p===fe?Ss(h||null,u,p):p,y=await Dt(e,f),g=(null==(i=o.autoPlacement)?void 0:i.index)||0,v=m[g];if(null==v)return{};const x=bs(v,n,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:m[0]}};const b=[y[J(v)],y[x[0]],y[x[1]]],w=[...(null==(s=o.autoPlacement)?void 0:s.overflows)||[],{placement:v,overflows:b}],_=m[g+1];if(_)return{data:{index:g+1,overflows:w},reset:{placement:_}};const $=w.map((t=>{const e=M(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(r=$.filter((t=>t[2].slice(0,M(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||$[0][0];return A!==l?{data:{index:g+1,overflows:w},reset:{placement:A}}:{}}}};async function Cs(t,e){const{placement:i,platform:s,elements:r}=t,n=await(null==s.isRTL?void 0:s.isRTL(r.floating)),o=J(i),l=M(i),a="y"===gt(i),c=["left","top"].includes(o)?-1:1,d=n&&a?-1:1,h=mt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const Ps=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:r,y:n,placement:o,middlewareData:l}=e,a=await Cs(e,t);return o===(null==(i=l.offset)?void 0:i.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:r+a.x,y:n+a.y,data:{...a,placement:o}}}}},Rs=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:r}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=mt(t,e),c={x:i,y:s},d=await Dt(e,a),h=gt(J(r)),p=Re(h);let u=c[p],f=c[h];if(n){const t="y"===p?"bottom":"right";u=me(u+d["y"===p?"top":"left"],u,u-d[t])}if(o){const t="y"===h?"bottom":"right";f=me(f+d["y"===h?"top":"left"],f,f-d[t])}const m=l.fn({...e,[p]:u,[h]:f});return{...m,data:{x:m.x-i,y:m.y-s}}}}},Ts=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:s,platform:r,elements:n}=e,{apply:o=(()=>{}),...l}=mt(t,e),a=await Dt(e,l),c=J(i),d=M(i),h="y"===gt(i),{width:p,height:u}=s.floating;let f,m;"top"===c||"bottom"===c?(f=c,m=d===(await(null==r.isRTL?void 0:r.isRTL(n.floating))?"start":"end")?"left":"right"):(m=c,f="end"===d?"top":"bottom");const y=u-a.top-a.bottom,g=p-a.left-a.right,v=W(u-a[f],y),x=W(p-a[m],g),b=!e.middlewareData.shift;let w=v,_=x;if(h?_=d||b?W(x,g):g:w=d||b?W(v,y):y,b&&!d){const t=C(a.left,0),e=C(a.right,0),i=C(a.top,0),s=C(a.bottom,0);h?_=p-2*(0!==t||0!==e?t+e:C(a.left,a.right)):w=u-2*(0!==i||0!==s?i+s:C(a.top,a.bottom))}await o({...e,availableWidth:_,availableHeight:w});const $=await r.getDimensions(n.floating);return p!==$.width||u!==$.height?{reset:{rects:!0}}:{}}}};function it(t){return ke(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function U(t){var e;return null==(e=(ke(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function ke(t){return t instanceof Node||t instanceof P(t).Node}function k(t){return t instanceof Element||t instanceof P(t).Element}function D(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function ve(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof P(t).ShadowRoot)}function yt(t){const{overflow:e,overflowX:i,overflowY:s,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(r)}function Ls(t){return["table","td","th"].includes(it(t))}function Qt(t){const e=te(),i=T(t);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function ks(t){let e=I(t);for(;D(e)&&!st(e);){if(Qt(e))return e;e=I(e)}return null}function te(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function st(t){return["html","body","#document"].includes(it(t))}function T(t){return P(t).getComputedStyle(t)}function Ht(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if("html"===it(t))return t;const e=t.assignedSlot||t.parentNode||ve(t)&&t.host||U(t);return ve(e)?e.host:e}function De(t){const e=I(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&yt(e)?e:De(e)}function pt(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const r=De(t),n=r===(null==(s=t.ownerDocument)?void 0:s.body),o=P(r);return n?e.concat(o,o.visualViewport||[],yt(r)?r:[],o.frameElement&&i?pt(o.frameElement):[]):e.concat(r,pt(r,[],i))}function He(t){const e=T(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const r=D(t),n=r?t.offsetWidth:i,o=r?t.offsetHeight:s,l=St(i)!==n||St(s)!==o;return l&&(i=n,s=o),{width:i,height:s,$:l}}function ee(t){return k(t)?t:t.contextElement}function Q(t){const e=ee(t);if(!D(e))return z(1);const i=e.getBoundingClientRect(),{width:s,height:r,$:n}=He(e);let o=(n?St(i.width):i.width)/s,l=(n?St(i.height):i.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Ds=z(0);function Me(t){const e=P(t);return te()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Ds}function Hs(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==P(t))&&e}function K(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const r=t.getBoundingClientRect(),n=ee(t);let o=z(1);e&&(s?k(s)&&(o=Q(s)):o=Q(t));const l=Hs(n,i,s)?Me(n):z(0);let a=(r.left+l.x)/o.x,c=(r.top+l.y)/o.y,d=r.width/o.x,h=r.height/o.y;if(n){const t=P(n),e=s&&k(s)?P(s):s;let i=t,r=i.frameElement;for(;r&&s&&e!==i;){const t=Q(r),e=r.getBoundingClientRect(),s=T(r),n=e.left+(r.clientLeft+parseFloat(s.paddingLeft))*t.x,o=e.top+(r.clientTop+parseFloat(s.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=n,c+=o,i=P(r),r=i.frameElement}}return Ot({width:d,height:h,x:a,y:c})}const Ms=[":popover-open",":modal"];function se(t){return Ms.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Ns(t){let{elements:e,rect:i,offsetParent:s,strategy:r}=t;const n="fixed"===r,o=U(s),l=!!e&&se(e.floating);if(s===o||l&&n)return i;let a={scrollLeft:0,scrollTop:0},c=z(1);const d=z(0),h=D(s);if((h||!h&&!n)&&(("body"!==it(s)||yt(o))&&(a=Ht(s)),D(s))){const t=K(s);c=Q(s),d.x=t.x+s.clientLeft,d.y=t.y+s.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+d.x,y:i.y*c.y-a.scrollTop*c.y+d.y}}function Us(t){return Array.from(t.getClientRects())}function Ne(t){return K(U(t)).left+Ht(t).scrollLeft}function js(t){const e=U(t),i=Ht(t),s=t.ownerDocument.body,r=C(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),n=C(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+Ne(t);const l=-i.scrollTop;return"rtl"===T(s).direction&&(o+=C(e.clientWidth,s.clientWidth)-r),{width:r,height:n,x:o,y:l}}function Bs(t,e){const i=P(t),s=U(t),r=i.visualViewport;let n=s.clientWidth,o=s.clientHeight,l=0,a=0;if(r){n=r.width,o=r.height;const t=te();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:n,height:o,x:l,y:a}}function Ws(t,e){const i=K(t,!0,"fixed"===e),s=i.top+t.clientTop,r=i.left+t.clientLeft,n=D(t)?Q(t):z(1);return{width:t.clientWidth*n.x,height:t.clientHeight*n.y,x:r*n.x,y:s*n.y}}function xe(t,e,i){let s;if("viewport"===e)s=Bs(t,i);else if("document"===e)s=js(U(t));else if(k(e))s=Ws(e,i);else{const i=Me(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return Ot(s)}function Ue(t,e){const i=I(t);return!(i===e||!k(i)||st(i))&&("fixed"===T(i).position||Ue(i,e))}function Fs(t,e){const i=e.get(t);if(i)return i;let s=pt(t,[],!1).filter((t=>k(t)&&"body"!==it(t))),r=null;const n="fixed"===T(t).position;let o=n?I(t):t;for(;k(o)&&!st(o);){const e=T(o),i=Qt(o);!i&&"fixed"===e.position&&(r=null),(n?!i&&!r:!i&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||yt(o)&&!i&&Ue(t,o))?s=s.filter((t=>t!==o)):r=e,o=I(o)}return e.set(t,s),s}function zs(t){let{element:e,boundary:i,rootBoundary:s,strategy:r}=t;const n=[..."clippingAncestors"===i?se(e)?[]:Fs(e,this._c):[].concat(i),s],o=n[0],l=n.reduce(((t,i)=>{const s=xe(e,i,r);return t.top=C(s.top,t.top),t.right=W(s.right,t.right),t.bottom=W(s.bottom,t.bottom),t.left=C(s.left,t.left),t}),xe(e,o,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Is(t){const{width:e,height:i}=He(t);return{width:e,height:i}}function Vs(t,e,i){const s=D(e),r=U(e),n="fixed"===i,o=K(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=z(0);if(s||!s&&!n)if(("body"!==it(e)||yt(r))&&(l=Ht(e)),s){const t=K(e,!0,n,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=Ne(r));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Ft(t){return"static"===T(t).position}function we(t,e){return D(t)&&"fixed"!==T(t).position?e?e(t):t.offsetParent:null}function je(t,e){const i=P(t);if(se(t))return i;if(!D(t)){let e=I(t);for(;e&&!st(e);){if(k(e)&&!Ft(e))return e;e=I(e)}return i}let s=we(t,e);for(;s&&Ls(s)&&Ft(s);)s=we(s,e);return s&&st(s)&&Ft(s)&&!Qt(s)?i:s||ks(t)||i}const qs=async function(t){const e=this.getOffsetParent||je,i=this.getDimensions,s=await i(t.floating);return{reference:Vs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Xs(t){return"rtl"===T(t).direction}const Ys={convertOffsetParentRelativeRectToViewportRelativeRect:Ns,getDocumentElement:U,getClippingRect:zs,getOffsetParent:je,getElementRects:qs,getClientRects:Us,getDimensions:Is,getScale:Q,isElement:k,isRTL:Xs};function Gs(t,e){let i,s=null;const r=U(t);function n(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function o(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),n();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-bt(d)+"px "+-bt(r.clientWidth-(c+h))+"px "+-bt(r.clientHeight-(d+p))+"px "+-bt(c)+"px",threshold:C(0,W(1,a))||1};let f=!0;function m(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return o();e?o(!1,e):i=setTimeout((()=>{o(!1,1e-7)}),1e3)}f=!1}try{s=new IntersectionObserver(m,{...u,root:r.ownerDocument})}catch{s=new IntersectionObserver(m,u)}s.observe(t)}(!0),n}function Ks(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:o="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=s,c=ee(t),d=r||n?[...c?pt(c):[],...pt(e)]:[];d.forEach((t=>{r&&t.addEventListener("scroll",i,{passive:!0}),n&&t.addEventListener("resize",i)}));const h=c&&l?Gs(c,i):null;let p=-1,u=null;o&&(u=new ResizeObserver((t=>{let[s]=t;s&&s.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),i()})),c&&!a&&u.observe(c),u.observe(e));let f,m=a?K(t):null;return a&&function e(){const s=K(t);m&&(s.x!==m.x||s.y!==m.y||s.width!==m.width||s.height!==m.height)&&i(),m=s,f=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach((t=>{r&&t.removeEventListener("scroll",i),n&&t.removeEventListener("resize",i)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const Js=Dt,Zs=Ps,Qs=Os,ti=Rs,ei=Ts,si=(t,e,i)=>{const s=new Map,r={platform:Ys,...i},n={...r.platform,_c:s};return Es(t,e,{...r,platform:n})};var ii=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,Mt=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?ni(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&ii(e,i,n),n};let V=class extends ${constructor(){super(...arguments),this.open=!1}firstUpdated(){this.addEventListener("focus",(()=>this.focus())),document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",(()=>this.focus())),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return y`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${this.open?y`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:_}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}clickOutsideHandler(t){var e;const i=t.composedPath()[0],s=!(null!=(e=this.shadowRoot)&&e.contains(i)||this.contains(i));this.open&&s&&(this.open=!1)}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=Ks(this._dropsummary[0],this._dropmenu,(async()=>{const{x:t,y:e}=await si(this._dropsummary[0],this._dropmenu,{middleware:[Qs({autoAlignment:!0,alignment:"bottom",allowedPlacements:["top","bottom"],crossAxis:!0,padding:3}),Zs(3),ti({crossAxis:!0,mainAxis:!0,padding:3}),ei({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await Js(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})}],placement:"bottom",strategy:"fixed"});Object.assign(this._dropmenu.style,{inset:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}};V.styles=R`
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
			outline: solid 0.125rem
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					gray 16%
				);
			outline-offset: -0.125rem;
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			/*width: fit-content;*/
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
			/*clip-path: inset(0% round var(--radius));*/
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			/*mask: linear-gradient(
				90deg,
				transparent,
				black var(--percent),
				black calc(100% - var(--percent)),
				transparent
			);*/
			/*mask: radial-gradient(circle at center, transparent, var(--bg) var(--percent));*/
			overflow-x: clip;
			overflow-y: auto;
			transition: inset var(--animDefaults), margin var(--animDefaults),
				transform var(--animDefaults), translate var(--animDefaults);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`,V.properties={delegatesFocus:{type:Boolean,reflect:!0}},V.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0},Mt([A({type:Boolean,reflect:!0})],V.prototype,"open",2),Mt([us({slot:"summary",flatten:!0})],V.prototype,"_dropsummary",2),Mt([ps('div[part="dropmenu"]')],V.prototype,"_dropmenu",2),V=Mt([S("ly-dropdown")],V);var oi=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,q=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?ri(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&oi(e,i,n),n};let H=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.ref="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let i=null==e?void 0:e.assignedElements();i&&i.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.ref&&t.setAttribute("id",this.ref),this.name&&t.setAttribute("name",this.name),this.required&&t.setAttribute("required",`${this.required}`),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return y`
			${this.label?y`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:_}

			<slot></slot>

			${this.caption?y`
						<ly-flex axis='x' part="caption">
							${this.setStatusIcon()}
							<small part="caption-text" html>${this.caption}</small>
						</ly-flex>
				  `:_}
		`}setRequiredIcon(){return this.required?y`<ly-icon part="required-icon">asterisk</ly-icon>`:y``}setStatusIcon(){switch(this.status){case"debug":return y`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return y`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return y`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return y`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return y`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return y``}}};H.styles=R`
		:host(:is(ly-field)) {
			/* local vars */
			--gap: var(--scale-3xs);

			/* base styles */
			display: flex;
			flex-direction: column;
			gap: var(--gap);
			height: max-content;
		}

		:host(:is(ly-field)) ::slotted(:where(input, select, textarea)) {
			width: 100% !important;
		}

		:host(:is(ly-field)[status='debug'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-debug) !important;
		}

		:host(:is(ly-field)[status='error'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-error) !important;
		}

		:host(:is(ly-field)[status='info'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-info) !important;
		}

		:host(:is(ly-field)[status='success'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-success) !important;
		}

		:host(:is(ly-field)[status='warning'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-warning) !important;
		}

		:host(:is(ly-field))::part(label) {
			align-items: center;
			display: flex;
			flex-direction: row;
			font-size: var(--scale-md);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(required-icon) {
			color: var(--clr-error);
			font-size: var(--scale-xs);
			margin: auto 0;
		}

		:host(:is(ly-field))::part(caption) {
			align-items: center;
			color: var(--clr-subtext);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(caption-text) {
			font-size: clamp(72%, 0.5vw, 88%);
			font-weight: 500;
			margin: auto 0;
		}

		:host(:is(ly-field)[status='debug'])::part(caption) {
			color: var(--clr-debug);
		}

		:host(:is(ly-field)[status='error'])::part(caption) {
			color: var(--clr-error);
		}

		:host(:is(ly-field)[status='info'])::part(caption) {
			color: var(--clr-info);
		}

		:host(:is(ly-field)[status='success'])::part(caption) {
			color: var(--clr-success);
		}

		:host(:is(ly-field)[status='warning'])::part(caption) {
			color: var(--clr-warning);
		}
	`,q([A({type:String})],H.prototype,"label",2),q([A({type:String})],H.prototype,"caption",2),q([A({type:String})],H.prototype,"name",2),q([A({type:String})],H.prototype,"ref",2),q([A({type:Boolean,reflect:!0})],H.prototype,"required",2),q([A({type:"debug"})],H.prototype,"status",2),q([A({type:String})],H.prototype,"type",2),H=q([S("ly-field")],H);var li=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,ci=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?ai(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&li(e,i,n),n};let zt=class extends ${render(){return y` <slot></slot> `}};zt.styles=R`
		:host(:is(ly-fragment)) {
			display: contents;
		}
	`,zt=ci([S("ly-fragment")],zt);var di=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,Be=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?hi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&di(e,i,n),n};let Ct=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return y` <slot></slot> `}};Ct.styles=R`
		:host(:is(ly-icon)) {
			/* base styles */
			aspect-ratio: 1/1;
			display: grid;
			flex-grow: 0;
			flex-shrink: 0;
			font-family: var(--prefers-iconFontFamily);
			font-feature-settings: 'liga';
			font-size: var(--prefers-iconScale);
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
			max-height: var(--prefers-iconScale);
			overflow: clip;
			place-content: center;
			shape-margin: var(--scale-5xs);
			shape-outside: circle(50%);
			user-select: none;
			max-width: var(--prefers-iconScale);
		}

		:host(:is(ly-icon[solid])) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	`,Be([A({type:Boolean,reflect:!0})],Ct.prototype,"solid",2),Ct=Be([S("ly-icon")],Ct);var pi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,We=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?ui(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&pi(e,i,n),n};let Pt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return y` <slot></slot> `}};Pt.styles=R`
		:host(:is(ly-layer)) {
			/* local vars */
			--bg: none;
			--clr: var(--clr-text);
			--m: auto;
			--ps: fixed;

			/* theming */
			background-color: var(--bg);
			color: var(--clr);

			/* base styles */
			display: flex;
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
			flex-direction: column;
			z-index: 2;
		}

		:host(:is(ly-layer)[has-backdrop]) {
			--bg: color-mix(
				in var(--prefers-colorSpace, srgb),
				var(--clr-background),
				transparent 50%
			);
			backdrop-filter: blur(var(--scale-3xs));
			visibility: visible;
		}
	`,We([A({type:"over",reflect:!0})],Pt.prototype,"stacked",2),Pt=We([S("ly-layer")],Pt);var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,vt=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?mi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&fi(e,i,n),n};let Rt=class extends ${constructor(){super(...arguments),this.axis="x"}render(){return y` <slot></slot> `}};Rt.styles=R`
		:host(:is(ly-flex)) {
			/* base styles */
			display: flex;
			height: max-content;
		}

		:host(:is(ly-flex)[axis='y']) {
			flex-direction: column;
		}

		:host(:is(ly-flex)[axis='x']) {
			flex-direction: row;
		}
	`,vt([A({type:"col",reflect:!0})],Rt.prototype,"axis",2),Rt=vt([S("ly-flex")],Rt);let Tt=class extends ${constructor(){super(...arguments),this.tmpl=""}render(){return y` <slot></slot> `}};Tt.styles=R`
		:host(:is(ly-grid)) {
			/* local vars */
			--tmpl: 1;
			--gap: 0rem;
			--maxWidth: 1fr;
			--minWidth: clamp(12rem, 16vmin, 24rem);
			--repeat: auto-fill;

			/* base styles */
			display: grid;
			gap: var(--gap);
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--tmpl) - var(--gap))),
					var(--maxWidth)
				)
			);
			height: max-content;
		}

		:host(:is(ly-grid[tmpl='2'])) {
			--tmpl: 2;
		}

		:host(:is(ly-grid[tmpl='3'])) {
			--tmpl: 3;
		}

		:host(:is(ly-grid[tmpl='4'])) {
			--tmpl: 4;
		}

		:host(:is(ly-grid[tmpl='5'])) {
			--tmpl: 5;
		}

		:host(:is(ly-grid[tmpl='6'])) {
			--tmpl: 6;
		}

		:host(:is(ly-grid[tmpl='7'])) {
			--tmpl: 7;
		}

		:host(:is(ly-grid[tmpl='8'])) {
			--tmpl: 8;
		}

		:host(:is(ly-grid[tmpl='9'])) {
			--tmpl: 9;
		}

		:host(:is(ly-grid[tmpl='10'])) {
			--tmpl: 10;
		}

		:host(:is(ly-grid[tmpl='11'])) {
			--tmpl: 11;
		}

		:host(:is(ly-grid[tmpl='12'])) {
			--tmpl: 12;
		}

		:host(:is(ly-grid[tmpl='container'])) {
			display: grid;
			grid-auto-rows: max-content;
			grid-template-columns:
				[expand-start] minmax(var(--prefers-containerOutterWidth), 1fr)
				[contain-start] minmax(0, var(--prefers-containerWidth))
				[contain-end] minmax(var(--prefers-containerOutterWidth), 1fr)
				[expand-end];
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: expand;
		}

		:host(:is(ly-grid[tmpl='container']))
			::slotted([tmpl-expand]:not([tmpl-expand='uncontained'])) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted([tmpl-subgrid]) {
			grid-auto-rows: inherit;
			grid-template-columns: subgrid;
			grid-column: expand;
		}

		:host(:is(ly-grid[tmpl='row'])) {
			grid-auto-flow: column;
			grid-auto-columns: minmax(0, 1fr);
		}

		:host(:is(ly-grid[tmpl='col'])) {
			grid-auto-flow: row;
			grid-auto-rows: minmax(0, 1fr);
		}
	`,vt([A({type:String,reflect:!0})],Tt.prototype,"tmpl",2),Tt=vt([S("ly-grid")],Tt);let It=class extends ${render(){return y` <slot></slot> `}};It.styles=R`
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	`,It=vt([S("ly-group")],It);var gi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,xt=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?yi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&gi(e,i,n),n};const wt=R`
	:host(:is(ly-list)) {
		/* local vars */
		--bg: var(--clr-primary);
		--clr: var(--clr-text);
		--tmpl: 1;
		--gap: calc(var(--scale-5xs) * 0.1625);
		--radius: var(--scale-3xs);

		/* theming */
		background-color: var(--bg);
		color: var(--clr);

		/* base styles */
		border-radius: var(--radius);
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		height: max-content;
		gap: var(--gap);
		isolation: isolate;
		overflow: auto;
		outline: revert !important;
		outline-color: var(--bg) !important;
		outline-style: solid !important;
	}

	:host(:is(ly-list-header, ly-list-row, ly-list-footer)) {
		/* base styles */
		display: grid;
		flex-shrink: 0;
		gap: var(--gap);
		grid-template-columns: repeat(
			var(--cols),
			minmax(max(10rem, calc(100% / var(--cols) - 0.125rem)), 1fr)
		);
	}

	:host(:is(ly-list-cell)) {
		/* base styles */
		background-color: color-mix(
			in var(--prefers-colorSpace, srgb),
			var(--bg),
			black 50%
		);
		display: flex;
		flex-direction: column;
		overflow: clip;
		padding: var(--scale-sm) !important;
		place-content: center;
		z-index: 1;
	}
`;let Vt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return y` <slot></slot> `}};Vt.styles=wt,Vt=xt([S("ly-list")],Vt);let qt=class extends ${render(){return y` <slot></slot> `}};qt.styles=wt,qt=xt([S("ly-list-header")],qt);let Xt=class extends ${render(){return y` <slot></slot> `}};Xt.styles=wt,Xt=xt([S("ly-list-row")],Xt);let Yt=class extends ${render(){return y` <slot></slot> `}};Yt.styles=wt,Yt=xt([S("ly-list-footer")],Yt);let Gt=class extends ${render(){return y` <slot></slot> `}};Gt.styles=wt,Gt=xt([S("ly-list-cell")],Gt);var vi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Fe=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?xi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&vi(e,i,n),n};let Lt=class extends ${constructor(){super(...arguments),this.axis="x"}render(){return y` <slot></slot> `}};Lt.styles=R`
		:host(:is(ly-slider)) {
			/* local vars */
			--bg: none;
			--display: grid;
			--gap: var(--scale-2xl);
			--padding: 0;

			/* base styles */
			background-color: var(--bg);
			display: grid;
			gap: var(--gap);
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
	`,Fe([A({type:"col",reflect:!0})],Lt.prototype,"axis",2),Lt=Fe([S("ly-slider")],Lt);export{Et as App,N as Check,V as Dropdown,H as Field,Rt as Flex,zt as Fragment,Tt as Grid,It as Group,Ct as Icon,Pt as Layer,Vt as List,Gt as ListCell,Yt as ListFooter,qt as ListHeader,Xt as ListRow,Lt as Slider};