import Layout from "../components/layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <div className="home-container">
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </Layout>   
    );
};

export default Home;
