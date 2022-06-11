const productWorks = [
    {
        id: 1,
        name: "Food page Designing",
        img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654234838/cld-sample-3.jpg",
        date: 2022,
        description: "Home Page",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        name: "Shop Authority Pro",
        img: "https://res.cloudinary.com/dndyxqosg/image/upload/v1654682801/Rectangle_5_lrgexl.png",
        date: 2022,
        description: "Home and Products",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },

];

//Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products) {
    //Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;
    let result = "";

    //Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    //thì trả về object đấy
    const product = products.find((item) => item.id == id);

    //Trả về kết quả là một chuỗi
    result += `<h1 class="font-bold text-[34px]">${product.name}</h1>
                    <div class="my-4 shadow hover:shadow-xl transition">
                        <span class="rounded-2xl px-2 bg-[#FF7C7C] text-[#FFFFFF]">${product.date}</span> <span
                            class="text[20px] pl-2">${product.description}</span>
                    </div>
                    <p class="text-[16px]">
                      ${product.shortDescription}
                    </p>
                    <a href=""><img src="${product.img}"
                        alt=""></a>
                    `;
    return result;
};

document.getElementById("detail").innerHTML = showProduct(productWorks)