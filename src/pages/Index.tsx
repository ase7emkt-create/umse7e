import { 
  Share2, 
  Video, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  Zap,
  Target,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: Share2,
      title: "GESTÃO DE REDES SOCIAIS",
      description: "Criação de conteúdo estratégico, planejamento editorial e análise de métricas para maximizar seu engajamento."
    },
    {
      icon: Video,
      title: "PRODUÇÃO DE VÍDEO",
      description: "Videomaker profissional, motion graphics e edição cinematográfica para contar sua história."
    },
    {
      icon: Palette,
      title: "BRANDING E DESIGN",
      description: "Identidade visual completa, logotipos memoráveis e materiais gráficos que destacam sua marca."
    },
    {
      icon: TrendingUp,
      title: "TRÁFEGO PAGO",
      description: "Google Ads, Meta Ads e estratégias de conversão para escalar seus resultados."
    },
  ];

  const stats = [
    { value: "150+", label: "Projetos Entregues" },
    { value: "98%", label: "Clientes Satisfeitos" },
    { value: "5M+", label: "Alcance Gerado" },
    { value: "3x", label: "ROI Médio" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-3xl text-gradient">CROMO</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
            Fale Conosco
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Agência de Marketing Digital
            </span>
          </div>
          
          {/* Main headline */}
          <h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 opacity-0 animate-fade-in leading-[0.9]" 
            style={{ animationDelay: "150ms" }}
          >
            TRANSFORMAMOS
            <br />
            <span className="text-gradient">MARCAS</span> EM
            <br />
            EXPERIÊNCIAS
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in" 
            style={{ animationDelay: "300ms" }}
          >
            Estratégias criativas e resultados mensuráveis para elevar 
            sua presença digital ao próximo nível.
          </p>
          
          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "450ms" }}
          >
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg glow group"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary/50 px-8 py-6 text-lg"
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4 opacity-0 animate-fade-in">
              <Target className="w-4 h-4" />
              O que fazemos
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              NOSSOS <span className="text-gradient">SERVIÇOS</span>
            </h2>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4 opacity-0 animate-fade-in-left">
                <BarChart3 className="w-4 h-4" />
                Sobre nós
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 opacity-0 animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                SOMOS A <span className="text-gradient">CROMO</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 opacity-0 animate-fade-in-left" style={{ animationDelay: "200ms" }}>
                Uma agência de marketing digital focada em resultados reais. 
                Combinamos criatividade, estratégia e tecnologia para transformar 
                a presença digital da sua marca.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "300ms" }}>
                Nosso time de especialistas trabalha lado a lado com você para 
                entender seus objetivos e criar soluções personalizadas que 
                geram impacto e conversão.
              </p>
              <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "400ms" }}>
                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold group">
                  Conheça nossa equipe
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: "200ms" }}>
              <div className="aspect-square rounded-3xl glass p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-5" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="font-display text-[180px] md:text-[250px] text-gradient opacity-20 select-none">
                    C
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-gradient-primary animate-float" />
                <div className="absolute bottom-12 left-8 w-14 h-14 rounded-xl bg-accent/50 animate-float" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl glass p-12 md:p-20 text-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/30 rounded-full blur-[100px]" />
            
            <div className="relative">
              <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6 opacity-0 animate-fade-in">
                PRONTO PARA <span className="text-gradient">CRESCER</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
                Entre em contato e descubra como podemos transformar a presença 
                digital da sua marca com estratégias que realmente funcionam.
              </p>
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-6 text-lg glow group"
                >
                  Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="font-display text-4xl text-gradient mb-4">CROMO</div>
              <p className="text-muted-foreground max-w-md mb-6">
                Transformando marcas em experiências digitais memoráveis. 
                Sua parceira estratégica para resultados reais.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-display text-xl text-foreground mb-4">LINKS RÁPIDOS</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-display text-xl text-foreground mb-4">CONTATO</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  contato@cromo.com.br
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  (11) 99999-9999
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 CROMO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;