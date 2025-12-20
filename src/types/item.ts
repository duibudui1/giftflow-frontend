export type ItemType = "Thing" | "Experience";

export type Item = {
  id: string;
  title: string;        // обязательно
  description: string;  // краткое
  url: string;          // ссылка
  type: ItemType;       // Thing | Experience
  image: string;        // URL (позже может быть file)
  price?: string;
};
