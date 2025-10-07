/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address for contact
      - `message` (text) - Message content from the investor
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (new, contacted, closed)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - No public read access (admin only via service role)
    - Allow anonymous users to insert (public form submission)
  
  3. Notes
    - This table stores investor contact form submissions
    - Status field helps track follow-up process
    - Email and name fields are required for investor communication
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);