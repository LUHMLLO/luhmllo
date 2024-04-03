/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=globalThis,ee=N.ShadowRoot&&(void 0===N.ShadyCSS||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ie=new WeakMap;let fe=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ee&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=ie.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ie.set(e,t))}return t}toString(){return this.cssText}};const Ee=t=>new fe("string"==typeof t?t:t+"",void 0,te),g=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new fe(s,t,te)},Se=(t,e)=>{if(ee)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=N.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},re=ee?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ee(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Pe,defineProperty:xe,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:ke,getOwnPropertySymbols:Ue,getPrototypeOf:Te}=Object,m=globalThis,ne=m.trustedTypes,He=ne?ne.emptyScript:"",F=m.reactiveElementPolyfillSupport,k=(t,e)=>t,L={toAttribute(t,e){switch(e){case Boolean:t=t?He:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},se=(t,e)=>!Pe(t,e),oe={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=oe){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&xe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=Oe(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const n=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??oe}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=Te(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,e=[...ke(t),...Ue(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(re(t))}else void 0!==t&&e.push(re(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Se(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:L).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:L;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??se)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[k("elementProperties")]=new Map,S[k("finalized")]=new Map,null==F||F({ReactiveElement:S}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=globalThis,z=U.trustedTypes,le=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,$e="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+v,Re=`<${ye}>`,C=document,T=()=>C.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_e=Array.isArray,De=t=>_e(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),G="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,ae=/>/g,b=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,de=/"/g,ve=/^(?:script|style|textarea|title)$/i,Me=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),f=Me(1),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),pe=new WeakMap,A=C.createTreeWalker(C,129);function me(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==le?le.createHTML(e):e}const je=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=O;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,a=o.exec(s),null!==a);)h=o.lastIndex,o===O?"!--"===a[1]?o=ce:void 0!==a[1]?o=ae:void 0!==a[2]?(ve.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=b):void 0!==a[3]&&(o=b):o===b?">"===a[0]?(o=r??O,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?b:'"'===a[3]?de:he):o===de||o===he?o=b:o===ce||o===ae?o=O:(o=b,r=void 0);const d=o===b&&t[e+1].startsWith("/>")?" ":"";n+=o===O?s+Re:c>=0?(i.push(l),s.slice(0,c)+$e+s.slice(c)+v+d):s+v+(-2===c?e:d)}return[me(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,c]=je(t,e);if(this.el=R.createElement(a,s),A.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=A.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith($e)){const e=c[n++],s=i.getAttribute(t).split(v),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?Le:"?"===o[1]?ze:"@"===o[1]?Be:V}),i.removeAttribute(t)}else t.startsWith(v)&&(l.push({type:6,index:r}),i.removeAttribute(t));if(ve.test(i.tagName)){const t=i.textContent.split(v),e=t.length-1;if(e>0){i.textContent=z?z.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),A.nextNode(),l.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===ye)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(v,t+1));)l.push({type:7,index:r}),t+=v.length-1}r++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function x(t,e,s=t,i){var r,n;if(e===P)return e;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const l=H(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(e=x(t,o._$AS(t,e.values),o,i)),e}class Ne{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??C).importNode(e,!0);A.currentNode=i;let r=A.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new M(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Ie(r,this,t)),this._$AV.push(e),l=s[++o]}n!==(null==l?void 0:l.index)&&(r=A.nextNode(),n++)}return A.currentNode=C,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),H(t)?t===h||null==t||""===t?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):De(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(me(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new Ne(r,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=pe.get(t.strings);return void 0===e&&pe.set(t.strings,e=new R(t)),e}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new M(this.S(T()),this.S(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=x(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=x(this,i[s+o],e,o),l===P&&(l=this._$AH[o]),n||(n=!H(l)||l!==this._$AH[o]),l===h?t=h:t!==h&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Le extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class ze extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Be extends V{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??h)===P)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ie{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const J=U.litHtmlPolyfillSupport;null==J||J(R,M),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.1.2");const We=(t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new M(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=We(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return P}}var ue;u._$litElement$=!0,u.finalized=!0,null==(ue=globalThis.litElementHydrateSupport)||ue.call(globalThis,{LitElement:u});const K=globalThis.litElementPolyfillSupport;null==K||K({LitElement:u}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Ve={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:se},qe=(t=Ve,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function E(t){return(e,s)=>"object"==typeof s?qe(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const Fe=g`
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

		:host(:is(ly-app[layout='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[layout='col'])) {
			flex-direction: column;
		}
	}
`;var Ge=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,ge=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Je(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ge(e,s,n),n};let B=class extends u{constructor(){super(...arguments),this.layout="col"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};B.styles=Fe,ge([E({type:String,reflect:!0})],B.prototype,"layout",2),B=ge([y("ly-app")],B);const Ke=g`
	@layer web-components {
		:host(:is(ly-col)) {
			/* base styles */
			display: flex;
			flex-direction: column;
		}
	}
`;var Ze=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Qe(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ze(e,s,n),n};let Z=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};Z.styles=Ke,Z=Xe([y("ly-col")],Z);const Ye=g`
	@layer web-components {
		:host(:is(ly-grid)) {
			/* local vars */
			--gap: 0rem;
			--max: 1;
			--maxWidth: 1fr;
			--minWidth: clamp(6rem, 16vmin, 24rem);
			--repeat: auto-fill;

			/* base styles */
			display: grid;
			gap: var(--gap);
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		:host(:is(ly-grid[max='2'])) {
			--max: 2;
		}

		:host(:is(ly-grid[max='3'])) {
			--max: 3;
		}

		:host(:is(ly-grid[max='4'])) {
			--max: 4;
		}
	}
`;var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,st=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?tt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&et(e,s,n),n};let Q=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};Q.styles=Ye,Q=st([y("ly-grid")],Q);const it=g`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
		}
	}
`;var rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,ot=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?nt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&rt(e,s,n),n};let X=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};X.styles=it,X=ot([y("ly-group")],X);const lt=g`
	@layer web-components {
		:host(:is(ly-icon)) {
			/* base styles */
			-webkit-user-select: none;
			aspect-ratio: 1;
			flex-shrink: 0;
			font-family: 'Material Symbols Outlined', 'Material Symbols Rounded',
				'Material Symbols Sharp', sans-serif;
			-webkit-font-feature-settings: 'liga';
			font-feature-settings: 'liga';
			font-weight: normal;
			font-size: var(--sttng-iconScale);
			font-style: normal;
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
			height: max-content;
			line-height: 1;
			letter-spacing: normal;
			overflow: clip;
			text-transform: none;
			user-select: none;
			width: max-content;
		}

		:host(:is(ly-icon[solid])) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	}
`;var ct=Object.defineProperty,at=Object.getOwnPropertyDescriptor,be=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?at(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ct(e,s,n),n};let I=class extends u{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};I.styles=lt,be([E({type:Boolean,reflect:!0})],I.prototype,"solid",2),I=be([y("ly-icon")],I);const ht=g`
	@layer web-components {
		:host(:is(ly-layer)) {
			/* local vars */
			--bg: transparent;
			--clr: inherit;
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
		}

		:host(:is(ly-layer[stacked='under'])) {
			z-index: -1;
		}

		:host(:is(ly-layer[stacked='over'])) {
			flex-direction: column;
			z-index: 2;
		}
	}
`;var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Ae=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?pt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&dt(e,s,n),n};let W=class extends u{constructor(){super(...arguments),this.stacked="over"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};W.styles=ht,Ae([E({type:String,reflect:!0})],W.prototype,"stacked",2),W=Ae([y("ly-layer")],W);const Ce=g`
	@layer web-components {
		:host(:is(ly-radio)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			flex-direction: column;
		}
	}
`;var ut=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,q=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?ft(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ut(e,s,n),n};let w=class extends u{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(!this.checked){const t=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return f`
			${this.label?f`<label>${this.label}</label>`:h}
			<ly-icon ?solid="${this.checked}">
				${this.checked?"check_circle":"radio_button_unchecked"}
			</ly-icon>
			${this.checked?f`<slot></slot>`:h}
		`}};w.properties={delegatesFocus:{type:Boolean,reflect:!0}},w.styles=Ce,q([E({type:Boolean,reflect:!0})],w.prototype,"checked",2),q([E({type:String})],w.prototype,"group",2),q([E({type:String})],w.prototype,"label",2),w=q([y("ly-radio")],w);const $t=g`
	@layer web-components {
		:host(:is(ly-row)) {
			/* base styles */
			display: flex;
			flex-direction: row;
		}
	}
`;var yt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?_t(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&yt(e,s,n),n};let Y=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};Y.styles=$t,Y=vt([y("ly-row")],Y);var mt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,we=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?gt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&mt(e,s,n),n};let D=class extends u{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return f`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};D.properties={delegatesFocus:{type:Boolean,reflect:!0}},D.styles=Ce,we([E({type:Boolean,reflect:!0})],D.prototype,"checked",2),D=we([y("ly-switch")],D);export{B as App,Z as Col,Q as Grid,X as Group,I as Icon,W as Layer,w as Radio,Y as Row,D as Switch};