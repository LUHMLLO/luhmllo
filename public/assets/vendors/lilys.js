/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=globalThis,ae=B.ShadowRoot&&(void 0===B.ShadyCSS||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),pe=new WeakMap;let Ce=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ae&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=pe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&pe.set(t,e))}return e}toString(){return this.cssText}};const Te=e=>new Ce("string"==typeof e?e:e+"",void 0,he),$=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new Ce(s,e,he)},je=(e,t)=>{if(ae)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),i=B.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},ue=ae?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Te(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:He,defineProperty:Re,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Me,getOwnPropertySymbols:Ne,getPrototypeOf:ze}=Object,m=globalThis,ye=m.trustedTypes,Be=ye?ye.emptyScript:"",Z=m.reactiveElementPolyfillSupport,U=(e,t)=>e,I={toAttribute(e,t){switch(t){case Boolean:e=e?Be:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},de=(e,t)=>!He(e,t),fe={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:de};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Re(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Le(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==i?void 0:i.call(this)},set(t){const o=null==i?void 0:i.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=ze(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,t=[...Me(e),...Ne(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(ue(e))}else void 0!==e&&t.push(ue(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:I).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(s=e.converter)?void 0:s.fromAttribute)?e.converter:I;this._$Em=r,this[r]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??de)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(s)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[U("elementProperties")]=new Map,P[U("finalized")]=new Map,null==Z||Z({ReactiveElement:P}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D=globalThis,W=D.trustedTypes,$e=W?W.createPolicy("lit-html",{createHTML:e=>e}):void 0,we="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,xe="?"+g,Ie=`<${xe}>`,w=document,T=()=>w.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Pe=Array.isArray,We=e=>Pe(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Q="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,_e=/>/g,A=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,ge=/"/g,Ee=/^(?:script|style|textarea|title)$/i,Ve=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),d=Ve(1),E=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),me=new WeakMap,C=w.createTreeWalker(w,129);function Se(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$e?$e.createHTML(t):t}const qe=(e,t)=>{const s=e.length-1,i=[];let r,o=2===t?"<svg>":"",n=k;for(let t=0;t<s;t++){const s=e[t];let l,c,a=-1,h=0;for(;h<s.length&&(n.lastIndex=h,c=n.exec(s),null!==c);)h=n.lastIndex,n===k?"!--"===c[1]?n=ve:void 0!==c[1]?n=_e:void 0!==c[2]?(Ee.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=A):void 0!==c[3]&&(n=A):n===A?">"===c[0]?(n=r??k,a=-1):void 0===c[1]?a=-2:(a=n.lastIndex-c[2].length,l=c[1],n=void 0===c[3]?A:'"'===c[3]?ge:be):n===ge||n===be?n=A:n===ve||n===_e?n=k:(n=A,r=void 0);const d=n===A&&e[t+1].startsWith("/>")?" ":"";o+=n===k?s+Ie:a>=0?(i.push(l),s.slice(0,a)+we+s.slice(a)+g+d):s+g+(-2===a?t:d)}return[Se(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const n=e.length-1,l=this.parts,[c,a]=qe(e,t);if(this.el=H.createElement(c,s),C.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=C.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(we)){const t=a[o++],s=i.getAttribute(e).split(g),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?Ge:"?"===n[1]?Je:"@"===n[1]?Ke:G}),i.removeAttribute(e)}else e.startsWith(g)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(Ee.test(i.tagName)){const e=i.textContent.split(g),t=e.length-1;if(t>0){i.textContent=W?W.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],T()),C.nextNode(),l.push({type:2,index:++r});i.append(e[t],T())}}}else if(8===i.nodeType)if(i.data===xe)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(g,e+1));)l.push({type:7,index:r}),e+=g.length-1}r++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function S(e,t,s=e,i){var r,o;if(t===E)return t;let n=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const l=j(t)?void 0:t._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null==(o=null==n?void 0:n._$AO)||o.call(n,!1),void 0===l?n=void 0:(n=new l(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=n:s._$Cl=n),void 0!==n&&(t=S(e,n._$AS(e,t.values),n,i)),t}class Fe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((null==e?void 0:e.creationScope)??w).importNode(t,!0);C.currentNode=i;let r=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new L(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new Ze(r,this,e)),this._$AV.push(t),l=s[++n]}o!==(null==l?void 0:l.index)&&(r=C.nextNode(),o++)}return C.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class L{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),j(e)?e===h||null==e||""===e?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==E&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):We(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=H.createElement(Se(i.h,i.h[0]),this.options)),i);if((null==(t=this._$AH)?void 0:t._$AD)===r)this._$AH.p(s);else{const e=new Fe(r,this),t=e.u(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=me.get(e.strings);return void 0===t&&me.set(e.strings,t=new H(e)),t}k(e){Pe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new L(this.S(T()),this.S(T()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(void 0===r)e=S(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const i=e;let n,l;for(e=r[0],n=0;n<r.length-1;n++)l=S(this,i[s+n],t,n),l===E&&(l=this._$AH[n]),o||(o=!j(l)||l!==this._$AH[n]),l===h?e=h:e!==h&&(e+=(l??"")+r[n+1]),this._$AH[n]=l}o&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ge extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Je extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Ke extends G{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??h)===E)return;const s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const X=D.litHtmlPolyfillSupport;null==X||X(H,L),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.1.2");const Qe=(e,t,s)=>{const i=(null==s?void 0:s.renderBefore)??t;let r=i._$litPart$;if(void 0===r){const e=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new L(t.insertBefore(T(),e),e,void 0,s??{})}return r._$AI(e),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return E}}var Ae;p._$litElement$=!0,p.finalized=!0,null==(Ae=globalThis.litElementHydrateSupport)||Ae.call(globalThis,{LitElement:p});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:p}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f=e=>(t,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Xe={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:de},Ye=(e=Xe,t,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function v(e){return(t,s)=>"object"==typeof s?Ye(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const et=$`
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

		:host(:is(ly-app[layout='gallery'])) {
			display: grid;
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[layout='row'])) {
			flex-direction: row;
		}

		:host(:is(ly-app[layout='col'])) {
			flex-direction: column;
		}
	}
`;var tt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Oe=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?st(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&tt(t,s,o),o};let V=class extends p{constructor(){super(...arguments),this.layout="default"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};V.styles=et,Oe([v({type:String,reflect:!0})],V.prototype,"layout",2),V=Oe([f("ly-app")],V);const rt=$`
	@layer web-components {
		:host(:is(ly-col)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var it=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,nt=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?ot(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&it(t,s,o),o};let ee=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ee.styles=rt,ee=nt([f("ly-col")],ee);const lt=$`
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
`;var ct=Object.defineProperty,at=Object.getOwnPropertyDescriptor,J=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?at(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&ct(t,s,o),o};let O=class extends p{constructor(){super(...arguments),this.label="",this.caption="",this.name=""}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d`
			${this.label?d`<label for=${this.name}>${this.label}</label>`:h}
			<slot></slot>
			${this.caption?d`<small>${this.caption}</small>`:h}
		`}};O.styles=lt,J([v({type:String,reflect:!0})],O.prototype,"label",2),J([v({type:String,reflect:!0})],O.prototype,"caption",2),J([v({type:String,reflect:!0})],O.prototype,"name",2),O=J([f("ly-field")],O);const ht=$`
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
`;var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?pt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&dt(t,s,o),o};let te=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};te.styles=ht,te=ut([f("ly-grid")],te);const yt=$`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var ft=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,vt=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?$t(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&ft(t,s,o),o};let se=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};se.styles=yt,se=vt([f("ly-group")],se);const _t=$`
	@layer web-components {
		:host(:is(ly-icon)) {
			/* base styles */
			display: inline-grid;
			font-family: 'Material Symbols Outlined', 'Material Symbols Rounded', 'Material Symbols Sharp', sans-serif;
			font-feature-settings: 'liga';
			font-size: var(--sttng-iconScale);
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
			height: auto;
			overflow: clip;
			place-content: center;
			user-select: none;
			width: fit-content;
		}

		:host(:is(ly-icon[solid])) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	}
`;var bt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,ke=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?gt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&bt(t,s,o),o};let q=class extends p{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};q.styles=_t,ke([v({type:Boolean,reflect:!0})],q.prototype,"solid",2),q=ke([f("ly-icon")],q);const mt=$`
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
`;var At=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,Ue=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?Ct(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&At(t,s,o),o};let F=class extends p{constructor(){super(...arguments),this.stacked="over"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};F.styles=mt,Ue([v({type:String,reflect:!0})],F.prototype,"stacked",2),F=Ue([f("ly-layer")],F);const M=$`
	@layer web-components {
		:host(:is(ly-list)) {
			/* local vars */
			--bg: var(--clr-primary);
			--clr: var(--clr-text);
			--cols: 1;
			--gap: calc(var(--scale-5xs) * 0.1625);
			--radius: var(--radius-3xs);

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
			background-color: color-mix(in srgb, var(--bg), black 50%);
			display: flex;
			flex-direction: column;
			overflow: clip;
			padding: var(--scale-sm) !important;
			place-content: center;
			z-index: 1;
		}
	}
`;var wt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,N=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?xt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&wt(t,s,o),o};let re=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};re.styles=M,re=N([f("ly-list-header")],re);let ie=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ie.styles=M,ie=N([f("ly-list-row")],ie);let oe=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};oe.styles=M,oe=N([f("ly-list-footer")],oe);let ne=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ne.styles=M,ne=N([f("ly-list-cell")],ne);let le=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};le.styles=M,le=N([f("ly-list")],le);const Pt=$`
	@layer web-components {
		:host(:is(ly-radio)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var Et=Object.defineProperty,St=Object.getOwnPropertyDescriptor,K=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?St(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Et(t,s,o),o};let x=class extends p{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(this.checked)this.checked=!this.checked;else{const e=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const t of[...e])t.checked=!1,t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			${this.label?d`<label>${this.label}</label>`:h}
			<ly-icon ?solid="${this.checked}">
				${this.checked?"check_circle":"radio_button_unchecked"}
			</ly-icon>
			${this.checked?d`<slot></slot>`:h}
		`}};x.properties={delegatesFocus:{type:Boolean,reflect:!0}},x.styles=Pt,K([v({type:Boolean,reflect:!0})],x.prototype,"checked",2),K([v({type:String})],x.prototype,"group",2),K([v({type:String})],x.prototype,"label",2),x=K([f("ly-radio")],x);const Ot=$`
	@layer web-components {
		:host(:is(ly-row)) {
			/* base styles */
			display: flex;
			flex-direction: row;
			height: max-content;
		}
	}
`;var kt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Dt=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?Ut(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&kt(t,s,o),o};let ce=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ce.styles=Ot,ce=Dt([f("ly-row")],ce);const Tt=$`
	@layer web-components {
		:host(:is(ly-switch)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			height: max-content;
		}
	}
`;var jt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,De=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?Ht(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&jt(t,s,o),o};let R=class extends p{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};R.properties={delegatesFocus:{type:Boolean,reflect:!0}},R.styles=Tt,De([v({type:Boolean,reflect:!0})],R.prototype,"checked",2),R=De([f("ly-switch")],R);export{V as App,ee as Col,O as Field,te as Grid,se as Group,q as Icon,F as Layer,le as List,ne as ListCell,oe as ListFooter,re as ListHeader,ie as ListRow,x as Radio,ce as Row,R as Switch};