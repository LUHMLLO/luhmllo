/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=globalThis,Qt=bt.ShadowRoot&&(void 0===bt.ShadyCSS||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ue=new WeakMap;let Se=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qt&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=ue.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ue.set(e,t))}return t}toString(){return this.cssText}};const Ke=t=>new Se("string"==typeof t?t:t+"",void 0,te),O=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new Se(s,t,te)},Je=(t,e)=>{if(Qt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=bt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},de=Qt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ke(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ze,defineProperty:Qe,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ss,getPrototypeOf:is}=Object,M=globalThis,pe=M.trustedTypes,ns=pe?pe.emptyScript:"",jt=M.reactiveElementPolyfillSupport,lt=(t,e)=>t,wt={toAttribute(t,e){switch(e){case Boolean:t=t?ns:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ee=(t,e)=>!Ze(t,e),fe={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=fe){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Qe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=ts(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const n=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fe}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=is(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,e=[...es(t),...ss(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(de(t))}else void 0!==t&&e.push(de(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Je(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:wt).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:wt;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ee)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[lt("elementProperties")]=new Map,K[lt("finalized")]=new Map,null==jt||jt({ReactiveElement:K}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=globalThis,$t=ct.trustedTypes,me=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Oe="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+D,os=`<${Pe}>`,I=document,at=()=>I.createComment(""),ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Re=Array.isArray,rs=t=>Re(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Wt="[ \t\n\f\r]",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,ge=/>/g,z=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,xe=/"/g,Te=/^(?:script|style|textarea|title)$/i,ls=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),m=ls(1),Z=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),be=new WeakMap,B=I.createTreeWalker(I,129);function ke(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==me?me.createHTML(e):e}const cs=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=rt;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,a=o.exec(s),null!==a);)h=o.lastIndex,o===rt?"!--"===a[1]?o=ye:void 0!==a[1]?o=ge:void 0!==a[2]?(Te.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=z):void 0!==a[3]&&(o=z):o===z?">"===a[0]?(o=r??rt,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?z:'"'===a[3]?xe:ve):o===xe||o===ve?o=z:o===ye||o===ge?o=rt:(o=z,r=void 0);const d=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===rt?s+os:c>=0?(i.push(l),s.slice(0,c)+Oe+s.slice(c)+D+d):s+D+(-2===c?e:d)}return[ke(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class ut{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,c]=cs(t,e);if(this.el=ut.createElement(a,s),B.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(Oe)){const e=c[n++],s=i.getAttribute(t).split(D),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?hs:"?"===o[1]?us:"@"===o[1]?ds:kt}),i.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:r}),i.removeAttribute(t));if(Te.test(i.tagName)){const t=i.textContent.split(D),e=t.length-1;if(e>0){i.textContent=$t?$t.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],at()),B.nextNode(),l.push({type:2,index:++r});i.append(t[e],at())}}}else if(8===i.nodeType)if(i.data===Pe)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(D,t+1));)l.push({type:7,index:r}),t+=D.length-1}r++}}static createElement(t,e){const s=I.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){var r,n;if(e===Z)return e;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const l=ht(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,i)),e}class as{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??I).importNode(e,!0);B.currentNode=i;let r=B.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new pt(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ps(r,this,t)),this._$AV.push(e),l=s[++o]}n!==(null==l?void 0:l.index)&&(r=B.nextNode(),n++)}return B.currentNode=I,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class pt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),ht(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):rs(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==b&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ut.createElement(ke(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new as(r,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=be.get(t.strings);return void 0===e&&be.set(t.strings,e=new ut(t)),e}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new pt(this.S(at()),this.S(at()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!ht(t)||t!==this._$AH&&t!==Z,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=Q(this,i[s+o],e,o),l===Z&&(l=this._$AH[o]),n||(n=!ht(l)||l!==this._$AH[o]),l===b?t=b:t!==b&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hs extends kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class us extends kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class ds extends kt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??b)===Z)return;const s=this._$AH,i=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==b&&(s===b||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ps{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const zt=ct.litHtmlPolyfillSupport;null==zt||zt(ut,pt),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.1.3");const fs=(t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new pt(e.insertBefore(at(),t),t,void 0,s??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=fs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Z}}var Ce;$._$litElement$=!0,$.finalized=!0,null==(Ce=globalThis.litElementHydrateSupport)||Ce.call(globalThis,{LitElement:$});const Bt=globalThis.litElementPolyfillSupport;null==Bt||Bt({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ms={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee},ys=(t=ms,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function E(t){return(e,s)=>"object"==typeof s?ys(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Le(t,e){return(e,s,i)=>gs(e,s,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}const vs=O`
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
`;var xs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,De=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?bs(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&xs(e,s,n),n};let _t=class extends ${constructor(){super(...arguments),this.layout="default"}render(){return m` <slot></slot> `}};_t.styles=vs,De([E({type:String,reflect:!0})],_t.prototype,"layout",2),_t=De([A("ly-app")],_t);const ws=O`
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
`;var $s=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Me=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?_s(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&$s(e,s,n),n};let At=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return m` <slot></slot> `}};At.styles=ws,Me([E({type:Boolean,reflect:!0})],At.prototype,"solid",2),At=Me([A("ly-icon")],At);const As=O`
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
`;var Es=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Cs(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Es(e,s,n),n};let N=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return m`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?m`<label part="label">${this.label}</label>`:b}
			</ly-flex>
			${this.checked?m`<slot></slot>`:b}
		`}handleVariant(){switch(this.variant){case"checkbox":return m`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return m`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return m`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return m``}}};N.properties={delegatesFocus:{type:Boolean,reflect:!0}},N.styles=As,ft([E({type:Boolean,reflect:!0})],N.prototype,"checked",2),ft([E({type:String,reflect:!0})],N.prototype,"group",2),ft([E({type:String,reflect:!0})],N.prototype,"label",2),ft([E({type:"checkbox",reflect:!0})],N.prototype,"variant",2),N=ft([A("ly-check")],N);const Et=Math.min,F=Math.max,Ct=Math.round,xt=Math.floor,H=t=>({x:t,y:t}),Ss={left:"right",right:"left",bottom:"top",top:"bottom"},Os={start:"end",end:"start"};function we(t,e,s){return F(t,Et(e,s))}function Lt(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function Dt(t){return t.split("-")[1]}function Ne(t){return"x"===t?"y":"x"}function He(t){return"y"===t?"height":"width"}function Mt(t){return["top","bottom"].includes(V(t))?"y":"x"}function Ue(t){return Ne(Mt(t))}function Ps(t,e,s){void 0===s&&(s=!1);const i=Dt(t),r=Ue(t),n=He(r);let o="x"===r?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=St(o)),[o,St(o)]}function Rs(t){const e=St(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,(t=>Os[t]))}function Ts(t,e,s){const i=["left","right"],r=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return s?e?r:i:e?i:r;case"left":case"right":return e?n:o;default:return[]}}function ks(t,e,s,i){const r=Dt(t);let n=Ts(V(t),"start"===s,i);return r&&(n=n.map((t=>t+"-"+r)),e&&(n=n.concat(n.map(It)))),n}function St(t){return t.replace(/left|right|bottom|top/g,(t=>Ss[t]))}function Ls(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ds(t){return"number"!=typeof t?Ls(t):{top:t,right:t,bottom:t,left:t}}function Ot(t){const{x:e,y:s,width:i,height:r}=t;return{width:i,height:r,top:s,left:e,right:e+i,bottom:s+r,x:e,y:s}}function $e(t,e,s){let{reference:i,floating:r}=t;const n=Mt(e),o=Ue(e),l=He(o),a=V(e),c="y"===n,h=i.x+i.width/2-r.width/2,d=i.y+i.height/2-r.height/2,p=i[l]/2-r[l]/2;let u;switch(a){case"top":u={x:h,y:i.y-r.height};break;case"bottom":u={x:h,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:d};break;case"left":u={x:i.x-r.width,y:d};break;default:u={x:i.x,y:i.y}}switch(Dt(e)){case"start":u[o]-=p*(s&&c?-1:1);break;case"end":u[o]+=p*(s&&c?-1:1)}return u}const Ms=async(t,e,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:o}=s,l=n.filter(Boolean),a=await(null==o.isRTL?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:d}=$e(c,i,a),p=i,u={},f=0;for(let s=0;s<l.length;s++){const{name:n,fn:y}=l[s],{x:m,y:g,data:v,reset:b}=await y({x:h,y:d,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:c,platform:o,elements:{reference:t,floating:e}});h=m??h,d=g??d,u={...u,[n]:{...u[n],...v}},b&&f<=50&&(f++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await o.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:h,y:d}=$e(c,p,a))),s=-1)}return{x:h,y:d,placement:p,strategy:r,middlewareData:u}};async function je(t,e){var s;void 0===e&&(e={});const{x:i,y:r,platform:n,rects:o,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=Lt(e,t),f=Ds(u),y=l[p?"floating"===d?"reference":"floating":d],m=Ot(await n.getClippingRect({element:null==(s=await(null==n.isElement?void 0:n.isElement(y)))||s?y:y.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),g="floating"===d?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,v=await(null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),b=await(null==n.isElement?void 0:n.isElement(v))&&await(null==n.getScale?void 0:n.getScale(v))||{x:1,y:1},x=Ot(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(m.top-x.top+f.top)/b.y,bottom:(x.bottom-m.bottom+f.bottom)/b.y,left:(m.left-x.left+f.left)/b.x,right:(x.right-m.right+f.right)/b.x}}const Ns=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:r,middlewareData:n,rects:o,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...m}=Lt(t,e);if(null!=(s=n.arrow)&&s.alignmentOffset)return{};const g=V(r),v=V(l)===l,b=await(null==a.isRTL?void 0:a.isRTL(c.floating)),x=p||(v||!y?[St(l)]:Rs(l));!p&&"none"!==f&&x.push(...ks(l,y,f,b));const w=[l,...x],$=await je(e,m),_=[];let A=(null==(i=n.flip)?void 0:i.overflows)||[];if(h&&_.push($[g]),d){const t=Ps(r,o,b);_.push($[t[0]],$[t[1]])}if(A=[...A,{placement:r,overflows:_}],!_.every((t=>t<=0))){var E,S;const t=((null==(E=n.flip)?void 0:E.index)||0)+1,e=w[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let s=null==(S=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:S.placement;if(!s)switch(u){case"bestFit":{var k;const t=null==(k=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:k[0];t&&(s=t);break}case"initialPlacement":s=l}if(r!==s)return{reset:{placement:s}}}return{}}}};async function Hs(t,e){const{placement:s,platform:i,elements:r}=t,n=await(null==i.isRTL?void 0:i.isRTL(r.floating)),o=V(s),l=Dt(s),a="y"===Mt(s),c=["left","top"].includes(o)?-1:1,h=n&&a?-1:1,d=Lt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*h,y:p*c}:{x:p*c,y:u*h}}const Us=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:r,y:n,placement:o,middlewareData:l}=e,a=await Hs(e,t);return o===(null==(s=l.offset)?void 0:s.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:r+a.x,y:n+a.y,data:{...a,placement:o}}}}},js=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:r}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:t=>{let{x:e,y:s}=t;return{x:e,y:s}}},...a}=Lt(t,e),c={x:s,y:i},h=await je(e,a),d=Mt(V(r)),p=Ne(d);let u=c[p],f=c[d];if(n){const t="y"===p?"bottom":"right";u=we(u+h["y"===p?"top":"left"],u,u-h[t])}if(o){const t="y"===d?"bottom":"right";f=we(f+h["y"===d?"top":"left"],f,f-h[t])}const y=l.fn({...e,[p]:u,[d]:f});return{...y,data:{x:y.x-s,y:y.y-i}}}}};function st(t){return We(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(We(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function We(t){return t instanceof Node||t instanceof S(t).Node}function R(t){return t instanceof Element||t instanceof S(t).Element}function T(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function _e(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function mt(t){const{overflow:e,overflowX:s,overflowY:i,display:r}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(r)}function Ws(t){return["table","td","th"].includes(st(t))}function se(t){const e=ie(),s=P(t);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!e&&!!s.backdropFilter&&"none"!==s.backdropFilter||!e&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some((t=>(s.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(s.contain||"").includes(t)))}function zs(t){let e=U(t);for(;T(e)&&!tt(e);){if(se(e))return e;e=U(e)}return null}function ie(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(st(t))}function P(t){return S(t).getComputedStyle(t)}function Nt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===st(t))return t;const e=t.assignedSlot||t.parentNode||_e(t)&&t.host||L(t);return _e(e)?e.host:e}function ze(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&mt(e)?e:ze(e)}function dt(t,e,s){var i;void 0===e&&(e=[]),void 0===s&&(s=!0);const r=ze(t),n=r===(null==(i=t.ownerDocument)?void 0:i.body),o=S(r);return n?e.concat(o,o.visualViewport||[],mt(r)?r:[],o.frameElement&&s?dt(o.frameElement):[]):e.concat(r,dt(r,[],s))}function Be(t){const e=P(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=T(t),n=r?t.offsetWidth:s,o=r?t.offsetHeight:i,l=Ct(s)!==n||Ct(i)!==o;return l&&(s=n,i=o),{width:s,height:i,$:l}}function ne(t){return R(t)?t:t.contextElement}function J(t){const e=ne(t);if(!T(e))return H(1);const s=e.getBoundingClientRect(),{width:i,height:r,$:n}=Be(e);let o=(n?Ct(s.width):s.width)/i,l=(n?Ct(s.height):s.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Bs=H(0);function Fe(t){const e=S(t);return ie()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Bs}function Fs(t,e,s){return void 0===e&&(e=!1),!(!s||e&&s!==S(t))&&e}function q(t,e,s,i){void 0===e&&(e=!1),void 0===s&&(s=!1);const r=t.getBoundingClientRect(),n=ne(t);let o=H(1);e&&(i?R(i)&&(o=J(i)):o=J(t));const l=Fs(n,s,i)?Fe(n):H(0);let a=(r.left+l.x)/o.x,c=(r.top+l.y)/o.y,h=r.width/o.x,d=r.height/o.y;if(n){const t=S(n),e=i&&R(i)?S(i):i;let s=t,r=s.frameElement;for(;r&&i&&e!==s;){const t=J(r),e=r.getBoundingClientRect(),i=P(r),n=e.left+(r.clientLeft+parseFloat(i.paddingLeft))*t.x,o=e.top+(r.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,h*=t.x,d*=t.y,a+=n,c+=o,s=S(r),r=s.frameElement}}return Ot({width:h,height:d,x:a,y:c})}const Is=[":popover-open",":modal"];function oe(t){return Is.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Vs(t){let{elements:e,rect:s,offsetParent:i,strategy:r}=t;const n="fixed"===r,o=L(i),l=!!e&&oe(e.floating);if(i===o||l&&n)return s;let a={scrollLeft:0,scrollTop:0},c=H(1);const h=H(0),d=T(i);if((d||!d&&!n)&&(("body"!==st(i)||mt(o))&&(a=Nt(i)),T(i))){const t=q(i);c=J(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-a.scrollLeft*c.x+h.x,y:s.y*c.y-a.scrollTop*c.y+h.y}}function qs(t){return Array.from(t.getClientRects())}function Ie(t){return q(L(t)).left+Nt(t).scrollLeft}function Gs(t){const e=L(t),s=Nt(t),i=t.ownerDocument.body,r=F(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=F(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-s.scrollLeft+Ie(t);const l=-s.scrollTop;return"rtl"===P(i).direction&&(o+=F(e.clientWidth,i.clientWidth)-r),{width:r,height:n,x:o,y:l}}function Xs(t,e){const s=S(t),i=L(t),r=s.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,a=0;if(r){n=r.width,o=r.height;const t=ie();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:n,height:o,x:l,y:a}}function Ys(t,e){const s=q(t,!0,"fixed"===e),i=s.top+t.clientTop,r=s.left+t.clientLeft,n=T(t)?J(t):H(1);return{width:t.clientWidth*n.x,height:t.clientHeight*n.y,x:r*n.x,y:i*n.y}}function Ae(t,e,s){let i;if("viewport"===e)i=Xs(t,s);else if("document"===e)i=Gs(L(t));else if(R(e))i=Ys(e,s);else{const s=Fe(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Ot(i)}function Ve(t,e){const s=U(t);return!(s===e||!R(s)||tt(s))&&("fixed"===P(s).position||Ve(s,e))}function Ks(t,e){const s=e.get(t);if(s)return s;let i=dt(t,[],!1).filter((t=>R(t)&&"body"!==st(t))),r=null;const n="fixed"===P(t).position;let o=n?U(t):t;for(;R(o)&&!tt(o);){const e=P(o),s=se(o);!s&&"fixed"===e.position&&(r=null),(n?!s&&!r:!s&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||mt(o)&&!s&&Ve(t,o))?i=i.filter((t=>t!==o)):r=e,o=U(o)}return e.set(t,i),i}function Js(t){let{element:e,boundary:s,rootBoundary:i,strategy:r}=t;const n=[..."clippingAncestors"===s?oe(e)?[]:Ks(e,this._c):[].concat(s),i],o=n[0],l=n.reduce(((t,s)=>{const i=Ae(e,s,r);return t.top=F(i.top,t.top),t.right=Et(i.right,t.right),t.bottom=Et(i.bottom,t.bottom),t.left=F(i.left,t.left),t}),Ae(e,o,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Zs(t){const{width:e,height:s}=Be(t);return{width:e,height:s}}function Qs(t,e,s){const i=T(e),r=L(e),n="fixed"===s,o=q(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=H(0);if(i||!i&&!n)if(("body"!==st(e)||mt(r))&&(l=Nt(e)),i){const t=q(e,!0,n,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=Ie(r));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Ft(t){return"static"===P(t).position}function Ee(t,e){return T(t)&&"fixed"!==P(t).position?e?e(t):t.offsetParent:null}function qe(t,e){const s=S(t);if(oe(t))return s;if(!T(t)){let e=U(t);for(;e&&!tt(e);){if(R(e)&&!Ft(e))return e;e=U(e)}return s}let i=Ee(t,e);for(;i&&Ws(i)&&Ft(i);)i=Ee(i,e);return i&&tt(i)&&Ft(i)&&!se(i)?s:i||zs(t)||s}const ti=async function(t){const e=this.getOffsetParent||qe,s=this.getDimensions,i=await s(t.floating);return{reference:Qs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ei(t){return"rtl"===P(t).direction}const si={convertOffsetParentRelativeRectToViewportRelativeRect:Vs,getDocumentElement:L,getClippingRect:Js,getOffsetParent:qe,getElementRects:ti,getClientRects:qs,getDimensions:Zs,getScale:J,isElement:R,isRTL:ei};function ii(t,e){let s,i=null;const r=L(t);function n(){var t;clearTimeout(s),null==(t=i)||t.disconnect(),i=null}return function o(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),n();const{left:c,top:h,width:d,height:p}=t.getBoundingClientRect();if(l||e(),!d||!p)return;const u={rootMargin:-xt(h)+"px "+-xt(r.clientWidth-(c+d))+"px "+-xt(r.clientHeight-(h+p))+"px "+-xt(c)+"px",threshold:F(0,Et(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return o();e?o(!1,e):s=setTimeout((()=>{o(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(y,{...u,root:r.ownerDocument})}catch{i=new IntersectionObserver(y,u)}i.observe(t)}(!0),n}function ni(t,e,s,i){void 0===i&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:o="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=ne(t),h=r||n?[...c?dt(c):[],...dt(e)]:[];h.forEach((t=>{r&&t.addEventListener("scroll",s,{passive:!0}),n&&t.addEventListener("resize",s)}));const d=c&&l?ii(c,s):null;let p=-1,u=null;o&&(u=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),s()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?q(t):null;return a&&function e(){const i=q(t);y&&(i.x!==y.x||i.y!==y.y||i.width!==y.width||i.height!==y.height)&&s(),y=i,f=requestAnimationFrame(e)}(),s(),()=>{var t;h.forEach((t=>{r&&t.removeEventListener("scroll",s),n&&t.removeEventListener("resize",s)})),null==d||d(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const oi=Us,ri=js,li=Ns,ci=(t,e,s)=>{const i=new Map,r={platform:si,...s},n={...r.platform,_c:i};return Ms(t,e,{...r,platform:n})};var ai=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,Ht=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?hi(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ai(e,s,n),n};let et=class extends ${constructor(){super(...arguments),this.open=!1}async updated(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=ni(this._dropsummary,this._dropmenu,(async()=>{await ci(this._dropsummary,this._dropmenu,{middleware:[oi(3),li(),ri()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e})=>{Object.assign(this._dropmenu.style,{left:`${t}px`,top:`${e}px`})}))}),{ancestorResize:!0,ancestorScroll:!0,animationFrame:!0,elementResize:!0,layoutShift:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}async disconnectedCallback(){super.disconnectedCallback(),this._cleanup&&this._cleanup()}render(){return m`
			<summary>
				<slot name="summary" @click=${this._toggleOpen}></slot>
			</summary>
			${this.open?m`
						<ly-slider axis="col" part="dropmenu">
							<slot></slot>
						</ly-slider>
				  `:b}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}};et.styles=O`
		:host(:is(ly-dropdown))::part(dropmenu) {
			--bg: var(--clr-background);
            --gap: 0;
			--outln-clr: var(--bg);
            --radius: var(--scale-sm);

            border-radius: var(--radius);
            /*clip-path: inset(0% round var(--radius));*/
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
			/*outline-offset: -0.125rem;*/
			position: absolute;
			width: 100%;
			z-index: 100000;
		}
        
		:host(:is(ly-dropdown)) > ly-slider::-webkit-scrollbar {
            display: none;
        }
	`,Ht([E({type:Boolean,reflect:!0})],et.prototype,"open",2),Ht([Le("summary")],et.prototype,"_dropsummary",2),Ht([Le("ly-slider")],et.prototype,"_dropmenu",2),et=Ht([A("ly-dropdown")],et);const ui=O`
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
`;var di=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,G=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?pi(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&di(e,s,n),n};let k=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let s=null==e?void 0:e.assignedElements();s&&s.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.name&&t.setAttribute("name",this.name),this.name&&t.setAttribute("title",this.name),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return m`
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
		`}setRequiredIcon(){return this.required?m`<ly-icon part="required-icon">asterisk</ly-icon>`:m``}setStatusIcon(){switch(this.status){case"debug":return m`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return m`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return m`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return m`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return m`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return m``}}};k.styles=ui,G([E({type:String})],k.prototype,"label",2),G([E({type:String})],k.prototype,"caption",2),G([E({type:String})],k.prototype,"name",2),G([E({type:Boolean,reflect:!0})],k.prototype,"required",2),G([E({type:"debug"})],k.prototype,"status",2),G([E({type:String})],k.prototype,"type",2),k=G([A("ly-field")],k);var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,yi=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?mi(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&fi(e,s,n),n};let Vt=class extends ${render(){return m` <slot></slot> `}};Vt.styles=O`
		:host {
			display: contents;
		}
	`,Vt=yi([A("ly-fragment")],Vt);const gi=O`
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
`;var vi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Ge=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?xi(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&vi(e,s,n),n};let Pt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return m` <slot></slot> `}};Pt.styles=gi,Ge([E({type:String,reflect:!0})],Pt.prototype,"stacked",2),Pt=Ge([A("ly-layer")],Pt);var re=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(re||{});const bi=O`
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
`,wi=O`
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
`,$i=O`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var _i=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Ut=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Ai(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&_i(e,s,n),n};let Rt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};Rt.styles=bi,Ut([E({type:re,reflect:!0})],Rt.prototype,"axis",2),Rt=Ut([A("ly-flex")],Rt);let qt=class extends ${render(){return m` <slot></slot> `}};qt.styles=wi,qt=Ut([A("ly-grid")],qt);let Gt=class extends ${render(){return m` <slot></slot> `}};Gt.styles=$i,Gt=Ut([A("ly-group")],Gt);const yt=O`
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
`;var Ei=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Ci(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ei(e,s,n),n};let Xt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return m` <slot></slot> `}};Xt.styles=yt,Xt=gt([A("ly-list")],Xt);let Yt=class extends ${render(){return m` <slot></slot> `}};Yt.styles=yt,Yt=gt([A("ly-list-header")],Yt);let Kt=class extends ${render(){return m` <slot></slot> `}};Kt.styles=yt,Kt=gt([A("ly-list-row")],Kt);let Jt=class extends ${render(){return m` <slot></slot> `}};Jt.styles=yt,Jt=gt([A("ly-list-footer")],Jt);let Zt=class extends ${render(){return m` <slot></slot> `}};Zt.styles=yt,Zt=gt([A("ly-list-cell")],Zt);const Si=O`
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
`;var Oi=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Pi(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Oi(e,s,n),n};let Tt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};Tt.styles=Si,Xe([E({type:re,reflect:!0})],Tt.prototype,"axis",2),Tt=Xe([A("ly-slider")],Tt);export{_t as App,N as Check,et as Dropdown,k as Field,Rt as Flex,Vt as Fragment,qt as Grid,Gt as Group,At as Icon,Pt as Layer,Xt as List,Zt as ListCell,Jt as ListFooter,Yt as ListHeader,Kt as ListRow,Tt as Slider};