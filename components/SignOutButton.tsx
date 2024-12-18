"use client";

import React, { ButtonHTMLAttributes, useState } from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { Loader2, LogOut } from "lucide-react";

type SignOutButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SignOutButton: React.FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch {
      toast.error("There was a problem signing out");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button
      {...props}
      variant="ghost"
      onClick={handleSignOut}
      disabled={isSigningOut}
    >
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="h-4 w-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
