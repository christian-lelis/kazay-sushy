# Kazay Sushi — Site

## Estrutura
- `index.html` — landing page (tráfego do Google Ads)
- `direction.html` — página de direção/identidade
- `carta.html` — carta antiga em imagens (fallback)
- `cardapio/` — cardápio interativo (autocontido: `css/`, `js/`, `assets/`)
  - `cardapio/tools/` — pipeline de fotos: `fotos.py` regenera `assets/fotos` + `assets/fotos-institucional`; `capas_hd.py` regenera `assets/capas`. Fontes em `D:\cardapio\Fotos zoe kazay delivery`.

## Fluxo de trabalho (git)
- **master** = o que está no ar (GitHub: christian-lelis/kazay-sushy). Checkout principal em `D:\kazay-sushy`.
- **dev** = bancada de trabalho. Esta pasta (`D:\cardapio\Projeto`) é uma worktree fixa da branch `dev` — todo trabalho novo começa aqui.

Ciclo:
1. Trabalhar nesta pasta (branch `dev`), commitando com mensagens claras.
2. Testar localmente: `python -m http.server 8124 --directory D:\cardapio\Projeto` → http://localhost:8124/
3. Quando aprovado, publicar a partir do checkout principal:
   ```
   git -C D:\kazay-sushy merge dev
   git -C D:\kazay-sushy push origin master
   ```
