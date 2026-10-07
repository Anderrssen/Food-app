# Fortrydelsesfunktionen ("Fortryd aftale")

Siden 19. juni 2026 skal webshops have en **digital fortrydelsesfunktion** (forbrugeraftaleloven § 20 a, der gennemfører artikel 11a i direktiv 2011/83/EU som ændret ved direktiv (EU) 2023/2673). Kravene i kort form:

| Krav | Sådan er det løst i temaet |
|---|---|
| En funktion mærket **"Fortryd aftale"** (eller lignende entydig tekst), der er let at finde og tilgængelig i hele fortrydelsesperioden | Linket **Fortryd aftale** står i footerens bundlinje på alle sider (`snippets/bkc-footer-links.liquid`) |
| Kunden kan angive eller bekræfte **navn**, **hvilken aftale** (ordre) og **hvor kvitteringen skal sendes** | Felterne Navn, Ordrenummer og E-mail og et valgfrit felt om, hvilke varer det gælder (`sections/bkc-fortryd-aftale.liquid`) |
| En bekræftelsesknap mærket **kun** "Bekræft fortrydelse" | Knappen hedder præcis det |
| Virksomheden sender **uden unødig forsinkelse** en **kvittering på et varigt medium** (e-mail) med indhold, dato og klokkeslæt | ⚠️ **Det skal du selv gøre.** Se herunder |

## Opsætning (5 minutter)

1. **Webshop → Sider → Tilføj side**
   - Titel: `Fortryd aftale`
   - Indhold: kan være tomt eller én linje, fx "Du kan også skrive til os på [E-MAIL]."
   - Skabelon (til højre): `page.fortryd-aftale`
   - Tjek, at URL'en bliver `/pages/fortryd-aftale`. Linket i footeren dukker først op, når siden findes.
2. **Indstillinger → Notifikationer → Ordrebekræftelse:** tilføj en linje som *"Fortryder du? Brug fortrydelsesfunktionen: {{ shop.url }}/pages/fortryd-aftale"*.
3. **Test** med en testordre: udfyld formularen, og kontrollér, at mailen lander i den indbakke, der står under *Indstillinger → Butiksoplysninger → Butikkens e-mail*.

## Kvitteringen

Formularen bruger Shopifys kontaktformular. Den sender erklæringen til **dig**, men sender **ikke** automatisk en kvittering til kunden. Indtil det er automatiseret, skal du sende kvitteringen manuelt **samme dag**. Svar på mailen fra formularen med denne skabelon:

> **Emne:** Kvittering for din fortrydelse – ordre [ORDRENUMMER]
>
> Hej [NAVN]
>
> Vi bekræfter hermed, at vi den [DATO] kl. [KLOKKESLÆT] har modtaget din fortrydelse af følgende aftale:
>
> - Ordre: [ORDRENUMMER]
> - Varer: [VARER / "hele ordren"]
> - Navn: [NAVN]
> - E-mail: [E-MAIL]
>
> Send varen til [RETURADRESSE] senest 14 dage fra i dag. Du betaler selv returfragten, så brug gerne en sporbar forsendelse. Vi betaler beløbet tilbage senest 14 dage efter, at vi modtog din fortrydelse. Vi må dog vente, til vi har modtaget varen eller dokumentation for, at den er sendt.
>
> Venlig hilsen
> Big Kid Club

Dato og klokkeslæt er det tidspunkt, hvor mailen fra formularen kom ind.

**Automatisering (anbefalet, når der kommer ordrer):** Find en Shopify-app i App Store, der specifikt understøtter fortrydelsesfunktionen og sender automatisk kvittering. Tjek også, om Shopify selv har bygget funktionen ind i kundekonti eller ordrestatus. Det udvikler sig hurtigt. Hvis du skifter til en app, så fjern linket i `snippets/bkc-footer-links.liquid`, så der ikke er to forskellige funktioner.

Kilder: [DI om fortrydelsesfunktionen](https://www.danskindustri.dk/vi-radgiver-dig/ecommerce/nyhedsarkiv/nyheder/2026/06/ny-regel-rammer-webshops-fortrydelsesretten-skal-vare-synlig-og-digital-fra-19.-juni-2026), [Hogan Lovells om direktiv 2023/2673](https://www.hoganlovells.com/en/publications/eu-consumer-protection-law-update-new-mandatory-withdrawal-button-what-online-traders-need-to-know)
