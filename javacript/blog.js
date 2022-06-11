const productPosts = [
    {
        id: 1,
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velitofficia  consequat duisenim velitmollit.Exercitation veniam consequat sunt nostrud amet.",
        shortDescription: "Express, Handlebars",
    },
    {
        id: 2,
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velitofficia  consequat duisenim velitmollit.Exercitation veniam consequat sunt nostrud amet.",
        shortDescription: "Express, Handlebars",
    },
    {
        id: 3,
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velitofficia  consequat duisenim velitmollit.Exercitation veniam consequat sunt nostrud amet.",
        shortDescription: "Express, Handlebars",
    },
    {
        id: 4,
        title: "UI Interactions of the week",
        date: "12 Feb 2020",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        shortDescription: "Express, Handlebars",
    },
];

function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += ` <div class="space-y-4 mt-8 shadow hover:shadow-xl transition">

                <h3 ><a href="" class="font-bold text-[30px] ">${product.title}</a></h3>
                <div>
                    <span class="text-[20px]">${product.date}</span>
                    <span class="px-4">|</span>
                    <span class="text-[#8695A4] text-[20px]">${product.shortDescription}</span>
                </div>
                <p class="text-[16px]">${product.description}</p>
            </div>`;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productPosts);

