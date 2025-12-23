import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group relative p-8 rounded-2xl glass hover-lift cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="relative w-16 h-16 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      
      {/* Content */}
      <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default ServiceCard;