# Sithomo Family Archive

> *Umlando Nemvelaphi Yesibongo SakwaSithomo* — Mbatha oShandu kaNdaba

A responsive, culturally respectful digital archive for the Sithomo family. It preserves the origin story of the surname, the clan praises (*izithakazelo*), sacred customs (*usiko*), the multi-generational family lineage, and the Qhulaza Burial Scheme, all in a single, dependency-free web page.

Based on the family history document compiled and last updated in **June 2025**.

---

## Table of Contents

- [Features](#features)
- [Preview](#preview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Updating the Lineaata](#updating-the-lineage-data)
- [How the Registration Form Works](#how-the-registration-form-works)
- [Deployment](#deployment)
- [Design](#design)
- [Privacy & Data Handling](#privacy--data-handling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features

- **Origin story & wishes for the surname** — how the Sithomo name descends from the Mbatha clan, alongside the family's four guiding wishes (*izifiso ngesibongo*).
- **Izithakazelo & Usiko** — the clan praises presented as a praise-poem, plus the birth custom of placing the *inonga* at the *emsamo*.
- **Interactive genealogy** — seven ancestral patriarchs (*amakhehla avelayo*) rendered as nested, expandable accordions that support many generations of sub-branches.
- **Instant name search** — search any name across all branches and see the full lineage path (e.g. `uKhanda → Mvutheli → uSgweje → Ndumuka`).
- **Qhulaza Burial Scheme** — constitution, membership rules, fees, benefits, trustees, and rotating meeting venues.
- **Membership application form** — main member and up to 10 beneficiaries, with client-side validation.
- **Fully responsive** — designed for phones first, since many family members will view it on mobile.
- **Zero dependencies** — plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no package manager.

## Preview

Add screenshots to a `docs/` folder and reference them here:

```md
![Home](docs/home.png)
![Genealogy](docs/lineage.png)
```

## Project Structure

```
sithomo-family-archive/
├── index.html      # The entire site: markup, styles, scripts, and lineage data
└── README.md
```

The site is intentionally a single self-contained file so it can be hosted anywhere and preserved easily.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/sithomo-family-archive.git
   cd sithomo-family-archive
   ```
2. Open `index.html` in any modern browser. That's it — no install or build required.

> If you downloaded the file as `sithomo-family-archive.html`, rename it to `index.html` so hosting platforms serve it by default.

## Updating the Lineage Data

All family data lives in a single JavaScript array named `lineageData` near the bottom of `index.html`. Each person is an object:

```js
{
  name: "uMbhejisa (Simiyoni)",       // required
  note: "wayeganwe umaZulu",          // optional: marriage / clan detail
  children: [ /* nested person objects */ ]   // optional
}
```

Add, correct, or nest entries and the accordion tree and the search index update automatically. People without `children` render as simple list entries.

## How the Registration Form Works

The site has no backend. On a valid submission, the form:

1. Validates required fields (including a 13-digit ID number).
2. Builds a plain-text summary of the main member and beneficiaries.
3. Opens the user's email app with a pre-filled message addressed to the family's contact email.

Browsers cannot attach files through `mailto:` links, so applicants must **manually attach** copies of their ID / birth certificates before sending. No form data is stored or transmitted by the site itself.

To change the recipient address, edit the `mailto:` line in the form's submit handler.

## Deployment

**GitHub Pages (free):**

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site will be live at `https://<your-username>.github.io/sithomo-family-archive/`.

Any static host works equally well (Netlify, Cloudflare Pages, a standard web server).

## Design

- **Palette:** warm gold, deep charcoal, and mahogany/green accents drawn from African heritage aesthetics.
- **Typography:** [Fraunces](https://fonts.google.com/specimen/Fraunces) for headings and [Work Sans](https://fonts.google.com/specimen/Work+Sans) for body text, loaded from Google Fonts.
- **Accessibility:** semantic HTML, keyboard-operable accordions (native `<details>`), and reduced-motion support.

## Privacy & Data Handling

This archive contains names, family relationships, and contact details of living people. Before making the repository or site public:

- Confirm that family members are comfortable with their details being published.
- Consider removing or replacing personal phone numbers with a general contact email.
- Consider keeping the repository **private** and hosting the site behind access controls if the lineage should only be visible to family.

## Contributing

Corrections to names, spellings, and relationships are welcome from family members. To suggest a change:

1. Open an issue describing the correction and which branch of the family it affects, or
2. Fork the repository, edit the `lineageData` array, and open a pull request.

For accuracy, please have changes confirmed by one of the document compilers before merging.

## License

This project contains private family history and is shared for family use. **All rights reserved** unless the maintainers state otherwise. If you intend to open-source the code (excluding the family data), consider separating the template from the `lineageData` and licensing the template under MIT.

## Acknowledgements

- The elders (*omkhulu nodadewabo womkhulu*) whose knowledge of the family history made this record possible.
- The document compilers: Msizi Sithomo, Mthenjwa Sithomo, Lindokuhle Sithomo, and Tholinhlanhla Sithomo.
- The Qhulaza Club trustees and members.

*Ukuthi umlando wesibongo sethu ungapheli.* — That the history of our surname may never end.
