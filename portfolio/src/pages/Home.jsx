import Layout from "../components/layout";
import './home.css'

const Home = () => {

    return (
        <Layout>
        <section id="home"> <h1>Hero: This takes up the entire screen when the page is loaded</h1> </section>
        <section id="about"> <h1>There is going to be a image gallery with 4 images on the left sideand text on the right side</h1> </section>
        <section id="contact"> <h1>Contact: Here there has to be a form with a submit button</h1> </section>
        </Layout>   
    );
};

export default Home;
