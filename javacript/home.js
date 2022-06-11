const user = {
  name: "luong",
  img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654235294/280506188_1138943049998807_5392473630503021645_n_rtgk2f.jpg",
  description: "I am a young person passionate about website design. With my acquired knowledge as well as creativity, experience and responsibility at work, I hope to be able to contribute in some way to the development of the company.",
};

function showUser(product) {
  if (product.length == 0) return false;
  let result = "";
  result += ` <div class=" space-y-4 order-2 md:order-1">
                <h2 class="font-bold text-3xl">
                    Hi, I am ${product.name},<br>Creative Technologist
                </h2>
                <p>
                    ${product.description}
                </p>

                <span class="bg-[#FF6464] p-4 rounded-full  inline-block"><a href="">Download Resume</a></span>
            </div>
            <div class="justify-end order-1 md:order-2  ">
                <img src="${product.img}"
                    alt="" class="rounded-full w-[243px] h-[243px] md:ml-auto mx-auto md:mr-0">
            </div>`;

  return result;
}

document.getElementById("user").innerHTML = showUser(user);

// object works
const productWorks = [
  {
    id: 1,
    name: "Designing Dashboards",
    img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654352556/Rectangle_30_z5qfxs.jpg",
    date: 2022,
    description: "Home Page",
    shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Shop Authority Pro",
    img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654354318/Rectangle_32_igrsqc.jpg",
    date: 2022,
    description: "Designing Dashboards",
    shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    name: "Designing Dashboards",
    img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654355822/Rectangle_34_hdbx2p.jpg",
    date: 2022,
    description: "Typography",
    shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

];

function showProductWorks(products) {
  if (!Array.isArray(products) || products.length == 0) return false;

  let result = "";
  for (let i = 0; i < 3; i++) {
    const product = products[i];
    result += `<div class="md:flex mb-2  ">
                <div class="mt-2 shadow hover:shadow-xl transition">
                <a href=""><img src="${product.img}"width="480px" height="480px" alt=""></a>
                </div>
                <div class="mx-4 shadow hover:shadow-xl transition">
                    <h3 class="font-bold text-[30px] ">${product.name}</h3>
                    <div class="my-3">
                        <span class=" bg-[#142850] text-[#FFFFFF] rounded-xl px-2 w-[62px] text-[18px] ">${product.date}</span>
                        <span class="text-[#8695A4] pl-2">${product.description}</span>
                    </div>
                    <p class="text-[16px] pb-2">${product.shortDescription}</p>
                </div>
            </div>
            <hr class="text-[#E0E0E0] my-8">`;
  }
  return result;
}

document.getElementById("productWorks").innerHTML = showProductWorks(productWorks);

//object posts

const productPosts = [
  {
    id: 1,
    title: "Making a design system from scratch",
    date: "12 Feb 2021",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    shortDescription: "Design, Pattern",
  },
  {
    id: 2,
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2021",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    shortDescription: "Figma, Icon Design",
  },
];

function showProductPosts(products) {
  if (!Array.isArray(products) || products.length == 0) return false;

  let result = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result += `<div class="bg-[#FFFFFF] space-x-2 mt-2 mb-8 p-3 shadow hover:shadow-xl transition">
                <h2 class="font-bold text-[26px] px-4">${product.title}</h2>
                <div class="mt-4 px-3 ">
                    <span class="text[18px]">${product.date}</span>
                    <span class="px-2">|</span>
                    <span class="text-[18px]">${product.shortDescription}</span>
                </div>
                <p class="text-[16px] pt-4 px-3">${product.description}</p>
            </div>`;
  }
  return result;
}

document.getElementById("productPosts").innerHTML = showProductPosts(productPosts);