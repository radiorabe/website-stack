import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useInspireAnimation = (sectionRef) => {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        markers: true, // Remove after debugging
      },
    });

    // gsap.fromTo(
    //   sectionRef.current.querySelector("h1"),
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top 80%",
    //       end: "top 50%",
    //       scrub: true,
    //     },
    //   }
    // );
  });

  return () => ctx.revert(); // Cleanup GSAP context when
};
