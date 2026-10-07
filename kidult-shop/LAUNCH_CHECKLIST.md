# Launch-tjekliste: Big Kid Club

Det her er det, **du selv** skal gøre, før butikken åbner. Kryds af undervejs. Punkter, der koster penge, står med 💰.

Regler og beløbsgrænser ændrer sig. Tjek dem altid hos myndigheden (links nedenfor), og tal gerne med en revisor eller en gratis iværksætterrådgivning (fx Erhvervshus Fyn) om moms og skat.

## 1. Virksomhed

- [ ] **Navnetjek:** "Big Kid Club" i klasse 28 på [dkpto.dk](https://www.dkpto.dk) og [TMview](https://www.tmdn.org/tmview). Søg også på [datacvr.virk.dk](https://datacvr.virk.dk)
- [ ] **CVR-nummer:** registrér en enkeltmandsvirksomhed på [virk.dk](https://virk.dk) (gratis). Det kræves for at handle med leverandører som Faire og for at vise CVR på webshoppen
- [ ] **SU:** Får du SU, så tjek, hvordan overskud fra virksomheden påvirker dit fribeløb ([su.dk](https://www.su.dk))
- [ ] **Forskudsopgørelse:** Indtast forventet overskud på [skat.dk](https://www.skat.dk)
- [ ] **Bogføring:** Gem alle bilag digitalt i 5 år. Tjek på [erhvervsstyrelsen.dk](https://erhvervsstyrelsen.dk), om du skal bruge et registreret digitalt bogføringssystem (det afhænger af omsætningen). 💰 Et simpelt regnskabsprogram koster typisk lidt om måneden
- [ ] 💰 **Forsikring:** Overvej en erhvervs- og produktansvarsforsikring

## 2. Moms

- [ ] **Momsregistrering:** Det er et krav, når momspligtigt salg forventes at blive **over 50.000 kr. inden for 12 måneder**. Tjek grænsen hos [Skattestyrelsen](https://skat.dk). Registreringen foregår på virk.dk
- [ ] **Overvej frivillig registrering fra start.** Priserne i `products.csv` er inkl. 25 % moms. Uden momsregistrering må du ikke opkræve moms, og du kan ikke trække moms på indkøb, told og importmoms fra. Spørg en revisor, hvad der bedst kan betale sig
- [ ] Shopify: *Indstillinger → Skatter og afgifter*: "Alle priser inkluderer moms" **til** (eller **fra**, hvis du ikke er momsregistreret)
- [ ] **Import uden for EU:** Varer fra USA, Kina eller Ukraine kan udløse told og importmoms. Tjek, hvor hver leverandør sender fra
- [ ] **Salg til andre EU-lande:** Ikke relevant nu (Danmark only). Ved salg til andre EU-lande over 10.000 € om året skal du bruge momsordningen OSS

## 3. Betaling

- [ ] Aktivér **Shopify Payments** (kort, Apple Pay, Google Pay) under *Indstillinger → Betalinger*. 💰 Gebyr pr. transaktion. Sammenlign med regnearkets antagelse på 2 %
- [ ] **MobilePay:** Tjek, om det kan slås til i Shopify Payments, eller om det kræver en app eller udbyder. 💰
- [ ] **Indsamling af betaling:** Sæt den til *"Automatisk, når hele ordren er opfyldt"* (eller manuel), så kortet først trækkes, når varen sendes. Det står også i handelsbetingelserne

## 4. Fragt

- [ ] 💰 **Fragtaftale:** Sammenlign PostNord, GLS og DAO, eller en fragtplatform som Shipmondo, der giver rabatterede priser og laver labels direkte fra Shopify
- [ ] Opdatér regnearkets antagelser (brev 30 kr., pakke 45 kr.) med de rigtige priser
- [ ] Shopify: *Indstillinger → Forsendelse og levering*: zone Danmark med **39 kr. under 499 kr.** og **0 kr. fra 499 kr.**. Samme grænse som i *Temaindstillinger → Big Kid Club*
- [ ] Indkøb emballage (brevkuverter til metalmodeller, kasser til de store sæt)

## 5. Leverandører

- [ ] Opret en forhandlerkonto på **Faire** (kræver CVR). Bestil først prøver af 2–3 sæt
- [ ] Tjek **minimumsordrer** pr. brand (står i regnearket: 0–300 $)
- [ ] Tjek for **hver vare**, om den sendes fra **EU eller uden for EU** (told, importmoms, leveringstid, GPSR-rolle)
- [ ] Bed om **GPSR-oplysninger** (producentadresse og EU-ansvarlig) og om **tilladelse til produktbilleder** (gem svarene)
- [ ] Bekræft TJEK-punkterne i `docs/produkter.md` (Pet Shop-dele, Wheel-Organizer-version og strøm til Dream Coffee Factory)
- [ ] Evt. **BigBuy/Syncee** til dropshipping fra EU. 💰 Har typisk et månedligt abonnement

## 6. Domæne og e-mail

- [ ] 💰 Køb **bigkidclub.dk** via en registrator. Tjek ledighed på [punktum.dk](https://punktum.dk)
- [ ] Forbind domænet i Shopify (*Indstillinger → Domæner*)
- [ ] 💰 Opret en e-mail på domænet (fx hej@bigkidclub.dk), og brug den som butikkens e-mail
- [ ] Sikr brugernavne på TikTok og Instagram

## 7. Producentansvar (miljø)

- [ ] **Emballage:** Producentansvar for emballage gælder i Danmark (obligatorisk fra 1. oktober 2025). Virksomheder, der sender varer i emballage til danske forbrugere, kan være omfattet og skal registreres hos [Dansk Producentansvar](https://producentansvar.dk) **mindst 14 dage før**. Tjek, om og hvordan det gælder for dig, og om der er en bagatelgrænse
- [ ] **Elektronik og batterier:** Dream Coffee Factory, Pink Beauty Secret og evt. book nooks har LED og strøm. Køber du dem direkte fra et land uden for Danmark, kan du blive "producent" af elektronik eller batterier og skal registreres. Tjek hos Dansk Producentansvar

## 8. Shopify-butik

- [ ] Opret butikken, og vælg abonnement 💰
- [ ] Upload temaet (`shopify theme push --unpublished`), og publicér det
- [ ] *Butiksoplysninger:* navn, adresse og CVR. *Sprog:* dansk. *Valuta:* DKK
- [ ] Importér `products.csv` (se `docs/produkter.md`)
- [ ] Opret de 6 kollektioner (`docs/kollektioner.md`) og menuerne
  - Hovedmenu: kollektionerne
  - Footer-menu (`footer`): Handelsbetingelser · Fragt og levering · Privatlivspolitik · Cookiepolitik · Kontakt · Om os
- [ ] Upload logo og favicon fra `brand/`
- [ ] Tilføj billeder pr. vare (`docs/billedliste.md`)

## 9. Jura og tillid (fase 3)

Alle tekster ligger i `docs/jura/` og er **udkast**. Læs dem igennem, og udfyld [FELTERNE].

- [ ] **Handelsbetingelser** → *Politikker → Servicevilkår*. Afsnit 5 kopieres til *Returpolitik*
- [ ] **Privatlivspolitik** → *Politikker → Privatlivspolitik* (tilpas listen over apps)
- [ ] **Fragt og levering** → *Politikker → Forsendelsespolitik*
- [ ] **Kontaktoplysninger** → *Politikker → Kontaktoplysninger*
- [ ] Siderne **Kontakt**, **Om Big Kid Club** og **Cookiepolitik** (`/pages/cookies`)
- [ ] Siden **Fortryd aftale** med skabelonen `page.fortryd-aftale` (`docs/jura/fortrydelse.md`)
  - Test den
  - Læg kvitteringsskabelonen klar
  - Indsæt linket i ordrebekræftelsen
- [ ] **Cookiebanner:** Accepter og Afvis skal være lige synlige. Test, at "Afvis" ikke sætter marketingcookies (`docs/jura/cookies.md`)
- [ ] **GPSR:** opret de 5 metafelter, og udfyld dem for hver vare, før den sættes til Aktiv (`docs/jura/gpsr.md`)
- [ ] Nyhedsbrev: ingen afkrydsning på forhånd (Shopify-standard)
- [ ] Ingen opdigtede anmeldelser, "før-priser" eller lagerstatus

## 10. Før du trykker "Åbn butik"

- [ ] Læg en **testordre** med en rigtig betaling, og refundér den. Tjek ordrebekræftelse, fragtpris, fri-fragt-bjælke, tilkøb i kurven og fortrydelsesformularen
- [ ] Gennemse alle sider på mobilen
- [ ] Alle varer, der skal sælges: billeder ✓ · GPSR ✓ · TJEK-punkter ✓ · lager sat ✓ · status Aktiv ✓
- [ ] Fjern adgangskoden (*Webshop → Indstillinger → Adgangskodebeskyttelse*)
