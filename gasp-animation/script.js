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
    ease: "elastic.out(1.5,2)",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cta2", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<30%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<30%");
tl.fromTo(".cta6", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<30%");
// tl.fromTo(
//   ".btn",
//   { y: "20", opacity: 0.5, display: "none" },
//   { y: 0, opacity: 1, display: "block" },
//   "<"
// );
tl.fromTo(".btn", { y: "20", opacity: 0 }, { y: 0, opacity: 1 }, "<");
// tl.fromTo(
//   ".logo",
//   { scale: 1.5, borderRadius: "0rem" },
//   {
//     scale: 1,
//     borderRadius: "1.5rem",
//     delay: 0.25,
//     duration: 2.5,
//     ease: "elastic.out(1.5,3)",
//   }
// );

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

const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");
logo.textContent = "";
// console.log(letter);
letters.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

//ektar por ekta letter ashar jonno stagger user korbo tailei oirkhm ekta por ekta letter ashbe
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { x: "100%", display: "none" },
  {
    x: 0,
    display: "inline-block",
    delay: 1,
    stagger: 0.3,
    repeat: -1, //repeat:-1 dewa mane holo infinite loop hisabe choltei thakbe
    ease: "back.out",
  }
);
