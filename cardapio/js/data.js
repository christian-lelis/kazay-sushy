/* ============================================================
   KAZAY SUSHI — Dados do cardápio (v2 · cards com foto)
   Fonte: "cardapio da loja" p.1–6 · nomes e preços como impressos.
   Edite aqui; a página lê este arquivo via js/app.js.

   Itens: { n: nome, p: preço (opcional), d: descrição (opcional),
            f: foto em assets/fotos/ (opcional — sem foto vira card de texto) }
   ============================================================ */

const CARDAPIO = {

  rodizio: {
    planos: [
      { periodo: "Almoço · Segunda a Sexta", itens: [
        { n: "Rodízio", p: "99,99" },
        { n: "c/ Camarão", p: "104,99" }
      ]},
      { periodo: "Sábados, Domingos, Feriados e Jantar", itens: [
        { n: "Rodízio c/ Camarão e Lula empanada", p: "114,99" },
        { n: "Rodízio Premium", p: "149,9" }
      ]}
    ],

    /* Tudo que entra no rodízio tradicional (sem os itens premium) */
    tradicional: {
      frios: [
        { n: "Carpaccio de Salmão", f: "carpaccio-salmao-chef" },
        { n: "Ceviche", f: "ceviche" }, // carpaccio voltou para a frente do ceviche (pedido do cliente)
        { n: "Sunomono", f: "sunomono" },
        { n: "Hot Roll Tradicional", f: "hot-roll" }, // na frente do Jow Chico César (pedido do cliente)
        { n: "Jow Chico César", f: "jyo-chico-cesar" },
        { n: "Jow de Limão Siciliano", f: "jhow-limao-siciliano" },
        { n: "Jow de Maracujá", f: "jhow-maracuja" },
        { n: "Hossomakis", f: "hossomaki" },
        { n: "Uramakis", f: "uramaki" },
        { n: "Niguiris", f: "niguiri-salmao-10un" }, // divididos em dois itens (pedido do cliente)
        { n: "Sashimis", f: "sashimi-salmao-10un" },
        { n: "Tataki", f: "sashimi-tataki" },
        { n: "Dupla de Sashimi", f: "dupla-salmao", oculto: true }, // oculta por enquanto (pedido do cliente); ex-"Duplas (exceto Polvo)" — para reativar, tirar o flag
        /* Fazem parte do rodízio, mas não têm foto — ficam no fim do grupo */
        { n: "Camarão empanado", top: true },
        { n: "Lula empanada", top: true }
      ],
      temakis: [
        { n: "Salmão Simples", f: "temaki-salmao-simples", top: true },
        { n: "Salmão Skin", f: "temaki-skin" },
        { n: "Temaki empanado", f: "temaki-empanado" },
        { n: "Salmão Grelhado", f: "temaki-grelhado" },
        { n: "Salmão Spice", f: "temaki-salmao-simples" },
        { n: "Especial Kazay" },
        { n: "Atum Completo", f: "temaki-atum-completo" },
        { n: "Atum Simples", f: "temaki-atum-simples" },
        { n: "Zen Maki" },
        { n: "Salmão Completo", f: "temaki-salmao-completo" },
        { n: "Shimeji", f: "temaki-shimeji" },
        { n: "Temaki Salmão Hot", f: "temaki-empanado" },
        { n: "Califórnia", f: "temaki-california" },
        { n: "Vegetariano" },
        { n: "Tuna Green" },
        { n: "Atum Spice", f: "temaki-atum-space" }
      ],
      quentes: [
        /* Top sellers à frente (lista do cliente) */
        { n: "Gyoza Frita e a Vapor", f: "guioza-frita", top: true },
        { n: "Harumaki", f: "harumaki", top: true },
        { n: "Camarão na Manteiga", f: "chapa-camarao" },
        { n: "Shimeji na Manteiga", f: "chapa-shimeji" },
        { n: "Gohan", f: "gohan" },
        { n: "Tempurá de Legumes", f: "tempura-legumes" },
        { n: "Yakissoba de Frango", f: "yakissoba-frango" },
        { n: "Yakissoba Misto", f: "yakissoba-misto" },
        { n: "Yakissoba Vegetariano", f: "yakissoba-vegetariano" }
      ]
    },

    /* O Premium é cumulativo: tudo do tradicional + estes itens */
    premiumExtras: [
      /* Ordem pela beleza das fotos; Temaki de Camarão fica depois do Yakissoba de Filé Mignon (pedido do cliente) */
      { n: "Carpaccio de Salmão Trufado c/ Flor de Sal", f: "carpaccio-salmao-trufado" },
      { n: "Jyo Trufado", f: "jyo-trufado" },
      { n: "Niguiri Trufado", f: "niguiri-trufado" },
      { n: "Camarão e Lula na Manteiga", f: "camarao-lula" },
      { n: "Tempurá de Camarão", f: "tempura-camarao", oculto: true }, // oculto por enquanto (pedido do cliente) — segue no à la carte
      { n: "Yakissoba de Filé Mignon", f: "yakissoba-file-mignon" },
      { n: "Temaki de Camarão e Empanado", f: "temaki-ebi" },
      { n: "Temaki do Chef" }, // ex-"Do Chef"; movido do tradicional e renomeado (pedido do cliente)
      { n: "Sashimi na Pedra de Sal" },
      { n: "Hot Roll Especial" }
    ]
  },

  alacarte: [
    { titulo: "Entradas", itens: [
      { n: "Missoshiro", p: "15,99" },
      { n: "Sunomono", p: "25,99", f: "sunomono" },
      { n: "Chapa de Camarão e Lula na Manteiga", p: "102,3", f: "camarao-lula" },
      { n: "Chapa de Shimeji", p: "52,3", f: "chapa-shimeji" },
      { n: "Tempurá de Camarão", p: "82,99", f: "tempura-camarao" },
      { n: "Tempurá de Legumes", p: "67,76", f: "tempura-legumes" },
      { n: "Jow Chico César", p: "51,9", d: "(10 unidades)", f: "jyo-chico-cesar" },
      { n: "Carpaccio de Salmão", p: "103,99", d: "(com azeite trufado e flor de sal)", f: "carpaccio-salmao-trufado" },
      { n: "Gyoza Frita ou Vapor", p: "30,4", d: "(6 pastéis recheados com carne bovina)", f: "guioza-frita" },
      { n: "Ceviche", p: "71,99", d: "(salmão em marinado especial do Kazay)", f: "ceviche" },
      { n: "Jhow", p: "51,9", d: "(com molho de limão siciliano · 10 unidades)", f: "jhow-limao-siciliano" },
      { n: "Hot Holl", p: "43,99", d: "(com crispi de couve crocante · 10 unidades)", f: "hot-roll" },
      { n: "Harumaki", p: "30,4", d: "(6 rolinhos recheados acompanhados de molho agrodoce)", f: "harumaki" },
      { n: "Carpaccio de Salmão", p: "92,99", d: "(finas fatias de salmão e limão com molho especial do chef)", f: "carpaccio-salmao-chef" },
      { n: "Polvo Espanhol — Carpaccio", p: "108,99", f: "carpaccio-polvo" },
      { n: "Chapa de Camarão na Manteiga", p: "102,3", f: "chapa-camarao" },
      { n: "Dupla de ovas de massagô", p: "19,36" },
      { n: "Dulpa de Sushi ou Sashimi", p: "13,59", f: "dupla-salmao", f2: "dupla-jyo-salmao" },
      { n: "Dupla de Sushi trufado", p: "25,99", f: "jyo-trufado", f2: "niguiri-trufado" },
      { n: "Dupla de Sushi de Camarão ou Polvo", p: "20,5" }
    ]},

    { titulo: "Combinados", itens: [
      { n: "Kazay 7", p: "66,44", d: "(6 hot roll, 1 temaki de salmão grelhado c/ cream cheese e cebolinha)", f: "komb-kazay7" },
      { n: "Sushi Kazay", p: "99,2", d: "(3 uramaki c/ patê de salmão, 7 hot roll, 4 niguiris, 3 uramakis c/ crispy de couve, 3 uramakis c/ crispy de batata, 3 uramakis c/ cream cheese e cebolinha, 4 niguiri skin)", f: "komb-sushi-kazay" },
      { n: "Kazay 34", p: "87,4", d: "(8 niguiris, 8 uramaki california, 10 hot roll, 8 kanimaki)", f: "komb-kazay34" },
      { n: "Kazay 12", p: "106,7", d: "(10 hot roll, 2 temakis de salmão grelhado c/ cream cheese, empanados na farinha panco)", f: "komb-kazay12" },
      { n: "Kazay 18", p: "114,4", d: "(8 hot rolls crispy de couve, 2 temakis de salmão grelhado c/ cream cheese e cebolinha, empanados na farinha pampa, 8 uramakis)", f: "komb-kazay18" },
      { n: "Kazay 24", p: "105,99", d: "(4 niguiris, 4 sashimis, 4 niguiri skin, 4 uramakis c/ crispy de couve, 4 uramakis c/ crispy de batata, 4 uramakis c/ patê de salmão)", f: "komb-kazay24" },
      { n: "Kazay 31", p: "109,45", d: "(6 sashimis, 4 niguiris, 4 sushi skin, 5 sakemaki, 4 uramakis c/ crispy de couve, 4 uramakis c/ crispy de batata, 4 uramakis c/ patê de salmão)", f: "komb-kazay31" },
      { n: "Combinado Kazay", p: "183,37", d: "(15 sashimis, 8 niguiris, 4 uramakis, 2 jous, 2 bateras e 6 sushis hot holl e 2 sushi de camarão)", f: "komb-kazay2" },
      { n: "Combinado Kazay 1", p: "89", d: "(6 sashimis variados, 2 niguiris peixe branco, 2 jous salmão, 2 uramakis de salmão, 2 hossomakis salmão, 6 hot holls)" },
      { n: "Combinado Submarino 1", p: "119,2", d: "(10 sashimis, 6 niguiris, 4 uramakis, 2 jous, 2 bateras e 6 sushis hot holl)", f: "komb-submarino" },
      { n: "Combinado Mediterrâneo", p: "368,5", d: "(30 sashimis, 12 niguiris, 8 uramakis, 4 jous, 4 bateras e 8 sushis hot holl, 4 sushi de polvo, 4 sushi de camarão e 8 hossomaki)" },
      { n: "Combinado Kazay Especial sem Arroz", p: "198,55", d: "(15 sashimis variados, 4 shakerá, 2 jous, 2 enrolados salmão crispy couve, 2 niguiris salmão, 2 enrolados salmão c/ camarão e 6 hot holls)" },
      { n: "Kazay Vegetariano", p: "103,84", d: "(10 sashimis de fruta da época, 4 uramakis califórnia, 4 uramakis tomate seco, 4 kapamakiss, 6 hot holls shimeji e 4 jous shimeji)" },
      { n: "Kazay Premium", p: "238,26", d: "(15 sashimis variados, 5 sashimis de polvo espanhol, 2 niguiris de camarão, 2 niguiris de polvo, 2 niguiris trufados, 2 jous de ovas e 6 hot rolls especial)", f: "komb-premium" }
    ]},

    { titulo: "Sashimis", itens: [
      { n: "Sashimi", f: "sashimi-salmao-10un", precos: [
        { d: "(10 fatias variadas)", p: "51,66" },
        { d: "(20 fatias variadas)", p: "87,99" }
      ]},
      { n: "Shasimi Tataki", p: "82,4", d: "(15 fatias de salmão e atum no gergelim)", f: "sashimi-tataki" },
      { n: "Sashimi 5 fatias trufado", p: "58,2" },
      { n: "Shasimi de polvo espanhol · 5 fatias", p: "36,3" }
    ]},

    { titulo: "Temakis", itens: [
      { n: "Salmão Simples", p: "37,2", f: "temaki-salmao-simples" },
      { n: "Salmão Skin", p: "35,99", f: "temaki-skin" },
      { n: "Temaki empanado", p: "44,99", f: "temaki-empanado" },
      { n: "Salmão Grelhado", p: "43,2", d: "(salmão grelhado no terê, cream cheese)", f: "temaki-grelhado" },
      { n: "Salmão Spice", p: "43,99", d: "(tabasco e doritos)", f: "temaki-salmao-simples" },
      { n: "Especial Kazay", p: "48,99", d: "(salmão, camarão, rúcula e cream cheese)" },
      { n: "Do Chef", p: "45,99", d: "(salmão em cubos, doritos, cream cheese e shimeji)" },
      { n: "Atum Completo", p: "42,99", d: "(cebola e maionese)", f: "temaki-atum-completo" },
      { n: "Atum Simples", p: "41,99", f: "temaki-atum-simples" },
      { n: "Zen Maki", p: "53,59", d: "(camarão empanado, ovas de massagô e cream cheese)" },
      { n: "Salmão Completo", p: "43,12", f: "temaki-salmao-completo" },
      { n: "Shimeji", p: "32,99", f: "temaki-shimeji" },
      { n: "Temaki Salmão Hot", p: "38,5", f: "temaki-empanado" },
      { n: "Ebi", p: "47,2", d: "(camarão, maionese, alface e pepino)", f: "temaki-ebi" },
      { n: "Califórnia", p: "37", d: "(pepino, manga, kani e alface)", f: "temaki-california" },
      { n: "Vegetariano", p: "44,99", d: "(pepino, tomate seco, rúcula e manga)" },
      { n: "Tuna Green", p: "44", d: "(atum, coube frita e gengibre)" },
      { n: "Atum Spice", p: "45,99", d: "(cebola e maionese)", f: "temaki-atum-space" },
      { n: "Ebi Ten", p: "47,99", d: "(camarão empanado, raspa de limão e cream cheese)", f: "temaki-ebi-ten" },
      { n: "Temaki sem Arroz", p: "50,99", d: "(em cubos completo)" }
    ], nota: "Temakis de Salmão e Atum acompanham dupla de Sushi." },

    { titulo: "Yakissobas", itens: [
      { n: "Yakissoba de Filé Mignon", p: "75,99", f: "yakissoba-file-mignon" },
      { n: "Yakissoba de Frango", p: "63,99", f: "yakissoba-frango" },
      { n: "Yakissoba Misto", p: "68,99", f: "yakissoba-misto" },
      { n: "Yakissoba Vegetariano c/ Shimeji", p: "55", f: "yakissoba-vegetariano" }
    ]},

    { titulo: "Makimonos · 8 unidades", itens: [
      { n: "Niguiri — 10 un.", p: "47,7", f: "niguiri-salmao-10un" },
      { n: "Tekamaki", p: "33,5" },
      { n: "Skin", p: "31,99" },
      { n: "Filadélfia", p: "45,99", d: "(enrolado com salmão grelhado, cream cheese e ovas de massagô)" },
      { n: "Spice Tuna", p: "37,5", d: "(enrolado de atum apimentado)" },
      { n: "Shae Ebi", p: "49,99", d: "(enrolado com camarão e fatia de salmão)" },
      { n: "Ebi Ten", p: "39,5", d: "(enrolado com camarão)" },
      { n: "Pantanal", p: "35", d: "(enrolado de pepino com salmão)" },
      { n: "Charutinho de Salmão — 10 und.", p: "47,7", d: "(com molho de maracujá)", f: "jhow-maracuja" },
      { n: "Hot Holl Especial", p: "48,9", d: "(enrolado frito de salmão com cream cheese, ovas de massagô e kani enrolado em farinha panko)" },
      { n: "Califórnia", p: "31,99", d: "(enrolado de pepino, manga, kani e gergelim)" },
      { n: "Shakemaki", p: "32", f: "hossomaki" },
      { n: "Kappamaki", p: "32" },
      { n: "Uramaki", p: "35,6", d: "(salmão c/ cebolinha)", f: "uramaki" }
    ]},

    { titulo: "Teppan", itens: [
      { n: "Teppan de Salmão", p: "92,99" },
      { n: "Titem Katsu", p: "65,99", f: "chicken-katsu" },
      { n: "Teppan de Frutos do Mar", p: "125" },
      { n: "Teppan de Frango", p: "70,99", d: "(frango, gohan, legumes e missoshiro)" },
      { n: "Teppan de Filé Mignon", p: "103,6" }
    ], nota: "Acompanhamentos: Gohan, Legumes e Shimeji." }
  ],

  sobremesas: [
    { n: "Mousse de Chocolate", p: "25" },
    { n: "Rolinho de Doce de Leite", p: "25" },
    { n: "Frutas da Época", p: "23,5" },
    { n: "Sorvete (2 bolas)", p: "19,9" },
    { n: "Petit Gateau", p: "35" },
    { n: "Creme de Papaia (c/ cassis)", p: "32,99" },
    { n: "Sorvete (1 bola)", p: "11" },
    { n: "Fruta Flambrada do Dia (c/ sorvete de baunilha)", p: "32" }
  ],

  bebidas: [
    { titulo: "Não Alcoólicas", itens: [
      { n: "Água com ou sem gás", p: "9,99" },
      { n: "Refrigerantes", p: "12,99" },
      { n: "Café", p: "9,9" },
      { n: "Italian Soda — Kaly", p: "29,99" },
      { n: "Chás", p: "13,99" },
      { n: "Sucos", p: "15" },
      { n: "Sucos viagem", p: "22,99" },
      { n: "H2O e Citrus", p: "13,99" }
    ]},
    /* Alcoólicas divididas em subgrupos (pedido do cliente); top sellers à frente de cada grupo */
    { titulo: "Cervejas", itens: [
      { n: "Cervejas Heineken", p: "16,89", top: true },
      { n: "Cervejas (Stella e Budweiser)", p: "15,99" },
      { n: "Cerveja Baden Baden", p: "31,3" }
    ]},
    { titulo: "Vinhos & Espumantes", itens: [
      { n: "Tierra Alta Cabernet Sauvignon", p: "110" },
      { n: "Paso Los Valles Sauvignon Blanc", p: "110" },
      { n: "Taça de Espumante", p: "36,9" }
    ]},
    { titulo: "Saquês", itens: [
      { n: "Saquê Nacional (dose)", p: "26,99", top: true },
      { n: "Saquêzinha Nacional", p: "39,99" },
      { n: "Garrafa de Saquê Nacional", p: "87,9" },
      { n: "Garrafa de Saquê Importado", p: "242" }
    ]},
    { titulo: "Drinks & Destilados", itens: [
      { n: "Caipirinha", p: "34,99" },
      { n: "Caipiroska Nacional", p: "33,99" },
      { n: "Caipirinha Pinga Especial", p: "39,9" },
      { n: "Caipiroska Importada (absolute)", p: "45" },
      { n: "Caipirinha Nacional — Starka", p: "33,99" },
      { n: "Gin Tônica Importada", p: "39,5" },
      { n: "Gin Tônica Silver Seager's", p: "29,59" },
      { n: "Gin Tônica Nacional Seager's", p: "29,6" },
      { n: "Vodka Importada", p: "39" },
      { n: "Vodka Nacional", p: "29,9" },
      { n: "Whisky Old Parr 12 anos", p: "36,7" },
      { n: "Campari", p: "28,8" },
      { n: "Aperol Spritz", p: "39,2" },
      { n: "Negroni", p: "38" },
      { n: "Kir Royal (c/ licor de Kassis stock)", p: "38" }
    ]}
  ],

  /* Capas dos dois cards: fotos em rotação (mesmo padrão da institucional) */
  capas: {
    rodizio: [
      "niguiri-trufado", "jyo-trufado", "camarao-lula",
      "carpaccio-salmao-trufado", "jyo-chico-cesar", "ceviche"
    ],
    alacarte: [
      "komb-sushi-kazay", "komb-kazay2", "komb-kazay34", "komb-kazay24",
      "komb-kazay18", "komb-kazay31", "komb-premium"
    ]
  },

  /* Fotos em rotação na seção institucional */
  fotosInstitucional: [
    "carpaccio-salmao-trufado", "ceviche", "camarao-lula",
    "komb-kazay2", "komb-submarino", "komb-premium", "komb-kazay34",
    "jhow-limao-siciliano", "uramaki", "hossomaki", "guioza-frita",
    "chapa-camarao", "chapa-shimeji",
    "temaki-salmao-completo", "temaki-atum-completo", "temaki-atum-space"
  ]
};
