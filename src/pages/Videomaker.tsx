import { Film, Clapperboard, Video, MonitorPlay, Sparkles, Camera } from "lucide-react";
import VideoOptionCard from "@/components/VideoOptionCard";
import { Link } from "react-router-dom";

const videoOptions = [
  {
    title: "Vídeo Institucional",
    description: "Apresente sua empresa de forma profissional com vídeos que transmitem sua missão, valores e diferenciais.",
    icon: Film,
  },
  {
    title: "Vídeo Comercial",
    description: "Anúncios impactantes para redes sociais e TV que convertem visualizações em vendas.",
    icon: Clapperboard,
  },
  {
    title: "Vídeo de Produto",
    description: "Destaque seu produto com filmagens detalhadas que mostram cada característica e benefício.",
    icon: Video,
  },
  {
    title: "Vídeo para Redes Sociais",
    description: "Conteúdo otimizado para Instagram, TikTok e YouTube que engaja e viraliza.",
    icon: MonitorPlay,
  },
  {
    title: "Motion Graphics",
    description: "Animações criativas e profissionais que dão vida às suas ideias e mensagens.",
    icon: Sparkles,
  },
  {
    title: "Cobertura de Eventos",
    description: "Capture momentos especiais com qualidade cinematográfica e edição profissional.",
    icon: Camera,
  },
];

const Videomaker = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl text-foreground hover:text-primary transition-colors">
            VIDEOMAKER
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#opcoes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Opções
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Produção Audiovisual
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            ESCOLHA SEU{" "}
            <span className="text-gradient">VÍDEO</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Transformamos suas ideias em produções audiovisuais de alta qualidade. 
            Selecione o tipo de vídeo ideal para o seu projeto.
          </p>
        </div>
      </section>

      {/* Video Options Grid */}
      <section id="opcoes" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoOptions.map((option, index) => (
              <VideoOptionCard
                key={option.title}
                title={option.title}
                description={option.description}
                icon={option.icon}
                delay={300 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-12 text-center card-shadow">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                PRONTO PARA <span className="text-gradient">COMEÇAR</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Entre em contato conosco e vamos criar algo incrível juntos.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow">
                Solicitar Orçamento
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          © 2024 Videomaker. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Videomaker;
