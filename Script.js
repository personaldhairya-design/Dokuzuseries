:root{
  --bg:#080808; --card:#121212; --accent:#e50914; --muted:#9aa0a6; --glass: rgba(255,255,255,0.03);
}
*{box-sizing:border-box}
body{
  margin:0;font-family:Inter, system-ui, Arial, sans-serif;background:var(--bg);color:#fff;
  display:flex;flex-direction:column;height:100vh;
}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:12px 18px;background:#0b0b0b;border-bottom:1px solid #111}
.brand{font-weight:800;color:var(--accent);font-size:18px}
.top-actions{display:flex;gap:8px;align-items:center}
.btn{background:var(--accent);color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer}
.btn.small{padding:6px 8px;font-size:12px}
.btn.alt{background:transparent;border:1px solid rgba(255,255,255,0.06)}
.container{flex:1;display:flex;overflow:hidden}
.card{background:linear-gradient(180deg,var(--card),#0d0d0d);padding:16px;border-radius:12px;margin:10px}
.hidden{display:none}
.auth{max-width:420px;margin:40px auto}
.auth input{width:100%;padding:10px;margin:8px 0;border-radius:8px;border:1px solid #222;background:#090909;color:#fff}
.row{display:flex;gap:8px;justify-content:center;align-items:center}
.muted{color:var(--muted)}
.container .sidebar{width:220px;padding:16px;border-right:1px solid #0f0f0f;background:linear-gradient(180deg,#0b0b0b,#060606)}
.profile{padding:10px;border-radius:8px;background:var(--glass);margin-bottom:12px}
.nav{display:flex;flex-direction:column;gap:8px}
.nav-btn{background:transparent;border:none;color:#cfcfcf;padding:10px 8px;text-align:left;border-radius:6px;cursor:pointer}
.nav-btn:hover{background:#0f0f0f}
.content{flex:1;padding:18px;overflow:auto}
.view{display:none}
.view.active{display:block}
.grid{display:flex;flex-wrap:wrap;gap:12px}
.tile{background:#121212;width:180px;border-radius:10px;padding:8px;cursor:pointer}
.tile img{width:100%;height:110px;object-fit:cover;border-radius:8px}
.small{font-size:12px}
.admin-row{display:flex;gap:12px;flex-wrap:wrap}
.admin-row > .card{flex:1;min-width:260px}
#adminTitlesList .titleItem{padding:8px;border-radius:8px;background:rgba(255,255,255,0.02);margin-bottom:8px}
.modal{position:fixed;inset:0;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.6);z-index:80}
.modal-body{background:#0c0c0c;padding:18px;border-radius:10px;max-width:920px;width:95%}
.footer{padding:10px;text-align:center;background:#080808;border-top:1px solid #0b0b0b;color:var(--muted)}
input,select{background:#0b0b0b;border:1px solid #1a1a1a;padding:8px;border-radius:8px;color:#fff}
label{display:block;margin-top:8px;font-size:13px;color:var(--muted)}
