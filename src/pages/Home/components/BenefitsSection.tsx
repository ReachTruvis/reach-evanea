import { Sparkles, Eye, Layers, Share2, Palette, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "High-Impact Textile Visualization",
      description:
        "Transform flat fabric designs into lifelike visuals with realistic folds, textures, and lighting, making every textile feel tangible and premium."
    },
    {
      icon: Eye,
      title: "Clear Fabric Communication",
      description:
        "Show how textiles behave in real-world settings like cushions, curtains, and upholstery, helping stakeholders instantly understand design intent."
    },
    {
      icon: Layers,
      title: "Better Pattern and Scale Exploration",
      description:
        "Experiment with repeats, placements, and scale across surfaces and forms, allowing designers to refine patterns before production."
    },
    {
      icon: Share2,
      title: "Stronger Client and Buyer Presentations",
      description:
        "Create immersive visuals, lookbooks, and presentation assets that make textile concepts more persuasive and easier to approve."
    },
    {
      icon: Palette,
      title: "Advanced Material and Texture Control",
      description:
        "Control fabric qualities such as softness, sheen, and texture to communicate the full story of a textile beyond just its pattern."
    },
    {
      icon: Zap,
      title: "Faster Design Iteration and Workflow",
      description:
        "Quickly test colorways, textures, and design variations, reducing dependency on physical samples and speeding up decision-making."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-teal-700">
          Benefits of REACH Evanea 
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Bring textile designs to life with immersive visualization, faster iteration, and more impactful presentation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-400 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;