const verbs = [
  { 
    infinitive: "arise", 
    pastSimple: "arose", 
    pastParticiple: "arisen", 
    translation: {
      infinitive: "levantarse; surgir",
      pastSimple: "se levantó; surgió",
      pastParticiple: "levantado; surgido"
    }
  },
  { 
    infinitive: "awake", 
    pastSimple: "awoke", 
    pastParticiple: "awoken", 
    translation: {
      infinitive: "despertarse",
      pastSimple: "se despertó",
      pastParticiple: "despertado"
    }
  },
  { 
    infinitive: "be", 
    pastSimple: "was/were", 
    pastParticiple: "been", 
    translation: {
      infinitive: "ser, estar",
      pastSimple: "fue, estuvo",
      pastParticiple: "sido, estado"
    }
  },
  { 
    infinitive: "bear", 
    pastSimple: "bore", 
    pastParticiple: "born", 
    translation: {
      infinitive: "soportar; llevar",
      pastSimple: "soportó; llevó",
      pastParticiple: "soportado; llevado"
    }
  },
  { 
    infinitive: "beat", 
    pastSimple: "beat", 
    pastParticiple: "beaten", 
    translation: {
      infinitive: "golpear; vencer",
      pastSimple: "golpeó; venció",
      pastParticiple: "golpeado; vencido"
    }
  },
  { 
    infinitive: "become", 
    pastSimple: "became", 
    pastParticiple: "become", 
    translation: {
      infinitive: "llegar a ser; convertirse",
      pastSimple: "llegó a ser; se convirtió",
      pastParticiple: "llegado a ser; convertido"
    }
  },
  { 
    infinitive: "begin", 
    pastSimple: "began", 
    pastParticiple: "begun", 
    translation: {
      infinitive: "empezar",
      pastSimple: "empezó",
      pastParticiple: "empezado"
    }
  },
  { 
    infinitive: "bend", 
    pastSimple: "bent", 
    pastParticiple: "bent", 
    translation: {
      infinitive: "doblar, flexionar",
      pastSimple: "dobló, flexionó",
      pastParticiple: "doblado, flexionado"
    }
  },
  { 
    infinitive: "bet", 
    pastSimple: "bet", 
    pastParticiple: "bet", 
    translation: {
      infinitive: "apostar",
      pastSimple: "apostó",
      pastParticiple: "apostado"
    }
  },
  { 
    infinitive: "bind", 
    pastSimple: "bound", 
    pastParticiple: "bound", 
    translation: {
      infinitive: "vendar; encuadernar",
      pastSimple: "vendó; encuadernó",
      pastParticiple: "vendado; encuadernado"
    }
  },
  { 
    infinitive: "bite", 
    pastSimple: "bit", 
    pastParticiple: "bitten", 
    translation: {
      infinitive: "morder",
      pastSimple: "mordió",
      pastParticiple: "mordido"
    }
  },
  { 
    infinitive: "bleed", 
    pastSimple: "bled", 
    pastParticiple: "bled", 
    translation: {
      infinitive: "sangrar",
      pastSimple: "sangró",
      pastParticiple: "sangrado"
    }
  },
  { 
    infinitive: "blow", 
    pastSimple: "blew", 
    pastParticiple: "blown", 
    translation: {
      infinitive: "soplar",
      pastSimple: "sopló",
      pastParticiple: "soplado"
    }
  },
  { 
    infinitive: "break", 
    pastSimple: "broke", 
    pastParticiple: "broken", 
    translation: {
      infinitive: "romper",
      pastSimple: "rompió",
      pastParticiple: "roto"
    }
  },
  { 
    infinitive: "bring", 
    pastSimple: "brought", 
    pastParticiple: "brought", 
    translation: {
      infinitive: "traer; llevar",
      pastSimple: "trajo; llevó",
      pastParticiple: "traído; llevado"
    }
  },
  { 
    infinitive: "broadcast", 
    pastSimple: "broadcast", 
    pastParticiple: "broadcast", 
    translation: {
      infinitive: "emitir",
      pastSimple: "emitió",
      pastParticiple: "emitido"
    }
  },
  { 
    infinitive: "build", 
    pastSimple: "built", 
    pastParticiple: "built", 
    translation: {
      infinitive: "construir",
      pastSimple: "construyó",
      pastParticiple: "construido"
    }
  },
  { 
    infinitive: "buy", 
    pastSimple: "bought", 
    pastParticiple: "bought", 
    translation: {
      infinitive: "comprar",
      pastSimple: "compró",
      pastParticiple: "comprado"
    }
  },
  { 
    infinitive: "cast", 
    pastSimple: "cast", 
    pastParticiple: "cast", 
    translation: {
      infinitive: "echar, arrojar",
      pastSimple: "echó, arrojó",
      pastParticiple: "echado, arrojado"
    }
  },
  { 
    infinitive: "catch", 
    pastSimple: "caught", 
    pastParticiple: "caught", 
    translation: {
      infinitive: "coger, atrapar",
      pastSimple: "cogió, atrapó",
      pastParticiple: "cogido, atrapado"
    }
  },
  { 
    infinitive: "choose", 
    pastSimple: "chose", 
    pastParticiple: "chosen", 
    translation: {
      infinitive: "elegir",
      pastSimple: "eligió",
      pastParticiple: "elegido"
    }
  },
  { 
    infinitive: "cling", 
    pastSimple: "clung", 
    pastParticiple: "clung", 
    translation: {
      infinitive: "aferrarse, agarrarse",
      pastSimple: "se aferró, se agarró",
      pastParticiple: "aferrado, agarrado"
    }
  },
  { 
    infinitive: "come", 
    pastSimple: "came", 
    pastParticiple: "come", 
    translation: {
      infinitive: "venir",
      pastSimple: "vino",
      pastParticiple: "venido"
    }
  },
  { 
    infinitive: "cost", 
    pastSimple: "cost", 
    pastParticiple: "cost", 
    translation: {
      infinitive: "costar",
      pastSimple: "costó",
      pastParticiple: "costado"
    }
  },
  { 
    infinitive: "creep", 
    pastSimple: "crept", 
    pastParticiple: "crept", 
    translation: {
      infinitive: "deslizarse; trepar",
      pastSimple: "se deslizó; trepó",
      pastParticiple: "deslizado; trepado"
    }
  },
  { 
    infinitive: "cut", 
    pastSimple: "cut", 
    pastParticiple: "cut", 
    translation: {
      infinitive: "cortar",
      pastSimple: "cortó",
      pastParticiple: "cortado"
    }
  },
  { 
    infinitive: "deal", 
    pastSimple: "dealt", 
    pastParticiple: "dealt", 
    translation: {
      infinitive: "tratar",
      pastSimple: "trató",
      pastParticiple: "tratado"
    }
  },
  { 
    infinitive: "dig", 
    pastSimple: "dug", 
    pastParticiple: "dug", 
    translation: {
      infinitive: "cavar, excavar",
      pastSimple: "cavó, excavó",
      pastParticiple: "cavado, excavado"
    }
  },
  { 
    infinitive: "do", 
    pastSimple: "did", 
    pastParticiple: "done", 
    translation: {
      infinitive: "hacer",
      pastSimple: "hizo",
      pastParticiple: "hecho"
    }
  },
  { 
    infinitive: "draw", 
    pastSimple: "drew", 
    pastParticiple: "drawn", 
    translation: {
      infinitive: "dibujar",
      pastSimple: "dibujó",
      pastParticiple: "dibujado"
    }
  },
  { 
    infinitive: "dream", 
    pastSimple: "dreamt/dreamed", 
    pastParticiple: "dreamt/dreamed", 
    translation: {
      infinitive: "soñar",
      pastSimple: "soñó",
      pastParticiple: "soñado"
    }
  },
  { 
    infinitive: "drink", 
    pastSimple: "drank", 
    pastParticiple: "drunk", 
    translation: {
      infinitive: "beber",
      pastSimple: "bebió",
      pastParticiple: "bebido"
    }
  },
  { 
    infinitive: "drive", 
    pastSimple: "drove", 
    pastParticiple: "driven", 
    translation: {
      infinitive: "conducir",
      pastSimple: "condujo",
      pastParticiple: "conducido"
    }
  },
  { 
    infinitive: "dwell", 
    pastSimple: "dwelt/dwelled", 
    pastParticiple: "dwelt/dwelled", 
    translation: {
      infinitive: "morar",
      pastSimple: "moró",
      pastParticiple: "morado"
    }
  },
  { 
    infinitive: "eat", 
    pastSimple: "ate", 
    pastParticiple: "eaten", 
    translation: {
      infinitive: "comer",
      pastSimple: "comió",
      pastParticiple: "comido"
    }
  },
  { 
    infinitive: "fall", 
    pastSimple: "fell", 
    pastParticiple: "fallen", 
    translation: {
      infinitive: "caer",
      pastSimple: "cayó",
      pastParticiple: "caído"
    }
  },
  { 
    infinitive: "feed", 
    pastSimple: "fed", 
    pastParticiple: "fed", 
    translation: {
      infinitive: "alimentar",
      pastSimple: "alimentó",
      pastParticiple: "alimentado"
    }
  },
  { 
    infinitive: "feel", 
    pastSimple: "felt", 
    pastParticiple: "felt", 
    translation: {
      infinitive: "sentir",
      pastSimple: "sintió",
      pastParticiple: "sentido"
    }
  },
  { 
    infinitive: "fight", 
    pastSimple: "fought", 
    pastParticiple: "fought", 
    translation: {
      infinitive: "luchar",
      pastSimple: "luchó",
      pastParticiple: "luchado"
    }
  },
  { 
    infinitive: "find", 
    pastSimple: "found", 
    pastParticiple: "found", 
    translation: {
      infinitive: "encontrar",
      pastSimple: "encontró",
      pastParticiple: "encontrado"
    }
  },
  { 
    infinitive: "fit", 
    pastSimple: "fit/fitted", 
    pastParticiple: "fit/fitted", 
    translation: {
      infinitive: "encajar, ajustar",
      pastSimple: "encajó, ajustó",
      pastParticiple: "encajado, ajustado"
    }
  },
  { 
    infinitive: "flee", 
    pastSimple: "fled", 
    pastParticiple: "fled", 
    translation: {
      infinitive: "huir",
      pastSimple: "huyó",
      pastParticiple: "huido"
    }
  },
  { 
    infinitive: "fling", 
    pastSimple: "flung", 
    pastParticiple: "flung", 
    translation: {
      infinitive: "arrojar",
      pastSimple: "arrojó",
      pastParticiple: "arrojado"
    }
  },
  { 
    infinitive: "fly", 
    pastSimple: "flew", 
    pastParticiple: "flown", 
    translation: {
      infinitive: "volar",
      pastSimple: "voló",
      pastParticiple: "volado"
    }
  },
  { 
    infinitive: "forbid", 
    pastSimple: "forbade", 
    pastParticiple: "forbidden", 
    translation: {
      infinitive: "prohibir",
      pastSimple: "prohibió",
      pastParticiple: "prohibido"
    }
  },
  { 
    infinitive: "forecast", 
    pastSimple: "forecast", 
    pastParticiple: "forecast", 
    translation: {
      infinitive: "prever, predecir",
      pastSimple: "previó, predijo",
      pastParticiple: "previsto, predicho"
    }
  },
  { 
    infinitive: "forget", 
    pastSimple: "forgot", 
    pastParticiple: "forgotten", 
    translation: {
      infinitive: "olvidar",
      pastSimple: "olvidó",
      pastParticiple: "olvidado"
    }
  },
  { 
    infinitive: "forgive", 
    pastSimple: "forgave", 
    pastParticiple: "forgiven", 
    translation: {
      infinitive: "perdonar",
      pastSimple: "perdonó",
      pastParticiple: "perdonado"
    }
  },
  { 
    infinitive: "freeze", 
    pastSimple: "froze", 
    pastParticiple: "frozen", 
    translation: {
      infinitive: "congelar(se)",
      pastSimple: "congeló",
      pastParticiple: "congelado"
    }
  },
  { 
    infinitive: "get", 
    pastSimple: "got", 
    pastParticiple: "gotten/got", 
    translation: {
      infinitive: "obtener",
      pastSimple: "obtuvo",
      pastParticiple: "obtenido"
    }
  },
  { 
    infinitive: "give", 
    pastSimple: "gave", 
    pastParticiple: "given", 
    translation: {
      infinitive: "dar",
      pastSimple: "dio",
      pastParticiple: "dado"
    }
  },
  { 
    infinitive: "go", 
    pastSimple: "went", 
    pastParticiple: "gone", 
    translation: {
      infinitive: "ir",
      pastSimple: "fue",
      pastParticiple: "ido"
    }
  },
  { 
    infinitive: "grow", 
    pastSimple: "grew", 
    pastParticiple: "grown", 
    translation: {
      infinitive: "crecer; cultivar",
      pastSimple: "creció; cultivó",
      pastParticiple: "crecido; cultivado"
    }
  },
  { 
    infinitive: "hang", 
    pastSimple: "hung/hanged", 
    pastParticiple: "hung/hanged", 
    translation: {
      infinitive: "colgar",
      pastSimple: "colgó",
      pastParticiple: "colgado"
    }
  },
  { 
    infinitive: "have", 
    pastSimple: "had", 
    pastParticiple: "had", 
    translation: {
      infinitive: "tener",
      pastSimple: "tuvo",
      pastParticiple: "tenido"
    }
  },
  { 
    infinitive: "hear", 
    pastSimple: "heard", 
    pastParticiple: "heard", 
    translation: {
      infinitive: "oír",
      pastSimple: "oyó",
      pastParticiple: "oído"
    }
  },
  { 
    infinitive: "hide", 
    pastSimple: "hid", 
    pastParticiple: "hidden", 
    translation: {
      infinitive: "ocultar(se)",
      pastSimple: "ocultó",
      pastParticiple: "ocultado"
    }
  },
  { 
    infinitive: "hit", 
    pastSimple: "hit", 
    pastParticiple: "hit", 
    translation: {
      infinitive: "golpear",
      pastSimple: "golpeó",
      pastParticiple: "golpeado"
    }
  },
  { 
    infinitive: "hold", 
    pastSimple: "held", 
    pastParticiple: "held", 
    translation: {
      infinitive: "sostener, coger",
      pastSimple: "sostuvo, cogió",
      pastParticiple: "sostenido, cogido"
    }
  },
  { 
    infinitive: "hurt", 
    pastSimple: "hurt", 
    pastParticiple: "hurt", 
    translation: {
      infinitive: "herir",
      pastSimple: "hirió",
      pastParticiple: "herido"
    }
  },
  { 
    infinitive: "keep", 
    pastSimple: "kept", 
    pastParticiple: "kept", 
    translation: {
      infinitive: "guardar; quedarse",
      pastSimple: "guardó; se quedó",
      pastParticiple: "guardado; quedado"
    }
  },
  { 
    infinitive: "kneel", 
    pastSimple: "knelt/kneeled", 
    pastParticiple: "knelt/kneeled", 
    translation: {
      infinitive: "arrodillarse",
      pastSimple: "se arrodilló",
      pastParticiple: "arrodillado"
    }
  },
  { 
    infinitive: "knit", 
    pastSimple: "knit/knitted", 
    pastParticiple: "knit/knitted", 
    translation: {
      infinitive: "tejer, hacer punto",
      pastSimple: "tejió, hizo punto",
      pastParticiple: "tejido, hecho punto"
    }
  },
  { 
    infinitive: "know", 
    pastSimple: "knew", 
    pastParticiple: "known", 
    translation: {
      infinitive: "saber, conocer",
      pastSimple: "supo, conoció",
      pastParticiple: "sabido, conocido"
    }
  },
  { 
    infinitive: "lay", 
    pastSimple: "laid", 
    pastParticiple: "laid", 
    translation: {
      infinitive: "poner, colocar",
      pastSimple: "puso, colocó",
      pastParticiple: "puesto, colocado"
    }
  },
  { 
    infinitive: "lead", 
    pastSimple: "led", 
    pastParticiple: "led", 
    translation: {
      infinitive: "liderar, guiar",
      pastSimple: "lideró, guió",
      pastParticiple: "liderado, guiado"
    }
  },
  { 
    infinitive: "lean", 
    pastSimple: "leant/leaned", 
    pastParticiple: "leant/leaned", 
    translation: {
      infinitive: "inclinarse, apoyarse",
      pastSimple: "se inclinó, se apoyó",
      pastParticiple: "inclinado, apoyado"
    }
  },
  { 
    infinitive: "leap", 
    pastSimple: "leapt/leaped", 
    pastParticiple: "leapt/leaped", 
    translation: {
      infinitive: "saltar, brincar",
      pastSimple: "saltó, brincó",
      pastParticiple: "saltado, brincado"
    }
  },
  { 
    infinitive: "learn", 
    pastSimple: "learnt/learned", 
    pastParticiple: "learnt/learned", 
    translation: {
      infinitive: "aprender",
      pastSimple: "aprendió",
      pastParticiple: "aprendido"
    }
  },
  { 
    infinitive: "leave", 
    pastSimple: "left", 
    pastParticiple: "left", 
    translation: {
      infinitive: "dejar, irse",
      pastSimple: "dejó, se fue",
      pastParticiple: "dejado, ido"
    }
  },
  { 
    infinitive: "lend", 
    pastSimple: "lent", 
    pastParticiple: "lent", 
    translation: {
      infinitive: "prestar",
      pastSimple: "prestó",
      pastParticiple: "prestado"
    }
  },
  { 
    infinitive: "let", 
    pastSimple: "let", 
    pastParticiple: "let", 
    translation: {
      infinitive: "permitir, dejar",
      pastSimple: "permitió, dejó",
      pastParticiple: "permitido, dejado"
    }
  },
  { 
    infinitive: "lie", 
    pastSimple: "lay", 
    pastParticiple: "lain", 
    translation: {
      infinitive: "yacer, estar tumbado",
      pastSimple: "yacía, estaba tumbado",
      pastParticiple: "yacido, estado tumbado"
    }
  },
  { 
    infinitive: "light", 
    pastSimple: "lit/lighted", 
    pastParticiple: "lit/lighted", 
    translation: {
      infinitive: "encender, iluminar",
      pastSimple: "encendió, iluminó",
      pastParticiple: "encendido, iluminado"
    }
  },
  { 
    infinitive: "lose", 
    pastSimple: "lost", 
    pastParticiple: "lost", 
    translation: {
      infinitive: "perder",
      pastSimple: "perdió",
      pastParticiple: "perdido"
    }
  },
  { 
    infinitive: "make", 
    pastSimple: "made", 
    pastParticiple: "made", 
    translation: {
      infinitive: "hacer, fabricar",
      pastSimple: "hizo, fabricó",
      pastParticiple: "hecho, fabricado"
    }
  },
  { 
    infinitive: "mean", 
    pastSimple: "meant", 
    pastParticiple: "meant", 
    translation: {
      infinitive: "significar, querer decir",
      pastSimple: "significó, quiso decir",
      pastParticiple: "significado, querido decir"
    }
  },
  { 
    infinitive: "meet", 
    pastSimple: "met", 
    pastParticiple: "met", 
    translation: {
      infinitive: "encontrarse, conocer",
      pastSimple: "se encontró, conoció",
      pastParticiple: "encontrado, conocido"
    }
  },
  { 
    infinitive: "mow", 
    pastSimple: "mowed", 
    pastParticiple: "mown/mowed", 
    translation: {
      infinitive: "cortar (césped)",
      pastSimple: "cortó (césped)",
      pastParticiple: "cortado (césped)"
    }
  },
  { 
    infinitive: "pay", 
    pastSimple: "paid", 
    pastParticiple: "paid", 
    translation: {
      infinitive: "pagar",
      pastSimple: "pagó",
      pastParticiple: "pagado"
    }
  },
  { 
    infinitive: "put", 
    pastSimple: "put", 
    pastParticiple: "put", 
    translation: {
      infinitive: "poner",
      pastSimple: "puso",
      pastParticiple: "puesto"
    }
  },
  { 
    infinitive: "read", 
    pastSimple: "read (red)", 
    pastParticiple: "read (red)", 
    translation: "leer", 
    pronunciation: { 
      infinitive: "reed", 
      pastSimple: "red", 
      pastParticiple: "red" 
    } 
  },  
  { 
    infinitive: "ride", 
    pastSimple: "rode", 
    pastParticiple: "ridden", 
    translation: {
      infinitive: "montar",
      pastSimple: "montó",
      pastParticiple: "montado"
    }
  },
  { 
    infinitive: "ring", 
    pastSimple: "rang", 
    pastParticiple: "rung", 
    translation: {
      infinitive: "sonar, llamar",
      pastSimple: "sonó, llamó",
      pastParticiple: "sonado, llamado"
    }
  },
  { 
    infinitive: "rise", 
    pastSimple: "rose", 
    pastParticiple: "risen", 
    translation: {
      infinitive: "elevarse, levantarse",
      pastSimple: "se elevó, se levantó",
      pastParticiple: "elevado, levantado"
    }
  },
  { 
    infinitive: "run", 
    pastSimple: "ran", 
    pastParticiple: "run", 
    translation: {
      infinitive: "correr",
      pastSimple: "corrió",
      pastParticiple: "corrido"
    }
  },
  { 
    infinitive: "say", 
    pastSimple: "said", 
    pastParticiple: "said", 
    translation: "decir" 
  },
  { 
    infinitive: "see", 
    pastSimple: "saw", 
    pastParticiple: "seen", 
    translation: "ver" 
  },
  { 
    infinitive: "sell", 
    pastSimple: "sold", 
    pastParticiple: "sold", 
    translation: "vender" 
  },
  { 
    infinitive: "send", 
    pastSimple: "sent", 
    pastParticiple: "sent", 
    translation: "enviar" 
  },
  { 
    infinitive: "set", 
    pastSimple: "set", 
    pastParticiple: "set", 
    translation: "poner, colocar" 
  },
  { 
    infinitive: "shake", 
    pastSimple: "shook", 
    pastParticiple: "shaken", 
    translation: "sacudir, agitar" 
  },
  { 
    infinitive: "shine", 
    pastSimple: "shone", 
    pastParticiple: "shone", 
    translation: "brillar" 
  },
  { 
    infinitive: "shoot", 
    pastSimple: "shot", 
    pastParticiple: "shot", 
    translation: "disparar" 
  },
  { 
    infinitive: "show", 
    pastSimple: "showed", 
    pastParticiple: "shown/showed", 
    translation: "mostrar" 
  },
  { 
    infinitive: "shut", 
    pastSimple: "shut", 
    pastParticiple: "shut", 
    translation: "cerrar" 
  },
  { 
    infinitive: "sing", 
    pastSimple: "sang", 
    pastParticiple: "sung", 
    translation: "cantar" 
  },
  { 
    infinitive: "sink", 
    pastSimple: "sank", 
    pastParticiple: "sunk", 
    translation: "hundir(se)" 
  },
  { 
    infinitive: "sit", 
    pastSimple: "sat", 
    pastParticiple: "sat", 
    translation: "sentarse" 
  },
  { 
    infinitive: "sleep", 
    pastSimple: "slept", 
    pastParticiple: "slept", 
    translation: "dormir" 
  },
  { 
    infinitive: "speak", 
    pastSimple: "spoke", 
    pastParticiple: "spoken", 
    translation: "hablar" 
  },
  { 
    infinitive: "spend", 
    pastSimple: "spent", 
    pastParticiple: "spent", 
    translation: "gastar, pasar (tiempo)" 
  },
  { 
    infinitive: "spill", 
    pastSimple: "spilt/spilled", 
    pastParticiple: "spilt/spilled", 
    translation: "derramar" 
  },
  { 
    infinitive: "spin", 
    pastSimple: "spun", 
    pastParticiple: "spun", 
    translation: "girar, hilar" 
  },
  { 
    infinitive: "spit", 
    pastSimple: "spat", 
    pastParticiple: "spat", 
    translation: "escupir" 
  },
  { 
    infinitive: "split", 
    pastSimple: "split", 
    pastParticiple: "split", 
    translation: "dividir, partir" 
  },
  { 
    infinitive: "spread", 
    pastSimple: "spread", 
    pastParticiple: "spread", 
    translation: "extender(se)" 
  },
  { 
    infinitive: "stand", 
    pastSimple: "stood", 
    pastParticiple: "stood", 
    translation: "estar de pie" 
  },
  { 
    infinitive: "steal", 
    pastSimple: "stole", 
    pastParticiple: "stolen", 
    translation: "robar" 
  },
  { 
    infinitive: "stick", 
    pastSimple: "stuck", 
    pastParticiple: "stuck", 
    translation: "pegar(se), adherir(se)" 
  },
  { 
    infinitive: "sting", 
    pastSimple: "stung", 
    pastParticiple: "stung", 
    translation: "picar" 
  },
  { 
    infinitive: "stink", 
    pastSimple: "stank", 
    pastParticiple: "stunk", 
    translation: "apestar" 
  },
  { 
    infinitive: "strike", 
    pastSimple: "struck", 
    pastParticiple: "struck", 
    translation: "golpear" 
  },
  { 
    infinitive: "swear", 
    pastSimple: "swore", 
    pastParticiple: "sworn", 
    translation: "jurar" 
  },
  { 
    infinitive: "sweep", 
    pastSimple: "swept", 
    pastParticiple: "swept", 
    translation: "barrer" 
  },
  { 
    infinitive: "swim", 
    pastSimple: "swam", 
    pastParticiple: "swum", 
    translation: "nadar" 
  },
  { 
    infinitive: "swing", 
    pastSimple: "swung", 
    pastParticiple: "swung", 
    translation: "columpiar(se)" 
  },
  { 
    infinitive: "take", 
    pastSimple: "took", 
    pastParticiple: "taken", 
    translation: "tomar" 
  },
  { 
    infinitive: "teach", 
    pastSimple: "taught", 
    pastParticiple: "taught", 
    translation: "enseñar" 
  },
  { 
    infinitive: "tear", 
    pastSimple: "tore", 
    pastParticiple: "torn", 
    translation: "rasgar, romper" 
  },
  { 
    infinitive: "tell", 
    pastSimple: "told", 
    pastParticiple: "told", 
    translation: "decir, contar" 
  },
  { 
    infinitive: "think", 
    pastSimple: "thought", 
    pastParticiple: "thought", 
    translation: "pensar" 
  },
  { 
    infinitive: "throw", 
    pastSimple: "threw", 
    pastParticiple: "thrown", 
    translation: "lanzar, arrojar" 
  },
  { 
    infinitive: "understand", 
    pastSimple: "understood", 
    pastParticiple: "understood", 
    translation: "entender" 
  },
  { 
    infinitive: "wake", 
    pastSimple: "woke", 
    pastParticiple: "woken", 
    translation: "despertar(se)" 
  },
  { 
    infinitive: "wear", 
    pastSimple: "wore", 
    pastParticiple: "worn", 
    translation: "llevar puesto" 
  },
  { 
    infinitive: "win", 
    pastSimple: "won", 
    pastParticiple: "won", 
    translation: "ganar" 
  },
  { 
    infinitive: "write", 
    pastSimple: "wrote", 
    pastParticiple: "written", 
    translation: "escribir" 
  }
];

const verbs2 = [
  { 
    infinitive: "forbid", 
    pastSimple: "forbade", 
    pastParticiple: "forbidden", 
    translation: {
      infinitive: "prohibir",
      pastSimple: "prohibió",
      pastParticiple: "prohibido"
    }
  },
  { 
    infinitive: "forecast", 
    pastSimple: "forecast", 
    pastParticiple: "forecast", 
    translation: {
      infinitive: "prever, predecir",
      pastSimple: "previó, predijo",
      pastParticiple: "previsto, predicho"
    }
  },
  { 
    infinitive: "forget", 
    pastSimple: "forgot", 
    pastParticiple: "forgotten", 
    translation: {
      infinitive: "olvidar",
      pastSimple: "olvidó",
      pastParticiple: "olvidado"
    }
  },
  { 
    infinitive: "forgive", 
    pastSimple: "forgave", 
    pastParticiple: "forgiven", 
    translation: {
      infinitive: "perdonar",
      pastSimple: "perdonó",
      pastParticiple: "perdonado"
    }
  },
  { 
    infinitive: "freeze", 
    pastSimple: "froze", 
    pastParticiple: "frozen", 
    translation: {
      infinitive: "congelar(se)",
      pastSimple: "congeló",
      pastParticiple: "congelado"
    }
  },
  { 
    infinitive: "get", 
    pastSimple: "got", 
    pastParticiple: "gotten/got", 
    translation: {
      infinitive: "obtener",
      pastSimple: "obtuvo",
      pastParticiple: "obtenido"
    }
  },
  { 
    infinitive: "give", 
    pastSimple: "gave", 
    pastParticiple: "given", 
    translation: {
      infinitive: "dar",
      pastSimple: "dio",
      pastParticiple: "dado"
    }
  },
  { 
    infinitive: "go", 
    pastSimple: "went", 
    pastParticiple: "gone", 
    translation: {
      infinitive: "ir",
      pastSimple: "fue",
      pastParticiple: "ido"
    }
  },
  { 
    infinitive: "grow", 
    pastSimple: "grew", 
    pastParticiple: "grown", 
    translation: {
      infinitive: "crecer; cultivar",
      pastSimple: "creció; cultivó",
      pastParticiple: "crecido; cultivado"
    }
  },
  { 
    infinitive: "hang", 
    pastSimple: "hung/hanged", 
    pastParticiple: "hung/hanged", 
    translation: {
      infinitive: "colgar",
      pastSimple: "colgó",
      pastParticiple: "colgado"
    }
  },
  { 
    infinitive: "have", 
    pastSimple: "had", 
    pastParticiple: "had", 
    translation: {
      infinitive: "tener",
      pastSimple: "tuvo",
      pastParticiple: "tenido"
    }
  },
  { 
    infinitive: "hear", 
    pastSimple: "heard", 
    pastParticiple: "heard", 
    translation: {
      infinitive: "oír",
      pastSimple: "oyó",
      pastParticiple: "oído"
    }
  },
  { 
    infinitive: "hide", 
    pastSimple: "hid", 
    pastParticiple: "hidden", 
    translation: {
      infinitive: "ocultar(se)",
      pastSimple: "ocultó",
      pastParticiple: "ocultado"
    }
  },
  { 
    infinitive: "hit", 
    pastSimple: "hit", 
    pastParticiple: "hit", 
    translation: {
      infinitive: "golpear",
      pastSimple: "golpeó",
      pastParticiple: "golpeado"
    }
  },
  { 
    infinitive: "hold", 
    pastSimple: "held", 
    pastParticiple: "held", 
    translation: {
      infinitive: "sostener, coger",
      pastSimple: "sostuvo, cogió",
      pastParticiple: "sostenido, cogido"
    }
  },
  { 
    infinitive: "hurt", 
    pastSimple: "hurt", 
    pastParticiple: "hurt", 
    translation: {
      infinitive: "herir",
      pastSimple: "hirió",
      pastParticiple: "herido"
    }
  },
  { 
    infinitive: "keep", 
    pastSimple: "kept", 
    pastParticiple: "kept", 
    translation: {
      infinitive: "guardar; quedarse",
      pastSimple: "guardó; se quedó",
      pastParticiple: "guardado; quedado"
    }
  },
  { 
    infinitive: "kneel", 
    pastSimple: "knelt/kneeled", 
    pastParticiple: "knelt/kneeled", 
    translation: {
      infinitive: "arrodillarse",
      pastSimple: "se arrodilló",
      pastParticiple: "arrodillado"
    }
  },
  { 
    infinitive: "knit", 
    pastSimple: "knit/knitted", 
    pastParticiple: "knit/knitted", 
    translation: {
      infinitive: "tejer, hacer punto",
      pastSimple: "tejió, hizo punto",
      pastParticiple: "tejido, hecho punto"
    }
  },
  { 
    infinitive: "know", 
    pastSimple: "knew", 
    pastParticiple: "known", 
    translation: {
      infinitive: "saber, conocer",
      pastSimple: "supo, conoció",
      pastParticiple: "sabido, conocido"
    }
  },
  { 
    infinitive: "lay", 
    pastSimple: "laid", 
    pastParticiple: "laid", 
    translation: {
      infinitive: "poner, colocar",
      pastSimple: "puso, colocó",
      pastParticiple: "puesto, colocado"
    }
  },
  { 
    infinitive: "lead", 
    pastSimple: "led", 
    pastParticiple: "led", 
    translation: {
      infinitive: "liderar, guiar",
      pastSimple: "lideró, guió",
      pastParticiple: "liderado, guiado"
    }
  },
  { 
    infinitive: "lean", 
    pastSimple: "leant/leaned", 
    pastParticiple: "leant/leaned", 
    translation: {
      infinitive: "inclinarse, apoyarse",
      pastSimple: "se inclinó, se apoyó",
      pastParticiple: "inclinado, apoyado"
    }
  },
  { 
    infinitive: "leap", 
    pastSimple: "leapt/leaped", 
    pastParticiple: "leapt/leaped", 
    translation: {
      infinitive: "saltar, brincar",
      pastSimple: "saltó, brincó",
      pastParticiple: "saltado, brincado"
    }
  },
  { 
    infinitive: "learn", 
    pastSimple: "learnt/learned", 
    pastParticiple: "learnt/learned", 
    translation: {
      infinitive: "aprender",
      pastSimple: "aprendió",
      pastParticiple: "aprendido"
    }
  },
  { 
    infinitive: "leave", 
    pastSimple: "left", 
    pastParticiple: "left", 
    translation: {
      infinitive: "dejar, irse",
      pastSimple: "dejó, se fue",
      pastParticiple: "dejado, ido"
    }
  },
  { 
    infinitive: "lend", 
    pastSimple: "lent", 
    pastParticiple: "lent", 
    translation: {
      infinitive: "prestar",
      pastSimple: "prestó",
      pastParticiple: "prestado"
    }
  },
  { 
    infinitive: "let", 
    pastSimple: "let", 
    pastParticiple: "let", 
    translation: {
      infinitive: "permitir, dejar",
      pastSimple: "permitió, dejó",
      pastParticiple: "permitido, dejado"
    }
  },
  { 
    infinitive: "lie", 
    pastSimple: "lay", 
    pastParticiple: "lain", 
    translation: {
      infinitive: "yacer, estar tumbado",
      pastSimple: "yacía, estaba tumbado",
      pastParticiple: "yacido, estado tumbado"
    }
  },
  { 
    infinitive: "light", 
    pastSimple: "lit/lighted", 
    pastParticiple: "lit/lighted", 
    translation: {
      infinitive: "encender, iluminar",
      pastSimple: "encendió, iluminó",
      pastParticiple: "encendido, iluminado"
    }
  },
  { 
    infinitive: "lose", 
    pastSimple: "lost", 
    pastParticiple: "lost", 
    translation: {
      infinitive: "perder",
      pastSimple: "perdió",
      pastParticiple: "perdido"
    }
  },
  { 
    infinitive: "make", 
    pastSimple: "made", 
    pastParticiple: "made", 
    translation: {
      infinitive: "hacer, fabricar",
      pastSimple: "hizo, fabricó",
      pastParticiple: "hecho, fabricado"
    }
  },
  { 
    infinitive: "mean", 
    pastSimple: "meant", 
    pastParticiple: "meant", 
    translation: {
      infinitive: "significar, querer decir",
      pastSimple: "significó, quiso decir",
      pastParticiple: "significado, querido decir"
    }
  },
  { 
    infinitive: "meet", 
    pastSimple: "met", 
    pastParticiple: "met", 
    translation: {
      infinitive: "encontrarse, conocer",
      pastSimple: "se encontró, conoció",
      pastParticiple: "encontrado, conocido"
    }
  },
  { 
    infinitive: "mow", 
    pastSimple: "mowed", 
    pastParticiple: "mown/mowed", 
    translation: {
      infinitive: "cortar (césped)",
      pastSimple: "cortó (césped)",
      pastParticiple: "cortado (césped)"
    }
  },
  { 
    infinitive: "pay", 
    pastSimple: "paid", 
    pastParticiple: "paid", 
    translation: {
      infinitive: "pagar",
      pastSimple: "pagó",
      pastParticiple: "pagado"
    }
  },
  { 
    infinitive: "put", 
    pastSimple: "put", 
    pastParticiple: "put", 
    translation: {
      infinitive: "poner",
      pastSimple: "puso",
      pastParticiple: "puesto"
    }
  },
  { 
    infinitive: "read", 
    pastSimple: "read", 
    pastParticiple: "read", 
    translation: {
      infinitive: "leer",
      pastSimple: "leyó",
      pastParticiple: "leído"
    }
  },
  { 
    infinitive: "ride", 
    pastSimple: "rode", 
    pastParticiple: "ridden", 
    translation: {
      infinitive: "montar",
      pastSimple: "montó",
      pastParticiple: "montado"
    }
  },
  { 
    infinitive: "ring", 
    pastSimple: "rang", 
    pastParticiple: "rung", 
    translation: {
      infinitive: "sonar, llamar",
      pastSimple: "sonó, llamó",
      pastParticiple: "sonado, llamado"
    }
  },
  { 
    infinitive: "rise", 
    pastSimple: "rose", 
    pastParticiple: "risen", 
    translation: {
      infinitive: "elevarse, levantarse",
      pastSimple: "se elevó, se levantó",
      pastParticiple: "elevado, levantado"
    }
  },
  { 
    infinitive: "run", 
    pastSimple: "ran", 
    pastParticiple: "run", 
    translation: {
      infinitive: "correr",
      pastSimple: "corrió",
      pastParticiple: "corrido"
    }
  }
];

const verbs3 = [
  { 
    infinitive: "say", 
    pastSimple: "said", 
    pastParticiple: "said", 
    translation: {
      infinitive: "decir",
      pastSimple: "dijo",
      pastParticiple: "dicho"
    }
  },
  { 
    infinitive: "see", 
    pastSimple: "saw", 
    pastParticiple: "seen", 
    translation: {
      infinitive: "ver",
      pastSimple: "vio",
      pastParticiple: "visto"
    }
  },
  { 
    infinitive: "sell", 
    pastSimple: "sold", 
    pastParticiple: "sold", 
    translation: {
      infinitive: "vender",
      pastSimple: "vendió",
      pastParticiple: "vendido"
    }
  },
  { 
    infinitive: "send", 
    pastSimple: "sent", 
    pastParticiple: "sent", 
    translation: {
      infinitive: "enviar",
      pastSimple: "envió",
      pastParticiple: "enviado"
    }
  },
  { 
    infinitive: "set", 
    pastSimple: "set", 
    pastParticiple: "set", 
    translation: {
      infinitive: "poner, colocar",
      pastSimple: "puso, colocó",
      pastParticiple: "puesto, colocado"
    }
  },
  { 
    infinitive: "shake", 
    pastSimple: "shook", 
    pastParticiple: "shaken", 
    translation: {
      infinitive: "sacudir, agitar",
      pastSimple: "sacudió, agitó",
      pastParticiple: "sacudido, agitado"
    }
  },
  { 
    infinitive: "shine", 
    pastSimple: "shone", 
    pastParticiple: "shone", 
    translation: {
      infinitive: "brillar",
      pastSimple: "brilló",
      pastParticiple: "brillado"
    }
  },
  { 
    infinitive: "shoot", 
    pastSimple: "shot", 
    pastParticiple: "shot", 
    translation: {
      infinitive: "disparar",
      pastSimple: "disparó",
      pastParticiple: "disparado"
    }
  },
  { 
    infinitive: "show", 
    pastSimple: "showed", 
    pastParticiple: "shown/showed", 
    translation: {
      infinitive: "mostrar",
      pastSimple: "mostró",
      pastParticiple: "mostrado"
    }
  },
  { 
    infinitive: "shut", 
    pastSimple: "shut", 
    pastParticiple: "shut", 
    translation: {
      infinitive: "cerrar",
      pastSimple: "cerró",
      pastParticiple: "cerrado"
    }
  },
  { 
    infinitive: "sing", 
    pastSimple: "sang", 
    pastParticiple: "sung", 
    translation: {
      infinitive: "cantar",
      pastSimple: "cantó",
      pastParticiple: "cantado"
    }
  },
  { 
    infinitive: "sink", 
    pastSimple: "sank", 
    pastParticiple: "sunk", 
    translation: {
      infinitive: "hundir(se)",
      pastSimple: "hundió",
      pastParticiple: "hundido"
    }
  },
  { 
    infinitive: "sit", 
    pastSimple: "sat", 
    pastParticiple: "sat", 
    translation: {
      infinitive: "sentarse",
      pastSimple: "se sentó",
      pastParticiple: "sentado"
    }
  },
  { 
    infinitive: "sleep", 
    pastSimple: "slept", 
    pastParticiple: "slept", 
    translation: {
      infinitive: "dormir",
      pastSimple: "durmió",
      pastParticiple: "dormido"
    }
  },
  { 
    infinitive: "speak", 
    pastSimple: "spoke", 
    pastParticiple: "spoken", 
    translation: {
      infinitive: "hablar",
      pastSimple: "habló",
      pastParticiple: "hablado"
    }
  },
  { 
    infinitive: "spend", 
    pastSimple: "spent", 
    pastParticiple: "spent", 
    translation: {
      infinitive: "gastar, pasar (tiempo)",
      pastSimple: "gastó, pasó",
      pastParticiple: "gastado, pasado"
    }
  },
  { 
    infinitive: "spill", 
    pastSimple: "spilt/spilled", 
    pastParticiple: "spilt/spilled", 
    translation: {
      infinitive: "derramar",
      pastSimple: "derramó",
      pastParticiple: "derramado"
    }
  },
  { 
    infinitive: "spin", 
    pastSimple: "spun", 
    pastParticiple: "spun", 
    translation: {
      infinitive: "girar, hilar",
      pastSimple: "giró, hiló",
      pastParticiple: "girado, hilado"
    }
  },
  { 
    infinitive: "spit", 
    pastSimple: "spat", 
    pastParticiple: "spat", 
    translation: {
      infinitive: "escupir",
      pastSimple: "escupió",
      pastParticiple: "escupido"
    }
  },
  { 
    infinitive: "split", 
    pastSimple: "split", 
    pastParticiple: "split", 
    translation: {
      infinitive: "dividir, partir",
      pastSimple: "dividió, partió",
      pastParticiple: "dividido, partido"
    }
  },
  { 
    infinitive: "spread", 
    pastSimple: "spread", 
    pastParticiple: "spread", 
    translation: {
      infinitive: "extender(se)",
      pastSimple: "extendió",
      pastParticiple: "extendido"
    }
  },
  { 
    infinitive: "stand", 
    pastSimple: "stood", 
    pastParticiple: "stood", 
    translation: {
      infinitive: "estar de pie",
      pastSimple: "estuvo de pie",
      pastParticiple: "estado de pie"
    }
  },
  { 
    infinitive: "steal", 
    pastSimple: "stole", 
    pastParticiple: "stolen", 
    translation: {
      infinitive: "robar",
      pastSimple: "robó",
      pastParticiple: "robado"
    }
  },
  { 
    infinitive: "stick", 
    pastSimple: "stuck", 
    pastParticiple: "stuck", 
    translation: {
      infinitive: "pegar(se), adherir(se)",
      pastSimple: "pegó, se adhirió",
      pastParticiple: "pegado, adherido"
    }
  },
  { 
    infinitive: "sting", 
    pastSimple: "stung", 
    pastParticiple: "stung", 
    translation: {
      infinitive: "picar",
      pastSimple: "picó",
      pastParticiple: "picado"
    }
  },
  { 
    infinitive: "stink", 
    pastSimple: "stank", 
    pastParticiple: "stunk", 
    translation: {
      infinitive: "apestar",
      pastSimple: "apestó",
      pastParticiple: "apestando"
    }
  },
  { 
    infinitive: "strike", 
    pastSimple: "struck", 
    pastParticiple: "struck", 
    translation: {
      infinitive: "golpear",
      pastSimple: "golpeó",
      pastParticiple: "golpeado"
    }
  },
  { 
    infinitive: "swear", 
    pastSimple: "swore", 
    pastParticiple: "sworn", 
    translation: {
      infinitive: "jurar",
      pastSimple: "juró",
      pastParticiple: "jurado"
    }
  },
  { 
    infinitive: "sweep", 
    pastSimple: "swept", 
    pastParticiple: "swept", 
    translation: {
      infinitive: "barrer",
      pastSimple: "barrió",
      pastParticiple: "barrido"
    }
  },
  { 
    infinitive: "swim", 
    pastSimple: "swam", 
    pastParticiple: "swum", 
    translation: {
      infinitive: "nadar",
      pastSimple: "nadó",
      pastParticiple: "nadado"
    }
  },
  { 
    infinitive: "swing", 
    pastSimple: "swung", 
    pastParticiple: "swung", 
    translation: {
      infinitive: "columpiar(se)",
      pastSimple: "se columpió",
      pastParticiple: "columpiado"
    }
  },
  { 
    infinitive: "take", 
    pastSimple: "took", 
    pastParticiple: "taken", 
    translation: {
      infinitive: "tomar",
      pastSimple: "tomó",
      pastParticiple: "tomado"
    }
  },
  { 
    infinitive: "teach", 
    pastSimple: "taught", 
    pastParticiple: "taught", 
    translation: {
      infinitive: "enseñar",
      pastSimple: "enseñó",
      pastParticiple: "enseñado"
    }
  },
  { 
    infinitive: "tear", 
    pastSimple: "tore", 
    pastParticiple: "torn", 
    translation: {
      infinitive: "rasgar, romper",
      pastSimple: "rasgó, rompió",
      pastParticiple: "rasgado, roto"
    }
  },
  { 
    infinitive: "tell", 
    pastSimple: "told", 
    pastParticiple: "told", 
    translation: {
      infinitive: "decir, contar",
      pastSimple: "dijo, contó",
      pastParticiple: "dicho, contado"
    }
  },
  { 
    infinitive: "think", 
    pastSimple: "thought", 
    pastParticiple: "thought", 
    translation: {
      infinitive: "pensar",
      pastSimple: "pensó",
      pastParticiple: "pensado"
    }
  },
  { 
    infinitive: "throw", 
    pastSimple: "threw", 
    pastParticiple: "thrown", 
    translation: {
      infinitive: "lanzar, arrojar",
      pastSimple: "lanzó, arrojó",
      pastParticiple: "lanzado, arrojado"
    }
  },
  { 
    infinitive: "understand", 
    pastSimple: "understood", 
    pastParticiple: "understood", 
    translation: {
      infinitive: "entender",
      pastSimple: "entendió",
      pastParticiple: "entendido"
    }
  },
  { 
    infinitive: "wake", 
    pastSimple: "woke", 
    pastParticiple: "woken", 
    translation: {
      infinitive: "despertar(se)",
      pastSimple: "despertó",
      pastParticiple: "despertado"
    }
  },
  { 
    infinitive: "wear", 
    pastSimple: "wore", 
    pastParticiple: "worn", 
    translation: {
      infinitive: "llevar puesto",
      pastSimple: "llevó puesto",
      pastParticiple: "llevado puesto"
    }
  },
  { 
    infinitive: "win", 
    pastSimple: "won", 
    pastParticiple: "won", 
    translation: {
      infinitive: "ganar",
      pastSimple: "ganó",
      pastParticiple: "ganado"
    }
  },
  { 
    infinitive: "write", 
    pastSimple: "wrote", 
    pastParticiple: "written", 
    translation: {
      infinitive: "escribir",
      pastSimple: "escribió",
      pastParticiple: "escrito"
    }
  }
];