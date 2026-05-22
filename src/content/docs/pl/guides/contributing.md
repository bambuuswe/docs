---
title: Współtworzenie
description: Pomóż przetłumaczyć dokumentację TrucklineMP na twój język.
---

Dokumentacja TrucklineMP jest otwarta na wkład społeczności, szczególnie tłumaczenia. Jeśli chciałbyś pomóc w udostępnieniu dokumentacji w swoim języku, ten przewodnik jest dla ciebie.

## Jak działają tłumaczenia

Nasza dokumentacja używa struktury katalogów dla języków:

- Dokumenty angielskie znajdują się w `src/content/docs/`
- Dokumenty polskie znajdują się w `src/content/docs/pl/`
- Każdy plik jest tłumaczony niezależnie

Gdy wnosisz tłumaczenie, tworzysz polską wersję angielskiego przewodnika. Obie wersje pojawiają się na stronie z przełącznikiem języka w nagłówku.

## Wymagania wstępne

- Konto **GitHub**
- Podstawowa znajomość **Markdown** (dokumenty używają formatu `.md`)
- Zaznajomienie się z **git** i pull requestami (lub chęć do nauki)

## Pierwsze kroki

### 1. Forkuj repozytorium

Przejdź do [repozytorium dokumentacji TrucklineMP](https://github.com/trucklinemp/docs) i kliknij **Fork**. To tworzy twoją kopię projektu.

### 2. Sklonuj swój fork

```bash
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs
```

### 3. Utwórz gałąź

Utwórz gałąź dla swojej pracy translacyjnej:

```bash
git checkout -b translate/pl-guides
```

Użyj jasnej nazwy gałęzi jak `translate/pl-NAZWA_PLIKU`, aby recenzenci wiedzieli, nad czym pracujesz.

## Tłumaczenie przewodnika

### Struktura plików

Aby przetłumaczyć przewodnik, utwórz pasujący plik w katalogu polskim:

- Angielski: `src/content/docs/guides/getting-started.md`
- Polski: `src/content/docs/pl/guides/getting-started.md`

### Przetłumacz zawartość

1. Skopiuj wersję angielską:
   ```bash
   cp src/content/docs/guides/getting-started.md src/content/docs/pl/guides/getting-started.md
   ```

2. Otwórz plik polski i przetłumacz całą zawartość, w tym:
   - **frontmatter** (tytuł i opis)
   - Cały tekst główny i nagłówki
   - Linki powinny pozostać niezmienione (nadal wskazują na ścieżki slug)

### Przykład

**Angielski frontmatter:**
```yaml
---
title: Getting Started
description: How to install TrucklineMP and join your first convoy.
---
```

**Polski frontmatter:**
```yaml
---
title: Zaczeć pracę
description: Jak zainstalować TrucklineMP i dołączyć do swojego pierwszego konwoju.
---
```

## Wytyczne tłumaczenia

- **Bądź dokładny, nie dosłowny.** Priorytet to jasność i naturalność w twoim języku.
- **Zachowaj formatowanie.** Zachowaj składnię Markdown, bloki kodu i linki.
- **Używaj spójnej terminologii.** Jeśli tłumaczysz "convoy" jako "konwój", używaj tego wszędzie.
- **Zachowaj swobodny i przyjazny ton.** Dopasuj się do luźnego, bezpośredniego stylu dokumentacji angielskiej.
- **Nie tłumacz przykładów kodu.** Komentarze w kodzie mogą zostać w angielszczyźnie.

## Przesyłanie swoich prac

### 1. Zacommituj swoje zmiany

```bash
git add src/content/docs/pl/guides/getting-started.md
git commit -m "translate: Polish version of getting-started guide"
```

Używaj jasnych wiadomości commitów, takich jak:
- `translate: Polish version of [guide-name]`
- `translate: Update Polish FAQ with new FAQ entries`

### 2. Wyślij do swojego forka

```bash
git push origin translate/pl-guides
```

### 3. Otwórz Pull Request

Przejdź do oryginalnego repozytorium, a zobaczysz monit do otwarcia **Pull Request** (PR). Kliknij go i:

- Ustaw tytuł: `Translate [guide-name] to Polish`
- Napisz krótki opis: "This PR adds a Polish translation of the getting-started guide."
- Powiąż wszelkie problemy, jeśli ma to zastosowanie

### 4. Proces przeglądu

Opiekun przejrzy twoje tłumaczenie pod kątem:

- Dokładności i przejrzystości
- Spójności z innymi polskimi dokumentami (jeśli istnieją)
- Prawidłowego formatowania Markdown
- Prawidłowego frontmattera

Możesz zostać poproszony o wprowadzenie zmian. To jest normalne i pomaga utrzymać jakość.

## Porady dla sukcesu

- **Zacznij od małego.** Przetłumacz najpierw jeden przewodnik, aby przyzwyczaić się do procesu.
- **Poproś o pomoc.** Jeśli termin jest dwuznaczny, skomentuj w swoim PR, prosząc o wskazówki.
- **Sprawdź renderowaną stronę.** Przed przesłaniem uruchom `npm run dev` lokalnie, aby podejrzeć swoje tłumaczenie.
- **Koordynuj się z innymi tłumaczami.** Jeśli wiele osób tłumaczy na polski, dołącz do Discorda, aby uniknąć duplikacji.

## Testowanie lokalne

Aby przetestować swoje tłumaczenie lokalnie:

```bash
npm install
npm run dev
```

Odwiedź `http://localhost:3000/pl/guides/getting-started`, aby zobaczyć wyrenderowane polskie tłumaczenie.

## Jakie języki dodajemy?

Obecnie przyjmujemy tłumaczenia na:

- **Polski** (`pl`) — [przyczynij się tutaj]
- Więcej języków wkrótce!

Jeśli chciałbyś przetłumaczyć na inny język, otwórz zgłoszenie, aby omówić jego dodanie.

## Pytania?

Dołącz do naszego **Discord** i zapytaj w kanale `#docs-translations`. Społeczność jest tutaj, aby pomóc.

Dziękujemy za wkład! 🚚
