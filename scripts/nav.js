/* Top nav */
const navItems = [
  {
    href: "/",
    name: "↩ back home"
  },
  {
    href: "/directory/",
    name: "🧺 all markets"
  }
];

const populateNav = function() {
  let nav = document.getElementById("top-nav");
  let path = window.location.pathname;
  console.log(path);

  for (const item of navItems) {
    let a = document.createElement("a");
    a.href = item.href;
    a.innerHTML = item.name;

    if (item.href === path) a.id = "current-page";

    nav.append(a);
  }
}

populateNav();

/* Footer */
const footerHTML = `
  <div id="contacts">
    <p>
      Website questions or feedback?
      <a href="mailto:lee.cattarin@gmail.com?cc=montanahawke@gmail.com&subject=Beall%20Greenhouses%20Market">
        email Lee
      </a>
    </p>
    <p>Market questions?
      <a href="mailto:montanahawke@gmail.com?subject=Beall%20Greenhouses%20Market">
        email Hawke
      </a>
    </p>
  </div>
  <p>brought to you in 2025</p>
`

const populateFooter = function() {
  let footer = document.getElementById("footer");
  footer.innerHTML = footerHTML;
}

populateFooter();
