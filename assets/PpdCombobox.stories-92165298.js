import{V as M,h as B,d as S,t as $,c as I,r as f}from"./vue.esm-0af12569.js";import{u as A,b as F,c as N,_ as c}from"./search-93e7c2ba.js";import{_ as O}from"./alert-f3bcaec1.js";import{_ as R,a as E}from"./cross-691ba93b.js";import{_ as L}from"./vuetify-5d82665c.js";import{P as W}from"./PpdCheckbox-e4a5d279.js";import"./PpdButton-78ee3eef.js";import"./PpdRadioGroup-013c941f.js";import{I as j}from"./default-0504ba50.js";import{V as u}from"./VAutocomplete-d275a0bb.js";import{V as r,_ as H,a as y,b as K,c as z}from"./VSelect-7c81b982.js";import{k as p,n as P}from"./_plugin-vue2_normalizer-e841c916.js";import{_ as U}from"./VContainer-b9df2d1a.js";import"./index-ea3e75e7.js";import"./console-8d423e90.js";import"./index-dcf24bb7.js";import"./index-a27f60fb.js";import"./index-f4f9fa9d.js";import"./index-b351647e.js";import"./index-6e209754.js";import"./VProgressCircular-13b268cf.js";import"./index-a595f82f.js";import"./index-31d47713.js";import"./index-04f03c9c.js";const Y=u.extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return r.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return this.isFocused?this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData:!1},searchIsDirty(){return this.internalSearch!=null}},methods:{onInternalSearchChanged(s){if(s&&this.multiple&&this.delimiters.length){const n=this.delimiters.find(a=>s.endsWith(a));n!=null&&(this.internalSearch=s.slice(0,s.length-n.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const s=u.options.methods.genInput.call(this);return delete s.data.attrs.name,s.data.on.paste=this.onPaste,s},genChipSelection(s,n){const a=r.options.methods.genChipSelection.call(this,s,n);return this.multiple&&(a.componentOptions.listeners={...a.componentOptions.listeners,dblclick:()=>{this.editingIndex=n,this.internalSearch=this.getText(s),this.selectedIndex=-1}}),a},onChipInput(s){r.options.methods.onChipInput.call(this,s),this.editingIndex=-1},onEnterDown(s){s.preventDefault(),!(this.getMenuIndex()>-1)&&this.$nextTick(this.updateSelf)},onKeyDown(s){const n=s.keyCode;(s.ctrlKey||![p.home,p.end].includes(n))&&r.options.methods.onKeyDown.call(this,s),this.multiple&&n===p.left&&this.$refs.input.selectionStart===0?this.updateSelf():n===p.enter&&this.onEnterDown(s),this.changeSelectedIndex(n)},onTabDown(s){if(this.multiple&&this.internalSearch&&this.getMenuIndex()===-1)return s.preventDefault(),s.stopPropagation(),this.updateTags();u.options.methods.onTabDown.call(this,s)},selectItem(s){this.editingIndex>-1?this.updateEditing():(u.options.methods.selectItem.call(this,s),this.internalSearch&&this.multiple&&this.getText(s).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){this.internalValue==null||this.internalValue===""?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(s){r.options.methods.setValue.call(this,s===void 0?this.internalSearch:s)},updateEditing(){const s=this.internalValue.slice(),n=this.selectedItems.findIndex(a=>this.getText(a)===this.internalSearch);if(n>-1){const a=typeof s[n]=="object"?Object.assign({},s[n]):s[n];s.splice(n,1),s.push(a)}else s[this.editingIndex]=this.internalSearch;this.setValue(s),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(!!this.$scopedSlots.selection||this.hasChips)&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const s=this.getMenuIndex();if(s<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const n=this.selectedItems.findIndex(e=>this.internalSearch===this.getText(e)),a=n>-1&&typeof this.selectedItems[n]=="object"?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){const e=this.internalValue.slice();e.splice(n,1),this.setValue(e)}if(s>-1)return this.internalSearch=null;this.selectItem(a),this.internalSearch=null},onPaste(s){var n;if(this.$emit("paste",s),!this.multiple||this.searchIsDirty)return;const a=(n=s.clipboardData)===null||n===void 0?void 0:n.getData("text/vnd.vuetify.autocomplete.item+plain");a&&this.findExistingIndex(a)===-1&&(s.preventDefault(),r.options.methods.selectItem.call(this,a))},clearableCallback(){this.editingIndex=-1,u.options.methods.clearableCallback.call(this)}}});function G(s,n){return M.component("StoryTemplate",{props:Object.keys(n),render(){const a=this.$props;return B(s,{props:a})}})}const J=S({__name:"PpdCombobox",props:{dense:{type:Boolean,default:!1},disabled:{type:Boolean},error:{type:Boolean},errorCount:null,errorMessages:null,hideDetails:{type:[Boolean,String]},hint:null,label:null,messages:null,persistentHint:{type:Boolean},readonly:{type:Boolean},rules:null,success:{type:Boolean},successMessages:null,validateOnBlur:{type:Boolean},warning:{type:Boolean},warningMessage:null,autofocus:{type:Boolean},autoSelectFirst:{type:Boolean},cacheItems:{type:Boolean},chips:{type:Boolean},clearable:{type:Boolean},counter:{type:[Boolean,Number,String]},counterValue:null,delimiters:null,deletableChips:{type:Boolean},disableLookup:{type:Boolean},eager:{type:Boolean},filter:null,hideComboboxed:{type:Boolean},hideNoData:{type:Boolean},hideSelected:{type:Boolean},itemColor:null,itemDisabled:null,itemText:null,itemValue:null,items:null,loading:{type:[Boolean,Number,String]},menuProps:{default:()=>({offsetY:!0})},multiple:{type:Boolean},noDataText:null,noFilter:{type:Boolean},openOnClear:{type:Boolean},persistentPlaceholder:{type:Boolean},placeholder:null,prefix:null,returnObject:{type:Boolean},searchInput:null,smallChips:{type:Boolean},suffix:null,value:null,valueComparator:null},setup(s){const n=s,a=m=>console.log(m),{isMobile:e}=A($(n)),{input:t,hasSuccess:o,hasError:l,hasWarning:i,classes:T,computedMessage:w}=F(n),V=I(()=>{var m;return(m=t.value)==null?void 0:m.internalSearch});return{__sfc:!0,props:n,log:a,isMobile:e,input:t,hasSuccess:o,hasError:l,hasWarning:i,classes:T,computedMessage:w,internalSearch:V,VCombobox:Y,PpdCheckbox:W,IPpdChevronDown:j}}});var Q=function(){var n=this,a=n._self._c,e=n._self._setupProxy;return a("div",{staticClass:"ppd-input"},[a(e.VCombobox,n._b({ref:"input",class:e.classes,attrs:{filled:"",rounded:"",clearable:!1,"loader-height":"0",hint:e.computedMessage,dense:e.isMobile,"item-color":"info"},on:{blur:function(t){return n.$emit("blur",t)},change:function(t){return n.$emit("change",t)},click:function(t){return n.$emit("click",t)},focus:function(t){return n.$emit("focus",t)},input:function(t){return n.$emit("input",t)},keydown:function(t){return n.$emit("keydown",t)},mousedown:function(t){return n.$emit("mousedown",t)},mouseup:function(t){return n.$emit("mouseup",t)},"update:error":function(t){return n.$emit("update:error",t)},"update:list-index":function(t){return n.$emit("update:list-index",t)},"update:search-input":function(t){return n.$emit("update:search-input",t)}},scopedSlots:n._u([n._l(n.$slots,function(t,o){return{key:o,fn:function(l){return[n._t(o,null,null,l)]}}}),n._l(n.$slots,function(t,o){return{key:o,fn:function(){return[n._t(o)]},proxy:!0}}),{key:"item",fn:function({item:t,on:o,attrs:l}){return[a(H,n._g(n._b({},"VListItem",l,!1),o),[n.multiple?a(y,[a(e.PpdCheckbox,{attrs:{value:l.inputValue,disabled:l.disabled,dense:e.isMobile}})],1):n._e(),a(K,[a(z,{on:{click:function(i){return e.log({item:t,on:o,attrs:l})}}},[n._v(" "+n._s(t)+" "),a("span",{staticClass:"gray--text"},[n._v(n._s(e.internalSearch))])])],1),n.multiple?n._e():a(y,[a(L,{directives:[{name:"show",rawName:"v-show",value:l.inputValue,expression:"attrs.inputValue"}]})],1)],1)]}},{key:"append",fn:function(){return[n.clearable&&n.value?a(R,{staticClass:"c-pointer",nativeOn:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.$emit("click:clear")},mousedown:function(t){t.stopPropagation(),t.preventDefault()},mouseup:function(t){t.stopPropagation(),t.preventDefault()}}}):n._e(),a(e.IPpdChevronDown,{staticClass:"c-pointer",nativeOn:{click:function(t){return t.stopPropagation(),t.preventDefault(),n.$emit("click:clear")},mousedown:function(t){t.stopPropagation(),t.preventDefault()},mouseup:function(t){t.stopPropagation(),t.preventDefault()}}})]},proxy:!0},{key:"message",fn:function({message:t}){return[n.loading?[a("span",{staticClass:"d-flex align-center gray--text text--darken-1"},[a(E,{staticClass:"mr-1"}),n._v(" "+n._s(t)+" ")],1)]:e.hasWarning?[a("span",{staticClass:"d-flex align-center warning--text"},[a(O,{staticClass:"mr-1 inherit--text"}),n._v(" "+n._s(t)+" ")],1)]:e.hasError?[a("span",{staticClass:"d-flex align-center error--text"},[a(N,{staticClass:"mr-1 inherit--text"}),n._v(" "+n._s(t)+" ")],1)]:e.hasSuccess?[a("span",{staticClass:"d-flex align-center success--text"},[n._v(" "+n._s(t)+" ")])]:[n._v(" "+n._s(t)+" ")]]}}],null,!0)},"VCombobox",{...n.$attrs,...n.$props,...e.props},!1))],1)},X=[],q=P(J,Q,X,!1,null,"db04b747",null,null);const b=q.exports;q.exports.__docgenInfo={exportName:"default",displayName:"PpdCombobox",description:"",tags:{},props:[{name:"dense",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"errorCount",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"errorMessages",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"hideDetails",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"}]}},{name:"hint",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"messages",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"persistentHint",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"rules",required:!1,type:{name:"any"}},{name:"success",required:!1,type:{name:"boolean"}},{name:"successMessages",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"validateOnBlur",required:!1,type:{name:"boolean"}},{name:"warning",required:!1,type:{name:"boolean"}},{name:"warningMessage",required:!1,type:{name:"string"}},{name:"autofocus",required:!1,type:{name:"boolean"}},{name:"autoSelectFirst",required:!1,type:{name:"boolean"}},{name:"cacheItems",required:!1,type:{name:"boolean"}},{name:"chips",required:!1,type:{name:"boolean"}},{name:"clearable",required:!1,type:{name:"boolean"}},{name:"counter",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"},{name:"string"}]}},{name:"counterValue",required:!1,type:{name:"PropType",elements:[{name:"TSFunctionType"}]}},{name:"delimiters",required:!1,type:{name:"Array",elements:[{name:"any"}]}},{name:"deletableChips",required:!1,type:{name:"boolean"}},{name:"disableLookup",required:!1,type:{name:"boolean"}},{name:"eager",required:!1,type:{name:"boolean"}},{name:"filter",required:!1,type:{name:"TSFunctionType"}},{name:"hideComboboxed",required:!1,type:{name:"boolean"}},{name:"hideNoData",required:!1,type:{name:"boolean"}},{name:"hideSelected",required:!1,type:{name:"boolean"}},{name:"itemColor",required:!1,type:{name:"string"}},{name:"itemDisabled",required:!1,type:{name:"union",elements:[{name:"string"},{name:"TSParenthesizedType"},{name:"Array",elements:[{name:"any"}]}]}},{name:"itemText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"TSParenthesizedType"},{name:"Array",elements:[{name:"any"}]}]}},{name:"itemValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"TSParenthesizedType"},{name:"Array",elements:[{name:"any"}]}]}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"union",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"string"}]}]}},{name:"loading",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"},{name:"string"}]}},{name:"menuProps",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"Array",elements:[{name:"any"}]}]},defaultValue:{func:!1,value:`() => ({\r
    offsetY: true,\r
})`}},{name:"multiple",required:!1,type:{name:"boolean"}},{name:"noDataText",required:!1,type:{name:"string"}},{name:"noFilter",required:!1,type:{name:"boolean"}},{name:"openOnClear",required:!1,type:{name:"boolean"}},{name:"persistentPlaceholder",required:!1,type:{name:"boolean"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"prefix",required:!1,type:{name:"string"}},{name:"returnObject",required:!1,type:{name:"boolean"}},{name:"searchInput",required:!1,type:{name:"string"}},{name:"smallChips",required:!1,type:{name:"boolean"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"any"}]}]}},{name:"valueComparator",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"blur"},{name:"change"},{name:"click"},{name:"focus"},{name:"input"},{name:"keydown"},{name:"mousedown"},{name:"mouseup"},{name:"update:error"},{name:"update:list-index"},{name:"update:search-input"},{name:"click:clear"}],slots:[{name:"scopedSlotName",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"slotName",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/Code/pampadu.frontend.ui-kit/src/stories/Form/PpdCombobox/PpdCombobox.vue"]};const Z=S({__name:"ComboboxTypes.story",setup(s){const n=f("Florinda"),a=f([]),e=[{text:"Florida",disabled:!0,value:"Florida"},"Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];function t(){n.value=""}const o={required:i=>!!i||"Required.",counter:i=>i.length<=20||"Max 20 characters",email:i=>"Invalid e-mail."},l=I(()=>[o.required,o.counter,o.email]);return{__sfc:!0,e1:n,multiple:a,states:e,clear:t,rules:o,computedRules:l,PpdCombobox:b}}});var ee=function(){var n=this,a=n._self._c,e=n._self._setupProxy;return a(U,{staticStyle:{"max-width":"900px"}},[a("div",{staticClass:"mb-2"},[n._v(" Value: "+n._s(e.e1)+" ")]),a(e.PpdCombobox,{attrs:{items:e.states,label:"Default"},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Dense (mobile)",dense:""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Multiple",multiple:""},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:"multiple"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Multiple dense (mobile)",multiple:"",dense:""},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:"multiple"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Autofocus",autofocus:""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Placeholder",placeholder:"placeholder content"},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Persistent Placeholder","persistent-placeholder":"",placeholder:"placeholder content"},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Hint (on focus)",hint:"hint"},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Hint",hint:"Persistent hint","persistent-hint":""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"With counter",counter:10},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Disabled",disabled:""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Readonly",readonly:""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Loading",loading:"","persistent-hint":"",hint:"Message"},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Rules",rules:e.computedRules},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Success",success:"",clearable:""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Success with message",success:"",clearable:"",hint:"Message","persistent-hint":""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Warning",warning:"",clearable:""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Warning with message",warning:"",clearable:"","warning-message":"Warning Message",hint:"Hint","persistent-hint":""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Error",error:"",clearable:""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Error with message",error:"",clearable:"",hint:"Message","persistent-hint":""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Clearable",clearable:""},on:{"click:clear":e.clear},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Icon Prepend"},scopedSlots:n._u([{key:"prepend-inner",fn:function(){return[a(c)]},proxy:!0}]),model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Icon Prepend Dense",dense:""},scopedSlots:n._u([{key:"prepend-inner",fn:function(){return[a(c)]},proxy:!0}]),model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Icon Append"},scopedSlots:n._u([{key:"append",fn:function(){return[a(c)]},proxy:!0}]),model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}}),a(e.PpdCombobox,{attrs:{items:e.states,label:"Icon Append Dense",dense:""},scopedSlots:n._u([{key:"append",fn:function(){return[a(c)]},proxy:!0}]),model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}})],1)},te=[],D=P(Z,ee,te,!1,null,null,null,null);const ne=D.exports;D.exports.__docgenInfo={exportName:"default",displayName:"ComboboxTypes.story",description:"",tags:{},sourceFiles:["D:/Code/pampadu.frontend.ui-kit/src/stories/Form/PpdCombobox/stories/ComboboxTypes.story.vue"]};const qe={title:"Pampadu UI-Kit/Form/Combobox",component:b,tags:["autodocs"],argTypes:{},render:(s,n)=>G(b,n.argTypes)},d={},h={render:()=>ne};var g,x,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var C,v,k;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ComboboxTypesStory
}`,...(k=(v=h.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const De=["Properties","Types"];export{d as Properties,h as Types,De as __namedExportsOrder,qe as default};
