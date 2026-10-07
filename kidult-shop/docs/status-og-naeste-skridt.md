# Status og næste skridt

Fase 1–4 fra briefen er lavet. Her står, hvad **du** skal gøre i hver fase, før den næste kan tages i brug. Den detaljerede afkrydsningsliste er `LAUNCH_CHECKLIST.md`.

Forhåndsvisning af butikken: `preview/big-kid-club-preview.html`. Byg den igen med `python3 scripts/byg_preview.py`, når du retter produkttekster.

## Fase 1: Fundament ✅

**Lavet:**
- Dawn-tema med Big Kid Clubs farver og skrifter
- Logo og favicon (`brand/`)
- README og `.env.example`

**Før fase 2 kan bruges:**
1. Søg "Big Kid Club" som varemærke i klasse 28 (legetøj og spil) på dkpto.dk og TMview, og tjek, at bigkidclub.dk er ledigt på punktum.dk
2. Opret en Shopify-butik (gratis prøveperiode eller udviklingsbutik)
3. Kør `shopify theme dev` fra `theme/` (se README), og se temaet mod din butik

## Fase 2: Produkter, forside og kurv ✅

**Lavet:**
- `products.csv` med 11 varer (kladder, lager 0, SEO-felter)
- 6 kollektionsregler, forside, fri-fragt-bjælke og "Tilføj til din ordre"

**Før fase 3 kan bruges:**
1. *Skatter og afgifter:* priser inkl. moms. *Forsendelse:* 39 kr. under 499 kr. og 0 kr. fra 499 kr.
2. Importér `products.csv`, og opret de 6 kollektioner med de præcise handles (`docs/kollektioner.md`)
3. Bekræft TJEK-punkterne hos leverandøren (`docs/produkter.md`): Pet Shop-dele, Wheel-Organizer-version og strøm til Dream Coffee Factory
4. Skaf billeder: tag dem selv, eller få skriftlig tilladelse til producentens (`docs/billedliste.md`)
5. Upload logo og favicon i Theme Editor

## Fase 3: Jura og tillid ✅

**Lavet:**
- Udkast til handelsbetingelser, privatlivspolitik, cookies, fragt og kontakt/om os
- Fortrydelsesfunktion ("Fortryd aftale" og "Bekræft fortrydelse")
- GPSR-blok på produktsiden
- `LAUNCH_CHECKLIST.md`

**Før fase 4 og åbning:**
1. Få et **CVR-nummer**, og afklar **moms** (registrering, eller frivillig registrering fra start; tal med en revisor)
2. Udfyld alle `[FELTER]` i `docs/jura/`, læs teksterne igennem (gerne med en rådgiver), og indsæt dem under *Politikker* og *Sider*
3. Opret siden **Fortryd aftale** med skabelonen `page.fortryd-aftale`. Test den, og hav kvitteringsskabelonen klar
4. Slå **cookiebanneret** til med "Afvis" lige så synligt som "Accepter"
5. Opret de 5 **GPSR-metafelter**, og udfyld dem med data fra emballagen eller leverandøren for hver vare
6. Tjek **producentansvar** for emballage og elektronik
7. **Betaling:** Shopify Payments (og evt. MobilePay). Sæt indsamling til "når ordren er opfyldt"
8. **Fragt:** lav en fragtaftale
9. **Leverandør:** opret en Faire-konto, og bestil prøver

## Fase 4: Marketing ✅

**Lavet:**
- 10 TikTok/Reels-idéer (`docs/marketing/tiktok-ideer.md`)
- 3 nyhedsbreve (`docs/marketing/nyhedsbreve.md`)
- SEO for forside, kollektioner og produkter (`docs/marketing/seo.md`)

**Før du går i gang med marketing:**
1. Beslut **velkomstrabatten** (forslag: 10 %), og opret koden under *Rabatter*
2. Sæt **velkomstmailen** op som automatisering i Shopify Email
3. Indtast **SEO-titler og -beskrivelser** for forside og kollektioner
4. Opret **TikTok- og Instagram-konti** på brandnavnet, og byg det første sæt selv, mens du filmer. Ét byggeri giver 3–4 videoer
5. Tilknyt Google Search Console, og indsend `sitemap.xml`

## Åbning

Når alle punkter ovenfor er klaret:

1. Læg en **testordre** med rigtig betaling, og refundér den
2. Gennemse butikken på mobilen
3. Sæt varerne til **Aktiv**: kun dem med billeder, GPSR-data og bekræftet lager
4. Fjern adgangskoden

**Første måned efter åbning:**
- 3 videoer om ugen
- Første "Månedens byggesæt"-mail
- Tilføj rigtige anmeldelser i anmeldelsessektionen, når de kommer
