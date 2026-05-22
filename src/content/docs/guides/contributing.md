---
title: Contributing
description: Help translate TrucklineMP documentation into your language.
---

TrucklineMP documentation is open to community contributions, especially translations. If you'd like to help make the docs available in your language, this guide is for you.

## How Translations Work

Our documentation uses a directory-based structure for languages:

- English docs live in `src/content/docs/`
- Polish docs live in `src/content/docs/pl/`
- Each file is translated independently

When you contribute a translation, you're creating the Polish version of an English guide. Both versions appear on the site with a language switcher in the header.

## Prerequisites

- A **GitHub account**
- Basic understanding of **Markdown** (the docs use `.md` format)
- Familiarity with **git** and pull requests (or willingness to learn)

## Getting Started

### 1. Fork the Repository

Go to the [TrucklineMP docs repository](https://github.com/trucklinemp/docs) and click **Fork**. This creates your own copy of the project.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs
```

### 3. Create a Branch

Make a branch for your translation work:

```bash
git checkout -b translate/pl-guides
```

Use a clear branch name like `translate/pl-FILENAME` so reviewers know what you're working on.

## Translating a Guide

### File Structure

To translate a guide, create a matching file in the Polish directory:

- English: `src/content/docs/guides/getting-started.md`
- Polish: `src/content/docs/pl/guides/getting-started.md`

### Translate the Content

1. Copy the English version:
   ```bash
   cp src/content/docs/guides/getting-started.md src/content/docs/pl/guides/getting-started.md
   ```

2. Open the Polish file and translate the entire content, including:
   - The **frontmatter** (title and description)
   - All body text and headings
   - Links should remain unchanged (they still point to slug paths)

### Example

**English frontmatter:**
```yaml
---
title: Getting Started
description: How to install TrucklineMP and join your first convoy.
---
```

**Polish frontmatter:**
```yaml
---
title: Zaczeć pracę
description: Jak zainstalować TrucklineMP i dołączyć do swojego pierwszego konwoju.
---
```

## Translation Guidelines

- **Be accurate, not literal.** Prioritize clarity and naturalness in your language.
- **Preserve formatting.** Keep Markdown syntax, code blocks, and links intact.
- **Use consistent terminology.** If you translate "convoy" as "konwój", use it everywhere.
- **Keep tone casual and friendly.** Match the relaxed, direct style of the English docs.
- **Don't translate code examples.** Comments in code can stay in English.

## Submitting Your Work

### 1. Commit Your Changes

```bash
git add src/content/docs/pl/guides/getting-started.md
git commit -m "translate: Polish version of getting-started guide"
```

Use clear commit messages like:
- `translate: Polish version of [guide-name]`
- `translate: Update Polish FAQ with new FAQ entries`

### 2. Push to Your Fork

```bash
git push origin translate/pl-guides
```

### 3. Open a Pull Request

Go to the original repository and you'll see a prompt to open a **Pull Request** (PR). Click it and:

- Set the title: `Translate [guide-name] to Polish`
- Write a brief description: "This PR adds a Polish translation of the getting-started guide."
- Link any issues if applicable

### 4. Review Process

A maintainer will review your translation for:

- Accuracy and clarity
- Consistency with other Polish docs (if any)
- Proper Markdown formatting
- Correct frontmatter

You may be asked to make adjustments. This is normal and helps maintain quality.

## Tips for Success

- **Start small.** Translate one guide first to get a feel for the process.
- **Ask for help.** If a term is ambiguous, comment in your PR asking for guidance.
- **Check the rendered site.** Before submitting, run `npm run dev` locally to preview your translation.
- **Coordinate with other translators.** If multiple people are translating Polish, join the Discord to avoid duplication.

## Local Testing

To test your translation locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/pl/guides/getting-started` to see your Polish translation rendered.

## What Languages Are We Adding?

Currently, we're accepting translations for:

- **Polish** (`pl`) — [contribute here]
- More languages coming soon!

If you'd like to translate into another language, open an issue to discuss adding it.

## Questions?

Join our **Discord** and ask in the `#docs-translations` channel. The community is here to help.

Thank you for contributing! 🚚
