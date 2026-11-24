import React from 'react';
export function Equalizer({playing=true,bars=5,height=16,color='var(--accent)',barWidth=3,style}){
  const delays=[0,.35,.15,.5,.25,.4,.1];
  return (
    <span aria-hidden="true" style={{display:'inline-flex',alignItems:'flex-end',gap:2,height,...style}}>
      {Array.from({length:bars}).map((_,i)=>(
        <span key={i} style={{width:barWidth,height:'100%',borderRadius:barWidth,background:color,transformOrigin:'bottom',
          transform:playing?undefined:'scaleY(.25)',animation:playing?'bump-eq '+(0.9+(i%3)*0.18)+'s cubic-bezier(.45,0,.55,1) '+delays[i%7]+'s infinite':'none',
          transition:'transform var(--duration-base) var(--ease-out-expo)'}}></span>
      ))}
    </span>
  );
}
