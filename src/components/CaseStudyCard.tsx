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
      <div className="group rounded-lg border border-border bg-card p-6 h-full transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,59,48,0.05)]">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-accent">
            {industry}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-5">{client}</h3>

        <div className="space-y-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-dark block mb-1">
              Problem
            </span>
            <p className="text-sm text-muted leading-relaxed">{problem}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-dark block mb-1">
              Solution
            </span>
            <p className="text-sm text-muted leading-relaxed">{solution}</p>
          </div>
          <div className="pt-4 border-t border-border">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-1">
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
