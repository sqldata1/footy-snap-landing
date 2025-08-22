import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GameModes = () => {
  const modes = [
    {
      name: "Classic",
      description: "Standard match using your active deck",
      reward: "80 coins",
      active: true
    },
    {
      name: "Skill Stars",
      description: "Test your tactical knowledge",
      reward: "150 coins",
      active: false
    },
    {
      name: "Mirror Match",
      description: "Face opponents with identical cards",
      reward: "100 coins",
      active: false
    },
    {
      name: "Draft Pick",
      description: "Build your team from a random selection",
      reward: "200 coins",
      active: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Multiple Game <span className="text-brand-yellow">Modes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your battle style and earn rewards. Each mode offers unique challenges and strategic gameplay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modes.map((mode, index) => (
            <Card 
              key={mode.name}
              className={`relative p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer ${
                mode.active ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {mode.active && (
                <div className="absolute -top-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ACTIVE
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">{mode.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {mode.description}
                </p>
                <div className="text-brand-yellow font-semibold mb-4">
                  Win reward: {mode.reward}
                </div>
                <Button 
                  variant={mode.active ? "hero" : "outline"} 
                  size="sm" 
                  className="w-full"
                >
                  {mode.active ? "Playing Now" : "Try Mode"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to test your skills against players worldwide?
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8">
            Start Your First Match
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameModes;