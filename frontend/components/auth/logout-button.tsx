"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";

type LogoutButtonProps = {
  className: string;
  iconClassName?: string;
};

export default function LogoutButton({ className, iconClassName }: LogoutButtonProps) {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogout = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await logout();
    } finally {
      router.replace("/login");
      setIsSubmitting(false);
    }
  };

  return (
    <button className={className} onClick={handleLogout} type="button">
      <span className={iconClassName ?? "material-symbols-outlined"}>logout</span>
      <span>{isSubmitting ? "Logging Out..." : "Log Out"}</span>
    </button>
  );
}
