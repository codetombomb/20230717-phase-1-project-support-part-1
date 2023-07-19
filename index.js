const newEl = ({ el, cls, id }) => {
  const newEl = document.createElement(el);
  if (cls) {
    newEl.classList.add(cls);
  } else if (id) {
    newEl.id = id;
  }
  return newEl;
};

/**
 *
 * mkEl: accepts a string like `div.class-name` or `h1#heading`
 * It returns a DOM element with an initial class or id assigned like <div class="class-name"></div>
 */

const mkEl = (el) => {
  const isClass = el.includes(".");
  const splitEl = isClass
    ? el.split(".").filter((char) => char !== "")
    : el.split("#").filter((char) => char !== "");
  if (isClass) {
    if (splitEl.length === 1) {
      return newEl({ el: "div", cls: splitEl[0] });
    } else if (splitEl.length > 1) {
      return newEl({ el: splitEl[0], cls: splitEl[1] });
    }
  } else if (!isClass && splitEl.length === 1) {
    return newEl({ el: "div", id: splitEl[0] });
  } else if (!isClass && splitEl.length > 1) {
    return newEl({ el: splitEl[0], id: splitEl[1] });
  } else {
    return newEl({ el: "div" });
  }
};

const bsCard = ({ id, name, image, description, recipe }) => {
  const col = mkEl(".col");
  const card = mkEl(".card");
  const cdImg = mkEl("img.card-image-top");
  const cdBody = mkEl(".card-body");
  const cdTitle = mkEl("h3.card-title");
  const cdDesc = mkEl("p.card-text");
  const cdLink = mkEl("a.btn");

  card.style.width = "275px";
  card.style.height = "100%";
  cdImg.src = image;
  cdImg.alt = name;
  cdTitle.textContent = name;
  cdDesc.textContent = description;
  cdLink.textContent = "Recipe";
  cdLink.classList.add("btn-dark");
  cdLink.href = recipe;

  col.id = `dessert-${id}`;

  card.addEventListener("click", () => {
    // Could add a click event to the card to show name and desc?
    // Modal Bootstrap: https://codetombomb.github.io/2023-acc-phase-1-project-demo/
    // Modal code: https://github.com/codetombomb/2023-acc-phase-1-project-demo/blob/c31f3ebd904d686dfffd7862a25d23568a574671/index.html#L42
  });
  card.addEventListener("mouseenter", () => {
    // Could add a click or hover event to the card to make it pop?
  });
  card.addEventListener("mouseleave", () => {
    // Could add a click or hover event to the card to make it pop?
  });

  cdBody.append(cdTitle, cdDesc, cdLink);
  card.append(cdImg, cdBody);
  col.appendChild(card);

  return col;
};

const renderDeserts = (dessertsList) => {
  const row = mkEl(".row");
  row.classList.add("row-cols-auto", "g-4"); // Makes the layout work

  dessertsList.forEach((dessert) => {
    row.append(bsCard(dessert));
  });
  document.querySelector("#desserts-container").append(row);
};

const getDesserts = async () => {
  const resp = await fetch("http://localhost:3000/desserts");
  const data = await resp.json();
  return data;
};

const spinner = document.querySelector("#loading-spinner");
spinner.classList.remove("d-none")
setTimeout(() => {
    getDesserts().then((desserts) => renderDeserts(desserts));
    spinner.classList.add("d-none")
}, 2000)