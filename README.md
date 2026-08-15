# PRECEPTA Landing V3.1 — Image Quality & Framing Fix

Esta versão preserva a arquitetura da V3 e corrige especificamente o uso dos assets visuais canônicos.

## Correções
- Hero deixou de ampliar e recortar uma imagem pequena em full-bleed.
- Composição de grupo horizontal usa um recorte maior do Group Pack canônico.
- Mobile usa a composição vertical própria.
- Cards dos preceptores usam recortes maiores dos Character Masters.
- `object-fit: cover` foi removido dos personagens em áreas críticas.
- Logo usa `contain`, sem deformação/crop.
- Sofia em longitudinalidade e login permanece integralmente visível.
- Key art do CTA final passa a ser contida, não cortada.

## Páginas
- `index.html`
- `login.html`
- `cadastro.html`

## Observação
Os assets ainda são raster derivados dos boards canônicos enviados. Para qualidade máxima em produção futura, o ideal será substituir cada recorte pelos PNGs individuais de alta resolução/transparentes dos Asset Packs originais, quando esses arquivos existirem como assets separados.
