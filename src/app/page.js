"use client";

import React, { useState } from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";
import Image from "next/image";
import storyData from "@/app/data/storyData";
import styles from "@/app/styles/page.module.css";
import COPStory from "@/app/components/StoryComponent/COPStory"; // Import the COPStory component
import WordsMeanMoreStory from "@/app/components/StoryComponent/WordsMeanMoreStory"; // Import any other story components if you have them

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [selectedStoryKey, setSelectedStoryKey] = useState(null); // Use key to identify which story to show

    const handleClick = (node) => {
        console.log("Node clicked:", node);
        setSelectedStoryKey(node.data.key); // Set the selected story key based on the clicked node
        setOpen(true);
    };

    const handleClose = () => {
        console.log("Closing story...");
        setOpen(false);
    };

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1 className={styles.titleWithLogo}>
                    Written Work
                    <Image src="/logo.svg" alt="Logo" width={24} height={24} className={styles.logo} />
                </h1>
                <p className={styles.paragraphText}>
                    In this online archive, I've authored a series of stories, each represented by a rectangle. These
                    rectangles visually estimate the carbon emissions associated with various topics, including
                    companies, themes, and individuals. My goal is to provide a clear understanding of environmental
                    impacts.
                </p>
            </header>
            <main className={styles.content}>
                <div style={{ height: "80svh", width: "100%" }}>
                    <ResponsiveTreeMap
                        data={storyData}
                        identity="name"
                        value="value"
                        leavesOnly={true}
                        label={(node) => node.data.name}
                        labelSkipSize={12}
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        onClick={handleClick}
                        nodeOpacity={0.9}
                        innerPadding={5}
                        outerPadding={10}
                        borderWidth={2}
                        borderColor="white"
                        colors={["#3496d3"]} // Primary base color
                        labelTextColor="white"
                        tooltip={({ node }) => (
                            <div
                                style={{
                                    padding: "8px 12px",
                                    background: "white",
                                    color: "#3496d3",
                                    borderRadius: "4px",
                                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
                                }}
                            >
                                <strong>{node.data.name}</strong>
                                <br />
                                <span>Estimated Scale of Emissions: {node.data.value}</span>
                            </div>
                        )}
                    />
                </div>
                {open && selectedStoryKey === "COPStory" && (
                    <COPStory onClose={handleClose} /> // Render COPStory when its key is selected
                )}
                {open && selectedStoryKey === "WordsMeanMoreStory" && (
                    <WordsMeanMoreStory onClose={handleClose} /> // Render another story component if needed
                )}
            </main>
        </div>
    );
};

export default HomePage;