"use strict";(self.webpackChunk_MokoshAI_cms=self.webpackChunk_MokoshAI_cms||[]).push([[7462],{6503:(H,M,t)=>{t.d(M,{u:()=>g});var s=t(91155);const c=s.n.injectEndpoints({endpoints:i=>({getWebhooks:i.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,d)=>typeof d=="object"&&"id"in d?[{type:"Webhook",id:d.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:i.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:i.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:d})=>[{type:"Webhook",id:d}]}),triggerWebhook:i.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:i.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:d})=>d.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:x,useCreateWebhookMutation:T,useUpdateWebhookMutation:C,useTriggerWebhookMutation:b,useDeleteManyWebhooksMutation:W}=c,g=(i=void 0,o)=>{const{data:h,isLoading:d,error:f}=x(i,o),[p,{error:D}]=T(),[l,{error:L}]=C(),[O]=b(),[k]=W();return{webhooks:h,isLoading:d,error:f||D||L,createWebhook:p,updateWebhook:l,triggerWebhook:O,deleteManyWebhooks:k}}},27462:(H,M,t)=>{t.d(M,{ProtectedListPage:()=>ct});var s=t(58466),c=t(2730),x=t(77271),T=t(64469),C=t(15659),b=t(18834),W=t(28535),g=t(13775),i=t(16113),o=t(61680),h=t(45227),d=t(60783),f=t(31458),p=t(48065),D=t(94323),l=t(71869),L=t(78885),O=t(9891),k=t(46067),I=t(59979),J=t(86784);const R=J.Ay.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=J.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${R} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${R}:before {
    transform: translateX(1rem);
  }
`,ot=c.forwardRef(({label:n,onChange:u,onLabel:P="On",offLabel:S="Off",selected:j,visibleLabels:m=!1,...K},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:u,visibleLabels:m,type:"button",...K,children:(0,s.jsxs)(I.s,{children:[(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:P}),(0,s.jsx)("span",{children:S})]}),m&&(0,s.jsx)(h.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?P:S})]})}));var Q=t(7479),et=t(74201),at=t(58124),v=t(43348),U=t(53176),Y=t(30018),nt=t(76263),rt=t(10931),dt=t(96508),Z=t(77645),it=t(37299),w=t(91155),lt=t(6503),Ct=t(79412),bt=t(9361),Wt=t(95052),St=t(50682),Et=t(20153),At=t(76024),Dt=t(34511),Lt=t(85209),Pt=t(43900),Bt=t(69093),$t=t(85041),pt=t(3891),Ot=t(90588),kt=t(49382),It=t(12762),Rt=t(19292),Ut=t(9174),Kt=t(6056),Ft=t(33854),Nt=t(31075),zt=t(19727),Gt=t(8184),Vt=t(11001),Xt=t(15778),Ht=t(81806),Jt=t(95431),Qt=t(55688),Yt=t(32962),Zt=t(40060),wt=t(26208),qt=t(31666),_t=t(69506),ts=t(3691),ss=t(2119),os=t(46705),es=t(59362),as=t(98907),ns=t(28685),rs=t(45946),ds=t(6377),is=t(71484),ls=t(97755),hs=t(85960),cs=t(25395),gs=t(35771);const ht=()=>{const[n,u]=c.useState(!1),[P,S]=c.useState(!1),[j,m]=c.useState([]),K=(0,w.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,dt.A)(),{_unstableFormatAPIError:B}=(0,v.wq)(),y=(0,v.hN)();(0,v.L4)();const{push:gt}=(0,Z.W6)(),{pathname:q}=(0,Z.zy)(),{isLoading:mt,allowedActions:{canCreate:F,canUpdate:N,canDelete:_}}=(0,v.ec)(K),{notifyStatus:tt}=(0,x.W)(),{isLoading:vt,webhooks:E,error:z,updateWebhook:ut,deleteManyWebhooks:xt}=(0,lt.u)();c.useEffect(()=>{if(z){y({type:"warning",message:B(z)});return}E&&tt(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[E,z,y,a,tt,B]);const ft=async e=>{try{const r=await ut(e);"error"in r&&y({type:"warning",message:B(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{S(!0);const e=await xt({ids:j});if("error"in e){y({type:"warning",message:B(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{S(!1),u(!1)}},yt=e=>m(e?E?.map(r=>r.id)??[]:[]),Mt=(e,r)=>m(e?X=>[...X,r]:X=>X.filter(Tt=>Tt!==r)),G=e=>()=>gt(`${q}/${e}`),V=mt||vt,$=E?.length??0,A=j.length;return(0,s.jsxs)(T.P,{children:[(0,s.jsx)(v.x7,{name:"Webhooks"}),(0,s.jsxs)(C.g,{"aria-busy":V,children:[(0,s.jsx)(b.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:F&&!V&&(0,s.jsx)(at.z,{as:it.k2,startIcon:(0,s.jsx)(U.A,{}),variant:"default",to:`${q}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),A>0&&_&&(0,s.jsx)(W.B,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.o,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:A})}),(0,s.jsx)(i.$,{onClick:()=>u(!0),startIcon:(0,s.jsx)(Y.A,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.s,{children:V?(0,s.jsx)(h.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.Bl,{})}):$>0?(0,s.jsxs)(d.X,{colCount:5,rowCount:$+1,footer:(0,s.jsx)(f.S,{onClick:G("create"),icon:(0,s.jsx)(U.A,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(p.d,{children:(0,s.jsxs)(D.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(L.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:A>0&&A<$,value:A===$,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(O.s,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(k.N,{children:E?.map(e=>(0,s.jsxs)(D.Tr,{onClick:N?G(e.id):void 0,style:{cursor:N?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(L.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Mt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.o,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.o,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(I.s,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),ft({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(I.s,{gap:1,children:[N&&(0,s.jsx)(Q.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.A,{}),noBorder:!0}),_&&(0,s.jsx)(Q.K,{onClick:r=>{r.stopPropagation(),m([e.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(Y.A,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.p,{icon:(0,s.jsx)(rt.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(i.$,{variant:"secondary",startIcon:(0,s.jsx)(U.A,{}),disabled:!F,onClick:F?G("create"):void 0,children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.TM,{isOpen:n,onToggleDialog:()=>u(e=>!e),onConfirm:jt,isConfirmButtonLoading:P})]})},ct=()=>{const n=(0,w.j)(u=>u.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.kz,{permissions:n,children:(0,s.jsx)(ht,{})})}},31458:(H,M,t)=>{t.d(M,{S:()=>i});var s=t(58466),c=t(86784),x=t(45227),T=t(86507),C=t(59979),b=t(13775);const W=(0,c.Ay)(x.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,g=(0,c.Ay)(x.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,i=({children:o,icon:h,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(T.c,{}),(0,s.jsx)(g,{as:"button",background:"primary100",padding:5,...d,children:(0,s.jsxs)(C.s,{children:[(0,s.jsx)(W,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(x.a,{paddingLeft:3,children:(0,s.jsx)(b.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
