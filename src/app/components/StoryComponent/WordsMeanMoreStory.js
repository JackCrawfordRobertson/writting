// src/components/StoryComponent/COPStory.js
import React from "react";
import Image from "next/image";
import styles from "./Story.module.css";

const WordsMeanMoreStory = ({ onClose }) => {
    const title = "COP presidents and going 'Back to caves'";
    const description = "This year, the COP28 community has the remarkable pleasure of President Sultan Al Jaber heading up the conference of parties in the UAE...";
    const images = [
        "https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/COP28_UAE.jpg",
        "https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/Cop_President.png",
        "https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/Seeing_CO.gif"
    ];

    return (
        <div className={styles.storyContainer}>
            <div className={styles.header}>
                <h2 className={styles.storyTitle}>{title}</h2>
                <button onClick={onClose} className={styles.closeButton}>✕</button>
            </div>
            <div className={styles.content}>
                <div className={styles.imageGrid}>
                    {images.map((url, index) => (
                        <Image
                            key={index}
                            src={url}
                            alt={`Story image ${index + 1}`}
                            width={400}
                            height={300}
                            className={styles.gridItem}
                        />
                    ))}
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default WordsMeanMoreStory;