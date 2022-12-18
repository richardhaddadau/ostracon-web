import React, { useState } from "react";
import { Avatar } from "@mui/material";

const CreatePost = () => {
    // States
    const [makeAnonymous, setMakeAnonymous] = useState(false);

    const processMentions = (value) => {
        const processedText = [];
        const tempElement = document.createElement("div");
        const finalElement = document.getElementById("new-post-text");
        let textCopy = value;

        // textCopy = textCopy.replace(/(<)/gi, `&lt;`);
        // textCopy = textCopy.replace(/(>)/gi, `&gt;`);
        // textCopy = textCopy.replace(
        //     /[#][a-z0-9_\.]{2,}/gi,
        //     `<span onclick="console.log('hi')"><a class='text-secondary-500')>$&</a></span>`
        // );
        // textCopy = textCopy.replace(/(?:\r\n|\n\r|\r|\n)/g, `<br />`);

        const tagList = textCopy.match(/[@#][a-z0-9_\.]{2,}/gi);

        // if no mentions, just return the text
        if (tagList == null) {
            return textCopy;
        }

        // otherwise, loop through mentions/hashtags
        for (const [index, tag] of tagList.entries()) {
            // push any text preceding the mention
            tempElement.innerHTML += textCopy.substring(
                0,
                textCopy.indexOf(tag)
            );

            // now push the tag itself
            // tempElement.innerHTML += `<span class='cursor-pointer text-secondary-500' onclick="console.log('hi')" spellcheck="false">${tag}</span>`;
            tempElement.innerHTML += `<span class='cursor-pointer px-1 bg-secondary-500 text-white' contenteditable="false" spellcheck="false">${tag}</span>`;

            // reset text before next iteration
            textCopy = textCopy.substring(
                textCopy.indexOf(tag) + tag.length,
                textCopy.length
            );
        }

        // if there's any text left, push that too
        if (textCopy.length > 0) {
            tempElement.innerHTML += textCopy;
        }

        finalElement.innerHTML = tempElement.innerHTML;
        // console.log(processedText);
    };

    return (
        <article className="p-5 flex flex-col bg-surface-light dark:bg-primary-500 rounded-2xl border border-white dark:border-black w-full max-w-2xl">
            <div
                id="new-post-wrapper"
                className="mb-2 flex flex-row gap-2 items-center"
            >
                <Avatar sx={{ width: 50, height: 50 }}>SA</Avatar>
                <div
                    id="new-post-text"
                    className="px-2 py-1 grow border-0 outline-0 resize-none h-fit max-h-52 text-primary-500 dark:text-white overflow-y-auto"
                    onInput={(el) => {
                        processMentions(el.target.innerText);

                        const finalElement =
                            document.getElementById("new-post-text");
                        let finalRange;
                        let finalSelect;

                        if (window.getSelection && document.createRange) {
                            finalRange = document.createRange();
                            finalRange.selectNodeContents(finalElement);
                            finalRange.collapse(false);

                            finalSelect = window.getSelection();
                            finalSelect.removeAllRanges();

                            finalSelect.addRange(finalRange);
                        } else if (document.body.createTextRange) {
                            finalRange = document.body.createTextRange();
                            finalRange.moveToElementText(finalElement);
                            finalRange.select();
                        }
                    }}
                    placeholder="What's up?"
                    contentEditable
                />
            </div>
            <button className="mt-4 p-1 items-start w-20 rounded-2xl bg-secondary-500 dark:bg-secondary-500 text-white">
                Post
            </button>
        </article>
    );
};

export default CreatePost;
