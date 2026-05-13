// JS Legal Force - Kennisquiz Aanhouding op heterdaad
const ALLE_VRAGEN = [
{
thema: "Mededeling aanhouding",
vraag: "Als de situatie het toelaat moet ik de verdachte altijd specifiek mededelen voor welk strafbaar feit hij wordt aangehouden.",
opties: [
"Ja",
"Nee"
],
juist: 0,
uitleg: "Als je een verdachte aanhoudt, dien je hem als de situatie dat toelaat, direct mede te delen voor welk strafbaar feit hij is aangehouden (art. 27c lid 1 Sv).",
artikel: "Art. 27c lid 1 Sv"
},
{
thema: "Tolk bij aanhouding",
vraag: "Als de verdachte de Nederlandse taal onvoldoende beheerst, moet ik een tolk bellen om verdachte duidelijk te maken waarvoor hij is aangehouden?",
opties: [
"Ja",
"Nee"
],
juist: 0,
uitleg: "Ja, je dient als een verdachte de Nederlandse taal onvoldoende beheerst de verdachte middels een (telefonische) tolk te informeren voor welk strafbaar feit hij is aangehouden (art. 27 lid 4 Sv).",
artikel: "Art. 27 lid 4 Sv"
},
{
thema: "Rechtenfolter bij aanhouding",
vraag: "Als ik een verdachte heb aangehouden moet aan de verdachte onverwijld de folder met daarin zijn rechten uitgereikt te worden?",
opties: [
"Ja",
"Nee"
],
juist: 0,
uitleg: "Ja, de verdachte dient onverwijld na zijn aanhouding een schriftelijke folder met daarin zijn rechten worden uitgereikt (art. 27 c lid 3 Sv). Dit kan op het politiebureau als de verdachte wordt ingesloten.",
artikel: "Art. 27c lid 3 Sv"
},
{
thema: "Heterdaad na staken zoektocht",
vraag: "Als je een verdachte een winkelruit ziet vernielen met een hamer, maar je hem vervolgens niet direct kunt achterhalen en de zoektocht staakt, kun je de verdachte dan een uur later alsnog op heterdaad aanhouden als je hem opnieuw aantreft?",
opties: [
"Ja",
"Nee"
],
juist: 1,
uitleg: "Een zoektocht naar de verdachte kan enkele uren duren. Zodra de zoektocht wordt gestaakt, is er geen sprake meer van heterdaad.",
artikel: "Heterdaad - definitie"
},
{
thema: "BOA aanhouding: opsporingsambtenaar vs. burger",
vraag: "Maakt het voor mij als BOA een verschil of ik een verdachte aanhoud vanuit mijn rol als opsporingsambtenaar of als burger een aanhouding verricht?",
opties: [
"Nee, een burger mag ook geweld gebruiken om een aanhouding te verrichten",
"Ja, als opsporingsambtenaar heb je meer bevoegdheden, maar ook meer verplichtingen bij een aanhouding."
],
juist: 1,
uitleg: "Wanneer je als BOA een verdachte aanhoudt in je hoedanigheid als opsporingsambtenaar, beschik je over specifieke bevoegdheden. Zo mag je, indien nodig, geweld gebruiken (art. 7 lid 1 Pw), een vervoersfouillering toepassen (art. 7 lid 4 Pw) en een opsporingsfouillering uitvoeren (art. 56 lid 4 Sv). Tegelijkertijd heb je ook bepaalde verplichtingen, zoals het opmaken van een proces-verbaal (art. 152 lid 1 Sv) en het informeren van de verdachte over de reden van de aanhouding (art. 27c Sv).\n\nAls je echter als BOA een verdachte aanhoudt vanuit je rol als burger ('eenieder'-aanhouding), bijvoorbeeld omdat je voor dat specifieke strafbare feit geen opsporingsbevoegdheid hebt, kun je geen gebruik maken van deze opsporingsbevoegdheden. Je handelt dan uitsluitend op basis van de bevoegdheden die iedere burger heeft, wat betekent dat je geen geweld mag gebruiken op grond van de Politiewet en geen fouilleringen mag uitvoeren die alleen zijn voorbehouden aan opsporingsambtenaren.",
artikel: "Art. 7 lid 1 Pw / Art. 56 lid 4 Sv / Art. 152 lid 1 Sv / Art. 27c Sv"
{
thema: "Getuigenverklaring en redelijk vermoeden",
vraag: "Een getuigenverklaring, waarin met redenen van wetenschap staat opgeschreven dat de verdachte een vernieling heeft gepleegd levert een redelijk vermoeden van schuld op, waarvoor je de verdachte op heterdaad kunt aanhouden.",
opties: [
"Ja",
"Nee"
],
juist: 0,
uitleg: "Een getuigenverklaring van een persoon wiens naam bekend is, met redenen van wetenschap over het strafbare feit (dus hoe het gepleegd is), levert een redelijk vermoeden van schuld op dat de verdachte het strafbare feit gepleegd kan hebben. Hiervoor kun je de verdachte op heterdaad aanhouden. Het is altijd jouw keuze als opsporingsambtenaar of je de verdachte hiervoor op heterdaad aanhoudt.",
artikel: "Art. 27 Sv - redelijk vermoeden van schuld"
},
{
thema: "Bewijskracht burger vs. opsporingsambtenaar",
vraag: "De waarneming van een burger bij een aanhouding op heterdaad, heeft dezelfde bewijskracht als die van een opsporingsambtenaar op heterdaad.",
opties: [
"Ja",
"Nee"
],
juist: 1,
uitleg: "Een opsporingsambtenaar die een aanhouding verricht maakt hiervan proces-verbaal (Pv) op (art. 152 lid 1 Sv). Een Pv van een opsporingsambtenaar heeft unieke bewijskracht. Het bewijs dat de verdachte het tenlastegelegde feit heeft gepleegd, kan door de rechter worden aangenomen op het Pv van een opsporingsambtenaar (art. 344 lid 2 Sv). Als de burger een aanhouding verricht wordt hiervan een getuigenverklaring of aangifte opgenomen, hetgeen 1 bewijsmiddel is. De rechter kan op basis van een verklaring niet aannemen dat verdachte het tenlastegelegde feit heeft gepleegd (art. 342 lid 2 Sv).",
artikel: "Art. 152 lid 1 Sv / Art. 344 lid 2 Sv / Art. 342 lid 2 Sv"
}
];
},
