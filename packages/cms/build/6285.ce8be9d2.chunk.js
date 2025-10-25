"use strict";(self.webpackChunk_contentweaver_cms=self.webpackChunk_contentweaver_cms||[]).push([[6285],{31458:(A,O,s)=>{s.d(O,{S:()=>r});var t=s(58466),E=s(86784),M=s(45227),g=s(86507),D=s(59979),P=s(13775);const m=(0,E.Ay)(M.a)`
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
`,i=(0,E.Ay)(M.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:o,icon:l,...d})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(g.c,{}),(0,t.jsx)(i,{as:"button",background:"primary100",padding:5,...d,children:(0,t.jsxs)(D.s,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:l}),(0,t.jsx)(M.a,{paddingLeft:3,children:(0,t.jsx)(P.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})},37724:(A,O,s)=>{s.d(O,{u:()=>m});var t=s(2730),E=s(43348),M=s(91155);const g=M.n.injectEndpoints({endpoints:i=>({getComponents:i.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:r=>r.data}),getContentTypes:i.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:r=>r.data})}),overrideExisting:!1}),{useGetComponentsQuery:D,useGetContentTypesQuery:P}=g;function m(){const{_unstableFormatAPIError:i}=(0,E.wq)(),r=(0,E.hN)(),o=D(),l=P();t.useEffect(()=>{l.error&&r({type:"warning",message:i(l.error)})},[l.error,i,r]),t.useEffect(()=>{o.error&&r({type:"warning",message:i(o.error)})},[o.error,i,r]);const d=o.isLoading||l.isLoading,T=t.useMemo(()=>(l?.data??[]).filter(c=>c.kind==="collectionType"&&c.isDisplayed),[l?.data]),_=t.useMemo(()=>(l?.data??[]).filter(c=>c.kind!=="collectionType"&&c.isDisplayed),[l?.data]);return{isLoading:d,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:_}}},50552:(A,O,s)=>{s.d(O,{u:()=>E});var t=s(16141);function E(M={}){const{id:g="",...D}=M,{data:P,isLoading:m}=(0,t.c)({id:g,populate:"stages",...D}),[i]=(0,t.d)(),[r]=(0,t.e)(),[o]=(0,t.f)(),{workflows:l,meta:d}=P??{};return{meta:d,workflows:l,isLoading:m,createWorkflow:i,updateWorkflow:r,deleteWorkflow:o}}},66285:(A,O,s)=>{s.d(O,{ProtectedReviewWorkflowsPage:()=>Y});var t=s(58466),E=s(2730),M=s(7479),g=s(59754),D=s(59979),P=s(60783),m=s(46067),i=s(48065),r=s(94323),o=s(71869),l=s(31458),d=s(13775),T=s(9891),_=s(43348),c=s(76263),W=s(53176),I=s(30018),y=s(96508),K=s(77645),U=s(86784),a=s(91155),h=s(37724),L=s(77297),C=s(54314),X=s(34778),H=s(50552),ls=s(79412),Es=s(9361),ds=s(95052),Ms=s(50682),Ds=s(20153),Ps=s(76024),Os=s(34511),gs=s(85209),ms=s(43900),cs=s(69093),vs=s(85041),fs=s(3891),Ts=s(90588),hs=s(49382),Cs=s(12762),As=s(19292),Ws=s(9174),Ls=s(6056),Rs=s(33854),Bs=s(31075),Is=s(19727),ys=s(8184),Ks=s(11001),Us=s(15778),js=s(81806),xs=s(95431),us=s(55688),ws=s(32962),ps=s(40060),Ss=s(26208),$s=s(31666),Ns=s(69506),Fs=s(3691),zs=s(2119),Gs=s(46705),Xs=s(59362),Hs=s(98907),Qs=s(28685),ks=s(45946),Ys=s(6377),Vs=s(71484),Js=s(97755),Zs=s(85960),bs=s(25395),qs=s(35771),st=s(16141);const Q=(0,U.Ay)(_.N_)`
  align-items: center;
  height: ${(0,_.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>`${e.spaces[2]}}`};
  width: ${(0,_.a8)(32)};

  svg {
    height: ${(0,_.a8)(12)};
    width: ${(0,_.a8)(12)};

    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral800};
      }
    }
  }
`,k=()=>{const{formatMessage:e}=(0,y.A)(),{push:R}=(0,K.W6)(),{trackUsage:p}=(0,_.z1)(),[j,x]=E.useState(null),[V,B]=E.useState(!1),{collectionTypes:J,singleTypes:Z,isLoading:b}=(0,h.u)(),{meta:v,workflows:S,isLoading:u,deleteWorkflow:q}=(0,H.u)(),[ss,$]=E.useState(!1),{_unstableFormatAPIError:ts}=(0,_.wq)(),w=(0,_.hN)(),{getFeature:os,isLoading:N}=(0,a.m)(),es=(0,a.j)(n=>n.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:F,canDelete:ns}}=(0,_.ec)(es),f=os("review-workflows")?.[X.C],_s=n=>[...J,...Z].find(G=>G.uid===n)?.info.displayName,as=n=>{x(n)},is=()=>{x(null)},rs=async()=>{if(j)try{$(!0);const n=await q({id:j});if("error"in n){w({type:"warning",message:ts(n.error)});return}x(null),w({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{w({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{$(!1)}};return E.useEffect(()=>{!u&&!N&&f&&v&&v?.workflowCount>parseInt(f,10)&&B(!0)},[N,u,v,v?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.H,{primaryAction:F&&(0,t.jsx)(_.z9,{startIcon:(0,t.jsx)(W.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:n=>{f&&v&&v?.workflowCount>=parseInt(f,10)?(n.preventDefault(),B(!0)):p("willCreateWorkflow")},children:e({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:e({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:e({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(L.R,{children:[u||b?(0,t.jsx)(D.s,{justifyContent:"center",children:(0,t.jsx)(g.a,{children:e({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(P.X,{colCount:3,footer:F&&(0,t.jsx)(l.S,{icon:(0,t.jsx)(W.A,{}),onClick:()=>{f&&v&&v?.workflowCount>=parseInt(f,10)?B(!0):(R("/settings/review-workflows/create"),p("willCreateWorkflow"))},children:e({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(i.d,{children:(0,t.jsxs)(r.Tr,{children:[(0,t.jsx)(o.Th,{children:(0,t.jsx)(d.o,{variant:"sigma",children:e({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(o.Th,{children:(0,t.jsx)(d.o,{variant:"sigma",children:e({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(o.Th,{children:(0,t.jsx)(d.o,{variant:"sigma",children:e({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(o.Th,{children:(0,t.jsx)(T.s,{children:e({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(m.N,{children:S?.map(n=>(0,E.createElement)(r.Tr,{...(0,_.qM)({fn(z){z.target.nodeName!=="BUTTON"&&R(`/settings/review-workflows/${n.id}`)}}),key:`workflow-${n.id}`},(0,t.jsx)(o.Td,{width:(0,_.a8)(250),children:(0,t.jsx)(d.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:n.name})}),(0,t.jsx)(o.Td,{children:(0,t.jsx)(d.o,{textColor:"neutral800",children:n.stages.length})}),(0,t.jsx)(o.Td,{children:(0,t.jsx)(d.o,{textColor:"neutral800",children:(n?.contentTypes??[]).map(_s).join(", ")})}),(0,t.jsx)(o.Td,{children:(0,t.jsxs)(D.s,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(Q,{to:`/settings/review-workflows/${n.id}`,"aria-label":e({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:n.name}),children:(0,t.jsx)(c.A,{})}),S.length>1&&ns&&(0,t.jsx)(M.K,{"aria-label":e({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(I.A,{}),noBorder:!0,onClick:()=>{as(String(n.id))}})]})})))})]}),(0,t.jsx)(_.TM,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ss,isOpen:!!j,onToggleDialog:is,onConfirm:rs}),(0,t.jsxs)(C.L.Root,{isOpen:V,onClose:()=>B(!1),children:[(0,t.jsx)(C.L.Title,{children:e({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(C.L.Body,{children:e({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},Y=()=>{const e=(0,a.j)(R=>R.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(_.kz,{permissions:e,children:(0,t.jsx)(k,{})})}},77297:(A,O,s)=>{s.d(O,{B:()=>K,D:()=>I,H:()=>U,R:()=>y});var t=s(58466),E=s(64469),M=s(61680),g=s(18834),D=s(15659),P=s(59979),m=s(13775),i=s(43348),r=s(63440),o=s(98063),l=s(96508),d=s(91155),T=s(34778),_=s(86784);const c=(0,_.Ay)(P.s)`
  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,W=({name:a})=>(0,t.jsxs)(P.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,i.a8)(300),children:[(0,t.jsx)(c,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(o.A,{width:`${8/16}rem`})}),(0,t.jsx)(m.o,{fontWeight:"bold",children:a})]}),I=()=>(0,t.jsx)(d.P,{renderItem:a=>{if(a.type===T.D.STAGE)return(0,t.jsx)(W,{name:typeof a.item=="string"?a.item:null})}}),y=({children:a})=>(0,t.jsx)(E.P,{children:(0,t.jsx)(D.g,{tabIndex:-1,children:(0,t.jsx)(M.s,{children:a})})}),K=({href:a})=>{const{formatMessage:h}=(0,l.A)();return(0,t.jsx)(i.N_,{startIcon:(0,t.jsx)(r.A,{}),to:a,children:h({id:"global.back",defaultMessage:"Back"})})},U=({title:a,subtitle:h,navigationAction:L,primaryAction:C})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.x7,{name:a}),(0,t.jsx)(g.Q,{navigationAction:L,primaryAction:C,title:a,subtitle:h})]})}}]);
