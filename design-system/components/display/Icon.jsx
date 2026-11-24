import React from 'react';
const toPascal=(n)=>String(n||'').replace(/(^|[-_ ])(\w)/g,(_,__,c)=>c.toUpperCase());
export function Icon({name,size=20,strokeWidth=2,color='currentColor',fill='none',style,...rest}){
  const lib=typeof window!=='undefined'?window.lucide:null;
  const key=toPascal(name);
  const node=lib&&((lib.icons&&lib.icons[key])||lib[key]);
  let kids=null;
  if(Array.isArray(node)){
    const list=node[0]==='svg'?node[2]:node;
    kids=(list||[]).map(([tag,attrs],i)=>React.createElement(tag,{key:i,...attrs}));
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:'block',flexShrink:0,...style}} {...rest}>{kids}</svg>
  );
}
