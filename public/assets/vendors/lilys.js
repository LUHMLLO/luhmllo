/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt=globalThis,Kt=bt.ShadowRoot&&(void 0===bt.ShadyCSS||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),ie=new WeakMap;let _e=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kt&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=ie.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ie.set(e,t))}return t}toString(){return this.cssText}};const qe=t=>new _e("string"==typeof t?t:t+"",void 0,Jt),R=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new _e(n,t,Jt)},Ge=(t,e)=>{if(Kt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),s=bt.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=n.cssText,t.appendChild(e)}},oe=Kt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return qe(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Xe,defineProperty:Ye,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Je,getOwnPropertySymbols:Ze,getPrototypeOf:Qe}=Object,B=globalThis,re=B.trustedTypes,ts=re?re.emptyScript:"",Nt=B.reactiveElementPolyfillSupport,lt=(t,e)=>t,$t={toAttribute(t,e){switch(e){case Boolean:t=t?ts:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Zt=(t,e)=>!Xe(t,e),le={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Zt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),B.litPropertyMetadata??(B.litPropertyMetadata=new WeakMap);class J extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=le){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Ye(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){const{get:s,set:r}=Ke(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){const i=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??le}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=Qe(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const t=this.properties,e=[...Je(t),...Ze(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(oe(t))}else void 0!==t&&e.push(oe(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ge(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==(null==(n=s.converter)?void 0:n.toAttribute)?s.converter:$t).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(n=t.converter)?void 0:n.fromAttribute)?t.converter:$t;this._$Em=r,this[r]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Zt)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[lt("elementProperties")]=new Map,J[lt("finalized")]=new Map,null==Nt||Nt({ReactiveElement:J}),(B.reactiveElementVersions??(B.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=globalThis,_t=ct.trustedTypes,ce=_t?_t.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ae="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+j,es=`<${Ee}>`,X=document,at=()=>X.createComment(""),ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Se=Array.isArray,ss=t=>Se(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Ut="[ \t\n\f\r]",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,he=/>/g,q=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,ue=/"/g,Oe=/^(?:script|style|textarea|title)$/i,ns=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),g=ns(1),Q=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),pe=new WeakMap,G=X.createTreeWalker(X,129);function Ce(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ce?ce.createHTML(e):e}const is=(t,e)=>{const n=t.length-1,s=[];let r,i=2===e?"<svg>":"",o=rt;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,d=0;for(;d<n.length&&(o.lastIndex=d,a=o.exec(n),null!==a);)d=o.lastIndex,o===rt?"!--"===a[1]?o=ae:void 0!==a[1]?o=he:void 0!==a[2]?(Oe.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=q):void 0!==a[3]&&(o=q):o===q?">"===a[0]?(o=r??rt,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?q:'"'===a[3]?ue:de):o===ue||o===de?o=q:o===ae||o===he?o=rt:(o=q,r=void 0);const h=o===q&&t[e+1].startsWith("/>")?" ":"";i+=o===rt?n+es:c>=0?(s.push(l),n.slice(0,c)+Ae+n.slice(c)+j+h):n+j+(-2===c?e:h)}return[Ce(t,i+(t[n]||"<?>")+(2===e?"</svg>":"")),s]};class dt{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let r=0,i=0;const o=t.length-1,l=this.parts,[a,c]=is(t,e);if(this.el=dt.createElement(a,n),G.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(Ae)){const e=c[i++],n=s.getAttribute(t).split(j),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:n,ctor:"."===o[1]?rs:"?"===o[1]?ls:"@"===o[1]?cs:Tt}),s.removeAttribute(t)}else t.startsWith(j)&&(l.push({type:6,index:r}),s.removeAttribute(t));if(Oe.test(s.tagName)){const t=s.textContent.split(j),e=t.length-1;if(e>0){s.textContent=_t?_t.emptyScript:"";for(let n=0;n<e;n++)s.append(t[n],at()),G.nextNode(),l.push({type:2,index:++r});s.append(t[e],at())}}}else if(8===s.nodeType)if(s.data===Ee)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(j,t+1));)l.push({type:7,index:r}),t+=j.length-1}r++}}static createElement(t,e){const n=X.createElement("template");return n.innerHTML=t,n}}function tt(t,e,n=t,s){var r,i;if(e===Q)return e;let o=void 0!==s?null==(r=n._$Co)?void 0:r[s]:n._$Cl;const l=ht(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(i=null==o?void 0:o._$AO)||i.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,n,s)),void 0!==s?(n._$Co??(n._$Co=[]))[s]=o:n._$Cl=o),void 0!==o&&(e=tt(t,o._$AS(t,e.values),o,s)),e}class os{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,s=((null==t?void 0:t.creationScope)??X).importNode(e,!0);G.currentNode=s;let r=G.nextNode(),i=0,o=0,l=n[0];for(;void 0!==l;){if(i===l.index){let e;2===l.type?e=new pt(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new as(r,this,t)),this._$AV.push(e),l=n[++o]}i!==(null==l?void 0:l.index)&&(r=G.nextNode(),i++)}return G.currentNode=X,s}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class pt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),ht(t)?t===$||null==t||""===t?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ss(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(X.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=dt.createElement(Ce(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(n);else{const t=new os(r,this),e=t.u(this.options);t.p(n),this.T(e),this._$AH=t}}_$AC(t){let e=pe.get(t.strings);return void 0===e&&pe.set(t.strings,e=new dt(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const r of t)s===e.length?e.push(n=new pt(this.S(at()),this.S(at()),this,this.options)):n=e[s],n._$AI(r),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for(null==(n=this._$AP)||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,s){const r=this.strings;let i=!1;if(void 0===r)t=tt(this,t,e,0),i=!ht(t)||t!==this._$AH&&t!==Q,i&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=tt(this,s[n+o],e,o),l===Q&&(l=this._$AH[o]),i||(i=!ht(l)||l!==this._$AH[o]),l===$?t=$:t!==$&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}i&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rs extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class ls extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class cs extends Tt{constructor(t,e,n,s,r){super(t,e,n,s,r),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??$)===Q)return;const n=this._$AH,s=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==$&&(n===$||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class as{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const jt=ct.litHtmlPolyfillSupport;null==jt||jt(dt,pt),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.1.3");const hs=(t,e,n)=>{const s=(null==n?void 0:n.renderBefore)??e;let r=s._$litPart$;if(void 0===r){const t=(null==n?void 0:n.renderBefore)??null;s._$litPart$=r=new pt(e.insertBefore(at(),t),t,void 0,n??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Q}}var $e;_._$litElement$=!0,_.finalized=!0,null==($e=globalThis.litElementHydrateSupport)||$e.call(globalThis,{LitElement:_});const Wt=globalThis.litElementPolyfillSupport;null==Wt||Wt({LitElement:_}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ds={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Zt},us=(t=ds,e,n)=>{const{kind:s,metadata:r}=n;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(n.name,t),"accessor"===s){const{name:s}=n;return{set(n){const r=e.get.call(this);e.set.call(this,n),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=n;return function(n){const r=this[s];e.call(this,n),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function E(t){return(e,n)=>"object"==typeof n?us(t,e,n):((t,e,n)=>{const s=e.hasOwnProperty(n);return e.constructor.createProperty(n,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ps(t,e){return(e,n,s)=>Pe(e,n,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fs(t){return(e,n)=>{const{slot:s}=t??{},r="slot"+(s?`[name=${s}]`:":not([name])");return Pe(e,n,{get(){var e;const n=null==(e=this.renderRoot)?void 0:e.querySelector(r);return(null==n?void 0:n.assignedNodes(t))??[]}})}}const ms=R`
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
`;var ys=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,Re=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?gs(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&ys(e,n,i),i};let At=class extends _{constructor(){super(...arguments),this.layout="default"}render(){return g` <slot></slot> `}};At.styles=ms,Re([E({type:String,reflect:!0})],At.prototype,"layout",2),At=Re([S("ly-app")],At);const vs=R`
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
`;var xs=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,Te=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?ws(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&xs(e,n,i),i};let Et=class extends _{constructor(){super(...arguments),this.solid=!1}render(){return g` <slot></slot> `}};Et.styles=vs,Te([E({type:Boolean,reflect:!0})],Et.prototype,"solid",2),Et=Te([S("ly-icon")],Et);const bs=R`
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
`;var $s=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,ft=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?_s(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&$s(e,n,i),i};let z=class extends _{constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this.toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this.toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this.toggleChecked()}))}render(){return g`
			<ly-flex axis="row" part="row">
				<ly-icon ?solid="${this.checked}"> ${this.handleVariant()} </ly-icon>
				${this.label?g`<label part="label">${this.label}</label>`:$}
			</ly-flex>
			${this.checked?g`<slot></slot>`:$}
		`}handleVariant(){switch(this.variant){case"checkbox":return g`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return g`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return g`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return g``}}};z.properties={delegatesFocus:{type:Boolean,reflect:!0}},z.styles=bs,ft([E({type:Boolean,reflect:!0})],z.prototype,"checked",2),ft([E({type:String,reflect:!0})],z.prototype,"group",2),ft([E({type:String,reflect:!0})],z.prototype,"label",2),ft([E({type:"checkbox",reflect:!0})],z.prototype,"variant",2),z=ft([S("ly-check")],z);const As=["top","right","bottom","left"],fe=["start","end"],me=As.reduce(((t,e)=>t.concat(e,e+"-"+fe[0],e+"-"+fe[1])),[]),W=Math.min,C=Math.max,St=Math.round,wt=Math.floor,F=t=>({x:t,y:t}),Es={left:"right",right:"left",bottom:"top",top:"bottom"},Ss={start:"end",end:"start"};function ye(t,e,n){return C(t,W(e,n))}function mt(t,e){return"function"==typeof t?t(e):t}function K(t){return t.split("-")[0]}function M(t){return t.split("-")[1]}function ke(t){return"x"===t?"y":"x"}function Le(t){return"y"===t?"height":"width"}function yt(t){return["top","bottom"].includes(K(t))?"y":"x"}function De(t){return ke(yt(t))}function Os(t,e,n){void 0===n&&(n=!1);const s=M(t),r=De(t),i=Le(r);let o="x"===r?s===(n?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[i]>e.floating[i]&&(o=ge(o)),[o,ge(o)]}function Cs(t){return t.replace(/start|end/g,(t=>Ss[t]))}function ge(t){return t.replace(/left|right|bottom|top/g,(t=>Es[t]))}function Ps(t){return{top:0,right:0,bottom:0,left:0,...t}}function Rs(t){return"number"!=typeof t?Ps(t):{top:t,right:t,bottom:t,left:t}}function Ot(t){const{x:e,y:n,width:s,height:r}=t;return{width:s,height:r,top:n,left:e,right:e+s,bottom:n+r,x:e,y:n}}function ve(t,e,n){let{reference:s,floating:r}=t;const i=yt(e),o=De(e),l=Le(o),a=K(e),c="y"===i,d=s.x+s.width/2-r.width/2,h=s.y+s.height/2-r.height/2,p=s[l]/2-r[l]/2;let u;switch(a){case"top":u={x:d,y:s.y-r.height};break;case"bottom":u={x:d,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:h};break;case"left":u={x:s.x-r.width,y:h};break;default:u={x:s.x,y:s.y}}switch(M(e)){case"start":u[o]-=p*(n&&c?-1:1);break;case"end":u[o]+=p*(n&&c?-1:1)}return u}const Ts=async(t,e,n)=>{const{placement:s="bottom",strategy:r="absolute",middleware:i=[],platform:o}=n,l=i.filter(Boolean),a=await(null==o.isRTL?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=ve(c,s,a),p=s,u={},f=0;for(let n=0;n<l.length;n++){const{name:i,fn:y}=l[n],{x:g,y:m,data:v,reset:x}=await y({x:d,y:h,initialPlacement:s,placement:p,strategy:r,middlewareData:u,rects:c,platform:o,elements:{reference:t,floating:e}});d=g??d,h=m??h,u={...u,[i]:{...u[i],...v}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await o.getElementRects({reference:t,floating:e,strategy:r}):x.rects),({x:d,y:h}=ve(c,p,a))),n=-1)}return{x:d,y:h,placement:p,strategy:r,middlewareData:u}};async function kt(t,e){var n;void 0===e&&(e={});const{x:s,y:r,platform:i,rects:o,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=mt(e,t),f=Rs(u),y=l[p?"floating"===h?"reference":"floating":h],g=Ot(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(y)))||n?y:y.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),m="floating"===h?{x:s,y:r,width:o.floating.width,height:o.floating.height}:o.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),x=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},b=Ot(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:m,offsetParent:v,strategy:a}):m);return{top:(g.top-b.top+f.top)/x.y,bottom:(b.bottom-g.bottom+f.bottom)/x.y,left:(g.left-b.left+f.left)/x.x,right:(b.right-g.right+f.right)/x.x}}function ks(t,e,n){return(t?[...n.filter((e=>M(e)===t)),...n.filter((e=>M(e)!==t))]:n.filter((t=>K(t)===t))).filter((n=>!t||(M(n)===t||!!e&&Cs(n)!==n)))}const Ls=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,s,r;const{rects:i,middlewareData:o,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:p=me,autoAlignment:u=!0,...f}=mt(t,e),y=void 0!==h||p===me?ks(h||null,u,p):p,g=await kt(e,f),m=(null==(n=o.autoPlacement)?void 0:n.index)||0,v=y[m];if(null==v)return{};const x=Os(v,i,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:y[0]}};const b=[g[K(v)],g[x[0]],g[x[1]]],w=[...(null==(s=o.autoPlacement)?void 0:s.overflows)||[],{placement:v,overflows:b}],$=y[m+1];if($)return{data:{index:m+1,overflows:w},reset:{placement:$}};const _=w.map((t=>{const e=M(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(r=_.filter((t=>t[2].slice(0,M(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||_[0][0];return A!==l?{data:{index:m+1,overflows:w},reset:{placement:A}}:{}}}};async function Ds(t,e){const{placement:n,platform:s,elements:r}=t,i=await(null==s.isRTL?void 0:s.isRTL(r.floating)),o=K(n),l=M(n),a="y"===yt(n),c=["left","top"].includes(o)?-1:1,d=i&&a?-1:1,h=mt(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const Hs=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,s;const{x:r,y:i,placement:o,middlewareData:l}=e,a=await Ds(e,t);return o===(null==(n=l.offset)?void 0:n.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:o}}}}},Ms=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:s,placement:r}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=mt(t,e),c={x:n,y:s},d=await kt(e,a),h=yt(K(r)),p=ke(h);let u=c[p],f=c[h];if(i){const t="y"===p?"bottom":"right";u=ye(u+d["y"===p?"top":"left"],u,u-d[t])}if(o){const t="y"===h?"bottom":"right";f=ye(f+d["y"===h?"top":"left"],f,f-d[t])}const y=l.fn({...e,[p]:u,[h]:f});return{...y,data:{x:y.x-n,y:y.y-s}}}}},Ns=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:s,platform:r,elements:i}=e,{apply:o=(()=>{}),...l}=mt(t,e),a=await kt(e,l),c=K(n),d=M(n),h="y"===yt(n),{width:p,height:u}=s.floating;let f,y;"top"===c||"bottom"===c?(f=c,y=d===(await(null==r.isRTL?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(y=c,f="end"===d?"top":"bottom");const g=u-a.top-a.bottom,m=p-a.left-a.right,v=W(u-a[f],g),x=W(p-a[y],m),b=!e.middlewareData.shift;let w=v,$=x;if(h?$=d||b?W(x,m):m:w=d||b?W(v,g):g,b&&!d){const t=C(a.left,0),e=C(a.right,0),n=C(a.top,0),s=C(a.bottom,0);h?$=p-2*(0!==t||0!==e?t+e:C(a.left,a.right)):w=u-2*(0!==n||0!==s?n+s:C(a.top,a.bottom))}await o({...e,availableWidth:$,availableHeight:w});const _=await r.getDimensions(i.floating);return p!==_.width||u!==_.height?{reset:{rects:!0}}:{}}}};function nt(t){return He(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function N(t){var e;return null==(e=(He(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function He(t){return t instanceof Node||t instanceof P(t).Node}function L(t){return t instanceof Element||t instanceof P(t).Element}function D(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function xe(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof P(t).ShadowRoot)}function gt(t){const{overflow:e,overflowX:n,overflowY:s,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+n)&&!["inline","contents"].includes(r)}function Us(t){return["table","td","th"].includes(nt(t))}function Qt(t){const e=te(),n=T(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function js(t){let e=I(t);for(;D(e)&&!et(e);){if(Qt(e))return e;e=I(e)}return null}function te(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(nt(t))}function T(t){return P(t).getComputedStyle(t)}function Lt(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if("html"===nt(t))return t;const e=t.assignedSlot||t.parentNode||xe(t)&&t.host||N(t);return xe(e)?e.host:e}function Me(t){const e=I(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&gt(e)?e:Me(e)}function ut(t,e,n){var s;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=Me(t),i=r===(null==(s=t.ownerDocument)?void 0:s.body),o=P(r);return i?e.concat(o,o.visualViewport||[],gt(r)?r:[],o.frameElement&&n?ut(o.frameElement):[]):e.concat(r,ut(r,[],n))}function Ne(t){const e=T(t);let n=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const r=D(t),i=r?t.offsetWidth:n,o=r?t.offsetHeight:s,l=St(n)!==i||St(s)!==o;return l&&(n=i,s=o),{width:n,height:s,$:l}}function ee(t){return L(t)?t:t.contextElement}function Z(t){const e=ee(t);if(!D(e))return F(1);const n=e.getBoundingClientRect(),{width:s,height:r,$:i}=Ne(e);let o=(i?St(n.width):n.width)/s,l=(i?St(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Ws=F(0);function Ue(t){const e=P(t);return te()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Ws}function Bs(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==P(t))&&e}function Y(t,e,n,s){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),i=ee(t);let o=F(1);e&&(s?L(s)&&(o=Z(s)):o=Z(t));const l=Bs(i,n,s)?Ue(i):F(0);let a=(r.left+l.x)/o.x,c=(r.top+l.y)/o.y,d=r.width/o.x,h=r.height/o.y;if(i){const t=P(i),e=s&&L(s)?P(s):s;let n=t,r=n.frameElement;for(;r&&s&&e!==n;){const t=Z(r),e=r.getBoundingClientRect(),s=T(r),i=e.left+(r.clientLeft+parseFloat(s.paddingLeft))*t.x,o=e.top+(r.clientTop+parseFloat(s.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=i,c+=o,n=P(r),r=n.frameElement}}return Ot({width:d,height:h,x:a,y:c})}const zs=[":popover-open",":modal"];function se(t){return zs.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Fs(t){let{elements:e,rect:n,offsetParent:s,strategy:r}=t;const i="fixed"===r,o=N(s),l=!!e&&se(e.floating);if(s===o||l&&i)return n;let a={scrollLeft:0,scrollTop:0},c=F(1);const d=F(0),h=D(s);if((h||!h&&!i)&&(("body"!==nt(s)||gt(o))&&(a=Lt(s)),D(s))){const t=Y(s);c=Z(s),d.x=t.x+s.clientLeft,d.y=t.y+s.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+d.x,y:n.y*c.y-a.scrollTop*c.y+d.y}}function Is(t){return Array.from(t.getClientRects())}function je(t){return Y(N(t)).left+Lt(t).scrollLeft}function Vs(t){const e=N(t),n=Lt(t),s=t.ownerDocument.body,r=C(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),i=C(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let o=-n.scrollLeft+je(t);const l=-n.scrollTop;return"rtl"===T(s).direction&&(o+=C(e.clientWidth,s.clientWidth)-r),{width:r,height:i,x:o,y:l}}function qs(t,e){const n=P(t),s=N(t),r=n.visualViewport;let i=s.clientWidth,o=s.clientHeight,l=0,a=0;if(r){i=r.width,o=r.height;const t=te();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:i,height:o,x:l,y:a}}function Gs(t,e){const n=Y(t,!0,"fixed"===e),s=n.top+t.clientTop,r=n.left+t.clientLeft,i=D(t)?Z(t):F(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:r*i.x,y:s*i.y}}function we(t,e,n){let s;if("viewport"===e)s=qs(t,n);else if("document"===e)s=Vs(N(t));else if(L(e))s=Gs(e,n);else{const n=Ue(t);s={...e,x:e.x-n.x,y:e.y-n.y}}return Ot(s)}function We(t,e){const n=I(t);return!(n===e||!L(n)||et(n))&&("fixed"===T(n).position||We(n,e))}function Xs(t,e){const n=e.get(t);if(n)return n;let s=ut(t,[],!1).filter((t=>L(t)&&"body"!==nt(t))),r=null;const i="fixed"===T(t).position;let o=i?I(t):t;for(;L(o)&&!et(o);){const e=T(o),n=Qt(o);!n&&"fixed"===e.position&&(r=null),(i?!n&&!r:!n&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||gt(o)&&!n&&We(t,o))?s=s.filter((t=>t!==o)):r=e,o=I(o)}return e.set(t,s),s}function Ys(t){let{element:e,boundary:n,rootBoundary:s,strategy:r}=t;const i=[..."clippingAncestors"===n?se(e)?[]:Xs(e,this._c):[].concat(n),s],o=i[0],l=i.reduce(((t,n)=>{const s=we(e,n,r);return t.top=C(s.top,t.top),t.right=W(s.right,t.right),t.bottom=W(s.bottom,t.bottom),t.left=C(s.left,t.left),t}),we(e,o,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ks(t){const{width:e,height:n}=Ne(t);return{width:e,height:n}}function Js(t,e,n){const s=D(e),r=N(e),i="fixed"===n,o=Y(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const a=F(0);if(s||!s&&!i)if(("body"!==nt(e)||gt(r))&&(l=Lt(e)),s){const t=Y(e,!0,i,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=je(r));return{x:o.left+l.scrollLeft-a.x,y:o.top+l.scrollTop-a.y,width:o.width,height:o.height}}function Bt(t){return"static"===T(t).position}function be(t,e){return D(t)&&"fixed"!==T(t).position?e?e(t):t.offsetParent:null}function Be(t,e){const n=P(t);if(se(t))return n;if(!D(t)){let e=I(t);for(;e&&!et(e);){if(L(e)&&!Bt(e))return e;e=I(e)}return n}let s=be(t,e);for(;s&&Us(s)&&Bt(s);)s=be(s,e);return s&&et(s)&&Bt(s)&&!Qt(s)?n:s||js(t)||n}const Zs=async function(t){const e=this.getOffsetParent||Be,n=this.getDimensions,s=await n(t.floating);return{reference:Js(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Qs(t){return"rtl"===T(t).direction}const tn={convertOffsetParentRelativeRectToViewportRelativeRect:Fs,getDocumentElement:N,getClippingRect:Ys,getOffsetParent:Be,getElementRects:Zs,getClientRects:Is,getDimensions:Ks,getScale:Z,isElement:L,isRTL:Qs};function en(t,e){let n,s=null;const r=N(t);function i(){var t;clearTimeout(n),null==(t=s)||t.disconnect(),s=null}return function o(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),i();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-wt(d)+"px "+-wt(r.clientWidth-(c+h))+"px "+-wt(r.clientHeight-(d+p))+"px "+-wt(c)+"px",threshold:C(0,W(1,a))||1};let f=!0;function y(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return o();e?o(!1,e):n=setTimeout((()=>{o(!1,1e-7)}),1e3)}f=!1}try{s=new IntersectionObserver(y,{...u,root:r.ownerDocument})}catch{s=new IntersectionObserver(y,u)}s.observe(t)}(!0),i}function sn(t,e,n,s){void 0===s&&(s={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:o="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=s,c=ee(t),d=r||i?[...c?ut(c):[],...ut(e)]:[];d.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),i&&t.addEventListener("resize",n)}));const h=c&&l?en(c,n):null;let p=-1,u=null;o&&(u=new ResizeObserver((t=>{let[s]=t;s&&s.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),n()})),c&&!a&&u.observe(c),u.observe(e));let f,y=a?Y(t):null;return a&&function e(){const s=Y(t);y&&(s.x!==y.x||s.y!==y.y||s.width!==y.width||s.height!==y.height)&&n(),y=s,f=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{r&&t.removeEventListener("scroll",n),i&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const nn=kt,on=Hs,rn=Ls,ln=Ms,cn=Ns,an=(t,e,n)=>{const s=new Map,r={platform:tn,...n},i={...r.platform,_c:s};return Ts(t,e,{...r,platform:i})};var hn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,Dt=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?dn(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&hn(e,n,i),i};let st=class extends _{constructor(){super(...arguments),this.open=!1}firstUpdated(){document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return g`
			<slot name="summary" @click=${this._toggleOpen}></slot>
			${this.open?g`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:$}
		`}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=sn(this._dropsummary[0],this._dropmenu,(async()=>{const{x:t,y:e}=await an(this._dropsummary[0],this._dropmenu,{middleware:[rn({autoAlignment:!0,alignment:"bottom",crossAxis:!0,padding:3}),on(3),ln({crossAxis:!0,mainAxis:!0}),cn({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await nn(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})}],placement:"bottom",strategy:"fixed"});Object.assign(this._dropmenu.style,{top:"0",left:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}clickOutsideHandler(t){var e;const n=t.composedPath()[0],s=!(null!=(e=this.shadowRoot)&&e.contains(n)||this.contains(n));this.open&&s&&(this.open=!1)}};st.styles=R`
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
			transition: inset var(--animDefaults), margin var(--animDefaults),
				transform var(--animDefaults), translate var(--animDefaults);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`,Dt([E({type:Boolean,reflect:!0})],st.prototype,"open",2),Dt([fs({slot:"summary",flatten:!0})],st.prototype,"_dropsummary",2),Dt([ps('div[part="dropmenu"]')],st.prototype,"_dropmenu",2),st=Dt([S("ly-dropdown")],st);const un=R`
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
`;var pn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,V=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?fn(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&pn(e,n,i),i};let H=class extends _{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.ref="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let n=null==e?void 0:e.assignedElements();n&&n.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.ref&&t.setAttribute("id",this.ref),this.name&&t.setAttribute("name",this.name),this.required&&t.setAttribute("required",`${this.required}`),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return g`
			${this.label?g`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:$}

			<slot></slot>

			${this.caption?g`
						<ly-flex axis="row" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text" html>${this.caption}</small>
						</ly-flex>
				  `:$}
		`}setRequiredIcon(){return this.required?g`<ly-icon part="required-icon">asterisk</ly-icon>`:g``}setStatusIcon(){switch(this.status){case"debug":return g`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return g`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return g`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return g`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return g`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return g``}}};H.styles=un,V([E({type:String})],H.prototype,"label",2),V([E({type:String})],H.prototype,"caption",2),V([E({type:String})],H.prototype,"name",2),V([E({type:String})],H.prototype,"ref",2),V([E({type:Boolean,reflect:!0})],H.prototype,"required",2),V([E({type:"debug"})],H.prototype,"status",2),V([E({type:String})],H.prototype,"type",2),H=V([S("ly-field")],H);var mn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,gn=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?yn(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&mn(e,n,i),i};let zt=class extends _{render(){return g` <slot></slot> `}};zt.styles=R`
		:host {
			display: contents;
		}
	`,zt=gn([S("ly-fragment")],zt);const vn=R`
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
`;var xn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,ze=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?wn(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&xn(e,n,i),i};let Ct=class extends _{constructor(){super(...arguments),this.stacked="over"}render(){return g` <slot></slot> `}};Ct.styles=vn,ze([E({type:String,reflect:!0})],Ct.prototype,"stacked",2),Ct=ze([S("ly-layer")],Ct);var ne=(t=>(t[t.col=0]="col",t[t.row=1]="row",t))(ne||{});const bn=R`
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
`,$n=R`
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
`,_n=R`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var An=Object.defineProperty,En=Object.getOwnPropertyDescriptor,Ht=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?En(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&An(e,n,i),i};let Pt=class extends _{constructor(){super(...arguments),this.axis="row"}render(){return g` <slot></slot> `}};Pt.styles=bn,Ht([E({type:ne,reflect:!0})],Pt.prototype,"axis",2),Pt=Ht([S("ly-flex")],Pt);let Ft=class extends _{render(){return g` <slot></slot> `}};Ft.styles=$n,Ft=Ht([S("ly-grid")],Ft);let It=class extends _{render(){return g` <slot></slot> `}};It.styles=_n,It=Ht([S("ly-group")],It);const vt=R`
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
`;var Sn=Object.defineProperty,On=Object.getOwnPropertyDescriptor,xt=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?On(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&Sn(e,n,i),i};let Vt=class extends _{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return g` <slot></slot> `}};Vt.styles=vt,Vt=xt([S("ly-list")],Vt);let qt=class extends _{render(){return g` <slot></slot> `}};qt.styles=vt,qt=xt([S("ly-list-header")],qt);let Gt=class extends _{render(){return g` <slot></slot> `}};Gt.styles=vt,Gt=xt([S("ly-list-row")],Gt);let Xt=class extends _{render(){return g` <slot></slot> `}};Xt.styles=vt,Xt=xt([S("ly-list-footer")],Xt);let Yt=class extends _{render(){return g` <slot></slot> `}};Yt.styles=vt,Yt=xt([S("ly-list-cell")],Yt);const Cn=R`
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
`;var Pn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Fe=(t,e,n,s)=>{for(var r,i=s>1?void 0:s?Rn(e,n):e,o=t.length-1;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&Pn(e,n,i),i};let Rt=class extends _{constructor(){super(...arguments),this.axis="row"}render(){return g` <slot></slot> `}};Rt.styles=Cn,Fe([E({type:ne,reflect:!0})],Rt.prototype,"axis",2),Rt=Fe([S("ly-slider")],Rt);export{At as App,z as Check,st as Dropdown,H as Field,Pt as Flex,zt as Fragment,Ft as Grid,It as Group,Et as Icon,Ct as Layer,Vt as List,Yt as ListCell,Xt as ListFooter,qt as ListHeader,Gt as ListRow,Rt as Slider};