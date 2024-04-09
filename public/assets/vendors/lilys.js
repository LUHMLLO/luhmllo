/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W=globalThis,he=W.ShadowRoot&&(void 0===W.ShadyCSS||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),ye=new WeakMap;let we=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(he&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=ye.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ye.set(t,e))}return e}toString(){return this.cssText}};const Te=e=>new we("string"==typeof e?e:e+"",void 0,de),$=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new we(s,e,de)},He=(e,t)=>{if(he)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),i=W.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=s.cssText,e.appendChild(t)}},fe=he?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Te(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Re,defineProperty:Me,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:ze,getOwnPropertySymbols:Be,getPrototypeOf:Ie}=Object,m=globalThis,ve=m.trustedTypes,We=ve?ve.emptyScript:"",Q=m.reactiveElementPolyfillSupport,D=(e,t)=>e,F={toAttribute(e,t){switch(t){case Boolean:e=e?We:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},pe=(e,t)=>!Re(e,t),$e={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:pe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$e){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Me(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==i?void 0:i.call(this)},set(t){const o=null==i?void 0:i.call(this);r.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$e}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const e=Ie(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,t=[...ze(e),...Be(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(fe(e))}else void 0!==e&&t.push(fe(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return He(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:F).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(s=e.converter)?void 0:s.fromAttribute)?e.converter:F;this._$Em=r,this[r]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??pe)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(s)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[D("elementProperties")]=new Map,P[D("finalized")]=new Map,null==Q||Q({ReactiveElement:P}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j=globalThis,V=j.trustedTypes,be=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ee="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Pe="?"+_,Fe=`<${Pe}>`,x=document,L=()=>x.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Se=Array.isArray,Ve=e=>Se(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),X="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,_e=/>/g,C=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),me=/'/g,Ce=/"/g,ke=/^(?:script|style|textarea|title)$/i,qe=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),d=qe(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Ae=new WeakMap,A=x.createTreeWalker(x,129);function Oe(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==be?be.createHTML(t):t}const Ge=(e,t)=>{const s=e.length-1,i=[];let r,o=2===t?"<svg>":"",n=U;for(let t=0;t<s;t++){const s=e[t];let l,c,a=-1,h=0;for(;h<s.length&&(n.lastIndex=h,c=n.exec(s),null!==c);)h=n.lastIndex,n===U?"!--"===c[1]?n=ge:void 0!==c[1]?n=_e:void 0!==c[2]?(ke.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=C):void 0!==c[3]&&(n=C):n===C?">"===c[0]?(n=r??U,a=-1):void 0===c[1]?a=-2:(a=n.lastIndex-c[2].length,l=c[1],n=void 0===c[3]?C:'"'===c[3]?Ce:me):n===Ce||n===me?n=C:n===ge||n===_e?n=U:(n=C,r=void 0);const d=n===C&&e[t+1].startsWith("/>")?" ":"";o+=n===U?s+Fe:a>=0?(i.push(l),s.slice(0,a)+Ee+s.slice(a)+_+d):s+_+(-2===a?t:d)}return[Oe(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),i]};class H{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const n=e.length-1,l=this.parts,[c,a]=Ge(e,t);if(this.el=H.createElement(c,s),A.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=A.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(Ee)){const t=a[o++],s=i.getAttribute(e).split(_),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?Ke:"?"===n[1]?Ze:"@"===n[1]?Qe:K}),i.removeAttribute(e)}else e.startsWith(_)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(ke.test(i.tagName)){const e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=V?V.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],L()),A.nextNode(),l.push({type:2,index:++r});i.append(e[t],L())}}}else if(8===i.nodeType)if(i.data===Pe)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(_,e+1));)l.push({type:7,index:r}),e+=_.length-1}r++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function k(e,t,s=e,i){var r,o;if(t===S)return t;let n=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const l=T(t)?void 0:t._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null==(o=null==n?void 0:n._$AO)||o.call(n,!1),void 0===l?n=void 0:(n=new l(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=n:s._$Cl=n),void 0!==n&&(t=k(e,n._$AS(e,t.values),n,i)),t}class Je{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((null==e?void 0:e.creationScope)??x).importNode(t,!0);A.currentNode=i;let r=A.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new M(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new Xe(r,this,e)),this._$AV.push(t),l=s[++n]}o!==(null==l?void 0:l.index)&&(r=A.nextNode(),o++)}return A.currentNode=x,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),T(e)?e===h||null==e||""===e?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Ve(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=H.createElement(Oe(i.h,i.h[0]),this.options)),i);if((null==(t=this._$AH)?void 0:t._$AD)===r)this._$AH.p(s);else{const e=new Je(r,this),t=e.u(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=Ae.get(e.strings);return void 0===t&&Ae.set(e.strings,t=new H(e)),t}k(e){Se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new M(this.S(L()),this.S(L()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(void 0===r)e=k(this,e,t,0),o=!T(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const i=e;let n,l;for(e=r[0],n=0;n<r.length-1;n++)l=k(this,i[s+n],t,n),l===S&&(l=this._$AH[n]),o||(o=!T(l)||l!==this._$AH[n]),l===h?e=h:e!==h&&(e+=(l??"")+r[n+1]),this._$AH[n]=l}o&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ke extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Ze extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Qe extends K{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??h)===S)return;const s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Xe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const Y=j.litHtmlPolyfillSupport;null==Y||Y(H,M),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.1.2");const Ye=(e,t,s)=>{const i=(null==s?void 0:s.renderBefore)??t;let r=i._$litPart$;if(void 0===r){const e=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new M(t.insertBefore(L(),e),e,void 0,s??{})}return r._$AI(e),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class p extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return S}}var xe;p._$litElement$=!0,p.finalized=!0,null==(xe=globalThis.litElementHydrateSupport)||xe.call(globalThis,{LitElement:p});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:p}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
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
 */,et={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:pe},tt=(e=et,t,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const r=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];t.call(this,s),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function v(e){return(t,s)=>"object"==typeof s?tt(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}const st=$`
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
`;var rt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Ue=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?it(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&rt(t,s,o),o};let q=class extends p{constructor(){super(...arguments),this.layout="default"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};q.styles=st,Ue([v({type:String,reflect:!0})],q.prototype,"layout",2),q=Ue([f("ly-app")],q);const ot=$`
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
`;var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ue=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?lt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&nt(t,s,o),o};let O=class extends p{constructor(){super(...arguments),this.checked=!1,this.label=""}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-row part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_box":"check_box_outline_blank"}
				</ly-icon>
				${this.label?d`<label part="label">${this.label}</label>`:h}
			</ly-row>
			${this.checked?d`<slot></slot>`:h}
		`}};O.properties={delegatesFocus:{type:Boolean,reflect:!0}},O.styles=ot,ue([v({type:Boolean,reflect:!0})],O.prototype,"checked",2),ue([v({type:String})],O.prototype,"label",2),O=ue([f("ly-checkbox")],O);const ct=$`
	@layer web-components {
		:host(:is(ly-col)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var at=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,dt=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?ht(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&at(t,s,o),o};let te=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};te.styles=ct,te=dt([f("ly-col")],te);const pt=$`
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
`;var ut=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,N=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?yt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&ut(t,s,o),o};let w=class extends p{constructor(){super(...arguments),this.label="",this.caption="",this.name="",this.type="text"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d`
			${this.label?d`<label for=${this.name}>${this.label}</label>`:h}
			<slot></slot>
			${this.caption?d`<small>${this.caption}</small>`:h}
		`}};w.styles=pt,N([v({type:String,reflect:!0})],w.prototype,"label",2),N([v({type:String,reflect:!0})],w.prototype,"caption",2),N([v({type:String,reflect:!0})],w.prototype,"name",2),N([v({type:String,reflect:!0})],w.prototype,"type",2),w=N([f("ly-field")],w);const ft=$`
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
`;var vt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,bt=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?$t(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&vt(t,s,o),o};let se=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};se.styles=ft,se=bt([f("ly-grid")],se);const gt=$`
	@layer web-components {
		:host(:is(ly-group)) {
			/* base styles */
			display: flex;
			flex-direction: column;
			height: max-content;
		}
	}
`;var _t=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,Ct=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?mt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&_t(t,s,o),o};let re=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};re.styles=gt,re=Ct([f("ly-group")],re);const At=$`
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
`;var xt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,De=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?wt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&xt(t,s,o),o};let G=class extends p{constructor(){super(...arguments),this.solid=!1}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};G.styles=At,De([v({type:Boolean,reflect:!0})],G.prototype,"solid",2),G=De([f("ly-icon")],G);const Et=$`
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
`;var Pt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,je=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?St(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Pt(t,s,o),o};let J=class extends p{constructor(){super(...arguments),this.stacked="over"}async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};J.styles=Et,je([v({type:String,reflect:!0})],J.prototype,"stacked",2),J=je([f("ly-layer")],J);const z=$`
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
`;var kt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,B=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?Ot(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&kt(t,s,o),o};let ie=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ie.styles=z,ie=B([f("ly-list-header")],ie);let oe=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};oe.styles=z,oe=B([f("ly-list-row")],oe);let ne=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ne.styles=z,ne=B([f("ly-list-footer")],ne);let le=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};le.styles=z,le=B([f("ly-list-cell")],le);let ce=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ce.styles=z,ce=B([f("ly-list")],ce);const Ut=$`
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
`;var Dt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Z=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?jt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Dt(t,s,o),o};let E=class extends p{constructor(){super(...arguments),this.checked=!1,this.group="",this.label=""}toggleChecked(){if(this.checked)this.checked=!this.checked;else{const e=document.querySelectorAll(`ly-radio[group="${this.group}"]`);for(const t of[...e])t.checked=!1,t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:!1}}));this.checked=!0}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-row part="row">
				<ly-icon ?solid="${this.checked}">
					${this.checked?"check_circle":"radio_button_unchecked"}
				</ly-icon>
				${this.label?d`<label part="label">${this.label}</label>`:h}
			</ly-row>
			${this.checked?d`<slot></slot>`:h}
		`}};E.properties={delegatesFocus:{type:Boolean,reflect:!0}},E.styles=Ut,Z([v({type:Boolean,reflect:!0})],E.prototype,"checked",2),Z([v({type:String})],E.prototype,"group",2),Z([v({type:String})],E.prototype,"label",2),E=Z([f("ly-radio")],E);const Lt=$`
	@layer web-components {
		:host(:is(ly-row)) {
			/* base styles */
			display: flex;
			flex-direction: row;
			height: max-content;
		}
	}
`;var Tt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Rt=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?Ht(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Tt(t,s,o),o};let ae=class extends p{async connectedCallback(){super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback()}render(){return d` <slot></slot> `}};ae.styles=Lt,ae=Rt([f("ly-row")],ae);const Mt=$`
	@layer web-components {
		:host(:is(ly-switch)) {
			/* base styles */
			cursor: pointer;
			display: flex;
			height: max-content;
		}
	}
`;var Nt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Le=(e,t,s,i)=>{for(var r,o=i>1?void 0:i?zt(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(o=(i?r(t,s,o):r(o))||o);return i&&o&&Nt(t,s,o),o};let R=class extends p{constructor(){super(...arguments),this.checked=!1}toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{checked:this.checked}}))}async connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.addEventListener("focus",(()=>this.focus())),this.addEventListener("click",(()=>this.toggleChecked()))}async disconnectedCallback(){super.disconnectedCallback(),this.removeAttribute("tabindex"),this.removeEventListener("focus",(()=>this.focus())),this.removeEventListener("click",(()=>this.toggleChecked()))}render(){return d`
			<ly-icon ?solid="${this.checked}">
				${this.checked?"toggle_on":"toggle_off"}
			</ly-icon>
		`}};R.properties={delegatesFocus:{type:Boolean,reflect:!0}},R.styles=Mt,Le([v({type:Boolean,reflect:!0})],R.prototype,"checked",2),R=Le([f("ly-switch")],R);export{q as App,O as Checkbox,te as Col,w as Field,se as Grid,re as Group,G as Icon,J as Layer,ce as List,le as ListCell,ne as ListFooter,ie as ListHeader,oe as ListRow,E as Radio,ae as Row,R as Switch};