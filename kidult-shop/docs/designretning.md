# Designretning

**Stemning:** et roligt værksted i dagslys. Lyst birketræ, mørk valnød og én dyb grøn accent, der minder om patineret messing og kobber. Varmt, ikke barnligt: ingen primærfarver og ingen tegneseriegrafik. Produktbillederne af de færdige modeller er det, der skal skinne.

## Farvepalet

| Navn | Hex | Bruges til |
|---|---|---|
| Papir | `#F7F1E8` | Standardbaggrund (varm off-white) |
| Birk | `#EADFCB` | Sektioner, der skal skille sig ud, og produktkort |
| Eg | `#A9784F` | Kun dekorativt: streger, ikoner og illustrationer. **Ikke** brødtekst |
| Valnød | `#3B2A1E` | Tekst og mørke sektioner (footer, "sådan virker det") |
| **Patina** (accent) | `#2F6B5E` | Knapper, links, fri-fragt-bjælke og "Læg i kurv" |

Kontrast (WCAG): Valnød på Papir 12,2:1. Hvid tekst på Patina 6,2:1. Patina på Papir 5,5:1. Alle tre klarer AA for brødtekst. Eg på Papir giver kun 3,4:1 og må derfor kun bruges dekorativt eller til stor tekst.

### Farveskemaer i temaet

Skemaerne er sat i `theme/config/settings_data.json` og vælges pr. sektion i Theme Editor:

| Skema | Baggrund | Tekst | Knap | Til |
|---|---|---|---|---|
| scheme-1 (Papir) | Papir | Valnød | Patina | Standard |
| scheme-2 (Birk) | Birk | Valnød | Patina | Afveksling, fx kollektionskort |
| scheme-3 (Valnød) | Valnød | Papir | Papir | Footer og mørke sektioner |
| scheme-4 (Patina) | Patina | Hvid | Papir | Nyhedsbrev og kampagnebjælke |
| scheme-5 (Hvid) | Hvid | Valnød | Patina | Produktsider med hvide produktfotos |

## Typografi

Begge skrifter er gratis og ligger i Shopifys eget skriftbibliotek, så de kræver ingen licens:

- **Overskrifter: Lora** (`lora_n4`). En blød serif med lidt håndværk over sig, der giver ro og kvalitet. Overskriftsskala 115 %.
- **Brødtekst: Work Sans** (`work_sans_n4`). En venlig og meget læsbar sans-serif, også på mobil.

Begge har æ, ø og å. Hvis Theme Editor viser en anden skrift, kan du vælge dem igen under *Temaindstillinger → Typografi*.

**Øvrige indstillinger:** knapper med 6 px afrundede hjørner, kort og billeder med 8 px. Kort løfter sig let, når man holder musen over dem.

## Logo

**Big Kid Club** skrives som et rent ordmærke i små bogstaver: *big kid club*. De små bogstaver tager kanten af det engelske "club" og passer til den rolige tone. Der er ingen figur, så der er ingen risiko for at ligne andres logoer.

- Navnet står i **Lora Medium** med +2 % bogstavafstand, i Valnød på lys baggrund og i Papir på mørk.
- Under navnet er en tynd streg i Eg, som leder tanken hen på en målestok eller en træliste.
- **Tagline** i Work Sans Medium, versaler og bred bogstavafstand: *BYG NOGET MED HÆNDERNE*
- **Favicon:** "bk" i Papir på Patina med en streg i Birk.

Filerne ligger i `brand/`:

| Fil | Brug |
|---|---|
| `logo-lys.png` | Header på lys baggrund (Theme Editor → Header → Logo, bredde ca. 160 px) |
| `logo-moerk.png` | Footer og mørke flader |
| `logo-tagline-lys.png` / `logo-tagline-moerk.png` | Emballage, nyhedsbrev, sociale medier |
| `favicon.png` | 512 × 512 px. Temaindstillinger → Logo → Favicon og profilbillede på TikTok/Instagram |

PNG-filerne er rendret med Lora og Work Sans, som begge er gratis til kommerciel brug (SIL Open Font License). Uploader du intet logo, viser Dawn butiksnavnet i Lora, og det ligner ordmærket.

Navne- og varemærketjek: søg "Big Kid Club" i klasse 28 på dkpto.dk og TMview, før du bruger penge på emballage eller tryk.

## Billedstil (til fase 2)

- Varmt dagslys og naturlige materialer (træbord, linned), så billederne matcher paletten.
- Vis gerne den samlede model *og* posen med dele. Det bygger forventning.
- Brug kun producentens billeder, hvis leverandøren (fx via Faire) giver forhandlere lov til det.
