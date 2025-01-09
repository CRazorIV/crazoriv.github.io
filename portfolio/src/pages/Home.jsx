import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import './home.css'

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
        <section>
            <h1>{t("welcome")}</h1>
            <p>{t("aboutMe")}</p>
        </section>
        </Layout>   
    );
};

export default Home;
