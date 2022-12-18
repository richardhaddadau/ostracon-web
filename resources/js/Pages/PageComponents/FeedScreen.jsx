import React from "react";
import CreatePost from "../../Components/Post/CreatePost";
import Post from "../../Components/Post/Post";
import { Skeleton } from "@mui/material";

const FeedScreen = (props) => {
    return (
        <>
            <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                <CreatePost />

                <article className="p-5 flex flex-col bg-surface-light dark:bg-primary-500 rounded-2xl border border-white dark:border-black w-full max-w-2xl">
                    <div className="pb-3 flex flex-col w-full">
                        <Skeleton
                            sx={{ bgcolor: "#71717a" }}
                            height={20}
                            width={125}
                        />
                        <Skeleton
                            sx={{ bgcolor: "#71717a" }}
                            height={15}
                            width={200}
                        />
                    </div>

                    <div
                        className="-mt-1 dark:border-zinc-700 text-primary-500 dark:text-zinc-300 overflow-x-hidden"
                        id="post-body"
                    >
                        <Skeleton
                            sx={{ bgcolor: "#71717a" }}
                            height={100}
                            width={"100%"}
                        />
                    </div>

                    <div
                        className="pt-3 flex flex-row items-center gap-20 w-full"
                        id="post-interactions"
                    >
                        <Skeleton
                            sx={{ bgcolor: "#71717a" }}
                            variant="circular"
                            height={25}
                            width={25}
                        />
                        <Skeleton
                            sx={{ bgcolor: "#71717a" }}
                            variant="circular"
                            height={25}
                            width={25}
                        />
                        <Skeleton
                            sx={{ bgcolor: "#71717a" }}
                            variant="circular"
                            height={25}
                            width={25}
                        />
                    </div>
                </article>

                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </>
    );
};

export default FeedScreen;
