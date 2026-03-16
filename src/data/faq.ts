export type FAQItem = {
  question: string;
  answer: string;
};

export const faq: FAQItem[] = [
  {
    question: "Mennyi ideig tart a klíma beszerelése?",
    answer: "Egy beltéri egység beszerelése általában 3-5 óra, több egység esetén hosszabb lehet.",
  },
  {
    question: "Ingyenes a helyszíni felmérés?",
    answer: "Igen, Budapesten és Pest megyén belül a helyszíni felmérés és a kiszállás is ingyenes.",
  },
  {
    question: "Milyen garancia jár a szerelésre?",
    answer: "12 hónap garanciát vállalunk a szerelési munkára. Rendszeres karbantartás esetén a gyári garancia is megőrizhető.",
  },
  {
    question: "Klímával lehet fűteni is?",
    answer: "Igen, a modern inverteres klímaberendezések hatékonyan fűtenek akár -15°C-ig is, és energiatakarékosabbak lehetnek a gázfűtésnél.",
  },
  {
    question: "Milyen márkákkal dolgoznak?",
    answer: "Fisher, Fujitsu, Toshiba és Daikin klímaberendezéseket forgalmazunk és szerelünk.",
  },
];
