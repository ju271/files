(function(){var __sections__={};(function(){for(var i=0,s=document.getElementById("sections-script").getAttribute("data-sections").split(",");i<s.length;i++)__sections__[s[i]]=!0})(),function(){if(__sections__.footer)try{class LocalizationForm extends HTMLElement{constructor(){super(),this.elements={input:this.querySelector('input[name="locale_code"], input[name="country_code"]'),button:this.querySelector("button"),panel:this.querySelector(".disclosure__list-wrapper")},this.elements.button.addEventListener("click",this.openSelector.bind(this)),this.elements.button.addEventListener("focusout",this.closeSelector.bind(this)),this.addEventListener("keyup",this.onContainerKeyUp.bind(this)),this.querySelectorAll("a").forEach(item=>item.addEventListener("click",this.onItemClick.bind(this)))}hidePanel(){this.elements.button.setAttribute("aria-expanded","false"),this.elements.panel.setAttribute("hidden",!0)}onContainerKeyUp(event){event.code.toUpperCase()==="ESCAPE"&&(this.hidePanel(),this.elements.button.focus())}onItemClick(event){event.preventDefault();const form=this.querySelector("form");this.elements.input.value=event.currentTarget.dataset.value,form&&form.submit()}openSelector(){this.elements.button.focus(),this.elements.panel.toggleAttribute("hidden"),this.elements.button.setAttribute("aria-expanded",(this.elements.button.getAttribute("aria-expanded")==="false").toString())}closeSelector(event){const shouldClose=event.relatedTarget&&event.relatedTarget.nodeName==="BUTTON";(event.relatedTarget===null||shouldClose)&&this.hidePanel()}}customElements.define("localization-form",LocalizationForm)}catch(e){console.error(e)}}(),function(){if(__sections__.header)try{class StickyHeader extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector(".section-header"),this.headerIsAlwaysSticky=this.getAttribute("data-sticky-type")==="always"||this.getAttribute("data-sticky-type")==="reduce-logo-size",this.headerBounds={},this.setHeaderHeight(),window.matchMedia("(max-width: 990px)").addEventListener("change",this.setHeaderHeight.bind(this)),this.headerIsAlwaysSticky&&this.header.classList.add("shopify-section-header-sticky"),this.currentScrollTop=0,this.preventReveal=!1,this.predictiveSearch=this.querySelector("predictive-search"),this.onScrollHandler=this.onScroll.bind(this),this.hideHeaderOnScrollUp=()=>this.preventReveal=!0,this.addEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.addEventListener("scroll",this.onScrollHandler,!1),this.createObserver()}setHeaderHeight(){document.documentElement.style.setProperty("--header-height",`${this.header.offsetHeight}px`)}disconnectedCallback(){this.removeEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.removeEventListener("scroll",this.onScrollHandler)}createObserver(){new IntersectionObserver((entries,observer2)=>{this.headerBounds=entries[0].intersectionRect,observer2.disconnect()}).observe(this.header)}onScroll(){const scrollTop=window.pageYOffset||document.documentElement.scrollTop;if(!(this.predictiveSearch&&this.predictiveSearch.isOpen)){if(scrollTop>this.currentScrollTop&&scrollTop>this.headerBounds.bottom){if(this.header.classList.add("scrolled-past-header"),this.preventHide)return;requestAnimationFrame(this.hide.bind(this))}else scrollTop<this.currentScrollTop&&scrollTop>this.headerBounds.bottom?(this.header.classList.add("scrolled-past-header"),this.preventReveal?(window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(()=>{this.preventReveal=!1},66),requestAnimationFrame(this.hide.bind(this))):requestAnimationFrame(this.reveal.bind(this))):scrollTop<=this.headerBounds.top&&(this.header.classList.remove("scrolled-past-header"),requestAnimationFrame(this.reset.bind(this)));this.currentScrollTop=scrollTop}}hide(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-hidden","shopify-section-header-sticky"),this.closeMenuDisclosure(),this.closeSearchModal())}reveal(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-sticky","animate"),this.header.classList.remove("shopify-section-header-hidden"))}reset(){this.headerIsAlwaysSticky||this.header.classList.remove("shopify-section-header-hidden","shopify-section-header-sticky","animate")}closeMenuDisclosure(){this.disclosures=this.disclosures||this.header.querySelectorAll("header-menu"),this.disclosures.forEach(disclosure=>disclosure.close())}closeSearchModal(){this.searchModal=this.searchModal||this.header.querySelector("details-modal"),this.searchModal.close(!1)}}customElements.define("sticky-header",StickyHeader);class StaticHeader extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector(".section-header"),this.setHeaderHeight(),window.matchMedia("(max-width: 990px)").addEventListener("change",this.setHeaderHeight.bind(this))}setHeaderHeight(){document.documentElement.style.setProperty("--header-height",`${this.header.offsetHeight}px`)}}customElements.define("static-header",StaticHeader)}catch(e){console.error(e)}}()})();
//# sourceMappingURL=/cdn/shop/t/2/compiled_assets/scripts.js.map?202=
