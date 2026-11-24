import React,{useState,useRef} from 'react';
import {Icon} from '../display/Icon.jsx';
export function Dropzone({icon='music',title='Select or drop a file',hint,fileName,accept,onFile,compact=false,style}){
  const [hover,setHover]=useState(false);
  const ref=useRef(null);
  const pick=(f)=>{if(f&&onFile)onFile(f);};
  return (
    <div role="button" tabIndex={0} onClick={()=>ref.current&&ref.current.click()}
      onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}
      onDragOver={(e)=>{e.preventDefault();setHover(true);}} onDragLeave={()=>setHover(false)}
      onDrop={(e)=>{e.preventDefault();setHover(false);pick(e.dataTransfer.files&&e.dataTransfer.files[0]);}}
      style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:compact?4:8,padding:compact?16:28,cursor:'pointer',textAlign:'center',
        border:'2px dashed '+(hover?'var(--accent)':'var(--border-default)'),borderRadius:'var(--radius-md)',background:hover?'rgba(255,61,90,.05)':'var(--bg-app)',
        transition:'border-color var(--duration-fast) var(--ease-out-expo), background var(--duration-fast) var(--ease-out-expo)',...style}}>
      <span style={{color:fileName||!compact?'var(--accent)':'var(--text-tertiary)'}}><Icon name={fileName?'check-circle-2':icon} size={compact?24:32}/></span>
      <span style={{fontSize:compact?12:14,fontWeight:compact?400:500,color:compact?'var(--text-secondary)':'var(--ink-200)'}}>{fileName||title}</span>
      {hint&&!fileName?<span style={{fontSize:12,color:'var(--text-tertiary)'}}>{hint}</span>:null}
      <input ref={ref} type="file" accept={accept} style={{display:'none'}} onChange={(e)=>pick(e.target.files&&e.target.files[0])}/>
    </div>
  );
}
