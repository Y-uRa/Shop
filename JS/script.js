'use strict';

let p=JSON.parse(localStorage.product);
let c=JSON.parse(localStorage.category);

document.addEventListener("DOMContentLoaded", function(){
	
	// получение блока для категорий
	let aside = document.getElementById('categories');

	//формирование списка категорий
	let list = document.createElement("ul");


	for (var i = 0; i < c.length; i++) {
		//создание li
		let li = document.createElement("li");
		// создание ссылки
		let a = document.createElement("a");
		a.href = "#";
		// добавление id категории к ссылке
		a.cat_id = c[i].id;
		// привязка события нажатия на ссылку
		a.addEventListener("click",function(e) {
			//вызов функции формирования списка товаров
			fillProductSection(this.cat_id);
			e.stopPropagation();
		});
		//помещаем название категории в ссылку
		a.innerHTML= c[i].name;
		//добавляем ссылку в элемент списка
		li.appendChild(a); 
		//добавляем элемент в список
		list.appendChild(li);
		
	}
	
	// добавление списка в блок
	aside.appendChild(list);

	fillProductSection();

});

/**
	catId - id категории отображаемых товаров
	        при значении -1 отображаем все товары
*/

function fillProductSection(catId = -1) {
	for (var i = 0; i < p.length; i++) {
		
		if(catId == -1 || p[i].catId == catId){
			console.dir(p[i]);
		}
	}
}


