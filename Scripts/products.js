let queryString = window.location.search;
queryString = queryString.split("=");
const id = queryString[1];

const reqq = new XMLHttpRequest();
reqq.open("GET", "https://seif-sync-server.vercel.app/Depi/products");
reqq.send();

reqq.addEventListener("readystatechange", () => {
  if (reqq.readyState === 4 && reqq.status === 201) {
    let data = reqq.response;
    data = JSON.parse(data);

    const product = data.find((e) => {
      return e.id == id;
    });
    const head = document.getElementById("head");
    head.textContent = product.Category + " / " + product.Name;

    console.log(product);
  }
});
