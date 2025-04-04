import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import React from 'react'

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="antialiased">{children}</main>
        <Footer />
    </div>
  )
}