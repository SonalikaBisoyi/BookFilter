const books = {
    data: [
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Double black Bed",
        category: "Romance",
        price: "49",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      {
        title: "Regular White Sofa",
        category: "Classics",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Classics",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fantasy",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fantasy",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Comedy",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Comedy",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "SelfHelp",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "SelfHelp",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Action-and-Adventure",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Action-and-Adventure",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "GraphicNovel",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "GraphicNovel",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Detective-and-Mystery",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Detective-and-Mystery",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Romance",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Biographies-and-Autobiographies",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Biographies-and-Autobiographies",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Cookbooks",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Cookbooks",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
      {
        title: "Regular White Sofa",
        category: "Fiction",
        price: "30",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
    ],
  };
  
  function createBookCard(book) {
    let card = document.createElement("div");
    card.classList.add("card", book.category.toLowerCase().replace(/\s/g, "-"));
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = new Image();
    image.src = book.image;
    image.alt = book.title;
    image.addEventListener("error", function () {
      card.classList.add("image-error");
    });
  
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let title = document.createElement("h5");
    title.classList.add("product-name");
    title.innerText = book.title.toUpperCase();
    container.appendChild(title);
  
    let price = document.createElement("h6");
    price.innerText = "$" + book.price;
    container.appendChild(price);
  
    card.appendChild(container);
  
    return card;
  }
  
  function renderBooks() {
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML = "";
  
    // Group books by category
    const groupedBooks = {};
    for (let book of books.data) {
      if (!groupedBooks[book.category]) {
        groupedBooks[book.category] = [];
      }
      groupedBooks[book.category].push(book);
    }
  
    // Create separate containers for each category
    for (let category in groupedBooks) {
      // Create category container
      let categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");
      booksContainer.appendChild(categoryContainer);
  
      // Create category heading
      let categoryHeading = document.createElement("h2");
      categoryHeading.textContent = category;
      categoryContainer.appendChild(categoryHeading);
  
      // Create book grid container
      let bookGrid = document.createElement("div");
      bookGrid.classList.add("book-grid");
      categoryContainer.appendChild(bookGrid);
  
      // Create cards for books in the category
      let categoryBooks = groupedBooks[category];
      for (let book of categoryBooks) {
        let card = createBookCard(book);
        bookGrid.appendChild(card);
      }
    }
  }
  
  function filterBooks(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.toggle("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      let category = element.classList[1];
      if (value === "all" || category === value.toLowerCase()) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    });
  
    let categoryContainers = document.querySelectorAll(".category-container");
    categoryContainers.forEach((container) => {
      let categoryHeading = container.querySelector("h2");
      if (categoryHeading.textContent.toLowerCase() === value.toLowerCase() || value === "all") {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    });
    
    // Hide non-active category containers
    categoryContainers.forEach((container) => {
      if (!container.classList.contains("active")) {
        container.style.display = "none";
      } else {
        container.style.display = "block";
      }
    });
  }
  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
      const card = clickedElement.closest(".card");
      const bookIndex = Array.from(card.parentNode.children).indexOf(card);
      const book = books.data[bookIndex];
      displayBookDetails(book);
    }
  });
  
  function displayBookDetails(book) {
    let detailsDiv = document.getElementById("bookDetails");
    detailsDiv.innerHTML = "";
  
    let title = document.createElement("h3");
    title.textContent = book.title;
    detailsDiv.appendChild(title);
  
    let category = document.createElement("p");
    category.textContent = "Category: " + book.category;
    detailsDiv.appendChild(category);
  
    let price = document.createElement("p");
    price.textContent = "Price: $" + book.price;
    detailsDiv.appendChild(price);
  
    let details = document.createElement("p");
    details.textContent = book.details;
    detailsDiv.appendChild(details);
  
    let popup = document.getElementById("bookDetailsPopup");
    popup.style.display = "flex";
  }
  // Add event listener to close the popup
document.getElementById("closePopup").addEventListener("click", function () {
    closeBookDetails();
  });
  
  function closeBookDetails() {
    let popup = document.getElementById("bookDetailsPopup");
    popup.style.display = "none";
  }
  
  
  window.addEventListener("DOMContentLoaded", () => {
    renderBooks();
    filterBooks("all");
  });
  