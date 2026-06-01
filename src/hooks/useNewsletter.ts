import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);
const WEB3FORMS_ACCESS_KEY = "cb5ea38c-2cec-448f-968c-9f3ae698cae0";

export const useNewsletter = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subscribe = async (email: string) => {
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: "Invalid Email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return false;
    }

    setIsSubmitting(true);

    try {
      // Submit to Web3Forms
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Newsletter Subscription - Ikotek Solutions",
          from_name: "Ikotek Solutions Newsletter",
          email: email.trim(),
        }),
      });

      const web3Result = await web3Response.json();

      // Also save to Supabase
      const { error } = await supabase.from("newsletter_subscribers").insert([
        { email: email.trim() },
      ]);

      if (error && error.code !== "23505") {
        throw error;
      }

      if (web3Result.success || (error && error.code === "23505")) {
        toast({
          title: error && error.code === "23505" ? "Already Subscribed" : "Subscribed!",
          description: error && error.code === "23505"
            ? "This email is already on our newsletter list."
            : "Thanks for subscribing to our newsletter.",
        });
        return true;
      } else {
        throw new Error("Newsletter submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { subscribe, isSubmitting };
};
