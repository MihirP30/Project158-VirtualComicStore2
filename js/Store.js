AFRAME.registerComponent("store", {
  init: function() {
    this.placesContainer = this.el;
    this.createCards();
  },
  createCards: function() {
    const thumbnailsRef = [
      {
        id: "one-piece",
        title: "One Piece",
        url: "./assets/thumbnails/onepiece.jpg"
      },
      {
        id: "bleach",
        title: "Bleach",
        url: "./assets/thumbnails/bleach.jpg"
      },
      {
        id: "naruto",
        title: "Naruto",
        url: "./assets/thumbnails/naruto.jpg"
      },
      {
        id: "fairy-tail",
        title: "Fairy Tail",
        url: "./assets/thumbnails/fairytail.jpg"
      }
    ]

    var previousXPosition = -60;

    for(var item of thumbnailsRef) { // same as "for item in thumbnailsRef" in python
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = {x:posX, y:posY, z:posZ};
      previousXPosition += 25;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbnail = this.createThumbnail(item);
      borderEl.appendChild(thumbnail);

      // Title Text Element
      const titleEl = this.createTitleEl(item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive:"plane",
      width:14,
      height:23,
      depth:1
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color:"#0077CC",
      opacity:1
    });

    entityEl.setAttribute("cursor-listener", {})

    return entityEl;
  },
  createThumbnail: function(item) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive:"plane",
      height:21.7,
      width:12.5
    });
    entityEl.setAttribute("material", {
      src:item.url
    });
    entityEl.setAttribute("position", {z:0.11})

    return entityEl;
  },
  createTitleEl: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "dejavu",
      align: "center",
      width: 60,
      color: "#FF6600",
      value: item.title
    });
    entityEl.setAttribute("position", {y:-15});
    entityEl.setAttribute("visible", true);
    return entityEl;
  }
})