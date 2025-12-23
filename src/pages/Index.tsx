import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <div className="opacity-0 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Produção de Vídeos
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          CRIAMOS <span className="text-gradient">HISTÓRIAS</span>
          <br />
          EM VÍDEO
        </h1>
        
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Transformamos suas ideias em produções audiovisuais memoráveis e de alta qualidade.
        </p>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Link
            to="/videomaker"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow"
          >
            <Play className="w-5 h-5" />
            Videomaker
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
