const reqq = new XMLHttpRequest();
reqq.open("GET", "https://seif-sync-server.vercel.app/Depi/products");
reqq.send();

const latest = document.getElementById("latest");

reqq.addEventListener("readystatechange", () => {
  if (reqq.readyState === 4 && reqq.status === 201) {
    let data = reqq.response;
    data = JSON.parse(data);
    // console.log(data);

    // topoffersSlider
    let currentIndex = 0;
    setInterval(() => {
      if (currentIndex === topData.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateSlider();
    }, 2000);

    const topData = data.slice(0, 5);

    left.addEventListener("click", () => {
      if (currentIndex === 0) {
        currentIndex = topData.length - 1;
      } else {
        currentIndex--;
      }
      updateSlider();
    });

    right.addEventListener("click", () => {
      if (currentIndex === topData.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      updateSlider();
    });

    function updateSlider() {
      title.textContent = topData[currentIndex].Name;
      bg.style.backgroundImage = `url("${topData[currentIndex].Bg}"), linear-gradient(to bottom, rgba(255, 0, 0, 0), rgb(27, 27, 27))`;
      category.textContent = topData[currentIndex].Category;
      price.textContent = topData[currentIndex].Price + " $";
      overview.textContent = topData[currentIndex].Overview;
    }

    updateSlider();

    // rightExclusiveSalesList

    data.slice(4, 7).map((e) => {
      let rightt = document.getElementById("rightt");
      const card1 = document.createElement("div");
      card1.className = "card";
      const img1 = document.createElement("img");
      img1.src = e.Pic;
      img1.alt = "product";
      img1.style.width = "150px";
      img1.style.height = "150px";
      img1.style.objectFit = "cover";
      img1.style.marginRight = "16px";

      const contentDiv = document.createElement("div");

      const title1 = document.createElement("h3");
      title1.className = "exCardTitle";
      title1.textContent = e.Name;

      const price1 = document.createElement("p");
      price1.className = "price";
      price1.textContent = e.Price + " $";

      const category1 = document.createElement("p");
      category1.style.margin = "4px 0";
      category1.style.fontSize = "14px";
      category1.style.color = "#6e6e6e";
      category1.innerHTML = `Category: <span class="price">${e.Category}</span>`;

      const overview1 = document.createElement("p");
      overview1.className = "cardOverView";
      overview1.textContent = e.Overview;

      contentDiv.appendChild(title1);
      contentDiv.appendChild(price1);
      contentDiv.appendChild(category1);
      contentDiv.appendChild(overview1);

      card1.appendChild(img1);
      card1.appendChild(contentDiv);

      rightt.appendChild(card1);
    });

    // latestOffersSlider
    data.map((e) => {
      const card = document.createElement("div");
      card.className = "latestCard";
      const pic = document.createElement("img");
      pic.width = 300;
      pic.height = 200;
      pic.src = e.Pic;
      const over = document.createElement("p");
      over.className = "latestPrice";
      const span1 = document.createElement("span");
      span1.textContent = e.Name;
      const price = document.createElement("span");
      price.className = "price";
      price.textContent = e.Price + "$";
      over.appendChild(span1);
      over.appendChild(price);
      const button = document.createElement("button");
      button.className = "latestButton";
      button.textContent = "Add to Cart";
      card.appendChild(pic);
      card.appendChild(over);
      card.appendChild(button);
      latest.appendChild(card);
    });
  }
});
