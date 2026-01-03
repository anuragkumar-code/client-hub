import { 
  MessageSquare, 
  Mail, 
  Phone,
  MessagesSquare,
  Send,
  Globe,
  ArrowRightLeft
} from "lucide-react";

const channels = [
  {
    icon: MessageSquare,
    name: "WhatsApp",
    description: "Connect your WhatsApp Business account and respond to customers directly from the platform."
  },
  {
    icon: Mail,
    name: "Email",
    description: "Sync multiple email accounts. Send, receive, and track all email conversations in one place."
  },
  {
    icon: Send,
    name: "Telegram",
    description: "Integrate Telegram bots and channels to manage customer messages seamlessly."
  },
  {
    icon: MessagesSquare,
    name: "Live Chat",
    description: "Add a chat widget to your website and engage visitors in real-time."
  },
  {
    icon: Phone,
    name: "SMS",
    description: "Send and receive text messages. Keep SMS conversations alongside other channels."
  },
  {
    icon: Globe,
    name: "Social Media",
    description: "Connect Facebook, Instagram, and Twitter to manage social interactions from one inbox."
  }
];

const OmnichannelSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-narrow section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-accent-soft-foreground text-sm font-medium mb-4">
            <ArrowRightLeft className="w-4 h-4" />
            Omnichannel Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            One inbox for every conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect all your communication channels — WhatsApp, Email, Telegram, and more — 
            into a single unified inbox. Never switch between apps again.
          </p>
        </div>

        {/* Visual representation */}
        <div className="relative mb-16">
          {/* Center hub */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Connecting lines animation - visible on larger screens */}
              <div className="hidden lg:block absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-accent/20 animate-[spin_30s_linear_infinite_reverse]" />
              </div>
              
              {/* Central inbox icon */}
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-primary flex items-center justify-center shadow-custom-lg">
                <MessageSquare className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Channels grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel, index) => (
              <div 
                key={index}
                className="group relative bg-card rounded-xl p-5 border border-border hover:border-accent/40 hover:shadow-custom-md transition-all duration-300"
              >
                {/* Connection indicator */}
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <channel.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-section-alt rounded-2xl p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-semibold text-accent mb-2">1</div>
              <h4 className="font-semibold text-foreground mb-2">Single dashboard</h4>
              <p className="text-sm text-muted-foreground">
                No more switching between WhatsApp Web, email clients, and support tools. 
                Everything lives in one place.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-semibold text-accent mb-2">2</div>
              <h4 className="font-semibold text-foreground mb-2">Complete context</h4>
              <p className="text-sm text-muted-foreground">
                See the full conversation history across all channels. Know exactly 
                what was said, where, and when.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-semibold text-accent mb-2">3</div>
              <h4 className="font-semibold text-foreground mb-2">Team collaboration</h4>
              <p className="text-sm text-muted-foreground">
                Assign conversations to team members, add internal notes, and 
                collaborate without the customer seeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelSection;
