//make default for timeline
const tl = gsap.timeline({
  default: {
    duration: 0.75,
    ease: "power2.easeOut",
  },
});

// tl.fromTo("ClassName", {initial state e ki thakbe}, {ending point e ki hobe});
tl.fromTo(
  ".hero-img",
  { scale: 1.5, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "1.5rem",
    delay: 0.25,
    duration: 2.5,
    ease: "slow(0.2,0.7,false)",
  }
);

// tl.fromTo(
//   ".hero-img",
//   { scale: 1.4, borderRadius: "0rem" },
//   {
//     scale: 1,
//     borderRadius: "1.5rem",
//     delay: 0.25,
//     duration: 2.5,
//     ease: "elastic.out(2.5, 2)",
//   }
// );

// tl.fromTo(
//   ".hero-img",
//   { scale: 1.5, borderRadius: "0rem" },
//   {
//     scale: 1,
//     borderRadius: "1.5rem",
//     delay: 0.25,
//     duration: 2.5,
//     ease: "elastic.out(1.5,2)",
//   }
// );
