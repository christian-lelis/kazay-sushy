# -*- coding: utf-8 -*-
"""Copia e otimiza fotos de produto para Projeto/assets/fotos (800px, JPEG q80).
Resolução da fonte por substrings ASCII-safe do nome do arquivo (sem acentos no código)."""
import os, sys
from PIL import Image

SRC = r"D:\cardapio\Fotos zoe kazay delivery"
DST = r"D:\cardapio\Projeto\assets\fotos"
W, Q = 800, 80
FUND = (13, 10, 8)  # fundo p/ flattening de PNGs

# Carrossel da seção institucional: ocupa a tela inteira → versão maior e mais nítida
DST_HI = r"D:\cardapio\Projeto\assets\fotos-institucional"
W_HI, Q_HI = 1920, 85
INSTITUCIONAL = [
    "carpaccio-salmao-trufado", "ceviche", "camarao-lula",
    "komb-kazay2", "komb-submarino", "komb-premium", "komb-kazay34",
    "jhow-limao-siciliano", "uramaki", "hossomaki", "guioza-frita",
    "chapa-camarao", "chapa-shimeji",
    "temaki-salmao-completo", "temaki-atum-completo", "temaki-atum-space",
]

# alvo -> lista de substrings (minúsculas) que o basename deve conter; "==" prefixo = igualdade exata
MAP = {
    "sunomono": ["sunomono"],
    "chapa-shimeji": ["shimeji-na-chapa"],
    "tempura-camarao": ["tempur", "-de-camar"],
    "tempura-legumes": ["tempur", "-de-legumes"],
    "jyo-chico-cesar": ["jow-chico"],
    "carpaccio-salmao-trufado": ["carpaccio", "trufad"],
    "guioza-frita": ["guioza"],
    "ceviche": ["img_0457"],
    "jhow-limao-siciliano": ["jow-de-lim", "sicil"],
    "hot-roll": ["hot-roll"],
    "harumaki": ["harumaki"],
    "carpaccio-salmao-chef": ["carpaccio", "molho"],
    "carpaccio-polvo": ["carpaccio", "polvo"],
    "chapa-camarao": ["camar", "-20-uni"],
    "camarao-lula": ["lula"],
    "gohan": ["gohan"],
    "yakissoba-file-mignon": ["yakissoba", "mign"],
    "yakissoba-frango": ["yaki-de-frango"],
    "yakissoba-misto": ["yakissoba-misto"],
    "yakissoba-vegetariano": ["vejetariano"],
    "sashimi-tataki": ["tataki"],
    "sashimi-salmao-10un": ["sashimi-salm", "10"],
    "niguiri-salmao-10un": ["niguiri-de-salm", "10un"],
    "jhow-maracuja": ["maracuj"],
    "uramaki": ["urakami"],
    "hossomaki": ["hossomaki"],
    "dupla-salmao": ["dupla-de-salm"],
    "jyo-trufado": ["jyo", "trufad"],
    "niguiri-trufado": ["niguiri", "trufad"],
    "temaki-salmao-simples": ["temaki-de-salm", "simples"],
    "temaki-skin": ["skin"],
    "temaki-empanado": ["temaki", "empanad"],
    "temaki-grelhado": ["grelhad"],
    "temaki-atum-completo": ["temaki-de-atum", "complet"],
    "temaki-salmao-completo": ["temaki-de-salm", "complet"],
    "temaki-ebi": ["==temaki-ebi.jpg"],
    "temaki-california": ["california"],
    "temaki-atum-space": ["atum", "space"],
    "temaki-ebi-ten": ["ebi-ten"],
    "temaki-shimeji": ["shimeji-com-cream"],
    "komb-kazay2": ["==kazay-2.jpg"],
    "komb-sushi-kazay": ["==kazay-27.jpg"],
    "komb-kazay34": ["==kazay-34.jpg"],
    "komb-kazay12": ["==kazay-12.jpg"],
    "komb-kazay18": ["==kazay 18.png"],
    "komb-kazay31": ["==combinado-31.jpg"],
    "komb-premium": ["premium"],
    "komb-submarino": ["submarino"],
    "chicken-katsu": ["katsu"],
    "temaki-atum-simples": ["==temaki de atum simples.jpg"],
    "komb-kazay7": ["==kazay-7.jpg"],
    "komb-kazay24": ["==kazay 24.jpg"],
    "dupla-jyo-salmao": ["jyo-de-salm"],
}

def indexar():
    idx = {}
    for raiz, dirs, files in os.walk(SRC):
        dirs[:] = [d for d in dirs if d != "Arquivos-Crus"]
        for f in files:
            if f.lower().endswith((".jpg", ".jpeg", ".png")):
                idx.setdefault(f.lower(), []).append(os.path.join(raiz, f))
    return idx

def achar(idx, chaves):
    hits = []
    for nome, caminhos in idx.items():
        ok = True
        for k in chaves:
            if k.startswith("=="):
                if nome != k[2:]:
                    ok = False; break
            elif k not in nome:
                ok = False; break
        # "chapa-camarao" não pode pegar o camarão-e-lula
        if ok and chaves == ["camar", "-20-uni"] and "lula" in nome:
            ok = False
        if ok:
            hits.extend(caminhos)
    if len(hits) > 1:  # prefere .jpg quando há variantes (ex.: IMG_0457.JPG vs .png)
        jpgs = [h for h in hits if h.lower().endswith((".jpg", ".jpeg"))]
        if jpgs:
            hits = jpgs
    return hits

def salvar(img, path, w=W, q=Q):
    if img.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", img.size, FUND)
        img2 = img.convert("RGBA")
        bg.paste(img2, mask=img2.split()[-1])
        img = bg
    else:
        img = img.convert("RGB")
    h = int(img.height * w / img.width)
    img = img.resize((w, h), Image.LANCZOS)
    img.save(path, "JPEG", quality=q, optimize=True)

def main():
    os.makedirs(DST, exist_ok=True)
    idx = indexar()
    ok, falha = 0, []
    for alvo, chaves in MAP.items():
        hits = achar(idx, chaves)
        if len(hits) != 1:
            falha.append((alvo, [os.path.relpath(h, SRC) for h in hits]))
            continue
        src = hits[0]
        with Image.open(src) as im:
            salvar(im, os.path.join(DST, alvo + ".jpg"))
        ok += 1
    print(f"OK {ok}/{len(MAP)}")
    for a, h in falha:
        print("FALHA:", a, "->", h if h else "nenhuma fonte")
    total = sum(os.path.getsize(os.path.join(DST, f)) for f in os.listdir(DST) if f.endswith(".jpg"))
    print(f"Total em fotos/: {total/1024/1024:.1f} MB ({len([f for f in os.listdir(DST) if f.endswith('.jpg')])} arquivos)")

    # Versão HD do carrossel institucional (mesmas fontes, 1920px q85)
    os.makedirs(DST_HI, exist_ok=True)
    ok_hi = 0
    for alvo in INSTITUCIONAL:
        hits = achar(idx, MAP[alvo])
        if len(hits) != 1:
            print("FALHA HD:", alvo)
            continue
        with Image.open(hits[0]) as im:
            salvar(im, os.path.join(DST_HI, alvo + ".jpg"), w=W_HI, q=Q_HI)
        ok_hi += 1
    total_hi = sum(os.path.getsize(os.path.join(DST_HI, f)) for f in os.listdir(DST_HI) if f.endswith(".jpg"))
    print(f"OK HD {ok_hi}/{len(INSTITUCIONAL)} — fotos-institucional/: {total_hi/1024/1024:.1f} MB")

if __name__ == "__main__":
    main()
