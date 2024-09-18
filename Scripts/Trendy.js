let data = [];
trendyProducts.innerHTML = "<h2 style=>Loading...</h2>";
const reqq = new XMLHttpRequest();
reqq.open("GET", "https://seif-sync-server.vercel.app/Depi/products");
reqq.send();

reqq.addEventListener("readystatechange", () => {
  if (reqq.readyState === 4 && reqq.status === 201) {
    data = JSON.parse(reqq.response);
    // console.log(data);
    filter("All");
  }
});

function filter(e) {
  f = e;
  let tabs = [
    ...document.querySelectorAll(".filterTab"),
    ...document.querySelectorAll(".filterTabSelected"),
  ];

  tabs.forEach((tab) => {
    if (tab.value === f) {
      tab.classList.add("filterTabSelected");
      tab.classList.remove("filterTab");
    } else {
      tab.classList.add("filterTab");
      tab.classList.remove("filterTabSelected");
    }
  });

  // Clear previous products
  trendyProducts.innerHTML = "";

  data.forEach((item) => {
    if (item.Category === f || f === "All") {
      const sale = document.createElement("p");
      sale.classList.add("sale");
      const trendyLink = document.createElement("a");
      trendyLink.href = `./product.html?id=${item.id}`;
      const card = document.createElement("div");
      card.className = "latestCard";
      const pic = document.createElement("img");
      pic.width = 350;
      pic.height = 200;
      pic.src = item.Pic;
      const over = document.createElement("p");
      over.className = "latestPrice";
      const span1 = document.createElement("span");
      span1.textContent = item.Name;
      const price = document.createElement("span");
      price.className = "price";
      price.textContent = item.Price + "$";
      over.appendChild(span1);
      over.appendChild(price);
      const button = document.createElement("button");
      button.className = "latestButton";
      button.textContent = "Add to Cart";
      button.addEventListener("click", function () {
        AddToCart(item);
        
        // handling the dialog ya youssef :)
        document.getElementById("dialog").style.display = "block";
        setTimeout(() => {
          document.getElementById("dialog").style.display = "none";
        }, 1000);
      });
      trendyLink.appendChild(pic);
      trendyLink.appendChild(over);
      card.appendChild(trendyLink);
      card.appendChild(button);
      sale.textContent = "Sale";

      if (item.Sale === true) {
        card.append(sale);
      }

      trendyProducts.appendChild(card);
    }
  });
}
