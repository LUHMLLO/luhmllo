/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=globalThis,ce=B.ShadowRoot&&(void 0===B.ShadyCSS||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),ue=new WeakMap;let Ae=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ce&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=ue.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ue.set(e,t))}return t}toString(){return this.cssText}};const Ne=t=>new Ae("string"==typeof t?t:t+"",void 0,he),v=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new Ae(s,t,he)},De=(t,e)=>{if(ce)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),r=B.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}},ye=ce?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ne(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Le,defineProperty:je,getOwnPropertyDescriptor:Me,getOwnPropertyNames:ze,getOwnPropertySymbols:Ie,getPrototypeOf:Be}=Object,x=globalThis,fe=x.trustedTypes,We=fe?fe.emptyScript:"",X=x.reactiveElementPolyfillSupport,T=(t,e)=>t,W={toAttribute(t,e){switch(e){case Boolean:t=t?We:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},pe=(t,e)=>!Le(t,e),ge={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ge){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&je(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=Me(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==r?void 0:r.call(this)},set(e){const o=null==r?void 0:r.call(this);i.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ge}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Be(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,e=[...ze(t),...Ie(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(ye(t))}else void 0!==t&&e.push(ye(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:W).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var s;const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:W;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??pe)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[T("elementProperties")]=new Map,C[T("finalized")]=new Map,null==X||X({ReactiveElement:C}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=globalThis,q=H.trustedTypes,ve=q?q.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ee="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,Se="?"+b,qe=`<${Se}>`,S=document,R=()=>S.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Pe=Array.isArray,Fe=t=>Pe(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Y="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,$e=/>/g,A=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,be=/"/g,Ce=/^(?:script|style|textarea|title)$/i,Ve=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),a=Ve(1),O=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),xe=new WeakMap,E=S.createTreeWalker(S,129);function Oe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ve?ve.createHTML(e):e}const Ge=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":"",n=U;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,a=n.exec(s),null!==a);)h=n.lastIndex,n===U?"!--"===a[1]?n=me:void 0!==a[1]?n=$e:void 0!==a[2]?(Ce.test(a[2])&&(i=RegExp("</"+a[2],"g")),n=A):void 0!==a[3]&&(n=A):n===A?">"===a[0]?(n=i??U,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?A:'"'===a[3]?be:_e):n===be||n===_e?n=A:n===me||n===$e?n=U:(n=A,i=void 0);const d=n===A&&t[e+1].startsWith("/>")?" ":"";o+=n===U?s+qe:c>=0?(r.push(l),s.slice(0,c)+Ee+s.slice(c)+b+d):s+b+(-2===c?e:d)}return[Oe(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),r]};class D{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const n=t.length-1,l=this.parts,[a,c]=Ge(t,e);if(this.el=D.createElement(a,s),E.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(Ee)){const e=c[o++],s=r.getAttribute(t).split(b),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:i,name:n[2],strings:s,ctor:"."===n[1]?Ke:"?"===n[1]?Ze:"@"===n[1]?Qe:Z}),r.removeAttribute(t)}else t.startsWith(b)&&(l.push({type:6,index:i}),r.removeAttribute(t));if(Ce.test(r.tagName)){const t=r.textContent.split(b),e=t.length-1;if(e>0){r.textContent=q?q.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],R()),E.nextNode(),l.push({type:2,index:++i});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===Se)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(b,t+1));)l.push({type:7,index:i}),t+=b.length-1}i++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function k(t,e,s=t,r){var i,o;if(e===O)return e;let n=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl;const l=N(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null==(o=null==n?void 0:n._$AO)||o.call(n,!1),void 0===l?n=void 0:(n=new l(t),n._$AT(t,s,r)),void 0!==r?(s._$Co??(s._$Co=[]))[r]=n:s._$Cl=n),void 0!==n&&(e=k(t,n._$AS(t,e.values),n,r)),e}class Je{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((null==t?void 0:t.creationScope)??S).importNode(e,!0);E.currentNode=r;let i=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new L(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new Xe(i,this,t)),this._$AV.push(e),l=s[++n]}o!==(null==l?void 0:l.index)&&(i=E.nextNode(),o++)}return E.currentNode=S,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class L{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),N(t)?t===p||null==t||""===t?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==O&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Fe(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=D.createElement(Oe(r.h,r.h[0]),this.options)),r);if((null==(e=this._$AH)?void 0:e._$AD)===i)this._$AH.p(s);else{const t=new Je(i,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=xe.get(t.strings);return void 0===e&&xe.set(t.strings,e=new D(t)),e}k(t){Pe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new L(this.S(R()),this.S(R()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=k(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const r=t;let n,l;for(t=i[0],n=0;n<i.length-1;n++)l=k(this,r[s+n],e,n),l===O&&(l=this._$AH[n]),o||(o=!N(l)||l!==this._$AH[n]),l===p?t=p:t!==p&&(t+=(l??"")+i[n+1]),this._$AH[n]=l}o&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ke extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ze extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Qe extends Z{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??p)===O)return;const s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Xe{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const ee=H.litHtmlPolyfillSupport;null==ee||ee(D,L),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.1.3");const Ye=(t,e,s)=>{const r=(null==s?void 0:s.renderBefore)??e;let i=r._$litPart$;if(void 0===i){const t=(null==s?void 0:s.renderBefore)??null;r._$litPart$=i=new L(e.insertBefore(R(),t),t,void 0,s??{})}return i._$AI(t),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ye(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return O}}var we;u._$litElement$=!0,u.finalized=!0,null==(we=globalThis.litElementHydrateSupport)||we.call(globalThis,{LitElement:u});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:u}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const g=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,et={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:pe},tt=(t=et,e,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];e.call(this,s),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function f(t){return(e,s)=>"object"==typeof s?tt(t,e,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const st=v`
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
			[expand-start] minmax(1.5rem, 1fr) [contain-start] minmax(0px, var(--prefers-containerWidth)) [contain-end] minmax(1.5rem, 1fr) [expand-end];
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
			padding-inline: max(((100dvw - var(--prefers-containerWidth)) / 2), var(--gap)) !important;
		}

		:host(:is(ly-app[layout='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[layout='col'])) {
			flex-direction: column;
		}
	}
`;var rt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,ke=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?it(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&rt(e,s,o),o};let F=class extends u{constructor(){super(...arguments),this.layout="default"}render(){return a` <slot></slot> `}};F.styles=st,ke([f({type:String,reflect:!0})],F.prototype,"layout",2),F=ke([g("ly-app")],F);const ot=v`
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
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,P=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?lt(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&nt(e,s,o),o},Ue=(t=>(t[t.debug=0]="debug",t[t.error=1]="error",t[t.info=2]="info",t[t.success=3]="success",t[t.warning=4]="warning",t))(Ue||{});let $=class extends u{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}firstUpdated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let s=null==e?void 0:e.assignedElements();s&&s.forEach((t=>{t.setAttribute("name",this.name),t.setAttribute("title",this.name),t.setAttribute("type",this.type)}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return a`
			${this.label?a`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:p}

			<slot></slot>

			${this.caption?a`
						<ly-flex axis="row" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text">${this.caption}</small>
						</ly-flex>
				  `:p}
		`}setRequiredIcon(){return this.required?a`<ly-icon part="required-icon">asterisk</ly-icon>`:a``}setStatusIcon(){switch(this.status){case"debug":return a`<ly-icon>bug_report</ly-icon>`;case"error":return a`<ly-icon>report</ly-icon>`;case"info":return a`<ly-icon>info</ly-icon>`;case"success":return a`<ly-icon>check</ly-icon>`;case"warning":return a`<ly-icon>emergency_home</ly-icon>`;default:return a``}}};$.styles=ot,P([f({type:String,reflect:!0})],$.prototype,"label",2),P([f({type:String,reflect:!0})],$.prototype,"caption",2),P([f({type:String,reflect:!0})],$.prototype,"name",2),P([f({type:Boolean,reflect:!0})],$.prototype,"required",2),P([f({type:Ue,reflect:!0})],$.prototype,"status",2),P([f({type:String,reflect:!0})],$.prototype,"type",2),$=P([g("ly-field")],$);const at=v`
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
`;var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Te=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?ht(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ct(e,s,o),o};let V=class extends u{constructor(){super(...arguments),this.solid=!1}render(){return a` <slot></slot> `}};V.styles=at,Te([f({type:Boolean,reflect:!0})],V.prototype,"solid",2),V=Te([g("ly-icon")],V);const pt=v`
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
`;var dt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,j=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?ut(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&dt(e,s,o),o};let w=class extends u{constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return a`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?a`<label part="label">${this.label}</label>`:p}
			</ly-flex>
			${this.checked?a`<slot></slot>`:p}
		`}handleVariant(){switch(this.variant){case"checkbox":return a`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return a`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return a`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return a``}}};w.properties={delegatesFocus:{type:Boolean,reflect:!0}},w.styles=pt,j([f({type:Boolean,reflect:!0})],w.prototype,"checked",2),j([f({type:String,reflect:!0})],w.prototype,"group",2),j([f({type:String,reflect:!0})],w.prototype,"label",2),j([f({type:"checkbox",reflect:!0})],w.prototype,"variant",2),w=j([g("ly-check")],w);const yt=v`
	@layer web-components {
		:host(:is(ly-layer)) {
			/* local vars */
			--bg: transparent;
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
`;var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,He=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?gt(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ft(e,s,o),o};let G=class extends u{constructor(){super(...arguments),this.stacked="over"}render(){return a` <slot></slot> `}};G.styles=yt,He([f({type:String,reflect:!0})],G.prototype,"stacked",2),G=He([g("ly-layer")],G);var de=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(de||{});const vt=v`
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
`,mt=v`
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
			grid-template-columns: [expand-start] minmax(1.5rem, 1fr) [contain-start] minmax(
					0px,
					var(--prefers-containerWidth)
				) [contain-end] minmax(1.5rem, 1fr) [expand-end];
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
			padding-inline: max(((100dvw - var(--prefers-containerWidth)) / 2), var(--gap)) !important;
		}
	}
`,$t=v`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var _t=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,Q=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?bt(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&_t(e,s,o),o};let J=class extends u{constructor(){super(...arguments),this.axis="row"}render(){return a` <slot></slot> `}};J.styles=vt,Q([f({type:de,reflect:!0})],J.prototype,"axis",2),J=Q([g("ly-flex")],J);let se=class extends u{render(){return a` <slot></slot> `}};se.styles=mt,se=Q([g("ly-grid")],se);let re=class extends u{render(){return a` <slot></slot> `}};re.styles=$t,re=Q([g("ly-group")],re);const M=v`
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
`;var xt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,z=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?wt(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&xt(e,s,o),o};let ie=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return a` <slot></slot> `}};ie.styles=M,ie=z([g("ly-list")],ie);let oe=class extends u{render(){return a` <slot></slot> `}};oe.styles=M,oe=z([g("ly-list-header")],oe);let ne=class extends u{render(){return a` <slot></slot> `}};ne.styles=M,ne=z([g("ly-list-row")],ne);let le=class extends u{render(){return a` <slot></slot> `}};le.styles=M,le=z([g("ly-list-footer")],le);let ae=class extends u{render(){return a` <slot></slot> `}};ae.styles=M,ae=z([g("ly-list-cell")],ae);const At=v`
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
`;var Et=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Re=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?St(e,s):e,n=t.length-1;n>=0;n--)(i=t[n])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&Et(e,s,o),o};let K=class extends u{constructor(){super(...arguments),this.axis="row"}render(){return a` <slot></slot> `}};K.styles=At,Re([f({type:de,reflect:!0})],K.prototype,"axis",2),K=Re([g("ly-slider")],K);export{F as App,w as Check,$ as Field,J as Flex,se as Grid,re as Group,V as Icon,G as Layer,ie as List,ae as ListCell,le as ListFooter,oe as ListHeader,ne as ListRow,K as Slider};