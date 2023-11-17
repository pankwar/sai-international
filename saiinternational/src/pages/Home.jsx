import React from "react";
import { HomePageSlider } from "../components/HomePageSlider";
import { AboutShort } from "../components/AboutShort";
import { ProductList } from "../components/ProductList";
import { TeamsList } from "../components/TeamsList";
import { GallerySection } from "../components/GallerySection";

export const Home = () => {
    return (
        <>
            <div className="p-2 p-lg-0">
                <div className="shadowpremium">
                    <HomePageSlider></HomePageSlider>
                </div>

                <AboutShort></AboutShort>

                <ProductList></ProductList>

                <TeamsList></TeamsList>
                
                <GallerySection></GallerySection>
            </div>

        </>
    )
}