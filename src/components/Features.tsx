import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Strategic Battles",
      description: "Use player stats wisely to outmaneuver opponents in tactical card battles",
      icon: "⚔️"
    },
    {
      title: "Deck Building", 
      description: "Create the perfect squad by combining players with complementary skills",
      icon: "🏗️"
    },
    {
      title: "Pack Opening",
      description: "Experience the thrill of discovering rare cards in premium packs",
      icon: "📦"
    },
    {
      title: "Live Tournaments",
      description: "Compete in real-time tournaments for exclusive rewards and rankings",
      icon: "🏆"
    },
    {
      title: "Player Trading",
      description: "Trade cards with other players to complete your dream collection",
      icon: "🔄"
    },
    {
      title: "Weekly Events",
      description: "Participate in special events featuring limited-time cards and bonuses",
      icon: "📅"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Players Love <span className="text-brand-red">Footy Snap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover all the features that make Footy Snap the ultimate football card gaming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 hover:shadow-glow transition-all duration-300 hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;