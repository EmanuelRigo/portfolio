// app/layout.tsx
import Sidebar from "@/components/Sidebar"; // Importa el Sidebar
import Header from "@/components/Header";
import "./globals.css"; // Importa los estilos globales
import Hero from "@/components/Hero";
import Image from "next/image";
import InfoColumn from "@/components/InfoColumn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {/* Sidebar */}
        <div className="w-full h-screen bg-black flex justify-center items-center">
          <div className="container bg-neutral-900 rounded-lg h-[700px] flex p-6 flex-col ">
            {/* Header */}
            <div className="w-full flex justify-center items-center">
              {/* <Header /> */}
            </div>
            {/* Columna principal */}
            <div className="flex w-full h-full">
              <div className="flex flex-col h-full flex-grow gap-6">
                {/* Header fijo */}
                <div className="h-44 w-full  flex">
                  <div className="w-44 h-44 ">
                    <div className="rounded-lg w-full h-full border-2 border-neutral-800 overflow-hidden">
                      <Image
                        src="/images/foto.jpg"
                        alt="Mi foto"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-grow ">
                    <div className="w-6/12 ">
                      <Hero />
                    </div>
                    <div className="w-6/12  flex items-center justify-center">
                      <Header />
                    </div>
                  </div>
                </div>

                {/* Contenido que ocupa el resto */}
                <div className="flex-grow   flex overflow-hidden">
                  <InfoColumn></InfoColumn>
                  <main className="flex-grow overflow-y-auto scrollbar-hide w-min">
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
      </body>
    </html>
  );
}
