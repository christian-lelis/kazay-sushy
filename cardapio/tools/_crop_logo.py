# -*- coding: utf-8 -*-
"""Recorta a logo oficial (canvas 6000x6000 com grandes margens transparentes)
e salva em Projeto/assets/logo.png com largura 1280px."""
import os
from PIL import Image

SRC = r"D:\cardapio\Logo.png"
DST = r"D:\cardapio\Projeto\assets\logo.png"

im = Image.open(SRC).convert("RGBA")
b = im.getchannel("A").getbbox()
p = 80  # respiro ao redor do conteúdo
box = (max(0, b[0] - p), max(0, b[1] - p), min(im.width, b[2] + p), min(im.height, b[3] + p))
c = im.crop(box)
w, h = c.size
nw, nh = 1280, int(h * 1280 / w)
c = c.resize((nw, nh), Image.LANCZOS)
c.save(DST)
print("ok", c.size, f"{os.path.getsize(DST)/1024:.0f} KB")
