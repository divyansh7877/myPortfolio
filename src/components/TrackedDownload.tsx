"use client";

import { Download, FileText } from "lucide-react";

export default function TrackedDownload({ name, href }: { name: string; href: string }) {
  function track() {
    void import("@/lib/supabase").then(({ trackFileDownload }) => trackFileDownload(name, href));
  }
  return <a href={href} download onClick={track}><FileText size={14} /> {name} <Download size={13} /></a>;
}
