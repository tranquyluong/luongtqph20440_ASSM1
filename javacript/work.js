const productWorks = [
    {
        id: 1,
        name: "Food page Designing",
        img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654355822/Rectangle_34_hdbx2p.jpg",
        date: 2022,
        description: "Home Page",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        name: "Shop Authority Pro",
        img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654234838/cld-sample-4.jpg",
        date: 2022,
        description: "Home and Products",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 3,
        name: "Assignment JavaScript",
        img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654234838/cld-sample-3.jpg",
        date: 2022,
        description: "SlideShow Page",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },

];

function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `   <div class="py-4 md:flex ">
                <div class=" mt-4 shadow hover:shadow-xl transition">
                    <a href=""><img class="md:w-[450px] md:h-[170px]" src="${product.img}"></a></div>
                <div class="ml-2 shadow hover:shadow-xl transition">
                    <h3 class="mt-2"><a href="./thongtin.html?id=${product.id}" class="font-bold text-[25px] mt-2">${product.name}</a>
                    </h3>
                    <div class="my-4">
                        <span class="bg-black px-2 text-[#FFFFFF] rounded-2xl">${product.date}</span>
                        <span>|</span>
                        <span class="text-[#8695A4]">${product.description}</span>
                    </div>
                    <p class="text-[16px]">${product.shortDescription}</p>
                </div>
            </div>

            <hr class="text-[#E0E0E0] my-2">`;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productWorks);