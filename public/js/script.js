// Navbar Link Active
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active");
      });
    }
  });
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#000000";
    document.getElementById("navbar").style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    document.getElementById("navbar").style.backdropFilter = "blur(4px);";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.boxShadow = "none";
  }
};
