// src/components/StoryComponent/COPStory.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./Story.module.css";

const COPStory = ({ onClose }) => {
    const storyRef = useRef(null);

    useEffect(() => {
        console.log("COPStory component mounted");

        // Animate on mount
        gsap.fromTo(storyRef.current, 
            { y: "100%", opacity: 1 }, 
            { y: "0%", opacity: 1, duration: 1, ease: "power3.out" }
        );

        return () => {};
    }, []);

    const handleClose = () => {
        console.log("Closing story...");
        gsap.to(storyRef.current, {
            y: "100%",
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
            onComplete: onClose, // Trigger the onClose function after the animation completes
        });
    };

    return (
        <div ref={storyRef} className={styles.storyOverlay}>
            <div className={styles.storyContainer}>
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.storyTitle}>COP presidents and going 'Back to caves'</h2>
                    </div>
                    <div className={styles.headerControls}>
                        <button onClick={handleClose} className={styles.closeButton}>✕</button>
                        <Image
                            src="/White-logo.png"
                            alt="Logo"
                            width={100} // Adjust the size as needed
                            height={100} // Adjust the size as needed
                            className={styles.bottomImage}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                <div className={styles.contentBody}>

                    {/* First Image and Paragraph */}
                    <Image
                        src="https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/COP28_UAE.jpg"
                        alt="COP28"
                        width={400}
                        height={300}
                        className={styles.gridItem}
                    />
                    <p>This year, the COP28 community has the remarkable pleasure of President Sultan Al Jaber heading up the conference of parties in the UAE...</p>

                    {/* Second Image and Paragraph */}
                    <Image
                        src="https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/Cop_President.png"
                        alt="Cop President"
                        width={400}
                        height={300}
                        className={styles.gridItem}
                    />
                    <p>His leadership has been pivotal in navigating the discussions and expectations surrounding climate policy.</p>

                    {/* Third Image and Paragraph */}
                    <Image
                        src="https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/Seeing_CO.gif"
                        alt="Seeing CO"
                        width={400}
                        height={300}
                        className={styles.gridItem}
                    />
                    <p>As the conference progresses, many are hopeful for actionable outcomes that can significantly impact global warming.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default COPStory;