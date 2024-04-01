/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=globalThis,X=N.ShadowRoot&&(void 0===N.ShadyCSS||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),te=new WeakMap;let pe=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=te.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&te.set(e,t))}return t}toString(){return this.cssText}};const ve=t=>new pe("string"==typeof t?t:t+"",void 0,Y),w=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new pe(s,t,Y)},ge=(t,e)=>{if(X)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=N.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},se=X?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ve(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:be,defineProperty:Ae,getOwnPropertyDescriptor:we,getOwnPropertyNames:Ce,getOwnPropertySymbols:Ee,getPrototypeOf:Se}=Object,y=globalThis,ie=y.trustedTypes,xe=ie?ie.emptyScript:"",B=y.reactiveElementPolyfillSupport,O=(t,e)=>t,D={toAttribute(t,e){switch(e){case Boolean:t=t?xe:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ee=(t,e)=>!be(t,e),re={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=re){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Ae(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=we(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const n=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??re}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=Se(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,e=[...Ce(t),...Ee(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(se(t))}else void 0!==t&&e.push(se(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:D).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:D;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ee)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[O("elementProperties")]=new Map,E[O("finalized")]=new Map,null==B||B({ReactiveElement:E}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=globalThis,j=U.trustedTypes,ne=j?j.createPolicy("lit-html",{createHTML:t=>t}):void 0,ue="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,$e="?"+m,Pe=`<${$e}>`,b=document,T=()=>b.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,fe=Array.isArray,Oe=t=>fe(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),V="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,ae=/>/g,v=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,ce=/"/g,_e=/^(?:script|style|textarea|title)$/i,Ue=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),f=Ue(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),he=new WeakMap,g=b.createTreeWalker(b,129);function me(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ne?ne.createHTML(e):e}const Te=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=P;for(let e=0;e<s;e++){const s=t[e];let l,a,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,a=o.exec(s),null!==a);)h=o.lastIndex,o===P?"!--"===a[1]?o=oe:void 0!==a[1]?o=ae:void 0!==a[2]?(_e.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=v):void 0!==a[3]&&(o=v):o===v?">"===a[0]?(o=r??P,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?v:'"'===a[3]?ce:le):o===ce||o===le?o=v:o===oe||o===ae?o=P:(o=v,r=void 0);const d=o===v&&t[e+1].startsWith("/>")?" ":"";n+=o===P?s+Pe:c>=0?(i.push(l),s.slice(0,c)+ue+s.slice(c)+m+d):s+m+(-2===c?e:d)}return[me(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,c]=Te(t,e);if(this.el=H.createElement(a,s),g.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=g.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(ue)){const e=c[n++],s=i.getAttribute(t).split(m),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?He:"?"===o[1]?Re:"@"===o[1]?Me:z}),i.removeAttribute(t)}else t.startsWith(m)&&(l.push({type:6,index:r}),i.removeAttribute(t));if(_e.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=j?j.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),g.nextNode(),l.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===$e)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)l.push({type:7,index:r}),t+=m.length-1}r++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function x(t,e,s=t,i){var r,n;if(e===S)return e;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const l=k(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(e=x(t,o._$AS(t,e.values),o,i)),e}class ke{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??b).importNode(e,!0);g.currentNode=i;let r=g.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new R(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Ne(r,this,t)),this._$AV.push(e),l=s[++o]}n!==(null==l?void 0:l.index)&&(r=g.nextNode(),n++)}return g.currentNode=b,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),k(t)?t===h||null==t||""===t?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Oe(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=H.createElement(me(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new ke(r,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=he.get(t.strings);return void 0===e&&he.set(t.strings,e=new H(t)),e}k(t){fe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new R(this.S(T()),this.S(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=x(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=x(this,i[s+o],e,o),l===S&&(l=this._$AH[o]),n||(n=!k(l)||l!==this._$AH[o]),l===h?t=h:t!==h&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class He extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Re extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Me extends z{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??h)===S)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ne{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const q=U.litHtmlPolyfillSupport;null==q||q(H,R),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.1.2");const De=(t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new R(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=De(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return S}}var de;u._$litElement$=!0,u.finalized=!0,null==(de=globalThis.litElementHydrateSupport)||de.call(globalThis,{LitElement:u});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:u}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,je={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:ee},Le=(t=je,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function I(t){return(e,s)=>"object"==typeof s?Le(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ze=w`
	@layer web-components {
		:host {
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

		:host {
			background-color: var(--clr-background);
			color: var(--clr-text);
		}
	}
`;var Ie=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Be=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?We(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ie(e,s,n),n};let F=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};F.styles=ze,F=Be([C("ly-app")],F);const Ve=w`
	@layer web-components {
		:host {
			display: flex;
			flex-direction: column;
			gap: var(--scale-sm);
		}
	}
`;var qe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Fe=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Ge(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&qe(e,s,n),n};let J=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};J.styles=Ve,J=Fe([C("ly-col")],J);const Je=w`
	@layer web-components {
		:host {
			--gap: var(--scale-sm);
			--minWidth: clamp(6rem, 16vmin, 24rem);
			--maxWidth: 1fr;
			--repeat: auto-fill;
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
`;var Ke=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Ze(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ke(e,s,n),n};let K=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};K.styles=Je,K=Qe([C("ly-grid")],K);const Xe=w`
	@layer web-components {
		:host {
			display: flex;
			flex-direction: column;
			gap: var(--scale-sm);
		}
	}
`;var Ye=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?et(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ye(e,s,n),n};let Z=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};Z.styles=Xe,Z=tt([C("ly-group")],Z);const st=w`
	@layer web-components {
		:host {
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
`;var it=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,ye=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?rt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&it(e,s,n),n};let L=class extends u{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};L.styles=st,ye([I({type:Boolean,reflect:!0})],L.prototype,"solid",2),L=ye([C("ly-icon")],L);const nt=w`
	@layer web-components {
		:host {
			cursor: pointer;
			display: flex;
			flex-direction: column;
		}
	}
`;var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?at(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ot(e,s,n),n};let A=class extends u{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(!this.checked){const t=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const e of[...t])e.checked=!1,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return f`
			${this.label?f`<label>${this.label}</label>`:h}
			<ly-icon ?solid="${this.checked}">
				${this.checked?"check_circle":"radio_button_unchecked"}
			</ly-icon>
			${this.checked?f`<slot></slot>`:h}
		`}};A.properties={delegatesFocus:{type:Boolean,reflect:!0}},A.styles=nt,W([I({type:Boolean,reflect:!0})],A.prototype,"checked",2),W([I({type:String})],A.prototype,"group",2),W([I({type:String})],A.prototype,"label",2),A=W([C("ly-radio")],A);const lt=w`
	@layer web-components {
		:host {
			display: flex;
			flex-direction: row;
		}
	}
`;var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,dt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?ht(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ct(e,s,n),n};let Q=class extends u{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return f` <slot></slot> `}};Q.styles=lt,Q=dt([C("ly-row")],Q);export{F as App,J as Col,K as Grid,Z as Group,L as Icon,A as Radio,Q as Row};