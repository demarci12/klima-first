export type Service = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: "klima-telepites",
    title: "Klíma Telepítés és Értékesítés",
    description: "Szakszerű klíma telepítés Budapesten, ingyenes helyszíni felméréssel és személyre szabott ajánlattal.",
    keywords: ["klíma telepítés", "klíma értékesítés", "klíma szerelés"],
    features: [
      "Ingyenes helyszíni felmérés",
      "Kiszállási díj nélkül Budapesten",
      "Precíz, esztétikus szerelés",
    ],
  },
  {
    slug: "klima-javitas",
    title: "Klíma Javítás",
    description: "Gyors és megbízható klíma javítás Budapesten, hibakereséssel és alkatrészbeszerzéssel.",
    keywords: ["klíma javítás", "klíma karbantartás", "klíma szerviz"],
    features: [
      "Diagnosztika és javítás akár aznap",
      "Gyors alkatrészpótlás",
      "Garanciális javítási opciók",
    ],
  },
  {
    slug: "klima-tisztitas",
    title: "Klíma Tisztítás és Karbantartás",
    description: "Hatékony klíma tisztítás és karbantartás a hosszabb élettartamért és jobb légminőségért.",
    keywords: ["klíma tisztítás", "klíma karbantartás", "klíma szűrő tisztítás"],
    features: [
      "Beltéri egység alapos tisztítása",
      "Hőcserélő és csőtisztítás",
      "Éves karbantartási csomagok",
    ],
  },
  {
    slug: "futes-klimaval",
    title: "Fűtés Klímával",
    description: "Energiatakarékos fűtés klímával Budapesten – H tarifa és GEO tarifa támogatással.",
    keywords: ["fűtés klímával", "klíma fűtés", "H tarifa"],
    features: [
      "Hatékony fűtés -15°C-ig",
      "GEO és H tarifás működés",
      "Gyors beüzemelés és beállítás",
    ],
  },
];
