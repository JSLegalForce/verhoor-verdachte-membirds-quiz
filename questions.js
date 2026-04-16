const ALLE_VRAGEN = [
  {
    thema: "Definitie verdachtenverhoor",
    vraag: "Wat is een verdachte verhoor?",
    opties: [
      "Als je een verdachte vragen stelt over zijn identiteit",
      "Als je een verdachte vragen stelt over het strafbare feit waarvan hij wordt verdacht",
      "Beide antwoorden zijn goed",
      "Geen van beide antwoorden is goed"
    ],
    juist: 1,
    uitleg: "Een persoon die door een opsporingsambtenaar als verdachte is aangemerkt, heeft het recht om te zwijgen bij vragen over zijn mogelijke betrokkenheid bij een geconstateerd strafbaar feit (HR 2 oktober 1979, NJ 1980, 243). Vragen die uitsluitend betrekking hebben op de identiteit van de verdachte vallen hier niet onder, omdat deze niet zien op diens betrokkenheid bij het strafbare feit en dus geen verhoorsituatie is.",
    artikel: "HR 2 oktober 1979, NJ 1980, 243"
  },
  {
    thema: "Consultatiebijstand",
    vraag: "Wat is consultatiebijstand?",
    opties: [
      "Dat verdachte recht heeft op een gesprek met zijn advocaat voorafgaand aan het eerste (politie)verhoor",
      "Dat verdachte zowel voor als tijdens het verhoor bijstand heeft van een advocaat",
      "Beide antwoorden zijn goed",
      "Geen van beide antwoorden is goed"
    ],
    juist: 0,
    uitleg: "De consultatiebijstand houdt in dat de verdachte voorafgaand aan het eerste inhoudelijke politieverhoor de gelegenheid krijgt om met een advocaat in gesprek te gaan. Onder een 'inhoudelijk verhoor' wordt verstaan: het verhoor waarin de verdachte wordt bevraagd over zijn mogelijke betrokkenheid bij een strafbaar feit.",
    artikel: "Art. 28b Sv"
  },
  {
    thema: "Minderjarige aangehouden - afstand bijstand",
    vraag: "Als je een minderjarige hebt aangehouden voor een overtreding (baldadigheid), kan de minderjarige afstand doen van consultatie- en verhoorbijstand?",
    opties: [
      "Ja, met toestemming van de ouder of voogd is dit mogelijk",
      "Nee, een minderjarige kan na een aanhouding geen afstand doen van consultatie- en verhoorbijstand",
      "Ja, indien de minderjarige daar ondubbelzinnig afstand van doet",
      "Ja, maar alleen bij een overtreding"
    ],
    juist: 1,
    uitleg: "Een minderjarige aangehouden verdachte kan op geen enkele wijze afstand doen van het recht op consultatie- en verhoorbijstand (art. 489 lid 2 Sv). Dit betekent dat de hulpofficier van justitie verplicht is om via het piketformulier een advocaat te informeren. De advocaat zal naar het politiebureau komen, voorafgaand aan het eerste politieverhoor met de minderjarige in gesprek gaan en tevens bij het verhoor aanwezig zijn. Dit geldt ook wanneer de minderjarige en diens ouders aangeven hier geen behoefte aan te hebben.",
    artikel: "Art. 489 lid 2 Sv"
  },
  {
    thema: "Minderjarige niet aangehouden - overtreding",
    vraag: "Kan een minderjarige verdachte, die niet is aangehouden en verdacht wordt van een overtreding, afstand doen van zijn recht op consultatie- en verhoorbijstand?",
    opties: [
      "Ja, mits zowel de minderjarige als één van de ouders of de voogd hiermee instemt",
      "Ja, indien de minderjarige daar ondubbelzinnig afstand van doet",
      "De minderjarige en de ouders of voogd kunnen geen afstand doen van consultatie- en verhoorbijstand",
      "Nee, dit is nooit mogelijk"
    ],
    juist: 1,
    uitleg: "Wanneer een minderjarige, die niet is aangehouden, wordt gehoord in verband met een overtreding (dus geen misdrijf), kan de minderjarige zelf afstand doen van het recht op consultatie- en verhoorbijstand (art. 23 Bvr Strafpiket). Indien de minderjarige op een later moment toch gebruik wil maken van een advocaat, dienen de minderjarige of diens ouders zelf de kosten voor de consultatie- en of verhoorbijstand te dragen.\n\nDaarnaast heeft de minderjarige recht op vergezelrecht tijdens het verhoor. De minderjarige kan ervoor kiezen om een ouder, voogd of vertrouwenspersoon bij het verhoor aanwezig te laten zijn. Het is ook mogelijk om de minderjarige samen met zijn of haar ouders uit te nodigen op de locatie waar het verhoor plaatsvindt, of om het verhoor bij de minderjarige thuis af te nemen in het bijzijn van de ouders.",
    artikel: "Art. 23 Bvr Strafpiket"
  },
  {
    thema: "Minderjarige niet aangehouden - misdrijf",
    vraag: "Kan een minderjarige, die wordt verdacht van een misdrijf en niet is aangehouden, afstand doen van het recht op consultatie- en verhoorbijstand?",
    opties: [
      "Ja, de minderjarige is niet aangehouden",
      "Ja, maar omdat dit een misdrijf is kan dit alleen in overleg met de ouder of voogd",
      "Nee, de minderjarige dan wel zijn ouders of voogd kunnen geen afstand doen",
      "Ja, indien de minderjarige daar ondubbelzinnig afstand van doet"
    ],
    juist: 2,
    uitleg: "Wanneer een minderjarige wordt verdacht van een misdrijf, kan noch de minderjarige zelf, noch diens ouders of voogd afstand doen van het recht op consultatie- en verhoorbijstand, ook als de minderjarige niet is aangehouden (art. 23 Bvr Strafpiket).",
    artikel: "Art. 23 Bvr Strafpiket"
  },
  {
    thema: "Meerderjarige - C-feiten",
    vraag: "Kan een meerderjarige verdachte van een strafbaar feit, zijnde een overtreding of een misdrijf waarop geen voorlopige hechtenis is toegelaten (zogeheten C-feiten), afstand doen van consultatie- en verhoorbijstand?",
    opties: [
      "Ja, een meerderjarige verdachte kan afstand doen",
      "Nee, een meerderjarige verdachte kan geen afstand doen",
      "Ja, maar alleen bij overtredingen",
      "Nee, dit is alleen mogelijk met toestemming van de rechter"
    ],
    juist: 0,
    uitleg: "Een meerderjarige verdachte die is aangehouden of wordt verhoord voor overtredingen en misdrijven waar geen voorlopige hechtenis op is toegelaten (zogeheten C-feiten), kan afstand doen van verhoor- en consultatiebijstand (art. 28b lid 3 Sv).",
    artikel: "Art. 28b lid 3 Sv"
  },
  {
    thema: "Meerderjarige - B-feiten",
    vraag: "Kan een meerderjarige verdachte van een strafbaar feit, waarop voorlopige hechtenis is toegelaten (zogeheten B-feiten), afstand doen van zijn recht op consultatie- en verhoorbijstand?",
    opties: [
      "Ja, een meerderjarige verdachte kan afstand doen",
      "Nee, een meerderjarige verdachte kan geen afstand doen",
      "Ja, maar alleen na toestemming van de officier van justitie",
      "Nee, dit is uitsluitend voorbehouden aan de rechter"
    ],
    juist: 0,
    uitleg: "Een meerderjarige verdachte die is aangehouden of wordt verhoord voor een misdrijf waarop voorlopige hechtenis is toegelaten (zogeheten B-feiten), kan afstand doen van verhoor- en consultatiebijstand (art. 28b lid 2 Sv).",
    artikel: "Art. 28b lid 2 Sv"
  },
  {
    thema: "Verdachtenverhoor in de praktijk",
    vraag: "Je ziet een persoon lopen met een fiets waarvan het slot is doorgeslepen en het framenummer is weggekrast. Je vraagt de persoon waar hij de fiets vandaan heeft. Is er in dit geval sprake van een verdachte verhoor?",
    opties: [
      "Nee",
      "Ja",
      "Alleen als de persoon al eerder als verdachte is aangemerkt",
      "Nee, want je stelt slechts een informatieve vraag"
    ],
    juist: 1,
    uitleg: "Het doorgeslepen slot en het weggekraste framenummer zijn duidelijke aanwijzingen dat de fiets mogelijk van diefstal afkomstig is. Op basis hiervan ontstaat een redelijk vermoeden van schuld aan heling (art. 416 Sr), waardoor de persoon die met de fiets loopt als verdachte kan worden aangemerkt (art. 27 Sv). Wanneer je deze persoon vraagt waar hij de fiets vandaan heeft, stel je een inhoudelijke vraag die direct verband houdt met het strafbare feit (heling) waarvan hij wordt verdacht. Hiermee is sprake van een verdachte verhoor.",
    artikel: "Art. 27 Sv / Art. 416 Sr"
  },
  {
    thema: "Informatieplicht voor verhoor",
    vraag: "Moet je de persoon die met de fiets loopt en vraagt waar hij deze vandaan heeft, eerst wijzen op verhoor- en consultatiebijstand?",
    opties: [
      "Ja",
      "Nee",
      "Alleen als de persoon daarom vraagt",
      "Alleen als de persoon wordt aangehouden"
    ],
    juist: 0,
    uitleg: "Je vraagt de persoon naar zijn betrokkenheid bij een strafbaar feit, in dit geval heling. Hierdoor dien je de persoon vooraf te informeren over zijn recht op consultatie- en verhoorbijstand, voordat je verdere vragen over zijn betrokkenheid bij dit strafbare feit stelt.",
    artikel: "Art. 28b Sv",
    juridischAdvies: true
  }
];
