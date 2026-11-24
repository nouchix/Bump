function App(){
  const {AppHeader,PlayerBar,Toast}=window.BumpDesignSystem_4e5c17;
  const initial=(location.hash||'#home').slice(1);
  const [page,setPage]=React.useState(['home','login','upload','consent'].includes(initial)?initial:'home');
  const [tracks,setTracks]=React.useState(window.BUMP_TRACKS);
  const [current,setCurrent]=React.useState(null);
  const [playing,setPlaying]=React.useState(false);
  const [time,setTime]=React.useState(0);
  const [toast,setToast]=React.useState(null);
  const go=(p)=>{setPage(p);location.hash=p;window.scrollTo(0,0);};
  React.useEffect(()=>{if(!playing)return;const id=setInterval(()=>setTime(t=>{const d=(current&&current.duration)||200;return t+1>=d?0:t+1;}),1000);return()=>clearInterval(id);},[playing,current]);
  React.useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(null),3600);return()=>clearTimeout(id);},[toast]);
  const play=(t)=>{if(current&&current.id===t.id){setPlaying(p=>!p);}else{setCurrent(t);setTime(0);setPlaying(true);}};
  const buy=(t)=>setToast({icon:'shopping-cart',title:'Checkout opened',message:'$'+(t.priceCents/100).toFixed(2)+' goes straight to '+t.artist+'.'});
  const publish=({title,priceCents})=>{const t={id:'n'+Date.now(),title,artist:'You',priceCents,duration:198};setTracks(ts=>[t,...ts]);go('home');setToast({icon:'radio',title:"It's live. Go tell people.",action:'Share'});};
  return (
    <div style={{minHeight:'100vh',paddingBottom:current?96:24}}>
      <AppHeader onNavigate={go}/>
      <main style={{maxWidth:1280,margin:'0 auto',padding:'32px 24px'}}>
        {page==='home'?<HomeScreen tracks={tracks} currentId={current&&current.id} playing={playing} onPlay={play} onBuy={buy} onNavigate={go}/>:null}
        {page==='login'?<LoginScreen/>:null}
        {page==='upload'?<UploadScreen onPublish={publish}/>:null}
        {page==='consent'?<ConsentScreen onNavigate={go}/>:null}
      </main>
      {toast?<div style={{position:'fixed',right:24,bottom:current?104:24,zIndex:60}}><Toast {...toast} onClose={()=>setToast(null)}/></div>:null}
      <PlayerBar fixed track={current} playing={playing} currentTime={time} duration={current&&current.duration} onToggle={()=>setPlaying(p=>!p)} onSeek={setTime} onBuy={()=>buy(current)}/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);