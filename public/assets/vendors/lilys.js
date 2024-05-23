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
 */,{is:Ze,defineProperty:Qe,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ss,getPrototypeOf:is}=Object,H=globalThis,fe=H.trustedTypes,ns=fe?fe.emptyScript:"",jt=H.reactiveElementPolyfillSupport,lt=(t,e)=>t,wt={toAttribute(t,e){switch(e){case Boolean:t=t?ns:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},ee=(t,e)=>!Ze(t,e),me={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=me){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Qe(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=ts(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){const n=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??me}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=is(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,e=[...es(t),...ss(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(pe(t))}else void 0!==t&&e.push(pe(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Je(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null==(i=s.converter)?void 0:i.toAttribute)?s.converter:wt).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:wt;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ee)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[lt("elementProperties")]=new Map,K[lt("finalized")]=new Map,null==jt||jt({ReactiveElement:K}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=globalThis,$t=ct.trustedTypes,ye=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pe="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+D,os=`<${Re}>`,I=document,at=()=>I.createComment(""),ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ke=Array.isArray,rs=t=>ke(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Wt="[ \t\n\f\r]",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,ve=/>/g,B=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,be=/"/g,Te=/^(?:script|style|textarea|title)$/i,ls=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),m=ls(1),Z=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),we=new WeakMap,z=I.createTreeWalker(I,129);function Le(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ye?ye.createHTML(e):e}const cs=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=rt;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,a=o.exec(i),null!==a);)d=o.lastIndex,o===rt?"!--"===a[1]?o=ge:void 0!==a[1]?o=ve:void 0!==a[2]?(Te.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=B):void 0!==a[3]&&(o=B):o===B?">"===a[0]?(o=r??rt,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?B:'"'===a[3]?be:xe):o===be||o===xe?o=B:o===ge||o===ve?o=rt:(o=B,r=void 0);const h=o===B&&t[e+1].startsWith("/>")?" ":"";n+=o===rt?i+os:c>=0?(s.push(l),i.slice(0,c)+Pe+i.slice(c)+D+h):i+D+(-2===c?e:h)}return[Le(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class dt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,c]=cs(t,e);if(this.el=dt.createElement(a,i),z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=z.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(Pe)){const e=c[n++],i=s.getAttribute(t).split(D),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?hs:"?"===o[1]?ds:"@"===o[1]?us:Tt}),s.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:r}),s.removeAttribute(t));if(Te.test(s.tagName)){const t=s.textContent.split(D),e=t.length-1;if(e>0){s.textContent=$t?$t.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],at()),z.nextNode(),l.push({type:2,index:++r});s.append(t[e],at())}}}else if(8===s.nodeType)if(s.data===Re)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(D,t+1));)l.push({type:7,index:r}),t+=D.length-1}r++}}static createElement(t,e){const i=I.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){var r,n;if(e===Z)return e;let o=void 0!==s?null==(r=i._$Co)?void 0:r[s]:i._$Cl;const l=ht(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class as{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??I).importNode(e,!0);z.currentNode=s;let r=z.nextNode(),n=0,o=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new pt(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ps(r,this,t)),this._$AV.push(e),l=i[++o]}n!==(null==l?void 0:l.index)&&(r=z.nextNode(),n++)}return z.currentNode=I,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class pt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),ht(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):rs(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==b&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=dt.createElement(Le(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new as(r,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=we.get(t.strings);return void 0===e&&we.set(t.strings,e=new dt(t)),e}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new pt(this.S(at()),this.S(at()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!ht(t)||t!==this._$AH&&t!==Z,n&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=Q(this,s[i+o],e,o),l===Z&&(l=this._$AH[o]),n||(n=!ht(l)||l!==this._$AH[o]),l===b?t=b:t!==b&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hs extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class ds extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class us extends Tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??b)===Z)return;const i=this._$AH,s=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==b&&(i===b||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ps{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const Bt=ct.litHtmlPolyfillSupport;null==Bt||Bt(dt,pt),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.1.3");const fs=(t,e,i)=>{const s=(null==i?void 0:i.renderBefore)??e;let r=s._$litPart$;if(void 0===r){const t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=r=new pt(e.insertBefore(at(),t),t,void 0,i??{})}return r._$AI(t),r};
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
 */,ms={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee},ys=(t=ms,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function E(t){return(e,i)=>"object"==typeof i?ys(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function De(t,e){return(e,i,s)=>gs(e,i,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}const vs=S`
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
`;var xs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,He=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?bs(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&xs(e,i,n),n};let _t=class extends ${constructor(){super(...arguments),this.layout="default"}render(){return m` <slot></slot> `}};_t.styles=vs,He([E({type:String,reflect:!0})],_t.prototype,"layout",2),_t=He([A("ly-app")],_t);const ws=S`
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
`;var $s=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Me=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?_s(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&$s(e,i,n),n};let At=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return m` <slot></slot> `}};At.styles=ws,Me([E({type:Boolean,reflect:!0})],At.prototype,"solid",2),At=Me([A("ly-icon")],At);const As=S`
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
`;var Es=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,ft=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?Cs(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&Es(e,i,n),n};let M=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return m`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?m`<label part="label">${this.label}</label>`:b}
			</ly-flex>
			${this.checked?m`<slot></slot>`:b}
		`}handleVariant(){switch(this.variant){case"checkbox":return m`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return m`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return m`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return m``}}};M.properties={delegatesFocus:{type:Boolean,reflect:!0}},M.styles=As,ft([E({type:Boolean,reflect:!0})],M.prototype,"checked",2),ft([E({type:String,reflect:!0})],M.prototype,"group",2),ft([E({type:String,reflect:!0})],M.prototype,"label",2),ft([E({type:"checkbox",reflect:!0})],M.prototype,"variant",2),M=ft([A("ly-check")],M);const Et=Math.min,F=Math.max,Ct=Math.round,xt=Math.floor,N=t=>({x:t,y:t}),Os={left:"right",right:"left",bottom:"top",top:"bottom"},Ss={start:"end",end:"start"};function $e(t,e,i){return F(t,Et(e,i))}function Lt(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function Dt(t){return t.split("-")[1]}function Ne(t){return"x"===t?"y":"x"}function Ue(t){return"y"===t?"height":"width"}function Ht(t){return["top","bottom"].includes(V(t))?"y":"x"}function je(t){return Ne(Ht(t))}function Ps(t,e,i){void 0===i&&(i=!1);const s=Dt(t),r=je(t),n=Ue(r);let o="x"===r?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=Ot(o)),[o,Ot(o)]}function Rs(t){const e=Ot(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,(t=>Ss[t]))}function ks(t,e,i){const s=["left","right"],r=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:s:e?s:r;case"left":case"right":return e?n:o;default:return[]}}function Ts(t,e,i,s){const r=Dt(t);let n=ks(V(t),"start"===i,s);return r&&(n=n.map((t=>t+"-"+r)),e&&(n=n.concat(n.map(It)))),n}function Ot(t){return t.replace(/left|right|bottom|top/g,(t=>Os[t]))}function Ls(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ds(t){return"number"!=typeof t?Ls(t):{top:t,right:t,bottom:t,left:t}}function St(t){const{x:e,y:i,width:s,height:r}=t;return{width:s,height:r,top:i,left:e,right:e+s,bottom:i+r,x:e,y:i}}function _e(t,e,i){let{reference:s,floating:r}=t;const n=Ht(e),o=je(e),l=Ue(o),a=V(e),c="y"===n,d=s.x+s.width/2-r.width/2,h=s.y+s.height/2-r.height/2,p=s[l]/2-r[l]/2;let u;switch(a){case"top":u={x:d,y:s.y-r.height};break;case"bottom":u={x:d,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:h};break;case"left":u={x:s.x-r.width,y:h};break;default:u={x:s.x,y:s.y}}switch(Dt(e)){case"start":u[o]-=p*(i&&c?-1:1);break;case"end":u[o]+=p*(i&&c?-1:1)}return u}const Hs=async(t,e,i)=>{const{placement:s="bottom",strategy:r="absolute",middleware:n=[],platform:o}=i,l=n.filter(Boolean),a=await(null==o.isRTL?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=_e(c,s,a),p=s,u={},f=0;for(let i=0;i<l.length;i++){const{name:n,fn:y}=l[i],{x:m,y:g,data:v,reset:b}=await y({x:d,y:h,initialPlacement:s,placement:p,strategy:r,middlewareData:u,rects:c,platform:o,elements:{reference:t,floating:e}});d=m??d,h=g??h,u={...u,[n]:{...u[n],...v}},b&&f<=50&&(f++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await o.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:d,y:h}=_e(c,p,a))),i=-1)}return{x:d,y:h,placement:p,strategy:r,middlewareData:u}};async function se(t,e){var i;void 0===e&&(e={});const{x:s,y:r,platform:n,rects:o,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=Lt(e,t),f=Ds(u),y=l[p?"floating"===h?"reference":"floating":h],m=St(await n.getClippingRect({element:null==(i=await(null==n.isElement?void 0:n.isElement(y)))||i?y:y.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),g="floating"===h?{x:s,y:r,width:o.floating.width,height:o.floating.height}:o.reference,v=await(null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),b=await(null==n.isElement?void 0:n.isElement(v))&&await(null==n.getScale?void 0:n.getScale(v))||{x:1,y:1},x=St(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(m.top-x.top+f.top)/b.y,bottom:(x.bottom-m.bottom+f.bottom)/b.y,left:(m.left-x.left+f.left)/b.x,right:(x.right-m.right+f.right)/b.x}}const Ms=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:r,middlewareData:n,rects:o,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...m}=Lt(t,e);if(null!=(i=n.arrow)&&i.alignmentOffset)return{};const g=V(r),v=V(l)===l,b=await(null==a.isRTL?void 0:a.isRTL(c.floating)),x=p||(v||!y?[Ot(l)]:Rs(l));!p&&"none"!==f&&x.push(...Ts(l,y,f,b));const w=[l,...x],$=await se(e,m),_=[];let A=(null==(s=n.flip)?void 0:s.overflows)||[];if(d&&_.push($[g]),h){const t=Ps(r,o,b);_.push($[t[0]],$[t[1]])}if(A=[...A,{placement:r,overflows:_}],!_.every((t=>t<=0))){var E,k;const t=((null==(E=n.flip)?void 0:E.index)||0)+1,e=w[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let i=null==(k=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:k.placement;if(!i)switch(u){case"bestFit":{var S;const t=null==(S=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:S[0];t&&(i=t);break}case"initialPlacement":i=l}if(r!==i)return{reset:{placement:i}}}return{}}}};async function Ns(t,e){const{placement:i,platform:s,elements:r}=t,n=await(null==s.isRTL?void 0:s.isRTL(r.floating)),o=V(i),l=Dt(i),a="y"===Ht(i),c=["left","top"].includes(o)?-1:1,d=n&&a?-1:1,h=Lt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const Us=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:r,y:n,placement:o,middlewareData:l}=e,a=await Ns(e,t);return o===(null==(i=l.offset)?void 0:i.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:r+a.x,y:n+a.y,data:{...a,placement:o}}}}},js=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:r}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=Lt(t,e),c={x:i,y:s},d=await se(e,a),h=Ht(V(r)),p=Ne(h);let u=c[p],f=c[h];if(n){const t="y"===p?"bottom":"right";u=$e(u+d["y"===p?"top":"left"],u,u-d[t])}if(o){const t="y"===h?"bottom":"right";f=$e(f+d["y"===h?"top":"left"],f,f-d[t])}const y=l.fn({...e,[p]:u,[h]:f});return{...y,data:{x:y.x-i,y:y.y-s}}}}};function st(t){return We(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(We(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function We(t){return t instanceof Node||t instanceof O(t).Node}function R(t){return t instanceof Element||t instanceof O(t).Element}function k(t){return t instanceof HTMLElement||t instanceof O(t).HTMLElement}function Ae(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof O(t).ShadowRoot)}function mt(t){const{overflow:e,overflowX:i,overflowY:s,display:r}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(r)}function Ws(t){return["table","td","th"].includes(st(t))}function ie(t){const e=ne(),i=P(t);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function Bs(t){let e=U(t);for(;k(e)&&!tt(e);){if(ie(e))return e;e=U(e)}return null}function ne(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(st(t))}function P(t){return O(t).getComputedStyle(t)}function Mt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===st(t))return t;const e=t.assignedSlot||t.parentNode||Ae(t)&&t.host||L(t);return Ae(e)?e.host:e}function Be(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&mt(e)?e:Be(e)}function ut(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const r=Be(t),n=r===(null==(s=t.ownerDocument)?void 0:s.body),o=O(r);return n?e.concat(o,o.visualViewport||[],mt(r)?r:[],o.frameElement&&i?ut(o.frameElement):[]):e.concat(r,ut(r,[],i))}function ze(t){const e=P(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const r=k(t),n=r?t.offsetWidth:i,o=r?t.offsetHeight:s,l=Ct(i)!==n||Ct(s)!==o;return l&&(i=n,s=o),{width:i,height:s,$:l}}function oe(t){return R(t)?t:t.contextElement}function J(t){const e=oe(t);if(!k(e))return N(1);const i=e.getBoundingClientRect(),{width:s,height:r,$:n}=ze(e);let o=(n?Ct(i.width):i.width)/s,l=(n?Ct(i.height):i.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const zs=N(0);function Fe(t){const e=O(t);return ne()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:zs}function Fs(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==O(t))&&e}function q(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const r=t.getBoundingClientRect(),n=oe(t);let o=N(1);e&&(s?R(s)&&(o=J(s)):o=J(t));const l=Fs(n,i,s)?Fe(n):N(0);let a=(r.left+l.x)/o.x,c=(r.top+l.y)/o.y,d=r.width/o.x,h=r.height/o.y;if(n){const t=O(n),e=s&&R(s)?O(s):s;let i=t,r=i.frameElement;for(;r&&s&&e!==i;){const t=J(r),e=r.getBoundingClientRect(),s=P(r),n=e.left+(r.clientLeft+parseFloat(s.paddingLeft))*t.x,o=e.top+(r.clientTop+parseFloat(s.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=n,c+=o,i=O(r),r=i.frameElement}}return St({width:d,height:h,x:a,y:c})}const Is=[":popover-open",":modal"];function re(t){return Is.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Vs(t){let{elements:e,rect:i,offsetParent:s,strategy:r}=t;const n="fixed"===r,o=L(s),l=!!e&&re(e.floating);if(s===o||l&&n)return i;let a={scrollLeft:0,scrollTop:0},c=N(1);const d=N(0),h=k(s);if((h||!h&&!n)&&(("body"!==st(s)||mt(o))&&(a=Mt(s)),k(s))){const t=q(s);c=J(s),d.x=t.x+s.clientLeft,d.y=t.y+s.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+d.x,y:i.y*c.y-a.scrollTop*c.y+d.y}}function qs(t){return Array.from(t.getClientRects())}function Ie(t){return q(L(t)).left+Mt(t).scrollLeft}function Gs(t){const e=L(t),i=Mt(t),s=t.ownerDocument.body,r=F(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),n=F(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+Ie(t);const l=-i.scrollTop;return"rtl"===P(s).direction&&(o+=F(e.clientWidth,s.clientWidth)-r),{width:r,height:n,x:o,y:l}}function Xs(t,e){const i=O(t),s=L(t),r=i.visualViewport;let n=s.clientWidth,o=s.clientHeight,l=0,a=0;if(r){n=r.width,o=r.height;const t=ne();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:n,height:o,x:l,y:a}}function Ys(t,e){const i=q(t,!0,"fixed"===e),s=i.top+t.clientTop,r=i.left+t.clientLeft,n=k(t)?J(t):N(1);return{width:t.clientWidth*n.x,height:t.clientHeight*n.y,x:r*n.x,y:s*n.y}}function Ee(t,e,i){let s;if("viewport"===e)s=Xs(t,i);else if("document"===e)s=Gs(L(t));else if(R(e))s=Ys(e,i);else{const i=Fe(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return St(s)}function Ve(t,e){const i=U(t);return!(i===e||!R(i)||tt(i))&&("fixed"===P(i).position||Ve(i,e))}function Ks(t,e){const i=e.get(t);if(i)return i;let s=ut(t,[],!1).filter((t=>R(t)&&"body"!==st(t))),r=null;const n="fixed"===P(t).position;let o=n?U(t):t;for(;R(o)&&!tt(o);){const e=P(o),i=ie(o);!i&&"fixed"===e.position&&(r=null),(n?!i&&!r:!i&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||mt(o)&&!i&&Ve(t,o))?s=s.filter((t=>t!==o)):r=e,o=U(o)}return e.set(t,s),s}function Js(t){let{element:e,boundary:i,rootBoundary:s,strategy:r}=t;const n=[..."clippingAncestors"===i?re(e)?[]:Ks(e,this._c):[].concat(i),s],o=n[0],l=n.reduce(((t,i)=>{const s=Ee(e,i,r);return t.top=F(s.top,t.top),t.right=Et(s.right,t.right),t.bottom=Et(s.bottom,t.bottom),t.left=F(s.left,t.left),t}),Ee(e,o,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Zs(t){const{width:e,height:i}=ze(t);return{width:e,height:i}}function Qs(t,e,i){const s=k(e),r=L(e),n="fixed"===i,o=q(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=N(0);if(s||!s&&!n)if(("body"!==st(e)||mt(r))&&(l=Mt(e)),s){const t=q(e,!0,n,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=Ie(r));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Ft(t){return"static"===P(t).position}function Ce(t,e){return k(t)&&"fixed"!==P(t).position?e?e(t):t.offsetParent:null}function qe(t,e){const i=O(t);if(re(t))return i;if(!k(t)){let e=U(t);for(;e&&!tt(e);){if(R(e)&&!Ft(e))return e;e=U(e)}return i}let s=Ce(t,e);for(;s&&Ws(s)&&Ft(s);)s=Ce(s,e);return s&&tt(s)&&Ft(s)&&!ie(s)?i:s||Bs(t)||i}const ti=async function(t){const e=this.getOffsetParent||qe,i=this.getDimensions,s=await i(t.floating);return{reference:Qs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function ei(t){return"rtl"===P(t).direction}const si={convertOffsetParentRelativeRectToViewportRelativeRect:Vs,getDocumentElement:L,getClippingRect:Js,getOffsetParent:qe,getElementRects:ti,getClientRects:qs,getDimensions:Zs,getScale:J,isElement:R,isRTL:ei};function ii(t,e){let i,s=null;const r=L(t);function n(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function o(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),n();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-xt(d)+"px "+-xt(r.clientWidth-(c+h))+"px "+-xt(r.clientHeight-(d+p))+"px "+-xt(c)+"px",threshold:F(0,Et(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return o();e?o(!1,e):i=setTimeout((()=>{o(!1,1e-7)}),1e3)}f=!1}try{s=new IntersectionObserver(y,{...u,root:r.ownerDocument})}catch{s=new IntersectionObserver(y,u)}s.observe(t)}(!0),n}function ni(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:o="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=s,c=oe(t),d=r||n?[...c?ut(c):[],...ut(e)]:[];d.forEach((t=>{r&&t.addEventListener("scroll",i,{passive:!0}),n&&t.addEventListener("resize",i)}));const h=c&&l?ii(c,i):null;let p=-1,u=null;o&&(u=new ResizeObserver((t=>{let[s]=t;s&&s.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),i()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?q(t):null;return a&&function e(){const s=q(t);y&&(s.x!==y.x||s.y!==y.y||s.width!==y.width||s.height!==y.height)&&i(),y=s,f=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach((t=>{r&&t.removeEventListener("scroll",i),n&&t.removeEventListener("resize",i)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const oi=se,ri=Us,li=js,ci=Ms,ai=(t,e,i)=>{const s=new Map,r={platform:si,...i},n={...r.platform,_c:s};return Hs(t,e,{...r,platform:n})};var hi=Object.defineProperty,di=Object.getOwnPropertyDescriptor,Nt=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?di(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&hi(e,i,n),n};let et=class extends ${constructor(){super(...arguments),this.open=!1}firstUpdated(){document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=ni(this._dropsummary,this._dropmenu,(async()=>{const{x:t,y:e}=await ai(this._dropsummary,this._dropmenu,{middleware:[ri(3),ci(),li(),{name:"detectOverflowMiddleware",fn:async t=>(await oi(t,{altBoundary:!0,padding:5,boundary:document.documentElement,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})}],placement:"bottom",strategy:"fixed"});Object.assign(this._dropmenu.style,{left:`${t}px`,top:`${e}px`})})):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}async disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return m`
			<summary @click=${this._toggleOpen}>
				<slot name="summary"></slot>
			</summary>
			${this.open?m`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:b}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}clickOutsideHandler(t){var e;const i=t.composedPath()[0],s=!(null!=(e=this.shadowRoot)&&e.contains(i)||this.contains(i));this.open&&s&&(this.open=!1)}};et.styles=S`
		:host(:is(ly-dropdown)) {
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
	`,Nt([E({type:Boolean,reflect:!0})],et.prototype,"open",2),Nt([De("summary")],et.prototype,"_dropsummary",2),Nt([De('div[part="dropmenu"]')],et.prototype,"_dropmenu",2),et=Nt([A("ly-dropdown")],et);const ui=S`
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
`;var pi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,G=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?fi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&pi(e,i,n),n};let T=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let i=null==e?void 0:e.assignedElements();i&&i.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.name&&t.setAttribute("name",this.name),this.name&&t.setAttribute("title",this.name),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return m`
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
		`}setRequiredIcon(){return this.required?m`<ly-icon part="required-icon">asterisk</ly-icon>`:m``}setStatusIcon(){switch(this.status){case"debug":return m`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return m`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return m`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return m`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return m`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return m``}}};T.styles=ui,G([E({type:String})],T.prototype,"label",2),G([E({type:String})],T.prototype,"caption",2),G([E({type:String})],T.prototype,"name",2),G([E({type:Boolean,reflect:!0})],T.prototype,"required",2),G([E({type:"debug"})],T.prototype,"status",2),G([E({type:String})],T.prototype,"type",2),T=G([A("ly-field")],T);var mi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,gi=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?yi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&mi(e,i,n),n};let Vt=class extends ${render(){return m` <slot></slot> `}};Vt.styles=S`
		:host {
			display: contents;
		}
	`,Vt=gi([A("ly-fragment")],Vt);const vi=S`
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
`;var xi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,Ge=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?bi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&xi(e,i,n),n};let Pt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return m` <slot></slot> `}};Pt.styles=vi,Ge([E({type:String,reflect:!0})],Pt.prototype,"stacked",2),Pt=Ge([A("ly-layer")],Pt);var le=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(le||{});const wi=S`
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
`,$i=S`
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
`,_i=S`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var Ai=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ut=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?Ei(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&Ai(e,i,n),n};let Rt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};Rt.styles=wi,Ut([E({type:le,reflect:!0})],Rt.prototype,"axis",2),Rt=Ut([A("ly-flex")],Rt);let qt=class extends ${render(){return m` <slot></slot> `}};qt.styles=$i,qt=Ut([A("ly-grid")],qt);let Gt=class extends ${render(){return m` <slot></slot> `}};Gt.styles=_i,Gt=Ut([A("ly-group")],Gt);const yt=S`
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
`;var Ci=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,gt=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?Oi(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&Ci(e,i,n),n};let Xt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return m` <slot></slot> `}};Xt.styles=yt,Xt=gt([A("ly-list")],Xt);let Yt=class extends ${render(){return m` <slot></slot> `}};Yt.styles=yt,Yt=gt([A("ly-list-header")],Yt);let Kt=class extends ${render(){return m` <slot></slot> `}};Kt.styles=yt,Kt=gt([A("ly-list-row")],Kt);let Jt=class extends ${render(){return m` <slot></slot> `}};Jt.styles=yt,Jt=gt([A("ly-list-footer")],Jt);let Zt=class extends ${render(){return m` <slot></slot> `}};Zt.styles=yt,Zt=gt([A("ly-list-cell")],Zt);const Si=S`
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
`;var Pi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Xe=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?Ri(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&Pi(e,i,n),n};let kt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};kt.styles=Si,Xe([E({type:le,reflect:!0})],kt.prototype,"axis",2),kt=Xe([A("ly-slider")],kt);export{_t as App,M as Check,et as Dropdown,T as Field,Rt as Flex,Vt as Fragment,qt as Grid,Gt as Group,At as Icon,Pt as Layer,Xt as List,Zt as ListCell,Jt as ListFooter,Yt as ListHeader,Kt as ListRow,kt as Slider};