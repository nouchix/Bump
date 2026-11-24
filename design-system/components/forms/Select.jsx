import React,{useState} from 'react';
import {Icon} from '../display/Icon.jsx';
import {Field} from './Field.jsx';
export function Select({label,hint,error,options=[],value,onChange,id,style,...rest}){
  const [focus,setFocus]=useState(false);
  const control=(
    <div style={{position:'relative',height:42,...(label||hint?{}:style)}}>
      <select id={id} value={value} onChange={onChange} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{appearance:'none',WebkitAppearance:'none',width:'100%',height:'100%',background:'var(--bg-app)',color:'var(--text-primary)',border:'1px solid '+(focus?'var(--accent)':'var(--border-default)'),
          boxShadow:focus?'0 0 0 3px var(--accent-soft)':'none',borderRadius:'var(--radius-md)',padding:'0 40px 0 14px',fontFamily:'var(--font-body)',fontSize:14,outline:'none',cursor:'pointer'}} {...rest}>
        {options.map((o)=>{const opt=typeof o==='string'?{value:o,label:o}:o;return <option key={opt.value} value={opt.value}>{opt.label}</option>;})}
      </select>
      <span style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--text-secondary)'}}><Icon name="chevron-down" size={16}/></span>
    </div>
  );
  if(!label&&!hint&&!error)return control;
  return <Field label={label} hint={hint} error={error} htmlFor={id} style={style}>{control}</Field>;
}
