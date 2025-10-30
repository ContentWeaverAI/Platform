"use strict";(self.webpackChunk_MokoshAI_cms=self.webpackChunk_MokoshAI_cms||[]).push([[8256],{11690:(W,P,_)=>{_.d(P,{S:()=>B});var s=_(58466),n=_(38973),O=_(12688),C=_(59979),D=_(44821),A=_(13775),a=_(96508),o=_(37299),l=_(86784);const B=({providers:E,displayAllProviders:h})=>{const{formatMessage:v}=(0,a.A)();return h?(0,s.jsx)(n.x,{gap:4,children:E.map(t=>(0,s.jsx)(O.E,{col:4,children:(0,s.jsx)(M,{provider:t})},t.uid))}):E.length>2&&!h?(0,s.jsxs)(n.x,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(O.E,{col:4,children:(0,s.jsx)(M,{provider:t})},t.uid)),(0,s.jsx)(O.E,{col:4,children:(0,s.jsx)(D.m,{label:v({id:"global.see-more"}),children:(0,s.jsx)(r,{as:o.N_,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(i,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(M,{provider:t},t.uid))})},i=(0,l.Ay)(C.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,M=({provider:E})=>(0,s.jsx)(D.m,{label:E.displayName,children:(0,s.jsx)(r,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(A.o,{children:E.displayName})})}),r=l.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},68256:(W,P,_)=>{_.r(P),_.d(P,{FORMS:()=>U});var s=_(58466),n=_(45227),O=_(16113),C=_(86507),D=_(59754),A=_(15659),a=_(59979),o=_(13775),l=_(20128),B=_(96508),i=_(77645),M=_(37299),r=_(86784),E=_(91155),h=_(11690),v=_(43348),t=_(79412),g=_(9361),x=_(95052),j=_(50682),c=_(20153),f=_(76024),y=_(2730),S=_(34511),$=_(85209),N=_(43900),F=_(69093),u=_(85041),z=_(3891),e=_(90588),G=_(49382),X=_(12762),Z=_(19292),H=_(9174),J=_(6056),Q=_(33854),V=_(31075),Y=_(19727),p=_(8184),w=_(11001),k=_(15778),b=_(81806),q=_(95431),__=_(55688),s_=_(32962),E_=_(40060),t_=_(26208),n_=_(31666),a_=_(69506),o_=_(3691),d_=_(2119),O_=_(46705),M_=_(59362),P_=_(98907),D_=_(28685),l_=_(45946),i_=_(6377),r_=_(71484),h_=_(97755),C_=_(85960),A_=_(25395),B_=_(35771);const T=()=>{const{push:I}=(0,i.W6)(),{formatMessage:d}=(0,B.A)(),{isLoading:m,data:L=[]}=(0,E.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),K=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!m&&L.length===0?(0,s.jsx)(i.rd,{to:"/auth/login"}):(0,s.jsx)(E.U,{children:(0,s.jsxs)(A.g,{children:[(0,s.jsxs)(E.h,{children:[(0,s.jsxs)(E.C,{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(n.a,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(o.o,{as:"h1",variant:"alpha",children:d({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(n.a,{paddingBottom:7,children:(0,s.jsx)(o.o,{variant:"epsilon",textColor:"neutral600",children:d({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(a.s,{direction:"column",alignItems:"stretch",gap:7,children:[m?(0,s.jsx)(a.s,{justifyContent:"center",children:(0,s.jsx)(D.a,{children:d({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(h.S,{providers:L}),(0,s.jsxs)(a.s,{children:[(0,s.jsx)(R,{}),(0,s.jsx)(n.a,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(o.o,{variant:"sigma",textColor:"neutral600",children:d({id:"or"})})}),(0,s.jsx)(R,{})]}),(0,s.jsx)(O.$,{fullWidth:!0,size:"L",onClick:K,children:d({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(a.s,{justifyContent:"center",children:(0,s.jsx)(n.a,{paddingTop:4,children:(0,s.jsx)(l.N,{as:M.k2,to:"/auth/forgot-password",children:(0,s.jsx)(o.o,{variant:"pi",children:d({id:"Auth.link.forgot-password"})})})})})]})})},R=(0,r.Ay)(C.c)`
  flex: 1;
`,U={providers:T}}}]);
