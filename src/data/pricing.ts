export type PricingItem = {
  name: string;
  price: number;
  currency: string;
  description: string;
};

export const pricing: PricingItem[] = [
  {
    name: "Klímaszerelés 3.5 kW-ig",
    price: 75000,
    currency: "HUF",
    description: "Nettó ár + ÁFA / beltéri egységtől",
  },
  {
    name: "Klímaszerelés 3.6 kW-tól",
    price: 90000,
    currency: "HUF",
    description: "Nettó ár + ÁFA / beltéri egységtől",
  },
  {
    name: "Előcsövezés",
    price: 70000,
    currency: "HUF",
    description: "Nettó ár + ÁFA, beltéri egységre vonatkozik.",
  },
];
