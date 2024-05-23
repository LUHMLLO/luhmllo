/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=globalThis,Qt=bt.ShadowRoot&&(void 0===bt.ShadyCSS||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ue=new WeakMap;let Se=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=ue.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ue.set(e,t))}return t}toString(){return this.cssText}};const Ke=t=>new Se("string"==typeof t?t:t+"",void 0,te),S=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new Se(i,t,te)},Je=(t,e)=>{if(Qt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=bt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},pe=Qt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ke(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ze,defineProperty:Qe,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ss,getPrototypeOf:is}=Object,H=globalThis,fe=H.trustedTypes,ns=fe?fe.emptyScript:"",jt=H.reactiveElementPolyfillSupport,lt=(t,e)=>t,wt={toAttribute(t,e){switch(e){case Boolean:t=t?ns:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},ee=(t,e)=>!Ze(t,e),me={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=me){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Qe(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=ts(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){const r=null==s?void 0:s.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??me}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=is(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,e=[...es(t),...ss(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(pe(t))}else void 0!==t&&e.push(pe(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Je(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null==(i=s.converter)?void 0:i.toAttribute)?s.converter:wt).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:wt;this._$Em=n,this[n]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ee)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[lt("elementProperties")]=new Map,K[lt("finalized")]=new Map,null==jt||jt({ReactiveElement:K}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=globalThis,$t=ct.trustedTypes,ye=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pe="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+D,os=`<${Re}>`,I=document,at=()=>I.createComment(""),ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ke=Array.isArray,rs=t=>ke(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Wt="[ \t\n\f\r]",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,ve=/>/g,B=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,be=/"/g,Te=/^(?:script|style|textarea|title)$/i,ls=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),m=ls(1),Z=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),we=new WeakMap,z=I.createTreeWalker(I,129);function Le(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ye?ye.createHTML(e):e}const cs=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=rt;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,a=o.exec(i),null!==a);)d=o.lastIndex,o===rt?"!--"===a[1]?o=ge:void 0!==a[1]?o=ve:void 0!==a[2]?(Te.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=B):void 0!==a[3]&&(o=B):o===B?">"===a[0]?(o=n??rt,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?B:'"'===a[3]?be:xe):o===be||o===xe?o=B:o===ge||o===ve?o=rt:(o=B,n=void 0);const h=o===B&&t[e+1].startsWith("/>")?" ":"";r+=o===rt?i+os:c>=0?(s.push(l),i.slice(0,c)+Pe+i.slice(c)+D+h):i+D+(-2===c?e:h)}return[Le(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class dt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,c]=cs(t,e);if(this.el=dt.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=z.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(Pe)){const e=c[r++],i=s.getAttribute(t).split(D),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?hs:"?"===o[1]?ds:"@"===o[1]?us:Tt}),s.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:n}),s.removeAttribute(t));if(Te.test(s.tagName)){const t=s.textContent.split(D),e=t.length-1;if(e>0){s.textContent=$t?$t.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],at()),z.nextNode(),l.push({type:2,index:++n});s.append(t[e],at())}}}else if(8===s.nodeType)if(s.data===Re)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(D,t+1));)l.push({type:7,index:n}),t+=D.length-1}n++}}static createElement(t,e){const i=I.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){var n,r;if(e===Z)return e;let o=void 0!==s?null==(n=i._$Co)?void 0:n[s]:i._$Cl;const l=ht(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(r=null==o?void 0:o._$AO)||r.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class as{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??I).importNode(e,!0);z.currentNode=s;let n=z.nextNode(),r=0,o=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new pt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new ps(n,this,t)),this._$AV.push(e),l=i[++o]}r!==(null==l?void 0:l.index)&&(n=z.nextNode(),r++)}return z.currentNode=I,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class pt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),ht(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):rs(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==b&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=dt.createElement(Le(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new as(n,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=we.get(t.strings);return void 0===e&&we.set(t.strings,e=new dt(t)),e}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new pt(this.S(at()),this.S(at()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Q(this,t,e,0),r=!ht(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=Q(this,s[i+o],e,o),l===Z&&(l=this._$AH[o]),r||(r=!ht(l)||l!==this._$AH[o]),l===b?t=b:t!==b&&(t+=(l??"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hs extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class ds extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class us extends Tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??b)===Z)return;const i=this._$AH,s=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==b&&(i===b||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ps{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const Bt=ct.litHtmlPolyfillSupport;null==Bt||Bt(dt,pt),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.1.3");const fs=(t,e,i)=>{const s=(null==i?void 0:i.renderBefore)??e;let n=s._$litPart$;if(void 0===n){const t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=n=new pt(e.insertBefore(at(),t),t,void 0,i??{})}return n._$AI(t),n};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Z}}var Oe;$._$litElement$=!0,$.finalized=!0,null==(Oe=globalThis.litElementHydrateSupport)||Oe.call(globalThis,{LitElement:$});const zt=globalThis.litElementPolyfillSupport;null==zt||zt({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ms={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee},ys=(t=ms,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function E(t){return(e,i)=>"object"==typeof i?ys(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function gs(t,e){return(e,i,s)=>De(e,i,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vs(t){return(e,i)=>{const{slot:s}=t??{},n="slot"+(s?`[name=${s}]`:":not([name])");return De(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(n);return(null==i?void 0:i.assignedNodes(t))??[]}})}}const xs=S`
	@layer web-components {
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

		:host(:is(ly-app[layout='default'])) {
			flex-direction: column;
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[layout='container'])) {
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

		:host(:is(ly-app[layout='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-app[layout='container'])) ::slotted([ignore-container]) {
			grid-column: expand;
		}

		:host(:is(ly-app[layout='container'])) ::slotted([contain-children]) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-app[layout='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[layout='col'])) {
			flex-direction: column;
		}
	}
`;var bs=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,He=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ws(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&bs(e,i,r),r};let _t=class extends ${constructor(){super(...arguments),this.layout="default"}render(){return m` <slot></slot> `}};_t.styles=xs,He([E({type:String,reflect:!0})],_t.prototype,"layout",2),_t=He([A("ly-app")],_t);const $s=S`
	@layer web-components {
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
	}
`;var _s=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Me=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?As(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&_s(e,i,r),r};let At=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return m` <slot></slot> `}};At.styles=$s,Me([E({type:Boolean,reflect:!0})],At.prototype,"solid",2),At=Me([A("ly-icon")],At);const Es=S`
	@layer web-components {
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
	}
`;var Cs=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,ft=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Os(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Cs(e,i,r),r};let M=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return m`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?m`<label part="label">${this.label}</label>`:b}
			</ly-flex>
			${this.checked?m`<slot></slot>`:b}
		`}handleVariant(){switch(this.variant){case"checkbox":return m`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return m`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return m`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return m``}}};M.properties={delegatesFocus:{type:Boolean,reflect:!0}},M.styles=Es,ft([E({type:Boolean,reflect:!0})],M.prototype,"checked",2),ft([E({type:String,reflect:!0})],M.prototype,"group",2),ft([E({type:String,reflect:!0})],M.prototype,"label",2),ft([E({type:"checkbox",reflect:!0})],M.prototype,"variant",2),M=ft([A("ly-check")],M);const Et=Math.min,F=Math.max,Ct=Math.round,xt=Math.floor,N=t=>({x:t,y:t}),Ss={left:"right",right:"left",bottom:"top",top:"bottom"},Ps={start:"end",end:"start"};function $e(t,e,i){return F(t,Et(e,i))}function Lt(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function Dt(t){return t.split("-")[1]}function Ne(t){return"x"===t?"y":"x"}function Ue(t){return"y"===t?"height":"width"}function Ht(t){return["top","bottom"].includes(V(t))?"y":"x"}function je(t){return Ne(Ht(t))}function Rs(t,e,i){void 0===i&&(i=!1);const s=Dt(t),n=je(t),r=Ue(n);let o="x"===n?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=Ot(o)),[o,Ot(o)]}function ks(t){const e=Ot(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,(t=>Ps[t]))}function Ts(t,e,i){const s=["left","right"],n=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return i?e?n:s:e?s:n;case"left":case"right":return e?r:o;default:return[]}}function Ls(t,e,i,s){const n=Dt(t);let r=Ts(V(t),"start"===i,s);return n&&(r=r.map((t=>t+"-"+n)),e&&(r=r.concat(r.map(It)))),r}function Ot(t){return t.replace(/left|right|bottom|top/g,(t=>Ss[t]))}function Ds(t){return{top:0,right:0,bottom:0,left:0,...t}}function Hs(t){return"number"!=typeof t?Ds(t):{top:t,right:t,bottom:t,left:t}}function St(t){const{x:e,y:i,width:s,height:n}=t;return{width:s,height:n,top:i,left:e,right:e+s,bottom:i+n,x:e,y:i}}function _e(t,e,i){let{reference:s,floating:n}=t;const r=Ht(e),o=je(e),l=Ue(o),a=V(e),c="y"===r,d=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,p=s[l]/2-n[l]/2;let u;switch(a){case"top":u={x:d,y:s.y-n.height};break;case"bottom":u={x:d,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:h};break;case"left":u={x:s.x-n.width,y:h};break;default:u={x:s.x,y:s.y}}switch(Dt(e)){case"start":u[o]-=p*(i&&c?-1:1);break;case"end":u[o]+=p*(i&&c?-1:1)}return u}const Ms=async(t,e,i)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=i,l=r.filter(Boolean),a=await(null==o.isRTL?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:n}),{x:d,y:h}=_e(c,s,a),p=s,u={},f=0;for(let i=0;i<l.length;i++){const{name:r,fn:y}=l[i],{x:m,y:g,data:v,reset:b}=await y({x:d,y:h,initialPlacement:s,placement:p,strategy:n,middlewareData:u,rects:c,platform:o,elements:{reference:t,floating:e}});d=m??d,h=g??h,u={...u,[r]:{...u[r],...v}},b&&f<=50&&(f++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await o.getElementRects({reference:t,floating:e,strategy:n}):b.rects),({x:d,y:h}=_e(c,p,a))),i=-1)}return{x:d,y:h,placement:p,strategy:n,middlewareData:u}};async function se(t,e){var i;void 0===e&&(e={});const{x:s,y:n,platform:r,rects:o,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=Lt(e,t),f=Hs(u),y=l[p?"floating"===h?"reference":"floating":h],m=St(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(y)))||i?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),g="floating"===h?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),b=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},x=St(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(m.top-x.top+f.top)/b.y,bottom:(x.bottom-m.bottom+f.bottom)/b.y,left:(m.left-x.left+f.left)/b.x,right:(x.right-m.right+f.right)/b.x}}const Ns=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...m}=Lt(t,e);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const g=V(n),v=V(l)===l,b=await(null==a.isRTL?void 0:a.isRTL(c.floating)),x=p||(v||!y?[Ot(l)]:ks(l));!p&&"none"!==f&&x.push(...Ls(l,y,f,b));const w=[l,...x],$=await se(e,m),_=[];let A=(null==(s=r.flip)?void 0:s.overflows)||[];if(d&&_.push($[g]),h){const t=Rs(n,o,b);_.push($[t[0]],$[t[1]])}if(A=[...A,{placement:n,overflows:_}],!_.every((t=>t<=0))){var E,k;const t=((null==(E=r.flip)?void 0:E.index)||0)+1,e=w[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let i=null==(k=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:k.placement;if(!i)switch(u){case"bestFit":{var S;const t=null==(S=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:S[0];t&&(i=t);break}case"initialPlacement":i=l}if(n!==i)return{reset:{placement:i}}}return{}}}};async function Us(t,e){const{placement:i,platform:s,elements:n}=t,r=await(null==s.isRTL?void 0:s.isRTL(n.floating)),o=V(i),l=Dt(i),a="y"===Ht(i),c=["left","top"].includes(o)?-1:1,d=r&&a?-1:1,h=Lt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const js=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:n,y:r,placement:o,middlewareData:l}=e,a=await Us(e,t);return o===(null==(i=l.offset)?void 0:i.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:n+a.x,y:r+a.y,data:{...a,placement:o}}}}},Ws=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:n}=e,{mainAxis:r=!0,crossAxis:o=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=Lt(t,e),c={x:i,y:s},d=await se(e,a),h=Ht(V(n)),p=Ne(h);let u=c[p],f=c[h];if(r){const t="y"===p?"bottom":"right";u=$e(u+d["y"===p?"top":"left"],u,u-d[t])}if(o){const t="y"===h?"bottom":"right";f=$e(f+d["y"===h?"top":"left"],f,f-d[t])}const y=l.fn({...e,[p]:u,[h]:f});return{...y,data:{x:y.x-i,y:y.y-s}}}}};function st(t){return We(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(We(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function We(t){return t instanceof Node||t instanceof O(t).Node}function R(t){return t instanceof Element||t instanceof O(t).Element}function k(t){return t instanceof HTMLElement||t instanceof O(t).HTMLElement}function Ae(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof O(t).ShadowRoot)}function mt(t){const{overflow:e,overflowX:i,overflowY:s,display:n}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(n)}function Bs(t){return["table","td","th"].includes(st(t))}function ie(t){const e=ne(),i=P(t);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function zs(t){let e=U(t);for(;k(e)&&!tt(e);){if(ie(e))return e;e=U(e)}return null}function ne(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(st(t))}function P(t){return O(t).getComputedStyle(t)}function Mt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===st(t))return t;const e=t.assignedSlot||t.parentNode||Ae(t)&&t.host||L(t);return Ae(e)?e.host:e}function Be(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&mt(e)?e:Be(e)}function ut(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const n=Be(t),r=n===(null==(s=t.ownerDocument)?void 0:s.body),o=O(n);return r?e.concat(o,o.visualViewport||[],mt(n)?n:[],o.frameElement&&i?ut(o.frameElement):[]):e.concat(n,ut(n,[],i))}function ze(t){const e=P(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const n=k(t),r=n?t.offsetWidth:i,o=n?t.offsetHeight:s,l=Ct(i)!==r||Ct(s)!==o;return l&&(i=r,s=o),{width:i,height:s,$:l}}function oe(t){return R(t)?t:t.contextElement}function J(t){const e=oe(t);if(!k(e))return N(1);const i=e.getBoundingClientRect(),{width:s,height:n,$:r}=ze(e);let o=(r?Ct(i.width):i.width)/s,l=(r?Ct(i.height):i.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Fs=N(0);function Fe(t){const e=O(t);return ne()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Fs}function Is(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==O(t))&&e}function q(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const n=t.getBoundingClientRect(),r=oe(t);let o=N(1);e&&(s?R(s)&&(o=J(s)):o=J(t));const l=Is(r,i,s)?Fe(r):N(0);let a=(n.left+l.x)/o.x,c=(n.top+l.y)/o.y,d=n.width/o.x,h=n.height/o.y;if(r){const t=O(r),e=s&&R(s)?O(s):s;let i=t,n=i.frameElement;for(;n&&s&&e!==i;){const t=J(n),e=n.getBoundingClientRect(),s=P(n),r=e.left+(n.clientLeft+parseFloat(s.paddingLeft))*t.x,o=e.top+(n.clientTop+parseFloat(s.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=r,c+=o,i=O(n),n=i.frameElement}}return St({width:d,height:h,x:a,y:c})}const Vs=[":popover-open",":modal"];function re(t){return Vs.some((e=>{try{return t.matches(e)}catch{return!1}}))}function qs(t){let{elements:e,rect:i,offsetParent:s,strategy:n}=t;const r="fixed"===n,o=L(s),l=!!e&&re(e.floating);if(s===o||l&&r)return i;let a={scrollLeft:0,scrollTop:0},c=N(1);const d=N(0),h=k(s);if((h||!h&&!r)&&(("body"!==st(s)||mt(o))&&(a=Mt(s)),k(s))){const t=q(s);c=J(s),d.x=t.x+s.clientLeft,d.y=t.y+s.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+d.x,y:i.y*c.y-a.scrollTop*c.y+d.y}}function Gs(t){return Array.from(t.getClientRects())}function Ie(t){return q(L(t)).left+Mt(t).scrollLeft}function Xs(t){const e=L(t),i=Mt(t),s=t.ownerDocument.body,n=F(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=F(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+Ie(t);const l=-i.scrollTop;return"rtl"===P(s).direction&&(o+=F(e.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:l}}function Ys(t,e){const i=O(t),s=L(t),n=i.visualViewport;let r=s.clientWidth,o=s.clientHeight,l=0,a=0;if(n){r=n.width,o=n.height;const t=ne();(!t||t&&"fixed"===e)&&(l=n.offsetLeft,a=n.offsetTop)}return{width:r,height:o,x:l,y:a}}function Ks(t,e){const i=q(t,!0,"fixed"===e),s=i.top+t.clientTop,n=i.left+t.clientLeft,r=k(t)?J(t):N(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:n*r.x,y:s*r.y}}function Ee(t,e,i){let s;if("viewport"===e)s=Ys(t,i);else if("document"===e)s=Xs(L(t));else if(R(e))s=Ks(e,i);else{const i=Fe(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return St(s)}function Ve(t,e){const i=U(t);return!(i===e||!R(i)||tt(i))&&("fixed"===P(i).position||Ve(i,e))}function Js(t,e){const i=e.get(t);if(i)return i;let s=ut(t,[],!1).filter((t=>R(t)&&"body"!==st(t))),n=null;const r="fixed"===P(t).position;let o=r?U(t):t;for(;R(o)&&!tt(o);){const e=P(o),i=ie(o);!i&&"fixed"===e.position&&(n=null),(r?!i&&!n:!i&&"static"===e.position&&n&&["absolute","fixed"].includes(n.position)||mt(o)&&!i&&Ve(t,o))?s=s.filter((t=>t!==o)):n=e,o=U(o)}return e.set(t,s),s}function Zs(t){let{element:e,boundary:i,rootBoundary:s,strategy:n}=t;const r=[..."clippingAncestors"===i?re(e)?[]:Js(e,this._c):[].concat(i),s],o=r[0],l=r.reduce(((t,i)=>{const s=Ee(e,i,n);return t.top=F(s.top,t.top),t.right=Et(s.right,t.right),t.bottom=Et(s.bottom,t.bottom),t.left=F(s.left,t.left),t}),Ee(e,o,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Qs(t){const{width:e,height:i}=ze(t);return{width:e,height:i}}function ti(t,e,i){const s=k(e),n=L(e),r="fixed"===i,o=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=N(0);if(s||!s&&!r)if(("body"!==st(e)||mt(n))&&(l=Mt(e)),s){const t=q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else n&&(a.x=Ie(n));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Ft(t){return"static"===P(t).position}function Ce(t,e){return k(t)&&"fixed"!==P(t).position?e?e(t):t.offsetParent:null}function qe(t,e){const i=O(t);if(re(t))return i;if(!k(t)){let e=U(t);for(;e&&!tt(e);){if(R(e)&&!Ft(e))return e;e=U(e)}return i}let s=Ce(t,e);for(;s&&Bs(s)&&Ft(s);)s=Ce(s,e);return s&&tt(s)&&Ft(s)&&!ie(s)?i:s||zs(t)||i}const ei=async function(t){const e=this.getOffsetParent||qe,i=this.getDimensions,s=await i(t.floating);return{reference:ti(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function si(t){return"rtl"===P(t).direction}const ii={convertOffsetParentRelativeRectToViewportRelativeRect:qs,getDocumentElement:L,getClippingRect:Zs,getOffsetParent:qe,getElementRects:ei,getClientRects:Gs,getDimensions:Qs,getScale:J,isElement:R,isRTL:si};function ni(t,e){let i,s=null;const n=L(t);function r(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function o(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-xt(d)+"px "+-xt(n.clientWidth-(c+h))+"px "+-xt(n.clientHeight-(d+p))+"px "+-xt(c)+"px",threshold:F(0,Et(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return o();e?o(!1,e):i=setTimeout((()=>{o(!1,1e-7)}),1e3)}f=!1}try{s=new IntersectionObserver(y,{...u,root:n.ownerDocument})}catch{s=new IntersectionObserver(y,u)}s.observe(t)}(!0),r}function oi(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:o="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=s,c=oe(t),d=n||r?[...c?ut(c):[],...ut(e)]:[];d.forEach((t=>{n&&t.addEventListener("scroll",i,{passive:!0}),r&&t.addEventListener("resize",i)}));const h=c&&l?ni(c,i):null;let p=-1,u=null;o&&(u=new ResizeObserver((t=>{let[s]=t;s&&s.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),i()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?q(t):null;return a&&function e(){const s=q(t);y&&(s.x!==y.x||s.y!==y.y||s.width!==y.width||s.height!==y.height)&&i(),y=s,f=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach((t=>{n&&t.removeEventListener("scroll",i),r&&t.removeEventListener("resize",i)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const ri=se,li=js,ci=Ws,ai=Ns,hi=(t,e,i)=>{const s=new Map,n={platform:ii,...i},r={...n.platform,_c:s};return Ms(t,e,{...n,platform:r})};var di=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,Nt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ui(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&di(e,i,r),r};let et=class extends ${constructor(){super(...arguments),this.open=!1}firstUpdated(){document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=oi(this._dropsummary[0],this._dropmenu,(async()=>{const{x:t,y:e}=await hi(this._dropsummary[0],this._dropmenu,{middleware:[li(3),ai(),ci(),{name:"detectOverflowMiddleware",fn:async t=>(await ri(t,{altBoundary:!0,padding:5,boundary:document.documentElement,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})}],placement:"bottom",strategy:"fixed"});Object.assign(this._dropmenu.style,{left:`${t}px`,top:`${e}px`})})):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}async disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return m`
			<slot name="summary" @click=${this._toggleOpen}></slot>
			${this.open?m`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:b}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}clickOutsideHandler(t){var e;const i=t.composedPath()[0],s=!(null!=(e=this.shadowRoot)&&e.contains(i)||this.contains(i));this.open&&s&&(this.open=!1)}};et.styles=S`
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
					white 3%
				);
			outline-offset: -0.125rem;
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: absolute;
			width: 100%;
			z-index: 100000;
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
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`,Nt([E({type:Boolean,reflect:!0})],et.prototype,"open",2),Nt([vs({slot:"summary",flatten:!0})],et.prototype,"_dropsummary",2),Nt([gs('div[part="dropmenu"]')],et.prototype,"_dropmenu",2),et=Nt([A("ly-dropdown")],et);const pi=S`
	@layer web-components {
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

		:host(:is(ly-field))::part(label){
			align-items: center;
			display: flex;
			flex-direction: row;
			font-size: var(--scale-md);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(required-icon){
			color: var(--clr-error);
			font-size: var(--scale-xs);
			margin: auto 0;
		}

		:host(:is(ly-field))::part(caption) {
			align-items: center;
			color: var(--clr-subtext);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(caption-text){
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
	}
`;var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,G=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?mi(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&fi(e,i,r),r};let T=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let i=null==e?void 0:e.assignedElements();i&&i.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.name&&t.setAttribute("name",this.name),this.name&&t.setAttribute("title",this.name),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return m`
			${this.label?m`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:b}

			<slot></slot>

			${this.caption?m`
						<ly-flex axis="row" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text" html>${this.caption}</small>
						</ly-flex>
				  `:b}
		`}setRequiredIcon(){return this.required?m`<ly-icon part="required-icon">asterisk</ly-icon>`:m``}setStatusIcon(){switch(this.status){case"debug":return m`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return m`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return m`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return m`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return m`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return m``}}};T.styles=pi,G([E({type:String})],T.prototype,"label",2),G([E({type:String})],T.prototype,"caption",2),G([E({type:String})],T.prototype,"name",2),G([E({type:Boolean,reflect:!0})],T.prototype,"required",2),G([E({type:"debug"})],T.prototype,"status",2),G([E({type:String})],T.prototype,"type",2),T=G([A("ly-field")],T);var yi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,vi=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?gi(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&yi(e,i,r),r};let Vt=class extends ${render(){return m` <slot></slot> `}};Vt.styles=S`
		:host {
			display: contents;
		}
	`,Vt=vi([A("ly-fragment")],Vt);const xi=S`
	@layer web-components {
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

		:host(:is(ly-layer)[has-backdrop])  {
			--bg: color-mix(in var(--prefers-colorSpace, srgb), var(--clr-background), transparent 50%);
			backdrop-filter: blur(var(--scale-3xs));
			visibility: visible;
		}
	}
`;var bi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Ge=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?wi(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&bi(e,i,r),r};let Pt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return m` <slot></slot> `}};Pt.styles=xi,Ge([E({type:String,reflect:!0})],Pt.prototype,"stacked",2),Pt=Ge([A("ly-layer")],Pt);var le=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(le||{});const $i=S`
	@layer web-components {
		:host(:is(ly-flex)) {
			/* base styles */
			display: flex;
			height: max-content;
		}

		:host(:is(ly-flex)[axis='col']) {
			flex-direction: column;
		}

		:host(:is(ly-flex)[axis='row']) {
			flex-direction: row;
		}
	}
`,_i=S`
	@layer web-components {
		:host(:is(ly-grid)) {
			/* local vars */
			--cols: 1;
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
					max(var(--minWidth), calc(100% / var(--cols) - var(--gap))),
					var(--maxWidth)
				)
			);
			height: max-content;
		}

		:host(:is(ly-grid[cols='2'])) {
			--cols: 2;
		}

		:host(:is(ly-grid[cols='3'])) {
			--cols: 3;
		}

		:host(:is(ly-grid[cols='4'])) {
			--cols: 4;
		}

		:host(:is(ly-grid[cols='5'])) {
			--cols: 5;
		}

		:host(:is(ly-grid[cols='6'])) {
			--cols: 6;
		}

		:host(:is(ly-grid[cols='7'])) {
			--cols: 7;
		}

		:host(:is(ly-grid[cols='8'])) {
			--cols: 8;
		}

		:host(:is(ly-grid[cols='9'])) {
			--cols: 9;
		}

		:host(:is(ly-grid[cols='10'])) {
			--cols: 10;
		}

		:host(:is(ly-grid[cols='11'])) {
			--cols: 11;
		}

		:host(:is(ly-grid[cols='12'])) {
			--cols: 12;
		}

		:host(:is(ly-grid[cols='container'])) {
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

		:host(:is(ly-grid[cols='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-grid[cols='container'])) ::slotted([ignore-container]) {
			grid-column: expand;
		}

		:host(:is(ly-grid[cols='container'])) ::slotted([contain-children]) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}
	}
`,Ai=S`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var Ei=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,Ut=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Ci(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Ei(e,i,r),r};let Rt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};Rt.styles=$i,Ut([E({type:le,reflect:!0})],Rt.prototype,"axis",2),Rt=Ut([A("ly-flex")],Rt);let qt=class extends ${render(){return m` <slot></slot> `}};qt.styles=_i,qt=Ut([A("ly-grid")],qt);let Gt=class extends ${render(){return m` <slot></slot> `}};Gt.styles=Ai,Gt=Ut([A("ly-group")],Gt);const yt=S`
	@layer web-components {
		:host(:is(ly-list)) {
			/* local vars */
			--bg: var(--clr-primary);
			--clr: var(--clr-text);
			--cols: 1;
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
	}
`;var Oi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,gt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Si(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Oi(e,i,r),r};let Xt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return m` <slot></slot> `}};Xt.styles=yt,Xt=gt([A("ly-list")],Xt);let Yt=class extends ${render(){return m` <slot></slot> `}};Yt.styles=yt,Yt=gt([A("ly-list-header")],Yt);let Kt=class extends ${render(){return m` <slot></slot> `}};Kt.styles=yt,Kt=gt([A("ly-list-row")],Kt);let Jt=class extends ${render(){return m` <slot></slot> `}};Jt.styles=yt,Jt=gt([A("ly-list-footer")],Jt);let Zt=class extends ${render(){return m` <slot></slot> `}};Zt.styles=yt,Zt=gt([A("ly-list-cell")],Zt);const Pi=S`
	@layer web-components {
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

		:host(:is(ly-slider)[axis='row']) {
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			overflow-x: auto;
			overflow-y: visible;
			/*scroll-snap-type: x proximity;*/
		}

		:host(:is(ly-slider)[axis='col']) {
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: visible;
			overflow-y: auto;
			/*scroll-snap-type: y proximity;*/
		}
	}
`;var Ri=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Xe=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ki(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Ri(e,i,r),r};let kt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};kt.styles=Pi,Xe([E({type:le,reflect:!0})],kt.prototype,"axis",2),kt=Xe([A("ly-slider")],kt);export{_t as App,M as Check,et as Dropdown,T as Field,Rt as Flex,Vt as Fragment,qt as Grid,Gt as Group,At as Icon,Pt as Layer,Xt as List,Zt as ListCell,Jt as ListFooter,Yt as ListHeader,Kt as ListRow,kt as Slider};