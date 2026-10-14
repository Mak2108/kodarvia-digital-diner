<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep the one-page restaurant experience in the index route with separate section components and hash navigation, because the site is explicitly a single scrolling page.
- Keep the shared contact schema client-safe and submit through a server function with a handler-only privileged client import, because visitors must be able to send messages without accessing stored submissions.
- Keep all visual tokens and section styles in the global stylesheet, because the restaurant identity must stay consistent across sections and screen sizes.
