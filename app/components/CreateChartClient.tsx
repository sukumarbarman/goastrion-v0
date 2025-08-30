"use client";

import Container from "./Container";
import Field from "./Field";
import { useI18n } from "../lib/i18n";

export default function CreateChartClient() {
  const { t } = useI18n();

  return (
    <Container>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          {t("create.title")}
        </h2>
        <p className="mt-2 text-sm md:text-base text-slate-400 max-w-2xl">
          Enter your birth details. We won't store anything unless you save.
        </p>
      </div>

      <div className="bg-[#141A2A] rounded-2xl p-6 border border-white/5">
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Date of birth" placeholder="YYYY-MM-DD" />
          <Field label="Time of birth" placeholder="HH:MM" />
          <Field label="Timezone" placeholder="Asia/Kolkata (auto)" />
          <Field label="Place" placeholder="City, Country" />
        </div>

        <p className="mt-3 text-xs text-slate-400">Privacy-first: local until you hit Save.</p>

        <div className="mt-4 flex gap-3">
          <button className="rounded-full bg-cyan-500 px-5 py-2.5 text-slate-950 font-semibold hover:bg-cyan-400">
            {t("create.generate")}
          </button>
          <button className="rounded-full border border-white/10 px-5 py-2.5 text-slate-200 hover:border-white/20">
            {t("create.reset")}
          </button>
        </div>
      </div>
    </Container>
  );
}
