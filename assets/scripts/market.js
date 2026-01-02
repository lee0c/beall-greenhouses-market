const makeArtist = function(artist) {
  let container = document.createElement("div");
  container.classList.add("artist");
  container.id = artist.id;

  /* artist img */
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("fit-contain");
  let img = document.createElement("img");
  img.src = artist.img.src;
  img.alt = artist.img.alt;
  imgDiv.append(img);
  container.append(imgDiv);

  /* artist name */
  let h3 = document.createElement("h3");
  h3.innerHTML = artist.name;
  container.append(h3);

  /* artist bio */
  let descDiv = document.createElement("div");
  descDiv.classList.add("description");
  let bio = document.createElement("p");
  bio.innerHTML = artist.bio;
  descDiv.append(bio);
  
  /* artist contact info */
  let contacts = document.createElement("p");
  for (let i = 0; i < artist.contact.length; i++) {
    let a = document.createElement("a");
    a.href = artist.contact[i].href;
    a.innerHTML = artist.contact[i].title;
    a.target = "_blank";
    contacts.append(a);

    if (i !== artist.contact.length - 1) contacts.append(" ● ");
  }
  descDiv.append(contacts);

  container.append(descDiv);
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
