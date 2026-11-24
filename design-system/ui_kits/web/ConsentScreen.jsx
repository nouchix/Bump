function ConsentScreen({onNavigate}){
  const {Dialog,Button}=window.BumpDesignSystem_4e5c17;
  return (
    <div style={{padding:'64px 0',display:'flex',justifyContent:'center'}}>
      <Dialog inline width={448} icon="shield-check" title="Authorize third-party app"
        description={<span>An application (<code style={{color:'var(--signal-300)',fontFamily:'var(--font-mono)'}}>studio-sync</code>) is requesting access to your Bump account.</span>}
        actions={<><Button variant="secondary" size="sm" style={{flex:1}} onClick={()=>onNavigate('home')}>Cancel</Button><Button size="sm" style={{flex:1}} onClick={()=>onNavigate('home')}>Authorize</Button></>}>
        <div style={{background:'var(--bg-app)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)',padding:16,textAlign:'left',fontSize:12}}>
          <span style={{display:'block',fontWeight:600,color:'var(--ink-300)',marginBottom:4}}>Requested permissions</span>
          <span style={{color:'var(--text-secondary)'}}>profile email</span>
        </div>
      </Dialog>
    </div>
  );
}
window.ConsentScreen=ConsentScreen;