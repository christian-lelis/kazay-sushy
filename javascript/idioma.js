/* ============================================================
   KAZAY SUSHI — Idioma do index (PT/EN/ES/FR/DE/KO/JA)
   Sincronizado com o cardápio pela chave localStorage
   "kazay-idioma": a escolha persiste entre as páginas e é
   aplicada ao vivo nos outros tabs abertos (evento storage).
   PT é o original do HTML; nomes dos pratos permanecem como
   impressos no cardápio.
   ============================================================ */

const IDIOMAS = ["pt", "en", "es", "fr", "de", "ko", "ja"];
let idioma = localStorage.getItem("kazay-idioma") || "pt";
if (!IDIOMAS.includes(idioma)) idioma = "pt";

const TR = {
  en: {
    nav_home: "Home",
    nav_cardapio: "Menu",
    nav_sobre: "About",
    nav_contatos: "Contact",
    nav_pedir: "Order",
    hero_tagline: "Here, Japanese food has flavor.",
    mais_pedidos: "Most ordered",
    ver_cardapio: "See the menu",
    ver_cardapio_completo: "See the full menu",
    como_pedir_titulo: "How to order",
    como_pedir_texto: "Order online through iFood or 99 Food and get it delivered to your door.",
    btn_ifood: "Order on iFood",
    btn_99food: "Order on 99 Food",
    como_pedir_nota: "Delivery in Vila Madalena and nearby areas · (11) 3034-5582",
    sobre_label: "Since 2019",
    sobre_p1: "Kazay was born in Vila Madalena in 2019 with a stubborn mission: to prove that Japanese food has flavor.",
    sobre_p2: "Every dish is built fresh on the day, with fresh fish and real technique — from nigiri to temaki. It's the kind of japa that makes even lifelong skeptics come back for more.",
    sobre_h3: 'A warning to all who don\'t like Japanese food:<br>Be careful — don\'t come to Kazay Sushi!<br>! ! <span class="text_span">Because once you\'re here, falling in love is dangerous 😏</span> ! !',
    credit: "Designed and created by Christian Lelis"
  },
  es: {
    nav_home: "Inicio",
    nav_cardapio: "Menú",
    nav_sobre: "Nosotros",
    nav_contatos: "Contacto",
    nav_pedir: "Pedir",
    hero_tagline: "Aquí, la comida japonesa tiene sabor.",
    mais_pedidos: "Los más pedidos",
    ver_cardapio: "Ver el menú",
    ver_cardapio_completo: "Ver el menú completo",
    como_pedir_titulo: "Cómo pedir",
    como_pedir_texto: "Pide en línea por iFood o 99 Food y recíbelo en tu puerta.",
    btn_ifood: "Pedir en iFood",
    btn_99food: "Pedir en 99 Food",
    como_pedir_nota: "Entrega en Vila Madalena y alrededores · (11) 3034-5582",
    sobre_label: "Desde 2019",
    sobre_p1: "Kazay nació en Vila Madalena en 2019 con una misión terca: demostrar que la comida japonesa tiene sabor.",
    sobre_p2: "Cada plato se arma el mismo día, con pescado fresco y técnica de verdad — del nigiri al temaki. Es el japa que hace volver incluso a los escépticos de toda la vida.",
    sobre_h3: 'Una advertencia para todos los que no les gusta la comida japonesa:<br>Cuidado — ¡no vengas a Kazay Sushi!<br>! ! <span class="text_span">Porque una vez aquí, enamorarse es peligroso 😏</span> ! !',
    credit: "Diseñado y creado por Christian Lelis"
  },
  fr: {
    nav_home: "Accueil",
    nav_cardapio: "Carte",
    nav_sobre: "À propos",
    nav_contatos: "Contacts",
    nav_pedir: "Commander",
    hero_tagline: "Ici, la cuisine japonaise a du goût.",
    mais_pedidos: "Les plus commandés",
    ver_cardapio: "Voir la carte",
    ver_cardapio_completo: "Voir la carte complète",
    como_pedir_titulo: "Comment commander",
    como_pedir_texto: "Commandez en ligne via iFood ou 99 Food et recevez à la maison.",
    btn_ifood: "Commander sur iFood",
    btn_99food: "Commander sur 99 Food",
    como_pedir_nota: "Livraison à Vila Madalena et environs · (11) 3034-5582",
    sobre_label: "Depuis 2019",
    sobre_p1: "Le Kazay est né en 2019 à Vila Madalena avec une mission têtue : prouver que la cuisine japonaise a du goût.",
    sobre_p2: "Chaque plat est monté le jour même, avec du poisson frais et de vraies techniques — du nigiri au temaki. C'est le japa qui fait revenir même ceux qui n'ont jamais aimé.",
    sobre_h3: 'Attention à tous ceux qui n\'aiment pas le japa :<br>Gardez-vous bien d\'entrer au Kazay Sushi !<br>! ! <span class="text_span">Car si vous venez, il est dangereux de s\'y prendre de passion 😏</span> ! !',
    credit: "Conçu et créé par Christian Lelis"
  },
  de: {
    nav_home: "Start",
    nav_cardapio: "Karte",
    nav_sobre: "Über uns",
    nav_contatos: "Kontakt",
    nav_pedir: "Bestellen",
    hero_tagline: "Hier hat japanisches Essen Geschmack.",
    mais_pedidos: "Die meistbestellten",
    ver_cardapio: "Karte ansehen",
    ver_cardapio_completo: "Ganze Karte ansehen",
    como_pedir_titulo: "So bestellen Sie",
    como_pedir_texto: "Bestellen Sie online über iFood oder 99 Food und lassen Sie sich nach Hause liefern.",
    btn_ifood: "Über iFood bestellen",
    btn_99food: "Über 99 Food bestellen",
    como_pedir_nota: "Lieferung in Vila Madalena und Umgebung · (11) 3034-5582",
    sobre_label: "Seit 2019",
    sobre_p1: "Kazay wurde 2019 in Vila Madalena mit einer sturen Mission gegründet: zu beweisen, dass japanisches Essen Geschmack hat.",
    sobre_p2: "Jedes Gericht wird am Tag frisch zubereitet — mit frischem Fisch und echter Technik, vom Nigiri bis zum Temaki. Das ist das Japa, bei dem selbst Skeptiker wiederkommen.",
    sobre_h3: 'Warnung an alle, die japanisches Essen nicht mögen:<br>Vorsicht — kommt besser nicht ins Kazay Sushi!<br>! ! <span class="text_span">Denn wer einmal da ist, dem droht Verliebtheit 😏</span> ! !',
    credit: "Entwickelt und erstellt von Christian Lelis"
  },
  ko: {
    nav_home: "홈",
    nav_cardapio: "메뉴",
    nav_sobre: "소개",
    nav_contatos: "연락처",
    nav_pedir: "주문",
    hero_tagline: "여기서 일본 음식은 맛이 있습니다.",
    mais_pedidos: "가장 많이 주문한 메뉴",
    ver_cardapio: "전체 메뉴 보기",
    ver_cardapio_completo: "전체 메뉴 보기",
    como_pedir_titulo: "주문 방법",
    como_pedir_texto: "iFood 또는 99 Food로 온라인 주문하시면 집까지 배달해 드립니다.",
    btn_ifood: "iFood에서 주문하기",
    btn_99food: "99 Food에서 주문하기",
    como_pedir_nota: "빌라 마달레나 및 인근 지역 배달 · (11) 3034-5582",
    sobre_label: "2019년부터",
    sobre_p1: "카자는 2019년 빌라 마달레나에서 고집스러운 미션과 함께 시작되었습니다. 일본 음식에도 맛이 있다는 것을 증명하기 위해서요.",
    sobre_p2: "모든 메뉴는 그날의 신선한 생선과 제대로 된 기술로 만들어집니다. 니구리부터 테마키까지. 한 번도 좋아하지 않았던 사람조차 다시 주문하게 만드는 맛입니다.",
    sobre_h3: '일본 음식을 안 좋아하시는 모든 분께 경고합니다:<br>카자 스시에 오시면 조심하세요!<br>! ! <span class="text_span">오셨다가 반하게 될 위험이 있으니까요 😏</span> ! !',
    credit: "디자인 및 제작: Christian Lelis"
  },
  ja: {
    nav_home: "ホーム",
    nav_cardapio: "メニュー",
    nav_sobre: "店舗について",
    nav_contatos: "お問い合わせ",
    nav_pedir: "注文",
    hero_tagline: "ここでは、和食に味があります。",
    mais_pedidos: "人気の一品",
    ver_cardapio: "メニューを見る",
    ver_cardapio_completo: "全メニューを見る",
    como_pedir_titulo: "ご注文方法",
    como_pedir_texto: "iFoodまたは99Foodでオンラインご注文いただければ、お宅までお届けします。",
    btn_ifood: "iFoodで注文する",
    btn_99food: "99Foodで注文する",
    como_pedir_nota: "ヴィラ・マダレーナおよび近隣エリアへ配達 · (11) 3034-5582",
    sobre_label: "2019年から",
    sobre_p1: "カザースシは2019年、ヴィラ・マダレーナでひとつの意地を込めて生まれました。「和食には味がない」という常識を覆すために。",
    sobre_p2: "すべての料理はその日仕込み、新鮮な魚と確かな技術で仕上げます。握りから手巻きまで。一度も好きではなかった人が、また注文したくなる——そんな和食です。",
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
