import { 
  Building, 
  UserPlus, 
  Database, 
  MessageSquareText,
  LayoutDashboard
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building,
    title: "Register your organization",
    description: "Create your workspace in minutes. Set up your company profile and preferences."
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Invite your team",
    description: "Add team members and assign roles. Everyone gets the access they need."
  },
  {
    number: "03",
    icon: Database,
    title: "Add contacts & accounts",
    description: "Import your existing data or start fresh. Build your customer database."
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "Track deals and conversations",
    description: "Start managing opportunities and support requests. Keep all communication in sync."
  },
  {
    number: "05",
    icon: LayoutDashboard,
    title: "Manage from one dashboard",
    description: "See everything at a glance. Make informed decisions with complete visibility."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-section-alt">
      <div className="container-narrow section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Up and running in five steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is straightforward. Here's how teams typically 
            onboard to Uniflow.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - visible on larger screens */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-4 relative z-10">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="feature-icon-wrapper mb-4 mx-auto lg:mx-0">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
