
const categories = [
  {
    name: "Fiction",
    books: [
      {
        title: "Regular White Sofa",
        price: "1",
        image: "./img/sofa.jpeg",
        details: "This is the Regular White Sofa.",
      },
    ],
  },
  {
    name: "Classics",
    books: [
      {
        title: "Double black Bed",
        price: "2.1",
        image: "./img/bed.jpeg",
        details: "Sure! Here's a 100-word paragraph on the topic of artificial intelligence Artificial intelligence (AI) has emerged as a transformative force shaping various aspects of our lives. It encompasses the development of intelligent machines that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making. AI is revolutionizing industries, from healthcare and finance to transportation and entertainment. It enables us to automate processes, enhance efficiency, and gain valuable insights from vast amounts of data. Machine learning and deep learning algorithms enable AI systems to continuously improve and adapt through experience. As AI advances, ethical considerations and responsible implementation become crucial to ensure its beneficial and fair integration into society. With ongoing research and innovation, AI holds tremendous potential to positively impact our world.",
      },
      {
        title: "Double black Bed",
        price: "2.2",
        image: "./img/bed.jpeg",
        details: "Sure! Here's a 100-word paragraph on the topic of artificial intelligence Artificial intelligence (AI) has emerged as a transformative force shaping various aspects of our lives. It encompasses the development of intelligent machines that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making. AI is revolutionizing industries, from healthcare and finance to transportation and entertainment. It enables us to automate processes, enhance efficiency, and gain valuable insights from vast amounts of data. Machine learning and deep learning algorithms enable AI systems to continuously improve and adapt through experience. As AI advances, ethical considerations and responsible implementation become crucial to ensure its beneficial and fair integration into society. With ongoing research and innovation, AI holds tremendous potential to positively impact our world.",
      },
      {
        title: "Double black Bed",
        price: "2.3",
        image: "./img/bed.jpeg",
        details: "Sure! Here's a 100-word paragraph on the topic of artificial intelligence Artificial intelligence (AI) has emerged as a transformative force shaping various aspects of our lives. It encompasses the development of intelligent machines that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making. AI is revolutionizing industries, from healthcare and finance to transportation and entertainment. It enables us to automate processes, enhance efficiency, and gain valuable insights from vast amounts of data. Machine learning and deep learning algorithms enable AI systems to continuously improve and adapt through experience. As AI advances, ethical considerations and responsible implementation become crucial to ensure its beneficial and fair integration into society. With ongoing research and innovation, AI holds tremendous potential to positively impact our world.",
      },
      {
        title: "Double black Bed",
        price: "2.4",
        image: "./img/bed.jpeg",
        details: "Sure! Here's a 100-word paragraph on the topic of artificial intelligence Artificial intelligence (AI) has emerged as a transformative force shaping various aspects of our lives. It encompasses the development of intelligent machines that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making. AI is revolutionizing industries, from healthcare and finance to transportation and entertainment. It enables us to automate processes, enhance efficiency, and gain valuable insights from vast amounts of data. Machine learning and deep learning algorithms enable AI systems to continuously improve and adapt through experience. As AI advances, ethical considerations and responsible implementation become crucial to ensure its beneficial and fair integration into society. With ongoing research and innovation, AI holds tremendous potential to positively impact our world.",
      },
      {
        title: "Double black Bed",
        price: "2.5",
        image: "./img/bed.jpeg",
        details: "Sure! Here's a 100-word paragraph on the topic of artificial intelligence Artificial intelligence (AI) has emerged as a transformative force shaping various aspects of our lives. It encompasses the development of intelligent machines that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making. AI is revolutionizing industries, from healthcare and finance to transportation and entertainment. It enables us to automate processes, enhance efficiency, and gain valuable insights from vast amounts of data. Machine learning and deep learning algorithms enable AI systems to continuously improve and adapt through experience. As AI advances, ethical considerations and responsible implementation become crucial to ensure its beneficial and fair integration into society. With ongoing research and innovation, AI holds tremendous potential to positively impact our world.",
      },
      {
        title: "Double black Bed",
        price: "2.6",
        image: "./img/bed.jpeg",
        details: "Sure! Here's a 100-word paragraph on the topic of artificial intelligence Artificial intelligence (AI) has emerged as a transformative force shaping various aspects of our lives. It encompasses the development of intelligent machines that can perform tasks requiring human intelligence, such as problem-solving, learning, and decision-making. AI is revolutionizing industries, from healthcare and finance to transportation and entertainment. It enables us to automate processes, enhance efficiency, and gain valuable insights from vast amounts of data. Machine learning and deep learning algorithms enable AI systems to continuously improve and adapt through experience. As AI advances, ethical considerations and responsible implementation become crucial to ensure its beneficial and fair integration into society. With ongoing research and innovation, AI holds tremendous potential to positively impact our world.",
      },
     
    ],
  },
  {
    name: "Fantasy",
    books: [
      {
        title: "Double black Bed",
        price: "3",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
     
    ],
  },
  {
    name: "Comedy",
    books: [
      {
        title: "Double black Bed",
        price: "4",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
     
    ],
  },
  {
    name: "SelfHelp",
    books: [
      {
        title: "Double black Bed",
        price: "5",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
     
    ],
  },
  {
    name: "Action-and-Adventure",
    books: [
      {
        title: "Double black Bed",
        price: "6",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      
    ],
  },
  {
    name: "GraphicNovel",
    books: [
      {
        title: "Double black Bed",
        price: "7",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      
    ],
  },
  {
    name: "Detective-and-Mystery",
    books: [
      {
        title: "Double black Bed",
        price: "8",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
     
    ],
  },
  {
    name: "Romance",
    books: [
      {
        title: "Double black Bed",
        price: "9",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      
    ],
  },
  {
    name: "Biographies-and-Autobiographies",
    books: [
      {
        title: "Double black Bed",
        price: "10",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      
    ],
  },
  {
    name: "Cookbooks",
    books: [
      {
        title: "Double black Bed",
        price: "11",
        image: "./img/bed.jpeg",
        details: "This is the Double black Bed.",
      },
      
    ],
  },
  
];

function createBookCard(book) {
  let card = document.createElement("div");
  card.classList.add("card");

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

  for (let category of categories) {
    // Create category container
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");
    categoryContainer.dataset.category = category.name;
    booksContainer.appendChild(categoryContainer);

    // Create category heading
    let categoryHeading = document.createElement("h2");
    categoryHeading.textContent = category.name;
    categoryContainer.appendChild(categoryHeading);

    // Create book grid container
    let bookGrid = document.createElement("div");
    bookGrid.classList.add("book-grid");
    categoryContainer.appendChild(bookGrid);

    // Create cards for books in the category
    for (let book of category.books) {
      let card = createBookCard(book);
      bookGrid.appendChild(card);
    }
  }
}


function filterBooks(value) {
  let buttons = document.querySelectorAll(".category-button");
  buttons.forEach((button) => {
    if (value.toLowerCase() === button.innerText.toLowerCase()) {
      button.classList.toggle("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    let category = element.closest(".category-container").dataset.category;
    if (value === "all" || category === value) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });

  let categoryContainers = document.querySelectorAll(".category-container");
  categoryContainers.forEach((container) => {
    let category = container.dataset.category;
    if (category === value || value === "all") {
      container.classList.add("active");
      container.style.display = "block";
    } else {
      container.classList.remove("active");
      container.style.display = "none";
    }
  });
}


document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "IMG") {
    const card = clickedElement.closest(".card");
    const categoryContainer = card.closest(".category-container");
    const category = categoryContainer.dataset.category;
    const bookIndex = Array.from(categoryContainer.querySelectorAll(".card")).indexOf(card);
    const book = categories.find((category) => category.name === categoryContainer.dataset.category).books[bookIndex];
    displayBookDetails(book);
  }
});

function displayBookDetails(book) {
  let detailsDiv = document.getElementById("bookDetails");
  detailsDiv.innerHTML = "";

  let title = document.createElement("h3");
  title.textContent = book.title;
  detailsDiv.appendChild(title);

  // let category = document.createElement("p");
  // category.textContent = "Category: " + book.category;
  // detailsDiv.appendChild(category);

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

  