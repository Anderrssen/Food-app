# Forside og kurv

## Forside (`theme/templates/index.json`)

| Sektion | Indhold | Det skal du gøre |
|---|---|---|
| Hero | "Byg noget med hænderne" + knapper til alle varer og Gaveidéer | Upload hero-billede i Theme Editor (se `billedliste.md`) |
| Hvad vil du bygge? | 3 kollektionskort: Mekaniske modeller, Book nooks & miniaturehuse, Metalmodeller | Opret kollektionerne med de rigtige handles (`kollektioner.md`) og giv dem et billede |
| Sådan virker det | Vælg → Byg → Udstil | Intet |
| Gaveidéer | 4 varer fra kollektionen `gaveideer` | Intet |
| Anmeldelser | **Skjult**, indtil du tilføjer en anmeldelse | Tilføj kun rigtige anmeldelser, med kilde og kundens tilladelse |
| Nyhedsbrev | Tilmelding, gemmes som kunder med e-mail-marketing-samtykke i Shopify | Tilbyd ikke rabat her, før rabatkoden findes (fase 4) |

## Kurv

Kurven er sat til **skuffe** (slides ind fra højre). Begge funktioner virker også på kurvsiden `/cart`.

### Fri-fragt-bjælke

*"Du mangler 150 kr til fri fragt"* med en bjælke i accentfarven. Over grænsen skifter teksten til *"Du har fri fragt på denne ordre"*.

- Indstilles i **Temaindstillinger → Big Kid Club** (grænse og tekster). Sæt grænsen til 0 for at skjule bjælken.
- Beregnes ud fra kurvens total efter rabatter, ligesom Shopifys prisbaserede fragtsatser.
- Bjælken viser kun en tekst. Selve fragtprisen styres i *Indstillinger → Forsendelse og levering*.
- Antager, at butikken kun sælger i DKK. Hvis du senere åbner for andre valutaer via Shopify Markets, skal bjælken omregnes.

### Tilføj til din ordre

Viser op til 3 tilgængelige varer fra kollektionen **Tilkøb** (`tilkob`) med knappen *Tilføj*. Varer, der allerede ligger i kurven, eller som er udsolgt, springes over. Ved klik lægges varen i kurven, og skuffen opdateres uden sideskift.

- Kollektion, overskrift, knaptekst og antal sættes i **Temaindstillinger → Big Kid Club**.
- Filer: `snippets/bkc-cart-upsell.liquid`, `assets/bkc-cart-upsell.js`, `assets/bkc.css`

Alle tilpasninger af Dawn har præfikset `bkc-`, så de er nemme at finde, hvis Dawn skal opdateres senere. De eneste ændringer i Dawns egne filer er:

- `snippets/cart-drawer.liquid` (2 linjer)
- `sections/main-cart-items.liquid` (2 linjer)
- `layout/theme.liquid` (CSS og JS)
- `config/settings_schema.json` (nyt "Big Kid Club"-panel)
- `config/settings_data.json` (farver, skrifter og indstillinger)
