import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container-narrow section-padding">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to simplify your operations?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Create your organization today and start managing customers, 
            conversations, and support from one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button 
                size="xl" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Create Your Organization
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
                          <Button 
                variant="outline" 
                size="xl"
                className="
                  border-primary-foreground/30 
                  
                  hover:bg-primary-foreground 
                  hover:text-accent
                  transition-colors
                "
              >
                Already have an account?
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
