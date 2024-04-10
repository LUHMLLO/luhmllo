/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W=globalThis,de=W.ShadowRoot&&(void 0===W.ShadyCSS||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),fe=new WeakMap;let Pe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=fe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&fe.set(t,e))}return e}toString(){return this.cssText}};const Re=e=>new Pe("string"==typeof e?e:e+"",void 0,pe),b=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1]),e[0]);return new Pe(s,e,pe)},Me=(e,t)=>{if(de)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),r=W.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=s.cssText,e.appendChild(t)}},ve=de?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Re(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ne,defineProperty:ze,getOwnPropertyDescriptor:Be,getOwnPropertyNames:Ie,getOwnPropertySymbols:We,getPrototypeOf:Fe}=Object,m=globalThis,be=m.trustedTypes,Ve=be?be.emptyScript:"",X=m.reactiveElementPolyfillSupport,D=(e,t)=>e,F={toAttribute(e,t){switch(t){case Boolean:e=e?Ve:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},ue=(e,t)=>!Ne(e,t),$e={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$e){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);void 0!==r&&ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=Be(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==r?void 0:r.call(this)},set(t){const o=null==r?void 0:r.call(this);i.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$e}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const e=Fe(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,t=[...Ie(e),...We(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(ve(e))}else void 0!==e&&t.push(ve(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var s;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:F).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var s;const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(s=e.converter)?void 0:s.fromAttribute)?e.converter:F;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??ue)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(s)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[D("elementProperties")]=new Map,E[D("finalized")]=new Map,null==X||X({ReactiveElement:E}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j=globalThis,V=j.trustedTypes,ge=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ee="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Se="?"+_,qe=`<${Se}>`,A=document,L=()=>A.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ke=Array.isArray,Ge=e=>ke(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Y="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,me=/>/g,x=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,Ce=/"/g,Oe=/^(?:script|style|textarea|title)$/i,Je=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),d=Je(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Ae=new WeakMap,C=A.createTreeWalker(A,129);function Ue(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ge?ge.createHTML(t):t}const Ke=(e,t)=>{const s=e.length-1,r=[];let i,o=2===t?"<svg>":"",n=U;for(let t=0;t<s;t++){const s=e[t];let l,c,a=-1,h=0;for(;h<s.length&&(n.lastIndex=h,c=n.exec(s),null!==c);)h=n.lastIndex,n===U?"!--"===c[1]?n=_e:void 0!==c[1]?n=me:void 0!==c[2]?(Oe.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=x):void 0!==c[3]&&(n=x):n===x?">"===c[0]?(n=i??U,a=-1):void 0===c[1]?a=-2:(a=n.lastIndex-c[2].length,l=c[1],n=void 0===c[3]?x:'"'===c[3]?Ce:xe):n===Ce||n===xe?n=x:n===_e||n===me?n=U:(n=x,i=void 0);const d=n===x&&e[t+1].startsWith("/>")?" ":"";o+=n===U?s+qe:a>=0?(r.push(l),s.slice(0,a)+Ee+s.slice(a)+_+d):s+_+(-2===a?t:d)}return[Ue(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),r]};class H{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,o=0;const n=e.length-1,l=this.parts,[c,a]=Ke(e,t);if(this.el=H.createElement(c,s),C.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=C.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(Ee)){const t=a[o++],s=r.getAttribute(e).split(_),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:n[2],strings:s,ctor:"."===n[1]?Qe:"?"===n[1]?Xe:"@"===n[1]?Ye:Z}),r.removeAttribute(e)}else e.startsWith(_)&&(l.push({type:6,index:i}),r.removeAttribute(e));if(Oe.test(r.tagName)){const e=r.textContent.split(_),t=e.length-1;if(t>0){r.textContent=V?V.emptyScript:"";for(let s=0;s<t;s++)r.append(e[s],L()),C.nextNode(),l.push({type:2,index:++i});r.append(e[t],L())}}}else if(8===r.nodeType)if(r.data===Se)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(_,e+1));)l.push({type:7,index:i}),e+=_.length-1}i++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function k(e,t,s=e,r){var i,o;if(t===S)return t;let n=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl;const l=T(t)?void 0:t._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null==(o=null==n?void 0:n._$AO)||o.call(n,!1),void 0===l?n=void 0:(n=new l(e),n._$AT(e,s,r)),void 0!==r?(s._$Co??(s._$Co=[]))[r]=n:s._$Cl=n),void 0!==n&&(t=k(e,n._$AS(e,t.values),n,r)),t}class Ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((null==e?void 0:e.creationScope)??A).importNode(t,!0);C.currentNode=r;let i=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new M(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new et(i,this,e)),this._$AV.push(t),l=s[++n]}o!==(null==l?void 0:l.index)&&(i=C.nextNode(),o++)}return C.currentNode=A,r}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),T(e)?e===h||null==e||""===e?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Ge(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=H.createElement(Ue(r.h,r.h[0]),this.options)),r);if((null==(t=this._$AH)?void 0:t._$AD)===i)this._$AH.p(s);else{const e=new Ze(i,this),t=e.u(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=Ae.get(e.strings);return void 0===t&&Ae.set(e.strings,t=new H(e)),t}k(e){ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new M(this.S(L()),this.S(L()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,r){const i=this.strings;let o=!1;if(void 0===i)e=k(this,e,t,0),o=!T(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const r=e;let n,l;for(e=i[0],n=0;n<i.length-1;n++)l=k(this,r[s+n],t,n),l===S&&(l=this._$AH[n]),o||(o=!T(l)||l!==this._$AH[n]),l===h?e=h:e!==h&&(e+=(l??"")+i[n+1]),this._$AH[n]=l}o&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qe extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Xe extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Ye extends Z{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??h)===S)return;const s=this._$AH,r=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==h&&(s===h||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class et{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const ee=j.litHtmlPolyfillSupport;null==ee||ee(H,M),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.1.2");const tt=(e,t,s)=>{const r=(null==s?void 0:s.renderBefore)??t;let i=r._$litPart$;if(void 0===i){const e=(null==s?void 0:s.renderBefore)??null;r._$litPart$=i=new M(t.insertBefore(L(),e),e,void 0,s??{})}return i._$AI(e),i};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return S}}var we;p._$litElement$=!0,p.finalized=!0,null==(we=globalThis.litElementHydrateSupport)||we.call(globalThis,{LitElement:p});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:p}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
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
 */,st={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:ue},rt=(e=st,t,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,e),"accessor"===r){const{name:r}=s;return{set(s){const i=t.get.call(this);t.set.call(this,s),this.requestUpdate(r,i,e)},init(t){return void 0!==t&&this.P(r,void 0,e),t}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];t.call(this,s),this.requestUpdate(r,i,e)}}throw Error("Unsupported decorator location: "+r)};function v(e){return(t,s)=>"object"==typeof s?rt(e,t,s):((e,t,s)=>{const r=t.hasOwnProperty(s);return t.constructor.createProperty(s,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const it=b`
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
				[ full-start] minmax(2rem, 1fr)
				[ inner-start] minmax(0, 40rem) [ inner-end]
				minmax(2rem, 1fr) [ full-end];
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
`;var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,De=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?nt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&ot(t,s,o),o};let q=class extends p{constructor(){super(...arguments),this.layout="default"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};q.styles=it,De([v({type:String,reflect:!0})],q.prototype,"layout",2),q=De([y("ly-app")],q);const lt=b`
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
`;var ct=Object.defineProperty,at=Object.getOwnPropertyDescriptor,ye=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?at(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&ct(t,s,o),o};let O=class extends p{constructor(){super(...arguments),this.checked=!1,this.label=""}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-row part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_box":"check_box_outline_blank"}
				</ly-icon>
				${this.label?d`<label part="label">${this.label}</label>`:h}
			</ly-row>
			${this.checked?d`<slot></slot>`:h}
		`}};O.properties={delegatesFocus:{type:Boolean,reflect:!0}},O.styles=lt,ye([v({type:Boolean,reflect:!0})],O.prototype,"checked",2),ye([v({type:String})],O.prototype,"label",2),O=ye([y("ly-checkbox")],O);const ht=b`
	@layer web-components {
		:host(:is(ly-col)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?pt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&dt(t,s,o),o};let se=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};se.styles=ht,se=ut([y("ly-col")],se);const yt=b`
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
	}
`;var ft=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,N=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?vt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&ft(t,s,o),o};let w=class extends p{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.type="text"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d`
			${this.label?d`<label for=${this.name}>${this.label}</label>`:h}
			<slot></slot>
			${this.caption?d`<small>${this.caption}</small>`:h}
		`}};w.styles=yt,N([v({type:String,reflect:!0})],w.prototype,"label",2),N([v({type:String,reflect:!0})],w.prototype,"caption",2),N([v({type:String,reflect:!0})],w.prototype,"name",2),N([v({type:String,reflect:!0})],w.prototype,"type",2),w=N([y("ly-field")],w);const bt=b`
	@layer web-components {
		:host(:is(ly-grid)) {
			/* local vars */
			--cols: 1;
			--gap: 0rem;
			--maxWidth: 1fr;
			--minWidth: clamp(6rem, 16vmin, 24rem);
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
`;var $t=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,_t=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?gt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&$t(t,s,o),o};let re=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};re.styles=bt,re=_t([y("ly-grid")],re);const mt=b`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var xt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,At=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Ct(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&xt(t,s,o),o};let ie=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ie.styles=mt,ie=At([y("ly-group")],ie);const wt=b`
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
`;var Pt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,je=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Et(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Pt(t,s,o),o};let G=class extends p{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};G.styles=wt,je([v({type:Boolean,reflect:!0})],G.prototype,"solid",2),G=je([y("ly-icon")],G);const St=b`
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
`;var kt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Le=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Ot(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&kt(t,s,o),o};let J=class extends p{constructor(){super(...arguments),this.stacked="over"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};J.styles=St,Le([v({type:String,reflect:!0})],J.prototype,"stacked",2),J=Le([y("ly-layer")],J);const z=b`
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
`;var Ut=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,B=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Dt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Ut(t,s,o),o};let oe=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};oe.styles=z,oe=B([y("ly-list")],oe);let ne=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ne.styles=z,ne=B([y("ly-list-header")],ne);let le=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};le.styles=z,le=B([y("ly-list-row")],le);let ce=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ce.styles=z,ce=B([y("ly-list-footer")],ce);let ae=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ae.styles=z,ae=B([y("ly-list-cell")],ae);const jt=b`
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
`;var Lt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Q=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Tt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Lt(t,s,o),o};let P=class extends p{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(this.checked)this.checked=!this.checked;else{const e=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const t of[...e])t.checked=!1,t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-row part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_circle":"radio_button_unchecked"}
				</ly-icon>
				${this.label?d`<label part="label">${this.label}</label>`:h}
			</ly-row>
			${this.checked?d`<slot></slot>`:h}
		`}};P.properties={delegatesFocus:{type:Boolean,reflect:!0}},P.styles=jt,Q([v({type:Boolean,reflect:!0})],P.prototype,"checked",2),Q([v({type:String})],P.prototype,"group",2),Q([v({type:String})],P.prototype,"label",2),P=Q([y("ly-radio")],P);const Ht=b`
	@layer web-components {
		:host(:is(ly-row)) {
			/* base styles */
			display: flex;
			flex-direction: row;
			height: max-content;
		}
	}
`;var Rt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Nt=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Mt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Rt(t,s,o),o};let he=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};he.styles=Ht,he=Nt([y("ly-row")],he);const zt=b`
	@layer web-components {
		:host(:is(ly-slider)) {
			/* local vars */
			--gap: var(--scale-2xl);

			/* base styles */
			display: flex;
			flex-direction: row;
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
			overflow-x: auto;
			scroll-snap-type: x proximity;
		}

		:host(:is(ly-slider)[direction='column']) {
			overflow-y: auto;
			scroll-snap-type: y proximity;
		}
	}
`;var Bt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,Te=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?It(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Bt(t,s,o),o};let K=class extends p{constructor(){super(...arguments),this.direction="row"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};K.styles=zt,Te([v({type:String,reflect:!0})],K.prototype,"direction",2),K=Te([y("ly-slider")],K);const Wt=b`
	@layer web-components {
		:host(:is(ly-switch)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			height: max-content;
		}
	}
`;var Ft=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,He=(e,t,s,r)=>{for(var i,o=r>1?void 0:r?Vt(t,s):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(r?i(t,s,o):i(o))||o);return r&&o&&Ft(t,s,o),o};let R=class extends p{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};R.properties={delegatesFocus:{type:Boolean,reflect:!0}},R.styles=Wt,He([v({type:Boolean,reflect:!0})],R.prototype,"checked",2),R=He([y("ly-switch")],R);export{q as App,O as Checkbox,se as Col,w as Field,re as Grid,ie as Group,G as Icon,J as Layer,oe as List,ae as ListCell,ce as ListFooter,ne as ListHeader,le as ListRow,P as Radio,he as Row,K as Slider,R as Switch};