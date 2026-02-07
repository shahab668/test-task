import { useFormikContext } from "formik";
import type { FunnelFormValues } from "@/lib/validationSchemas";
import { GENDERS, PROVINCES, SMOKING_STATUS } from "@/lib/data";
import { MapPin, User, Cigarette } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";



const StepOne = () => {
  const { values, errors, touched,setFieldValue} =
    useFormikContext<FunnelFormValues>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Tell us about yourself</h2>
        <p className="text-muted-foreground">This helps us find the best coverage for you.</p>
      </div>
<div className="space-y-2">
  <Label htmlFor="state" className="flex items-center gap-2 text-sm font-medium text-foreground">
    <MapPin className="w-4 h-4 text-primary" />
    Province / Territory
  </Label>
  <div className="relative">
  <Select
    name="state"
    value={values.state}
    onValueChange={(value) => setFieldValue("state", value)}
  >
    <SelectTrigger id="state" className="w-full">
      <SelectValue placeholder="Select your province" />
    </SelectTrigger>

    <SelectContent>
      {PROVINCES.map((p) => (
        <SelectItem key={p.value} value={p.value}>
          {p.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  {touched.state && errors.state && (
    <p className="text-sm text-destructive absolute top-full left-0">{errors.state}</p>
  )}
  </div>
</div>

      <div className="space-y-2">
        <Label htmlFor="gender" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <User className="w-4 h-4 text-primary" />
          Gender
        </Label>
        <div className="relative">
        <div className="grid grid-cols-3 gap-2">
          {GENDERS.map((g) => (
            <Button
              key={g.value}
              type="button"
              onClick={() => setFieldValue("gender", g.value)}
              className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                values.gender === g.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-input bg-card text-foreground hover:border-primary/40"
              }`}
              variant="outline"
              size="sm"
            >
              {g.label}
            </Button>
          ))}
        </div>
          {touched.gender && errors.gender && (
          <p className="text-sm text-destructive absolute top-full left-0">{errors.gender}</p>
        )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="smoking_status" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Cigarette className="w-4 h-4 text-primary" />
          Do you smoke?
        </Label>
        <div className="relative">
        <div className="grid grid-cols-2 gap-3">
          {SMOKING_STATUS.map((opt) => (
            <Button
              key={opt.value}
              type="button"
              onClick={() => setFieldValue("smoking_status", opt.value)}
              className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                values.smoking_status === opt.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-input bg-card text-foreground hover:border-primary/40"
                }`}
                variant="outline"
                size="sm"
            >
              {opt.label}
            </Button>
          ))}
        </div>
        {touched.smoking_status && errors.smoking_status && (
          <p className="text-sm text-destructive absolute top-full left-0">{errors.smoking_status}</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default StepOne;
