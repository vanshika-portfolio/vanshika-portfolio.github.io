import { supabase } from "@/integrations/supabase/client";

type ResumeRequestInput = {
  name: string;
  email: string;
  company: string;
  purpose: string;
  message: string;
};

/**
 * Static hosts (GitHub Pages) have no server to run the server function, so the
 * request is written straight from the browser with the public key. The
 * database's row-level security only allows inserts into this table, never
 * reads, so requests stay private either way.
 */
export async function submitResumeRequestFromBrowser(input: ResumeRequestInput) {
  const { error } = await supabase.from("resume_requests").insert({
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim() || null,
    purpose: input.purpose.trim() || null,
    message: input.message.trim() || null,
  });

  if (error) {
    return { ok: false as const };
  }
  return { ok: true as const };
}
