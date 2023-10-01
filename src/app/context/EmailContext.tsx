"use client";
import React, { createContext, useState, ReactNode } from "react";

interface EmailProviderProps {
  children: ReactNode;
}

const defaultContextData = {
  userEmail: null as string | null,
  setUserEmail: (() => null) as React.Dispatch<
    React.SetStateAction<string | null>
  >,
};

export const EmailContext = createContext(defaultContextData);

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <EmailContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
