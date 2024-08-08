import{r,j as e}from"./index-527674d4.js";import{P as ee}from"./PageContainer-7391d85a.js";import{B as te,H as ae}from"./Breadcrumb-9d223376.js";import{D as oe}from"./DashboardCard-a6eb3dc5.js";import{a as ie,c as ne}from"./config-0ef406a9.js";import{e as k}from"./eventEmitter-d2c8b369.js";import{B as f}from"./Button-ed9ad2d4.js";import{s as j,B as A,T as re}from"./Box-71d1ebd7.js";import{T as n,a as h,b as w,c as P,d as R}from"./TableRow-10e45578.js";import{u as se,G as s}from"./List-1f8e7d65.js";import{I as le}from"./IconFileArrowRight-34c5f500.js";import{I as de}from"./IconFileArrowLeft-a4039ec0.js";import{I as ce}from"./IconEye-b8372c03.js";import{I as me}from"./IconPencil-0c0be722.js";import{D as z,a as O,b as F}from"./DialogTitle-0128b24d.js";import{I as pe}from"./Select-ae13be61.js";import{D as L}from"./DialogActions-1e1d1b16.js";import"./ShortageLogTable-2a0756c9.js";import"./createReactComponent-d6bc8056.js";import"./Menu-31bdb761.js";import"./IconLayoutDashboard-dc50938b.js";import"./Card-0829dc83.js";import"./CardContent-683b8cab.js";import"./Stack-d2cb04f4.js";import"./styled-8c9f9ba9.js";import"./useThemeProps-e42ef9f1.js";import"./lodash-2fff161a.js";import"./IconButton-bdd7b490.js";import"./Popper-94e6156e.js";import"./Checkbox-5a5d6566.js";import"./TextField-e443bc2c.js";import"./FormControl-2c579a6e.js";import"./InputLabel-bf27fb80.js";import"./index.es-d25736d1.js";/* empty css                   */import"./TableContainer-d76ac827.js";const W=j(f)(({theme:o})=>({backgroundColor:o.palette.primary.contrast,border:"1px solid",borderColor:o.palette.primary.contrast,color:o.palette.primary.contrastText,fontSize:"12px",padding:"0",fontWeight:"600",transition:"all ease 0.3s","&:hover":{backgroundColor:o.palette.primary.main,color:o.palette.primary.contrastText,borderColor:o.palette.primary.main},"& .btn-indicator":{width:"1px",backgroundColor:o.palette.primary.main,alignSelf:"stretch",marginLeft:"4px"}})),u=j(A)(({theme:o})=>({padding:"5px 12px",fontWeight:"600"})),he=j(n)(({theme:o})=>({fontSize:"12px",fontWeight:"600"})),xe=j(h)(({theme:o,index:S})=>({borderBottom:"1px solid #eee",backgroundColor:S%2===0?o.palette.secondary.contrastText:o.palette.primary.extraLight})),ge=()=>{const o=se(),[S,U]=r.useState(null),[I,N]=r.useState({}),[H,C]=r.useState(!1),[G,b]=r.useState(!1),[$,E]=r.useState(""),[m,M]=r.useState(null),[p,v]=r.useState([]),[ue,y]=r.useState(sessionStorage.getItem("selectedVendorId")),Y=ne.UniUrl;r.useEffect(()=>{const t=sessionStorage.getItem("selectedVendorId"),l=sessionStorage.getItem("token");t&&y(t);const d=async x=>{try{const g=await ie.get(`${Y}/shortage/getAggrShortageSummByuploadId?vendorId=${x}&batchStatus=CURRENT`,{headers:{Authorization:`Bearer ${l}`}}),a=g.data;if(console.log("Received data from API:",a),!a||a.status==="FAILED"||g.status===404)v([]);else{const V=Math.abs(a.data.sumUnsettledShortage),Q=V.toLocaleString(void 0,{maximumFractionDigits:2}),c=Z=>{const D=new Date(Z);return`${D.getMonth()+1}/${D.getDate()}/${D.getFullYear()%100}`},X=[{id:1,Settlement:"Shortage Claim Finding",Active:[`${V>=0?`$ ${Q}`:" - "}`],Archived:[" - "],color:o.palette.accent.main},{id:2,Settlement:"Period Covered (Invoice Date)",Active:[a.data.minPeriodCoveredStartDate&&a.data.maxPeriodCoveredEndDate?`${c(a.data.minPeriodCoveredStartDate)} to ${c(a.data.maxPeriodCoveredEndDate)}`:"-"],Archived:[" - "]},{id:3,Settlement:"Period Covered (Due Date)",Active:[a.data.minPaymentDueDate&&a.data.maxPaymentDueDate?`${c(a.data.minPaymentDueDate)} to ${c(a.data.maxPaymentDueDate)}`:"-"],Archived:[" - "],color:o.palette.success.main},{id:4,Settlement:"Case ID & Creation Date",Active:[a.data.caseId&&a.data.minCaseCreationDate?`${a.data.caseId} & ${c(a.data.minCaseCreationDate)}`:"-"],Archived:[" - "],color:o.palette.accent.main},{id:5,Settlement:"Open Balance & Confirmation Date",Active:[a.data.sumOutstandingBalanceAmount&&a.data.minOutstandingBalanceConfrimedDate?`$${a.data.sumOutstandingBalanceAmount} & ${c(a.data.minOutstandingBalanceConfrimedDate)}`:"-"],Archived:[" - "]},{id:8,Settlement:"Counter Offer & Date",Active:["  - "],Archived:[" - "],color:o.palette.accent.main},{id:9,Settlement:"Accepted Offer & Date",Active:[a.data.accepatedDate&&a.data.accepatedAmount?`${a.data.accepatedDate} & $${a.data.accepatedAmount}`:"-"],Archived:[" - "]},{id:10,Settlement:"Settlement Amount & Date",Active:[a.data.sumSettledAmount&&a.data.minResolvedDate?`$${a.data.sumSettledAmount} & ${c(a.data.minResolvedDate)}`:"-"],Archived:[" - "],color:o.palette.success.main}];v(X)}}catch(g){console.error("Error fetching shortage data:",g),v([])}};t&&d(t);const i=x=>{y(x),d(x)};return k.on("vendorSelected",i),()=>{k.off("vendorSelected",i)}},[o.palette.accent.main,o.palette.error.main,o.palette.success.main]),r.useEffect(()=>{const t=sessionStorage.getItem("selectedVendorId");t&&y(t)},[]);const _=t=>{var l,d;console.log("Edit clicked for id:",t),U(t),E(I[t]||((d=(l=p.find(i=>i.id===t))==null?void 0:l.Active)==null?void 0:d[0])||""),C(!0)},q=t=>{console.log("View clicked for row:",t),M(t),b(!0)},B=()=>{C(!1)},T=()=>{b(!1)},J=t=>{E(t.target.value)},K=()=>{N({...I,[S]:$}),C(!1)};return e.jsxs(oe,{children:[e.jsxs(s,{container:!0,spacing:3,marginBottom:3,alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{item:!0,xs:5,children:e.jsx(re,{variant:"h4",children:"Shortage Claim Finding "})}),e.jsx(s,{item:!0,xs:7,children:e.jsxs(s,{container:!0,spacing:2,justifyContent:"end",children:[e.jsx(s,{item:!0,children:e.jsxs(W,{children:[e.jsx(u,{children:"Export"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(u,{children:e.jsx(le,{size:"16",style:{margin:"auto",verticalAlign:"middle"}})})]})}),e.jsx(s,{item:!0,children:e.jsxs(W,{children:[e.jsx(u,{children:"Import"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(u,{children:e.jsx(de,{size:"16",style:{margin:"auto",verticalAlign:"middle"}})})]})})]})})]}),e.jsxs(w,{children:[e.jsx(P,{children:e.jsxs(h,{style:{backgroundColor:o.palette.primary.light},children:[e.jsx(n,{style:{color:"white",fontSize:"15px",fontWeight:"600"},children:"Settlement"}),e.jsx(n,{style:{color:"white",fontSize:"15px",fontWeight:"600"},children:"Active Cases($)"}),e.jsx(n,{style:{color:"white",fontSize:"15px",fontWeight:"600"},children:"Archived"})]})}),e.jsx(R,{children:p!==null&&p.length>0?p.map((t,l)=>e.jsxs(xe,{index:l,theme:o,children:[e.jsx(n,{children:t.Settlement}),e.jsx(he,{style:{color:t.color},children:t.Active.map((d,i)=>e.jsxs(A,{my:1,style:{display:"flex",alignItems:"center"},children:[i===0&&e.jsx(ce,{size:16,style:{cursor:"pointer",marginRight:"10px"},onClick:()=>q(t)}),e.jsx("div",{style:{width:"120px"},children:d}),(i===0||i===1)&&e.jsx(me,{size:16,style:{cursor:"pointer",marginLeft:"5px"},onClick:()=>_(t.id)},i)]},i))}),e.jsx(n,{style:{color:t.color},children:t.Archived.map((d,i)=>e.jsx(A,{my:1,style:{display:"flex",alignItems:"center"},children:d},i))})]},t.id)):e.jsx(h,{children:e.jsx(n,{colSpan:3,style:{textAlign:"center"},children:p===null?"Loading...":"No data available for this vendor."})})})]}),e.jsxs(z,{open:H,onClose:B,children:[e.jsx(O,{children:"Edit Value"}),e.jsx(F,{children:e.jsx(pe,{value:$,onChange:J})}),e.jsxs(L,{children:[e.jsx(f,{onClick:B,children:"Cancel"}),e.jsx(f,{onClick:K,children:"Save"})]})]}),e.jsxs(z,{open:G,onClose:T,children:[e.jsx(O,{children:m?m.Settlement:""}),e.jsx(F,{children:e.jsxs(w,{children:[e.jsx(P,{children:e.jsxs(h,{style:{backgroundColor:o.palette.primary.light},children:[e.jsx(n,{style:{color:"white",fontSize:"12px",fontWeight:"600"},children:"Settlement"}),e.jsx(n,{style:{color:"white",fontSize:"12px",fontWeight:"600"},children:"Active Case($)"})]})}),e.jsx(R,{children:m&&m.Active.map((t,l)=>e.jsxs(h,{children:[e.jsx(n,{children:l===0?m.Settlement:""}),e.jsx(n,{children:t})]},l))})]})}),e.jsx(L,{children:e.jsx(f,{onClick:T,children:"Close"})})]})]})},Ze=()=>e.jsx(ee,{title:"",children:e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(te,{titles:["Shortage Claim","Shortage Claim Finding"]})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(ae,{title:"Shortage Claim Finding"})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(ge,{})})]})});export{Ze as default};
