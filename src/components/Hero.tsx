import { Button } from "@/components/ui/button";
import heroStadium from "@/assets/hero-stadium.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroStadium})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-red to-pink-500 bg-clip-text text-transparent">
                Footy
              </span>
              <span className="inline-block ml-4 px-4 py-2 bg-gradient-gold rounded-lg border-2 border-yellow-400 text-white text-4xl md:text-6xl">
                SNAP!
              </span>
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A strategic card game where you battle with football player stats
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Playing Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
              Watch Trailer
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">1M+</div>
              <div className="text-sm text-muted-foreground">Cards Traded</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">500K+</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-muted-foreground">Matches Daily</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-goat rounded-lg opacity-50 animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-otw rounded-lg opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-14 h-14 bg-gradient-gold rounded-lg opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;