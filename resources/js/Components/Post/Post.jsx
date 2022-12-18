import React, { useState } from "react";
import { Attach, Clap, Comment } from "../icons/Ostracon-Std";
import { Avatar } from "@mui/material";

const Post = () => {
    // States
    const [makeAnonymous, setMakeAnonymous] = useState(false);

    const interactions = {
        clap: (
            <>
                <Clap size={22} />
                400
            </>
        ),
        attach: (
            <>
                <Attach size={22} />
                400
            </>
        ),
        comment: (
            <>
                <Comment size={22} />
                400
            </>
        ),
    };

    const postText =
        "Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries" +
        " for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries";

    const limitPostChars = (textBlock) => {
        // Specify character limit
        const limit = 175;

        if (textBlock.length < limit) return textBlock;
        if (textBlock.substring(limit, limit + 1) === " ")
            return textBlock.substring(0, limit) + "...";

        const reverseText = textBlock
            .substring(0, limit)
            .split("")
            .reverse()
            .join("");

        // Find first space (which would be the last one before 150 characters)
        return (
            textBlock.substring(0, limit - reverseText.indexOf(" ") - 1) + "..."
        );
    };

    return (
        <article className="p-5 flex flex-col bg-surface-light dark:bg-primary-500 rounded-2xl border border-white dark:border-black w-full max-w-2xl">
            {makeAnonymous ? null : (
                <div className="pb-3 flex flex-col w-full border-b-2 border-primary-200">
                    <div
                        className="mb-1.5 cursor-pointer flex flex-row gap-2 items-center w-max font-bold text-lg text-primary-500 dark:text-zinc-400 hover:dark:text-zinc-100 transition-all duration-300"
                        id="username"
                    >
                        <Avatar sx={{ width: 50, height: 50 }}>SA</Avatar>
                        <p>Sterling Archer</p>
                    </div>
                    <div
                        className="flex flex-row gap-1.5 text-sm font-bold text-primary-400 dark:text-zinc-500"
                        id="nickname"
                    >
                        <a className="cursor-pointer hover:text-primary-500 dark:hover:text-zinc-100 transition-all duration-300">
                            @Randy
                        </a>{" "}
                        •{" "}
                        <div
                            id="post-time"
                            className="flex flex-row font-normal italic hover:dark:text-zinc-200 transition-all duration-300"
                            data-tooltip="actual date and time"
                        >
                            posted 10 March
                        </div>
                    </div>
                </div>
            )}
            <div
                className="py-3 dark:border-gray-700 text-primary-500 dark:text-zinc-400 overflow-x-hidden"
                id="post-body"
            >
                {limitPostChars(postText)}
            </div>
            <div
                className="pt-3 flex flex-row items-center gap-14 w-full"
                id="post-interactions"
            >
                {Object.keys(interactions).map((item) => (
                    <div
                        className="cursor-pointer flex flex-row items-center gap-2 fill-primary-300 dark:fill-zinc-400 hover:fill-primary-500 dark:hover:fill-zinc-100 text-sm text-primary-300 dark:text-zinc-400 hover:text-primary-500 dark:hover:text-zinc-100 hover:font-bold transition-all duration-300"
                        key={item}
                    >
                        {interactions[item]}
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Post;
