import AnimatedSection from "@/components/AnimatedSection";

interface CaseStudyCardProps {
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  delay?: number;
}

export default function CaseStudyCard({
  client,
  industry,
  problem,
  solution,
  result,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="card-3d group rounded-2xl border border-border bg-card p-6 h-full transition-all hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30">
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {industry}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-5 text-foreground">{client}</h3>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-dark block mb-1">
              Problem
            </span>
            <p className="text-sm text-muted leading-relaxed">{problem}</p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-dark block mb-1">
              Solution
            </span>
            <p className="text-sm text-muted leading-relaxed">{solution}</p>
          </div>
          <div className="pt-4 border-t border-border">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
              Result
            </span>
            <p className="text-sm text-foreground font-medium leading-relaxed">
              {result}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
