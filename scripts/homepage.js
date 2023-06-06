const homepageButton = document.getElementById("homepageButton");
const homepage = document.querySelector(".homepage");

homepage.addEventListener("click", () => {
    homepage.classList.add("hidden");
    window.location.href = "./client-tab/index.html";
});
