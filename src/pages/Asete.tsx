import { useState } from "react";
import { 
  Share2, 
  Video, 
  Target, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Linkedin,
  ChevronRight,
  Play,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Asete = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    toast.success("Obrigado pelo contato! Retornaremos em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: Share2,
      title: "Gestão de Redes Sociais",
      description: "Estratégias personalizadas para aumentar seu engajamento e presença digital."
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google, Meta e TikTok para maximizar conversões."
    },
    {
      icon: Video,
      title: "Produção de Vídeos",
      description: "Criação de conteúdo audiovisual profissional para sua marca."
    },
    {
      icon: TrendingUp,
      title: "Marketing de Conteúdo",
      description: "Conteúdo estratégico que conecta sua marca ao público certo."
    }
  ];

  return (
    <div className="min-h-screen bg-asete-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-asete-cream/90 backdrop-blur-xl border-b border-asete-dark/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-display text-3xl text-asete-dark tracking-tight">
              asete
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-asete-dark/60 hover:text-asete-coral transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-asete-dark/60 hover:text-asete-coral transition-colors font-medium">
                Quem Somos
              </a>
              <a href="#contato" className="text-asete-dark/60 hover:text-asete-coral transition-colors font-medium">
                Contato
              </a>
              <Button className="bg-asete-coral hover:bg-asete-coral/90 text-white rounded-full px-6 shadow-lg shadow-asete-coral/25">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-asete-cream via-asete-warm to-asete-cream" />
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-asete-coral/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-asete-coral/5 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-asete-coral/10 border border-asete-coral/20 px-5 py-2.5 rounded-full">
                <Sparkles className="w-4 h-4 text-asete-coral" />
                <span className="text-sm text-asete-coral font-semibold">Marketing Digital & Vídeos</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-asete-dark leading-[1.05]">
                Sua marca no
                <span className="text-asete-coral"> centro</span> das atenções
              </h1>
              
              <p className="text-lg text-asete-charcoal/70 max-w-lg leading-relaxed">
                Criamos estratégias de marketing digital e produzimos vídeos que conectam sua marca 
                ao público certo, gerando resultados reais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-asete-coral hover:bg-asete-coral/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-asete-coral/30 transition-all hover:shadow-2xl hover:shadow-asete-coral/40 hover:-translate-y-0.5"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-asete-dark/20 text-asete-dark hover:bg-asete-dark hover:text-white rounded-full px-8 py-6 text-lg transition-all"
                >
                  Ver Portfólio
                </Button>
              </div>
              
              <div className="flex items-center gap-10 pt-6">
                <div className="text-center">
                  <p className="font-display text-4xl text-asete-coral">50+</p>
                  <p className="text-sm text-asete-charcoal/60 mt-1">Clientes</p>
                </div>
                <div className="w-px h-14 bg-asete-dark/10" />
                <div className="text-center">
                  <p className="font-display text-4xl text-asete-coral">200+</p>
                  <p className="text-sm text-asete-charcoal/60 mt-1">Projetos</p>
                </div>
                <div className="w-px h-14 bg-asete-dark/10" />
                <div className="text-center">
                  <p className="font-display text-4xl text-asete-coral">5</p>
                  <p className="text-sm text-asete-charcoal/60 mt-1">Anos</p>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-asete-coral/20 to-asete-coral/5 rounded-[2rem] transform rotate-3" />
              <div className="relative bg-asete-dark rounded-[2rem] aspect-[4/5] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-asete-charcoal to-asete-dark" />
                <div className="text-center space-y-6 p-8 relative z-10">
                  <div className="w-24 h-24 mx-auto bg-asete-coral/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-asete-coral/30">
                    <Play className="w-12 h-12 text-asete-coral" fill="currentColor" />
                  </div>
                  <p className="text-white/50 text-sm font-medium">Vídeo institucional em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-asete-coral font-semibold text-sm uppercase tracking-widest">Nossos Serviços</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-asete-dark mt-4">
              Soluções completas para sua marca
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-8 bg-asete-cream/50 rounded-2xl hover:bg-asete-coral border border-transparent hover:border-asete-coral transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-asete-coral/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-asete-coral/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-asete-coral group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl text-asete-dark group-hover:text-white mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-asete-charcoal/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-28 bg-asete-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-asete-coral/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-asete-coral font-semibold text-sm uppercase tracking-widest">Quem Somos</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Uma agência focada em resultados reais
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                A asete nasceu da paixão por criar conexões genuínas entre marcas e pessoas. 
                Combinamos estratégia, criatividade e tecnologia para entregar resultados 
                que transformam negócios.
              </p>
              
              <div className="space-y-5 pt-4">
                {[
                  "Estratégias personalizadas para cada cliente",
                  "Equipe especializada em marketing e vídeo",
                  "Foco em métricas e resultados mensuráveis",
                  "Atendimento próximo e humanizado"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-asete-coral/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-asete-coral" />
                    </div>
                    <span className="text-white/70 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-asete-coral hover:bg-asete-coral/90 text-white rounded-full px-8 py-6 shadow-xl shadow-asete-coral/30 mt-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça nossa equipe
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-6 bg-asete-coral/10 rounded-[2rem] blur-xl" />
              <div className="relative grid grid-cols-2 gap-5">
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-asete-coral/40 to-asete-coral/20 rounded-2xl aspect-square" />
                  <div className="bg-asete-charcoal rounded-2xl aspect-[4/3]" />
                </div>
                <div className="space-y-5 pt-10">
                  <div className="bg-asete-charcoal rounded-2xl aspect-[4/3]" />
                  <div className="bg-gradient-to-br from-asete-coral/40 to-asete-coral/20 rounded-2xl aspect-square" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section id="contato" className="py-28 bg-asete-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <span className="text-asete-coral font-semibold text-sm uppercase tracking-widest">Contato</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-asete-dark leading-tight">
                Vamos conversar sobre seu projeto?
              </h2>
              <p className="text-asete-charcoal/60 text-lg leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas 
                para entender suas necessidades e apresentar a melhor solução.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-asete-coral/10 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-asete-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-asete-charcoal/50 font-medium">Email</p>
                    <p className="text-asete-dark font-semibold text-lg">contato@asete.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-asete-coral/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-asete-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-asete-charcoal/50 font-medium">WhatsApp</p>
                    <p className="text-asete-dark font-semibold text-lg">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-asete-coral/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-asete-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-asete-charcoal/50 font-medium">Localização</p>
                    <p className="text-asete-dark font-semibold text-lg">São Paulo, SP</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-6">
                <a 
                  href="#" 
                  className="w-14 h-14 bg-asete-coral rounded-2xl flex items-center justify-center hover:bg-asete-coral/80 transition-all hover:scale-105 shadow-lg shadow-asete-coral/25"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-14 h-14 bg-asete-coral rounded-2xl flex items-center justify-center hover:bg-asete-coral/80 transition-all hover:scale-105 shadow-lg shadow-asete-coral/25"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-asete-dark/5 border border-asete-dark/5">
              <h3 className="font-display text-2xl text-asete-dark mb-8">Solicite um orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-asete-charcoal/70 mb-3">
                    Nome completo *
                  </label>
                  <Input 
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-asete-cream/50 border-asete-dark/10 focus:border-asete-coral focus:ring-asete-coral/20 rounded-xl py-6 text-asete-dark placeholder:text-asete-charcoal/40"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-asete-charcoal/70 mb-3">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-asete-cream/50 border-asete-dark/10 focus:border-asete-coral focus:ring-asete-coral/20 rounded-xl py-6 text-asete-dark placeholder:text-asete-charcoal/40"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-asete-charcoal/70 mb-3">
                    WhatsApp *
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-asete-cream/50 border-asete-dark/10 focus:border-asete-coral focus:ring-asete-coral/20 rounded-xl py-6 text-asete-dark placeholder:text-asete-charcoal/40"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-asete-charcoal/70 mb-3">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Conte um pouco sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-asete-cream/50 border-asete-dark/10 focus:border-asete-coral focus:ring-asete-coral/20 rounded-xl min-h-[120px] resize-none text-asete-dark placeholder:text-asete-charcoal/40"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-asete-coral hover:bg-asete-coral/90 text-white rounded-xl py-6 text-lg shadow-xl shadow-asete-coral/30 transition-all hover:shadow-2xl hover:shadow-asete-coral/40"
                >
                  Enviar solicitação
                </Button>
                
                <p className="text-xs text-asete-charcoal/40 text-center pt-2">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-asete-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-3xl text-white">asete</span>
            <p className="text-white/30 text-sm">
              © 2024 asete. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Asete;