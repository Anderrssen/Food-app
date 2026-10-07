# Big Kid Club

Dansk Shopify-webshop med hobbysæt til voksne: mekaniske 3D-træmodeller, book nooks, miniaturehuse, 3D-metalmodeller og små desk toys.

> **Repoet er offentligt.** Læg aldrig kostpriser, marginer, `.env` eller kundedata i git. `.gitignore` udelukker `.env`, `*.xlsx` og `products-med-kostpris.csv`.

## Struktur

```
kidult-shop/
├── theme/                 Custom tema baseret på Dawn 16.0.0 (Shopify)
├── products.csv           11 varer til Shopify-import (kladder, lager 0)
├── scripts/
│   └── byg_products_csv.py   Kilden til products.csv: ret tekster og priser her
├── brand/                 Logo (lys/mørk, med/uden tagline) og favicon
├── docs/
│   ├── produkter.md       Import, tags, kilder og TJEK-liste
│   ├── kollektioner.md    De 6 kollektioner og deres regler
│   ├── billedliste.md     Billeder du skal hente eller tage
│   ├── kurv-og-forside.md Forside, fri-fragt-bjælke og tilkøb i kurven
│   ├── designretning.md   Farver, typografi, logo
│   ├── navneforslag.md    Navneovervejelser (valgt: Big Kid Club)
│   └── jura/              UDKAST: handelsbetingelser, fortrydelse, privatliv,
│                          cookies, fragt, kontakt/om os, GPSR
├── LAUNCH_CHECKLIST.md    Alt det, du selv skal gøre før åbning
├── .env.example           Skabelon til miljøvariabler (kopiér til .env)
└── README.md
```

Temaet er klonet fra [Shopify/dawn](https://github.com/Shopify/dawn) på commit `258f00f` (v16.0.0). Farver, skrifttyper og hjørner er sat i `theme/config/settings_data.json`.

## Kom i gang (lokalt)

Det skal du bruge:

1. **Node.js 20 eller nyere**: <https://nodejs.org>
2. **Shopify CLI**: `npm install -g @shopify/cli@latest`
3. **En Shopify-butik.** Den gratis prøveperiode kan bruges til udvikling. Alternativt kan du oprette en gratis *development store* via en Shopify Partner-konto (partners.shopify.com). Den kan aldrig tage imod rigtige ordrer, men er god til at bygge i.

## Kør temaet mod din butik

```bash
cp .env.example .env              # udfyld SHOPIFY_FLAG_STORE=din-butik.myshopify.com
set -a; source .env; set +a       # indlæs variablerne i terminalen

cd theme
shopify theme dev                 # første gang åbnes browseren, så du kan logge ind
```

`shopify theme dev` uploader temaet som et midlertidigt *development theme* (det er ikke synligt for kunder) og giver dig:

- `http://127.0.0.1:9292`: lokal forhåndsvisning med live-reload, når du gemmer filer
- et link til **Theme Editor**, hvor du kan klikke rundt i sektioner og indstillinger

Stop med `Ctrl+C`. Uden `.env` kan du skrive butikken direkte: `shopify theme dev --store din-butik.myshopify.com`.

Andre nyttige kommandoer (kør dem fra `theme/`):

| Kommando | Hvad den gør |
|---|---|
| `shopify theme check` | Tjekker Liquid-kode for fejl |
| `shopify theme push --unpublished` | Uploader som nyt, ikke-publiceret tema |
| `shopify theme pull` | Henter ændringer, du har lavet i Theme Editor, ned i git |

> **Vigtigt:** Ændringer, du laver i Theme Editor i browseren, gemmes i butikken og ikke i git. Kør `shopify theme pull`, før du committer, ellers bliver de overskrevet næste gang.

## Sprog

Dawn indeholder allerede danske oversættelser (`theme/locales/da.json`). Sæt butikkens standardsprog til dansk under *Indstillinger → Sprog* i Shopify-admin.

## Faser

- [x] **Fase 1**: Fundament: repo, tema, navneforslag, designretning
- [x] **Fase 2**: Produkt-CSV, kollektioner, forside, tilkøb og fri-fragt-bjælke i kurven
- [x] **Fase 3**: Handelsbetingelser, privatliv, cookies, GPSR, `LAUNCH_CHECKLIST.md`
- [ ] **Fase 4**: TikTok-idéer, nyhedsbreve, SEO
