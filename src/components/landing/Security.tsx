import { Shield, Lock, FileText, Key, MessageCircle, Globe } from "lucide-react";

const securityFeatures = [
  {
    icon: Globe,
    title: "Communication from all channels",
    description: "All your emails, chats, and tickets brought together in one secure, encrypted hub."
  },
  {
    icon: Shield,
    title: "Role-based access control",
    description: "Define who can view, edit, or manage different parts of your workspace."
  },
  {
    icon: Lock,
    title: "Organization-level isolation",
    description: "Your data is completely separated from other organizations. No shared access."
  },
  {
    icon: FileText,
    title: "Comprehensive audit logs",
    description: "Track who did what and when. Full visibility into all actions taken."
  },
  {
    icon: Key,
    title: "Secure authentication",
    description: "Industry-standard security practices protect your accounts and data."
  }
];

const Security = () => {
  return (
    <section id="security" className="py-20 lg:py-28 bg-background">
      <div className="container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              All your needs, securely manageable
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We bring every communication channel into one fortified place. 
              Your customer data is safeguarded with enterprise-grade security 
              while remaining easily accessible to your team.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right illustration - abstract security visual */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center p-4">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent blur-3xl" />
              
              {/* Image Container with Float Animation */}
              <div className="relative w-full h-full animate-float">
                <img 
                  src="/secure-hub.png" 
                  alt="Secure Communication Hub" 
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Badge overlay */}
                <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-border shadow-custom-lg animate-bounce-subtle hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Status</p>
                      <p className="text-sm font-bold text-foreground">All Channels Secured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Security;
