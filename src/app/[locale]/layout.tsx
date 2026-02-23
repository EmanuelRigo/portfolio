// app/layout.tsx
import Sidebar from "@/components/Sidebar"; // Importa el Sidebar
import Header from "@/components/Header";
import "./globals.css"; // Importa los estilos globales
import Hero from "@/components/Hero";
import Image from "next/image";
import InfoColumn from "@/components/InfoColumn";
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
        <body className="">
          <NextIntlClientProvider>
            {/* Sidebar */}
            <div className="w-screen h-svh bg-neutral-900/100  flex justify-center items-center relative overflow-hidden">
              <Image
                src="/images/_BRH3818.JPG"
                alt="Background"
                fill
                className="object-cover"
                priority
                quality={90}
              />
              <div className="bg-neutral-900/60 backdrop-blur-sm rounded-md h-full 2xl:h-[700px] 2xl:container w-full flex p-6 flex-col lg:relative lg:border-3 border-neutral-800 z-10">
                {/* Header */}
                <div className="w-full flex justify-center items-center">
                  {/* <Header /> */}
                </div>
                {/* Columna principal */}
                <div className="flex w-full h-full">
                  <div className="flex flex-col h-full flex-grow gap-6">
                    {/* Header fijo */}
                    <div className="md:h-44 w-full  flex">
                      <div className="w-44 h-44 hidden md:block">
                        <div className="rounded-md w-full h-full border-2 border-neutral-800 overflow-hidden">
                          <Image
                            src="/images/foto.jpg"
                            alt="Mi foto"
                            width={200}
                            height={200}
                            className="rounded-md object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row flex-grow ">
                        <div className="w-full md:w-6/12 ">
                          <Hero />
                        </div>
                        <div className="w-full md:w-6/12 mt-4 md:mt-0  flex items-center justify-center">
                          <Header />
                        </div>
                      </div>
                    </div>

                    {/* Contenido que ocupa el resto */}
                    <div className="flex-grow flex flex-col md:flex-row w-full overflow-hidden gap-4 md:gap-0 ">
                      <InfoColumn></InfoColumn>
                      <main className="flex-grow overflow-y-auto scrollbar-hide md:w-min order-1 me-5 md:me-0 md:pe-0  ">
                        {children}
                      </main>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div>
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
          </NextIntlClientProvider>
        </body>
      </html>
    </ContextProvider>
  );
}
