# SEO: titler og meta-beskrivelser

**Hvor det indtastes**

- **Forside:** *Webshop → Præferencer → Titel og metabeskrivelse*
- **Kollektioner:** nederst på hver kollektion under *Søgemaskineoptimering*
- **Produkter:** udfyldes automatisk fra `products.csv`, som `scripts/byg_products_csv.py` genererer

Titlerne er højst 60 tegn og beskrivelserne højst 155 tegn, så Google ikke skærer dem af. Søgeordene er valgt ud fra briefen. Jeg har ikke tal for søgevolumen, så tjek dem gratis i Google Search Console, når butikken har kørt et par uger, og justér efter de søgninger, der faktisk giver visninger.

## Forside

| Felt | Tekst | Tegn |
|---|---|---|
| Titel | Byggesæt til voksne: træmodeller & book nooks \| Big Kid Club | 60 |
| Meta | Mekaniske byggesæt, 3D-træpuslespil, book nooks og metalmodeller til voksne. Skærmfri hygge og gaver, der bliver bygget. Fri fragt fra 499 kr. | 142 |

## Kollektioner

| Kollektion | Titel | Meta-beskrivelse | Søgeord |
|---|---|---|---|
| Mekaniske modeller | Mekaniske byggesæt i træ til voksne \| Big Kid Club | Mekaniske træmodeller og 3D-træpuslespil fra Ugears og ROKR, der bevæger sig, når de er bygget. Uden lim. Se byggetid og sværhedsgrad på hver model. | mekanisk byggesæt, 3d træpuslespil voksne, ugears |
| Book nooks & miniaturehuse | Book nooks og miniaturehuse – byggesæt \| Big Kid Club | Byg din egen book nook til reolen eller et lille miniaturehus fyldt med detaljer. Rolige DIY-projekter til voksne og gaver til bogelskeren. | book nook dansk, book nook byggesæt, miniaturehus |
| Metalmodeller | 3D-metalmodeller – byggesæt i stål \| Big Kid Club | Detaljerede 3D-metalmodeller fra Metal Earth, som du samler uden lim og lodning. Små projekter til en enkelt aften. Fra 89 kr. | 3d metal model, metal earth, metalmodel byggesæt |
| Under 150 kr. | Små byggesæt under 150 kr. \| Big Kid Club | Byggesæt til voksne under 150 kr.: metalmodeller, mini 3D-træmodeller og små mekaniske sæt. Perfekte som ekstra gave eller første projekt. | billige byggesæt, gave under 150 kr |
| Gaveidéer | Gaveidéer til voksne – byggesæt i træ \| Big Kid Club | Gaver til voksne, der kan lide at bygge: book nooks, kuglebaner og mekaniske modeller. Se byggetid og sværhedsgrad, og find den rette gave. | gaveidéer til voksne, gave til ham, gave til hende, kreativ gave |

Kollektionen *Tilkøb* er teknisk og skal ikke optimeres. Skjul den fra søgemaskiner med *Søgemaskineoptimering → skjul* eller en `seo.hidden`-metafelt, hvis Shopify viser muligheden.

## Produkter

Mønstret er dette:

- **Titel:** `[Varens titel] | Big Kid Club`
- **Meta:** `[Titel] fra [mærke]. [Dele], byggetid [tid]. Byggesæt til voksne. Fri fragt fra 499 kr.`

Ret dem gerne i scriptet, hvis en vare har et bedre søgeord, fx "kuglebane voksne".

## Tre artikler til bloggen (langsigtet SEO)

Shopify har en indbygget blog (*Webshop → Blogindlæg*). Én god guide fanger søgninger, som en kollektion ikke kan:

1. **Hvad er en book nook? Og hvordan bygger man den?** (søgeord: "book nook dansk", "hvad er en book nook")
2. **3D-træpuslespil til voksne: sådan vælger du dit første** (søgeord: "3d træpuslespil voksne", "ugears begynder"). Sammenlign byggetid og sværhedsgrad for jeres egne varer
3. **Sådan bygger du en metalmodel uden at knække tapperne** (søgeord: "metal earth tips"). Brug billeder og video fra dit eget byggeri

Link fra hver artikel til den relevante kollektion, og link fra kollektionsbeskrivelsen tilbage til artiklen.

## Teknisk tjekliste

- [ ] Indsend `bigkidclub.dk/sitemap.xml` i Google Search Console
- [ ] Alle produktbilleder har alt-tekst på dansk (`docs/billedliste.md`)
- [ ] Opret en virksomhedsprofil på Google, hvis du har en adresse, der må vises
- [ ] Sørg for, at domænet peger på én version (Shopify omdirigerer automatisk til det primære domæne)
