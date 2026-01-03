import { Shield, Lock, FileText, Key } from "lucide-react";

const securityFeatures = [
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
              Built with security in mind
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We take data protection seriously. Your customer information is 
              safeguarded with enterprise-grade security measures, so you can 
              focus on your business.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center">
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
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-accent-soft to-secondary rounded-2xl p-8 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Concentric circles */}
                <div className="absolute w-full h-full rounded-full border border-accent/20 animate-pulse" />
                <div className="absolute w-3/4 h-3/4 rounded-full border border-accent/30" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-accent/40" />
                
                {/* Center shield */}
                <div className="w-20 h-20 rounded-2xl bg-card shadow-custom-lg flex items-center justify-center">
                  <Shield className="w-10 h-10 text-accent" />
                </div>

                {/* Floating icons */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-xl bg-card shadow-custom-md flex items-center justify-center">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="absolute bottom-12 left-8 w-12 h-12 rounded-xl bg-card shadow-custom-md flex items-center justify-center">
                  <Key className="w-5 h-5 text-muted-foreground" />
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
