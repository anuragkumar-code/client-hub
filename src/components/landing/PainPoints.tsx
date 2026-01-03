import { 
  AlertCircle, 
  Layers, 
  Eye, 
  Clock, 
  UserX,
  CheckCircle2
} from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    problem: "Scattered customer data",
    solution: "Keep all contacts, accounts, and history in one organized place"
  },
  {
    icon: AlertCircle,
    problem: "Separate tools for CRM, support, and chat",
    solution: "One platform handles sales, support, and communication"
  },
  {
    icon: Eye,
    problem: "No visibility across teams",
    solution: "Everyone sees the same customer context in real-time"
  },
  {
    icon: Clock,
    problem: "Manual follow-ups that slip through",
    solution: "Automated workflows ensure nothing gets forgotten"
  },
  {
    icon: UserX,
    problem: "Poor ownership and accountability",
    solution: "Clear assignments with roles and permissions"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-alt">
      <div className="container-narrow section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What this platform solves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We built Uniflow because we've seen these problems firsthand. 
            Here's how we address each one.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {painPoints.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-custom-card border border-border hover:shadow-custom-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-2 line-through decoration-destructive/40">
                    {item.problem}
                  </p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
