import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moumita Ahamed | Full-Stack Developer Portfolio",
    url: "https://port-folio-qzvn.vercel.app/",
    description: "Explore the professional portfolio of Moumita Ahamed, a skilled full-stack developer specializing in Next.js, React, and modern web technologies.",
    author: {
      "@type": "Person",
      name: "Moumita Ahamed",
      jobTitle: "Full-Stack Developer",
      // No social media links added as per your request
    },
    publisher: {
      "@type": "Organization",
      name: "Moumita Ahamed",
      logo: {
        "@type": "ImageObject",
        url: "https://port-folio-qzvn.vercel.app/og-image.png"
      }
    }
  };

  return (
    <div className="bg-white-900 text-white">
      {/* SEO Meta & JSON-LD Schema */}
      <Head>
        <title>Moumita Ahamed | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the professional portfolio of Moumita Ahamed, a skilled full-stack developer specializing in Next.js, React, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Moumita Ahamed, Portfolio, Full Stack Developer, Next.js, React, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Moumita Ahamed | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore the professional projects and skills of Moumita Ahamed."
        />
        <meta property="og:url" content="https://port-folio-qzvn.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://port-folio-qzvn.vercel.app/og-image.png"
        />

        {/* JSON-LD SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}
