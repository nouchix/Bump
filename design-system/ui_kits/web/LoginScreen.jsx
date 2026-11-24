function LoginScreen(){
  const {Card,Button,Input,Divider,Alert}=window.BumpDesignSystem_4e5c17;
  const [email,setEmail]=React.useState('');
  const [sent,setSent]=React.useState(false);
  const [loading,setLoading]=React.useState(false);
  const submit=(e)=>{e.preventDefault();if(!email)return;setLoading(true);setTimeout(()=>{setLoading(false);setSent(true);},900);};
  return (
    <div style={{maxWidth:448,margin:'0 auto',padding:'48px 0'}}>
      <Card padding={32} style={{textAlign:'center',borderRadius:'var(--radius-xl)'}}>
        <h1 style={{margin:'0 0 8px',fontSize:24,fontWeight:700,letterSpacing:'-0.02em'}}>Welcome to Bump</h1>
        <p style={{margin:'0 0 24px',fontSize:12,color:'var(--text-secondary)'}}>Sign in to stream, support artists, or upload your own catalogue.</p>
        <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:24}}>
          <Button fullWidth icon="music" style={{background:'#1DB954',color:'#000'}}>Continue with Spotify</Button>
          <Button fullWidth variant="secondary">Continue with Google</Button>
        </div>
        <Divider label="Or with email" style={{marginBottom:24}}/>
        {sent?(
          <Alert tone="success">Login link sent to <strong>{email}</strong>. Check your inbox.</Alert>
        ):(
          <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input type="email" required placeholder="name@domain.com" value={email} onChange={e=>setEmail(e.target.value)}/>
            <Button type="submit" fullWidth icon="mail" loading={loading}>{loading?'Sending link…':'Send magic link'}</Button>
          </form>
        )}
      </Card>
    </div>
  );
}
window.LoginScreen=LoginScreen;