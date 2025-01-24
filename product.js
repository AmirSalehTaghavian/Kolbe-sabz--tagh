let $ = document;

let historyBackBtn = $.querySelector(".button-back");
let imgDetails = $.querySelector("img-details");
let shoeTitle = $.querySelector("h1");
let shoeDesc = $.querySelector("p");
let shoeImage = $.querySelector("img");
let price = $.querySelector(".price");
let priceoff = $.querySelector('.price-off')

let productsArray = [
  {
    id: 1,
    tagname: "del",
    title: "حلقه",
    price: "500,000ت",
    pricename: "قیمت: ",
    pricenameOff: "قیمت: ",
    img: "./image/p1.png",
    priceoff: "450,000ت  ",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 2,
    tagname: "del",
    title: "ساعت",
    price: "1,500,000ت",
    pricename: "قیمت: ",
    pricenameOff: "قیمت: ",
    img: "image/p2.png",
    priceoff: "1,320,000ت ",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 3,
    tagname: "del",
    title: "خرس تدی سایز 1",
    price: "325,000ت",
    pricename: "قیمت: ",
    pricenameOff: "قیمت: ",
    img: "image/p3.png",
    priceoff: "300,000ت ",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 4,
    tagname: "del",
    title: "دسته گل",
    price: "120,000ت",
    pricename: "قیمت: ",
    pricenameOff: "قیمت: ",
    img: "image/p4.png",
    priceoff: "100,000ت ",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 5,
    tagname: "p",
    title: "خرس تدی سایز 2",
    price: "592,000ت",
    pricename: "قیمت: ",
    img: "image/p5.png",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 6,
    tagname: "p",
    title: "دسته گل",
    price: "150,000ت",
    pricename: "قیمت: ",
    img: "image/p6.png",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 7,
    tagname: "del",
    title: "ساعت",
    price: "1,620,000ت",
    pricename: "قیمت: ",
    pricenameOff: "قیمت: ",
    img: "image/p7.png",
    priceoff: "1,453,000ت ",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
  {
    id: 8,
    tagname: "del",
    title: "حلقه",
    price: "700,000ت",
    pricename: "قیمت: ",
    pricenameOff: "قیمت: ",
    img: "image/p8.png",
    priceoff: "610,000ت ",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere nihil quia blanditiis velit repudiandae sapiente, non voluptatem quaerat, ex nisi neque veritatis pariatur recusandae corporis vel quod ipsa ut.",
  },
];

historyBackBtn.addEventListener("click", () => history.go(-1));

let locationParams = new URLSearchParams(location.search);
let mainProductID = locationParams.get("id");

let mainProductObject = productsArray.find(function (product) {
  return product.id === Number(mainProductID);
});

if (mainProductObject) {
  shoeTitle.innerHTML = mainProductObject.title;
  shoeDesc.innerHTML = mainProductObject.desc;
  price.innerHTML = `<${mainProductObject.tagname}> ${mainProductObject.pricename}${mainProductObject.price}</${mainProductObject.tagname}`;
  priceoff.innerHTML = `<p>${[mainProductObject.pricenameOff]} ${[mainProductObject.priceoff]}</p>`;
  shoeImage.setAttribute("src", mainProductObject.img);
} else {
  location.href = "http://127.0.0.1:5500/product.html?id=4";
}
