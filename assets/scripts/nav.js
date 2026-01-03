/* Top nav */
const navItems = [
  {
    href: "/about/",
    title: "ⓘ about",
    tooltip: "about the Beall Greenhouses"
  },
  {
    href: "/events/",
    title: "🗓 events",
    tooltip: "events at the Beall Greenhouses"
  },
  {
    href: "/artists/",
    title: "🖌 artists",
    tooltip: "artists in residence at the Beall Greenhouses"
  }
];

const createMenuLink = function(title, href, tooltip) {
  let path = window.location.pathname;

  let a = document.createElement("a");
  a.href = href;
  a.innerHTML = title;
  a.title = tooltip;
  a.ariaLabel = tooltip;
  if (path === href) a.id = "current-page";

  return a;
}

const createSkipLink = function() {
  let a = createMenuLink("skip ↷", "#main", "skip to main content");
  a.id = "skip";
  return a;
}

const populateNav = function() {
  let nav = document.getElementById("top-nav");

  nav.append(createSkipLink());
  nav.append(createMenuLink("↩ home", "/", "home page for the Beall Greenhouses"));

  let ul = document.createElement("ul");

  for (const item of navItems) {
    let li = document.createElement("li");
    li.append(createMenuLink(item.title, item.href, item.tooltip));
    ul.append(li);
  }

  nav.append(ul);
}

populateNav();

/* Footer */
const footerHTML = `
  <p>questions?
    <a href="mailto:beall.greenhouses@gmail.com">email us!</a>
  </p>
  <p>brought to you in 2026</p>
`

const populateFooter = function() {
  let footer = document.getElementById("footer");
  footer.innerHTML = footerHTML;
}

populateFooter();
