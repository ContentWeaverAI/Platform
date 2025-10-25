"use strict";(self.webpackChunk_contentweaver_cms=self.webpackChunk_contentweaver_cms||[]).push([[214],{11690:(I,D,_)=>{_.d(D,{S:()=>L});var E=_(58466),a=_(38973),n=_(12688),M=_(59979),P=_(44821),l=_(13775),i=_(96508),O=_(37299),d=_(86784);const L=({providers:s,displayAllProviders:A})=>{const{formatMessage:C}=(0,i.A)();return A?(0,E.jsx)(a.x,{gap:4,children:s.map(t=>(0,E.jsx)(n.E,{col:4,children:(0,E.jsx)(o,{provider:t})},t.uid))}):s.length>2&&!A?(0,E.jsxs)(a.x,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(n.E,{col:4,children:(0,E.jsx)(o,{provider:t})},t.uid)),(0,E.jsx)(n.E,{col:4,children:(0,E.jsx)(P.m,{label:C({id:"global.see-more"}),children:(0,E.jsx)(h,{as:O.N_,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(B,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(o,{provider:t},t.uid))})},B=(0,d.Ay)(M.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,o=({provider:s})=>(0,E.jsx)(P.m,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.o,{children:s.displayName})})}),h=d.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`},50214:(I,D,_)=>{_.r(D),_.d(D,{LoginEE:()=>K});var E=_(58466),a=_(45227),n=_(86507),M=_(59979),P=_(13775),l=_(96508),i=_(86784),O=_(91155),d=_(11690),L=_(43348),B=_(79412),o=_(9361),h=_(95052),s=_(50682),A=_(20153),C=_(76024),t=_(2730),W=_(34511),m=_(85209),g=_(43900),x=_(69093),j=_(85041),f=_(3891),y=_(90588),c=_(49382),S=_(12762),$=_(19292),N=_(9174),F=_(6056),z=_(33854),G=_(31075),X=_(19727),Z=_(8184),H=_(11001),J=_(15778),Q=_(81806),V=_(95431),Y=_(55688),u=_(32962),p=_(40060),e=_(26208),w=_(31666),k=_(69506),b=_(3691),q=_(2119),__=_(46705),E_=_(59362),s_=_(98907),t_=_(28685),a_=_(45946),n_=_(6377),O_=_(71484),D_=_(97755),M_=_(85960),P_=_(25395),d_=_(35771);const r=(0,i.Ay)(n.c)`
  flex: 1;
`,K=R=>{const{formatMessage:T}=(0,l.A)(),{isLoading:U,data:v=[]}=(0,O.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!U&&v.length===0?(0,E.jsx)(O.L,{...R}):(0,E.jsx)(O.L,{...R,children:(0,E.jsx)(a.a,{paddingTop:7,children:(0,E.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(M.s,{children:[(0,E.jsx)(r,{}),(0,E.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:T({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(r,{})]}),(0,E.jsx)(d.S,{providers:v,displayAllProviders:!1})]})})})}}}]);
