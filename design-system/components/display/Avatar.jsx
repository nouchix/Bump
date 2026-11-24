import React from 'react';
export function Avatar({src,name='',size=40,verified=false,style}){
  const initials=name.split(' ').map((p)=>p[0]).filter(Boolean).slice(0,2).join('').toUpperCase();
  const ring=verified?3:0;
  return (
    <span style={{display:'inline-flex',width:size,height:size,borderRadius:'50%',padding:ring?2:0,background:verified?'var(--accent-2)':'transparent',flexShrink:0,...style}}>
      <span style={{width:'100%',height:'100%',borderRadius:'50%',overflow:'hidden',background:'var(--ink-800)',border:verified?'2px solid var(--bg-app)':'none',display:'flex',alignItems:'center',justifyContent:'center',
        color:'var(--text-secondary)',fontWeight:700,fontSize:Math.round(size*0.36)}}>
        {src?<img src={src} alt={name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>:initials}
      </span>
    </span>
  );
}
