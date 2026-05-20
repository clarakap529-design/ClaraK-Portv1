export function About() {
  return (
    <footer id="about" className="py-20 bg-gray-100">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,220px)_1fr] lg:grid-cols-[minmax(0,260px)_1fr] gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16 items-start">
          <h2 className="mb-0 md:pt-1">About Me</h2>
          <div>
            <p className="text-slate-600 mb-3">
              Hi, thanks for visiting. I have 12+ years crafting enterprise UX, most recently designing
              AI-driven products at scale. I'm a strong advocate for human-centered AI — technology that
              amplifies human judgment, not replaces it.
            </p>
            <p className="text-slate-600 mb-0">
              I'm actively building my AI fluency: using Lovable as part of my design workflow, and expanding
              into Cursor to build things like a chart-generating Figma plugin and this portfolio site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
