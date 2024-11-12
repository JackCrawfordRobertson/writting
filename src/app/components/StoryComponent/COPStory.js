// src/components/StoryComponent/COPStory.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "./Story.module.css";

const COPStory = ({ onClose }) => {
    const storyRef = useRef(null);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        console.log("COPStory component mounted");

        // Get the height of the header after the component mounts
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }

        // Animate on mount
        gsap.fromTo(
            storyRef.current,
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
                <div ref={headerRef} className={styles.header}>
                    {/* Header content */}
                    <div className={styles.titleContainer}>
                        <h2 className={styles.storyTitle}>
                            COP presidents and going 'Back to caves'
                        </h2>
                    </div>
                    <div className={styles.headerControls}>
                        <button
                            onClick={handleClose}
                            className={styles.closeButton}
                        >
                            ✕
                        </button>
                        <Image
                            src="/White-logo.png"
                            alt="Logo"
                            width={100} // Adjust the size as needed
                            height={100} // Adjust the size as needed
                            className={styles.bottomImage}
                        />
                    </div>
                </div>
                <div
                    className={styles.content}
                    style={{ marginTop: headerHeight }}
                >
                   
                <div className={styles.contentBody}>

                <p>This year, the COP28 community has the remarkable pleasure of President Sultan Al Jaber heading up the conference of parties in the UAE, or as Dr Hamza Hamouchene more aptly puts it, conference of polluters. Born in 1973, the UK/US-educated president brings COP to the Middle East for the second time as governments look to create policy for the next 30 years to mitigate climate change. </p>

                    {/* First Image and Paragraph */}
                    <Image
                        src="https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/COP28_UAE.jpg"
                        alt="COP28"
                        width={400}
                        height={300}
                        className={styles.gridItem}
                    />
                    <p><b> So how did it go?</b> Well, two days into the conference, in an interview addressing his leadership as the head of The Abu Dhabi National Oil Company (ADNOC). The president claimed in what is now a famous interview that there was “no science” that supports a correlation between the fazing out of fossil fuels and limiting climate change to 1.5 degrees. Whether it's to do with the Dh2.75 billion ADNOC makes in yearly profits, the new investments the UAE has put into the industry, or the potential new oil deals the president was planning to negotiate at the event -as outlined in a leaked internal document preceding the event- The fact is, whether we use the language of phase out or phase down the COP president is looking for the global north to “lead by example”. </p>

                    {/* Second Image and Paragraph */}
                    <Image
                        src="https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/Cop_President.png"
                        alt="Cop President"
                        width={400}
                        height={300}
                        className={styles.gridItem}
                    />
                    <p><b>How’s that going?</b> One such “example” commitment, which potentially shows the global north's misdirection of leadership, is the Loss and Damage commitment at COP27. Outlined was a $100 billion fund built to fill the gaps already forming in climate change funding. Prominent voices such as Joe Thwaites, a senior representative for International Climate Finance, commented on the “historic achievement” of the Loss and Damage fund. However, falling $17 billion short of the fund target exposes the position of wealthy and high-emitting countries towards funds of this sort. </p>

                    {/* Third Image and Paragraph */}
                    <Image
                        src="https://raw.githubusercontent.com/jack97162368123/my-treemap-app/master/src/images/COP-Presedents/Seeing_CO.gif"
                        alt="Seeing CO"
                        width={400}
                        height={300}
                        className={styles.gridItem}
                    />
                    <p>To lead back to the COP mission, which is to “increase ambition and strengthen efforts to achieve shared climate goals”, how do you see the scale of Climate Change? The argument that is commonly made is that we are just experiencing standard environmental warming after an ice age. But from 1850 to 2015, we have emitted around 1,510 gigatons of carbon dioxide, but what does that number mean and what is its impact? Check out this fun visual tool that unlocks the scale healed within a gigaton. <a href='https://extraordinaryfacility.com/co2/'>Extraordinary Facility: Seeing CO2</a></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default COPStory;