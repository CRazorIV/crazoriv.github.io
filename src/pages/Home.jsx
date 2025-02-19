import Layout from "../components/layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import './Home.css';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { useEffect } from 'react';

const Home = () => {
    const [heroRef, isHeroVisible] = useScrollFadeIn();
    const [aboutRef, isAboutVisible] = useScrollFadeIn();
    const [contactRef, isContactVisible] = useScrollFadeIn();

    useEffect(() => {
        // Ensure we start at the top when the component mounts
        window.scrollTo(0, 0);
        
        // Prevent scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        return () => {
            // Reset scroll restoration to auto when component unmounts
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
        };
    }, []);

    return (
        <Layout>
            <div className="home-container">
                <section 
                    id="hero"
                    ref={heroRef}
                    className={`scroll-fade ${isHeroVisible ? 'visible' : ''}`}
                >
                    <Hero />
                </section>
                <section 
                    id="about" 
                    ref={aboutRef} 
                    className={`scroll-fade ${isAboutVisible ? 'visible' : ''}`}
                >
                    <About />
                </section>
                <section 
                    id="contact" 
                    ref={contactRef} 
                    className={`scroll-fade ${isContactVisible ? 'visible' : ''}`}
                >
                    <Contact />
                </section>
            </div>
        </Layout>   
    );
};

export default Home;
