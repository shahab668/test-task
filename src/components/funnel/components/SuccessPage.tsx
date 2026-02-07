import { CheckCircle, Phone, Mail } from "lucide-react";

const SuccessPage = () => {
  return (
    <div className="text-center py-12 px-4">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-3xl font-semibold text-foreground mb-3">Your quote is on its way!</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Thank you for your interest. A licensed advisor will review your information and reach out with a personalized life insurance quote.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Expect a call within 24 hours
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Check your inbox for confirmation
        </span>
      </div>
    </div>
  );
};

export default SuccessPage;
