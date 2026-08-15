# Como publicar no GitHub

Repositório: `patriciacarvalhocorrea-ai/precepta_mvp_8`

## Estrutura que deve existir na raiz

```text
/
├── index.html
├── styles.css
├── README.md
├── .nojekyll
└── assets/
    ├── precepta-logo-primary-canonical.png
    └── precepta-team-canonical.jpg
```

## Pelo site do GitHub

1. Abra o repositório `precepta_mvp_8`.
2. Clique em **Add file → Upload files**.
3. Arraste para a área de upload **todo o conteúdo desta pasta**, mantendo a pasta `assets`.
4. Se o GitHub informar que `index.html`, `styles.css` e `README.md` já existem, substitua-os pela versão deste pacote.
5. Confirme o commit na branch `main`.
6. Vá em **Settings → Pages**.
7. Em **Build and deployment**, escolha **Deploy from a branch**.
8. Selecione `main` e `/ (root)` e clique em **Save**.
9. Aguarde o GitHub gerar a URL pública.

## Importante

Não renomeie a pasta `assets` nem os dois arquivos de imagem.
Os caminhos usados pelo `index.html` dependem exatamente desses nomes.
