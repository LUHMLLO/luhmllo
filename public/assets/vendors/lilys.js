/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=globalThis,he=B.ShadowRoot&&(void 0===B.ShadyCSS||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),ye=new WeakMap;let Ee=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(he&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=ye.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ye.set(e,t))}return t}toString(){return this.cssText}};const Me=t=>new Ee("string"==typeof t?t:t+"",void 0,pe),m=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new Ee(s,t,pe)},Le=(t,e)=>{if(he)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),r=B.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}},fe=he?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Me(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:ze,defineProperty:Ie,getOwnPropertyDescriptor:Be,getOwnPropertyNames:qe,getOwnPropertySymbols:We,getPrototypeOf:Fe}=Object,x=globalThis,ge=x.trustedTypes,Ge=ge?ge.emptyScript:"",Y=x.reactiveElementPolyfillSupport,H=(t,e)=>t,q={toAttribute(t,e){switch(e){case Boolean:t=t?Ge:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},de=(t,e)=>!ze(t,e),me={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:de};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);class O extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=me){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&Ie(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=Be(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==r?void 0:r.call(this)},set(e){const o=null==r?void 0:r.call(this);i.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??me}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Fe(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const t=this.properties,e=[...qe(t),...We(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(fe(t))}else void 0!==t&&e.push(fe(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:q).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var s;const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:q;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??de)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[H("elementProperties")]=new Map,O[H("finalized")]=new Map,null==Y||Y({ReactiveElement:O}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R=globalThis,W=R.trustedTypes,ve=W?W.createPolicy("lit-html",{createHTML:t=>t}):void 0,Se="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+b,Je=`<${Pe}>`,S=document,N=()=>S.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Ce=Array.isArray,Ke=t=>Ce(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),ee="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,_e=/>/g,A=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,xe=/"/g,Oe=/^(?:script|style|textarea|title)$/i,Ve=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),a=Ve(1),U=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),we=new WeakMap,E=S.createTreeWalker(S,129);function Ue(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ve?ve.createHTML(e):e}const Ze=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":"",l=T;for(let e=0;e<s;e++){const s=t[e];let n,a,c=-1,h=0;for(;h<s.length&&(l.lastIndex=h,a=l.exec(s),null!==a);)h=l.lastIndex,l===T?"!--"===a[1]?l=$e:void 0!==a[1]?l=_e:void 0!==a[2]?(Oe.test(a[2])&&(i=RegExp("</"+a[2],"g")),l=A):void 0!==a[3]&&(l=A):l===A?">"===a[0]?(l=i??T,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,n=a[1],l=void 0===a[3]?A:'"'===a[3]?xe:be):l===xe||l===be?l=A:l===$e||l===_e?l=T:(l=A,i=void 0);const d=l===A&&t[e+1].startsWith("/>")?" ":"";o+=l===T?s+Je:c>=0?(r.push(n),s.slice(0,c)+Se+s.slice(c)+b+d):s+b+(-2===c?e:d)}return[Ue(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),r]};class j{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const l=t.length-1,n=this.parts,[a,c]=Ze(t,e);if(this.el=j.createElement(a,s),E.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&n.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(Se)){const e=c[o++],s=r.getAttribute(t).split(b),l=/([.?@])?(.*)/.exec(e);n.push({type:1,index:i,name:l[2],strings:s,ctor:"."===l[1]?Xe:"?"===l[1]?Ye:"@"===l[1]?et:Q}),r.removeAttribute(t)}else t.startsWith(b)&&(n.push({type:6,index:i}),r.removeAttribute(t));if(Oe.test(r.tagName)){const t=r.textContent.split(b),e=t.length-1;if(e>0){r.textContent=W?W.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],N()),E.nextNode(),n.push({type:2,index:++i});r.append(t[e],N())}}}else if(8===r.nodeType)if(r.data===Pe)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(b,t+1));)n.push({type:7,index:i}),t+=b.length-1}i++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function k(t,e,s=t,r){var i,o;if(e===U)return e;let l=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl;const n=D(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==n&&(null==(o=null==l?void 0:l._$AO)||o.call(l,!1),void 0===n?l=void 0:(l=new n(t),l._$AT(t,s,r)),void 0!==r?(s._$Co??(s._$Co=[]))[r]=l:s._$Cl=l),void 0!==l&&(e=k(t,l._$AS(t,e.values),l,r)),e}class Qe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((null==t?void 0:t.creationScope)??S).importNode(e,!0);E.currentNode=r;let i=E.nextNode(),o=0,l=0,n=s[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new M(i,i.nextSibling,this,t):1===n.type?e=new n.ctor(i,n.name,n.strings,this,t):6===n.type&&(e=new tt(i,this,t)),this._$AV.push(e),n=s[++l]}o!==(null==n?void 0:n.index)&&(i=E.nextNode(),o++)}return E.currentNode=S,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),D(t)?t===p||null==t||""===t?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Ke(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=j.createElement(Ue(r.h,r.h[0]),this.options)),r);if((null==(e=this._$AH)?void 0:e._$AD)===i)this._$AH.p(s);else{const t=new Qe(i,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=we.get(t.strings);return void 0===e&&we.set(t.strings,e=new j(t)),e}k(t){Ce(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new M(this.S(N()),this.S(N()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=k(this,t,e,0),o=!D(t)||t!==this._$AH&&t!==U,o&&(this._$AH=t);else{const r=t;let l,n;for(t=i[0],l=0;l<i.length-1;l++)n=k(this,r[s+l],e,l),n===U&&(n=this._$AH[l]),o||(o=!D(n)||n!==this._$AH[l]),n===p?t=p:t!==p&&(t+=(n??"")+i[l+1]),this._$AH[l]=n}o&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xe extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ye extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class et extends Q{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??p)===U)return;const s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const te=R.litHtmlPolyfillSupport;null==te||te(j,M),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.1.3");const st=(t,e,s)=>{const r=(null==s?void 0:s.renderBefore)??e;let i=r._$litPart$;if(void 0===i){const t=(null==s?void 0:s.renderBefore)??null;r._$litPart$=i=new M(e.insertBefore(N(),t),t,void 0,s??{})}return i._$AI(t),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=st(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return U}}var Ae;d._$litElement$=!0,d.finalized=!0,null==(Ae=globalThis.litElementHydrateSupport)||Ae.call(globalThis,{LitElement:d});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:d}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
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
 */,rt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:de},it=(t=rt,e,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];e.call(this,s),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function f(t){return(e,s)=>"object"==typeof s?it(t,e,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ot=m`
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
				[ expand-start] minmax(1rem, 1fr)
				[ contain-start] minmax(0, 64rem) [ contain-end]
				minmax(1rem, 1fr) [ expand-end];
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[layout='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-app[layout='container'])) ::slotted([ignore-container]) {
			grid-column: expand;
		}

		:host(:is(ly-app[layout='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[layout='col'])) {
			flex-direction: column;
		}
	}
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ke=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?lt(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&nt(e,s,o),o};let F=class extends d{constructor(){super(...arguments),this.layout="default"}render(){return a` <slot></slot> `}};F.styles=ot,ke([f({type:String,reflect:!0})],F.prototype,"layout",2),F=ke([g("ly-app")],F);const at=m`
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
`;var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,P=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?ht(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&ct(e,s,o),o},Te=(t=>(t[t.debug=0]="debug",t[t.error=1]="error",t[t.info=2]="info",t[t.success=3]="success",t[t.warning=4]="warning",t))(Te||{});let $=class extends d{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}firstUpdated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let s=null==e?void 0:e.assignedElements();s&&s.forEach((t=>{t.setAttribute("name",this.name),t.setAttribute("title",this.name),t.setAttribute("type",this.type)}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return a`
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
		`}setRequiredIcon(){return this.required?a`<ly-icon part="required-icon">asterisk</ly-icon>`:a``}setStatusIcon(){switch(this.status){case"debug":return a`<ly-icon>bug_report</ly-icon>`;case"error":return a`<ly-icon>report</ly-icon>`;case"info":return a`<ly-icon>info</ly-icon>`;case"success":return a`<ly-icon>check</ly-icon>`;case"warning":return a`<ly-icon>emergency_home</ly-icon>`;default:return a``}}};$.styles=at,P([f({type:String,reflect:!0})],$.prototype,"label",2),P([f({type:String,reflect:!0})],$.prototype,"caption",2),P([f({type:String,reflect:!0})],$.prototype,"name",2),P([f({type:Boolean,reflect:!0})],$.prototype,"required",2),P([f({type:Te,reflect:!0})],$.prototype,"status",2),P([f({type:String,reflect:!0})],$.prototype,"type",2),$=P([g("ly-field")],$);const pt=m`
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
`;var dt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,He=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?ut(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&dt(e,s,o),o};let G=class extends d{constructor(){super(...arguments),this.solid=!1}render(){return a` <slot></slot> `}};G.styles=pt,He([f({type:Boolean,reflect:!0})],G.prototype,"solid",2),G=He([g("ly-icon")],G);var ue=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(ue||{}),Re=(t=>(t[t.picker=0]="picker",t[t.combobox=1]="combobox",t))(Re||{}),Ne=(t=>(t[t.checkbox=0]="checkbox",t[t.radio=1]="radio",t[t.switch=2]="switch",t))(Ne||{});const yt=m`
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
`,ft=m`
	@layer web-components {
		:host(:is(ly-select)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var gt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,C=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?mt(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&gt(e,s,o),o};let w=class extends d{constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return a`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?a`<label part="label">${this.label}</label>`:p}
			</ly-flex>
			${this.checked?a`<slot></slot>`:p}
		`}handleVariant(){switch(this.variant){case"checkbox":return a`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return a`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return a`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return a``}}};w.properties={delegatesFocus:{type:Boolean,reflect:!0}},w.styles=yt,C([f({type:Boolean,reflect:!0})],w.prototype,"checked",2),C([f({type:String,reflect:!0})],w.prototype,"group",2),C([f({type:String,reflect:!0})],w.prototype,"label",2),C([f({type:Ne,reflect:!0})],w.prototype,"variant",2),w=C([g("ly-check")],w);let J=class extends d{constructor(){super(...arguments),this.mode="picker"}render(){return a` <slot></slot> `}};J.styles=ft,C([f({type:Re,reflect:!0})],J.prototype,"mode",2),J=C([g("ly-select")],J);const vt=m`
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
`;var $t=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,De=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?_t(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&$t(e,s,o),o};let K=class extends d{constructor(){super(...arguments),this.stacked="over"}render(){return a` <slot></slot> `}};K.styles=vt,De([f({type:String,reflect:!0})],K.prototype,"stacked",2),K=De([g("ly-layer")],K);const bt=m`
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
`,xt=m`
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
				[ expand-start] minmax(1rem, 1fr)
				[ contain-start] minmax(0, 64rem) [ contain-end]
				minmax(1rem, 1fr) [ expand-end];
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-grid[cols='container'])) ::slotted(*) {
			grid-column: contain;
		}
	}
`,wt=m`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var At=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,X=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?Et(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&At(e,s,o),o};let V=class extends d{constructor(){super(...arguments),this.axis="row"}render(){return a` <slot></slot> `}};V.styles=bt,X([f({type:ue,reflect:!0})],V.prototype,"axis",2),V=X([g("ly-flex")],V);let re=class extends d{render(){return a` <slot></slot> `}};re.styles=xt,re=X([g("ly-grid")],re);let ie=class extends d{render(){return a` <slot></slot> `}};ie.styles=wt,ie=X([g("ly-group")],ie);const L=m`
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
			outline: solid 0.125rem var(--bg) !important;
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
			background-color: color-mix(in var(--prefers-colorSpace, srgb), var(--bg), black 50%);
			display: flex;
			flex-direction: column;
			overflow: clip;
			padding: var(--scale-sm) !important;
			place-content: center;
			z-index: 1;
		}
	}
`;var St=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,z=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?Pt(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&St(e,s,o),o};let oe=class extends d{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return a` <slot></slot> `}};oe.styles=L,oe=z([g("ly-list")],oe);let ne=class extends d{render(){return a` <slot></slot> `}};ne.styles=L,ne=z([g("ly-list-header")],ne);let le=class extends d{render(){return a` <slot></slot> `}};le.styles=L,le=z([g("ly-list-row")],le);let ae=class extends d{render(){return a` <slot></slot> `}};ae.styles=L,ae=z([g("ly-list-footer")],ae);let ce=class extends d{render(){return a` <slot></slot> `}};ce.styles=L,ce=z([g("ly-list-cell")],ce);const Ct=m`
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

		:host(:is(ly-slider)[contain-children]) {
			padding-inline: max(((100vw - 64rem) / 2), 1rem) !important;
		}
	}
`;var Ot=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,je=(t,e,s,r)=>{for(var i,o=r>1?void 0:r?Ut(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&Ot(e,s,o),o};let Z=class extends d{constructor(){super(...arguments),this.axis="row"}render(){return a` <slot></slot> `}};Z.styles=Ct,je([f({type:ue,reflect:!0})],Z.prototype,"axis",2),Z=je([g("ly-slider")],Z);export{F as App,w as Check,$ as Field,V as Flex,re as Grid,ie as Group,G as Icon,K as Layer,oe as List,ce as ListCell,ae as ListFooter,ne as ListHeader,le as ListRow,J as Select,Z as Slider};