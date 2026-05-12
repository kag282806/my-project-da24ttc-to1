const productDatabase = [
{
id:1,
name:"Cua Hoàng Đế",
price:5000,
img:"../assets/images/cua-hoang-de.jpg",
desc:"Cua hoàng đế là một trong những loại hải sản cao cấp nổi tiếng với phần thịt chắc, ngọt và giàu dinh dưỡng. Sinh sống tại vùng biển lạnh nên chất lượng thịt luôn đạt độ tươi ngon cao. Khi chế biến, cua thường được hấp hoặc nướng bơ tỏi nhằm giữ trọn hương vị tự nhiên. Món ăn này không chỉ ngon mà còn mang giá trị dinh dưỡng cao với lượng protein và khoáng chất dồi dào. Cua hoàng đế thường xuất hiện trong các bữa tiệc sang trọng và là lựa chọn hàng đầu của người yêu hải sản."
},
{
id:2,
name:"Tôm Hùm Alaska",
price:320,
img:"../assets/images/tom-hum-alaska.jpg",
desc:"Tôm hùm Alaska nổi tiếng với phần thịt trắng chắc và vị ngọt đặc trưng. Được đánh bắt từ vùng biển lạnh Bắc Mỹ, tôm giữ được độ tươi và giá trị dinh dưỡng cao. Các món phổ biến gồm hấp, nướng phô mai hoặc sốt bơ tỏi. Đây là món ăn cao cấp thường xuất hiện trong các nhà hàng sang trọng và các dịp đặc biệt."
},
{
id:3,
name:"Cá Hồi Na Uy",
price:180,
img:"../assets/images/ca-hoi-nauy.jpg",
desc:"Cá hồi Na Uy có màu cam tươi đẹp và lớp mỡ xen kẽ hoàn hảo giúp thịt mềm béo nhưng không ngấy. Cá thường được dùng làm sashimi, sushi hoặc áp chảo. Hàm lượng omega-3 cao giúp hỗ trợ tim mạch và tăng cường sức khỏe."
},
{
id:4,
name:"Hàu Sữa",
price:90,
img:"../assets/images/hau-sua.jpg",
desc:"Hàu sữa nổi tiếng với phần thịt béo mềm và hương vị biển tự nhiên. Hàu có thể ăn sống, nướng mỡ hành hoặc nấu cháo. Đây là món ăn bổ dưỡng chứa nhiều kẽm và khoáng chất tốt cho cơ thể."
},
{
id:5,
name:"Mực Ống",
price:120,
img:"../assets/images/muc-ong.jpg",
desc:"Mực ống tươi có độ giòn dai đặc trưng và vị ngọt thanh. Mực thường được nướng, chiên giòn hoặc xào sa tế. Đây là món hải sản quen thuộc và được yêu thích trong các buổi tụ họp."
},
{
id:6,
name:"Sò Điệp",
price:200,
img:"../assets/images/so-diep.jpg",
desc:"Sò điệp có phần thịt trắng mềm, vị ngọt thanh và thường được chế biến nướng phô mai hoặc áp chảo. Món ăn mang phong cách ẩm thực cao cấp và rất được ưa chuộng."
},
{
id:7,
name:"Nghêu Xanh",
price:150,
img:"../assets/images/ngheu-xanh.jpg",
desc:"Nghêu xanh mang hương vị thanh mát và giàu dinh dưỡng. Nghêu thường được hấp sả, nấu canh hoặc xào bơ tỏi. Đây là món ăn đơn giản nhưng cực kỳ hấp dẫn."
},
{
id:8,
name:"Bạch Tuộc",
price:140,
img:"../assets/images/bach-tuoc.jpg",
desc:"Bạch tuộc có độ giòn dai đặc trưng và thích hợp cho các món nướng hoặc xào cay. Hương vị đậm đà giúp món ăn luôn được yêu thích trong các bữa tiệc hải sản."
},
{
id:9,
name:"Cá Ngừ Đại Dương",
price:210,
img:"../assets/images/ca-ngu-dai-duong.jpg",
desc:"Cá ngừ đại dương có phần thịt đỏ tươi giàu omega-3 và protein. Cá thường dùng làm sashimi hoặc steak cao cấp, mang lại trải nghiệm ẩm thực hiện đại."
},
{
id:10,
name:"Tôm Sú",
price:170,
img:"../assets/images/tom-su.jpg",
desc:"Tôm sú có kích thước lớn, thịt chắc và vị ngọt tự nhiên. Tôm thường được hấp, nướng hoặc rang me. Đây là lựa chọn phổ biến cho các bữa tiệc gia đình."
}
];

function addProduct(id,name,price,image,hyperLink)
{
    const productItem=document.createElement("div");
    productItem.setAttribute("class","col-md-4 mb-4");

    const img=document.createElement("img");
    img.setAttribute("src",image);
    img.setAttribute("class","img-fluid");

    const nameTag=document.createElement("p");
    nameTag.innerHTML=name;

    const priceTag=document.createElement("p");
    priceTag.innerHTML=price+" VND";

    const link=document.createElement("a");
    link.innerHTML="Xem chi tiết";
    link.setAttribute("href",hyperLink+"?id="+id);
    link.setAttribute("class","btn btn-outline-info btn-sm");

    productItem.appendChild(img);
    productItem.appendChild(nameTag);
    productItem.appendChild(priceTag);
    productItem.appendChild(link);

    document.getElementById("product-list").appendChild(productItem);
}

if(document.getElementById("product-list"))
{
    productDatabase.forEach(item=>{
        addProduct(item.id,item.name,item.price,item.img,"detail.html");
    });
}

const urlParams=new URLSearchParams(window.location.search);
const productId=urlParams.get("id");

const product=productDatabase.find(p=>p.id===Number(productId));

if(product && document.getElementById("p-name"))
{
    document.getElementById("p-image").src=product.img;
    document.getElementById("p-name").innerHTML=product.name;
    document.getElementById("p-price").innerHTML=product.price+" VND";
    document.getElementById("p-description").innerHTML=product.desc;
}