import { useFormikContext } from "formik";
import type { FunnelFormValues } from "@/lib/validationSchemas";
import { CalendarDays, DollarSign } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const QUICK_AMOUNTS = [25000, 50000, 100000, 150000, 200000, 250000];

const StepTwo = () => {
  const { values, errors, touched, handleChange, setFieldValue } =
    useFormikContext<FunnelFormValues>();
console.log("errors",errors);
console.log("touched",touched);

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Coverage details</h2>
        <p className="text-muted-foreground">When were you born and how much coverage do you need?</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dob" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <CalendarDays className="w-4 h-4 text-primary" />
          Date of Birth
        </Label>
        <div className="relative">

        <Input
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
          className="w-full h-11 rounded-lg border border-input bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        {touched.dob && errors.dob && (
          <p className="text-sm text-destructive absolute top-full left-0">{errors.dob}</p>
        )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="insurance_amount" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <DollarSign className="w-4 h-4 text-primary" />
          Desired Coverage Amount
          </Label>
          <div className="relative">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
          <Input
            type="number"
            name="insurance_amount"
            value={values.insurance_amount}
            onChange={handleChange}
            placeholder="e.g. 100000"            
            min={0}
            max={250000}
            className="w-full h-11 rounded-lg border border-input bg-card pl-7 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          {touched.insurance_amount && errors.insurance_amount && (
            <p className="text-sm text-destructive absolute top-full left-0">{errors.insurance_amount}</p>
          )}
        </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {QUICK_AMOUNTS.map((amt) => (
            <Button
              key={amt}
              type="button"
              onClick={() => setFieldValue("insurance_amount", amt)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                values.insurance_amount === amt
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-input bg-card text-muted-foreground hover:border-primary/40"
              }`}
              variant="outline"
              size="sm"
            >
              ${(amt / 1000).toFixed(0)}K
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
