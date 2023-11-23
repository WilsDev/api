const navs = document.querySelectorAll("#nav");
const sectionWrapper = document.getElementById("sectionWrapper");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    navs.forEach((otherNav) => {
      otherNav.classList.remove("active");
    });
    nav.classList.add("active");
    sectionWrapper.style.height = "0";

    setTimeout(() => {
      if (nav.classList.contains("active")) {
        loadContent();
      }
      setTimeout(() => {
        getHeight();
      }, 10);
    }, 1000);
  });
});

const getHeight = () => {
  const innerWrapper = document.getElementById("innerWrapper");
  sectionWrapper.style.height = `${innerWrapper.clientHeight}px`;

  /*   setInterval(() => {
    sectionWrapper.style.height = `${innerWrapper.clientHeight}px`;
  }, 100); */
};

loadContent = () => {
  navs.forEach((item) => {
    const getValue = item.dataset.value;
    if (getValue === "testimonies" && item.classList.contains("active")) {
      console.log("testimonies loaded");
      fetch(
        "https://raw.githubusercontent.com/WilsDev/api/main/testimonies.html"
      )
        .then((response) => response.text())
        .then((newHtmlStructure) => {
          sectionWrapper.innerHTML = newHtmlStructure;
          getHeight();
        })
        .catch((error) =>
          console.error("Error fetching testimonies.txt:", error)
        );
    } else if (getValue === "articles" && item.classList.contains("active")) {
      console.log("articles loaded");
      fetch("https://raw.githubusercontent.com/WilsDev/api/main/articles.html")
        .then((response) => response.text())
        .then((newHtmlStructure) => {
          sectionWrapper.innerHTML = newHtmlStructure;
          getHeight();
          handleDynamicElements();
        })
        .catch((error) =>
          console.error("Error fetching testimonies.txt:", error)
        );
    }
  });
};

// LOAD CONTENT

/* // Define the readMore function
const readMore = (parent, child) => {
  parent.clientHeight = child.clientHeight;
}; */

// LOAD CONTENT
loadContent();

const handleDynamicElements = () => {
  const fcBtn = document.querySelector(".fc#readMoreBtn");
  const fcContainer = document.querySelector(".fc#moreContainer");
  const fcMore = document.querySelector(".fc#more");

  fcBtn.addEventListener("click", () => {
    fcContainer.style.height = `${fcMore.clientHeight}px`;
    fcBtn.style.display = "none";
    setTimeout(() => {
      getHeight();
    }, 1000);
  });

  const scBtn = document.querySelector(".sc#readMoreBtn");
  const scContainer = document.querySelector(".sc#moreContainer");
  const scMore = document.querySelector(".sc#more");

  scBtn.addEventListener("click", () => {
    scContainer.style.height = `${scMore.clientHeight}px`;
    scBtn.style.display = "none";
    setTimeout(() => {
      getHeight();
    }, 1000);
  });

  const lcBtn = document.querySelector(".lc#readMoreBtn");
  const lcContainer = document.querySelector(".lc#moreContainer");
  const lcMore = document.querySelector(".lc#more");

  lcBtn.addEventListener("click", () => {
    lcContainer.style.height = `${lcMore.clientHeight}px`;
    lcBtn.style.display = "none";
    setTimeout(() => {
      getHeight();
    }, 1000);
  });
};
