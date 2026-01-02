/* Top nav */
const navItems = [
  {
    href: "/about/",
    title: "ⓘ about"
  },
  {
    href: "/events/",
    title: "🗓 events"
  }
];

const populateNav = function() {
  let nav = document.getElementById("top-nav");
  let path = window.location.pathname;

  let home = document.createElement("a");
  home.href = "/";
  home.innerHTML = "↩ home";
  if (path === "/") home.id = "current-page";
  nav.append(home);

  let ul = document.createElement("ul");

  for (const item of navItems) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = item.href;
    a.innerHTML = item.title;

    if (item.href === path) a.id = "current-page";

    li.append(a);
    ul.append(li);
  }

  nav.append(ul);
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
  <p>brought to you in 2026</p>
`

const populateFooter = function() {
  let footer = document.getElementById("footer");
  footer.innerHTML = footerHTML;
}

populateFooter();
