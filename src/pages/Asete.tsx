import { useState } from "react";
import { 
  Share2, 
  Video, 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Linkedin,
  ChevronRight,
  Play,
  CheckCircle2
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-asete-cream/95 backdrop-blur-md border-b border-asete-olive/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-display text-3xl text-asete-olive tracking-tight">
              asete
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-asete-dark/70 hover:text-asete-olive transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-asete-dark/70 hover:text-asete-olive transition-colors font-medium">
                Quem Somos
              </a>
              <a href="#contato" className="text-asete-dark/70 hover:text-asete-olive transition-colors font-medium">
                Contato
              </a>
              <Button className="bg-asete-olive hover:bg-asete-olive/90 text-white rounded-full px-6">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-asete-cream via-asete-cream to-asete-olive/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-asete-olive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-asete-olive/5 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-asete-olive/10 px-4 py-2 rounded-full">
                <Play className="w-4 h-4 text-asete-olive" />
                <span className="text-sm text-asete-olive font-medium">Marketing Digital & Vídeos</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-asete-dark leading-[0.95]">
                Sua marca no
                <span className="text-asete-olive"> centro</span> das atenções
              </h1>
              
              <p className="text-lg text-asete-dark/60 max-w-lg leading-relaxed">
                Criamos estratégias de marketing digital e produzimos vídeos que conectam sua marca 
                ao público certo, gerando resultados reais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-asete-olive hover:bg-asete-olive/90 text-white rounded-full px-8 py-6 text-lg"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-asete-olive/30 text-asete-olive hover:bg-asete-olive/5 rounded-full px-8 py-6 text-lg"
                >
                  Ver Portfólio
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="font-display text-3xl text-asete-olive">50+</p>
                  <p className="text-sm text-asete-dark/60">Clientes</p>
                </div>
                <div className="w-px h-12 bg-asete-olive/20" />
                <div className="text-center">
                  <p className="font-display text-3xl text-asete-olive">200+</p>
                  <p className="text-sm text-asete-dark/60">Projetos</p>
                </div>
                <div className="w-px h-12 bg-asete-olive/20" />
                <div className="text-center">
                  <p className="font-display text-3xl text-asete-olive">5</p>
                  <p className="text-sm text-asete-dark/60">Anos</p>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-asete-olive/20 rounded-3xl transform rotate-6" />
              <div className="relative bg-asete-dark rounded-3xl aspect-[4/5] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-asete-olive/20 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 text-asete-cream" />
                  </div>
                  <p className="text-asete-cream/60 text-sm">Vídeo institucional em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-asete-olive font-medium text-sm uppercase tracking-wider">Nossos Serviços</span>
            <h2 className="font-display text-4xl md:text-5xl text-asete-dark mt-4">
              Soluções completas para sua marca
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-8 bg-asete-cream rounded-2xl hover:bg-asete-olive transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-asete-olive/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="w-7 h-7 text-asete-olive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl text-asete-dark group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-asete-dark/60 group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-asete-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-asete-olive font-medium text-sm uppercase tracking-wider">Quem Somos</span>
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
                Uma agência focada em resultados reais
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                A asete nasceu da paixão por criar conexões genuínas entre marcas e pessoas. 
                Combinamos estratégia, criatividade e tecnologia para entregar resultados 
                que transformam negócios.
              </p>
              
              <div className="space-y-4">
                {[
                  "Estratégias personalizadas para cada cliente",
                  "Equipe especializada em marketing e vídeo",
                  "Foco em métricas e resultados mensuráveis",
                  "Atendimento próximo e humanizado"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-asete-olive flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-asete-olive hover:bg-asete-olive/90 text-white rounded-full px-8 py-6"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça nossa equipe
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-asete-olive/20 rounded-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-asete-olive/30 rounded-2xl aspect-square" />
                  <div className="bg-asete-olive/20 rounded-2xl aspect-[4/3]" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-asete-olive/20 rounded-2xl aspect-[4/3]" />
                  <div className="bg-asete-olive/30 rounded-2xl aspect-square" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section id="contato" className="py-24 bg-asete-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <span className="text-asete-olive font-medium text-sm uppercase tracking-wider">Contato</span>
              <h2 className="font-display text-4xl md:text-5xl text-asete-dark leading-tight">
                Vamos conversar sobre seu projeto?
              </h2>
              <p className="text-asete-dark/60 text-lg leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas 
                para entender suas necessidades e apresentar a melhor solução.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-asete-olive/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-asete-olive" />
                  </div>
                  <div>
                    <p className="text-sm text-asete-dark/60">Email</p>
                    <p className="text-asete-dark font-medium">contato@asete.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-asete-olive/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-asete-olive" />
                  </div>
                  <div>
                    <p className="text-sm text-asete-dark/60">WhatsApp</p>
                    <p className="text-asete-dark font-medium">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-asete-olive/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-asete-olive" />
                  </div>
                  <div>
                    <p className="text-sm text-asete-dark/60">Localização</p>
                    <p className="text-asete-dark font-medium">São Paulo, SP</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-asete-olive rounded-full flex items-center justify-center hover:bg-asete-olive/80 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-asete-olive rounded-full flex items-center justify-center hover:bg-asete-olive/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-asete-olive/5">
              <h3 className="font-display text-2xl text-asete-dark mb-6">Solicite um orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-asete-dark/70 mb-2">
                    Nome completo *
                  </label>
                  <Input 
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-asete-cream/50 border-asete-olive/20 focus:border-asete-olive rounded-xl py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-asete-dark/70 mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-asete-cream/50 border-asete-olive/20 focus:border-asete-olive rounded-xl py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-asete-dark/70 mb-2">
                    WhatsApp *
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-asete-cream/50 border-asete-olive/20 focus:border-asete-olive rounded-xl py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-asete-dark/70 mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Conte um pouco sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-asete-cream/50 border-asete-olive/20 focus:border-asete-olive rounded-xl min-h-[120px] resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-asete-olive hover:bg-asete-olive/90 text-white rounded-xl py-6 text-lg"
                >
                  Enviar solicitação
                </Button>
                
                <p className="text-xs text-asete-dark/40 text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-asete-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-2xl text-white">asete</span>
            <p className="text-white/40 text-sm">
              © 2024 asete. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Asete;
