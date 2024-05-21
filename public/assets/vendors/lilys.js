/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt=globalThis,te=wt.ShadowRoot&&(void 0===wt.ShadyCSS||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),de=new WeakMap;let Oe=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(te&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=de.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&de.set(e,t))}return t}toString(){return this.cssText}};const Je=t=>new Oe("string"==typeof t?t:t+"",void 0,ee),O=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new Oe(s,t,ee)},Ze=(t,e)=>{if(te)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=wt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},pe=te?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Je(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Qe,defineProperty:ts,getOwnPropertyDescriptor:es,getOwnPropertyNames:ss,getOwnPropertySymbols:is,getPrototypeOf:os}=Object,M=globalThis,fe=M.trustedTypes,ns=fe?fe.emptyScript:"",jt=M.reactiveElementPolyfillSupport,rt=(t,e)=>t,$t={toAttribute(t,e){switch(e){case Boolean:t=t?ns:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},se=(t,e)=>!Qe(t,e),me={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=me){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&ts(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=es(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const o=null==i?void 0:i.call(this);n.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??me}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=os(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const t=this.properties,e=[...ss(t),...is(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(pe(t))}else void 0!==t&&e.push(pe(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:$t).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:$t;this._$Em=n,this[n]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??se)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[rt("elementProperties")]=new Map,K[rt("finalized")]=new Map,null==jt||jt({ReactiveElement:K}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=globalThis,_t=lt.trustedTypes,ye=_t?_t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pe="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+D,rs=`<${Re}>`,I=document,ct=()=>I.createComment(""),at=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Te=Array.isArray,ls=t=>Te(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Wt="[ \t\n\f\r]",nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,ve=/>/g,z=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,be=/"/g,ke=/^(?:script|style|textarea|title)$/i,cs=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),m=cs(1),Z=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),we=new WeakMap,B=I.createTreeWalker(I,129);function Le(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ye?ye.createHTML(e):e}const as=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=nt;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(r.lastIndex=h,a=r.exec(s),null!==a);)h=r.lastIndex,r===nt?"!--"===a[1]?r=ge:void 0!==a[1]?r=ve:void 0!==a[2]?(ke.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=z):void 0!==a[3]&&(r=z):r===z?">"===a[0]?(r=n??nt,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?z:'"'===a[3]?be:xe):r===be||r===xe?r=z:r===ge||r===ve?r=nt:(r=z,n=void 0);const d=r===z&&t[e+1].startsWith("/>")?" ":"";o+=r===nt?s+rs:c>=0?(i.push(l),s.slice(0,c)+Pe+s.slice(c)+D+d):s+D+(-2===c?e:d)}return[Le(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class ht{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,c]=as(t,e);if(this.el=ht.createElement(a,s),B.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(Pe)){const e=c[o++],s=i.getAttribute(t).split(D),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?us:"?"===r[1]?ds:"@"===r[1]?ps:Lt}),i.removeAttribute(t)}else t.startsWith(D)&&(l.push({type:6,index:n}),i.removeAttribute(t));if(ke.test(i.tagName)){const t=i.textContent.split(D),e=t.length-1;if(e>0){i.textContent=_t?_t.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],ct()),B.nextNode(),l.push({type:2,index:++n});i.append(t[e],ct())}}}else if(8===i.nodeType)if(i.data===Re)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(D,t+1));)l.push({type:7,index:n}),t+=D.length-1}n++}}static createElement(t,e){const s=I.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){var n,o;if(e===Z)return e;let r=void 0!==i?null==(n=s._$Co)?void 0:n[i]:s._$Cl;const l=at(e)?void 0:e._$litDirective$;return(null==r?void 0:r.constructor)!==l&&(null==(o=null==r?void 0:r._$AO)||o.call(r,!1),void 0===l?r=void 0:(r=new l(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,i)),e}class hs{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??I).importNode(e,!0);B.currentNode=i;let n=B.nextNode(),o=0,r=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new pt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new fs(n,this,t)),this._$AV.push(e),l=s[++r]}o!==(null==l?void 0:l.index)&&(n=B.nextNode(),o++)}return B.currentNode=I,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class pt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),at(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ls(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==b&&at(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ht.createElement(Le(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===n)this._$AH.p(s);else{const t=new hs(n,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=we.get(t.strings);return void 0===e&&we.set(t.strings,e=new ht(t)),e}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new pt(this.S(ct()),this.S(ct()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Q(this,t,e,0),o=!at(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=Q(this,i[s+r],e,r),l===Z&&(l=this._$AH[r]),o||(o=!at(l)||l!==this._$AH[r]),l===b?t=b:t!==b&&(t+=(l??"")+n[r+1]),this._$AH[r]=l}o&&!i&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class us extends Lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class ds extends Lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class ps extends Lt{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??b)===Z)return;const s=this._$AH,i=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==b&&(s===b||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class fs{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const zt=lt.litHtmlPolyfillSupport;null==zt||zt(ht,pt),(lt.litHtmlVersions??(lt.litHtmlVersions=[])).push("3.1.3");const ms=(t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let n=i._$litPart$;if(void 0===n){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=n=new pt(e.insertBefore(ct(),t),t,void 0,s??{})}return n._$AI(t),n};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ms(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Z}}var Se;$._$litElement$=!0,$.finalized=!0,null==(Se=globalThis.litElementHydrateSupport)||Se.call(globalThis,{LitElement:$});const Bt=globalThis.litElementPolyfillSupport;null==Bt||Bt({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
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
 */,ys={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:se},gs=(t=ys,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function E(t){return(e,s)=>"object"==typeof s?gs(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function De(t,e){return(e,s,i)=>vs(e,s,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}const xs=O`
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
`;var bs=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,Me=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?ws(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&bs(e,s,o),o};let At=class extends ${constructor(){super(...arguments),this.layout="default"}render(){return m` <slot></slot> `}};At.styles=xs,Me([E({type:String,reflect:!0})],At.prototype,"layout",2),At=Me([A("ly-app")],At);const $s=O`
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
`;var _s=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Ne=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?As(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&_s(e,s,o),o};let Et=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return m` <slot></slot> `}};Et.styles=$s,Ne([E({type:Boolean,reflect:!0})],Et.prototype,"solid",2),Et=Ne([A("ly-icon")],Et);const Es=O`
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
`;var Cs=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?Ss(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&Cs(e,s,o),o};let N=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return m`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?m`<label part="label">${this.label}</label>`:b}
			</ly-flex>
			${this.checked?m`<slot></slot>`:b}
		`}handleVariant(){switch(this.variant){case"checkbox":return m`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return m`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return m`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return m``}}};N.properties={delegatesFocus:{type:Boolean,reflect:!0}},N.styles=Es,ft([E({type:Boolean,reflect:!0})],N.prototype,"checked",2),ft([E({type:String,reflect:!0})],N.prototype,"group",2),ft([E({type:String,reflect:!0})],N.prototype,"label",2),ft([E({type:"checkbox",reflect:!0})],N.prototype,"variant",2),N=ft([A("ly-check")],N);const Ct=Math.min,F=Math.max,St=Math.round,bt=Math.floor,H=t=>({x:t,y:t}),Os={left:"right",right:"left",bottom:"top",top:"bottom"},Ps={start:"end",end:"start"};function $e(t,e,s){return F(t,Ct(e,s))}function Dt(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function Mt(t){return t.split("-")[1]}function He(t){return"x"===t?"y":"x"}function Ue(t){return"y"===t?"height":"width"}function Nt(t){return["top","bottom"].includes(V(t))?"y":"x"}function je(t){return He(Nt(t))}function Rs(t,e,s){void 0===s&&(s=!1);const i=Mt(t),n=je(t),o=Ue(n);let r="x"===n?i===(s?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[o]>e.floating[o]&&(r=Ot(r)),[r,Ot(r)]}function Ts(t){const e=Ot(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,(t=>Ps[t]))}function ks(t,e,s){const i=["left","right"],n=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return s?e?n:i:e?i:n;case"left":case"right":return e?o:r;default:return[]}}function Ls(t,e,s,i){const n=Mt(t);let o=ks(V(t),"start"===s,i);return n&&(o=o.map((t=>t+"-"+n)),e&&(o=o.concat(o.map(It)))),o}function Ot(t){return t.replace(/left|right|bottom|top/g,(t=>Os[t]))}function Ds(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ms(t){return"number"!=typeof t?Ds(t):{top:t,right:t,bottom:t,left:t}}function Pt(t){const{x:e,y:s,width:i,height:n}=t;return{width:i,height:n,top:s,left:e,right:e+i,bottom:s+n,x:e,y:s}}function _e(t,e,s){let{reference:i,floating:n}=t;const o=Nt(e),r=je(e),l=Ue(r),a=V(e),c="y"===o,h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,p=i[l]/2-n[l]/2;let u;switch(a){case"top":u={x:h,y:i.y-n.height};break;case"bottom":u={x:h,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:d};break;case"left":u={x:i.x-n.width,y:d};break;default:u={x:i.x,y:i.y}}switch(Mt(e)){case"start":u[r]-=p*(s&&c?-1:1);break;case"end":u[r]+=p*(s&&c?-1:1)}return u}const Ns=async(t,e,s)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:r}=s,l=o.filter(Boolean),a=await(null==r.isRTL?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:d}=_e(c,i,a),p=i,u={},f=0;for(let s=0;s<l.length;s++){const{name:o,fn:y}=l[s],{x:m,y:g,data:v,reset:b}=await y({x:h,y:d,initialPlacement:i,placement:p,strategy:n,middlewareData:u,rects:c,platform:r,elements:{reference:t,floating:e}});h=m??h,d=g??d,u={...u,[o]:{...u[o],...v}},b&&f<=50&&(f++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await r.getElementRects({reference:t,floating:e,strategy:n}):b.rects),({x:h,y:d}=_e(c,p,a))),s=-1)}return{x:h,y:d,placement:p,strategy:n,middlewareData:u}};async function We(t,e){var s;void 0===e&&(e={});const{x:i,y:n,platform:o,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=Dt(e,t),f=Ms(u),y=l[p?"floating"===d?"reference":"floating":d],m=Pt(await o.getClippingRect({element:null==(s=await(null==o.isElement?void 0:o.isElement(y)))||s?y:y.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),g="floating"===d?{x:i,y:n,width:r.floating.width,height:r.floating.height}:r.reference,v=await(null==o.getOffsetParent?void 0:o.getOffsetParent(l.floating)),b=await(null==o.isElement?void 0:o.isElement(v))&&await(null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},x=Pt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(m.top-x.top+f.top)/b.y,bottom:(x.bottom-m.bottom+f.bottom)/b.y,left:(m.left-x.left+f.left)/b.x,right:(x.right-m.right+f.right)/b.x}}const Hs=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var s,i;const{placement:n,middlewareData:o,rects:r,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:y=!0,...m}=Dt(t,e);if(null!=(s=o.arrow)&&s.alignmentOffset)return{};const g=V(n),v=V(l)===l,b=await(null==a.isRTL?void 0:a.isRTL(c.floating)),x=p||(v||!y?[Ot(l)]:Ts(l));!p&&"none"!==f&&x.push(...Ls(l,y,f,b));const w=[l,...x],$=await We(e,m),_=[];let A=(null==(i=o.flip)?void 0:i.overflows)||[];if(h&&_.push($[g]),d){const t=Rs(n,r,b);_.push($[t[0]],$[t[1]])}if(A=[...A,{placement:n,overflows:_}],!_.every((t=>t<=0))){var E,S;const t=((null==(E=o.flip)?void 0:E.index)||0)+1,e=w[t];if(e)return{data:{index:t,overflows:A},reset:{placement:e}};let s=null==(S=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:S.placement;if(!s)switch(u){case"bestFit":{var k;const t=null==(k=A.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:k[0];t&&(s=t);break}case"initialPlacement":s=l}if(n!==s)return{reset:{placement:s}}}return{}}}};async function Us(t,e){const{placement:s,platform:i,elements:n}=t,o=await(null==i.isRTL?void 0:i.isRTL(n.floating)),r=V(s),l=Mt(s),a="y"===Nt(s),c=["left","top"].includes(r)?-1:1,h=o&&a?-1:1,d=Dt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*h,y:p*c}:{x:p*c,y:u*h}}const js=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var s,i;const{x:n,y:o,placement:r,middlewareData:l}=e,a=await Us(e,t);return r===(null==(s=l.offset)?void 0:s.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:n+a.x,y:o+a.y,data:{...a,placement:r}}}}},Ws=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:i,placement:n}=e,{mainAxis:o=!0,crossAxis:r=!1,limiter:l={fn:t=>{let{x:e,y:s}=t;return{x:e,y:s}}},...a}=Dt(t,e),c={x:s,y:i},h=await We(e,a),d=Nt(V(n)),p=He(d);let u=c[p],f=c[d];if(o){const t="y"===p?"bottom":"right";u=$e(u+h["y"===p?"top":"left"],u,u-h[t])}if(r){const t="y"===d?"bottom":"right";f=$e(f+h["y"===d?"top":"left"],f,f-h[t])}const y=l.fn({...e,[p]:u,[d]:f});return{...y,data:{x:y.x-s,y:y.y-i}}}}};function et(t){return ze(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(ze(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function ze(t){return t instanceof Node||t instanceof S(t).Node}function R(t){return t instanceof Element||t instanceof S(t).Element}function T(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function Ae(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function mt(t){const{overflow:e,overflowX:s,overflowY:i,display:n}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+s)&&!["inline","contents"].includes(n)}function zs(t){return["table","td","th"].includes(et(t))}function ie(t){const e=oe(),s=P(t);return"none"!==s.transform||"none"!==s.perspective||!!s.containerType&&"normal"!==s.containerType||!e&&!!s.backdropFilter&&"none"!==s.backdropFilter||!e&&!!s.filter&&"none"!==s.filter||["transform","perspective","filter"].some((t=>(s.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(s.contain||"").includes(t)))}function Bs(t){let e=U(t);for(;T(e)&&!tt(e);){if(ie(e))return e;e=U(e)}return null}function oe(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(et(t))}function P(t){return S(t).getComputedStyle(t)}function Ht(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===et(t))return t;const e=t.assignedSlot||t.parentNode||Ae(t)&&t.host||L(t);return Ae(e)?e.host:e}function Be(t){const e=U(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&mt(e)?e:Be(e)}function ut(t,e,s){var i;void 0===e&&(e=[]),void 0===s&&(s=!0);const n=Be(t),o=n===(null==(i=t.ownerDocument)?void 0:i.body),r=S(n);return o?e.concat(r,r.visualViewport||[],mt(n)?n:[],r.frameElement&&s?ut(r.frameElement):[]):e.concat(n,ut(n,[],s))}function Fe(t){const e=P(t);let s=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=T(t),o=n?t.offsetWidth:s,r=n?t.offsetHeight:i,l=St(s)!==o||St(i)!==r;return l&&(s=o,i=r),{width:s,height:i,$:l}}function ne(t){return R(t)?t:t.contextElement}function J(t){const e=ne(t);if(!T(e))return H(1);const s=e.getBoundingClientRect(),{width:i,height:n,$:o}=Fe(e);let r=(o?St(s.width):s.width)/i,l=(o?St(s.height):s.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Fs=H(0);function Ie(t){const e=S(t);return oe()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Fs}function Is(t,e,s){return void 0===e&&(e=!1),!(!s||e&&s!==S(t))&&e}function q(t,e,s,i){void 0===e&&(e=!1),void 0===s&&(s=!1);const n=t.getBoundingClientRect(),o=ne(t);let r=H(1);e&&(i?R(i)&&(r=J(i)):r=J(t));const l=Is(o,s,i)?Ie(o):H(0);let a=(n.left+l.x)/r.x,c=(n.top+l.y)/r.y,h=n.width/r.x,d=n.height/r.y;if(o){const t=S(o),e=i&&R(i)?S(i):i;let s=t,n=s.frameElement;for(;n&&i&&e!==s;){const t=J(n),e=n.getBoundingClientRect(),i=P(n),o=e.left+(n.clientLeft+parseFloat(i.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,h*=t.x,d*=t.y,a+=o,c+=r,s=S(n),n=s.frameElement}}return Pt({width:h,height:d,x:a,y:c})}const Vs=[":popover-open",":modal"];function re(t){return Vs.some((e=>{try{return t.matches(e)}catch{return!1}}))}function qs(t){let{elements:e,rect:s,offsetParent:i,strategy:n}=t;const o="fixed"===n,r=L(i),l=!!e&&re(e.floating);if(i===r||l&&o)return s;let a={scrollLeft:0,scrollTop:0},c=H(1);const h=H(0),d=T(i);if((d||!d&&!o)&&(("body"!==et(i)||mt(r))&&(a=Ht(i)),T(i))){const t=q(i);c=J(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop}return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-a.scrollLeft*c.x+h.x,y:s.y*c.y-a.scrollTop*c.y+h.y}}function Gs(t){return Array.from(t.getClientRects())}function Ve(t){return q(L(t)).left+Ht(t).scrollLeft}function Xs(t){const e=L(t),s=Ht(t),i=t.ownerDocument.body,n=F(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=F(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-s.scrollLeft+Ve(t);const l=-s.scrollTop;return"rtl"===P(i).direction&&(r+=F(e.clientWidth,i.clientWidth)-n),{width:n,height:o,x:r,y:l}}function Ys(t,e){const s=S(t),i=L(t),n=s.visualViewport;let o=i.clientWidth,r=i.clientHeight,l=0,a=0;if(n){o=n.width,r=n.height;const t=oe();(!t||t&&"fixed"===e)&&(l=n.offsetLeft,a=n.offsetTop)}return{width:o,height:r,x:l,y:a}}function Ks(t,e){const s=q(t,!0,"fixed"===e),i=s.top+t.clientTop,n=s.left+t.clientLeft,o=T(t)?J(t):H(1);return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:n*o.x,y:i*o.y}}function Ee(t,e,s){let i;if("viewport"===e)i=Ys(t,s);else if("document"===e)i=Xs(L(t));else if(R(e))i=Ks(e,s);else{const s=Ie(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Pt(i)}function qe(t,e){const s=U(t);return!(s===e||!R(s)||tt(s))&&("fixed"===P(s).position||qe(s,e))}function Js(t,e){const s=e.get(t);if(s)return s;let i=ut(t,[],!1).filter((t=>R(t)&&"body"!==et(t))),n=null;const o="fixed"===P(t).position;let r=o?U(t):t;for(;R(r)&&!tt(r);){const e=P(r),s=ie(r);!s&&"fixed"===e.position&&(n=null),(o?!s&&!n:!s&&"static"===e.position&&n&&["absolute","fixed"].includes(n.position)||mt(r)&&!s&&qe(t,r))?i=i.filter((t=>t!==r)):n=e,r=U(r)}return e.set(t,i),i}function Zs(t){let{element:e,boundary:s,rootBoundary:i,strategy:n}=t;const o=[..."clippingAncestors"===s?re(e)?[]:Js(e,this._c):[].concat(s),i],r=o[0],l=o.reduce(((t,s)=>{const i=Ee(e,s,n);return t.top=F(i.top,t.top),t.right=Ct(i.right,t.right),t.bottom=Ct(i.bottom,t.bottom),t.left=F(i.left,t.left),t}),Ee(e,r,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Qs(t){const{width:e,height:s}=Fe(t);return{width:e,height:s}}function ti(t,e,s){const i=T(e),n=L(e),o="fixed"===s,r=q(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const a=H(0);if(i||!i&&!o)if(("body"!==et(e)||mt(n))&&(l=Ht(e)),i){const t=q(e,!0,o,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else n&&(a.x=Ve(n));return{x:r.left+l.scrollLeft-a.x,y:r.top+l.scrollTop-a.y,width:r.width,height:r.height}}function Ft(t){return"static"===P(t).position}function Ce(t,e){return T(t)&&"fixed"!==P(t).position?e?e(t):t.offsetParent:null}function Ge(t,e){const s=S(t);if(re(t))return s;if(!T(t)){let e=U(t);for(;e&&!tt(e);){if(R(e)&&!Ft(e))return e;e=U(e)}return s}let i=Ce(t,e);for(;i&&zs(i)&&Ft(i);)i=Ce(i,e);return i&&tt(i)&&Ft(i)&&!ie(i)?s:i||Bs(t)||s}const ei=async function(t){const e=this.getOffsetParent||Ge,s=this.getDimensions,i=await s(t.floating);return{reference:ti(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function si(t){return"rtl"===P(t).direction}const ii={convertOffsetParentRelativeRectToViewportRelativeRect:qs,getDocumentElement:L,getClippingRect:Zs,getOffsetParent:Ge,getElementRects:ei,getClientRects:Gs,getDimensions:Qs,getScale:J,isElement:R,isRTL:si};function oi(t,e){let s,i=null;const n=L(t);function o(){var t;clearTimeout(s),null==(t=i)||t.disconnect(),i=null}return function r(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),o();const{left:c,top:h,width:d,height:p}=t.getBoundingClientRect();if(l||e(),!d||!p)return;const u={rootMargin:-bt(h)+"px "+-bt(n.clientWidth-(c+d))+"px "+-bt(n.clientHeight-(h+p))+"px "+-bt(c)+"px",threshold:F(0,Ct(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return r();e?r(!1,e):s=setTimeout((()=>{r(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(y,{...u,root:n.ownerDocument})}catch{i=new IntersectionObserver(y,u)}i.observe(t)}(!0),o}function ni(t,e,s,i){void 0===i&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:r="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=ne(t),h=n||o?[...c?ut(c):[],...ut(e)]:[];h.forEach((t=>{n&&t.addEventListener("scroll",s,{passive:!0}),o&&t.addEventListener("resize",s)}));const d=c&&l?oi(c,s):null;let p=-1,u=null;r&&(u=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),s()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?q(t):null;return a&&function e(){const i=q(t);y&&(i.x!==y.x||i.y!==y.y||i.width!==y.width||i.height!==y.height)&&s(),y=i,f=requestAnimationFrame(e)}(),s(),()=>{var t;h.forEach((t=>{n&&t.removeEventListener("scroll",s),o&&t.removeEventListener("resize",s)})),null==d||d(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const ri=js,li=Ws,ci=Hs,ai=(t,e,s)=>{const i=new Map,n={platform:ii,...s},o={...n.platform,_c:i};return Ns(t,e,{...n,platform:o})};var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,yt=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?ui(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&hi(e,s,o),o};let Vt=class extends ${render(){return m` <slot></slot> `}};Vt.styles=O`
		:host(:is(ly-dropmenu)) {
			position: fixed;
			z-index: 100000;
		}
	`,Vt=yt([A("ly-dropmenu")],Vt);let dt=class extends ${constructor(){super(...arguments),this.open=!1}async updated(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=ni(this._dropsummary,this._dropmenu,(async()=>{await ai(this._dropsummary,this._dropmenu,{middleware:[ri(3),ci(),li()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e})=>{Object.assign(this._dropmenu.style,{left:`${t}px`,top:`${e}px`})}))}),{ancestorResize:!0,ancestorScroll:!0,animationFrame:!0,elementResize:!0,layoutShift:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}async disconnectedCallback(){super.disconnectedCallback(),this._cleanup&&this._cleanup()}render(){return m`
			<summary>
				<slot name="summary" @click=${this._toggleOpen}></slot>
			</summary>
			${this.open?m`
						<ly-dropmenu>
							<slot></slot>
						</ly-dropmenu>
				  `:b}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}};yt([E({type:Boolean,reflect:!0})],dt.prototype,"open",2),yt([De("summary")],dt.prototype,"_dropsummary",2),yt([De("ly-dropmenu")],dt.prototype,"_dropmenu",2),dt=yt([A("ly-dropdown")],dt);const di=O`
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
`;var pi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,G=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?fi(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&pi(e,s,o),o};let k=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let s=null==e?void 0:e.assignedElements();s&&s.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.name&&t.setAttribute("name",this.name),this.name&&t.setAttribute("title",this.name),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return m`
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
		`}setRequiredIcon(){return this.required?m`<ly-icon part="required-icon">asterisk</ly-icon>`:m``}setStatusIcon(){switch(this.status){case"debug":return m`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return m`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return m`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return m`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return m`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return m``}}};k.styles=di,G([E({type:String})],k.prototype,"label",2),G([E({type:String})],k.prototype,"caption",2),G([E({type:String})],k.prototype,"name",2),G([E({type:Boolean,reflect:!0})],k.prototype,"required",2),G([E({type:"debug"})],k.prototype,"status",2),G([E({type:String})],k.prototype,"type",2),k=G([A("ly-field")],k);var mi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,gi=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?yi(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&mi(e,s,o),o};let qt=class extends ${render(){return m` <slot></slot> `}};qt.styles=O`
		:host {
			display: contents;
		}
	`,qt=gi([A("ly-fragment")],qt);const vi=O`
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
`;var xi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?bi(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&xi(e,s,o),o};let Rt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return m` <slot></slot> `}};Rt.styles=vi,Xe([E({type:String,reflect:!0})],Rt.prototype,"stacked",2),Rt=Xe([A("ly-layer")],Rt);var le=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(le||{});const wi=O`
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
`;var Ai=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ut=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?Ei(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&Ai(e,s,o),o};let Tt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};Tt.styles=wi,Ut([E({type:le,reflect:!0})],Tt.prototype,"axis",2),Tt=Ut([A("ly-flex")],Tt);let Gt=class extends ${render(){return m` <slot></slot> `}};Gt.styles=$i,Gt=Ut([A("ly-grid")],Gt);let Xt=class extends ${render(){return m` <slot></slot> `}};Xt.styles=_i,Xt=Ut([A("ly-group")],Xt);const gt=O`
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
`;var Ci=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?Si(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&Ci(e,s,o),o};let Yt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return m` <slot></slot> `}};Yt.styles=gt,Yt=vt([A("ly-list")],Yt);let Kt=class extends ${render(){return m` <slot></slot> `}};Kt.styles=gt,Kt=vt([A("ly-list-header")],Kt);let Jt=class extends ${render(){return m` <slot></slot> `}};Jt.styles=gt,Jt=vt([A("ly-list-row")],Jt);let Zt=class extends ${render(){return m` <slot></slot> `}};Zt.styles=gt,Zt=vt([A("ly-list-footer")],Zt);let Qt=class extends ${render(){return m` <slot></slot> `}};Qt.styles=gt,Qt=vt([A("ly-list-cell")],Qt);const Oi=O`
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
`;var Pi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Ye=(t,e,s,i)=>{for(var n,o=i>1?void 0:i?Ri(e,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i?n(e,s,o):n(o))||o);return i&&o&&Pi(e,s,o),o};let kt=class extends ${constructor(){super(...arguments),this.axis="row"}render(){return m` <slot></slot> `}};kt.styles=Oi,Ye([E({type:le,reflect:!0})],kt.prototype,"axis",2),kt=Ye([A("ly-slider")],kt);export{At as App,N as Check,dt as Dropdown,k as Field,Tt as Flex,qt as Fragment,Gt as Grid,Xt as Group,Et as Icon,Rt as Layer,Yt as List,Qt as ListCell,Zt as ListFooter,Kt as ListHeader,Jt as ListRow,kt as Slider};