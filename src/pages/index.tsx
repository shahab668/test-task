import { useState } from "react";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import FunnelPage from "@/components/funnel";
import { BENEFITS, TRUST_ITEMS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { NavLink as RouterNavLink } from "react-router-dom";

const Index = () => {
  const [showFunnel, setShowFunnel] = useState(false);

  if (showFunnel) {
    return <FunnelPage />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-7 h-7 text-primary" />
            <span className="text-lg font-semibold text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
              CanadaLife<span className="text-primary">Shield</span>
            </span>
          </div>
          <Button
            onClick={() => setShowFunnel(true)}
            size="sm"
            variant="ghost"
          >
            Get a Quote →
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              <Shield className="w-3.5 h-3.5" />
              TRUSTED BY 50,000+ CANADIANS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Protect what matters most
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Affordable life insurance coverage designed for Canadian families. Get a free, no-obligation quote in minutes.
            </p>
            <Button
              onClick={() => setShowFunnel(true)}
              size="lg"
              variant="default"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-foreground mb-3">Why Canadians choose us</h2>
            <p className="text-muted-foreground">Simple, affordable, and reliable coverage.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {TRUST_ITEMS.map((trustItem: string) => (
              <div key={trustItem} className="flex items-start gap-3 p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{trustItem}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              onClick={() => setShowFunnel(true)}
              size="lg"
              variant="default"
            >
              Start Your Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-4 py-8 text-center text-xs text-muted-foreground space-y-2">
        <p>
          This is not a binding insurance quote. All coverage is subject to underwriting approval.
          Rates may vary based on individual circumstances.
        </p>
        <p>
          <RouterNavLink to="#privacy-policy" className="text-foreground hover:text-foreground/80">Privacy Policy</RouterNavLink>
          {" · "}
          <RouterNavLink to="#terms" className="text-foreground hover:text-foreground/80">Terms & Conditions</RouterNavLink>
          {" · "}
          © {new Date().getFullYear()} CanadaLifeShield. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
