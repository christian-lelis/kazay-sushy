# -*- coding: utf-8 -*-
"""Gera as 13 capas dos cards em HD (1920px q85) para cardapio/assets/capas.
Reaproveita o índice e a função salvar de fotos.py."""
import os, sys
sys.path.insert(0, r"D:\cardapio\Projeto\cardapio\tools")
from PIL import Image
import fotos

DST = r"D:\cardapio\Projeto\cardapio\assets\capas"
CAPAS = [
    # rodizio (6)
    "niguiri-trufado", "jyo-trufado", "camarao-lula",
    "carpaccio-salmao-trufado", "jyo-chico-cesar", "ceviche",
    # alacarte (7)
    "komb-sushi-kazay", "komb-kazay2", "komb-kazay34", "komb-kazay24",
    "komb-kazay18", "komb-kazay31", "komb-premium",
]

os.makedirs(DST, exist_ok=True)
idx = fotos.indexar()
ok, falha = 0, []
for alvo in CAPAS:
    hits = fotos.achar(idx, fotos.MAP[alvo])
    if len(hits) != 1:
        falha.append((alvo, [os.path.relpath(h, fotos.SRC) for h in hits]))
        continue
    with Image.open(hits[0]) as im:
        fotos.salvar(im, os.path.join(DST, alvo + ".jpg"), w=fotos.W_HI, q=fotos.Q_HI)
    ok += 1
print(f"OK {ok}/{len(CAPAS)}")
for a, h in falha:
    print("FALHA:", a, "->", h if h else "nenhuma fonte")
total = sum(os.path.getsize(os.path.join(DST, f)) for f in os.listdir(DST) if f.endswith(".jpg"))
n = len([f for f in os.listdir(DST) if f.endswith(".jpg")])
print(f"Total em capas/: {total/1024/1024:.1f} MB ({n} arquivos)")
