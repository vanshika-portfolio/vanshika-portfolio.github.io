CREATE TABLE public.resume_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  purpose TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.resume_requests TO anon;
GRANT INSERT ON public.resume_requests TO authenticated;
GRANT ALL ON public.resume_requests TO service_role;

ALTER TABLE public.resume_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a resume request"
  ON public.resume_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 100
    AND length(email) BETWEEN 3 AND 255
    AND email LIKE '%_@_%.__%'
    AND (company IS NULL OR length(company) <= 120)
    AND (purpose IS NULL OR length(purpose) <= 120)
    AND (message IS NULL OR length(message) <= 1000)
  );