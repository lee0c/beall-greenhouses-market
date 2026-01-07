const makeArtistImg = function(artistImg) {
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("fit-contain");

  let img = document.createElement("img");
  img.src = artistImg.src;
  img.alt = artistImg.alt;

  imgDiv.append(img);
  return imgDiv;
}

const makeArtistDesc = function(bio, contact) {
  let descDiv = document.createElement("div");
  descDiv.classList.add("description");

  for (const bioLine of bio) {
    let p = document.createElement("p");
    p.innerHTML = bioLine;
    descDiv.append(p);
  }

  let contacts = document.createElement("p");
  for (let i = 0; i < contact.length; i++) {
    let a = document.createElement("a");
    a.href = contact[i].href;
    a.innerHTML = contact[i].title;
    a.target = "_blank";
    contacts.append(a);

    if (i !== contact.length - 1) contacts.append(" ● ");
  }
  descDiv.append(contacts);

  return descDiv;
}

const makeArtist = function(artist) {
  let container = document.createElement("div");
  container.classList.add("artist");
  container.id = artist.id;

  /* artist img */
  container.append(makeArtistImg(artist.img));

  /* artist name */
  let h3 = document.createElement("h3");
  h3.innerHTML = artist.name;
  container.append(h3);

  /* artist description */
  container.append(makeArtistDesc(artist.bio, artist.contact));
  return container;
}

let artistContainer = document.getElementById("artists");

const makeArtistPage = function(artists) {
  for (const artist of artists)
    artistContainer.append(makeArtist(artist));
}

let script = document.currentScript;
let artistsfile = script.dataset.artists;

fetch(artistsfile)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((artists) => makeArtistPage(artists))
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
