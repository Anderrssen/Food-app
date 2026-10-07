# Kollektioner

Shopify kan ikke importere kollektioner fra CSV. Du opretter dem selv i admin under **Produkter → Kollektioner → Opret kollektion**. Det tager ca. 10 minutter.

Vælg **Automatisk** som kollektionstype, så varer kommer med af sig selv ud fra type, tags og pris. **Handle** (nederst under "Søgemaskineoptimering → URL") skal stå præcis som i tabellen, for temaets forside og kurv peger på dem.

| # | Titel | Handle | Betingelse (*produkterne skal matche ...*) |
|---|---|---|---|
| 1 | Mekaniske modeller | `mekaniske-modeller` | **en vilkårlig betingelse:** Produkttype er lig med `Mekanisk træmodel` |
| 2 | Book nooks & miniaturehuse | `book-nooks-miniaturehuse` | **en vilkårlig betingelse:** Produkttype er lig med `Book nook` · Produkttype er lig med `Miniaturehus` · Produktmærke (tag) er lig med `Miniaturehus` |
| 3 | Metalmodeller | `metalmodeller` | Produkttype er lig med `3D-metalmodel` |
| 4 | Under 150 kr. | `under-150-kr` | Pris er mindre end `150` |
| 5 | Gaveidéer | `gaveideer` | Produktmærke (tag) er lig med `Gaveidé` |
| 6 | Tilkøb *(teknisk, ikke i menuen)* | `tilkob` | Produktmærke (tag) er lig med `Tilkøb` |

Kollektion 6 bruges af "Tilføj til din ordre" i kurven. Den skal ikke i menuen. Vil du styre præcis, hvilke tilkøb der vises først, kan du sætte sortering til **Manuelt** og trække dem i rækkefølge.

## Hvilke varer lander hvor

| Vare | Mekaniske | Book nooks & miniaturehuse | Metal | Under 150 | Gaveidéer |
|---|:-:|:-:|:-:|:-:|:-:|
| Golden Gate Bridge i guld | | | ✓ | ✓ | |
| Gummiged i farver | | | ✓ | ✓ | |
| Karrusel (mini) | | | | ✓ | |
| Compact Racer | ✓ | | | ✓ | |
| Wheel-Organizer 2.0 | ✓ | | | ✓ | ✓ |
| Pet Shop | | ✓ | | ✓ | |
| Secret Bloomy Nook | | ✓ | | | ✓ |
| Marble Explorer | ✓ | | | | ✓ |
| Pink Beauty Secret | | ✓ | | | ✓ |
| Trimaran Merihobus | ✓ | | | | ✓ |
| Dream Coffee Factory | ✓ | ✓ | | | ✓ |

## Kollektionstekster (beskrivelse i admin)

**Mekaniske modeller:** Træmodeller med tandhjul, fjedre og kugler, der faktisk bevæger sig, når de er bygget. Alle dele er skåret på forhånd og samles uden lim. Vælg et kort projekt til en enkelt aften eller et stort til flere weekender.

**Book nooks & miniaturehuse:** Små verdener til reolen og skrivebordet. En book nook står mellem bøgerne som et hemmeligt stræde. Et miniaturehus er et rum i lommeformat fyldt med detaljer. Rolige projekter til lange aftener.

**Metalmodeller:** Detaljerede modeller i tyndt stål, som du løsner fra et ark og samler ved at bukke små tapper, uden lim og lodning. Fylder lidt, koster lidt og ser imponerende ud på skrivebordet.

**Under 150 kr.:** Små byggesæt til en enkelt aften, som ekstra gave eller som en nem måde at prøve en ny type model på.

**Gaveidéer:** Byggesæt, der er gode at give: til fødselsdagen, julen eller bare fordi. Se byggetid og sværhedsgrad på hver vare, så du finder én, der passer til modtageren.

## Menu (Webshop → Navigation → Hovedmenu)

1. Mekaniske modeller
2. Book nooks & miniaturehuse
3. Metalmodeller
4. Gaveidéer
5. Under 150 kr.
