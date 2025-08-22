import Hero from "@/components/Hero";
import CardShowcase from "@/components/CardShowcase";
import Features from "@/components/Features";
import GameModes from "@/components/GameModes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CardShowcase />
      <Features />
      <GameModes />
      <Footer />
    </div>
  );
};

export default Index;