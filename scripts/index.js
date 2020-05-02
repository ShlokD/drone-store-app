const init = () => {
  const doAnimateFooter = (target) => {
    const footerContent = target.querySelector("#footer-content");
    const hidden = target.querySelectorAll(".opacity-0");

    hidden.forEach((hiddenElement) => {
      hiddenElement.classList.remove("opacity-0");
    });

    footerContent.classList.remove("hide-left");
  };

  const doAnimateModels = (target) => {
    const imgs = target.querySelectorAll("img");
    const texts = target.querySelectorAll(".model-text");
    [...imgs, ...texts].forEach((img) => {
      img.classList.remove(
        "opacity-0",
        "hide-left",
        "hide-right",
        "hide-bottom",
        "hide-top"
      );
    });
  };

  const doAnimateProduct = (target) => {
    target.classList.remove("hide-left");
  };

  const doAnimateFeatures = (target) => {
    console.log("animating features");
    target.classList.remove("opacity-0");
  };

  const doAnimateImages = (target) => {
    const imageHolders = target.querySelectorAll(".image-holder");
    imageHolders.forEach((holder) => {
      holder.classList.remove("move-left", "move-right");
    });
  };

  const animationsMap = {
    "app-footer": doAnimateFooter,
    models: doAnimateModels,
    "featured-product": doAnimateProduct,
    features: doAnimateFeatures,
    images: doAnimateImages,
  };

  const doAnimate = (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      console.log(entry);
      if (isIntersecting) {
        const { id } = target;
        console.log({ id });
        const animationFunc = animationsMap[id];
        animationFunc(target);
      }
    });
  };

  const animationObserver = new IntersectionObserver(doAnimate, {
    root: document.querySelector("#app"),
    rootMargin: "8px",
    threshold: 0,
  });
  const footer = document.querySelector("footer");
  const models = document.querySelector("#models");
  const featuredProduct = document.querySelector("#featured-product");
  const features = document.querySelector("#features");
  const images = document.querySelector("#images");

  animationObserver.observe(footer);
  animationObserver.observe(models);
  animationObserver.observe(featuredProduct);
  animationObserver.observe(features);
  animationObserver.observe(images);
};

window.addEventListener("load", init);
