/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt=globalThis,Bt=yt.ShadowRoot&&(void 0===yt.ShadyCSS||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),qt=new WeakMap;let pe=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Bt&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=qt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&qt.set(e,t))}return t}toString(){return this.cssText}};const Ue=t=>new pe("string"==typeof t?t:t+"",void 0,jt),L=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new pe(n,t,jt)},We=(t,e)=>{if(Bt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),i=yt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}},Xt=Bt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Ue(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Be,defineProperty:je,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:ze,getOwnPropertySymbols:ke,getPrototypeOf:Ie}=Object,B=globalThis,Yt=B.trustedTypes,Ve=Yt?Yt.emptyScript:"",Dt=B.reactiveElementPolyfillSupport,rt=(t,e)=>t,vt={toAttribute(t,e){switch(e){case Boolean:t=t?Ve:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ft=(t,e)=>!Be(t,e),Gt={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:Ft};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),B.litPropertyMetadata??(B.litPropertyMetadata=new WeakMap);class G extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&je(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:r}=Fe(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const o=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gt}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=Ie(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const t=this.properties,e=[...ze(t),...ke(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(Xt(t))}else void 0!==t&&e.push(Xt(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return We(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null==(n=i.converter)?void 0:n.toAttribute)?i.converter:vt).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(n=t.converter)?void 0:n.fromAttribute)?t.converter:vt;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Ft)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[rt("elementProperties")]=new Map,G[rt("finalized")]=new Map,null==Dt||Dt({ReactiveElement:G}),(B.reactiveElementVersions??(B.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=globalThis,xt=lt.trustedTypes,Kt=xt?xt.createPolicy("lit-html",{createHTML:t=>t}):void 0,fe="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+U,qe=`<${me}>`,V=document,at=()=>V.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ge=Array.isArray,Xe=t=>ge(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Lt="[ \t\n\f\r]",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jt=/-->/g,Zt=/>/g,k=RegExp(`>|${Lt}(?:([^\\s"'>=/]+)(${Lt}*=${Lt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Qt=/'/g,te=/"/g,ye=/^(?:script|style|textarea|title)$/i,Ye=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),P=Ye(1),J=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ee=new WeakMap,I=V.createTreeWalker(V,129);function ve(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Kt?Kt.createHTML(e):e}const Ge=(t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=st;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,a=s.exec(n),null!==a);)d=s.lastIndex,s===st?"!--"===a[1]?s=Jt:void 0!==a[1]?s=Zt:void 0!==a[2]?(ye.test(a[2])&&(r=RegExp("</"+a[2],"g")),s=k):void 0!==a[3]&&(s=k):s===k?">"===a[0]?(s=r??st,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?k:'"'===a[3]?te:Qt):s===te||s===Qt?s=k:s===Jt||s===Zt?s=st:(s=k,r=void 0);const h=s===k&&t[e+1].startsWith("/>")?" ":"";o+=s===st?n+qe:c>=0?(i.push(l),n.slice(0,c)+fe+n.slice(c)+U+h):n+U+(-2===c?e:h)}return[ve(t,o+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class dt{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,l=this.parts,[a,c]=Ge(t,e);if(this.el=dt.createElement(a,n),I.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=I.nextNode())&&l.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(fe)){const e=c[o++],n=i.getAttribute(t).split(U),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:n,ctor:"."===s[1]?Je:"?"===s[1]?Ze:"@"===s[1]?Qe:Ct}),i.removeAttribute(t)}else t.startsWith(U)&&(l.push({type:6,index:r}),i.removeAttribute(t));if(ye.test(i.tagName)){const t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=xt?xt.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],at()),I.nextNode(),l.push({type:2,index:++r});i.append(t[e],at())}}}else if(8===i.nodeType)if(i.data===me)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)l.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,e){const n=V.createElement("template");return n.innerHTML=t,n}}function Z(t,e,n=t,i){var r,o;if(e===J)return e;let s=void 0!==i?null==(r=n._$Co)?void 0:r[i]:n._$Cl;const l=ct(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==l&&(null==(o=null==s?void 0:s._$AO)||o.call(s,!1),void 0===l?s=void 0:(s=new l(t),s._$AT(t,n,i)),void 0!==i?(n._$Co??(n._$Co=[]))[i]=s:n._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,i)),e}class Ke{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=((null==t?void 0:t.creationScope)??V).importNode(e,!0);I.currentNode=i;let r=I.nextNode(),o=0,s=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new ut(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tn(r,this,t)),this._$AV.push(e),l=n[++s]}o!==(null==l?void 0:l.index)&&(r=I.nextNode(),o++)}return I.currentNode=V,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class ut{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),ct(t)?t===_||null==t||""===t?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Xe(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=dt.createElement(ve(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(n);else{const t=new Ke(r,this),e=t.u(this.options);t.p(n),this.T(e),this._$AH=t}}_$AC(t){let e=ee.get(t.strings);return void 0===e&&ee.set(t.strings,e=new dt(t)),e}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new ut(this.S(at()),this.S(at()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null==(n=this._$AP)||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=Z(this,t,e,0),o=!ct(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const i=t;let s,l;for(t=r[0],s=0;s<r.length-1;s++)l=Z(this,i[n+s],e,s),l===J&&(l=this._$AH[s]),o||(o=!ct(l)||l!==this._$AH[s]),l===_?t=_:t!==_&&(t+=(l??"")+r[s+1]),this._$AH[s]=l}o&&!i&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Je extends Ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class Ze extends Ct{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class Qe extends Ct{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??_)===J)return;const n=this._$AH,i=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class tn{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const Ht=lt.litHtmlPolyfillSupport;null==Ht||Ht(dt,ut),(lt.litHtmlVersions??(lt.litHtmlVersions=[])).push("3.1.4");const en=(t,e,n)=>{const i=(null==n?void 0:n.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==n?void 0:n.renderBefore)??null;i._$litPart$=r=new ut(e.insertBefore(at(),t),t,void 0,n??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=en(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return J}}var ue;b._$litElement$=!0,b.finalized=!0,null==(ue=globalThis.litElementHydrateSupport)||ue.call(globalThis,{LitElement:b});const Mt=globalThis.litElementPolyfillSupport;null==Mt||Mt({LitElement:b}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nn={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:Ft},on=(t=nn,e,n)=>{const{kind:i,metadata:r}=n;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const r=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=n;return function(n){const r=this[i];e.call(this,n),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function X(t){return(e,n)=>"object"==typeof n?on(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function sn(t,e){return(e,n,i)=>xe(e,n,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rn(t){return(e,n)=>{const{slot:i,selector:r}=t??{},o="slot"+(i?`[name=${i}]`:":not([name])");return xe(e,n,{get(){var e;const n=null==(e=this.renderRoot)?void 0:e.querySelector(o),i=(null==n?void 0:n.assignedElements(t))??[];return void 0===r?i:i.filter((t=>t.matches(r)))}})}}var ln=Object.defineProperty,an=Object.getOwnPropertyDescriptor,we=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?an(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&ln(e,n,o),o};let wt=class extends b{constructor(){super(...arguments),this.tmpl="default-y"}render(){return P` <slot></slot> `}};wt.styles=L`
		:host(:is(ly-app)) {
			--bg: var(--clr-background);
			background-color: var(--bg);

			--clr: var(--clr-text);
			color: var(--clr);

			--gap: 0;
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: fixed;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-app)) {
			color: var(--clr);
			display: grid;
			height: 100dvh;
			isolation: isolate;
			overflow: clip;
			width: 100dvw;
			z-index: 1;
		}

		:host(:is(ly-app[tmpl='default-x'])) {
			grid-auto-columns: max-content;
			grid-auto-flow: column;
			overflow-x: auto;
			overflow-y: clip;
		}

		:host(:is(ly-app[tmpl='default-y'])) {
			grid-auto-columns: max-content;
			grid-auto-flow: column;
			overflow-x: clip;
			overflow-y: auto;
		}

		:host(:is(ly-app[tmpl='container'])) {
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

		:host(:is(ly-app[tmpl='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: expand;
		}

		:host(:is(ly-app[tmpl='container']))
			::slotted([tmpl-expand]:not([tmpl-expand='uncontained'])) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-app[tmpl='container'])) ::slotted([tmpl-subgrid]) {
			grid-auto-rows: inherit;
			grid-template-columns: subgrid;
			grid-column: expand;
		}

		:host(:is(ly-app[tmpl='row'])) {
			display: flex;
			flex-direction: row;
		}

		:host(:is(ly-app[tmpl='col'])) {
			display: flex;
			flex-direction: column;
		}
	`,we([X({type:String,reflect:!0})],wt.prototype,"tmpl",2),wt=we([H("ly-app")],wt);const _e=["top","right","bottom","left"],ne=["start","end"],ie=_e.reduce(((t,e)=>t.concat(e,e+"-"+ne[0],e+"-"+ne[1])),[]),W=Math.min,S=Math.max,_t=Math.round,gt=Math.floor,j=t=>({x:t,y:t}),cn={left:"right",right:"left",bottom:"top",top:"bottom"},dn={start:"end",end:"start"};function oe(t,e,n){return S(t,W(e,n))}function et(t,e){return"function"==typeof t?t(e):t}function Y(t){return t.split("-")[0]}function D(t){return t.split("-")[1]}function $e(t){return"x"===t?"y":"x"}function be(t){return"y"===t?"height":"width"}function pt(t){return["top","bottom"].includes(Y(t))?"y":"x"}function Ae(t){return $e(pt(t))}function hn(t,e,n){void 0===n&&(n=!1);const i=D(t),r=Ae(t),o=be(r);let s="x"===r?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=se(s)),[s,se(s)]}function un(t){return t.replace(/start|end/g,(t=>dn[t]))}function se(t){return t.replace(/left|right|bottom|top/g,(t=>cn[t]))}function pn(t){return{top:0,right:0,bottom:0,left:0,...t}}function fn(t){return"number"!=typeof t?pn(t):{top:t,right:t,bottom:t,left:t}}function $t(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function re(t,e,n){let{reference:i,floating:r}=t;const o=pt(e),s=Ae(e),l=be(s),a=Y(e),c="y"===o,d=i.x+i.width/2-r.width/2,h=i.y+i.height/2-r.height/2,p=i[l]/2-r[l]/2;let u;switch(a){case"top":u={x:d,y:i.y-r.height};break;case"bottom":u={x:d,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:h};break;case"left":u={x:i.x-r.width,y:h};break;default:u={x:i.x,y:i.y}}switch(D(e)){case"start":u[s]-=p*(n&&c?-1:1);break;case"end":u[s]+=p*(n&&c?-1:1)}return u}const mn=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=re(c,i,a),p=i,u={},f=0;for(let n=0;n<l.length;n++){const{name:o,fn:m}=l[n],{x:g,y:y,data:v,reset:x}=await m({x:d,y:h,initialPlacement:i,placement:p,strategy:r,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});d=g??d,h=y??h,u={...u,[o]:{...u[o],...v}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):x.rects),({x:d,y:h}=re(c,p,a))),n=-1)}return{x:d,y:h,placement:p,strategy:r,middlewareData:u}};async function Q(t,e){var n;void 0===e&&(e={});const{x:i,y:r,platform:o,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=et(e,t),f=fn(u),m=l[p?"floating"===h?"reference":"floating":h],g=$t(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(m)))||n?m:m.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),y="floating"===h?{x:i,y:r,width:s.floating.width,height:s.floating.height}:s.reference,v=await(null==o.getOffsetParent?void 0:o.getOffsetParent(l.floating)),x=await(null==o.isElement?void 0:o.isElement(v))&&await(null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},w=$t(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:a}):y);return{top:(g.top-w.top+f.top)/x.y,bottom:(w.bottom-g.bottom+f.bottom)/x.y,left:(g.left-w.left+f.left)/x.x,right:(w.right-g.right+f.right)/x.x}}function gn(t,e,n){return(t?[...n.filter((e=>D(e)===t)),...n.filter((e=>D(e)!==t))]:n.filter((t=>Y(t)===t))).filter((n=>!t||(D(n)===t||!!e&&un(n)!==n)))}const yn=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,r;const{rects:o,middlewareData:s,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:p=ie,autoAlignment:u=!0,...f}=et(t,e),m=void 0!==h||p===ie?gn(h||null,u,p):p,g=await Q(e,f),y=(null==(n=s.autoPlacement)?void 0:n.index)||0,v=m[y];if(null==v)return{};const x=hn(v,o,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:m[0]}};const w=[g[Y(v)],g[x[0]],g[x[1]]],b=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:v,overflows:w}],_=m[y+1];if(_)return{data:{index:y+1,overflows:b},reset:{placement:_}};const $=b.map((t=>{const e=D(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(r=$.filter((t=>t[2].slice(0,D(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||$[0][0];return A!==l?{data:{index:y+1,overflows:b},reset:{placement:A}}:{}}}};function le(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ae(t){return _e.some((e=>t[e]>=0))}const vn=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=et(t,e);switch(i){case"referenceHidden":{const t=le(await Q(e,{...r,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:ae(t)}}}case"escaped":{const t=le(await Q(e,{...r,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:ae(t)}}}default:return{}}}}};async function xn(t,e){const{placement:n,platform:i,elements:r}=t,o=await(null==i.isRTL?void 0:i.isRTL(r.floating)),s=Y(n),l=D(n),a="y"===pt(n),c=["left","top"].includes(s)?-1:1,d=o&&a?-1:1,h=et(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const wn=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:o,placement:s,middlewareData:l}=e,a=await xn(e,t);return s===(null==(n=l.offset)?void 0:n.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:r+a.x,y:o+a.y,data:{...a,placement:s}}}}},_n=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=et(t,e),c={x:n,y:i},d=await Q(e,a),h=pt(Y(r)),p=$e(h);let u=c[p],f=c[h];if(o){const t="y"===p?"bottom":"right";u=oe(u+d["y"===p?"top":"left"],u,u-d[t])}if(s){const t="y"===h?"bottom":"right";f=oe(f+d["y"===h?"top":"left"],f,f-d[t])}const m=l.fn({...e,[p]:u,[h]:f});return{...m,data:{x:m.x-n,y:m.y-i}}}}},$n=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:r,elements:o}=e,{apply:s=(()=>{}),...l}=et(t,e),a=await Q(e,l),c=Y(n),d=D(n),h="y"===pt(n),{width:p,height:u}=i.floating;let f,m;"top"===c||"bottom"===c?(f=c,m=d===(await(null==r.isRTL?void 0:r.isRTL(o.floating))?"start":"end")?"left":"right"):(m=c,f="end"===d?"top":"bottom");const g=u-a.top-a.bottom,y=p-a.left-a.right,v=W(u-a[f],g),x=W(p-a[m],y),w=!e.middlewareData.shift;let b=v,_=x;if(h?_=d||w?W(x,y):y:b=d||w?W(v,g):g,w&&!d){const t=S(a.left,0),e=S(a.right,0),n=S(a.top,0),i=S(a.bottom,0);h?_=p-2*(0!==t||0!==e?t+e:S(a.left,a.right)):b=u-2*(0!==n||0!==i?n+i:S(a.top,a.bottom))}await s({...e,availableWidth:_,availableHeight:b});const $=await r.getDimensions(o.floating);return p!==$.width||u!==$.height?{reset:{rects:!0}}:{}}}};function nt(t){return Se(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function M(t){var e;return null==(e=(Se(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Se(t){return t instanceof Node||t instanceof E(t).Node}function R(t){return t instanceof Element||t instanceof E(t).Element}function T(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function ce(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof E(t).ShadowRoot)}function ft(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function bn(t){return["table","td","th"].includes(nt(t))}function zt(t){const e=kt(),n=O(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function An(t){let e=F(t);for(;T(e)&&!tt(e);){if(zt(e))return e;e=F(e)}return null}function kt(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(nt(t))}function O(t){return E(t).getComputedStyle(t)}function Pt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function F(t){if("html"===nt(t))return t;const e=t.assignedSlot||t.parentNode||ce(t)&&t.host||M(t);return ce(e)?e.host:e}function Ee(t){const e=F(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&ft(e)?e:Ee(e)}function ht(t,e,n){var i;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=Ee(t),o=r===(null==(i=t.ownerDocument)?void 0:i.body),s=E(r);return o?e.concat(s,s.visualViewport||[],ft(r)?r:[],s.frameElement&&n?ht(s.frameElement):[]):e.concat(r,ht(r,[],n))}function Oe(t){const e=O(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=T(t),o=r?t.offsetWidth:n,s=r?t.offsetHeight:i,l=_t(n)!==o||_t(i)!==s;return l&&(n=o,i=s),{width:n,height:i,$:l}}function It(t){return R(t)?t:t.contextElement}function K(t){const e=It(t);if(!T(e))return j(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:o}=Oe(e);let s=(o?_t(n.width):n.width)/i,l=(o?_t(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Sn=j(0);function Ce(t){const e=E(t);return kt()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Sn}function En(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==E(t))&&e}function q(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),o=It(t);let s=j(1);e&&(i?R(i)&&(s=K(i)):s=K(t));const l=En(o,n,i)?Ce(o):j(0);let a=(r.left+l.x)/s.x,c=(r.top+l.y)/s.y,d=r.width/s.x,h=r.height/s.y;if(o){const t=E(o),e=i&&R(i)?E(i):i;let n=t,r=n.frameElement;for(;r&&i&&e!==n;){const t=K(r),e=r.getBoundingClientRect(),i=O(r),o=e.left+(r.clientLeft+parseFloat(i.paddingLeft))*t.x,s=e.top+(r.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=o,c+=s,n=E(r),r=n.frameElement}}return $t({width:d,height:h,x:a,y:c})}const On=[":popover-open",":modal"];function Vt(t){return On.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Cn(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const o="fixed"===r,s=M(i),l=!!e&&Vt(e.floating);if(i===s||l&&o)return n;let a={scrollLeft:0,scrollTop:0},c=j(1);const d=j(0),h=T(i);if((h||!h&&!o)&&(("body"!==nt(i)||ft(s))&&(a=Pt(i)),T(i))){const t=q(i);c=K(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+d.x,y:n.y*c.y-a.scrollTop*c.y+d.y}}function Pn(t){return Array.from(t.getClientRects())}function Pe(t){return q(M(t)).left+Pt(t).scrollLeft}function Rn(t){const e=M(t),n=Pt(t),i=t.ownerDocument.body,r=S(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),o=S(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Pe(t);const l=-n.scrollTop;return"rtl"===O(i).direction&&(s+=S(e.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:l}}function Tn(t,e){const n=E(t),i=M(t),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,l=0,a=0;if(r){o=r.width,s=r.height;const t=kt();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:o,height:s,x:l,y:a}}function Dn(t,e){const n=q(t,!0,"fixed"===e),i=n.top+t.clientTop,r=n.left+t.clientLeft,o=T(t)?K(t):j(1);return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:r*o.x,y:i*o.y}}function de(t,e,n){let i;if("viewport"===e)i=Tn(t,n);else if("document"===e)i=Rn(M(t));else if(R(e))i=Dn(e,n);else{const n=Ce(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return $t(i)}function Re(t,e){const n=F(t);return!(n===e||!R(n)||tt(n))&&("fixed"===O(n).position||Re(n,e))}function Ln(t,e){const n=e.get(t);if(n)return n;let i=ht(t,[],!1).filter((t=>R(t)&&"body"!==nt(t))),r=null;const o="fixed"===O(t).position;let s=o?F(t):t;for(;R(s)&&!tt(s);){const e=O(s),n=zt(s);!n&&"fixed"===e.position&&(r=null),(o?!n&&!r:!n&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||ft(s)&&!n&&Re(t,s))?i=i.filter((t=>t!==s)):r=e,s=F(s)}return e.set(t,i),i}function Hn(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[..."clippingAncestors"===n?Vt(e)?[]:Ln(e,this._c):[].concat(n),i],s=o[0],l=o.reduce(((t,n)=>{const i=de(e,n,r);return t.top=S(i.top,t.top),t.right=W(i.right,t.right),t.bottom=W(i.bottom,t.bottom),t.left=S(i.left,t.left),t}),de(e,s,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Mn(t){const{width:e,height:n}=Oe(t);return{width:e,height:n}}function Nn(t,e,n){const i=T(e),r=M(e),o="fixed"===n,s=q(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const a=j(0);if(i||!i&&!o)if(("body"!==nt(e)||ft(r))&&(l=Pt(e)),i){const t=q(e,!0,o,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=Pe(r));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function Nt(t){return"static"===O(t).position}function he(t,e){return T(t)&&"fixed"!==O(t).position?e?e(t):t.offsetParent:null}function Te(t,e){const n=E(t);if(Vt(t))return n;if(!T(t)){let e=F(t);for(;e&&!tt(e);){if(R(e)&&!Nt(e))return e;e=F(e)}return n}let i=he(t,e);for(;i&&bn(i)&&Nt(i);)i=he(i,e);return i&&tt(i)&&Nt(i)&&!zt(i)?n:i||An(t)||n}const Un=async function(t){const e=this.getOffsetParent||Te,n=this.getDimensions,i=await n(t.floating);return{reference:Nn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Wn(t){return"rtl"===O(t).direction}const Bn={convertOffsetParentRelativeRectToViewportRelativeRect:Cn,getDocumentElement:M,getClippingRect:Hn,getOffsetParent:Te,getElementRects:Un,getClientRects:Pn,getDimensions:Mn,getScale:K,isElement:R,isRTL:Wn};function jn(t,e){let n,i=null;const r=M(t);function o(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function s(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),o();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-gt(d)+"px "+-gt(r.clientWidth-(c+h))+"px "+-gt(r.clientHeight-(d+p))+"px "+-gt(c)+"px",threshold:S(0,W(1,a))||1};let f=!0;function m(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return s();e?s(!1,e):n=setTimeout((()=>{s(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(m,{...u,root:r.ownerDocument})}catch{i=new IntersectionObserver(m,u)}i.observe(t)}(!0),o}function Fn(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=It(t),d=r||o?[...c?ht(c):[],...ht(e)]:[];d.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),o&&t.addEventListener("resize",n)}));const h=c&&l?jn(c,n):null;let p=-1,u=null;s&&(u=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),n()})),c&&!a&&u.observe(c),u.observe(e));let f,m=a?q(t):null;return a&&function e(){const i=q(t);m&&(i.x!==m.x||i.y!==m.y||i.width!==m.width||i.height!==m.height)&&n(),m=i,f=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{r&&t.removeEventListener("scroll",n),o&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const zn=Q,kn=wn,In=yn,Vn=_n,qn=$n,Xn=vn,Yn=(t,e,n)=>{const i=new Map,r={platform:Bn,...n},o={...r.platform,_c:i};return mn(t,e,{...r,platform:o})};var Gn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Rt=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?Kn(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&Gn(e,n,o),o};let z=class extends b{constructor(){super(...arguments),this.open=!1}firstUpdated(){this.addEventListener("focus",(()=>this.focus())),document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",(()=>this.focus())),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return P`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${this.open?P`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:_}
		`}clickOutsideHandler(t){var e;const n=t.composedPath()[0],i=!(null!=(e=this.shadowRoot)&&e.contains(n)||this.contains(n));this.open&&i&&(this.open=!1)}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=Fn(this._dropsummary[0],this._dropmenu,(async()=>{await Yn(this._dropsummary[0],this._dropmenu,{middleware:[In({autoAlignment:!0,alignment:"bottom",allowedPlacements:["top","bottom"],crossAxis:!0,padding:3}),kn(3),Vn({crossAxis:!0,mainAxis:!0,padding:3}),qn({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await zn(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})},Xn()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e,middlewareData:n})=>{n.hide&&Object.assign(this._dropmenu.style,{opacity:n.hide.referenceHidden?"0":"1",pointerEvents:n.hide.referenceHidden?"none":"initial"}),Object.assign(this._dropmenu.style,{inset:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}))}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}};z.styles=L`
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
			outline: solid
				color-mix(
					in var(--prefers-colorSpace, srgb),
					var(--outln-clr),
					gray 16%
				);
			overflow: clip;
			padding: var(--spacing);
			place-content: center;
			position: fixed;
			transition: top var(--animDefaults), bottom var(--animDefaults),
				opacity var(--animDefaults), visbility var(--animDefaults);
			z-index: 1000000;
		}

		:host(:is(ly-dropdown[open]))::part(dropmenu__inner) {
			--percent: 16%;

			background-color: var(--bg);
			border-radius: calc(var(--radius) / 2);
			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: clip;
			overflow-y: auto;
			transition-delay: var(--animDuration);
		}

		div::-webkit-scrollbar {
			display: none;
		}

		div ::slotted(button) {
			--radius: calc(var(--scale-sm) / 2) !important;
			width: 100% !important;
		}
	`,z.properties={delegatesFocus:{type:Boolean,reflect:!0}},z.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0},Rt([X({type:Boolean,reflect:!0})],z.prototype,"open",2),Rt([rn({slot:"summary",flatten:!0})],z.prototype,"_dropsummary",2),Rt([sn('div[part="dropmenu"]')],z.prototype,"_dropmenu",2),z=Rt([H("ly-dropdown")],z);var Jn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Qn=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?Zn(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&Jn(e,n,o),o};let Ut=class extends b{render(){return P` <slot></slot> `}};Ut.styles=L`
		:host(:is(ly-fragment)) {
			--bg: none;
			background-color: var(--bg);

			--clr: inherit;
			color: var(--clr);

			--gap: 0;
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: relative;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-fragment)) {
			display: contents;
		}
	`,Ut=Qn([H("ly-fragment")],Ut);var ti=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,De=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?ei(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&ti(e,n,o),o};let bt=class extends b{constructor(){super(...arguments),this.solid=!1}render(){return P` <slot></slot> `}};bt.styles=L`
		:host(:is(ly-icon)) {
			--bg: none;
			background-color: var(--bg);

			--clr: inherit;
			color: var(--clr);

			--gap: var(--scale-5xs);
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: 0;
			margin: var(--margin);

			--placement: relative;
			position: var(--placement);

			--radius: 50%;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-icon)) {
			aspect-ratio: 1/1;
			display: inline-grid;
			flex-grow: 0;
			flex-shrink: 0;
			font-family: var(--prefers-iconFontFamily);
			font-feature-settings: 'liga';
			font-size: calc(var(--prefers-iconScale) * 0.75);
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 400, 'opsz' 48;
			height: var(--prefers-iconScale);
			overflow: clip;
			place-content: center center;
			shape-margin: var(--scale-5xs);
			shape-outside: circle(50%);
			user-select: none;
			width: auto;
		}

		:host(:is(ly-icon[solid])) {
			font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 400, 'opsz' 48;
		}
	`,De([X({type:Boolean,reflect:!0})],bt.prototype,"solid",2),bt=De([H("ly-icon")],bt);var ni=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,Le=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?ii(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&ni(e,n,o),o};let At=class extends b{constructor(){super(...arguments),this.stacked="over"}render(){return P` <slot></slot> `}};At.styles=L`
		:host(:is(ly-layer)) {
			/* local vars */
			--bg: none;
			--clr: var(--clr-text);
			--m: auto;
			--ps: fixed;

			background-color: var(--bg);
			color: var(--clr);
			display: flex;
			flex-direction: column;
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
			z-index: 2;
		}
	`,Le([X({type:String,reflect:!0})],At.prototype,"stacked",2),At=Le([H("ly-layer")],At);var oi=Object.defineProperty,si=Object.getOwnPropertyDescriptor,mt=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?si(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&oi(e,n,o),o};let St=class extends b{constructor(){super(...arguments),this.axis="x"}render(){return P` <slot></slot> `}};St.styles=L`
		:host(:is(ly-flex)) {
			display: flex;
			height: max-content;
		}

		:host(:is(ly-flex)[axis='y']) {
			flex-direction: column;
		}

		:host(:is(ly-flex)[axis='x']) {
			flex-direction: row;
		}
	`,mt([X({type:String,reflect:!0})],St.prototype,"axis",2),St=mt([H("ly-flex")],St);let Et=class extends b{constructor(){super(...arguments),this.tmpl=""}render(){return P` <slot></slot> `}};Et.styles=L`
		:host(:is(ly-grid)) {
			/* local vars */
			--tmpl: 1;
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
					max(var(--minWidth), calc(100% / var(--tmpl) - var(--gap))),
					var(--maxWidth)
				)
			);
			height: max-content;
		}

		:host(:is(ly-grid[tmpl='2'])) {
			--tmpl: 2;
		}

		:host(:is(ly-grid[tmpl='3'])) {
			--tmpl: 3;
		}

		:host(:is(ly-grid[tmpl='4'])) {
			--tmpl: 4;
		}

		:host(:is(ly-grid[tmpl='5'])) {
			--tmpl: 5;
		}

		:host(:is(ly-grid[tmpl='6'])) {
			--tmpl: 6;
		}

		:host(:is(ly-grid[tmpl='7'])) {
			--tmpl: 7;
		}

		:host(:is(ly-grid[tmpl='8'])) {
			--tmpl: 8;
		}

		:host(:is(ly-grid[tmpl='9'])) {
			--tmpl: 9;
		}

		:host(:is(ly-grid[tmpl='10'])) {
			--tmpl: 10;
		}

		:host(:is(ly-grid[tmpl='11'])) {
			--tmpl: 11;
		}

		:host(:is(ly-grid[tmpl='12'])) {
			--tmpl: 12;
		}

		:host(:is(ly-grid[tmpl='container'])) {
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

		:host(:is(ly-grid[tmpl='container'])) ::slotted(*) {
			grid-column: contain;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted([tmpl-expand]) {
			grid-column: expand;
		}

		:host(:is(ly-grid[tmpl='container']))
			::slotted([tmpl-expand]:not([tmpl-expand='uncontained'])) {
			/* (100vw - widthToMatch) / 2 , the min in the minmax() + the gap */
			padding-inline: max(
				((100% - var(--prefers-containerWidth)) / 2),
				var(--prefers-containerOutterWidth) + 1px
			) !important;
		}

		:host(:is(ly-grid[tmpl='container'])) ::slotted([tmpl-subgrid]) {
			grid-auto-rows: inherit;
			grid-template-columns: subgrid;
			grid-column: expand;
		}

		:host(:is(ly-grid[tmpl='row'])) {
			grid-auto-flow: column;
			grid-auto-columns: minmax(0, 1fr);
		}

		:host(:is(ly-grid[tmpl='col'])) {
			grid-auto-flow: row;
			grid-auto-rows: minmax(0, 1fr);
		}
	`,mt([X({type:String,reflect:!0})],Et.prototype,"tmpl",2),Et=mt([H("ly-grid")],Et);let Wt=class extends b{render(){return P` <slot></slot> `}};Wt.styles=L`
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	`,Wt=mt([H("ly-group")],Wt);var ri=Object.defineProperty,li=Object.getOwnPropertyDescriptor,He=(t,e,n,i)=>{for(var r,o=i>1?void 0:i?li(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&ri(e,n,o),o};let Ot=class extends b{constructor(){super(...arguments),this.axis="x"}render(){return P` <slot></slot> `}};Ot.styles=L`
		:host(:is(ly-slider)) {
			--bg: none;
			background-color: var(--bg);

			--clr: var(--clr-text);
			color: var(--clr);

			--gap: var(--scale-2xl);
			gap: var(--gap);

			--inset: 0;
			inset: var(--inset);

			--margin: auto;
			margin: var(--margin);

			--placement: fixed;
			position: var(--placement);

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-slider)) {
			display: grid;
			height: max-content;
			/*scroll-snap-padding-block: var(--gap);*/
		}

		:host(:is(ly-slider)) ::slotted(*) {
			min-height: max-content;
			min-width: max-content;
			/*scroll-snap-align: start;*/
		}

		:host(:is(ly-slider)[axis='x']) {
			grid-auto-flow: column;
			grid-auto-columns: max-content;
			overflow-x: auto;
			overflow-y: visible;
			/*scroll-snap-type: x proximity;*/
		}

		:host(:is(ly-slider)[axis='y']) {
			grid-auto-flow: row;
			grid-auto-rows: max-content;
			overflow-x: visible;
			overflow-y: auto;
			/*scroll-snap-type: y proximity;*/
		}
	`,He([X({type:String,reflect:!0})],Ot.prototype,"axis",2),Ot=He([H("ly-slider")],Ot);export{wt as App,z as Dropdown,St as Flex,Ut as Fragment,Et as Grid,Wt as Group,bt as Icon,At as Layer,Ot as Slider};