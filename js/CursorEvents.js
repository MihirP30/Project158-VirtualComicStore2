AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: {default:"", type:"string"}
  },

  init: function() {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handleMouseEnterEvents: function() {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    })
  },

  handleMouseLeaveEvents: function() {
    this.el.addEventListener("mouseleave", () => {
      const {selectedItemId} = this.data;
      // const selectedItemId = this.data.selectedItemId; (THIS IS THE SAME AS LINE 19)

      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");

        if (id == selectedItemId) {
          el.setAttribute("material", {color:"#0077CC", opacity:1})
        }
      }
    })
  },
  handlePlacesListState: function() {
    const id = this.el.getAttribute("id");
    const placesId = ["one-piece", "naruto", "bleach", "fairy-tail"];

    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId:id
      })

      this.el.setAttribute("material", {color:"#D76B30", opacity:1})
    }
  }
})