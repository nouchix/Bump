function MiniPlayer({track,playing,onToggle,onOpen}){
  const {CoverArt,IconButton,Equalizer}=window.BumpDesignSystem_4e5c17;
  if(!track)return null;
  return (
    <div onClick={onOpen} style={{position:'absolute',left:10,right:10,bottom:94,zIndex:20,height:60,borderRadius:'var(--radius-lg)',background:'rgba(36,36,46,.92)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',
      border:'1px solid var(--border-default)',display:'flex',alignItems:'center',gap:12,padding:'0 8px',cursor:'pointer',boxShadow:'var(--shadow-md)'}}>
      <CoverArt size={44} src={track.coverUrl}/>
      <div style={{flex:1,minWidth:0}}><div style={{display:'flex',alignItems:'center',gap:8}}><span style={{fontSize:14,fontWeight:600}}>{track.title}</span><Equalizer playing={playing} height={10} barWidth={2}/></div><div style={{fontSize:12,color:'var(--text-secondary)'}}>{track.artist}</div></div>
      <span onClick={e=>e.stopPropagation()}><IconButton icon={playing?'pause':'play'} label={playing?'Pause':'Play'} variant="static" size="sm" filled onClick={onToggle}/></span>
    </div>
  );
}
function TabBar({value,onChange}){
  const {Icon}=window.BumpDesignSystem_4e5c17;
  const items=[['home','house','Home'],['search','search','Search'],['library','library','Library'],['studio','audio-lines','Studio']];
  return (
    <div style={{position:'absolute',left:0,right:0,bottom:0,zIndex:20,height:86,paddingBottom:22,background:'rgba(10,10,15,.88)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',borderTop:'1px solid var(--border-subtle)',display:'flex'}}>
      {items.map(([id,ic,lb])=>{const on=value===id;return (
        <button key={id} onClick={()=>onChange(id)} style={{flex:1,background:'none',border:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:4,cursor:'pointer',fontFamily:'inherit',
          color:on?'var(--accent)':'var(--text-tertiary)',fontSize:11,fontWeight:600}}><Icon name={ic} size={22}/>{lb}</button>);})}
    </div>
  );
}
Object.assign(window,{MiniPlayer,TabBar});