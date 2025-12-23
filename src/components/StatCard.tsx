interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="text-center opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-display text-5xl md:text-6xl text-gradient mb-2">
        {value}
      </div>
      <div className="text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default StatCard;