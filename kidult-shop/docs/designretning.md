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

## Logo-tekst

Indtil der er råd til en designer, bruger vi et rent **ordmærke** uden figur, og derfor er der ingen risiko for at ligne andres logoer:

- Navnet sættes i **Lora**, i normal skrift med små bogstaver og let øget bogstavafstand (+2 %), i Valnød på lys baggrund og i Papir på mørk.
- Valgfrit lille kendetegn: en tynd vandret streg i Eg under navnet, der leder tanken hen på en målestok eller en træliste.
- **Tagline** i Work Sans, versaler, lille størrelse og bred bogstavafstand: *BYG NOGET MED HÆNDERNE*

Eksempel med navnet Byggestund:

```
byggestund
──────────
BYG NOGET MED HÆNDERNE
```

Når du har valgt navnet, laver jeg logoet som SVG (lys og mørk version) og et favicon og lægger dem i temaet.

## Billedstil (til fase 2)

- Varmt dagslys og naturlige materialer (træbord, linned), så billederne matcher paletten.
- Vis gerne den samlede model *og* posen med dele. Det bygger forventning.
- Brug kun producentens billeder, hvis leverandøren (fx via Faire) giver forhandlere lov til det.
