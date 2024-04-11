/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q=globalThis,de=q.ShadowRoot&&(void 0===q.ShadyCSS||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),fe=new WeakMap;let Pe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=fe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&fe.set(t,e))}return e}toString(){return this.cssText}};const Me=e=>new Pe("string"==typeof e?e:e+"",void 0,pe),b=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1]),e[0]);return new Pe(s,e,pe)},Ne=(e,t)=>{if(de)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),r=q.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=s.cssText,e.appendChild(t)}},ve=de?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Me(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:ze,defineProperty:Ie,getOwnPropertyDescriptor:Be,getOwnPropertyNames:qe,getOwnPropertySymbols:We,getPrototypeOf:Fe}=Object,x=globalThis,be=x.trustedTypes,Ve=be?be.emptyScript:"",X=x.reactiveElementPolyfillSupport,j=(e,t)=>e,W={toAttribute(e,t){switch(t){case Boolean:e=e?Ve:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},ue=(e,t)=>!ze(e,t),ge={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);void 0!==r&&Ie(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=Be(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==r?void 0:r.call(this)},set(t){const o=null==r?void 0:r.call(this);i.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const e=Fe(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const e=this.properties,t=[...qe(e),...We(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(ve(e))}else void 0!==e&&t.push(ve(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var s;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:W).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var s;const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(s=e.converter)?void 0:s.fromAttribute)?e.converter:W;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??ue)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(s)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[j("elementProperties")]=new Map,S[j("finalized")]=new Map,null==X||X({ReactiveElement:S}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R=globalThis,F=R.trustedTypes,$e=F?F.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ee="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Se="?"+_,Ge=`<${Se}>`,A=document,L=()=>A.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ke=Array.isArray,Je=e=>ke(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Y="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,_e=/>/g,w=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,we=/"/g,Oe=/^(?:script|style|textarea|title)$/i,Ke=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),c=Ke(1),k=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Ce=new WeakMap,C=A.createTreeWalker(A,129);function Ue(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$e?$e.createHTML(t):t}const Ze=(e,t)=>{const s=e.length-1,r=[];let i,o=2===t?"<svg>":"",n=D;for(let t=0;t<s;t++){const s=e[t];let l,c,a=-1,d=0;for(;d<s.length&&(n.lastIndex=d,c=n.exec(s),null!==c);)d=n.lastIndex,n===D?"!--"===c[1]?n=me:void 0!==c[1]?n=_e:void 0!==c[2]?(Oe.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=w):void 0!==c[3]&&(n=w):n===w?">"===c[0]?(n=i??D,a=-1):void 0===c[1]?a=-2:(a=n.lastIndex-c[2].length,l=c[1],n=void 0===c[3]?w:'"'===c[3]?we:xe):n===we||n===xe?n=w:n===me||n===_e?n=D:(n=w,i=void 0);const h=n===w&&e[t+1].startsWith("/>")?" ":"";o+=n===D?s+Ge:a>=0?(r.push(l),s.slice(0,a)+Ee+s.slice(a)+_+h):s+_+(-2===a?t:h)}return[Ue(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),r]};class H{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,o=0;const n=e.length-1,l=this.parts,[c,a]=Ze(e,t);if(this.el=H.createElement(c,s),C.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=C.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(Ee)){const t=a[o++],s=r.getAttribute(e).split(_),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:n[2],strings:s,ctor:"."===n[1]?Xe:"?"===n[1]?Ye:"@"===n[1]?et:Z}),r.removeAttribute(e)}else e.startsWith(_)&&(l.push({type:6,index:i}),r.removeAttribute(e));if(Oe.test(r.tagName)){const e=r.textContent.split(_),t=e.length-1;if(t>0){r.textContent=F?F.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],L()),C.nextNode(),l.push({type:2,index:++i});r.append(e[t],L())}}}else if(8===r.nodeType)if(r.data===Se)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(_,e+1));)l.push({type:7,index:i}),e+=_.length-1}i++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function O(e,t,s=e,r){var i,o;if(t===k)return t;let n=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl;const l=T(t)?void 0:t._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null==(o=null==n?void 0:n._$AO)||o.call(n,!1),void 0===l?n=void 0:(n=new l(e),n._$AT(e,s,r)),void 0!==r?(s._$Co??(s._$Co=[]))[r]=n:s._$Cl=n),void 0!==n&&(t=O(e,n._$AS(e,t.values),n,r)),t}class Qe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((null==e?void 0:e.creationScope)??A).importNode(t,!0);C.currentNode=r;let i=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new N(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new tt(i,this,e)),this._$AV.push(t),l=s[++n]}o!==(null==l?void 0:l.index)&&(i=C.nextNode(),o++)}return C.currentNode=A,r}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class N{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),T(e)?e===d||null==e||""===e?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Je(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=H.createElement(Ue(r.h,r.h[0]),this.options)),r);if((null==(t=this._$AH)?void 0:t._$AD)===i)this._$AH.p(s);else{const e=new Qe(i,this),t=e.u(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=Ce.get(e.strings);return void 0===t&&Ce.set(e.strings,t=new H(e)),t}k(e){ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new N(this.S(L()),this.S(L()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,r){const i=this.strings;let o=!1;if(void 0===i)e=O(this,e,t,0),o=!T(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const r=e;let n,l;for(e=i[0],n=0;n<i.length-1;n++)l=O(this,r[s+n],t,n),l===k&&(l=this._$AH[n]),o||(o=!T(l)||l!==this._$AH[n]),l===d?e=d:e!==d&&(e+=(l??"")+i[n+1]),this._$AH[n]=l}o&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xe extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ye extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class et extends Z{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??d)===k)return;const s=this._$AH,r=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==d&&(s===d||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const ee=R.litHtmlPolyfillSupport;null==ee||ee(H,N),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.1.2");const st=(e,t,s)=>{const r=(null==s?void 0:s.renderBefore)??t;let i=r._$litPart$;if(void 0===i){const e=(null==s?void 0:s.renderBefore)??null;r._$litPart$=i=new N(t.insertBefore(L(),e),e,void 0,s??{})}return i._$AI(e),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return k}}var Ae;p._$litElement$=!0,p.finalized=!0,null==(Ae=globalThis.litElementHydrateSupport)||Ae.call(globalThis,{LitElement:p});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:p}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=e=>(t,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ue},it=(e=rt,t,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,e),"accessor"===r){const{name:r}=s;return{set(s){const i=t.get.call(this);t.set.call(this,s),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];t.call(this,s),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function v(e){return(t,s)=>"object"==typeof s?it(e,t,s):((e,t,s)=>{const r=t.hasOwnProperty(s);return t.constructor.createProperty(s,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const ot=b`
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

		:host(:is(ly-app[layout='grid'])) {
			display: grid;
			grid-template-columns:
				[ full-start] minmax(1rem, 1fr)
				[ inner-start] minmax(0, 40rem) [ inner-end]
				minmax(1rem, 1fr) [ full-end];
		}

		:host(:is(ly-app[layout='grid'])) ::slotted(*) {
			grid-column: inner;
		}

		:host(:is(ly-app[layout='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[layout='col'])) {
			flex-direction: column;
		}
	}
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,De=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?lt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&nt(t,s,o),o};let V=class extends p{constructor(){super(...arguments),this.layout="default"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};V.styles=ot,De([v({type:String,reflect:!0})],V.prototype,"layout",2),V=De([y("ly-app")],V);const ct=b`
	@layer web-components {
		:host(:is(ly-checkbox)) {
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

		:host(:is(ly-checkbox))::part(row) {
			gap: inherit;
		}

		:host(:is(ly-checkbox))::part(label) {
			display: inline-flex;
			flex-shrink: 1;
		}
	}
`;var at=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,ye=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?ht(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&at(t,s,o),o};let U=class extends p{constructor(){super(...arguments),this.checked=!1,this.label=""}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return c`
			<ly-row part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_box":"check_box_outline_blank"}
				</ly-icon>
				${this.label?c`<label part="label">${this.label}</label>`:d}
			</ly-row>
			${this.checked?c`<slot></slot>`:d}
		`}};U.properties={delegatesFocus:{type:Boolean,reflect:!0}},U.styles=ct,ye([v({type:Boolean,reflect:!0})],U.prototype,"checked",2),ye([v({type:String})],U.prototype,"label",2),U=ye([y("ly-checkbox")],U);const dt=b`
	@layer web-components {
		:host(:is(ly-col)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,yt=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?ut(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&pt(t,s,o),o};let se=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};se.styles=dt,se=yt([y("ly-col")],se);const ft=b`
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
`;var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,E=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?bt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&vt(t,s,o),o},je=(e=>(e[e.debug=0]="debug",e[e.error=1]="error",e[e.info=2]="info",e[e.success=3]="success",e[e.warning=4]="warning",e))(je||{});let $=class extends p{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}firstUpdated(){var e;const t=null==(e=this.renderRoot)?void 0:e.querySelector("slot");let s=null==t?void 0:t.assignedElements();s&&s.forEach((e=>{e.setAttribute("name",this.name),e.setAttribute("title",this.name),e.setAttribute("type",this.type)}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return c`
			${this.label?c`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:d}

			<slot></slot>

			${this.caption?c`
						<ly-row part="caption">
							${this.setStatusIcon()}
							<small part="caption-text">${this.caption}</small>
						</ly-row>
				  `:d}
		`}setRequiredIcon(){return this.required?c`<ly-icon part="required-icon">asterisk</ly-icon>`:c``}setStatusIcon(){switch(this.status){case"debug":return c`<ly-icon>bug_report</ly-icon>`;case"error":return c`<ly-icon>report</ly-icon>`;case"info":return c`<ly-icon>info</ly-icon>`;case"success":return c`<ly-icon>check</ly-icon>`;case"warning":return c`<ly-icon>emergency_home</ly-icon>`;default:return c``}}};$.styles=ft,E([v({type:String,reflect:!0})],$.prototype,"label",2),E([v({type:String,reflect:!0})],$.prototype,"caption",2),E([v({type:String,reflect:!0})],$.prototype,"name",2),E([v({type:Boolean,reflect:!0})],$.prototype,"required",2),E([v({type:je,reflect:!0})],$.prototype,"status",2),E([v({type:String,reflect:!0})],$.prototype,"type",2),$=E([y("ly-field")],$);const gt=b`
	@layer web-components {
		:host(:is(ly-grid)) {
			/* local vars */
			--cols: 1;
			--gap: 0rem;
			--maxWidth: 1fr;
			--minWidth: clamp(8rem, 16vmin, 24rem);
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
	}
`;var $t=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,_t=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?mt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&$t(t,s,o),o};let re=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};re.styles=gt,re=_t([y("ly-grid")],re);const xt=b`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var wt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,At=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Ct(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&wt(t,s,o),o};let ie=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};ie.styles=xt,ie=At([y("ly-group")],ie);const Pt=b`
	@layer web-components {
		:host(:is(ly-icon)) {
			/* base styles */
			aspect-ratio: 1/1;
			display: grid;
			flex-grow: 0;
			flex-shrink: 0;
			font-family: 'Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp', sans-serif;
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
`;var Et=Object.defineProperty,St=Object.getOwnPropertyDescriptor,Re=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?St(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Et(t,s,o),o};let G=class extends p{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};G.styles=Pt,Re([v({type:Boolean,reflect:!0})],G.prototype,"solid",2),G=Re([y("ly-icon")],G);const kt=b`
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

		:host(:is(ly-layer)) * {
			visibility: visible;
		}

		:host(:is(ly-layer[stacked='under'])) {
			z-index: -1;
		}

		:host(:is(ly-layer[stacked='over'])) {
			flex-direction: column;
			z-index: 2;
		}
	}
`;var Ot=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Le=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Ut(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Ot(t,s,o),o};let J=class extends p{constructor(){super(...arguments),this.stacked="over"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};J.styles=kt,Le([v({type:String,reflect:!0})],J.prototype,"stacked",2),J=Le([y("ly-layer")],J);const z=b`
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
`;var Dt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,I=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?jt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Dt(t,s,o),o};let oe=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};oe.styles=z,oe=I([y("ly-list")],oe);let ne=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};ne.styles=z,ne=I([y("ly-list-header")],ne);let le=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};le.styles=z,le=I([y("ly-list-row")],le);let ce=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};ce.styles=z,ce=I([y("ly-list-footer")],ce);let ae=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};ae.styles=z,ae=I([y("ly-list-cell")],ae);const Rt=b`
	@layer web-components {
		:host(:is(ly-radio)) {
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

		:host(:is(ly-radio))::part(row) {
			gap: inherit;
		}

		:host(:is(ly-radio))::part(label) {
			display: inline-flex;
			flex-shrink: 1;
		}
	}
`;var Lt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Q=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Tt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Lt(t,s,o),o};let P=class extends p{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(this.checked)this.checked=!this.checked;else{const e=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const t of[...e])t.checked=!1,t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return c`
			<ly-row part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_circle":"radio_button_unchecked"}
				</ly-icon>
				${this.label?c`<label part="label">${this.label}</label>`:d}
			</ly-row>
			${this.checked?c`<slot></slot>`:d}
		`}};P.properties={delegatesFocus:{type:Boolean,reflect:!0}},P.styles=Rt,Q([v({type:Boolean,reflect:!0})],P.prototype,"checked",2),Q([v({type:String})],P.prototype,"group",2),Q([v({type:String})],P.prototype,"label",2),P=Q([y("ly-radio")],P);const Ht=b`
	@layer web-components {
		:host(:is(ly-row)) {
			/* base styles */
			display: flex;
			flex-direction: row;
			height: max-content;
		}
	}
`;var Mt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,zt=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Nt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Mt(t,s,o),o};let he=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};he.styles=Ht,he=zt([y("ly-row")],he);const It=b`
	@layer web-components {
		:host(:is(ly-slider)) {
			/* local vars */
			--gap: var(--scale-2xl);

			/* base styles */
			display: flex;
			gap: var(--gap);
			height: max-content;
		}

		:host(:is(ly-slider)) ::slotted(*) {
			flex-shrink: 0;
			min-height: max-content;
			min-width: max-content;
			scroll-snap-align: start;
		}

		:host(:is(ly-slider)[direction='row']) {
			flex-direction: row;
			overflow-x: auto;
			scroll-snap-type: x proximity;
		}

		:host(:is(ly-slider)[direction='column']) {
			flex-direction: column;
			overflow-y: auto;
			scroll-snap-type: y proximity;
		}
	}
`;var Bt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Te=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?qt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Bt(t,s,o),o};let K=class extends p{constructor(){super(...arguments),this.direction="row"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return c` <slot></slot> `}};K.styles=It,Te([v({type:String,reflect:!0})],K.prototype,"direction",2),K=Te([y("ly-slider")],K);const Wt=b`
	@layer web-components {
		:host(:is(ly-switch)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			height: max-content;
		}
	}
`;var Ft=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,He=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Vt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Ft(t,s,o),o};let M=class extends p{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return c`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};M.properties={delegatesFocus:{type:Boolean,reflect:!0}},M.styles=Wt,He([v({type:Boolean,reflect:!0})],M.prototype,"checked",2),M=He([y("ly-switch")],M);export{V as App,U as Checkbox,se as Col,$ as Field,re as Grid,ie as Group,G as Icon,J as Layer,oe as List,ae as ListCell,ce as ListFooter,ne as ListHeader,le as ListRow,P as Radio,he as Row,K as Slider,M as Switch};