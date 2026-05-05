const productList = [
    {id:"01", name:"cua hoàng đế", price:250, image:"../assets/images/cua-hoang-de.jpg"},
    {id:"02", name:"tôm hùm alaska", price:320, image:"../assets/images/tom-hum-alaska.jpg"},
    {id:"03", name:"cá hồi na uy", price:180, image:"../assets/images/ca-hoi-nauy.jpg"},
    {id:"04", name:"hàu sữa", price:90, image:"../assets/images/hau-sua.jpg"},
    {id:"05", name:"mực ống", price:120, image:"../assets/images/muc-ong.jpg"},
    {id:"06", name:"sò điệp", price:200, image:"../assets/images/so-diep.jpg"},
    {id:"07", name:"nghêu xanh", price:150, image:"../assets/images/ngheu-xanh.jpg"},
    {id:"08", name:"bạch tuộc", price:140, image:"../assets/images/bach-tuoc.jpg"},
    {id:"09", name:"cá ngừ đại dương", price:210, image:"../assets/images/ca-ngu-dai-duong.jpg"},
    {id:"10", name:"tôm sú", price:170, image:"../assets/images/tom-su.jpg"}
];

function addProduct(id, name, price, image)
{
    
    const productItem = document.createElement("div");
    productItem.setAttribute("class","col");

    const card = document.createElement("div");
    card.setAttribute("class","card h-100");

    
    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class","card-img-top");

  
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");

    const productName = document.createElement("h5");
    productName.setAttribute("class","card-title");
    productName.appendChild(document.createTextNode(name));

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class","card-text");
    productPrice.appendChild(document.createTextNode(price + " $"));

    const link = document.createElement("a");
    link.setAttribute("href","#");
    link.setAttribute("class","btn btn-primary");
    link.appendChild(document.createTextNode("Xem chi tiết"));

    
    cardBody.appendChild(productName);
    cardBody.appendChild(productPrice);
    cardBody.appendChild(link);

    card.appendChild(img);
    card.appendChild(cardBody);

    productItem.appendChild(card);

    document.getElementById("product-list")
        .appendChild(productItem);
}


productList.forEach(item=>{
    addProduct(item.id,item.name,item.price,item.image);
});