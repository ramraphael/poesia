import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/fetcher";

export const SWRProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false, // Disable revalidation on focus for mobile
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
        dedupingInterval: 5000, // Dedupe requests within 5 seconds
      }}
    >
      {children}
    </SWRConfig>
  );
};
