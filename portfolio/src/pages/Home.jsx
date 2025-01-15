import Layout from "../components/layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <div className="home-container">
                <Hero />
                <About />
                <Contact />
            </div>
        </Layout>   
    );
};

export default Home;
