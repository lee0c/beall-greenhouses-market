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
	if (href === "#main") a.id = "skip";
	else if (href === path) a.id = "current-page";

	return a;
}

const createHomeLink = function() {
	let path = window.location.pathname;

	let a = document.createElement("a");
	a.href = "/";
	a.ariaLabel = "Beall Greenhouses home";
	if (path === "/") {
		a.id = "current-page";
		a.title = "Beall Greenhouses home";
	} else {
		a.title = "↩ Beall Greenhouses home"
	}

	let logo = document.createElement("img");
	logo.src = "/assets/img/logo.jpg";
	logo.alt = "block print in black and orange of a rufous hummingbird in flight with tail flared. the hummingbird holds a banner that reads 'become ungovernable.'"

	a.append(logo);

	return a;
}

const createNav = function() {
	let nav = document.createElement("nav");
	nav.title = "background image shows the peak of a dilapidated greenhouse in black and white";

	nav.append(createMenuLink("skip ↷", "#main", "skip to main content"));
	nav.append(createHomeLink());

	let ul = document.createElement("ul");

	for (const item of navItems) {
		let li = document.createElement("li");
		li.append(createMenuLink(item.title, item.href, item.tooltip));
		ul.append(li);
	}

	nav.append(ul);

	return nav;
}

let header = document.querySelector("header");
header.append(createNav());

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
