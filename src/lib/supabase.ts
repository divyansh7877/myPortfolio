import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Types for database tables
export interface ContactSubmission {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  message: string;
  created_at?: string;
}

export interface FileDownload {
  id?: string;
  file_name: string;
  file_path: string;
  user_agent?: string;
  referrer?: string;
  created_at?: string;
}

// Lazy-loaded Supabase client (only created in browser with valid credentials)
let supabaseInstance: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient | null {
  if (typeof window === 'undefined') {
    return null; // Don't create client during SSR/build
  }

  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL') {
    console.warn('Supabase credentials not configured. Form submissions and download tracking will be disabled.');
    return null;
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}

// Submit contact form
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
  const supabase = getSupabaseClient();
  
  if (!supabase) {
    console.log('Contact form submission (Supabase not configured):', data);
    // Return success anyway so the UI shows success
    return { success: true };
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);

  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }

  return { success: true };
}

// Track file download
export async function trackFileDownload(fileName: string, filePath: string) {
  const supabase = getSupabaseClient();
  
  if (!supabase) {
    console.log('File download tracked (Supabase not configured):', { fileName, filePath });
    return { success: true };
  }

  const { error } = await supabase
    .from('file_downloads')
    .insert([{
      file_name: fileName,
      file_path: filePath,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    }]);

  if (error) {
    console.error('Error tracking download:', error);
    // Don't throw - we don't want to block the download
  }

  return { success: !error };
}
