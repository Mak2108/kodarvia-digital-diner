export function Footer() {
  return <footer className="site-footer"><div className="page-width flex flex-col items-center justify-between gap-4 sm:flex-row"><a className="wordmark" href="#presentacion">Kodarvia<span className="text-primary">.</span></a><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Kodarvia. Hecho con calma y cariño.</p><a href="#presentacion" className="text-xs text-muted-foreground transition-colors hover:text-primary">Volver arriba ↑</a></div></footer>;
}
