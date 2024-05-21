/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=globalThis,Qt=bt.ShadowRoot&&(void 0===bt.ShadyCSS||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ue=new WeakMap;let Se=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qt&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=ue.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ue.set(e,t))}return t}toString(){return this.cssText}};const Ke=t=>new Se("string"==typeof t?t:t+"",void 0,te),O=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new Se(s,t,te)},Je=(t,e)=>{if(Qt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=bt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},pe=Qt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ke(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ze,defineProperty:Qe,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:ss,getPrototypeOf:is}=Object,M=globalThis,de=M.trustedTypes,os=de?de.emptyScript:"",jt=M.reactiveElementPolyfillSupport,lt=(t,e)=>t,wt={toAttribute(t,e){switch(e){case Boolean:t=t?os:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ee=(t,e)=>!Ze(t,e),fe={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=fe){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Qe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ts(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const r=null==i?void 0:i.call(this);o.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fe}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=is(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,e=[...es(t),...ss(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(pe(t))}else void 0!==t&&e.push(pe(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Je(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:wt).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:wt;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ee)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[lt("elementProperties")]=new Map,K[lt("finalized")]=new Map,null==jt||jt({ReactiveElement:K}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=globalThis,$t=ct.trustedTypes,ye=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Oe="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+D,ns=`<${Pe}>`,I=document,at=()=>I.createComment(""),ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Re=Array.isArray,rs=t=>Re(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Wt="[ \t\n\f\r]",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,ge=/>/g,z=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,xe=/"/g,Te=/^(?:script|style|textarea|title)$/i,ls=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),y=ls(1),Z=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),be=new WeakMap,B=I.createTreeWalker(I,129);function ke(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ye?ye.createHTML(e):e}const cs=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":"",n=rt;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,a=n.exec(s),null!==a);)h=n.lastIndex,n===rt?"!--"===a[1]?n=me:void 0!==a[1]?n=ge:void 0!==a[2]?(Te.test(a[2])&&(o=RegExp("</"+a[2],"g")),n=z):void 0!==a[3]&&(n=z):n===z?">"===a[0]?(n=o??rt,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?z:'"'===a[3]?xe:ve):n===xe||n===ve?n=z:n===me||n===ge?n=rt:(n=z,o=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===rt?s+ns:c>=0?(i.push(l),s.slice(0,c)+Oe+s.slice(c)+D+d):s+D+(-2===c?e:d)}return[ke(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class ut{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,l=this.parts,[a,c]=cs(t,e);if(this.el=ut.createElement(a,s),B.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(Oe)){const e=c[r++],s=i.getAttribute(t).split(D),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?hs:"?"===n[1]?us:"@"===n[1]?ps:kt}),i.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:o}),i.removeAttribute(t));if(Te.test(i.tagName)){const t=i.textContent.split(D),e=t.length-1;if(e>0){i.textContent=$t?$t.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],at()),B.nextNode(),l.push({type:2,index:++o});i.append(t[e],at())}}}else if(8===i.nodeType)if(i.data===Pe)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(D,t+1));)l.push({type:7,index:o}),t+=D.length-1}o++}}static createElement(t,e){const s=I.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){var o,r;if(e===Z)return e;let n=void 0!==i?null==(o=s._$Co)?void 0:o[i]:s._$Cl;const l=ht(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null==(r=null==n?void 0:n._$AO)||r.call(n,!1),void 0===l?n=void 0:(n=new l(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=n:s._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,i)),e}class as{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??I).importNode(e,!0);B.currentNode=i;let o=B.nextNode(),r=0,n=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new dt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ds(o,this,t)),this._$AV.push(e),l=s[++n]}r!==(null==l?void 0:l.index)&&(o=B.nextNode(),r++)}return B.currentNode=I,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class dt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),ht(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):rs(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==b&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ut.createElement(ke(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===o)this._$AH.p(s);else{const t=new as(o,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=be.get(t.strings);return void 0===e&&be.set(t.strings,e=new ut(t)),e}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new dt(this.S(at()),this.S(at()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class kt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!ht(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const i=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=Q(this,i[s+n],e,n),l===Z&&(l=this._$AH[n]),r||(r=!ht(l)||l!==this._$AH[n]),l===b?t=b:t!==b&&(t+=(l??"")+o[n+1]),this._$AH[n]=l}r&&!i&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hs extends kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class us extends kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class ps extends kt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??b)===Z)return;const s=this._$AH,i=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==b&&(s===b||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ds{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const zt=ct.litHtmlPolyfillSupport;null==zt||zt(ut,dt),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.1.3");const fs=(t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let o=i._$litPart$;if(void 0===o){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=o=new dt(e.insertBefore(at(),t),t,void 0,s??{})}return o._$AI(t),o};
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
 */,ys={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ee},ms=(t=ys,e,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function E(t){return(e,s)=>"object"==typeof s?ms(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
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
`;var xs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,De=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?bs(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&xs(e,s,r),r};let _t=class extends ${constructor(){super(...arguments),this.layout="default"}render(){return y` <slot></slot> `}};_t.styles=vs,De([E({type:String,reflect:!0})],_t.prototype,"layout",2),_t=De([A("ly-app")],_t);const ws=O`
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
`;var $s=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Me=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?_s(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&$s(e,s,r),r};let At=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return y` <slot></slot> `}};At.styles=ws,Me([E({type:Boolean,reflect:!0})],At.prototype,"solid",2),At=Me([A("ly-icon")],At);const As=O`
	@layer web-components {
		:host(:is(ly-check)) {
			/* local vars */
			--gap: var(--scale-5xs);

			/* base styles */
			cursor: pointer;
			display: inline-flex;
			flex-direction: column;
			gap: var(--gap);
			height: max-content;
			overflow: clip;
		}

		:host(:is(ly-check):focus-visible){
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
`;var Es=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?Cs(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Es(e,s,r),r};let N=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return y`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?y`<label part="label">${this.label}</label>`:b}
			</ly-flex>
			${this.checked?y`<slot></slot>`:b}
		`}handleVariant(){switch(this.variant){case"checkbox":return y`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return y`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return y`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return y``}}};N.properties={delegatesFocus:{type:Boolean,reflect:!0}},N.styles=As,ft([E({type:Boolean,reflect:!0})],N.prototype,"checked",2),ft([E({type:String,reflect:!0})],N.prototype,"group",2),ft([E({type:String,reflect:!0})],N.prototype,"label",2),ft([E({type:"checkbox",reflect:!0})],N.prototype,"variant",2),N=ft([A("ly-check")],N);const Et=Math.min,F=Math.max,Ct=Math.round,xt=Math.floor,H=t=>({x:t,y:t}),Ss={left:"right",right:"left",bottom:"top",top:"bottom"},Os={start:"end",end:"start"};function we(t,e,s){return F(t,Et(e,s))}function Lt(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function Dt(t){return t.split("-")[1]}function Ne(t){return"x"===t?"y":"x"}function He(t){return"y"===t?"height":"width"}function Mt(t){return["top","bottom"].includes(V(t))?"y":"x"}function Ue(t){return Ne(Mt(t))}function Ps(t,e,s){void 0===s&&(s=!1);const i=Dt(t),o=Ue(t),r=He(o);let n="x"===o?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=St(n)),[n,St(n)]}function Rs(t){const e=St(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,(t=>Os[t]))}function Ts(t,e,s){const i=["left","right"],o=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return s?e?o:i:e?i:o;case"left":case"right":return e?r:n;default:return[]}}function ks(t,e,s,i){const o=Dt(t);let r=Ts(V(t),"start"===s,i);return o&&(r=r.map((t=>t+"-"+o)),e&&(r=r.concat(r.map(It)))),r}function St(t){return t.replace(/left|right|bottom|top/g,(t=>Ss[t]))}function Ls(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ds(t){return"number"!=typeof t?Ls(t):{top:t,right:t,bottom:t,left:t}}function Ot(t){const{x:e,y:s,width:i,height:o}=t;return{width:i,height:o,top:s,left:e,right:e+i,bottom:s+o,x:e,y:s}}function $e(t,e,s){let{reference:i,floating:o}=t;const r=Mt(e),n=Ue(e),l=He(n),a=V(e),c="y"===r,h=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,p=i[l]/2-o[l]/2;let u;switch(a){case"top":u={x:h,y:i.y-o.height};break;case"bottom":u={x:h,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:d};break;case"left":u={x:i.x-o.width,y:d};break;default:u={x:i.x,y:i.y}}switch(Dt(e)){case"start":u[n]-=p*(s&&c?-1:1);break;case"end":u[n]+=p*(s&&c?-1:1)}return u}const Ms=async(t,e,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:n}=s,l=r.filter(Boolean),a=await(null==n.isRTL?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:d}=$e(c,i,a),p=i,u={},f=0;for(let s=0;s<l.length;s++){const{name:r,fn:y}=l[s],{x:m,y:g,data:v,reset:b}=await y({x:h,y:d,initialPlacement:i,placement:p,strategy:o,middlewareData:u,rects:c,platform:n,elements:{reference:t,floating:e}});h=m??h,d=g??d,u={...u,[r]:{...u[r],...v}},b&&f<=50&&(f++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await n.getElementRects({reference:t,floating:e,strategy:o}):b.rects),({x:h,y:d}=$e(c,p,a))),s=-1)}return{x:h,y:d,placement:p,strategy:o,middlewareData:u}};async function je(t,e){var s;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:n,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=Lt(e,t),f=Ds(u),y=l[p?"floating"===d?"reference":"floating":d],m=Ot(await r.getClippingRect({element:null==(s=await(null==r.isElement?void 0:r.isElement(y)))||s?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),g="floating"===d?{x:i,y:o,width:n.floating.width,height:n.floating.height}:n.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),b=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},x=Ot(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(m.top-x.top+f.top)/b.y,bottom:(x.bottom-m.bottom+f.bottom)/b.y,left:(m.left-x.left+f.left)/b.x,right:(x.right-m.right+f.right)/b.x}}const Ns=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:o,middlewareData:r,rects:n,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...m}=Lt(t,e);if(null!=(s=r.arrow)&&s.alignmentOffset)return{};const g=V(o),v=V(l)===l,b=await(null==a.isRTL?void 0:a.isRTL(c.floating)),x=p||(v||!y?[St(l)]:Rs(l));!p&&"none"!==f&&x.push(...ks(l,y,f,b));const w=[l,...x],$=await je(e,m),_=[];let A=(null==(i=r.flip)?void 0:i.overflows)||[];if(h&&_.push($[g]),d){const t=Ps(o,n,b);_.push($[t[0]],$[t[1]])}if(A=[...A,{placement:o,overflows:_}],!_.every((t=>t<=0))){var E,S;const t=((null==(E=r.flip)?void 0:E.index)||0)+1,e=w[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let s=null==(S=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:S.placement;if(!s)switch(u){case"bestFit":{var k;const t=null==(k=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:k[0];t&&(s=t);break}case"initialPlacement":s=l}if(o!==s)return{reset:{placement:s}}}return{}}}};async function Hs(t,e){const{placement:s,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),n=V(s),l=Dt(s),a="y"===Mt(s),c=["left","top"].includes(n)?-1:1,h=r&&a?-1:1,d=Lt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*h,y:p*c}:{x:p*c,y:u*h}}const Us=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:o,y:r,placement:n,middlewareData:l}=e,a=await Hs(e,t);return n===(null==(s=l.offset)?void 0:s.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:o+a.x,y:r+a.y,data:{...a,placement:n}}}}},js=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:t=>{let{x:e,y:s}=t;return{x:e,y:s}}},...a}=Lt(t,e),c={x:s,y:i},h=await je(e,a),d=Mt(V(o)),p=Ne(d);let u=c[p],f=c[d];if(r){const t="y"===p?"bottom":"right";u=we(u+h["y"===p?"top":"left"],u,u-h[t])}if(n){const t="y"===d?"bottom":"right";f=we(f+h["y"===d?"top":"left"],f,f-h[t])}const y=l.fn({...e,[p]:u,[d]:f});return{...y,data:{x:y.x-s,y:y.y-i}}}}};function st(t){return We(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(We(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function We(t){return t instanceof Node||t instanceof S(t).Node}function R(t){return t instanceof Element||t instanceof S(t).Element}function T(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function _e(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function yt(t){const{overflow:e,overflowX:s,overflowY:i,display:o}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(o)}function Ws(t){return["table","td","th"].includes(st(t))}function se(t){const e=ie(),s=P(t);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!e&&!!s.backdropFilter&&"none"!==s.backdropFilter||!e&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some((t=>(s.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(s.contain||"").includes(t)))}function zs(t){let e=U(t);for(;T(e)&&!tt(e);){if(se(e))return e;e=U(e)}return null}function ie(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(st(t))}function P(t){return S(t).getComputedStyle(t)}function Nt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===st(t))return t;const e=t.assignedSlot||t.parentNode||_e(t)&&t.host||L(t);return _e(e)?e.host:e}function ze(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&yt(e)?e:ze(e)}function pt(t,e,s){var i;void 0===e&&(e=[]),void 0===s&&(s=!0);const o=ze(t),r=o===(null==(i=t.ownerDocument)?void 0:i.body),n=S(o);return r?e.concat(n,n.visualViewport||[],yt(o)?o:[],n.frameElement&&s?pt(n.frameElement):[]):e.concat(o,pt(o,[],s))}function Be(t){const e=P(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=T(t),r=o?t.offsetWidth:s,n=o?t.offsetHeight:i,l=Ct(s)!==r||Ct(i)!==n;return l&&(s=r,i=n),{width:s,height:i,$:l}}function oe(t){return R(t)?t:t.contextElement}function J(t){const e=oe(t);if(!T(e))return H(1);const s=e.getBoundingClientRect(),{width:i,height:o,$:r}=Be(e);let n=(r?Ct(s.width):s.width)/i,l=(r?Ct(s.height):s.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const Bs=H(0);function Fe(t){const e=S(t);return ie()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Bs}function Fs(t,e,s){return void 0===e&&(e=!1),!(!s||e&&s!==S(t))&&e}function q(t,e,s,i){void 0===e&&(e=!1),void 0===s&&(s=!1);const o=t.getBoundingClientRect(),r=oe(t);let n=H(1);e&&(i?R(i)&&(n=J(i)):n=J(t));const l=Fs(r,s,i)?Fe(r):H(0);let a=(o.left+l.x)/n.x,c=(o.top+l.y)/n.y,h=o.width/n.x,d=o.height/n.y;if(r){const t=S(r),e=i&&R(i)?S(i):i;let s=t,o=s.frameElement;for(;o&&i&&e!==s;){const t=J(o),e=o.getBoundingClientRect(),i=P(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,n=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,h*=t.x,d*=t.y,a+=r,c+=n,s=S(o),o=s.frameElement}}return Ot({width:h,height:d,x:a,y:c})}const Is=[":popover-open",":modal"];function ne(t){return Is.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Vs(t){let{elements:e,rect:s,offsetParent:i,strategy:o}=t;const r="fixed"===o,n=L(i),l=!!e&&ne(e.floating);if(i===n||l&&r)return s;let a={scrollLeft:0,scrollTop:0},c=H(1);const h=H(0),d=T(i);if((d||!d&&!r)&&(("body"!==st(i)||yt(n))&&(a=Nt(i)),T(i))){const t=q(i);c=J(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-a.scrollLeft*c.x+h.x,y:s.y*c.y-a.scrollTop*c.y+h.y}}function qs(t){return Array.from(t.getClientRects())}function Ie(t){return q(L(t)).left+Nt(t).scrollLeft}function Gs(t){const e=L(t),s=Nt(t),i=t.ownerDocument.body,o=F(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=F(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+Ie(t);const l=-s.scrollTop;return"rtl"===P(i).direction&&(n+=F(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:n,y:l}}function Xs(t,e){const s=S(t),i=L(t),o=s.visualViewport;let r=i.clientWidth,n=i.clientHeight,l=0,a=0;if(o){r=o.width,n=o.height;const t=ie();(!t||t&&"fixed"===e)&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:n,x:l,y:a}}function Ys(t,e){const s=q(t,!0,"fixed"===e),i=s.top+t.clientTop,o=s.left+t.clientLeft,r=T(t)?J(t):H(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}function Ae(t,e,s){let i;if("viewport"===e)i=Xs(t,s);else if("document"===e)i=Gs(L(t));else if(R(e))i=Ys(e,s);else{const s=Fe(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Ot(i)}function Ve(t,e){const s=U(t);return!(s===e||!R(s)||tt(s))&&("fixed"===P(s).position||Ve(s,e))}function Ks(t,e){const s=e.get(t);if(s)return s;let i=pt(t,[],!1).filter((t=>R(t)&&"body"!==st(t))),o=null;const r="fixed"===P(t).position;let n=r?U(t):t;for(;R(n)&&!tt(n);){const e=P(n),s=se(n);!s&&"fixed"===e.position&&(o=null),(r?!s&&!o:!s&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||yt(n)&&!s&&Ve(t,n))?i=i.filter((t=>t!==n)):o=e,n=U(n)}return e.set(t,i),i}function Js(t){let{element:e,boundary:s,rootBoundary:i,strategy:o}=t;const r=[..."clippingAncestors"===s?ne(e)?[]:Ks(e,this._c):[].concat(s),i],n=r[0],l=r.reduce(((t,s)=>{const i=Ae(e,s,o);return t.top=F(i.top,t.top),t.right=Et(i.right,t.right),t.bottom=Et(i.bottom,t.bottom),t.left=F(i.left,t.left),t}),Ae(e,n,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Zs(t){const{width:e,height:s}=Be(t);return{width:e,height:s}}function Qs(t,e,s){const i=T(e),o=L(e),r="fixed"===s,n=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=H(0);if(i||!i&&!r)if(("body"!==st(e)||yt(o))&&(l=Nt(e)),i){const t=q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else o&&(a.x=Ie(o));return{x:n.left+l.scrollLeft-a.x,y:n.top+l.scrollTop-a.y,width:n.width,height:n.height}}function Ft(t){return"static"===P(t).position}function Ee(t,e){return T(t)&&"fixed"!==P(t).position?e?e(t):t.offsetParent:null}function qe(t,e){const s=S(t);if(ne(t))return s;if(!T(t)){let e=U(t);for(;e&&!tt(e);){if(R(e)&&!Ft(e))return e;e=U(e)}return s}let i=Ee(t,e);for(;i&&Ws(i)&&Ft(i);)i=Ee(i,e);return i&&tt(i)&&Ft(i)&&!se(i)?s:i||zs(t)||s}const ti=async function(t){const e=this.getOffsetParent||qe,s=this.getDimensions,i=await s(t.floating);return{reference:Qs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ei(t){return"rtl"===P(t).direction}const si={convertOffsetParentRelativeRectToViewportRelativeRect:Vs,getDocumentElement:L,getClippingRect:Js,getOffsetParent:qe,getElementRects:ti,getClientRects:qs,getDimensions:Zs,getScale:J,isElement:R,isRTL:ei};function ii(t,e){let s,i=null;const o=L(t);function r(){var t;clearTimeout(s),null==(t=i)||t.disconnect(),i=null}return function n(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:h,width:d,height:p}=t.getBoundingClientRect();if(l||e(),!d||!p)return;const u={rootMargin:-xt(h)+"px "+-xt(o.clientWidth-(c+d))+"px "+-xt(o.clientHeight-(h+p))+"px "+-xt(c)+"px",threshold:F(0,Et(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return n();e?n(!1,e):s=setTimeout((()=>{n(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(y,{...u,root:o.ownerDocument})}catch{i=new IntersectionObserver(y,u)}i.observe(t)}(!0),r}function oi(t,e,s,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=oe(t),h=o||r?[...c?pt(c):[],...pt(e)]:[];h.forEach((t=>{o&&t.addEventListener("scroll",s,{passive:!0}),r&&t.addEventListener("resize",s)}));const d=c&&l?ii(c,s):null;let p=-1,u=null;n&&(u=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),s()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?q(t):null;return a&&function e(){const i=q(t);y&&(i.x!==y.x||i.y!==y.y||i.width!==y.width||i.height!==y.height)&&s(),y=i,f=requestAnimationFrame(e)}(),s(),()=>{var t;h.forEach((t=>{o&&t.removeEventListener("scroll",s),r&&t.removeEventListener("resize",s)})),null==d||d(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const ni=Us,ri=js,li=Ns,ci=(t,e,s)=>{const i=new Map,o={platform:si,...s},r={...o.platform,_c:i};return Ms(t,e,{...o,platform:r})},ai=O`
	@layer web-components {
	}
`;var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,Ht=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?ui(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&hi(e,s,r),r};let et=class extends ${constructor(){super(...arguments),this.open=!1}async firstUpdated(){}async updated(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=oi(this._dropsummary,this._dropmenu,(async()=>{await ci(this._dropsummary,this._dropmenu,{middleware:[ni(3),li(),ri()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e})=>{Object.assign(this._dropmenu.style,{left:`${t}px`,top:`${e}px`})}))}),{ancestorResize:!0,ancestorScroll:!0,animationFrame:!0,elementResize:!0,layoutShift:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}async disconnectedCallback(){super.disconnectedCallback(),this._cleanup&&this._cleanup()}render(){return y`
			<slot name="summary" @click=${this._toggleOpen}></slot>
			${this.open?y`
						<ly-group>
							<slot></slot>
						</ly-group>
				  `:b}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}};et.styles=ai,Ht([E({type:Boolean,reflect:!0})],et.prototype,"open",2),Ht([Le("summary")],et.prototype,"_dropsummary",2),Ht([Le("ly-group")],et.prototype,"_dropmenu",2),et=Ht([A("ly-dropdown")],et);const pi=O`
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
			outline-color: var(--clr-debug) !important;
		}

		:host(:is(ly-field)[status='error'])
			::slotted(:where(input, select, textarea)) {
			outline-color: var(--clr-error) !important;
		}

		:host(:is(ly-field)[status='info'])
			::slotted(:where(input, select, textarea)) {
			outline-color: var(--clr-info) !important;
		}

		:host(:is(ly-field)[status='success'])
			::slotted(:where(input, select, textarea)) {
			outline-color: var(--clr-success) !important;
		}

		:host(:is(ly-field)[status='warning'])
			::slotted(:where(input, select, textarea)) {
			outline-color: var(--clr-warning) !important;
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
`;var di=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,G=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?fi(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&di(e,s,r),r};let k=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let s=null==e?void 0:e.assignedElements();s&&s.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.name&&t.setAttribute("name",this.name),this.name&&t.setAttribute("title",this.name),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return y`
			${this.label?y`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:b}

			<slot></slot>

			${this.caption?y`
						<ly-flex axis="row" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text" html>${this.caption}</small>
						</ly-flex>
				  `:b}
		`}setRequiredIcon(){return this.required?y`<ly-icon part="required-icon">asterisk</ly-icon>`:y``}setStatusIcon(){switch(this.status){case"debug":return y`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return y`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return y`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return y`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return y`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return y``}}};k.styles=pi,G([E({type:String})],k.prototype,"label",2),G([E({type:String})],k.prototype,"caption",2),G([E({type:String})],k.prototype,"name",2),G([E({type:Boolean,reflect:!0})],k.prototype,"required",2),G([E({type:"debug"})],k.prototype,"status",2),G([E({type:String})],k.prototype,"type",2),k=G([A("ly-field")],k);var yi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,gi=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?mi(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&yi(e,s,r),r};let Vt=class extends ${render(){return y` <slot></slot> `}};Vt.styles=O`
		:host {
			display: contents;
		}
	`,Vt=gi([A("ly-fragment")],Vt);const vi=O`
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
`;var xi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,Ge=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?bi(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&xi(e,s,r),r};let Pt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return y` <slot></slot> `}};Pt.styles=vi,Ge([E({type:String,reflect:!0})],Pt.prototype,"stacked",2),Pt=Ge([A("ly-layer")],Pt);var re=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(re||{});const wi=O`
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
`,$i=O`
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
`,_i=O`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var Ai=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ut=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?Ei(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ai(e,s,r),r};let Rt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return y` <slot></slot> `}};Rt.styles=wi,Ut([E({type:re,reflect:!0})],Rt.prototype,"axis",2),Rt=Ut([A("ly-flex")],Rt);let qt=class extends ${render(){return y` <slot></slot> `}};qt.styles=$i,qt=Ut([A("ly-grid")],qt);let Gt=class extends ${render(){return y` <slot></slot> `}};Gt.styles=_i,Gt=Ut([A("ly-group")],Gt);const mt=O`
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
`;var Ci=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?Si(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ci(e,s,r),r};let Xt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return y` <slot></slot> `}};Xt.styles=mt,Xt=gt([A("ly-list")],Xt);let Yt=class extends ${render(){return y` <slot></slot> `}};Yt.styles=mt,Yt=gt([A("ly-list-header")],Yt);let Kt=class extends ${render(){return y` <slot></slot> `}};Kt.styles=mt,Kt=gt([A("ly-list-row")],Kt);let Jt=class extends ${render(){return y` <slot></slot> `}};Jt.styles=mt,Jt=gt([A("ly-list-footer")],Jt);let Zt=class extends ${render(){return y` <slot></slot> `}};Zt.styles=mt,Zt=gt([A("ly-list-cell")],Zt);const Oi=O`
	@layer web-components {
		:host(:is(ly-slider)) {
			/* local vars */
			--display: grid;
			--gap: var(--scale-2xl);
			--padding: 0;

			/* base styles */
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
`;var Pi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?Ri(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Pi(e,s,r),r};let Tt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return y` <slot></slot> `}};Tt.styles=Oi,Xe([E({type:re,reflect:!0})],Tt.prototype,"axis",2),Tt=Xe([A("ly-slider")],Tt);export{_t as App,N as Check,et as Dropdown,k as Field,Rt as Flex,Vt as Fragment,qt as Grid,Gt as Group,At as Icon,Pt as Layer,Xt as List,Zt as ListCell,Jt as ListFooter,Yt as ListHeader,Kt as ListRow,Tt as Slider};