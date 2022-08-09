const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesEl = (images) =>
  images.map((image) => {
    const imagesItems = document.createElement("li");
    imagesItems.classList.add("item");
    imagesItems.style.listStyle = "none";
    imagesItems.style.display = "flex";
    imagesItems.style.alighItems = "center";

    const imgEl = document.createElement("img");
    imgEl.src = image.url;
    imgEl.setAttribute = `alt: ${image.alt}`;
    imgEl.style.display = "block";
    imgEl.style.marginBottom = "10px";

    imagesItems.append(imgEl);

    return imagesItems;
  });

const imageList = document.querySelector(".gallery");
imageList.append(...imagesEl(images));
