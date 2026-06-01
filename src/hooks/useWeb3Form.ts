import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "cb5ea38c-2cec-448f-968c-9f3ae698cae0";

interface UseWeb3FormOptions {
  subject: string;
}

export const useWeb3Form = ({ subject }: UseWeb3FormOptions) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (data: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: "Ikotek Solutions Website",
          ...data,
        }),
      });
      const result = await response.json();
      return result.success === true;
    } catch {
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
