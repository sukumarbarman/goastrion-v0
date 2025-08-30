import Container from "./Container";
import Field from "./Field";
export default function CreateChart() {
  return (
    <Container>
      <h2 className="text-2xl text-white font-semibold mb-4">Create your chart</h2>
      <div className="p-6 border border-white/10 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Date of birth" placeholder="YYYY-MM-DD" />
          <Field label="Time of birth" placeholder="HH:MM" />
          <Field label="Timezone" placeholder="Asia/Kolkata (auto)" />
          <Field label="Place" placeholder="City, Country" />
        </div>
        <button className="mt-4 px-5 py-2 rounded bg-cyan-500 text-slate-900 font-semibold">Generate Chart</button>
      </div>
    </Container>
  );
}
