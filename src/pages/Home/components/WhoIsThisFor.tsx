const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-teal-100">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Evanea for?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Evanea for Textile Design is built for professionals and institutions who want to present textile ideas with greater realism, clarity, and visual impact beyond flat swatches.
        </p>

        {/* Textile Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile and home furnishing designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Present collections on cushions, curtains, upholstery, and décor to show how fabrics behave in real-world settings.
            </li>
            <li>
              Help clients and buyers understand designs instantly, reducing back-and-forth in decision-making.
            </li>
          </ul>
        </div>

        {/* Surface Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Surface pattern designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Explore pattern repeats, placements, and scale with greater control across folds, seams, and edges.
            </li>
            <li>
              Identify what works visually before committing time and resources to production.
            </li>
          </ul>
        </div>

        {/* Students */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile design students and educators
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Learn and teach modern textile visualization, material behavior, and digital sampling techniques.
            </li>
            <li>
              Build industry-relevant portfolios with professional, presentation-ready outputs.
            </li>
          </ul>
        </div>

        {/* Brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Brands, mills, and textile studios
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Present collections through high-quality visuals that elevate perceived value and market readiness.
            </li>
            <li>
              Strengthen communication across buyers, partners, and internal teams.
            </li>
          </ul>
        </div>

        {/* Creators */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Independent creators and textile entrepreneurs
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Create mood boards, lookbooks, and pitch decks that showcase textiles in a more immersive and aspirational way.
            </li>
            <li>
              Build stronger visual storytelling to attract clients and grow their business.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;