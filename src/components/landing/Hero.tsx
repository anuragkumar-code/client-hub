import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, BarChart3, Sparkles, LogIn } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-multiply dark:mix-blend-overlay dark:opacity-20 brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
      </div>
      
      <div className="container-narrow section-padding relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-accent-soft-foreground text-sm font-medium mb-6 animate-fade-in shadow-sm border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent fill-accent/20" />
            All-in-one CRM & Support Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6">
            Manage customers, conversations, and support —{" "}
            <span className="text-accent">all in one place</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A unified platform for teams who want to stop juggling between CRM, 
            helpdesk, and communication tools. Track deals, resolve tickets, and 
            keep every conversation in sync.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="hero-outline" size="xl" className="gap-2">
                Login to Your Account
                <LogIn className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-8">Built for teams that value simplicity</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  label: "Contact Management",
                  desc: "Organize every client detail"
                },
                {
                  icon: BarChart3,
                  label: "Sales Pipelines",
                  desc: "Track deals from lead to close"
                },
                {
                  icon: MessageSquare,
                  label: "Unified Inbox",
                  desc: "All channels in one stream"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-6 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 shadow-sm hover:shadow-custom-lg hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3.5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl group-hover:from-accent/20 group-hover:to-accent/10 transition-colors shadow-inner ring-1 ring-inset ring-accent/10">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
