/* KAZAY SUSHI — renderização do cardápio (v2 · cards com foto) */

const $ = (sel) => document.querySelector(sel);

/* ---------- Idioma (PT padrão; a escolha persiste no navegador) ---------- */
const IDIOMAS = ["pt", "en", "es", "fr", "de", "ko", "ja"];
let idioma = localStorage.getItem("kazay-idioma") || "pt";
if (!IDIOMAS.includes(idioma)) idioma = "pt";

function tr(pt) { // string dinâmica: PT-BR como chave, fallback p/ o original
  if (idioma === "pt") return pt;
  const d = I18N[idioma];
  return d && d.text && Object.prototype.hasOwnProperty.call(d.text, pt) ? d.text[pt] : pt;
}

/* Textos originais em PT, capturados no load — servem para restaurar ao voltar ao português */
const TEXTOS_PT = new Map();
document.querySelectorAll("[data-i18n]").forEach((el) => TEXTOS_PT.set(el, el.textContent));

function aplicarEstatico() { // textos fixos do HTML via data-i18n
  document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
  if (idioma === "pt") { // restaura o PT original (pode ter ficado em outro idioma)
    document.title = "Kazay Sushi — Rodízio & À la Carte";
    TEXTOS_PT.forEach((txt, el) => { el.textContent = txt; });
    return;
  }
  const ui = I18N[idioma].ui;
  document.title = I18N[idioma].title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (ui[el.dataset.i18n]) el.textContent = ui[el.dataset.i18n];
  });
}

/* ---------- Card de item ---------- */
function cardItem(it, { preco = true, badge = false } = {}) {
  const fig = document.createElement("figure");
  fig.className = "item" + (it.f ? "" : " sem-foto") + (it.f && it.f2 ? " duas-fotos" : "");

  if (it.f) {
    const area = document.createElement("div"); // crossfade só dentro da área da foto
    area.className = "foto-area";
    const img = new Image();
    img.src = `assets/fotos/${it.f}.jpg`;
    img.alt = it.n;
    img.loading = "lazy";
    area.appendChild(img);
    if (it.f2) { // segunda foto, alternando em crossfade
      const img2 = new Image();
      img2.className = "foto-b";
      img2.src = `assets/fotos/${it.f2}.jpg`;
      img2.alt = "";
      img2.loading = "lazy";
      area.appendChild(img2);
    }
    fig.appendChild(area);
  }

  const cap = document.createElement("figcaption");
  if (badge) {
    const b = document.createElement("span");
    b.className = "badge-premium";
    b.textContent = tr("Premium");
    cap.appendChild(b);
  }
  if (it.top && it.f) { // selo discreto só em cards com foto
    const t = document.createElement("span");
    t.className = "badge-top";
    t.textContent = tr("Mais pedido");
    cap.appendChild(t);
  }
  const nome = document.createElement("span");
  nome.className = "item-nome";
  nome.textContent = it.n;
  cap.appendChild(nome);

  if (it.precos) { // item com mais de um preço (ex.: Sashimi 10/20 fatias)
    it.precos.forEach((pr) => {
      const linha = document.createElement("span");
      linha.className = "preco-linha";
      if (pr.d) {
        const d = document.createElement("span");
        d.className = "item-desc";
        d.textContent = tr(pr.d);
        linha.appendChild(d);
      }
      const p = document.createElement("span");
      p.className = "item-preco";
      p.textContent = `R$ ${pr.p}`;
      linha.appendChild(p);
      cap.appendChild(linha);
    });
  } else {
    if (preco && it.p) {
      const p = document.createElement("span");
      p.className = "item-preco";
      p.textContent = `R$ ${it.p}`;
      cap.appendChild(p);
    }
    if (it.d) {
      const d = document.createElement("span");
      d.className = "item-desc";
      d.textContent = tr(it.d);
      cap.appendChild(d);
    }
  }

  fig.appendChild(cap);
  return fig;
}

function grade(el, itens, opts = {}) {
  el.innerHTML = "";
  // quem tem foto vai primeiro; sem foto, pro fim (ordem interna preservada); itens ocultos não renderizam
  const visiveis = itens.filter((i) => !i.oculto);
  const ordenados = [...visiveis.filter((i) => i.f), ...visiveis.filter((i) => !i.f)];
  ordenados.forEach((it) => el.appendChild(cardItem(it, opts)));
}

/* ---------- Rodízio ---------- */
function renderRodizio() {
  const planos = $("#planos");
  planos.innerHTML = "";
  CARDAPIO.rodizio.planos.forEach((pl) => {
    const div = document.createElement("div");
    div.className = "plano";
    const h = document.createElement("h4");
    h.textContent = tr(pl.periodo);
    div.appendChild(h);
    pl.itens.forEach((it) => {
      const li = document.createElement("div");
      li.className = "linha-item";
      li.innerHTML = `<span class="nome"></span><span class="pontos"></span><span class="preco">R$ ${it.p}</span>`;
      li.querySelector(".nome").textContent = tr(it.n);
      div.appendChild(li);
    });
    planos.appendChild(div);
  });

  const t = CARDAPIO.rodizio.tradicional;
  grade($("#trad-frios"), t.frios, { preco: false });
  grade($("#trad-temakis"), t.temakis, { preco: false });
  grade($("#trad-quentes"), t.quentes, { preco: false });

  /* Premium: apenas os exclusivos (o restante já está incluído — ver nota no HTML) */
  grade($("#premium-grade"), CARDAPIO.rodizio.premiumExtras, { preco: false, badge: true });
}

/* ---------- À la carte ---------- */
function renderAlacarte() {
  const raiz = $("#grupos-alacarte");
  raiz.innerHTML = "";
  CARDAPIO.alacarte.forEach((grupo) => {
    const g = document.createElement("div");
    g.className = "grupo";
    const h = document.createElement("h3");
    h.textContent = tr(grupo.titulo);
    g.appendChild(h);
    const gr = document.createElement("div");
    gr.className = "grade";
    grade(gr, grupo.itens);
    g.appendChild(gr);
    if (grupo.nota) {
      const n = document.createElement("p");
      n.className = "nota";
      n.textContent = tr(grupo.nota);
      g.appendChild(n);
    }
    raiz.appendChild(g);
  });
}

/* ---------- Sobremesas & Bebidas (nos dois menus) ---------- */
function renderExtras() {
  grade($("#sob-rodizio"), CARDAPIO.sobremesas, { preco: false }); // sem preço no rodízio
  grade($("#sob-alacarte"), CARDAPIO.sobremesas);

  const renderBebidas = (el) => {
    el.innerHTML = "";
    CARDAPIO.bebidas.forEach((grupo) => {
      const g = document.createElement("div");
      g.className = "grupo";
      const h = document.createElement("h3");
      h.textContent = tr(grupo.titulo);
      g.appendChild(h);
      const gr = document.createElement("div");
      gr.className = "grade grade-bebidas";
      grade(gr, grupo.itens);
      g.appendChild(gr);
      el.appendChild(g);
    });
  };
  renderBebidas($("#beb-rodizio"));
  renderBebidas($("#beb-alacarte"));
}

/* ---------- Inicialização + troca de idioma ---------- */
function renderTudo() {
  aplicarEstatico();
  renderRodizio();
  renderAlacarte();
  renderExtras();
}
/* Dropdown de idioma: fechado mostra só a bandeira; aberto, bandeira + sigla */
const selIdioma = document.getElementById("sel-idioma");
const btnIdioma = selIdioma.querySelector(".sel-idioma-btn");
const menuIdioma = selIdioma.querySelector(".sel-idioma-menu");
const flagIdioma = selIdioma.querySelector(".sel-idioma-flag");
function atualizarBandeira() {
  if (flagIdioma) flagIdioma.src = `assets/bandeiras/${IDIOMAS.includes(idioma) ? idioma : "pt"}.svg`;
  menuIdioma.querySelectorAll("li").forEach((li) => li.classList.toggle("ativo", li.dataset.id === idioma));
}
function fecharMenu() { menuIdioma.hidden = true; btnIdioma.setAttribute("aria-expanded", "false"); }
btnIdioma.addEventListener("click", (e) => {
  e.stopPropagation();
  const aberto = !menuIdioma.hidden;
  menuIdioma.hidden = aberto;
  btnIdioma.setAttribute("aria-expanded", String(!aberto));
});
menuIdioma.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    idioma = li.dataset.id;
    localStorage.setItem("kazay-idioma", idioma);
    atualizarBandeira();
    fecharMenu();
    renderTudo();
  });
});
document.addEventListener("click", (e) => { if (!selIdioma.contains(e.target)) fecharMenu(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharMenu(); });

/* Sincronização ao vivo: idioma trocado em outro tab (ex.: index) aplica aqui */
window.addEventListener("storage", (e) => {
  if (e.key !== "kazay-idioma") return;
  idioma = IDIOMAS.includes(e.newValue) ? e.newValue : "pt";
  atualizarBandeira();
  renderTudo();
});

atualizarBandeira();
renderTudo();

/* ---------- Capas dos cards: rotação de fotos (~3s cada, como a institucional) ---------- */
(function capas() {
  const pares = [
    ["capa-rodizio", CARDAPIO.capas.rodizio],
    ["capa-alacarte", CARDAPIO.capas.alacarte]
  ];
  pares.forEach(([id, fotos]) => {
    const el = document.getElementById(id);
    if (!el || !fotos) return;
    const imgs = fotos.map((f, i) => {
      const img = new Image();
      img.src = `assets/capas/${f}.jpg`; // versão HD (1920px) só p/ as capas dos cards
      img.alt = "";
      if (i > 0) img.loading = "lazy";
      el.appendChild(img);
      return img;
    });
    let atual = 0;
    imgs[0].classList.add("ativa");
    setInterval(() => {
      imgs[atual].classList.remove("ativa");
      atual = (atual + 1) % imgs.length;
      imgs[atual].classList.add("ativa");
    }, 3000);
  });
})();

/* ---------- Institucional: rotação de fotos (~3s cada) ---------- */
(function institucional() {
  const el = $("#institucional-fotos");
  if (!el || !CARDAPIO.fotosInstitucional) return;
  const imgs = CARDAPIO.fotosInstitucional.map((f, i) => {
    const img = new Image();
    img.src = `assets/fotos-institucional/${f}.jpg`; // versão HD (1920px) só p/ este carrossel
    img.alt = "";
    if (i > 0) img.loading = "lazy";
    el.appendChild(img);
    return img;
  });
  let atual = 0;
  imgs[0].classList.add("ativa");
  setInterval(() => {
    imgs[atual].classList.remove("ativa");
    atual = (atual + 1) % imgs.length;
    imgs[atual].classList.add("ativa");
  }, 3000);
})();

/* ---------- Revelar menus ao clicar no card ---------- */
const menus = { rodizio: $("#menu-rodizio"), alacarte: $("#menu-alacarte") };
let aberto = null;

function abrir(nome) {
  const alvo = nome === aberto ? null : nome; // clicar de novo fecha
  document.querySelectorAll(".card").forEach((c) => {
    const ativo = c.dataset.menu === alvo;
    c.classList.toggle("ativo", ativo);
    c.setAttribute("aria-expanded", String(ativo));
  });
  for (const [k, sec] of Object.entries(menus)) {
    const visivel = k === alvo;
    sec.classList.toggle("oculta", !visivel);
    sec.setAttribute("aria-hidden", String(!visivel));
  }
  aberto = alvo;
  if (alvo) setTimeout(() => menus[alvo].scrollIntoView({ behavior: "smooth" }), 80);
}

document.querySelectorAll("[data-menu]").forEach((el) => {
  el.addEventListener("click", () => abrir(el.dataset.menu));
});
document.querySelectorAll(".card").forEach((c) => {
  c.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrir(c.dataset.menu);
    }
  });
});
