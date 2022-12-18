import React from "react";
import CreatePost from "../../Components/Post/CreatePost";

const TrendingScreen = (props) => {
    return (
        <>
            <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                <CreatePost />
                <p>Trending</p>
            </section>
        </>
    );
};

export default TrendingScreen;
