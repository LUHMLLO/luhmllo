/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yt=globalThis,Wt=yt.ShadowRoot&&(void 0===yt.ShadyCSS||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),It=new WeakMap;let ue=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Wt&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=It.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&It.set(e,t))}return t}toString(){return this.cssText}};const Me=t=>new ue("string"==typeof t?t:t+"",void 0,Bt),F=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new ue(n,t,Bt)},Ne=(t,e)=>{if(Wt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),i=yt.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}},qt=Wt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Me(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ue,defineProperty:We,getOwnPropertyDescriptor:Be,getOwnPropertyNames:je,getOwnPropertySymbols:Fe,getPrototypeOf:ze}=Object,U=globalThis,Xt=U.trustedTypes,ke=Xt?Xt.emptyScript:"",Tt=U.reactiveElementPolyfillSupport,rt=(t,e)=>t,vt={toAttribute(t,e){switch(e){case Boolean:t=t?ke:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},jt=(t,e)=>!Ue(t,e),Yt={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:jt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);class Y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Yt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&We(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=Be(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const r=null==i?void 0:i.call(this);o.call(this,e),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yt}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const t=ze(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const t=this.properties,e=[...je(t),...Fe(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(qt(t))}else void 0!==t&&e.push(qt(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==(null==(n=i.converter)?void 0:n.toAttribute)?i.converter:vt).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(n=t.converter)?void 0:n.fromAttribute)?t.converter:vt;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n){if(void 0!==t){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??jt)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],n)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[rt("elementProperties")]=new Map,Y[rt("finalized")]=new Map,null==Tt||Tt({ReactiveElement:Y}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=globalThis,xt=lt.trustedTypes,Kt=xt?xt.createPolicy("lit-html",{createHTML:t=>t}):void 0,pe="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,fe="?"+M,Ve=`<${fe}>`,I=document,at=()=>I.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,me=Array.isArray,Ie=t=>me(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Dt="[ \t\n\f\r]",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Jt=/>/g,k=RegExp(`>|${Dt}(?:([^\\s"'>=/]+)(${Dt}*=${Dt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Zt=/'/g,Qt=/"/g,ge=/^(?:script|style|textarea|title)$/i,qe=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),D=qe(1),G=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),te=new WeakMap,V=I.createTreeWalker(I,129);function ye(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Kt?Kt.createHTML(e):e}const Xe=(t,e)=>{const n=t.length-1,i=[];let o,r=2===e?"<svg>":"",s=st;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,a=s.exec(n),null!==a);)d=s.lastIndex,s===st?"!--"===a[1]?s=Gt:void 0!==a[1]?s=Jt:void 0!==a[2]?(ge.test(a[2])&&(o=RegExp("</"+a[2],"g")),s=k):void 0!==a[3]&&(s=k):s===k?">"===a[0]?(s=o??st,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?k:'"'===a[3]?Qt:Zt):s===Qt||s===Zt?s=k:s===Gt||s===Jt?s=st:(s=k,o=void 0);const h=s===k&&t[e+1].startsWith("/>")?" ":"";r+=s===st?n+Ve:c>=0?(i.push(l),n.slice(0,c)+pe+n.slice(c)+M+h):n+M+(-2===c?e:h)}return[ye(t,r+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class dt{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const s=t.length-1,l=this.parts,[a,c]=Xe(t,e);if(this.el=dt.createElement(a,n),V.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&l.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(pe)){const e=c[r++],n=i.getAttribute(t).split(M),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?Ke:"?"===s[1]?Ge:"@"===s[1]?Je:Ot}),i.removeAttribute(t)}else t.startsWith(M)&&(l.push({type:6,index:o}),i.removeAttribute(t));if(ge.test(i.tagName)){const t=i.textContent.split(M),e=t.length-1;if(e>0){i.textContent=xt?xt.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],at()),V.nextNode(),l.push({type:2,index:++o});i.append(t[e],at())}}}else if(8===i.nodeType)if(i.data===fe)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(M,t+1));)l.push({type:7,index:o}),t+=M.length-1}o++}}static createElement(t,e){const n=I.createElement("template");return n.innerHTML=t,n}}function J(t,e,n=t,i){var o,r;if(e===G)return e;let s=void 0!==i?null==(o=n._$Co)?void 0:o[i]:n._$Cl;const l=ct(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==l&&(null==(r=null==s?void 0:s._$AO)||r.call(s,!1),void 0===l?s=void 0:(s=new l(t),s._$AT(t,n,i)),void 0!==i?(n._$Co??(n._$Co=[]))[i]=s:n._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,i)),e}class Ye{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=((null==t?void 0:t.creationScope)??I).importNode(e,!0);V.currentNode=i;let o=V.nextNode(),r=0,s=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new ut(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Ze(o,this,t)),this._$AV.push(e),l=n[++s]}r!==(null==l?void 0:l.index)&&(o=V.nextNode(),r++)}return V.currentNode=I,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class ut{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),ct(t)?t===$||null==t||""===t?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Ie(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:n,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=dt.createElement(ye(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===o)this._$AH.p(n);else{const t=new Ye(o,this),e=t.u(this.options);t.p(n),this.T(e),this._$AH=t}}_$AC(t){let e=te.get(t.strings);return void 0===e&&te.set(t.strings,e=new dt(t)),e}k(t){me(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new ut(this.S(at()),this.S(at()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null==(n=this._$AP)||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!ct(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const i=t;let s,l;for(t=o[0],s=0;s<o.length-1;s++)l=J(this,i[n+s],e,s),l===G&&(l=this._$AH[s]),r||(r=!ct(l)||l!==this._$AH[s]),l===$?t=$:t!==$&&(t+=(l??"")+o[s+1]),this._$AH[s]=l}r&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ke extends Ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class Ge extends Ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Je extends Ot{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??$)===G)return;const n=this._$AH,i=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==$&&(n===$||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ze{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const Lt=lt.litHtmlPolyfillSupport;null==Lt||Lt(dt,ut),(lt.litHtmlVersions??(lt.litHtmlVersions=[])).push("3.1.4");const Qe=(t,e,n)=>{const i=(null==n?void 0:n.renderBefore)??e;let o=i._$litPart$;if(void 0===o){const t=(null==n?void 0:n.renderBefore)??null;i._$litPart$=o=new ut(e.insertBefore(at(),t),t,void 0,n??{})}return o._$AI(t),o};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return G}}var he;E._$litElement$=!0,E.finalized=!0,null==(he=globalThis.litElementHydrateSupport)||he.call(globalThis,{LitElement:E});const Ht=globalThis.litElementPolyfillSupport;null==Ht||Ht({LitElement:E}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,tn={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:jt},en=(t=tn,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const o=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=n;return function(n){const o=this[i];e.call(this,n),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function tt(t){return(e,n)=>"object"==typeof n?en(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,n),n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function nn(t,e){return(e,n,i)=>ve(e,n,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function on(t){return(e,n)=>{const{slot:i,selector:o}=t??{},r="slot"+(i?`[name=${i}]`:":not([name])");return ve(e,n,{get(){var e;const n=null==(e=this.renderRoot)?void 0:e.querySelector(r),i=(null==n?void 0:n.assignedElements(t))??[];return void 0===o?i:i.filter((t=>t.matches(o)))}})}}var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,xe=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?rn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&sn(e,n,r),r};let wt=class extends E{constructor(){super(...arguments),this.tmpl="default-y"}render(){return D` <slot></slot> `}};wt.styles=F`
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
	`,xe([tt({type:String,reflect:!0})],wt.prototype,"tmpl",2),wt=xe([z("ly-app")],wt);const we=["top","right","bottom","left"],ee=["start","end"],ne=we.reduce(((t,e)=>t.concat(e,e+"-"+ee[0],e+"-"+ee[1])),[]),N=Math.min,A=Math.max,$t=Math.round,gt=Math.floor,W=t=>({x:t,y:t}),ln={left:"right",right:"left",bottom:"top",top:"bottom"},an={start:"end",end:"start"};function ie(t,e,n){return A(t,N(e,n))}function et(t,e){return"function"==typeof t?t(e):t}function X(t){return t.split("-")[0]}function T(t){return t.split("-")[1]}function $e(t){return"x"===t?"y":"x"}function _e(t){return"y"===t?"height":"width"}function pt(t){return["top","bottom"].includes(X(t))?"y":"x"}function be(t){return $e(pt(t))}function cn(t,e,n){void 0===n&&(n=!1);const i=T(t),o=be(t),r=_e(o);let s="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=oe(s)),[s,oe(s)]}function dn(t){return t.replace(/start|end/g,(t=>an[t]))}function oe(t){return t.replace(/left|right|bottom|top/g,(t=>ln[t]))}function hn(t){return{top:0,right:0,bottom:0,left:0,...t}}function un(t){return"number"!=typeof t?hn(t):{top:t,right:t,bottom:t,left:t}}function _t(t){const{x:e,y:n,width:i,height:o}=t;return{width:i,height:o,top:n,left:e,right:e+i,bottom:n+o,x:e,y:n}}function se(t,e,n){let{reference:i,floating:o}=t;const r=pt(e),s=be(e),l=_e(s),a=X(e),c="y"===r,d=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,p=i[l]/2-o[l]/2;let u;switch(a){case"top":u={x:d,y:i.y-o.height};break;case"bottom":u={x:d,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:h};break;case"left":u={x:i.x-o.width,y:h};break;default:u={x:i.x,y:i.y}}switch(T(e)){case"start":u[s]-=p*(n&&c?-1:1);break;case"end":u[s]+=p*(n&&c?-1:1)}return u}const pn=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:o}),{x:d,y:h}=se(c,i,a),p=i,u={},f=0;for(let n=0;n<l.length;n++){const{name:r,fn:m}=l[n],{x:g,y:y,data:v,reset:x}=await m({x:d,y:h,initialPlacement:i,placement:p,strategy:o,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});d=g??d,h=y??h,u={...u,[r]:{...u[r],...v}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await s.getElementRects({reference:t,floating:e,strategy:o}):x.rects),({x:d,y:h}=se(c,p,a))),n=-1)}return{x:d,y:h,placement:p,strategy:o,middlewareData:u}};async function Z(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=et(e,t),f=un(u),m=l[p?"floating"===h?"reference":"floating":h],g=_t(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(m)))||n?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),y="floating"===h?{x:i,y:o,width:s.floating.width,height:s.floating.height}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),x=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=_t(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:a}):y);return{top:(g.top-w.top+f.top)/x.y,bottom:(w.bottom-g.bottom+f.bottom)/x.y,left:(g.left-w.left+f.left)/x.x,right:(w.right-g.right+f.right)/x.x}}function fn(t,e,n){return(t?[...n.filter((e=>T(e)===t)),...n.filter((e=>T(e)!==t))]:n.filter((t=>X(t)===t))).filter((n=>!t||(T(n)===t||!!e&&dn(n)!==n)))}const mn=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o;const{rects:r,middlewareData:s,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:p=ne,autoAlignment:u=!0,...f}=et(t,e),m=void 0!==h||p===ne?fn(h||null,u,p):p,g=await Z(e,f),y=(null==(n=s.autoPlacement)?void 0:n.index)||0,v=m[y];if(null==v)return{};const x=cn(v,r,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:m[0]}};const w=[g[X(v)],g[x[0]],g[x[1]]],$=[...(null==(i=s.autoPlacement)?void 0:i.overflows)||[],{placement:v,overflows:w}],b=m[y+1];if(b)return{data:{index:y+1,overflows:$},reset:{placement:b}};const _=$.map((t=>{const e=T(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(o=_.filter((t=>t[2].slice(0,T(t[0])?2:3).every((t=>t<=0))))[0])?void 0:o[0])||_[0][0];return A!==l?{data:{index:y+1,overflows:$},reset:{placement:A}}:{}}}};function re(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function le(t){return we.some((e=>t[e]>=0))}const gn=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...o}=et(t,e);switch(i){case"referenceHidden":{const t=re(await Z(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:le(t)}}}case"escaped":{const t=re(await Z(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:le(t)}}}default:return{}}}}};async function yn(t,e){const{placement:n,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),s=X(n),l=T(n),a="y"===pt(n),c=["left","top"].includes(s)?-1:1,d=r&&a?-1:1,h=et(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const vn=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:o,y:r,placement:s,middlewareData:l}=e,a=await yn(e,t);return s===(null==(n=l.offset)?void 0:n.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:o+a.x,y:r+a.y,data:{...a,placement:s}}}}},xn=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=et(t,e),c={x:n,y:i},d=await Z(e,a),h=pt(X(o)),p=$e(h);let u=c[p],f=c[h];if(r){const t="y"===p?"bottom":"right";u=ie(u+d["y"===p?"top":"left"],u,u-d[t])}if(s){const t="y"===h?"bottom":"right";f=ie(f+d["y"===h?"top":"left"],f,f-d[t])}const m=l.fn({...e,[p]:u,[h]:f});return{...m,data:{x:m.x-n,y:m.y-i}}}}},wn=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:o,elements:r}=e,{apply:s=(()=>{}),...l}=et(t,e),a=await Z(e,l),c=X(n),d=T(n),h="y"===pt(n),{width:p,height:u}=i.floating;let f,m;"top"===c||"bottom"===c?(f=c,m=d===(await(null==o.isRTL?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(m=c,f="end"===d?"top":"bottom");const g=u-a.top-a.bottom,y=p-a.left-a.right,v=N(u-a[f],g),x=N(p-a[m],y),w=!e.middlewareData.shift;let $=v,b=x;if(h?b=d||w?N(x,y):y:$=d||w?N(v,g):g,w&&!d){const t=A(a.left,0),e=A(a.right,0),n=A(a.top,0),i=A(a.bottom,0);h?b=p-2*(0!==t||0!==e?t+e:A(a.left,a.right)):$=u-2*(0!==n||0!==i?n+i:A(a.top,a.bottom))}await s({...e,availableWidth:b,availableHeight:$});const _=await o.getDimensions(r.floating);return p!==_.width||u!==_.height?{reset:{rects:!0}}:{}}}};function nt(t){return Ae(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function L(t){var e;return null==(e=(Ae(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Ae(t){return t instanceof Node||t instanceof S(t).Node}function P(t){return t instanceof Element||t instanceof S(t).Element}function R(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function ae(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof S(t).ShadowRoot)}function ft(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function $n(t){return["table","td","th"].includes(nt(t))}function Ft(t){const e=zt(),n=O(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function _n(t){let e=B(t);for(;R(e)&&!Q(e);){if(Ft(e))return e;e=B(e)}return null}function zt(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Q(t){return["html","body","#document"].includes(nt(t))}function O(t){return S(t).getComputedStyle(t)}function Ct(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function B(t){if("html"===nt(t))return t;const e=t.assignedSlot||t.parentNode||ae(t)&&t.host||L(t);return ae(e)?e.host:e}function Ee(t){const e=B(t);return Q(e)?t.ownerDocument?t.ownerDocument.body:t.body:R(e)&&ft(e)?e:Ee(e)}function ht(t,e,n){var i;void 0===e&&(e=[]),void 0===n&&(n=!0);const o=Ee(t),r=o===(null==(i=t.ownerDocument)?void 0:i.body),s=S(o);return r?e.concat(s,s.visualViewport||[],ft(o)?o:[],s.frameElement&&n?ht(s.frameElement):[]):e.concat(o,ht(o,[],n))}function Se(t){const e=O(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const o=R(t),r=o?t.offsetWidth:n,s=o?t.offsetHeight:i,l=$t(n)!==r||$t(i)!==s;return l&&(n=r,i=s),{width:n,height:i,$:l}}function kt(t){return P(t)?t:t.contextElement}function K(t){const e=kt(t);if(!R(e))return W(1);const n=e.getBoundingClientRect(),{width:i,height:o,$:r}=Se(e);let s=(r?$t(n.width):n.width)/i,l=(r?$t(n.height):n.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const bn=W(0);function Oe(t){const e=S(t);return zt()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:bn}function An(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==S(t))&&e}function q(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const o=t.getBoundingClientRect(),r=kt(t);let s=W(1);e&&(i?P(i)&&(s=K(i)):s=K(t));const l=An(r,n,i)?Oe(r):W(0);let a=(o.left+l.x)/s.x,c=(o.top+l.y)/s.y,d=o.width/s.x,h=o.height/s.y;if(r){const t=S(r),e=i&&P(i)?S(i):i;let n=t,o=n.frameElement;for(;o&&i&&e!==n;){const t=K(o),e=o.getBoundingClientRect(),i=O(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,s=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=r,c+=s,n=S(o),o=n.frameElement}}return _t({width:d,height:h,x:a,y:c})}const En=[":popover-open",":modal"];function Vt(t){return En.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Sn(t){let{elements:e,rect:n,offsetParent:i,strategy:o}=t;const r="fixed"===o,s=L(i),l=!!e&&Vt(e.floating);if(i===s||l&&r)return n;let a={scrollLeft:0,scrollTop:0},c=W(1);const d=W(0),h=R(i);if((h||!h&&!r)&&(("body"!==nt(i)||ft(s))&&(a=Ct(i)),R(i))){const t=q(i);c=K(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+d.x,y:n.y*c.y-a.scrollTop*c.y+d.y}}function On(t){return Array.from(t.getClientRects())}function Ce(t){return q(L(t)).left+Ct(t).scrollLeft}function Cn(t){const e=L(t),n=Ct(t),i=t.ownerDocument.body,o=A(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=A(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+Ce(t);const l=-n.scrollTop;return"rtl"===O(i).direction&&(s+=A(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:s,y:l}}function Pn(t,e){const n=S(t),i=L(t),o=n.visualViewport;let r=i.clientWidth,s=i.clientHeight,l=0,a=0;if(o){r=o.width,s=o.height;const t=zt();(!t||t&&"fixed"===e)&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:s,x:l,y:a}}function Rn(t,e){const n=q(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=R(t)?K(t):W(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}function ce(t,e,n){let i;if("viewport"===e)i=Pn(t,n);else if("document"===e)i=Cn(L(t));else if(P(e))i=Rn(e,n);else{const n=Oe(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return _t(i)}function Pe(t,e){const n=B(t);return!(n===e||!P(n)||Q(n))&&("fixed"===O(n).position||Pe(n,e))}function Tn(t,e){const n=e.get(t);if(n)return n;let i=ht(t,[],!1).filter((t=>P(t)&&"body"!==nt(t))),o=null;const r="fixed"===O(t).position;let s=r?B(t):t;for(;P(s)&&!Q(s);){const e=O(s),n=Ft(s);!n&&"fixed"===e.position&&(o=null),(r?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||ft(s)&&!n&&Pe(t,s))?i=i.filter((t=>t!==s)):o=e,s=B(s)}return e.set(t,i),i}function Dn(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[..."clippingAncestors"===n?Vt(e)?[]:Tn(e,this._c):[].concat(n),i],s=r[0],l=r.reduce(((t,n)=>{const i=ce(e,n,o);return t.top=A(i.top,t.top),t.right=N(i.right,t.right),t.bottom=N(i.bottom,t.bottom),t.left=A(i.left,t.left),t}),ce(e,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ln(t){const{width:e,height:n}=Se(t);return{width:e,height:n}}function Hn(t,e,n){const i=R(e),o=L(e),r="fixed"===n,s=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=W(0);if(i||!i&&!r)if(("body"!==nt(e)||ft(o))&&(l=Ct(e)),i){const t=q(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else o&&(a.x=Ce(o));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function Mt(t){return"static"===O(t).position}function de(t,e){return R(t)&&"fixed"!==O(t).position?e?e(t):t.offsetParent:null}function Re(t,e){const n=S(t);if(Vt(t))return n;if(!R(t)){let e=B(t);for(;e&&!Q(e);){if(P(e)&&!Mt(e))return e;e=B(e)}return n}let i=de(t,e);for(;i&&$n(i)&&Mt(i);)i=de(i,e);return i&&Q(i)&&Mt(i)&&!Ft(i)?n:i||_n(t)||n}const Mn=async function(t){const e=this.getOffsetParent||Re,n=this.getDimensions,i=await n(t.floating);return{reference:Hn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Nn(t){return"rtl"===O(t).direction}const Un={convertOffsetParentRelativeRectToViewportRelativeRect:Sn,getDocumentElement:L,getClippingRect:Dn,getOffsetParent:Re,getElementRects:Mn,getClientRects:On,getDimensions:Ln,getScale:K,isElement:P,isRTL:Nn};function Wn(t,e){let n,i=null;const o=L(t);function r(){var t;clearTimeout(n),null==(t=i)||t.disconnect(),i=null}return function s(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-gt(d)+"px "+-gt(o.clientWidth-(c+h))+"px "+-gt(o.clientHeight-(d+p))+"px "+-gt(c)+"px",threshold:A(0,N(1,a))||1};let f=!0;function m(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return s();e?s(!1,e):n=setTimeout((()=>{s(!1,1e-7)}),1e3)}f=!1}try{i=new IntersectionObserver(m,{...u,root:o.ownerDocument})}catch{i=new IntersectionObserver(m,u)}i.observe(t)}(!0),r}function Bn(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=kt(t),d=o||r?[...c?ht(c):[],...ht(e)]:[];d.forEach((t=>{o&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const h=c&&l?Wn(c,n):null;let p=-1,u=null;s&&(u=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),n()})),c&&!a&&u.observe(c),u.observe(e));let f,m=a?q(t):null;return a&&function e(){const i=q(t);m&&(i.x!==m.x||i.y!==m.y||i.width!==m.width||i.height!==m.height)&&n(),m=i,f=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{o&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const jn=Z,Fn=vn,zn=mn,kn=xn,Vn=wn,In=gn,qn=(t,e,n)=>{const i=new Map,o={platform:Un,...n},r={...o.platform,_c:i};return pn(t,e,{...o,platform:r})};var Xn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Pt=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Yn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Xn(e,n,r),r};let j=class extends E{constructor(){super(...arguments),this.open=!1}firstUpdated(){this.addEventListener("focus",(()=>this.focus())),document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",(()=>this.focus())),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return D`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${this.open?D`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:$}
		`}clickOutsideHandler(t){var e;const n=t.composedPath()[0],i=!(null!=(e=this.shadowRoot)&&e.contains(n)||this.contains(n));this.open&&i&&(this.open=!1)}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=Bn(this._dropsummary[0],this._dropmenu,(async()=>{await qn(this._dropsummary[0],this._dropmenu,{middleware:[zn({autoAlignment:!0,alignment:"bottom",allowedPlacements:["top","bottom"],crossAxis:!0,padding:3}),Fn(3),kn({crossAxis:!0,mainAxis:!0,padding:3}),Vn({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await jn(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})},In()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e,middlewareData:n})=>{n.hide&&Object.assign(this._dropmenu.style,{opacity:n.hide.referenceHidden?"0":"1",pointerEvents:n.hide.referenceHidden?"none":"initial"}),Object.assign(this._dropmenu.style,{inset:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}))}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}};j.styles=F`
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
	`,j.properties={delegatesFocus:{type:Boolean,reflect:!0}},j.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0},Pt([tt({type:Boolean,reflect:!0})],j.prototype,"open",2),Pt([on({slot:"summary",flatten:!0})],j.prototype,"_dropsummary",2),Pt([nn('div[part="dropmenu"]')],j.prototype,"_dropmenu",2),j=Pt([z("ly-dropdown")],j);var Kn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Jn=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Gn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Kn(e,n,r),r};let Nt=class extends E{render(){return D` <slot></slot> `}};Nt.styles=F`
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
	`,Nt=Jn([z("ly-fragment")],Nt);var Zn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Te=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Qn(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Zn(e,n,r),r};let bt=class extends E{constructor(){super(...arguments),this.stacked="over"}render(){return D` <slot></slot> `}};bt.styles=F`
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
	`,Te([tt({type:String,reflect:!0})],bt.prototype,"stacked",2),bt=Te([z("ly-layer")],bt);var ti=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,mt=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?ei(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&ti(e,n,r),r};let At=class extends E{constructor(){super(...arguments),this.axis="x"}render(){return D` <slot></slot> `}};At.styles=F`
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
	`,mt([tt({type:String,reflect:!0})],At.prototype,"axis",2),At=mt([z("ly-flex")],At);let Et=class extends E{constructor(){super(...arguments),this.tmpl=""}render(){return D` <slot></slot> `}};Et.styles=F`
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
	`,mt([tt({type:String,reflect:!0})],Et.prototype,"tmpl",2),Et=mt([z("ly-grid")],Et);let Ut=class extends E{render(){return D` <slot></slot> `}};Ut.styles=F`
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	`,Ut=mt([z("ly-group")],Ut);var ni=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,De=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?ii(e,n):e,s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&ni(e,n,r),r};let St=class extends E{constructor(){super(...arguments),this.axis="x"}render(){return D` <slot></slot> `}};St.styles=F`
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
	`,De([tt({type:String,reflect:!0})],St.prototype,"axis",2),St=De([z("ly-slider")],St);export{wt as App,j as Dropdown,At as Flex,Nt as Fragment,Et as Grid,Ut as Group,bt as Layer,St as Slider};