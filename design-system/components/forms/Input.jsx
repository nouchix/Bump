import React,{useState} from 'react';
import {Icon} from '../display/Icon.jsx';
import {Field} from './Field.jsx';
export function Input({label,hint,error,prefix,icon,size='md',id,style,inputStyle,onFocus,onBlur,...rest}){
  const [focus,setFocus]=useState(false);
  const h=size==='lg'?48:size==='sm'?34:42;
  const control=(
    <div style={{position:'relative',display:'flex',alignItems:'center',height:h,background:'var(--bg-app)',border:'1px solid '+(error?'var(--danger-500)':focus?'var(--accent)':'var(--border-default)'),
      borderRadius:'var(--radius-md)',boxShadow:focus?'0 0 0 3px var(--accent-soft)':'none',transition:'border-color var(--duration-fast) var(--ease-out-expo), box-shadow var(--duration-fast) var(--ease-out-expo)',...(label||hint||error?{}:style)}}>
      {icon?<span style={{paddingLeft:14,color:'var(--text-tertiary)'}}><Icon name={icon} size={16}/></span>:null}
      {prefix?<span style={{paddingLeft:14,color:'var(--text-secondary)',fontSize:14}}>{prefix}</span>:null}
      <input id={id} onFocus={(e)=>{setFocus(true);onFocus&&onFocus(e);}} onBlur={(e)=>{setFocus(false);onBlur&&onBlur(e);}}
        style={{flex:1,minWidth:0,height:'100%',background:'transparent',border:0,outline:'none',color:'var(--text-primary)',fontFamily:'var(--font-body)',fontSize:size==='sm'?13:14,padding:(icon||prefix)?'0 14px 0 8px':'0 14px',...inputStyle}} {...rest}/>
    </div>
  );
  if(!label&&!hint&&!error)return control;
  return <Field label={label} hint={hint} error={error} htmlFor={id} style={style}>{control}</Field>;
}
