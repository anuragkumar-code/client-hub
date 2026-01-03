import { 
  Users, 
  Building2, 
  TrendingUp, 
  Ticket, 
  Inbox, 
  UsersRound,
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Contact Management",
    description: "Keep track of every person you interact with. Store details, notes, and communication history in one place."
  },
  {
    icon: Building2,
    title: "Account Management",
    description: "Organize contacts by company. See the full picture of your relationship with each business."
  },
  {
    icon: TrendingUp,
    title: "Sales Pipelines & Deals",
    description: "Track opportunities from first touch to closed-won. Visualize your pipeline and forecast revenue."
  },
  {
    icon: Ticket,
    title: "Support Tickets & SLAs",
    description: "Handle customer issues efficiently. Set priorities, assign owners, and meet your service commitments."
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    description: "Email, chat, WhatsApp — all conversations in one inbox. Never miss a message or lose context."
  },
  {
    icon: UsersRound,
    title: "Team Collaboration",
    description: "Assign work, share context, and collaborate seamlessly. Everyone stays on the same page."
  },
  {
    icon: Shield,
    title: "Roles & Permissions",
    description: "Control who sees and does what. Set up teams with the right access levels for your organization."
  },
  {
    icon: Zap,
    title: "Automation & Workflows",
    description: "Automate repetitive tasks. Route tickets, send follow-ups, and trigger actions automatically."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container-narrow section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete toolkit for managing customer relationships and support, 
            designed to work together seamlessly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-200"
            >
              <div className="feature-icon-wrapper mb-4 group-hover:bg-accent/10 transition-colors duration-200">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
