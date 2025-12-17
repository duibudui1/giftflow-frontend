import { useLang } from "../../context/LanguageContext";

export default function HomeHero() {
  const { t } = useLang();

  return (
    <section className="grid lg:grid-cols-2 gap-16 mb-20 transition-colors">

      {/* LEFT SIDE – text editorial */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-serif leading-tight">
          {t("hero.title")}
        </h1>

        <p className="mt-6 text-[#4d4c4a] dark:text-[#bcbcbc] leading-relaxed text-lg">
          {t("hero.subtitle")}
        </p>

        <button
          className="
            mt-10 border border-[var(--text)] px-10 py-3 rounded-full w-fit 
            text-sm uppercase tracking-wide
            hover:bg-[var(--text)] hover:text-[var(--bg)]
            transition
          "
        >
          {t("hero.cta")}
        </button>
      </div>

      {/* RIGHT SIDE – single hero image */}
      <div className="w-full">
        <img
          className="rounded-xl w-full h-[420px] md:h-[520px] object-cover"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
        />
      </div>

    </section>
  );
}
