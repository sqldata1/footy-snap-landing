import { Button } from "@/components/ui/button";

const CardShowcase = () => {
  const cardTypes = [
    {
      type: "GOAT",
      rating: "95",
      gradient: "bg-gradient-goat",
      variant: "goat" as const,
      description: "Legendary players with exceptional stats"
    },
    {
      type: "OTW",
      rating: "85",
      gradient: "bg-gradient-otw", 
      variant: "otw" as const,
      description: "Ones to Watch - Rising stars"
    },
    {
      type: "GOLD",
      rating: "83",
      gradient: "bg-gradient-gold",
      variant: "gold" as const,
      description: "Premium players with high ratings"
    },
    {
      type: "SILVER",
      rating: "79",
      gradient: "bg-gradient-silver",
      variant: "silver" as const,
      description: "Solid performers for your squad"
    },
    {
      type: "BRONZE",
      rating: "69",
      gradient: "bg-gradient-bronze",
      variant: "bronze" as const,
      description: "Entry-level cards to start your journey"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collect Legendary <span className="text-brand-red">Cards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your ultimate squad with players from different tiers. Each card rarity offers unique advantages in battle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {cardTypes.map((card, index) => (
            <div
              key={card.type}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className={`${card.gradient} p-4 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer`}>
                <div className="text-center">
                  <div className="text-xs font-semibold text-white/80 mb-1">{card.type}</div>
                  <div className="text-3xl font-bold text-white mb-4">{card.rating}</div>
                  
                  {/* Mock player avatar */}
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Stats */}
                  <div className="text-xs text-white/90 space-y-1">
                    <div className="flex justify-between">
                      <span>PAC</span>
                      <span>{Number(card.rating) - 10}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SHO</span>
                      <span>{Number(card.rating) - 15}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PAS</span>
                      <span>{Number(card.rating) - 5}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description on hover */}
              <div className="absolute -bottom-2 left-0 right-0 bg-card rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="text-sm text-center text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8">
            Open Your First Pack
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;