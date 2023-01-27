import "@/styles/globals.css";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Box } from "@/components/Box";
import Navbar from "@/components/NavbarComponent";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <NextUIProvider>
        <Navbar />
        <Box
          css={{
            px: "$12",
            py: "$15",
            mt: "$12",
            "@xsMax": { px: "$10" },
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </NextUIProvider>
    </SessionContextProvider>
  );
}
export default MyApp;
