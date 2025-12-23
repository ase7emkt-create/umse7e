import { LucideIcon } from "lucide-react";

interface VideoOptionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const VideoOptionCard = ({ title, description, icon: Icon, delay = 0 }: VideoOptionCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-card border border-border p-6 cursor-pointer transition-all duration-500 hover:border-primary/50 hover:bg-secondary card-shadow opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Icon */}
      <div className="relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="font-display text-2xl text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow indicator */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default VideoOptionCard;
