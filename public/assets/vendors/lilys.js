/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W=globalThis,ue=W.ShadowRoot&&(void 0===W.ShadyCSS||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),me=new WeakMap;let Pe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ue&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=me.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&me.set(t,e))}return e}toString(){return this.cssText}};const ze=e=>new Pe("string"==typeof e?e:e+"",void 0,ye),m=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1]),e[0]);return new Pe(s,e,ye)},Ie=(e,t)=>{if(ue)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),r=W.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=s.cssText,e.appendChild(t)}},ve=ue?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ze(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Be,defineProperty:qe,getOwnPropertyDescriptor:We,getOwnPropertyNames:Fe,getOwnPropertySymbols:Ge,getPrototypeOf:Ve}=Object,w=globalThis,be=w.trustedTypes,Je=be?be.emptyScript:"",te=w.reactiveElementPolyfillSupport,T=(e,t)=>e,F={toAttribute(e,t){switch(t){case Boolean:e=e?Je:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},fe=(e,t)=>!Be(e,t),$e={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:fe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$e){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);void 0!==r&&qe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=We(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==r?void 0:r.call(this)},set(t){const o=null==r?void 0:r.call(this);i.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$e}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=Ve(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,t=[...Fe(e),...Ge(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(ve(e))}else void 0!==e&&t.push(ve(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ie(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var s;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:F).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var s;const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(s=e.converter)?void 0:s.fromAttribute)?e.converter:F;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??fe)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(s)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[T("elementProperties")]=new Map,k[T("finalized")]=new Map,null==te||te({ReactiveElement:k}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=globalThis,G=H.trustedTypes,_e=G?G.createPolicy("lit-html",{createHTML:e=>e}):void 0,ke="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,Oe="?"+x,Ke=`<${Oe}>`,E=document,D=()=>E.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ue=Array.isArray,Ze=e=>Ue(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),se="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,we=/>/g,A=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Ce=/"/g,Re=/^(?:script|style|textarea|title)$/i,Qe=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),a=Qe(1),O=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Ee=new WeakMap,C=E.createTreeWalker(E,129);function Le(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_e?_e.createHTML(t):t}const Xe=(e,t)=>{const s=e.length-1,r=[];let i,o=2===t?"<svg>":"",l=L;for(let t=0;t<s;t++){const s=e[t];let n,a,c=-1,h=0;for(;h<s.length&&(l.lastIndex=h,a=l.exec(s),null!==a);)h=l.lastIndex,l===L?"!--"===a[1]?l=xe:void 0!==a[1]?l=we:void 0!==a[2]?(Re.test(a[2])&&(i=RegExp("</"+a[2],"g")),l=A):void 0!==a[3]&&(l=A):l===A?">"===a[0]?(l=i??L,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,n=a[1],l=void 0===a[3]?A:'"'===a[3]?Ce:Ae):l===Ce||l===Ae?l=A:l===xe||l===we?l=L:(l=A,i=void 0);const d=l===A&&e[t+1].startsWith("/>")?" ":"";o+=l===L?s+Ke:c>=0?(r.push(n),s.slice(0,c)+ke+s.slice(c)+x+d):s+x+(-2===c?t:d)}return[Le(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),r]};class j{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,o=0;const l=e.length-1,n=this.parts,[a,c]=Xe(e,t);if(this.el=j.createElement(a,s),C.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=C.nextNode())&&n.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(ke)){const t=c[o++],s=r.getAttribute(e).split(x),l=/([.?@])?(.*)/.exec(t);n.push({type:1,index:i,name:l[2],strings:s,ctor:"."===l[1]?et:"?"===l[1]?tt:"@"===l[1]?st:Y}),r.removeAttribute(e)}else e.startsWith(x)&&(n.push({type:6,index:i}),r.removeAttribute(e));if(Re.test(r.tagName)){const e=r.textContent.split(x),t=e.length-1;if(t>0){r.textContent=G?G.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],D()),C.nextNode(),n.push({type:2,index:++i});r.append(e[t],D())}}}else if(8===r.nodeType)if(r.data===Oe)n.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(x,e+1));)n.push({type:7,index:i}),e+=x.length-1}i++}}static createElement(e,t){const s=E.createElement("template");return s.innerHTML=e,s}}function U(e,t,s=e,r){var i,o;if(t===O)return t;let l=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl;const n=M(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==n&&(null==(o=null==l?void 0:l._$AO)||o.call(l,!1),void 0===n?l=void 0:(l=new n(e),l._$AT(e,s,r)),void 0!==r?(s._$Co??(s._$Co=[]))[r]=l:s._$Cl=l),void 0!==l&&(t=U(e,l._$AS(e,t.values),l,r)),t}class Ye{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((null==e?void 0:e.creationScope)??E).importNode(t,!0);C.currentNode=r;let i=C.nextNode(),o=0,l=0,n=s[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new z(i,i.nextSibling,this,e):1===n.type?t=new n.ctor(i,n.name,n.strings,this,e):6===n.type&&(t=new rt(i,this,e)),this._$AV.push(t),n=s[++l]}o!==(null==n?void 0:n.index)&&(i=C.nextNode(),o++)}return C.currentNode=E,r}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class z{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),M(e)?e===d||null==e||""===e?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==O&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Ze(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==d&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=j.createElement(Le(r.h,r.h[0]),this.options)),r);if((null==(t=this._$AH)?void 0:t._$AD)===i)this._$AH.p(s);else{const e=new Ye(i,this),t=e.u(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return void 0===t&&Ee.set(e.strings,t=new j(e)),t}k(e){Ue(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new z(this.S(D()),this.S(D()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,r){const i=this.strings;let o=!1;if(void 0===i)e=U(this,e,t,0),o=!M(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{const r=e;let l,n;for(e=i[0],l=0;l<i.length-1;l++)n=U(this,r[s+l],t,l),n===O&&(n=this._$AH[l]),o||(o=!M(n)||n!==this._$AH[l]),n===d?e=d:e!==d&&(e+=(n??"")+i[l+1]),this._$AH[l]=n}o&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class et extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class tt extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class st extends Y{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??d)===O)return;const s=this._$AH,r=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==d&&(s===d||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class rt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const re=H.litHtmlPolyfillSupport;null==re||re(j,z),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.1.2");const it=(e,t,s)=>{const r=(null==s?void 0:s.renderBefore)??t;let i=r._$litPart$;if(void 0===i){const e=(null==s?void 0:s.renderBefore)??null;r._$litPart$=i=new z(t.insertBefore(D(),e),e,void 0,s??{})}return i._$AI(e),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=it(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return O}}var Se;p._$litElement$=!0,p.finalized=!0,null==(Se=globalThis.litElementHydrateSupport)||Se.call(globalThis,{LitElement:p});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:p}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
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
 */,ot={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:fe},lt=(e=ot,t,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,e),"accessor"===r){const{name:r}=s;return{set(s){const i=t.get.call(this);t.set.call(this,s),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];t.call(this,s),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function f(e){return(t,s)=>"object"==typeof s?lt(e,t,s):((e,t,s)=>{const r=t.hasOwnProperty(s);return t.constructor.createProperty(s,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const nt=m`
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
`;var at=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Te=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?ct(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&at(t,s,o),o};let V=class extends p{constructor(){super(...arguments),this.layout="default"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return a` <slot></slot> `}};V.styles=nt,Te([f({type:String,reflect:!0})],V.prototype,"layout",2),V=Te([y("ly-app")],V);const ht=m`
	@layer web-components {
		:host(:is(ly-card)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?pt(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&dt(t,s,o),o};let oe=class extends p{render(){return a` <slot></slot> `}};oe.styles=ht,oe=ut([y("ly-card")],oe);const yt=m`
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
`;var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,P=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?gt(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&ft(t,s,o),o},He=(e=>(e[e.debug=0]="debug",e[e.error=1]="error",e[e.info=2]="info",e[e.success=3]="success",e[e.warning=4]="warning",e))(He||{});let $=class extends p{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}firstUpdated(){var e;const t=null==(e=this.renderRoot)?void 0:e.querySelector("slot");let s=null==t?void 0:t.assignedElements();s&&s.forEach((e=>{e.setAttribute("name",this.name),e.setAttribute("title",this.name),e.setAttribute("type",this.type)}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return a`
			${this.label?a`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:d}

			<slot></slot>

			${this.caption?a`
						<ly-flex axis="row" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text">${this.caption}</small>
						</ly-flex>
				  `:d}
		`}setRequiredIcon(){return this.required?a`<ly-icon part="required-icon">asterisk</ly-icon>`:a``}setStatusIcon(){switch(this.status){case"debug":return a`<ly-icon>bug_report</ly-icon>`;case"error":return a`<ly-icon>report</ly-icon>`;case"info":return a`<ly-icon>info</ly-icon>`;case"success":return a`<ly-icon>check</ly-icon>`;case"warning":return a`<ly-icon>emergency_home</ly-icon>`;default:return a``}}};$.styles=yt,P([f({type:String,reflect:!0})],$.prototype,"label",2),P([f({type:String,reflect:!0})],$.prototype,"caption",2),P([f({type:String,reflect:!0})],$.prototype,"name",2),P([f({type:Boolean,reflect:!0})],$.prototype,"required",2),P([f({type:He,reflect:!0})],$.prototype,"status",2),P([f({type:String,reflect:!0})],$.prototype,"type",2),$=P([y("ly-field")],$);const mt=m`
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
`;var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,De=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?bt(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&vt(t,s,o),o};let J=class extends p{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return a` <slot></slot> `}};J.styles=mt,De([f({type:Boolean,reflect:!0})],J.prototype,"solid",2),J=De([y("ly-icon")],J);const $t=m`
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
`,_t=m`
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
`,xt=m`
	@layer web-components {
		:host(:is(ly-select)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`,wt=m`
	@layer web-components {
		:host(:is(ly-switch)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			height: max-content;
		}
	}
`;var ge=(e=>(e[e.col=0]="col",e[e.row=1]="row",e))(ge||{}),Me=(e=>(e[e.picker=0]="picker",e[e.combobox=1]="combobox",e))(Me||{}),At=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,v=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Ct(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&At(t,s,o),o};let R=class extends p{constructor(){super(...arguments),this.checked=!1,this.label=""}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return a`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_box":"check_box_outline_blank"}
				</ly-icon>
				${this.label?a`<label part="label">${this.label}</label>`:d}
			</ly-flex>
			${this.checked?a`<slot></slot>`:d}
		`}};R.properties={delegatesFocus:{type:Boolean,reflect:!0}},R.styles=$t,v([f({type:Boolean,reflect:!0})],R.prototype,"checked",2),v([f({type:String})],R.prototype,"label",2),R=v([y("ly-checkbox")],R);let S=class extends p{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(this.checked)this.checked=!this.checked;else{const e=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const t of[...e])t.checked=!1,t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return a`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_circle":"radio_button_unchecked"}
				</ly-icon>
				${this.label?a`<label part="label">${this.label}</label>`:d}
			</ly-flex>
			${this.checked?a`<slot></slot>`:d}
		`}};S.properties={delegatesFocus:{type:Boolean,reflect:!0}},S.styles=_t,v([f({type:Boolean,reflect:!0})],S.prototype,"checked",2),v([f({type:String})],S.prototype,"group",2),v([f({type:String})],S.prototype,"label",2),S=v([y("ly-radio")],S);let N=class extends p{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return a`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};N.properties={delegatesFocus:{type:Boolean,reflect:!0}},N.styles=wt,v([f({type:Boolean,reflect:!0})],N.prototype,"checked",2),N=v([y("ly-switch")],N);let K=class extends p{constructor(){super(...arguments),this.mode="picker"}render(){return a` <slot></slot> `}};K.styles=xt,v([f({type:Me,reflect:!0})],K.prototype,"mode",2),K=v([y("ly-select")],K);const Et=m`
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
`;var St=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,je=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Pt(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&St(t,s,o),o};let Z=class extends p{constructor(){super(...arguments),this.stacked="over"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return a` <slot></slot> `}};Z.styles=Et,je([f({type:String,reflect:!0})],Z.prototype,"stacked",2),Z=je([y("ly-layer")],Z);const kt=m`
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
`,Ot=m`
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
`,Ut=m`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var Rt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,ee=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Lt(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Rt(t,s,o),o};let Q=class extends p{constructor(){super(...arguments),this.axis="row"}render(){return a` <slot></slot> `}};Q.styles=kt,ee([f({type:ge,reflect:!0})],Q.prototype,"axis",2),Q=ee([y("ly-flex")],Q);let le=class extends p{render(){return a` <slot></slot> `}};le.styles=Ot,le=ee([y("ly-grid")],le);let ne=class extends p{render(){return a` <slot></slot> `}};ne.styles=Ut,ne=ee([y("ly-group")],ne);const I=m`
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
`;var Tt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,B=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Ht(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Tt(t,s,o),o};let ae=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return a` <slot></slot> `}};ae.styles=I,ae=B([y("ly-list")],ae);let ce=class extends p{render(){return a` <slot></slot> `}};ce.styles=I,ce=B([y("ly-list-header")],ce);let he=class extends p{render(){return a` <slot></slot> `}};he.styles=I,he=B([y("ly-list-row")],he);let de=class extends p{render(){return a` <slot></slot> `}};de.styles=I,de=B([y("ly-list-footer")],de);let pe=class extends p{render(){return a` <slot></slot> `}};pe.styles=I,pe=B([y("ly-list-cell")],pe);const Dt=m`
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
`;var Mt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Ne=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?jt(t,s):t,l=e.length-1;l>=0;l--)(i=e[l])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Mt(t,s,o),o};let X=class extends p{constructor(){super(...arguments),this.axis="row"}render(){return a` <slot></slot> `}};X.styles=Dt,Ne([f({type:ge,reflect:!0})],X.prototype,"axis",2),X=Ne([y("ly-slider")],X);export{V as App,oe as Card,R as Checkbox,$ as Field,Q as Flex,le as Grid,ne as Group,J as Icon,Z as Layer,ae as List,pe as ListCell,de as ListFooter,ce as ListHeader,he as ListRow,S as Radio,K as Select,X as Slider,N as Switch};