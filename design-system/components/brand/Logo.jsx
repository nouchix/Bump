import React from 'react';
const TONES={dark:{body:'#F5F5F7',pod:'#FF3D5A',text:'#F5F5F7'},light:{body:'#0A0A0F',pod:'#FF3D5A',text:'#0A0A0F'},signal:{body:'#FF3D5A',pod:'#FF3D5A',text:'#FF3D5A'},white:{body:'#F5F5F7',pod:'#F5F5F7',text:'#F5F5F7'},black:{body:'#0A0A0F',pod:'#0A0A0F',text:'#0A0A0F'}};
function Mark({body,pod}){
  return (
    <g>
      <rect x="4.5" y="4.5" width="39" height="71" rx="19.5" fill="none" stroke={body} strokeWidth="5"/>
      <circle cx="21.5" cy="20.5" r="7.5" fill={pod}/>
      <path d="M25.8 25.5 L28.8 35" stroke={pod} strokeWidth="6" strokeLinecap="round"/>
      <g fill="none" stroke={body} strokeWidth="4" strokeLinecap="round">
        <path d="M29.2 62 A6 6 0 0 0 18.8 62"/><path d="M33.53 59.5 A11 11 0 0 0 14.47 59.5"/><path d="M37.86 57 A16 16 0 0 0 10.14 57"/>
      </g>
    </g>
  );
}
export function Logo({variant='horizontal',tone='dark',height=32,title='Bump',style}){
  const c=TONES[tone]||TONES.dark;
  const txt={fontFamily:'var(--font-display)',fontWeight:700};
  if(variant==='mark')return <svg role="img" aria-label={title} viewBox="0 0 48 80" height={height} width={height*0.6} style={{display:'block',...style}}><Mark {...c}/></svg>;
  if(variant==='stacked')return (
    <svg role="img" aria-label={title} viewBox="0 0 160 150" height={height} width={height*160/150} style={{display:'block',...style}}>
      <g transform="translate(56 0)"><Mark {...c}/></g>
      <text x="80" y="144" textAnchor="middle" fontSize="52" letterSpacing="-2" fill={c.text} style={txt}>BUMP</text>
    </svg>);
  if(variant==='wordmark')return (
    <svg role="img" aria-label={title} viewBox="0 0 188 56" height={height} width={height*188/56} style={{display:'block',...style}}>
      <text x="0" y="50" fontSize="68" letterSpacing="-2.72" fill={c.text} style={txt}>BUMP</text>
    </svg>);
  return (
    <svg role="img" aria-label={title} viewBox="0 0 254 80" height={height} width={height*254/80} style={{display:'block',...style}}>
      <Mark {...c}/>
      <text x="62" y="66" fontSize="68" letterSpacing="-2.72" fill={c.text} style={txt}>BUMP</text>
    </svg>);
}
