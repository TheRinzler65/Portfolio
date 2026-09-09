portfolio-astro/
├── astro.config.mjs          (Tailwind v4 via @tailwindcss/vite)
├── package.json
├── tsconfig.json
├── public/
│   └── assets/                (copié tel quel : techno/, projects/, profile.jpg...)
├── src/
│   ├── content/
│   │   └── config.ts          (schemas Zod: projects, miscProjects, veilleArticles)
│   │   └── projects/*.md      (1 fichier .md par projet AP1-AP4)
│   │   └── misc/*.md
│   │   └── veille/*.md
│   ├── data/
│   │   └── experiences.ts     (skillsReseau, skillsDev, experiences — reste en .ts, pas de contenu long-form)
│   │   └── veille-meta.ts     (veilleBilan, veilleTools)
│   ├── layouts/
│   │   └── BaseLayout.astro   (head, nav, footer, modal contact inclus une fois)
│   ├── components/
│   │   ├── Navbar.astro       (+ petit <script> inline pour toggle mobile)
│   │   ├── ContactModal.astro (+ <script> pour open/close + fetch EmailJS)
│   │   ├── Home.astro
│   │   ├── About.astro
│   │   ├── Experiences.astro
│   │   ├── ProjectCard.astro
│   │   ├── Title.astro
│   │   ├── Footer.astro
│   │   └── ui/                (Button.astro, Badge.astro — remplace DaisyUI)
│   ├── pages/
│   │   ├── index.astro                (Home+About+Experiences+Projects)
│   │   ├── project/[slug].astro       (détail projet, généré via getStaticPaths)
│   │   ├── divers.astro
│   │   ├── veille.astro               (tabs en CSS + petit JS pour activer/désactiver)
│   │   ├── competences.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css         (@import tailwindcss + classes custom .btn/.badge etc.)