import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container-narrow section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-xs">U</span>
              </div>
              <span className="font-semibold text-foreground">Uniflow</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A unified platform for managing customers, conversations, and support.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-sm link-subtle">
              Login
            </Link>
            <Link to="/register" className="text-sm link-subtle">
              Register
            </Link>
            <Link to="/forgot-password" className="text-sm link-subtle">
              Forgot Password
            </Link>
            <a href="#" className="text-sm link-subtle">
              Terms
            </a>
            <a href="#" className="text-sm link-subtle">
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Uniflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
