/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j=globalThis,Y=j.ShadowRoot&&(void 0===j.ShadyCSS||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),se=new WeakMap;let ue=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Y&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=se.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&se.set(t,e))}return e}toString(){return this.cssText}};const Ae=e=>new ue("string"==typeof e?e:e+"",void 0,ee),w=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new ue(s,e,ee)},Ce=(e,t)=>{if(Y)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),i=j.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},ie=Y?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ae(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:we,defineProperty:Ee,getOwnPropertyDescriptor:Se,getOwnPropertyNames:xe,getOwnPropertySymbols:Pe,getPrototypeOf:Oe}=Object,v=globalThis,re=v.trustedTypes,ke=re?re.emptyScript:"",V=v.reactiveElementPolyfillSupport,O=(e,t)=>e,L={toAttribute(e,t){switch(t){case Boolean:e=e?ke:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},te=(e,t)=>!we(e,t),ne={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Ee(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Se(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==i?void 0:i.call(this)},set(t){const n=null==i?void 0:i.call(this);r.call(this,t),this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Oe(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,t=[...xe(e),...Pe(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(ie(e))}else void 0!==e&&t.push(ie(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ce(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:L).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(s=e.converter)?void 0:s.fromAttribute)?e.converter:L;this._$Em=r,this[r]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??te)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(s)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[O("elementProperties")]=new Map,E[O("finalized")]=new Map,null==V||V({ReactiveElement:E}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,z=k.trustedTypes,oe=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,$e="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+y,Ue=`<${fe}>`,A=document,U=()=>A.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_e=Array.isArray,Te=e=>_e(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),q="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,ae=/>/g,g=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,he=/"/g,ye=/^(?:script|style|textarea|title)$/i,He=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),$=He(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),de=new WeakMap,b=A.createTreeWalker(A,129);function ve(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==oe?oe.createHTML(t):t}const Re=(e,t)=>{const s=e.length-1,i=[];let r,n=2===t?"<svg>":"",o=P;for(let t=0;t<s;t++){const s=e[t];let l,a,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,a=o.exec(s),null!==a);)h=o.lastIndex,o===P?"!--"===a[1]?o=le:void 0!==a[1]?o=ae:void 0!==a[2]?(ye.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=g):void 0!==a[3]&&(o=g):o===g?">"===a[0]?(o=r??P,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?g:'"'===a[3]?he:ce):o===he||o===ce?o=g:o===le||o===ae?o=P:(o=g,r=void 0);const d=o===g&&e[t+1].startsWith("/>")?" ":"";n+=o===P?s+Ue:c>=0?(i.push(l),s.slice(0,c)+$e+s.slice(c)+y+d):s+y+(-2===c?t:d)}return[ve(e,n+(e[s]||"<?>")+(2===t?"</svg>":"")),i]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,n=0;const o=e.length-1,l=this.parts,[a,c]=Re(e,t);if(this.el=H.createElement(a,s),b.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=b.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith($e)){const t=c[n++],s=i.getAttribute(e).split(y),o=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?Ne:"?"===o[1]?De:"@"===o[1]?je:I}),i.removeAttribute(e)}else e.startsWith(y)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(ye.test(i.tagName)){const e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=z?z.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],U()),b.nextNode(),l.push({type:2,index:++r});i.append(e[t],U())}}}else if(8===i.nodeType)if(i.data===fe)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(y,e+1));)l.push({type:7,index:r}),e+=y.length-1}r++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function x(e,t,s=e,i){var r,n;if(t===S)return t;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const l=T(t)?void 0:t._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(e),o._$AT(e,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(t=x(e,o._$AS(e,t.values),o,i)),t}class Me{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((null==e?void 0:e.creationScope)??A).importNode(t,!0);b.currentNode=i;let r=b.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new M(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new Le(r,this,e)),this._$AV.push(t),l=s[++o]}n!==(null==l?void 0:l.index)&&(r=b.nextNode(),n++)}return b.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),T(e)?e===h||null==e||""===e?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Te(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=H.createElement(ve(i.h,i.h[0]),this.options)),i);if((null==(t=this._$AH)?void 0:t._$AD)===r)this._$AH.p(s);else{const e=new Me(r,this),t=e.u(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=de.get(e.strings);return void 0===t&&de.set(e.strings,t=new H(e)),t}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new M(this.S(U()),this.S(U()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){const r=this.strings;let n=!1;if(void 0===r)e=x(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{const i=e;let o,l;for(e=r[0],o=0;o<r.length-1;o++)l=x(this,i[s+o],t,o),l===S&&(l=this._$AH[o]),n||(n=!T(l)||l!==this._$AH[o]),l===h?e=h:e!==h&&(e+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ne extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class De extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class je extends I{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??h)===S)return;const s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Le{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const F=k.litHtmlPolyfillSupport;null==F||F(H,M),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.2");const ze=(e,t,s)=>{const i=(null==s?void 0:s.renderBefore)??t;let r=i._$litPart$;if(void 0===r){const e=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new M(t.insertBefore(U(),e),e,void 0,s??{})}return r._$AI(e),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return S}}var pe;u._$litElement$=!0,u.finalized=!0,null==(pe=globalThis.litElementHydrateSupport)||pe.call(globalThis,{LitElement:u});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:u}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const m=e=>(t,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Be={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:te},Ie=(e=Be,t,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function N(e){return(t,s)=>"object"==typeof s?Ie(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const We=w`
	@layer web-components {
		:host {
			/* local vars */
			--bg: var(--clr-background);
			--clr: var(--clr-text);

			/* theming */
			background-color: var(--bg);
			color: var(--clr);

			/* base styles */
			display: flex;
			flex-direction: row;
			height: 100dvh;
			inset: 0;
			isolation: isolate;
			margin: auto;
			overflow: clip;
			place-content: center;
			position: fixed;
			width: 100dvw;
		}
	}
`;var Ve=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Fe=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?qe(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Ve(t,s,n),n};let J=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return $` <slot></slot> `}};J.styles=We,J=Fe([m("ly-app")],J);const Ge=w`
	@layer web-components {
		:host {
			/* base styles */
			display: flex;
			flex-direction: column;
			gap: var(--scale-sm);
		}
	}
`;var Je=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Ze=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?Ke(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Je(t,s,n),n};let K=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return $` <slot></slot> `}};K.styles=Ge,K=Ze([m("ly-col")],K);const Qe=w`
	@layer web-components {
		:host {
			/* local vars */
			--gap: 0;
			--minWidth: clamp(6rem, 16vmin, 24rem);
			--maxWidth: 1fr;
			--repeat: auto-fill;

			/* base styles */
			display: grid;
			gap: var(--gap);
			grid-template-columns: var(--maxWidth);
		}

		:host([max='2']) {
			--max: 2;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		:host([max='3']) {
			--max: 3;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}

		:host([max='4']) {
			--max: 4;
			grid-template-columns: repeat(
				var(--repeat),
				minmax(
					max(var(--minWidth), calc(100% / var(--max) - var(--gap))),
					var(--maxWidth)
				)
			);
		}
	}
`;var Xe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,et=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?Ye(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Xe(t,s,n),n};let Z=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return $` <slot></slot> `}};Z.styles=Qe,Z=et([m("ly-grid")],Z);const tt=w`
	@layer web-components {
		:host {
			/* base styles */
			display: flex;
			flex-direction: column;
			gap: var(--scale-sm);
		}
	}
`;var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,rt=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?it(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&st(t,s,n),n};let Q=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return $` <slot></slot> `}};Q.styles=tt,Q=rt([m("ly-group")],Q);const nt=w`
	@layer web-components {
		:host {
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

		:host([solid]) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	}
`;var ot=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,me=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?lt(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&ot(t,s,n),n};let B=class extends u{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return $` <slot></slot> `}};B.styles=nt,me([N({type:Boolean,reflect:!0})],B.prototype,"solid",2),B=me([m("ly-icon")],B);const ge=w`
	@layer web-components {
		:host {
			/* base styles */
			cursor: pointer;
			display: flex;
			flex-direction: column;
		}
	}
`;var at=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,W=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?ct(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&at(t,s,n),n};let C=class extends u{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(!this.checked){const e=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const t of[...e])t.checked=!1,t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return $`
			${this.label?$`<label>${this.label}</label>`:h}
			<ly-icon ?solid="${this.checked}">
				${this.checked?"check_circle":"radio_button_unchecked"}
			</ly-icon>
			${this.checked?$`<slot></slot>`:h}
		`}};C.properties={delegatesFocus:{type:Boolean,reflect:!0}},C.styles=ge,W([N({type:Boolean,reflect:!0})],C.prototype,"checked",2),W([N({type:String})],C.prototype,"group",2),W([N({type:String})],C.prototype,"label",2),C=W([m("ly-radio")],C);const ht=w`
	@layer web-components {
		:host {
			/* base styles */
			display: flex;
			flex-direction: row;
		}
	}
`;var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?pt(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&dt(t,s,n),n};let X=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return $` <slot></slot> `}};X.styles=ht,X=ut([m("ly-row")],X);var $t=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,be=(e,t,s,i)=>{for(var r,n=i>1?void 0:i?ft(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&$t(t,s,n),n};let R=class extends u{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return $`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};R.properties={delegatesFocus:{type:Boolean,reflect:!0}},R.styles=ge,be([N({type:Boolean,reflect:!0})],R.prototype,"checked",2),R=be([m("ly-switch")],R);export{J as App,K as Col,Z as Grid,Q as Group,B as Icon,C as Radio,X as Row,R as Switch};