
var category=[];

category.push(new Category("1", "mobile"));
category.push(new Category("2", "laptob"));
category.push(new Category("3", "pc"));
category.push(new Category("4", "tv"));
category.push(new Category("5", "camera"));


var product=[];

product.push(new Product("Samsung J5",3999,1,1));
product.push(new Product("Samsung J7",4999,2,1));
product.push(new Product("Apple iPhone 6 32GB Space Gray",10999,3,1));
product.push(new Product("Apple iPhone 5s 16GB Space Gray",7777,4,1));
product.push(new Product("Apple iPhone 7 32GB Gold",17999,5,1));
product.push(new Product("Apple iPhone 7 Plus 128GB Gold",25999,6,1));
product.push(new Product("Samsung Galaxy S8 64GB Midnight Black",22999,7,1));
product.push(new Product("Samsung Galaxy A5 2017 Duos SM-A520 Black",11999,8,1));
product.push(new Product("Samsung Galaxy S8 Plus 64GB Maple Gold",26999,9,1));
product.push(new Product("Xiaomi Mi6 6/64GB Black",12499,10,1));


product.push(new Product("Asus VivoBook Max X541SC",9349,11,2));
product.push(new Product("Dell Inspiron 3552",6555,12,2));
product.push(new Product("Apple A1466 MacBook Air 13",27499,13,2));
product.push(new Product("Dell XPS 13 9350",23895,14,2));
product.push(new Product("Lenovo IdeaPad 510-15IKB Gun Metal",1699,15,2));
product.push(new Product("Asus X550VX",27274,16,2));
product.push(new Product("HP 250 G5",6999,17,2));
product.push(new Product("Dell XPS 13 9350",23999,18,2));
product.push(new Product("Dell XPS 15 9560",49999,19,2));
product.push(new Product("Acer Aspire ES1-732-P3T6 ",8415,20,2));


product.push(new Product("Everest Home 4070",30000,21,3));
product.push(new Product("ARTLINE Gaming X39 v14",35000,22,3));
product.push(new Product("Everest Home 4070",15499,23,3));
product.push(new Product("Impression CoolPlay I6317",13499,24,3));
product.push(new Product("ARTLINE Home H31 v01",9499,25,3));
product.push(new Product("ARTLINE Gaming X47 v08",18999,26,3));
product.push(new Product("Dell Inspiron 3264",16800,27,3));
product.push(new Product("Acer Aspire C24-760",23399,28,3));
product.push(new Product("Acer Predator G6-710",77135,29,3));
product.push(new Product("Apple Mac Mini A1347",32699,30,3));


product.push(new Product("Toshiba 49L5660EV",11999,31,4));
product.push(new Product("Sony KDL-32WE613",10999,32,4));
product.push(new Product("Samsung QE49Q7FAMUXUA",69799,33,4));
product.push(new Product("Panasonic Viera TX-32DSR500",8999,34,4));
product.push(new Product("Toshiba 32S1645EV",5199,35,4));
product.push(new Product("Ergo LE32CT3500AK",6899,36,4));
product.push(new Product("LG 32LH590U",9999,37,4));
product.push(new Product("TCL U55C7006",29999,38,4));
product.push(new Product("Samsung UE22H5610AKXUA",67999,39,4));
product.push(new Product("LG 55UH605V",28999,40,4));


product.push(new Product("Canon EOS 1300D EF-S 18-55mm",13999,41,5));
product.push(new Product("Nikon D7100 18-105mm VR Kit",27499,42,5));
product.push(new Product("Nikon D3300 AF-P 18-55mm VR Kit Black",11099,43,5));
product.push(new Product("Canon EOS 700D 18-55mm STM",17899,44,5));
product.push(new Product("Canon EOS 700D 18-55mm DC III",15999,45,5));
product.push(new Product("Sony Alpha 77M2 Body Black ",33999,46,5));
product.push(new Product("Nikon D5300 18-140mm VR Black Kit",22999,47,5));
product.push(new Product("Canon EOS 6D Body",36392,48,5));
product.push(new Product("Nikon D5300 + AF-P 18-55mm Black Kit",15499,49,5));
product.push(new Product("Nikon D7100 Body",22999,50,5));


localStorage.setItem("product", JSON.stringify(product));
localStorage.setItem("category", JSON.stringify(category));










