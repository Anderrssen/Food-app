# Cookiebanner og cookiepolitik

> ⚠️ **UDKAST, skal gennemlæses før butikken åbner.** Cookiereglerne (cookiebekendtgørelsen og GDPR) kræver et **reelt samtykke**, før du sætter cookies, der ikke er strengt nødvendige: statistik, marketing og pixels fra TikTok, Meta og Google.

## 1. Opsætning af Shopifys indbyggede cookiebanner

Temaet har ikke sit eget banner. Brug Shopifys, som også dækker kassen og styrer Shopifys egne pixels og apps, der overholder Customer Privacy API.

**Indstillinger → Kundens privatliv → Cookiebanner:**

| Indstilling | Vælg |
|---|---|
| Område | Vis banneret i **EU/EØS** (og evt. alle lande, da næsten alle kunder er danske) |
| Knapper | **Accepter**, **Afvis** og **Administrer præferencer**. "Afvis" skal være på første lag og lige så synlig som "Accepter" (samme størrelse og stil, ikke et lille link) |
| Sprog | Dansk. Tjek oversættelsen under *Indstillinger → Sprog → Oversæt* |
| Link | Til cookiepolitikken (siden herunder) |
| Standard | Ingen kategorier slået til på forhånd |

Forslag til bannertekst:

> **Cookies hos Big Kid Club**
> Vi bruger nødvendige cookies, så kurven og kassen virker. Med dit samtykke bruger vi også cookies til statistik og markedsføring, fx for at se hvilke videoer der bringer folk forbi. Du kan altid ændre dit valg under "Cookie-indstillinger" nederst på siden. [Læs mere](/pages/cookies)

**Footerlinket "Cookie-indstillinger"** er bygget ind i temaet (`snippets/bkc-footer-links.liquid`). Det genåbner Shopifys banner via `privacyBanner.showPreferences()`, så kunden kan trække samtykket tilbage lige så let, som det blev givet. Linket vises kun, når banneret er aktivt.

**Pixels og apps:**

- Tilføj TikTok-, Meta- og Google-pixels via de officielle Shopify-apps eller *Kundeevents*, og sæt dem til at kræve samtykke ("marketing"/"analytics").
- Indsæt **aldrig** sporingskode direkte i `theme.liquid`. Den ville køre uden samtykke.

**Test:**

1. Åbn butikken i et privat vindue, og tryk "Afvis".
2. Tjek i browserens udviklerværktøjer (Application → Cookies), at der ikke er sat statistik- eller marketingcookies.

## 2. Cookiepolitik (side)

Opret siden under **Webshop → Sider → Tilføj side** med titlen *Cookiepolitik* og URL'en `/pages/cookies`. Kopiér teksten herunder.

---

### Cookiepolitik

Senest opdateret: [DATO]

En cookie er en lille tekstfil, som gemmes i din browser. Vi bruger cookies for at få webshoppen til at virke og, hvis du siger ja, til statistik og markedsføring.

**Nødvendige cookies** (kræver ikke samtykke): får kurven, kassen, login og sikkerheden til at virke og husker dit cookievalg. Uden dem kan du ikke handle hos os.

**Præferencer** (kræver samtykke): husker fx sprog og land.

**Statistik** (kræver samtykke): fortæller os anonymt eller pseudonymt, hvordan webshoppen bliver brugt, så vi kan gøre den bedre.

**Markedsføring** (kræver samtykke): bruges af fx [TikTok, Meta, Google], så vi kan måle, hvilke annoncer og videoer der virker, og vise relevante annoncer.

| Cookie | Udbyder | Formål | Kategori | Udløb |
|---|---|---|---|---|
| [UDFYLD fra Shopifys aktuelle cookieliste og en cookie-scanning af din butik] | | | | |

**Sådan ændrer du dit samtykke:** Klik på "Cookie-indstillinger" nederst på siden. Du kan også slette cookies i din browser.

Dataansvarlig og dine rettigheder: se vores [privatlivspolitik](/policies/privacy-policy).

---

> **Cookietabellen:** Udfyld den ud fra Shopifys officielle liste over de cookies, Shopify sætter (søg "Shopify cookies" i Shopify Help Center), og scan din butik, når apps og pixels er installeret. Opfind ikke cookienavne, og opdatér tabellen, når du tilføjer apps.
