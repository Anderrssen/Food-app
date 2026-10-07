# Produkter: import og datakilder

`products.csv` laves af `scripts/byg_products_csv.py`. Ret tekster og priser i scriptet (ikke i CSV'en), og kør det igen:

```bash
python3 scripts/byg_products_csv.py
```

## Før import (i Shopify-admin)

1. **Indstillinger → Skatter og afgifter:** slå *"Alle priser inkluderer moms"* til. Priserne i CSV'en er **inkl. 25 % moms**.
2. **Indstillinger → Butiksvaluta:** DKK.
3. **Indstillinger → Forsendelse og levering:** opret én fragtzone for Danmark med to prisbaserede satser:
   - *Standard*: 39 kr., ordrer 0–498,99 kr.
   - *Fri fragt*: 0 kr., ordrer fra 499 kr.

   Tallet 499 skal være det samme som i *Temaindstillinger → Big Kid Club*, ellers lover bjælken i kurven noget forkert.

## Import

**Produkter → Importér → vælg `products.csv`**. Sæt ikke flueben i "Overskriv eksisterende produkter" første gang.

Alle varer importeres som **kladde** med **lager 0** og "sælg ikke, når udsolgt". Intet bliver synligt eller købbart, før du selv har:

1. tilføjet billeder (se `billedliste.md`)
2. tjekket felterne markeret **TJEK** herunder
3. sat det rigtige lagertal
4. skiftet status til **Aktiv**

### Kostpriser (valgfrit, lokalt)

Shopify kan vise din avance pr. vare, hvis feltet *Kostpris pr. vare* er udfyldt. Repoet er **offentligt**, så kostpriser og regnearket må ikke committes. Lav i stedet filen lokalt:

```bash
pip install openpyxl
python3 scripts/byg_products_csv.py --kostpris ~/Downloads/kidult-marginer.xlsx
```

Det giver `products-med-kostpris.csv`, som `.gitignore` holder ude af git. Kostpris = indkøb + indgående fragt fra arket. Importér den i stedet for `products.csv`.

## Tags (bruges af kollektioner og filtre)

| Tag | Betydning |
|---|---|
| `Tilkøb` / `Kerne` / `Premium` | Rolle fra regnearket. `Tilkøb` styrer "Tilføj til din ordre" i kurven |
| `Sværhed: Let` / `Mellem` / `Udfordrende` | Vores egen skala ud fra producentens angivelse og byggetid |
| `Tema: …` | Bygninger og vartegn, Køretøjer, Forlystelser, Skrivebord, Book nook, Kuglebane, Skibe |
| `Gaveidé` | Med i kollektionen Gaveidéer |
| `Miniaturehus` | Ekstra tag, så Dream Coffee Factory også er med under miniaturehuse |

SKU'er følger formatet `BKC-<mærke>-<producentens varenr.>`. Hvor varenummeret ikke var oplyst, er der brugt en kort kode (fx `BKC-UG-WHEELORG2`). Ret dem gerne til leverandørens nummer.

## TJEK før publicering

Data er hentet fra producenter og forhandlere den 7. oktober 2026 og ikke bekræftet af leverandøren. Disse punkter er usikre:

| Vare | Hvad skal tjekkes |
|---|---|
| **Pet Shop** | Antal dele: kilderne siger både 76 og 101 (står som "TJEK" i teksten). Engrospris er heller ikke bekræftet (se regnearket). |
| **Wheel-Organizer 2.0** | De fundne tal (51 dele, 11 × 9 × 9,3 cm, 1 time) kan stamme fra version 1. Tjek på Faire-siden. |
| **Karrusel (TG404)** | Én kilde angiver højden som 17,7 cm i stedet for 15 cm. Byggetid er ikke fundet. |
| **Compact Racer** | Byggetid angives som 25 eller 30 min. Teksten siger "ca. 25–30 minutter". |
| **Golden Gate Bridge, Gummiged** | Metal Earth oplyser ikke byggetid. Teksten siger det ærligt. |
| **Pink Beauty Secret** | Tag/dør sælges separat, og LED kræver USB-C-strøm (kabel medfølger ikke). Står i teksten. Tjek, om det stadig gælder den version, du køber. |
| **Dream Coffee Factory** | Strømforsyning til LED og spilledåse (batterier/USB?) er ikke fundet. Skal med i teksten og GPSR-advarsler (fase 3). |
| **Alle** | Aldersmærkning og advarsler (små dele, magneter, batterier) udfyldes i fase 3 (GPSR) ud fra æsken eller leverandørens data. |

## Kilder

- Golden Gate Bridge MMS001G: [m-g.com.au](https://www.m-g.com.au/product/metal-earth-golden-gate/), [Ace Hardware](https://www.acehardware.com/p/9008867)
- Wheel Loader MMS183: [Faire](https://www.faire.com/product/p_q2ujtjmdde), [Syncee](https://syncee.com/product/100719_77414_24216/model-kit-wheel-loader-orange-and-black-challenging-difficulty-steel-model-by-metal-earth)
- Merry-Go-Round TG404: [Faire](https://www.faire.com/product/p_mbqrt58ek5), [Tesco](https://www.tesco.com/shop/en-GB/products/325514862), [JB Hi-Fi](https://www.jbhifi.com.au/products/robotime-classical-3d-wooden-merry-go-round)
- Compact Racer: [Questacon](https://shop.questacon.edu.au/products/ugears-compact-racer), [PB Tech](https://www.pbtech.com/product/WMDUGE122086/Ugears-122086-Mechanical-Model-Kit---Compact-Racer)
- Wheel-Organizer: [Faire](https://www.faire.com/product/p_5nnjsa8az8), [Rails of Sheffield](https://railsofsheffield.com/products/ugears-ug70074-mechanical-model-wheel-organizer)
- Tiny Stores Pet Shop: [MoMA Store](https://store.moma.org/products/rolife-diy-miniature-shop-kit-toy-shop-or-pet-shop-pet-shop), [m-g.com.au](https://www.m-g.com.au/?p=118035)
- Secret Bloomy Nook TGE04: [Faire](https://www.faire.com/product/p_55e2vfst98)
- Marble Explorer LG503: [ROKR](https://rokr.robotime.com/?p=1698), [Woodcraft](https://www.woodcraft.com/products/robotime-marble-explorer-3d-puzzle-kit)
- Pink Beauty Secret: [Faire](https://www.faire.com/product/p_fhr3hfe4us), [Rolife](https://www.rolifeonline.com/blogs/news/rolife-pink-beauty-secret-community-review)
- Trimaran Merihobus: [Woodcraft](https://www.woodcraft.com/products/ugears-trimaran-merihobus-sailboat-model-kit), [Big Boys With Cool Toys](https://www.bigboyswithcooltoys.ca/products/ugr70059-ugears-trimaran-merihobus-boat-237-pieces)
- Dream Coffee Factory EAB02: [Kaufland](https://www.kaufland.de/product/562152405/), [Wood Art Supply](https://woodartsupply.com/products/rokr-dream-coffee-factory-wooden-music-box-model-mechanical-3d-wooden-puzzles-for-adults-building-kit-with-moving-led-lights-miniature-house-kits-desk-decor-gift)
