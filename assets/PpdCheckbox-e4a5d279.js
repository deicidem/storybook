import{V as p,a as d,u as f,b as h,c as _}from"./search-93e7c2ba.js";import{_ as g}from"./alert-f3bcaec1.js";import{d as b,t as y,c as x}from"./vue.esm-0af12569.js";import{S as v}from"./index-6e209754.js";import{n as k}from"./_plugin-vue2_normalizer-e841c916.js";const C=v.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...p.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate(a){this.$nextTick(()=>this.inputIndeterminate=a)},inputIndeterminate(a){this.$emit("update:indeterminate",a)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:a,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(d,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),I=b({__name:"PpdCheckbox",props:{dense:{type:Boolean,default:!1},disabled:{type:Boolean},error:{type:Boolean},errorCount:null,errorMessages:null,hideDetails:{type:[Boolean,String]},hint:null,label:null,messages:null,persistentHint:{type:Boolean},readonly:{type:Boolean},rules:null,success:{type:Boolean},successMessages:null,validateOnBlur:{type:Boolean},warning:{type:Boolean},warningMessage:null,value:{type:Boolean},multiple:{type:Boolean},ripple:{type:Boolean,default:!0}},setup(a){const e=a,{isMobile:s}=f(y(e)),{input:t,hasSuccess:n,hasError:r,hasWarning:i,classes:u,computedMessage:c}=h(e),m=x(()=>{var o;return t.value&&((o=t.value)==null?void 0:o.isActive)});return{__sfc:!0,props:e,isMobile:s,input:t,hasSuccess:n,hasError:r,hasWarning:i,classes:u,computedMessage:c,isActive:m,VCheckbox:C}}});var q=function(){var e=this,s=e._self._c,t=e._self._setupProxy;return s("div",{staticClass:"ppd-input"},[s(t.VCheckbox,e._b({ref:"input",class:[{"v-checkbox--active":t.isActive},t.classes],attrs:{color:"info",hint:t.computedMessage,dense:t.isMobile},on:{change:function(n){return e.$emit("input",n)},click:function(n){return e.$emit("click",n)},mousedown:function(n){return e.$emit("mousedown",n)},mouseup:function(n){return e.$emit("mouseup",n)},"update:error":function(n){return e.$emit("update:error",n)}},scopedSlots:e._u([e._l(e.$slots,function(n,r){return{key:r,fn:function(i){return[e._t(r,null,null,i)]}}}),e._l(e.$slots,function(n,r){return{key:r,fn:function(){return[e._t(r)]},proxy:!0}}),{key:"message",fn:function({message:n}){return[t.hasWarning?[s("span",{staticClass:"d-flex align-center warning--text"},[s(g,{staticClass:"mr-1 inherit--text"}),e._v(" "+e._s(n)+" ")],1)]:t.hasError?[s("span",{staticClass:"d-flex align-center error--text"},[s(_,{staticClass:"mr-1 inherit--text"}),e._v(" "+e._s(n)+" ")],1)]:t.hasSuccess?[s("span",{staticClass:"d-flex align-center success--text"},[e._v(" "+e._s(n)+" ")])]:[e._v(" "+e._s(n)+" ")]]}}],null,!0)},"VCheckbox",{...e.$attrs,...e.$props,...t.props},!1))],1)},$=[],l=k(I,q,$,!1,null,"0f211fac",null,null);const w=l.exports;l.exports.__docgenInfo={exportName:"default",displayName:"PpdCheckbox",description:"",tags:{},props:[{name:"dense",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"errorCount",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"errorMessages",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"hideDetails",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"string"}]}},{name:"hint",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"messages",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"persistentHint",required:!1,type:{name:"boolean"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"rules",required:!1,type:{name:"any"}},{name:"success",required:!1,type:{name:"boolean"}},{name:"successMessages",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"validateOnBlur",required:!1,type:{name:"boolean"}},{name:"warning",required:!1,type:{name:"boolean"}},{name:"warningMessage",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"boolean"}},{name:"multiple",required:!1,type:{name:"boolean"}},{name:"ripple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"input"},{name:"click"},{name:"mousedown"},{name:"mouseup"},{name:"update:error"}],slots:[{name:"scopedSlotName",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"slotName",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/Code/pampadu.frontend.ui-kit/src/stories/Form/PpdCheckbox/PpdCheckbox.vue"]};export{w as P};
