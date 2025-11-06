document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.querySelector(".welcome");
  const welcvid = document.querySelector("video");
  const Contento = document.querySelector(".content");
  const aboutsect = document.querySelector(".about-section");

  welcome.style.display = "flex";
  welcvid.style.display = "block";
  Contento.style.display = "block";
  aboutsect.style.display = "none";
});

function about() {
  const welcome = document.querySelector(".welcome");
  const welcvid = document.querySelector("video");
  const Contento = document.querySelector(".content");
  const aboutsect = document.querySelector(".about-section");

  welcome.style.display = "none";
  welcvid.style.display = "none";
  Contento.style.display = "none";
  aboutsect.style.display = "flex";
}

function sectiononclick(id) {
  console.log(id);
  const nav = document.querySelector(id);
  for (let i = 1; i <= 5; i++) {
    if (
      document.querySelector(`.sect-${i}`).style.borderBottom ===
      "3px solid white"
    ) {
      document.querySelector(`.sect-${i}`).style.borderBottom = "";
    }
  }
  nav.style.borderBottom = "3px solid white";
}

function search() {
  const container = document.querySelector(".input-search");
  document.querySelector(".input-search").style.position = "absolute";
  document.querySelector(".input-search").style.backgroundColor = "black";
  document.querySelector(".input-search").style.width = "55%";
  document.querySelector(".input-search").style.height = "5 0vh";
  document.querySelector(".input-search").style.marginLeft = "-10%";
  document.querySelector("input").style.height = "10%";
  document.querySelector(".sections").style.filter = "blur(3px)";
  document.querySelector(".top-left").style.filter = "blur(3px)";
  document.querySelector(".input-search").style.zIndex = "1000";
  document.querySelector(".welcome").style.filter = "blur(3px)";
  document.querySelector(".content").style.filter = "blur(3px)";
  document.querySelector(".about-section").style.filter = "blur(3px)";
  document.querySelector(".search-icon").style.height = "10%";
  document.querySelector(".search-icon").style.width = "8%";

  document.addEventListener("click", function (event) {
    if (!container.contains(event.target)) {
      document.querySelector(".input-search").style.position = "";
      document.querySelector(".input-search").style.backgroundColor = "";
      document.querySelector(".input-search").style.width = "";
      document.querySelector(".input-search").style.height = "";
      document.querySelector(".input-search").style.marginLeft = "";
      document.querySelector("input").style.height = "";
      document.querySelector("input").value = "";
      document.querySelector(".sections").style.filter = "";
      document.querySelector(".top-left").style.filter = "";
      document.querySelector(".input-search").style.zIndex = "";
      document.querySelector(".welcome").style.filter = "";
      document.querySelector(".content").style.filter = "";
      document.querySelector(".about-section").style.filter = "";
      document.querySelector(".search-icon").style.height = "";
      document.querySelector(".search-icon").style.width = "";
    }
  });
}
function servecontact(id) {
  const container = document.querySelector(".serve-contact");
  document.querySelector(".serve-contact").style.display = "block";
  console.log(`${id} clicked`);

  if (id === "serve") {
    document.querySelector(".serve-contact-butt").innerHTML = "Serve";
    document.querySelector(".welcome-tit").innerHTML = "Serve With us";
    document.querySelector(".serve-message").innerHTML += `
    <select type="dropdown" id="">
  <option value="">Gracenation Preaching team</option>
  <option value="">Gracenation Worship team</option>
  <option value="">Gracenation Drama team</option>
  <option value="">Gracenation Media team</option>
  <option value="">Gracenation Protocol team</option>
</select>
    `;
  } else {
    document.querySelector(".serve-message").innerHTML += `
         <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
    `;
  }
  document.addEventListener("click", function hideOnOutsideClick(e) {
    // If click is outside the container and not on the button
    if (
      !container.contains(e.target) &&
      !e.target.matches("button[onclick*='servecontact']")
    ) {
      container.style.display = "none";
      // Remove listener after hiding
      document.removeEventListener("click", hideOnOutsideClick);
    }
  });
}
