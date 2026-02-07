import { useState } from "react";
import { Formik, Form } from "formik";
import {
  stepOneSchema,
  stepTwoSchema,
  stepThreeSchema,
  type FunnelFormValues,
} from "@/lib/validationSchemas";
import ProgressBar from "./components/ProgressBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import SuccessPage from "./components/SuccessPage";
import { ArrowLeft, ArrowRight, Loader2, Shield } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import axios from "axios";

const schemas = [stepOneSchema, stepTwoSchema, stepThreeSchema];



export const initialValues: FunnelFormValues = {
    state: "",
    gender: "",
    smoking_status: "",
    dob: "",
    insurance_amount: "",
    first_name: "",
    last_name: "",
    email_address: "",
    phone_home: "",
    casl: false,
  };
  

const FunnelPage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const isLastStep = step === 3;
  const currentSchema = schemas[step - 1];

  
  const renderStep = (step: number) => {
      switch (step) {
      case 1:
      return <StepOne />;
      case 2:
      return <StepTwo />;
      case 3:
      return <StepThree />;
    }
};

const handleNext = async (
  validateForm: () => Promise<Record<string, string>>,
  setTouched: (fields: Record<string, boolean>) => void
) => {
  const errors = await validateForm();
  
  if (Object.keys(errors).length > 0) {
    const touchedFields: Record<string, boolean> = {};
    Object.keys(errors).forEach((key) => (touchedFields[key] = true));
    setTouched(touchedFields);
    return;
  }
  setTimeout(() => {
    setStep((s) => s + 1);
    setTouched({});
  }, 0);
};


const handleSubmit = async (values: FunnelFormValues) => {
  const params = new URLSearchParams({
    lp_campaign_id: "696aa869e00c8",
    lp_campaign_key: "kMPhF3N7TXWBVRf4Dbp9",
    lp_response: "JSON",
    first_name: values.first_name,
    last_name: values.last_name,
    email_address: values.email_address,
    phone_home: values.phone_home,
    state: values.state,
    gender: values.gender,
    dob: values.dob,
    insurance_amount: String(values.insurance_amount),
    smoking_status: values.smoking_status,
    casl: String(values.casl),
  });
  try {
    const {data} = await axios.post("https://track.lendingarch.com/post.do", params, {
        headers: {
            "Accept": "application/json",
      },
    });
    if (data.result === "success") {
      toast.success(data.msg);
      setSubmitted(true);
    } else {
      toast.error(data.msg);
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  }
};


  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-card rounded-2xl shadow-lg border border-border p-8">
          <SuccessPage />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-card rounded-2xl shadow-lg border border-border p-6 sm:p-8">
          <ProgressBar currentStep={step} totalSteps={3} />
          <Formik
            initialValues={initialValues}
            validationSchema={currentSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, validateForm, setTouched }) => (
              <Form noValidate>
                {renderStep(step)}

                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <Button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      size="sm"
                      variant="ghost"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {isLastStep ? (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2"
                      variant="default"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Get My Quote
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => handleNext(validateForm, setTouched)}
                      size="lg"
                      variant="default"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground space-y-2 px-4">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-medium">Your information is secure</span>
          </div>
          <p>
            This is not a binding quote. Actual rates may vary based on underwriting.
            All quotes are subject to eligibility and approval by the insurance provider.
          </p>
          <p>
            <a href="#privacy-policy" className="underline hover:text-foreground">Privacy Policy</a>
            {" · "}
            <a href="#terms" className="underline hover:text-foreground">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunnelPage;
