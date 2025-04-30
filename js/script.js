gsap.registerPlugin(ScrollTrigger);
const textElements = gsap.utils.toArray("#section1 .s1show");
textElements.forEach((text) => {
    gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: text,
            start: "center 30%",
            end: "center 30%",
            scrub: true,
        },
    });
});
