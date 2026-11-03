/* ============================================================
   KAZAY SUSHI — Idioma do index (PT/EN/FR/DE/KO/JA)
   Sincronizado com o cardápio pela chave localStorage
   "kazay-idioma": a escolha persiste entre as páginas e é
   aplicada ao vivo nos outros tabs abertos (evento storage).
   PT é o original do HTML; nomes dos pratos permanecem como
   impressos no cardápio.
   ============================================================ */

const IDIOMAS = ["pt", "en", "fr", "de", "ko", "ja"];
let idioma = localStorage.getItem("kazay-idioma") || "pt";
if (!IDIOMAS.includes(idioma)) idioma = "pt";

const TR = {
  en: {
    nav_home: "Home",
    nav_cardapio: "Menu",
    nav_sobre: "About",
    nav_contatos: "Contact",
    mais_conhecidos: "Most popular",
    ver_cardapio: "See the menu",
    sobre_p1: "Kazay Sushi was born in 2019 to break the popular belief that Japanese food has no flavor, seeking to deliver the best experience and taste through Japanese cuisine.",
    sobre_p2: "Our dishes are crafted with care, bringing out the flavor of Japanese cuisine even for the most skeptical palates.",
    sobre_h3: 'A warning to all who don\'t like Japanese food:<br>Be careful — don\'t come to Kazay Sushi!<br>! ! <span class="text_span">Because once you\'re here, falling in love is dangerous 😏</span> ! !',
    credit: "Designed and created by Christian Lelis"
  },
  fr: {
    nav_home: "Accueil",
    nav_cardapio: "Carte",
    nav_sobre: "À propos",
    nav_contatos: "Contacts",
    mais_conhecidos: "Les plus connus",
    ver_cardapio: "Voir la carte",
    sobre_p1: "Le Kazay Sushi est né en 2019 pour briser le préjugé selon lequel la cuisine japonaise n'a pas de goût, en quête de la meilleure expérience et des plus belles saveurs grâce à la gastronomie japonaise.",
    sobre_p2: "Nos plats sont élaborés avec soin, pour révéler la saveur de la cuisine japonaise même aux palais les plus sceptiques.",
    sobre_h3: 'Attention à tous ceux qui n\'aiment pas le japa :<br>Gardez-vous bien d\'entrer au Kazay Sushi !<br>! ! <span class="text_span">Car si vous venez, il est dangereux de s\'y prendre de passion 😏</span> ! !',
    credit: "Conçu et créé par Christian Lelis"
  },
  de: {
    nav_home: "Start",
    nav_cardapio: "Karte",
    nav_sobre: "Über uns",
    nav_contatos: "Kontakt",
    mais_conhecidos: "Die Beliebtesten",
    ver_cardapio: "Karte ansehen",
    sobre_p1: "Kazay Sushi wurde 2019 gegründet, um den gängigen Glauben zu widerlegen, japanisches Essen habe keinen Geschmack — mit dem Ziel, das beste Erlebnis und den besten Genuss durch japanische Küche zu bieten.",
    sobre_p2: "Unsere Gerichte werden mit Sorgfalt kreiert — sie bringen den Geschmack der japanischen Küche auch für die skeptischsten Gaumen zur Geltung.",
    sobre_h3: 'Warnung an alle, die japanisches Essen nicht mögen:<br>Vorsicht — kommt besser nicht ins Kazay Sushi!<br>! ! <span class="text_span">Denn wer einmal da ist, dem droht Verliebtheit 😏</span> ! !',
    credit: "Entwickelt und erstellt von Christian Lelis"
  },
  ko: {
    nav_home: "홈",
    nav_cardapio: "메뉴",
    nav_sobre: "소개",
    nav_contatos: "연락처",
    mais_conhecidos: "인기 메뉴",
    ver_cardapio: "전체 메뉴 보기",
    sobre_p1: "카자 스시는 2019년 '일본 음식은 맛이 없다'는 편견을 깨고, 일본 요리로 최고의 경험과 맛을 전하기 위해 시작되었습니다.",
    sobre_p2: "모든 메뉴는 가장 까다로운 미식가도 만족할 수 있도록, 일본 요리의 맛을 살리기 위해 정성껏 만들어집니다.",
    sobre_h3: '일본 음식을 안 좋아하시는 모든 분께 경고합니다:<br>카자 스시에 오시면 조심하세요!<br>! ! <span class="text_span">오셨다가 반하게 될 위험이 있으니까요 😏</span> ! !',
    credit: "디자인 및 제작: Christian Lelis"
  },
  ja: {
    nav_home: "ホーム",
    nav_cardapio: "メニュー",
    nav_sobre: "店舗について",
    nav_contatos: "お問い合わせ",
    mais_conhecidos: "人気メニュー",
    ver_cardapio: "メニューを見る",
    sobre_p1: "カザースシは2019年、「和食には味がない」という固定観念を打ち破り、日本料理で最高の体験と味わいをお届けするために生まれました。",
    sobre_p2: "すべての料理は、最も懐疑的な舌をも満足させられるよう、日本料理の味を引き立てることに心を込めて作られています。",
    sobre_h3: '和食が苦手な方へ、警告します：<br>カザースシに来る際はご注意ください！<br>! ! <span class="text_span">一度来たら、恋に落ちる危険がありますから 😏</span> ! !',
    credit: "デザイン・制作：クリスチャン・レリス"
  }
};

/* Textos originais em PT, capturados no load — servem para restaurar ao voltar ao português */
const ORIGINAIS = new Map();
document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach((el) => {
  ORIGINAIS.set(el, el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent);
});

function aplicar() {
  document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
  if (idioma === "pt") { // restaura o PT original (pode ter ficado em outro idioma)
    ORIGINAIS.forEach((v, el) => {
      el[el.hasAttribute("data-i18n-html") ? "innerHTML" : "textContent"] = v;
    });
    return;
  }
  const t = TR[idioma];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    if (t[el.dataset.i18nHtml]) el.innerHTML = t[el.dataset.i18nHtml];
  });
}

/* Dropdown de idioma: fechado mostra só a bandeira; aberto, bandeira + sigla */
const selIdioma = document.getElementById("sel-idioma");
const btnIdioma = selIdioma.querySelector(".sel-idioma-btn");
const menuIdioma = selIdioma.querySelector(".sel-idioma-menu");
const flagIdioma = selIdioma.querySelector(".sel-idioma-flag");

function atualizarBandeira() {
  if (flagIdioma) flagIdioma.src = `cardapio/assets/bandeiras/${IDIOMAS.includes(idioma) ? idioma : "pt"}.svg`;
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
    aplicar();
  });
});
document.addEventListener("click", (e) => { if (!selIdioma.contains(e.target)) fecharMenu(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharMenu(); });

/* Sincronização ao vivo: idioma trocado em outro tab (cardápio ou index) aplica aqui */
window.addEventListener("storage", (e) => {
  if (e.key !== "kazay-idioma") return;
  idioma = IDIOMAS.includes(e.newValue) ? e.newValue : "pt";
  atualizarBandeira();
  aplicar();
});

atualizarBandeira();
aplicar();
