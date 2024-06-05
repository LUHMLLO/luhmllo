/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t=globalThis,Kt=$t.ShadowRoot&&(void 0===$t.ShadyCSS||$t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),ne=new WeakMap;let Ae=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kt&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=ne.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ne.set(e,t))}return t}toString(){return this.cssText}};const Ye=t=>new Ae("string"==typeof t?t:t+"",void 0,Jt),R=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new Ae(i,t,Jt)},Ge=(t,e)=>{if(Kt)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=$t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},se=Kt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ye(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Ke,defineProperty:Je,getOwnPropertyDescriptor:Ze,getOwnPropertyNames:Qe,getOwnPropertySymbols:ti,getPrototypeOf:ei}=Object,F=globalThis,re=F.trustedTypes,ii=re?re.emptyScript:"",Ut=F.reactiveElementPolyfillSupport,ct=(t,e)=>t,At={toAttribute(t,e){switch(e){case Boolean:t=t?ii:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Zt=(t,e)=>!Ke(t,e),oe={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Zt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);class Z extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=oe){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Je(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=Ze(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==n?void 0:n.call(this)},set(e){const o=null==n?void 0:n.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??oe}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;const t=ei(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){const t=this.properties,e=[...Qe(t),...ti(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(se(t))}else void 0!==t&&e.push(se(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ge(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==(null==(i=n.converter)?void 0:i.toAttribute)?n.converter:At).toAttribute(e,n.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=n.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:At;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Zt)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[ct("elementProperties")]=new Map,Z[ct("finalized")]=new Map,null==Ut||Ut({ReactiveElement:Z}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=globalThis,Et=dt.trustedTypes,le=Et?Et.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ee="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,Oe="?"+B,ni=`<${Oe}>`,G=document,ht=()=>G.createComment(""),pt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Se=Array.isArray,si=t=>Se(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),jt="[ \t\n\f\r]",at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,ce=/>/g,X=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,he=/"/g,Ce=/^(?:script|style|textarea|title)$/i,ri=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),y=ri(1),tt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),pe=new WeakMap,Y=G.createTreeWalker(G,129);function Pe(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==le?le.createHTML(e):e}const oi=(t,e)=>{const i=t.length-1,n=[];let r,o=2===e?"<svg>":"",s=at;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,a=s.exec(i),null!==a);)d=s.lastIndex,s===at?"!--"===a[1]?s=ae:void 0!==a[1]?s=ce:void 0!==a[2]?(Ce.test(a[2])&&(r=RegExp("</"+a[2],"g")),s=X):void 0!==a[3]&&(s=X):s===X?">"===a[0]?(s=r??at,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?X:'"'===a[3]?he:de):s===he||s===de?s=X:s===ae||s===ce?s=at:(s=X,r=void 0);const h=s===X&&t[e+1].startsWith("/>")?" ":"";o+=s===at?i+ni:c>=0?(n.push(l),i.slice(0,c)+Ee+i.slice(c)+B+h):i+B+(-2===c?e:h)}return[Pe(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class ut{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const s=t.length-1,l=this.parts,[a,c]=oi(t,e);if(this.el=ut.createElement(a,i),Y.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Y.nextNode())&&l.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(Ee)){const e=c[o++],i=n.getAttribute(t).split(B),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?ai:"?"===s[1]?ci:"@"===s[1]?di:Dt}),n.removeAttribute(t)}else t.startsWith(B)&&(l.push({type:6,index:r}),n.removeAttribute(t));if(Ce.test(n.tagName)){const t=n.textContent.split(B),e=t.length-1;if(e>0){n.textContent=Et?Et.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],ht()),Y.nextNode(),l.push({type:2,index:++r});n.append(t[e],ht())}}}else if(8===n.nodeType)if(n.data===Oe)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(B,t+1));)l.push({type:7,index:r}),t+=B.length-1}r++}}static createElement(t,e){const i=G.createElement("template");return i.innerHTML=t,i}}function et(t,e,i=t,n){var r,o;if(e===tt)return e;let s=void 0!==n?null==(r=i._$Co)?void 0:r[n]:i._$Cl;const l=pt(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==l&&(null==(o=null==s?void 0:s._$AO)||o.call(s,!1),void 0===l?s=void 0:(s=new l(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??(i._$Co=[]))[n]=s:i._$Cl=s),void 0!==s&&(e=et(t,s._$AS(t,e.values),s,n)),e}class li{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((null==t?void 0:t.creationScope)??G).importNode(e,!0);Y.currentNode=n;let r=Y.nextNode(),o=0,s=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new mt(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new hi(r,this,t)),this._$AV.push(e),l=i[++s]}o!==(null==l?void 0:l.index)&&(r=Y.nextNode(),o++)}return Y.currentNode=G,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class mt{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(null==n?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),pt(t)?t===_||null==t||""===t?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==tt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):si(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==_&&pt(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=ut.createElement(Pe(n.h,n.h[0]),this.options)),n);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{const t=new li(r,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=pe.get(t.strings);return void 0===e&&pe.set(t.strings,e=new ut(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new mt(this.S(ht()),this.S(ht()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(void 0===r)t=et(this,t,e,0),o=!pt(t)||t!==this._$AH&&t!==tt,o&&(this._$AH=t);else{const n=t;let s,l;for(t=r[0],s=0;s<r.length-1;s++)l=et(this,n[i+s],e,s),l===tt&&(l=this._$AH[s]),o||(o=!pt(l)||l!==this._$AH[s]),l===_?t=_:t!==_&&(t+=(l??"")+r[s+1]),this._$AH[s]=l}o&&!n&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ai extends Dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class ci extends Dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class di extends Dt{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??_)===tt)return;const i=this._$AH,n=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==_&&(i===_||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class hi{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Bt=dt.litHtmlPolyfillSupport;null==Bt||Bt(ut,mt),(dt.litHtmlVersions??(dt.litHtmlVersions=[])).push("3.1.4");const pi=(t,e,i)=>{const n=(null==i?void 0:i.renderBefore)??e;let r=n._$litPart$;if(void 0===r){const t=(null==i?void 0:i.renderBefore)??null;n._$litPart$=r=new mt(e.insertBefore(ht(),t),t,void 0,i??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return tt}}var $e;$._$litElement$=!0,$.finalized=!0,null==($e=globalThis.litElementHydrateSupport)||$e.call(globalThis,{LitElement:$});const Wt=globalThis.litElementPolyfillSupport;null==Wt||Wt({LitElement:$}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ui={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Zt},fi=(t=ui,e,i)=>{const{kind:n,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,r,t)},init(e){return void 0!==e&&this.P(n,void 0,t),e}}}if("setter"===n){const{name:n}=i;return function(i){const r=this[n];e.call(this,i),this.requestUpdate(n,r,t)}}throw Error("Unsupported decorator location: "+n)};function A(t){return(e,i)=>"object"==typeof i?fi(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function mi(t,e){return(e,i,n)=>Re(e,i,{get(){return(null==(e=this.renderRoot)?void 0:e.querySelector(t))??null;var e}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gi(t){return(e,i)=>{const{slot:n,selector:r}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return Re(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(o),n=(null==i?void 0:i.assignedElements(t))??[];return void 0===r?n:n.filter((t=>t.matches(r)))}})}}var yi=Object.defineProperty,vi=Object.getOwnPropertyDescriptor,Te=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?vi(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&yi(e,i,o),o};let Ot=class extends ${constructor(){super(...arguments),this.tmpl="default-y"}render(){return y` <slot></slot> `}};Ot.styles=R`
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
	`,Te([A({type:String,reflect:!0})],Ot.prototype,"tmpl",2),Ot=Te([O("ly-app")],Ot);var xi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,gt=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?wi(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&xi(e,i,o),o};let N=class extends ${constructor(){super(...arguments),this.checked=!1,this.group="",this.label="",this.variant=""}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",this._toggleChecked),this.addEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this._toggleChecked()}))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",this._toggleChecked),this.removeEventListener("keydown",(t=>{("Enter"===t.key||" "===t.key)&&this._toggleChecked()}))}render(){return y`
			<ly-flex axis="x" part="row">
				<ly-icon ?solid="${this.checked}"> ${this._handleVariant()} </ly-icon>
				${this.label?y`<label part="label">${this.label}</label>`:_}
			</ly-flex>
			${this.checked?y`<slot></slot>`:_}
		`}_toggleChecked(){let t;if(this.group){t=document.querySelectorAll(`ly-check[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}))}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}_handleVariant(){switch(this.variant){case"checkbox":return y`${this.checked?"check_box":"check_box_outline_blank"}`;case"switch":return y`${this.checked?"toggle_on":"toggle_off"}`;case"radio":return y`${this.checked?"check_circle":"radio_button_unchecked"}`;default:return y``}}};N.styles=R`
		:host(:is(ly-check)) {
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

			--radius: 0;
			border-radius: var(--radius);

			--spacing: 0;
			padding: var(--spacing);
		}

		:host(:is(ly-check)) {
			cursor: pointer;
			display: inline-flex;
			flex-direction: column;
			flex-shrink: 0;
			height: max-content;
			overflow: clip;
		}

		:host(:is(ly-check):focus-visible) {
			outline: solid var(--clr-accent);
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
	`,N.properties={delegatesFocus:{type:Boolean,reflect:!0}},N.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0},gt([A({type:Boolean,reflect:!0})],N.prototype,"checked",2),gt([A({type:String,reflect:!0})],N.prototype,"group",2),gt([A({type:String,reflect:!0})],N.prototype,"label",2),gt([A({type:"checkbox",reflect:!0})],N.prototype,"variant",2),N=gt([O("ly-check")],N);const Le=["top","right","bottom","left"],ue=["start","end"],fe=Le.reduce(((t,e)=>t.concat(e,e+"-"+ue[0],e+"-"+ue[1])),[]),W=Math.min,C=Math.max,St=Math.round,_t=Math.floor,z=t=>({x:t,y:t}),bi={left:"right",right:"left",bottom:"top",top:"bottom"},_i={start:"end",end:"start"};function me(t,e,i){return C(t,W(e,i))}function st(t,e){return"function"==typeof t?t(e):t}function J(t){return t.split("-")[0]}function M(t){return t.split("-")[1]}function ke(t){return"x"===t?"y":"x"}function De(t){return"y"===t?"height":"width"}function yt(t){return["top","bottom"].includes(J(t))?"y":"x"}function He(t){return ke(yt(t))}function $i(t,e,i){void 0===i&&(i=!1);const n=M(t),r=He(t),o=De(r);let s="x"===r?n===(i?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=ge(s)),[s,ge(s)]}function Ai(t){return t.replace(/start|end/g,(t=>_i[t]))}function ge(t){return t.replace(/left|right|bottom|top/g,(t=>bi[t]))}function Ei(t){return{top:0,right:0,bottom:0,left:0,...t}}function Oi(t){return"number"!=typeof t?Ei(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){const{x:e,y:i,width:n,height:r}=t;return{width:n,height:r,top:i,left:e,right:e+n,bottom:i+r,x:e,y:i}}function ye(t,e,i){let{reference:n,floating:r}=t;const o=yt(e),s=He(e),l=De(s),a=J(e),c="y"===o,d=n.x+n.width/2-r.width/2,h=n.y+n.height/2-r.height/2,p=n[l]/2-r[l]/2;let u;switch(a){case"top":u={x:d,y:n.y-r.height};break;case"bottom":u={x:d,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:h};break;case"left":u={x:n.x-r.width,y:h};break;default:u={x:n.x,y:n.y}}switch(M(e)){case"start":u[s]-=p*(i&&c?-1:1);break;case"end":u[s]+=p*(i&&c?-1:1)}return u}const Si=async(t,e,i)=>{const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:s}=i,l=o.filter(Boolean),a=await(null==s.isRTL?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=ye(c,n,a),p=n,u={},f=0;for(let i=0;i<l.length;i++){const{name:o,fn:m}=l[i],{x:y,y:g,data:v,reset:x}=await m({x:d,y:h,initialPlacement:n,placement:p,strategy:r,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});d=y??d,h=g??h,u={...u,[o]:{...u[o],...v}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(c=!0===x.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):x.rects),({x:d,y:h}=ye(c,p,a))),i=-1)}return{x:d,y:h,placement:p,strategy:r,middlewareData:u}};async function it(t,e){var i;void 0===e&&(e={});const{x:n,y:r,platform:o,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:u=0}=st(e,t),f=Oi(u),m=l[p?"floating"===h?"reference":"floating":h],y=Ct(await o.getClippingRect({element:null==(i=await(null==o.isElement?void 0:o.isElement(m)))||i?m:m.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),g="floating"===h?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,v=await(null==o.getOffsetParent?void 0:o.getOffsetParent(l.floating)),x=await(null==o.isElement?void 0:o.isElement(v))&&await(null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},b=Ct(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return{top:(y.top-b.top+f.top)/x.y,bottom:(b.bottom-y.bottom+f.bottom)/x.y,left:(y.left-b.left+f.left)/x.x,right:(b.right-y.right+f.right)/x.x}}function Ci(t,e,i){return(t?[...i.filter((e=>M(e)===t)),...i.filter((e=>M(e)!==t))]:i.filter((t=>J(t)===t))).filter((i=>!t||(M(i)===t||!!e&&Ai(i)!==i)))}const Pi=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var i,n,r;const{rects:o,middlewareData:s,placement:l,platform:a,elements:c}=e,{crossAxis:d=!1,alignment:h,allowedPlacements:p=fe,autoAlignment:u=!0,...f}=st(t,e),m=void 0!==h||p===fe?Ci(h||null,u,p):p,y=await it(e,f),g=(null==(i=s.autoPlacement)?void 0:i.index)||0,v=m[g];if(null==v)return{};const x=$i(v,o,await(null==a.isRTL?void 0:a.isRTL(c.floating)));if(l!==v)return{reset:{placement:m[0]}};const b=[y[J(v)],y[x[0]],y[x[1]]],w=[...(null==(n=s.autoPlacement)?void 0:n.overflows)||[],{placement:v,overflows:b}],_=m[g+1];if(_)return{data:{index:g+1,overflows:w},reset:{placement:_}};const $=w.map((t=>{const e=M(t.placement);return[t.placement,e&&d?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),A=(null==(r=$.filter((t=>t[2].slice(0,M(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||$[0][0];return A!==l?{data:{index:g+1,overflows:w},reset:{placement:A}}:{}}}};function ve(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function xe(t){return Le.some((e=>t[e]>=0))}const Ri=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:i}=e,{strategy:n="referenceHidden",...r}=st(t,e);switch(n){case"referenceHidden":{const t=ve(await it(e,{...r,elementContext:"reference"}),i.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:xe(t)}}}case"escaped":{const t=ve(await it(e,{...r,altBoundary:!0}),i.floating);return{data:{escapedOffsets:t,escaped:xe(t)}}}default:return{}}}}};async function Ti(t,e){const{placement:i,platform:n,elements:r}=t,o=await(null==n.isRTL?void 0:n.isRTL(r.floating)),s=J(i),l=M(i),a="y"===yt(i),c=["left","top"].includes(s)?-1:1,d=o&&a?-1:1,h=st(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&"number"==typeof f&&(u="end"===l?-1*f:f),a?{x:u*d,y:p*c}:{x:p*c,y:u*d}}const Li=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,n;const{x:r,y:o,placement:s,middlewareData:l}=e,a=await Ti(e,t);return s===(null==(i=l.offset)?void 0:i.placement)&&null!=(n=l.arrow)&&n.alignmentOffset?{}:{x:r+a.x,y:o+a.y,data:{...a,placement:s}}}}},ki=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:n,placement:r}=e,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=st(t,e),c={x:i,y:n},d=await it(e,a),h=yt(J(r)),p=ke(h);let u=c[p],f=c[h];if(o){const t="y"===p?"bottom":"right";u=me(u+d["y"===p?"top":"left"],u,u-d[t])}if(s){const t="y"===h?"bottom":"right";f=me(f+d["y"===h?"top":"left"],f,f-d[t])}const m=l.fn({...e,[p]:u,[h]:f});return{...m,data:{x:m.x-i,y:m.y-n}}}}},Di=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:n,platform:r,elements:o}=e,{apply:s=(()=>{}),...l}=st(t,e),a=await it(e,l),c=J(i),d=M(i),h="y"===yt(i),{width:p,height:u}=n.floating;let f,m;"top"===c||"bottom"===c?(f=c,m=d===(await(null==r.isRTL?void 0:r.isRTL(o.floating))?"start":"end")?"left":"right"):(m=c,f="end"===d?"top":"bottom");const y=u-a.top-a.bottom,g=p-a.left-a.right,v=W(u-a[f],y),x=W(p-a[m],g),b=!e.middlewareData.shift;let w=v,_=x;if(h?_=d||b?W(x,g):g:w=d||b?W(v,y):y,b&&!d){const t=C(a.left,0),e=C(a.right,0),i=C(a.top,0),n=C(a.bottom,0);h?_=p-2*(0!==t||0!==e?t+e:C(a.left,a.right)):w=u-2*(0!==i||0!==n?i+n:C(a.top,a.bottom))}await s({...e,availableWidth:_,availableHeight:w});const $=await r.getDimensions(o.floating);return p!==$.width||u!==$.height?{reset:{rects:!0}}:{}}}};function rt(t){return Me(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function U(t){var e;return null==(e=(Me(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Me(t){return t instanceof Node||t instanceof P(t).Node}function k(t){return t instanceof Element||t instanceof P(t).Element}function D(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function we(t){return!(typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof P(t).ShadowRoot)}function vt(t){const{overflow:e,overflowX:i,overflowY:n,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+i)&&!["inline","contents"].includes(r)}function Hi(t){return["table","td","th"].includes(rt(t))}function Qt(t){const e=te(),i=T(t);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((t=>(i.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(i.contain||"").includes(t)))}function Mi(t){let e=I(t);for(;D(e)&&!nt(e);){if(Qt(e))return e;e=I(e)}return null}function te(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(rt(t))}function T(t){return P(t).getComputedStyle(t)}function Ht(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if("html"===rt(t))return t;const e=t.assignedSlot||t.parentNode||we(t)&&t.host||U(t);return we(e)?e.host:e}function Ne(t){const e=I(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&vt(e)?e:Ne(e)}function ft(t,e,i){var n;void 0===e&&(e=[]),void 0===i&&(i=!0);const r=Ne(t),o=r===(null==(n=t.ownerDocument)?void 0:n.body),s=P(r);return o?e.concat(s,s.visualViewport||[],vt(r)?r:[],s.frameElement&&i?ft(s.frameElement):[]):e.concat(r,ft(r,[],i))}function Ue(t){const e=T(t);let i=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=D(t),o=r?t.offsetWidth:i,s=r?t.offsetHeight:n,l=St(i)!==o||St(n)!==s;return l&&(i=o,n=s),{width:i,height:n,$:l}}function ee(t){return k(t)?t:t.contextElement}function Q(t){const e=ee(t);if(!D(e))return z(1);const i=e.getBoundingClientRect(),{width:n,height:r,$:o}=Ue(e);let s=(o?St(i.width):i.width)/n,l=(o?St(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ni=z(0);function je(t){const e=P(t);return te()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Ni}function Ui(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==P(t))&&e}function K(t,e,i,n){void 0===e&&(e=!1),void 0===i&&(i=!1);const r=t.getBoundingClientRect(),o=ee(t);let s=z(1);e&&(n?k(n)&&(s=Q(n)):s=Q(t));const l=Ui(o,i,n)?je(o):z(0);let a=(r.left+l.x)/s.x,c=(r.top+l.y)/s.y,d=r.width/s.x,h=r.height/s.y;if(o){const t=P(o),e=n&&k(n)?P(n):n;let i=t,r=i.frameElement;for(;r&&n&&e!==i;){const t=Q(r),e=r.getBoundingClientRect(),n=T(r),o=e.left+(r.clientLeft+parseFloat(n.paddingLeft))*t.x,s=e.top+(r.clientTop+parseFloat(n.paddingTop))*t.y;a*=t.x,c*=t.y,d*=t.x,h*=t.y,a+=o,c+=s,i=P(r),r=i.frameElement}}return Ct({width:d,height:h,x:a,y:c})}const ji=[":popover-open",":modal"];function ie(t){return ji.some((e=>{try{return t.matches(e)}catch{return!1}}))}function Bi(t){let{elements:e,rect:i,offsetParent:n,strategy:r}=t;const o="fixed"===r,s=U(n),l=!!e&&ie(e.floating);if(n===s||l&&o)return i;let a={scrollLeft:0,scrollTop:0},c=z(1);const d=z(0),h=D(n);if((h||!h&&!o)&&(("body"!==rt(n)||vt(s))&&(a=Ht(n)),D(n))){const t=K(n);c=Q(n),d.x=t.x+n.clientLeft,d.y=t.y+n.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+d.x,y:i.y*c.y-a.scrollTop*c.y+d.y}}function Wi(t){return Array.from(t.getClientRects())}function Be(t){return K(U(t)).left+Ht(t).scrollLeft}function Fi(t){const e=U(t),i=Ht(t),n=t.ownerDocument.body,r=C(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),o=C(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-i.scrollLeft+Be(t);const l=-i.scrollTop;return"rtl"===T(n).direction&&(s+=C(e.clientWidth,n.clientWidth)-r),{width:r,height:o,x:s,y:l}}function zi(t,e){const i=P(t),n=U(t),r=i.visualViewport;let o=n.clientWidth,s=n.clientHeight,l=0,a=0;if(r){o=r.width,s=r.height;const t=te();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,a=r.offsetTop)}return{width:o,height:s,x:l,y:a}}function Ii(t,e){const i=K(t,!0,"fixed"===e),n=i.top+t.clientTop,r=i.left+t.clientLeft,o=D(t)?Q(t):z(1);return{width:t.clientWidth*o.x,height:t.clientHeight*o.y,x:r*o.x,y:n*o.y}}function be(t,e,i){let n;if("viewport"===e)n=zi(t,i);else if("document"===e)n=Fi(U(t));else if(k(e))n=Ii(e,i);else{const i=je(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return Ct(n)}function We(t,e){const i=I(t);return!(i===e||!k(i)||nt(i))&&("fixed"===T(i).position||We(i,e))}function Vi(t,e){const i=e.get(t);if(i)return i;let n=ft(t,[],!1).filter((t=>k(t)&&"body"!==rt(t))),r=null;const o="fixed"===T(t).position;let s=o?I(t):t;for(;k(s)&&!nt(s);){const e=T(s),i=Qt(s);!i&&"fixed"===e.position&&(r=null),(o?!i&&!r:!i&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||vt(s)&&!i&&We(t,s))?n=n.filter((t=>t!==s)):r=e,s=I(s)}return e.set(t,n),n}function qi(t){let{element:e,boundary:i,rootBoundary:n,strategy:r}=t;const o=[..."clippingAncestors"===i?ie(e)?[]:Vi(e,this._c):[].concat(i),n],s=o[0],l=o.reduce(((t,i)=>{const n=be(e,i,r);return t.top=C(n.top,t.top),t.right=W(n.right,t.right),t.bottom=W(n.bottom,t.bottom),t.left=C(n.left,t.left),t}),be(e,s,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Xi(t){const{width:e,height:i}=Ue(t);return{width:e,height:i}}function Yi(t,e,i){const n=D(e),r=U(e),o="fixed"===i,s=K(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const a=z(0);if(n||!n&&!o)if(("body"!==rt(e)||vt(r))&&(l=Ht(e)),n){const t=K(e,!0,o,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=Be(r));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function Ft(t){return"static"===T(t).position}function _e(t,e){return D(t)&&"fixed"!==T(t).position?e?e(t):t.offsetParent:null}function Fe(t,e){const i=P(t);if(ie(t))return i;if(!D(t)){let e=I(t);for(;e&&!nt(e);){if(k(e)&&!Ft(e))return e;e=I(e)}return i}let n=_e(t,e);for(;n&&Hi(n)&&Ft(n);)n=_e(n,e);return n&&nt(n)&&Ft(n)&&!Qt(n)?i:n||Mi(t)||i}const Gi=async function(t){const e=this.getOffsetParent||Fe,i=this.getDimensions,n=await i(t.floating);return{reference:Yi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Ki(t){return"rtl"===T(t).direction}const Ji={convertOffsetParentRelativeRectToViewportRelativeRect:Bi,getDocumentElement:U,getClippingRect:qi,getOffsetParent:Fe,getElementRects:Gi,getClientRects:Wi,getDimensions:Xi,getScale:Q,isElement:k,isRTL:Ki};function Zi(t,e){let i,n=null;const r=U(t);function o(){var t;clearTimeout(i),null==(t=n)||t.disconnect(),n=null}return function s(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),o();const{left:c,top:d,width:h,height:p}=t.getBoundingClientRect();if(l||e(),!h||!p)return;const u={rootMargin:-_t(d)+"px "+-_t(r.clientWidth-(c+h))+"px "+-_t(r.clientHeight-(d+p))+"px "+-_t(c)+"px",threshold:C(0,W(1,a))||1};let f=!0;function m(t){const e=t[0].intersectionRatio;if(e!==a){if(!f)return s();e?s(!1,e):i=setTimeout((()=>{s(!1,1e-7)}),1e3)}f=!1}try{n=new IntersectionObserver(m,{...u,root:r.ownerDocument})}catch{n=new IntersectionObserver(m,u)}n.observe(t)}(!0),o}function Qi(t,e,i,n){void 0===n&&(n={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=n,c=ee(t),d=r||o?[...c?ft(c):[],...ft(e)]:[];d.forEach((t=>{r&&t.addEventListener("scroll",i,{passive:!0}),o&&t.addEventListener("resize",i)}));const h=c&&l?Zi(c,i):null;let p=-1,u=null;s&&(u=new ResizeObserver((t=>{let[n]=t;n&&n.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=u)||t.observe(e)}))),i()})),c&&!a&&u.observe(c),u.observe(e));let f,m=a?K(t):null;return a&&function e(){const n=K(t);m&&(n.x!==m.x||n.y!==m.y||n.width!==m.width||n.height!==m.height)&&i(),m=n,f=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach((t=>{r&&t.removeEventListener("scroll",i),o&&t.removeEventListener("resize",i)})),null==h||h(),null==(t=u)||t.disconnect(),u=null,a&&cancelAnimationFrame(f)}}const tn=it,en=Li,nn=Pi,sn=ki,rn=Di,on=Ri,ln=(t,e,i)=>{const n=new Map,r={platform:Ji,...i},o={...r.platform,_c:n};return Si(t,e,{...r,platform:o})};var an=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Mt=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?cn(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&an(e,i,o),o};let V=class extends ${constructor(){super(...arguments),this.open=!1}firstUpdated(){this.addEventListener("focus",(()=>this.focus())),document.addEventListener("click",this.clickOutsideHandler.bind(this))}async updated(){this._handleFloatingStyles()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",(()=>this.focus())),document.removeEventListener("click",this.clickOutsideHandler.bind(this)),this._cleanup&&this._cleanup()}render(){return y`
			<slot name="summary" tabindex="0" @click=${this._toggleOpen}></slot>
			${this.open?y`
						<div part="dropmenu">
							<div part="dropmenu__inner">
								<slot></slot>
							</div>
						</div>
				  `:_}
		`}clickOutsideHandler(t){var e;const i=t.composedPath()[0],n=!(null!=(e=this.shadowRoot)&&e.contains(i)||this.contains(i));this.open&&n&&(this.open=!1)}_toggleOpen(){this._cleanup&&this._cleanup(),this.open=!this.open}_roundByDPR(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}_handleFloatingStyles(){this._dropsummary&&this._dropmenu&&this.open?this._cleanup=Qi(this._dropsummary[0],this._dropmenu,(async()=>{await ln(this._dropsummary[0],this._dropmenu,{middleware:[nn({autoAlignment:!0,alignment:"bottom",allowedPlacements:["top","bottom"],crossAxis:!0,padding:3}),en(3),sn({crossAxis:!0,mainAxis:!0,padding:3}),rn({apply({rects:t,elements:e}){Object.assign(e.floating.style,{width:`${t.reference.width}px`})}}),{name:"detectOverflow",fn:async t=>(await tn(t,{altBoundary:!0,boundary:document.documentElement,elementContext:"floating",padding:3,rootBoundary:{x:0,y:0,width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}),{})},on()],placement:"bottom",strategy:"fixed"}).then((({x:t,y:e,middlewareData:i})=>{i.hide&&Object.assign(this._dropmenu.style,{opacity:i.hide.referenceHidden?"0":"1",pointerEvents:i.hide.referenceHidden?"none":"initial"}),Object.assign(this._dropmenu.style,{inset:"0",transform:`translate(${this._roundByDPR(t)}px, ${this._roundByDPR(e)}px)`})}))}),{animationFrame:!0}):this._cleanup&&(this._cleanup(),this._cleanup=void 0)}};V.styles=R`
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
	`,V.properties={delegatesFocus:{type:Boolean,reflect:!0}},V.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0},Mt([A({type:Boolean,reflect:!0})],V.prototype,"open",2),Mt([gi({slot:"summary",flatten:!0})],V.prototype,"_dropsummary",2),Mt([mi('div[part="dropmenu"]')],V.prototype,"_dropmenu",2),V=Mt([O("ly-dropdown")],V);var dn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,q=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?hn(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&dn(e,i,o),o};let H=class extends ${constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.ref="",this.required=!1,this.status="",this.type="text"}async connectedCallback(){super.connectedCallback()}updated(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector("slot");let i=null==e?void 0:e.assignedElements();i&&i.forEach((t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(this.ref&&t.setAttribute("id",this.ref),this.name&&t.setAttribute("name",this.name),this.required&&t.setAttribute("required",`${this.required}`),this.type&&t.setAttribute("type",this.type))}))}async disconnectedCallback(){super.disconnectedCallback()}render(){return y`
			${this.label?y`
						<label for=${this.name} part="label">
							${this.label} ${this.setRequiredIcon()}
						</label>
				  `:_}

			<slot></slot>

			${this.caption?y`
						<ly-flex axis="x" part="caption">
							${this.setStatusIcon()}
							<small part="caption-text" html>${this.caption}</small>
						</ly-flex>
				  `:_}
		`}setRequiredIcon(){return this.required?y`<ly-icon part="required-icon">asterisk</ly-icon>`:y``}setStatusIcon(){switch(this.status){case"debug":return y`<ly-icon part="caption-icon">bug_report</ly-icon>`;case"error":return y`<ly-icon part="caption-icon">report</ly-icon>`;case"info":return y`<ly-icon part="caption-icon">info</ly-icon>`;case"success":return y`<ly-icon part="caption-icon">check</ly-icon>`;case"warning":return y`<ly-icon part="caption-icon">emergency_home</ly-icon>`;default:return y``}}};H.styles=R`
		:host(:is(ly-field)) {
			--bg: none;
			background-color: var(--bg);

			--clr: inherit;
			color: var(--clr);

			--gap: var(--scale-3xs);
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

		:host(:is(ly-field)) {
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

		:host(:is(ly-field))::part(label) {
			align-items: center;
			display: flex;
			flex-direction: row;
			font-size: var(--scale-md);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(required-icon) {
			color: var(--clr-error);
			font-size: var(--scale-xs);
			margin: auto 0;
		}

		:host(:is(ly-field))::part(caption) {
			align-items: center;
			color: var(--clr-subtext);
			gap: var(--scale-3xs);
		}

		:host(:is(ly-field))::part(caption-text) {
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
	`,q([A({type:String})],H.prototype,"label",2),q([A({type:String})],H.prototype,"caption",2),q([A({type:String})],H.prototype,"name",2),q([A({type:String})],H.prototype,"ref",2),q([A({type:Boolean,reflect:!0})],H.prototype,"required",2),q([A({type:"debug"})],H.prototype,"status",2),q([A({type:String})],H.prototype,"type",2),H=q([O("ly-field")],H);var pn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,fn=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?un(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&pn(e,i,o),o};let zt=class extends ${render(){return y` <slot></slot> `}};zt.styles=R`
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
	`,zt=fn([O("ly-fragment")],zt);var mn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,ze=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?gn(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&mn(e,i,o),o};let Pt=class extends ${constructor(){super(...arguments),this.solid=!1}render(){return y` <slot></slot> `}};Pt.styles=R`
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
	`,ze([A({type:Boolean,reflect:!0})],Pt.prototype,"solid",2),Pt=ze([O("ly-icon")],Pt);var yn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,Ie=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?vn(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&yn(e,i,o),o};let Rt=class extends ${constructor(){super(...arguments),this.stacked="over"}render(){return y` <slot></slot> `}};Rt.styles=R`
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
	`,Ie([A({type:"over",reflect:!0})],Rt.prototype,"stacked",2),Rt=Ie([O("ly-layer")],Rt);var xn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,xt=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?wn(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&xn(e,i,o),o};let Tt=class extends ${constructor(){super(...arguments),this.axis="x"}render(){return y` <slot></slot> `}};Tt.styles=R`
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
	`,xt([A({type:"col",reflect:!0})],Tt.prototype,"axis",2),Tt=xt([O("ly-flex")],Tt);let Lt=class extends ${constructor(){super(...arguments),this.tmpl=""}render(){return y` <slot></slot> `}};Lt.styles=R`
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
	`,xt([A({type:String,reflect:!0})],Lt.prototype,"tmpl",2),Lt=xt([O("ly-grid")],Lt);let It=class extends ${render(){return y` <slot></slot> `}};It.styles=R`
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	`,It=xt([O("ly-group")],It);var bn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,wt=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?_n(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&bn(e,i,o),o};const bt=R`
	:host(:is(ly-list)) {
		/* local vars */
		--bg: var(--clr-primary);
		--clr: var(--clr-text);
		--tmpl: 1;
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
`;let Vt=class extends ${async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return y` <slot></slot> `}};Vt.styles=bt,Vt=wt([O("ly-list")],Vt);let qt=class extends ${render(){return y` <slot></slot> `}};qt.styles=bt,qt=wt([O("ly-list-header")],qt);let Xt=class extends ${render(){return y` <slot></slot> `}};Xt.styles=bt,Xt=wt([O("ly-list-row")],Xt);let Yt=class extends ${render(){return y` <slot></slot> `}};Yt.styles=bt,Yt=wt([O("ly-list-footer")],Yt);let Gt=class extends ${render(){return y` <slot></slot> `}};Gt.styles=bt,Gt=wt([O("ly-list-cell")],Gt);var $n=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Ve=(t,e,i,n)=>{for(var r,o=n>1?void 0:n?An(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(n?r(e,i,o):r(o))||o);return n&&o&&$n(e,i,o),o};let kt=class extends ${constructor(){super(...arguments),this.axis="x"}render(){return y` <slot></slot> `}};kt.styles=R`
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
	`,Ve([A({type:"col",reflect:!0})],kt.prototype,"axis",2),kt=Ve([O("ly-slider")],kt);export{Ot as App,N as Check,V as Dropdown,H as Field,Tt as Flex,zt as Fragment,Lt as Grid,It as Group,Pt as Icon,Rt as Layer,Vt as List,Gt as ListCell,Yt as ListFooter,qt as ListHeader,Xt as ListRow,kt as Slider};