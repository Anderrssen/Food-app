# Produktsikkerhed (GPSR)

> ⚠️ **Skal udfyldes og kontrolleres, før en vare sættes til Aktiv.** Alle oplysninger skal komme fra **emballagen, vejledningen eller leverandøren**. Opfind ikke adresser, aldersgrænser eller advarsler.

Produktsikkerhedsforordningen ((EU) 2023/988, artikel 19) har gældet siden 13. december 2024. Den kræver, at hver vare, der sælges online, **tydeligt** viser:

1. **Producent:** navn, registreret firmanavn eller varemærke, postadresse og e-mail eller hjemmeside
2. **Ansvarlig person i EU**, hvis producenten ligger uden for EU: navn og kontaktoplysninger
3. **Identifikation af varen:** billede, type, og batch- eller serienummer hvor relevant
4. **Advarsler og sikkerhedsoplysninger** på dansk

## Sådan er det bygget ind i temaet

En blok på produktsiden (`snippets/bkc-produktsikkerhed.liquid`) viser:

- **alder og advarsler synligt lige under købsknappen**
- **producent, EU-ansvarlig og model** i en fold-ud: "Produktsikkerhed og producent"

Mangler producentfeltet, vises intet for kunden. I Theme Editor får du en rød advarsel, så du kan se, hvilke varer der mangler data.

### Opret metafelterne (én gang)

**Indstillinger → Brugerdefinerede data → Produkter → Tilføj definition**. Navnerum og nøgle skal stå præcis som her:

| Navn | Navnerum og nøgle | Type |
|---|---|---|
| GPSR: Producent | `custom.gpsr_producent` | Tekst over flere linjer |
| GPSR: Ansvarlig person i EU | `custom.gpsr_eu_ansvarlig` | Tekst over flere linjer |
| GPSR: Model/varenr. | `custom.gpsr_model` | Tekst på én linje |
| GPSR: Anbefalet alder | `custom.gpsr_alder` | Tekst på én linje |
| GPSR: Advarsler | `custom.gpsr_advarsler` | Tekst over flere linjer |

Derefter kan felterne udfyldes nederst på hver vare i admin.

## Hvad du skal indhente pr. mærke

| Mærke | Producent (tjek på emballagen) | Uden for EU? | Det skal du gøre |
|---|---|---|---|
| Metal Earth | Fascinations (USA). TJEK præcis firmanavn og adresse | Ja | Bed brandet via Faire om GPSR-oplysninger: producentadresse og **EU-ansvarlig person** |
| Ugears | Ugears (Ukraine). TJEK præcis firmanavn og adresse | Ja | Som ovenfor. Ugears har EU-distribution, så spørg, hvem der er EU-ansvarlig |
| ROKR / Rolife | Robotime (Kina). TJEK præcis firmanavn og adresse | Ja | Som ovenfor. Mange Robotime-æsker angiver en EU-repræsentant. Skriv den af |

> **Vigtigt om din rolle:** Hvis en vare sendes til dig direkte fra et land uden for EU, og der **ikke** findes en EU-ansvarlig person, kan du selv blive **importør**. Så har du pligter efter GPSR, fx skal dit navn og din adresse stå på varen. Køb derfor helst varer, hvor leverandøren kan dokumentere en EU-ansvarlig person, eller som sendes fra et EU-lager. Spørg Sikkerhedsstyrelsen ([sik.dk](https://www.sik.dk)), hvis du er i tvivl.

## Data pr. vare

Alder er udfyldt, hvor den fandtes i de kilder, der blev brugt i fase 2 (se `docs/produkter.md`). Alt andet skal komme fra emballagen eller leverandøren.

| Vare | Model/varenr. | Alder (kilde) | Advarsler: tjek emballagen for især |
|---|---|---|---|
| Golden Gate Bridge i guld | MMS001G | 14+ | Skarpe kanter og spidser på metaldele, små dele |
| Gummiged i farver | MMS183 | TJEK | Skarpe kanter og spidser, små dele |
| Karrusel (mini) | TG404 | 8+ (forhandler) | Små dele |
| Compact Racer | 122086 (TJEK) | TJEK | Små dele |
| Wheel-Organizer 2.0 | TJEK | 14+ | Små dele |
| Pet Shop | TJEK | TJEK | Små dele |
| Secret Bloomy Nook | TGE04 | 14+ | Små dele, **batterier/LED** hvis lys medfølger |
| Marble Explorer | LG503 | 14+ | Små dele, **små stålkugler** |
| Pink Beauty Secret | TJEK | TJEK | Små dele, **LED/USB-C-strøm** |
| Trimaran Merihobus | 70059 | TJEK | Små dele |
| Dream Coffee Factory | EAB02 | TJEK | Små dele, **LED, spilledåse, batterier/strøm** |

### Formuleringer til advarsler

Brug dem kun, hvis advarslen faktisk står på emballagen (oversat til dansk):

- *Ikke egnet til børn under 3 år. Indeholder små dele, som kan sluges. Kvælningsfare.*
- *Ikke legetøj. Anbefalet til personer på 14 år og derover.*
- *Metaldelene har skarpe kanter og spidser. Brug forsigtighed ved samling.*
- *Indeholder små kugler. Opbevares utilgængeligt for små børn.*
- *Indeholder batterier/LED. Brug kun den angivne strømforsyning. Brugte batterier afleveres til genbrug.*

**Aldersmærkning:** Brug den alder, producenten angiver. Står der 14+, skriver du 14+. Står der intet, lader du feltet være tomt og spørger leverandøren.

Kilder: [Vimm: GPSR artikel 19](https://www.vimm.be/en/blog/gpsr-article-19-product-information-webshop), [Fieldfisher om GPSR](https://www.fieldfisher.com/en/insights/new-obligations-under-the-eu-general-product-safety-regulation)
