/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=globalThis,Kt=bt.ShadowRoot&&(void 0===bt.ShadyCSS||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),oe=new WeakMap;let Ae=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=oe.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&oe.set(e,t))}return t}toString(){return this.cssText}};const qe=t=>new Ae("string"==typeof t?t:t+"",void 0,Jt),T=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new Ae(i,t,Jt)},Ge=(t,e)=>{if(Kt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=bt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},re=Kt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return qe(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Xe,defineProperty:Ye,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Je,getOwnPropertySymbols:Ze,getPrototypeOf:Qe}=Object,B=globalThis,le=B.trustedTypes,ts=le?le.emptyScript:"",Nt=B.reactiveElementPolyfillSupport,at=(t,e)=>t,$t={toAttribute(t,e){switch(e){case Boolean:t=t?ts:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Zt=(t,e)=>!Xe(t,e),ce={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Zt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),B.litPropertyMetadata??(B.litPropertyMetadata=new WeakMap);class Z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ce){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Ye(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=Ke(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){const r=null==s?void 0:s.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ce}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const t=Qe(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const t=this.properties,e=[...Je(t),...Ze(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(re(t))}else void 0!==t&&e.push(re(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ge(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null==(i=s.converter)?void 0:i.toAttribute)?s.converter:$t).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:$t;this._$Em=n,this[n]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Zt)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[at("elementProperties")]=new Map,Z[at("finalized")]=new Map,null==Nt||Nt({ReactiveElement:Z}),(B.reactiveElementVersions??(B.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=globalThis,_t=ht.trustedTypes,ae=_t?_t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Se="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+j,es=`<${Ee}>`,Y=document,dt=()=>Y.createComment(""),ut=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Oe=Array.isArray,ss=t=>Oe(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Ut="[ \t\n\f\r]",ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,de=/>/g,G=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,pe=/"/g,Ce=/^(?:script|style|textarea|title)$/i,is=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=is(1),tt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),fe=new WeakMap,X=Y.createTreeWalker(Y,129);function Pe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ae?ae.createHTML(e):e}const ns=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=ct;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,a=o.exec(i),null!==a);)d=o.lastIndex,o===ct?"!--"===a[1]?o=he:void 0!==a[1]?o=de:void 0!==a[2]?(Ce.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=G):void 0!==a[3]&&(o=G):o===G?">"===a[0]?(o=n??ct,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?G:'"'===a[3]?pe:ue):o===pe||o===ue?o=G:o===he||o===de?o=ct:(o=G,n=void 0);const h=o===G&&t[e+1].startsWith("/>")?" ":"";r+=o===ct?i+es:c>=0?(s.push(l),i.slice(0,c)+Se+i.slice(c)+j+h):i+j+(-2===c?e:h)}return[Pe(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class pt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,c]=ns(t,e);if(this.el=pt.createElement(a,i),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(Se)){const e=c[r++],i=s.getAttribute(t).split(j),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?rs:"?"===o[1]?ls:"@"===o[1]?cs:Tt}),s.removeAttribute(t)}else t.startsWith(j)&&(l.push({type:6,index:n}),s.removeAttribute(t));if(Ce.test(s.tagName)){const t=s.textContent.split(j),e=t.length-1;if(e>0){s.textContent=_t?_t.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],dt()),X.nextNode(),l.push({type:2,index:++n});s.append(t[e],dt())}}}else if(8===s.nodeType)if(s.data===Ee)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(j,t+1));)l.push({type:7,index:n}),t+=j.length-1}n++}}static createElement(t,e){const i=Y.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,s){var n,r;if(e===tt)return e;let o=void 0!==s?null==(n=i._$Co)?void 0:n[s]:i._$Cl;const l=ut(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(r=null==o?void 0:o._$AO)||r.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=et(t,o._$AS(t,e.values),o,s)),e}class os{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??Y).importNode(e,!0);X.currentNode=s;let n=X.nextNode(),r=0,o=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new mt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new as(n,this,t)),this._$AV.push(e),l=i[++o]}r!==(null==l?void 0:l.index)&&(n=X.nextNode(),r++)}return X.currentNode=Y,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class mt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),ut(t)?t===_||null==t||""===t?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==tt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ss(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&ut(this._$AH)?this._$AA.nextSibling.data=t:this.T(Y.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=pt.createElement(Pe(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new os(n,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=fe.get(t.strings);return void 0===e&&fe.set(t.strings,e=new pt(t)),e}k(t){Oe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new mt(this.S(dt()),this.S(dt()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=et(this,t,e,0),r=!ut(t)||t!==this._$AH&&t!==tt,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=et(this,s[i+o],e,o),l===tt&&(l=this._$AH[o]),r||(r=!ut(l)||l!==this._$AH[o]),l===_?t=_:t!==_&&(t+=(l??"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rs extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class ls extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class cs extends Tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??_)===tt)return;const i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class as{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const jt=ht.litHtmlPolyfillSupport;null==jt||jt(pt,mt),(ht.litHtmlVersions??(ht.litHtmlVersions=[])).push("3.1.3");const hs=(t,e,i)=>{const s=(null==i?void 0:i.renderBefore)??e;let n=s._$litPart$;if(void 0===n){const t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=n=new mt(e.insertBefore(dt(),t),t,void 0,i??{})}return n._$AI(t),n};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return tt}}var _e;A._$litElement$=!0,A.finalized=!0,null==(_e=globalThis.litElementHydrateSupport)||_e.call(globalThis,{LitElement:A});const Wt=globalThis.litElementPolyfillSupport;null==Wt||Wt({LitElement:A}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ds={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Zt},us=(t=ds,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function S(t){return(e,i)=>"object"==typeof i?us(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ps(t,e){return(e,i,s)=>Re(e,i,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fs(t){return(e,i)=>{const{slot:s}=t??{},n="slot"+(s?`[name=${s}]`:":not([name])");return Re(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(n);return(null==i?void 0:i.assignedNodes(t))??[]}})}}const ms=T`
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
`;var gs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,Te=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ys(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&gs(e,i,r),r};let At=class extends A{constructor(){super(...arguments),this.layout="default"}render(){return x` <slot></slot> `}};At.styles=ms,Te([S({type:String,reflect:!0})],At.prototype,"layout",2),At=Te([E("ly-app")],At);const vs=T`
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
`;var xs=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,ke=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ws(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&xs(e,i,r),r};let St=class extends A{constructor(){super(...arguments),this.solid=!1}render(){return x` <slot></slot> `}};St.styles=vs,ke([S({type:Boolean,reflect:!0})],St.prototype,"solid",2),St=ke([E("ly-icon")],St);const bs=T`
	@layer web-components {
		:host(:is(ly-check)) {
			/* local vars */
			--gap: var(--scale-5xs);

			/* base styles */
			cursor: pointer;
			display: inline-flex;
			flex-direction: column;
			flex-shrink: 0;
			gap: var(--gap);
			height: max-content;
			overflow: clip;
		}

		:host(:is(ly-check):focus-visible) {
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
`;var $s=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,gt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?_s(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&$s(e,i,r),r};let z=class extends A{constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return x`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?x`<label part="label">${this.label}</label>`:_}
			</ly-flex>
			${this.checked?x`<slot></slot>`:_}
		`}handleVariant(){switch(this.variant){case"checkbox":return x`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return x`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return x`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return x``}}};z.properties={delegatesFocus:{type:Boolean,reflect:!0}},z.styles=bs,gt([S({type:Boolean,reflect:!0})],z.prototype,"checked",2),gt([S({type:String,reflect:!0})],z.prototype,"group",2),gt([S({type:String,reflect:!0})],z.prototype,"label",2),gt([S({type:"checkbox",reflect:!0})],z.prototype,"variant",2),z=gt([E("ly-check")],z);const As=["top","right","bottom","left"],me=["start","end"],ge=As.reduce(((t,e)=>t.concat(e,e+"-"+me[0],e+"-"+me[1])),[]),W=Math.min,P=Math.max,Et=Math.round,wt=Math.floor,F=t=>({x:t,y:t}),Ss={left:"right",right:"left",bottom:"top",top:"bottom"},Es={start:"end",end:"start"};function ye(t,e,i){return P(t,W(e,i))}function K(t,e){return"function"==typeof t?t(e):t}function V(t){return t.split("-")[0]}function H(t){return t.split("-")[1]}function Qt(t){return"x"===t?"y":"x"}function Le(t){return"y"===t?"height":"width"}function nt(t){return["top","bottom"].includes(V(t))?"y":"x"}function De(t){return Qt(nt(t))}function Os(t,e,i){void 0===i&&(i=!1);const s=H(t),n=De(t),r=Le(n);let o="x"===n?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=ve(o)),[o,ve(o)]}function Cs(t){return t.replace(/start|end/g,(t=>Es[t]))}function ve(t){return t.replace(/left|right|bottom|top/g,(t=>Ss[t]))}function Ps(t){return{top:0,right:0,bottom:0,left:0,...t}}function Rs(t){return"number"!=typeof t?Ps(t):{top:t,right:t,bottom:t,left:t}}function Ot(t){const{x:e,y:i,width:s,height:n}=t;return{width:s,height:n,top:i,left:e,right:e+s,bottom:i+n,x:e,y:i}}function xe(t,e,i){let{reference:s,floating:n}=t;const r=nt(e),o=De(e),l=Le(o),a=V(e),c="y"===r,d=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,p=s[l]/2-n[l]/2;let u;switch(a){case"top":u={x:d,y:s.y-n.height};break;case"bottom":u={x:d,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:h};break;case"left":u={x:s.x-n.width,y:h};break;default:u={x:s.x,y:s.y}}switch(H(e)){case"start":u[o]-=p*(i&&c?-1:1);break;case"end":u[o]+=p*(i&&c?-1:1)}return u}const Ts=async(t,e,i)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=i,l=r.filter(Boolean),a=await(null==o.isRTL?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:n}),{x:d,y:h}=xe(c,s,a),p=s,u={},f=0;for(let i=0;i<l.length;i++){const{name:r,fn:y}=l[i],{x:m,y:g,data:v,reset:x}=await y({x:d,y:h,initialPlacement:s,placement:p,strategy:n,middlewareData:u,rects:c,platform:o,elements:{reference:t,floating:e}});d=m??d,h=g??h,u={...u,[r]:{...u[r],...v}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await o.getElementRects({reference:t,floating:e,strategy:n}):x.rects),({x:d,y:h}=xe(c,p,a))),i=-1)}return{x:d,y:h,placement:p,strategy:n,middlewareData:u}};async function kt(t,e){var i;void 0===e&&(e={});const{x:s,y:n,platform:r,rects:o,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=K(e,t),f=Rs(u),y=l[p?"floating"===h?"reference":"floating":h],m=Ot(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(y)))||i?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),g="floating"===h?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),x=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},b=Ot(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(m.top-b.top+f.top)/x.y,bottom:(b.bottom-m.bottom+f.bottom)/x.y,left:(m.left-b.left+f.left)/x.x,right:(b.right-m.right+f.right)/x.x}}function ks(t,e,i){return(t?[...i.filter((e=>H(e)===t)),...i.filter((e=>H(e)!==t))]:i.filter((t=>V(t)===t))).filter((i=>!t||(H(i)===t||!!e&&Cs(i)!==i)))}const Ls=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var i,s,n;const{rects:r,middlewareData:o,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:p=ge,autoAlignment:u=!0,...f}=K(t,e),y=void 0!==h||p===ge?ks(h||null,u,p):p,m=await kt(e,f),g=(null==(i=o.autoPlacement)?void 0:i.index)||0,v=y[g];if(null==v)return{};const x=Os(v,r,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:y[0]}};const b=[m[V(v)],m[x[0]],m[x[1]]],w=[...(null==(s=o.autoPlacement)?void 0:s.overflows)||[],{placement:v,overflows:b}],_=y[g+1];if(_)return{data:{index:g+1,overflows:w},reset:{placement:_}};const $=w.map((t=>{const e=H(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(n=$.filter((t=>t[2].slice(0,H(t[0])?2:3).every((t=>t<=0))))[0])?void 0:n[0])||$[0][0];return A!==l?{data:{index:g+1,overflows:w},reset:{placement:A}}:{}}}};async function Ds(t,e){const{placement:i,platform:s,elements:n}=t,r=await(null==s.isRTL?void 0:s.isRTL(n.floating)),o=V(i),l=H(i),a="y"===nt(i),c=["left","top"].includes(o)?-1:1,d=r&&a?-1:1,h=K(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const Ms=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:n,y:r,placement:o,middlewareData:l}=e,a=await Ds(e,t);return o===(null==(i=l.offset)?void 0:i.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:n+a.x,y:r+a.y,data:{...a,placement:o}}}}},Hs=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:n}=e,{mainAxis:r=!0,crossAxis:o=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=K(t,e),c={x:i,y:s},d=await kt(e,a),h=nt(V(n)),p=Qt(h);let u=c[p],f=c[h];if(r){const t="y"===p?"bottom":"right";u=ye(u+d["y"===p?"top":"left"],u,u-d[t])}if(o){const t="y"===h?"bottom":"right";f=ye(f+d["y"===h?"top":"left"],f,f-d[t])}const y=l.fn({...e,[p]:u,[h]:f});return{...y,data:{x:y.x-i,y:y.y-s}}}}},Ns=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:i,y:s,placement:n,rects:r,middlewareData:o}=e,{offset:l=0,mainAxis:a=!0,crossAxis:c=!0}=K(t,e),d={x:i,y:s},h=nt(n),p=Qt(h);let u=d[p],f=d[h];const y=K(l,e),m="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(a){const t="y"===p?"height":"width",e=r.reference[p]-r.floating[t]+m.mainAxis,i=r.reference[p]+r.reference[t]-m.mainAxis;u<e?u=e:u>i&&(u=i)}if(c){var g,v;const t="y"===p?"width":"height",e=["top","left"].includes(V(n)),i=r.reference[h]-r.floating[t]+(e&&(null==(g=o.offset)?void 0:g[h])||0)+(e?0:m.crossAxis),s=r.reference[h]+r.reference[t]+(e?0:(null==(v=o.offset)?void 0:v[h])||0)-(e?m.crossAxis:0);f<i?f=i:f>s&&(f=s)}return{[p]:u,[h]:f}}}},Us=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:s,platform:n,elements:r}=e,{apply:o=(()=>{}),...l}=K(t,e),a=await kt(e,l),c=V(i),d=H(i),h="y"===nt(i),{width:p,height:u}=s.floating;let f,y;"top"===c||"bottom"===c?(f=c,y=d===(await(null==n.isRTL?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(y=c,f="end"===d?"top":"bottom");const m=u-a.top-a.bottom,g=p-a.left-a.right,v=W(u-a[f],m),x=W(p-a[y],g),b=!e.middlewareData.shift;let w=v,_=x;if(h?_=d||b?W(x,g):g:w=d||b?W(v,m):m,b&&!d){const t=P(a.left,0),e=P(a.right,0),i=P(a.top,0),s=P(a.bottom,0);h?_=p-2*(0!==t||0!==e?t+e:P(a.left,a.right)):w=u-2*(0!==i||0!==s?i+s:P(a.top,a.bottom))}await o({...e,availableWidth:_,availableHeight:w});const $=await n.getDimensions(r.floating);return p!==$.width||u!==$.height?{reset:{rects:!0}}:{}}}};function ot(t){return Me(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function N(t){var e;return null==(e=(Me(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Me(t){return t instanceof Node||t instanceof R(t).Node}function L(t){return t instanceof Element||t instanceof R(t).Element}function D(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function we(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof R(t).ShadowRoot)}function yt(t){const{overflow:e,overflowX:i,overflowY:s,display:n}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(n)}function js(t){return["table","td","th"].includes(ot(t))}function te(t){const e=ee(),i=k(t);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function Ws(t){let e=I(t);for(;D(e)&&!st(e);){if(te(e))return e;e=I(e)}return null}function ee(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function st(t){return["html","body","#document"].includes(ot(t))}function k(t){return R(t).getComputedStyle(t)}function Lt(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if("html"===ot(t))return t;const e=t.assignedSlot||t.parentNode||we(t)&&t.host||N(t);return we(e)?e.host:e}function He(t){const e=I(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&yt(e)?e:He(e)}function ft(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const n=He(t),r=n===(null==(s=t.ownerDocument)?void 0:s.body),o=R(n);return r?e.concat(o,o.visualViewport||[],yt(n)?n:[],o.frameElement&&i?ft(o.frameElement):[]):e.concat(n,ft(n,[],i))}function Ne(t){const e=k(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const n=D(t),r=n?t.offsetWidth:i,o=n?t.offsetHeight:s,l=Et(i)!==r||Et(s)!==o;return l&&(i=r,s=o),{width:i,height:s,$:l}}function se(t){return L(t)?t:t.contextElement}function Q(t){const e=se(t);if(!D(e))return F(1);const i=e.getBoundingClientRect(),{width:s,height:n,$:r}=Ne(e);let o=(r?Et(i.width):i.width)/s,l=(r?Et(i.height):i.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Bs=F(0);function Ue(t){const e=R(t);return ee()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Bs}function zs(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==R(t))&&e}function J(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const n=t.getBoundingClientRect(),r=se(t);let o=F(1);e&&(s?L(s)&&(o=Q(s)):o=Q(t));const l=zs(r,i,s)?Ue(r):F(0);let a=(n.left+l.x)/o.x,c=(n.top+l.y)/o.y,d=n.width/o.x,h=n.height/o.y;if(r){const t=R(r),e=s&&L(s)?R(s):s;let i=t,n=i.frameElement;for(;n&&s&&e!==i;){const t=Q(n),e=n.getBoundingClientRect(),s=k(n),r=e.left+(n.clientLeft+parseFloat(s.paddingLeft))*t.x,o=e.top+(n.clientTop+parseFloat(s.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=r,c+=o,i=R(n),n=i.frameElement}}return Ot({width:d,height:h,x:a,y:c})}const Fs=[":popover-open",":modal"];function ie(t){return Fs.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Is(t){let{elements:e,rect:i,offsetParent:s,strategy:n}=t;const r="fixed"===n,o=N(s),l=!!e&&ie(e.floating);if(s===o||l&&r)return i;let a={scrollLeft:0,scrollTop:0},c=F(1);const d=F(0),h=D(s);if((h||!h&&!r)&&(("body"!==ot(s)||yt(o))&&(a=Lt(s)),D(s))){const t=J(s);c=Q(s),d.x=t.x+s.clientLeft,d.y=t.y+s.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+d.x,y:i.y*c.y-a.scrollTop*c.y+d.y}}function Vs(t){return Array.from(t.getClientRects())}function je(t){return J(N(t)).left+Lt(t).scrollLeft}function qs(t){const e=N(t),i=Lt(t),s=t.ownerDocument.body,n=P(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=P(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+je(t);const l=-i.scrollTop;return"rtl"===k(s).direction&&(o+=P(e.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:l}}function Gs(t,e){const i=R(t),s=N(t),n=i.visualViewport;let r=s.clientWidth,o=s.clientHeight,l=0,a=0;if(n){r=n.width,o=n.height;const t=ee();(!t||t&&"fixed"===e)&&(l=n.offsetLeft,a=n.offsetTop)}return{width:r,height:o,x:l,y:a}}function Xs(t,e){const i=J(t,!0,"fixed"===e),s=i.top+t.clientTop,n=i.left+t.clientLeft,r=D(t)?Q(t):F(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:n*r.x,y:s*r.y}}function be(t,e,i){let s;if("viewport"===e)s=Gs(t,i);else if("document"===e)s=qs(N(t));else if(L(e))s=Xs(e,i);else{const i=Ue(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return Ot(s)}function We(t,e){const i=I(t);return!(i===e||!L(i)||st(i))&&("fixed"===k(i).position||We(i,e))}function Ys(t,e){const i=e.get(t);if(i)return i;let s=ft(t,[],!1).filter((t=>L(t)&&"body"!==ot(t))),n=null;const r="fixed"===k(t).position;let o=r?I(t):t;for(;L(o)&&!st(o);){const e=k(o),i=te(o);!i&&"fixed"===e.position&&(n=null),(r?!i&&!n:!i&&"static"===e.position&&n&&["absolute","fixed"].includes(n.position)||yt(o)&&!i&&We(t,o))?s=s.filter((t=>t!==o)):n=e,o=I(o)}return e.set(t,s),s}function Ks(t){let{element:e,boundary:i,rootBoundary:s,strategy:n}=t;const r=[..."clippingAncestors"===i?ie(e)?[]:Ys(e,this._c):[].concat(i),s],o=r[0],l=r.reduce(((t,i)=>{const s=be(e,i,n);return t.top=P(s.top,t.top),t.right=W(s.right,t.right),t.bottom=W(s.bottom,t.bottom),t.left=P(s.left,t.left),t}),be(e,o,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Js(t){const{width:e,height:i}=Ne(t);return{width:e,height:i}}function Zs(t,e,i){const s=D(e),n=N(e),r="fixed"===i,o=J(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=F(0);if(s||!s&&!r)if(("body"!==ot(e)||yt(n))&&(l=Lt(e)),s){const t=J(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else n&&(a.x=je(n));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Bt(t){return"static"===k(t).position}function $e(t,e){return D(t)&&"fixed"!==k(t).position?e?e(t):t.offsetParent:null}function Be(t,e){const i=R(t);if(ie(t))return i;if(!D(t)){let e=I(t);for(;e&&!st(e);){if(L(e)&&!Bt(e))return e;e=I(e)}return i}let s=$e(t,e);for(;s&&js(s)&&Bt(s);)s=$e(s,e);return s&&st(s)&&Bt(s)&&!te(s)?i:s||Ws(t)||i}const Qs=async function(t){const e=this.getOffsetParent||Be,i=this.getDimensions,s=await i(t.floating);return{reference:Zs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function ti(t){return"rtl"===k(t).direction}const ei={convertOffsetParentRelativeRectToViewportRelativeRect:Is,getDocumentElement:N,getClippingRect:Ks,getOffsetParent:Be,getElementRects:Qs,getClientRects:Vs,getDimensions:Js,getScale:Q,isElement:L,isRTL:ti};function si(t,e){let i,s=null;const n=N(t);function r(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function o(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-wt(d)+"px "+-wt(n.clientWidth-(c+h))+"px "+-wt(n.clientHeight-(d+p))+"px "+-wt(c)+"px",threshold:P(0,W(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return o();e?o(!1,e):i=setTimeout((()=>{o(!1,1e-7)}),1e3)}f=!1}try{s=new IntersectionObserver(y,{...u,root:n.ownerDocument})}catch{s=new IntersectionObserver(y,u)}s.observe(t)}(!0),r}function ii(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:o="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=s,c=se(t),d=n||r?[...c?ft(c):[],...ft(e)]:[];d.forEach((t=>{n&&t.addEventListener("scroll",i,{passive:!0}),r&&t.addEventListener("resize",i)}));const h=c&&l?si(c,i):null;let p=-1,u=null;o&&(u=new ResizeObserver((t=>{let[s]=t;s&&s.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),i()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?J(t):null;return a&&function e(){const s=J(t);y&&(s.x!==y.x||s.y!==y.y||s.width!==y.width||s.height!==y.height)&&i(),y=s,f=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach((t=>{n&&t.removeEventListener("scroll",i),r&&t.removeEventListener("resize",i)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const ni=kt,oi=Ms,ri=Ls,li=Hs,ci=Us,ai=Ns,hi=(t,e,i)=>{const s=new Map,n={platform:ei,...i},r={...n.platform,_c:s};return Ts(t,e,{...n,platform:r})};var di=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,Dt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ui(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&di(e,i,r),r};let it=class extends A{constructor(){super(...arguments),this.open=!1}firstUpdated(){document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return x`
			<slot name="summary" @click=${this._toggleOpen}></slot>
			${this.open?x`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:_}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=ii(this._dropsummary[0],this._dropmenu,(async()=>{const{x:t,y:e}=await hi(this._dropsummary[0],this._dropmenu,{middleware:[ri({autoAlignment:!0,alignment:"bottom",crossAxis:!0,padding:3}),oi(3),li((()=>({crossAxis:!0,mainAxis:!0,limiter:ai({offset:({rects:t})=>({crossAxis:t.floating.width,mainAxis:t.reference.height})})}))),ci({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await ni(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})}],placement:"bottom",strategy:"fixed"});Object.assign(this._dropmenu.style,{inset:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}clickOutsideHandler(t){var e;const i=t.composedPath()[0],s=!(null!=(e=this.shadowRoot)&&e.contains(i)||this.contains(i));this.open&&s&&(this.open=!1)}};it.styles=T`
		:host(:is(ly-dropdown)) {
			display: inline-flex;
			min-height: 0;
			position: relative;
			width: fit-content;
			visibility: hidden;
		}

		:host(:is(ly-dropdown)) > * {
			visibility: visible;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu) {
			--bg: var(--clr-background);
			--gap: 0;
			--outln-clr: var(--bg);
			--radius: var(--scale-sm);
			--spacing: var(--scale-5xs);

			background-color: var(--bg);
			border-radius: var(--radius);
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			height: max-content;
			isolation: isolate;
			max-height: calc(clamp(16dvh, 25dvh, 32dvh) + var(--scale-5xl));
			max-width: calc(100dvw - var(--scale-sm));
			min-height: max-content;
			min-width: max-content;
			outline: solid 0.125rem
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					white 3%
				);
			outline-offset: -0.125rem;
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			/*width: fit-content;*/
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
			/*clip-path: inset(0% round var(--radius));*/
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			/*mask: linear-gradient(
				90deg,
				transparent,
				black var(--percent),
				black calc(100% - var(--percent)),
				transparent
			);*/
			/*mask: radial-gradient(circle at center, transparent, var(--bg) var(--percent));*/
			overflow-x: clip;
			overflow-y: auto;
			transition: transform var(--animDefaults);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`,Dt([S({type:Boolean,reflect:!0})],it.prototype,"open",2),Dt([fs({slot:"summary",flatten:!0})],it.prototype,"_dropsummary",2),Dt([ps('div[part="dropmenu"]')],it.prototype,"_dropmenu",2),it=Dt([E("ly-dropdown")],it);const pi=T`
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
				--outln-clr: var(--clr-debug) !important;
		}

		:host(:is(ly-field)[status='error'])
			::slotted(:where(input, select, textarea)) {
				--outln-clr: var(--clr-error) !important;
		}

		:host(:is(ly-field)[status='info'])
			::slotted(:where(input, select, textarea)) {
				--outln-clr: var(--clr-info) !important;
		}

		:host(:is(ly-field)[status='success'])
			::slotted(:where(input, select, textarea)) {
			--outln-clr: var(--clr-success) !important;
		}

		:host(:is(ly-field)[status='warning'])
			::slotted(:where(input, select, textarea)) {
				--outln-clr: var(--clr-warning) !important;
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
`;var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,q=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?mi(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&fi(e,i,r),r};let M=class extends A{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.ref="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let i=null==e?void 0:e.assignedElements();i&&i.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.ref&&t.setAttribute("id",this.ref),this.name&&t.setAttribute("name",this.name),this.required&&t.setAttribute("required",`${this.required}`),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return x`
			${this.label?x`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:_}

			<slot></slot>

			${this.caption?x`
						<ly-flex axis="row" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text" html>${this.caption}</small>
						</ly-flex>
				  `:_}
		`}setRequiredIcon(){return this.required?x`<ly-icon part="required-icon">asterisk</ly-icon>`:x``}setStatusIcon(){switch(this.status){case"debug":return x`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return x`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return x`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return x`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return x`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return x``}}};M.styles=pi,q([S({type:String})],M.prototype,"label",2),q([S({type:String})],M.prototype,"caption",2),q([S({type:String})],M.prototype,"name",2),q([S({type:String})],M.prototype,"ref",2),q([S({type:Boolean,reflect:!0})],M.prototype,"required",2),q([S({type:"debug"})],M.prototype,"status",2),q([S({type:String})],M.prototype,"type",2),M=q([E("ly-field")],M);var gi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,vi=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?yi(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&gi(e,i,r),r};let zt=class extends A{render(){return x` <slot></slot> `}};zt.styles=T`
		:host {
			display: contents;
		}
	`,zt=vi([E("ly-fragment")],zt);const xi=T`
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
`;var wi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,ze=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?bi(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&wi(e,i,r),r};let Ct=class extends A{constructor(){super(...arguments),this.stacked="over"}render(){return x` <slot></slot> `}};Ct.styles=xi,ze([S({type:String,reflect:!0})],Ct.prototype,"stacked",2),Ct=ze([E("ly-layer")],Ct);var ne=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(ne||{});const $i=T`
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
`,_i=T`
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
`,Ai=T`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var Si=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Mt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Ei(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Si(e,i,r),r};let Pt=class extends A{constructor(){super(...arguments),this.axis="row"}render(){return x` <slot></slot> `}};Pt.styles=$i,Mt([S({type:ne,reflect:!0})],Pt.prototype,"axis",2),Pt=Mt([E("ly-flex")],Pt);let Ft=class extends A{render(){return x` <slot></slot> `}};Ft.styles=_i,Ft=Mt([E("ly-grid")],Ft);let It=class extends A{render(){return x` <slot></slot> `}};It.styles=Ai,It=Mt([E("ly-group")],It);const vt=T`
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
`;var Oi=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,xt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Ci(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Oi(e,i,r),r};let Vt=class extends A{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return x` <slot></slot> `}};Vt.styles=vt,Vt=xt([E("ly-list")],Vt);let qt=class extends A{render(){return x` <slot></slot> `}};qt.styles=vt,qt=xt([E("ly-list-header")],qt);let Gt=class extends A{render(){return x` <slot></slot> `}};Gt.styles=vt,Gt=xt([E("ly-list-row")],Gt);let Xt=class extends A{render(){return x` <slot></slot> `}};Xt.styles=vt,Xt=xt([E("ly-list-footer")],Xt);let Yt=class extends A{render(){return x` <slot></slot> `}};Yt.styles=vt,Yt=xt([E("ly-list-cell")],Yt);const Pi=T`
	@layer web-components {
		:host(:is(ly-slider)) {
			/* local vars */
			--bg: none;
			--display: grid;
			--gap: var(--scale-2xl);
			--padding: 0;

			/* base styles */
			background-color: var(--bg);
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
`;var Ri=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Fe=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Ti(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&Ri(e,i,r),r};let Rt=class extends A{constructor(){super(...arguments),this.axis="row"}render(){return x` <slot></slot> `}};Rt.styles=Pi,Fe([S({type:ne,reflect:!0})],Rt.prototype,"axis",2),Rt=Fe([E("ly-slider")],Rt);export{At as App,z as Check,it as Dropdown,M as Field,Pt as Flex,zt as Fragment,Ft as Grid,It as Group,St as Icon,Ct as Layer,Vt as List,Yt as ListCell,Xt as ListFooter,qt as ListHeader,Gt as ListRow,Rt as Slider};