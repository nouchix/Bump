import React from 'react';
export function Wordmark({size=22,color='var(--text-primary)',style}){
  return <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:size,letterSpacing:'-0.04em',lineHeight:1,color,textTransform:'uppercase',...style}}>Bump</span>;
}
