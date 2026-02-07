import { useFormikContext } from "formik";
import type { FunnelFormValues } from "@/lib/validationSchemas";
import { UserCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const StepThree = () => {
  const { values, errors, touched, handleChange, handleBlur ,setFieldValue} =
    useFormikContext<FunnelFormValues>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Almost there!</h2>
        <p className="text-muted-foreground">Where should we send your personalized quote?</p>
      </div>

      {/* Name fields */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="first_name" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <UserCircle className="w-4 h-4 text-primary" />
            First Name
          </Label>
          <div className="relative">
          <Input
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jane"
            className="w-full h-11 rounded-lg border border-input bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          {touched.first_name && errors.first_name && (
            <p className="text-sm text-destructive absolute top-full left-0">{errors.first_name}</p>
          )}  
        </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="last_name" className="text-sm font-medium text-foreground">Last Name</Label>
          <div className="relative">
          <Input
            type="text"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            placeholder="Smith"
            className="w-full h-11 rounded-lg border border-input bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          {touched.last_name && errors.last_name && (
            <p className="text-sm text-destructive absolute top-full left-0">{errors.last_name}</p>
          )}
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email_address" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Mail className="w-4 h-4 text-primary" />
          Email Address
        </Label>
        <div className="relative">
        <Input
          type="email"
          name="email_address"
          value={values.email_address}
          onChange={handleChange}
          placeholder="jane.smith@example.com"
          className="w-full h-11 rounded-lg border border-input bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        {touched.email_address && errors.email_address && (
          <p className="text-sm text-destructive absolute top-full left-0">{errors.email_address}</p>
          )}
        
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone_home" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Phone className="w-4 h-4 text-primary" />
          Phone Number
        </Label>
        <div className="relative">
        <Input
          type="tel"
          name="phone_home"
          value={values.phone_home}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="4165551234"
          maxLength={10}
          className="w-full h-11 rounded-lg border border-input bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        {touched.phone_home && errors.phone_home && (
          <p className="text-sm text-destructive absolute top-full left-0">{errors.phone_home}</p>
          )}
        </div>
        
      </div>

      {/* CASL Consent */}
      <div className="space-y-3 pt-2">
        <div className="relative">
        <div className="flex items-start gap-3 p-4 rounded-lg border border-input bg-muted/50">
        <Checkbox 
      id="casl-consent" 
      checked={values.casl} 
      onCheckedChange={(checked) => setFieldValue("casl", checked)}
    />
         
          <label htmlFor="casl-consent" className="text-sm text-foreground leading-relaxed cursor-pointer">
            <ShieldCheck className="w-4 h-4 text-primary inline mr-1 -mt-0.5" />
            I consent to receiving marketing communications including quotes and offers via email and phone. I understand I can unsubscribe at any time.
          </label>
        </div>
        {touched.casl && errors.casl && (
          <p className="text-sm text-destructive absolute top-full left-0">{errors.casl}</p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default StepThree;
