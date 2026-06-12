// app/layout.tsx
import Sidebar from "@/components/Sidebar"; // Importa el Sidebar
import Header from "@/components/Header";
import "./globals.css"; // Importa los estilos globales
import Image from "next/image";
import ContextProvider from "./context/contextProvider";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <ContextProvider>
      <html lang={locale}>
        <body className="font-sans antialiased text-on-surface bg-surface-container-lowest">
          <NextIntlClientProvider>
            <div className="w-screen h-svh bg-background flex justify-center items-center relative overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/_BRH3818.JPG"
                alt="Background"
                fill
                className="object-cover opacity-40"
                priority
                quality={90}
              />
              
              {/* Main Container */}
              <div className="bg-neutral-900/60 backdrop-blur-md rounded-2xl h-full 2xl:h-[800px] 2xl:container w-full flex flex-col md:flex-row p-4 md:p-6 border border-border-subtle z-10 overflow-hidden shadow-2xl">
                
                {/* Left Column: Sidebar */}
                <Sidebar />

                {/* Right Column: TopNav & Main Content */}
                <div className="flex flex-col flex-grow h-full overflow-hidden mt-4 md:mt-0 md:pl-6">
                  
                  {/* TopNav Navigation Bar */}
                  <Header />

                  {/* Scrollable Main Content */}
                  <main className="flex-grow overflow-y-auto scrollbar-hide pt-6">
                    <div className="h-full">
                      {children}
                    </div>
                  </main>
                  
                </div>

              </div>
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    </ContextProvider>
  );
}
