import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/About";
import Guidelines from "../components/Guidelines";
import Awards from "../components/Awards";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SeoHead title="ERU Symposium 2023" />
      <Layout>
        <Hero />
        <About />
        <Guidelines />
        <Awards />
        <Contact />
      </Layout>
    </>
  );
}
