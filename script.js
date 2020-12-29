const btn = document.getElementById("btn");
const parent = document.getElementById("parent");

const parent = btn.addEventListener("click", deleteChildNodes);

/**
 * 1 способ Очистить корневой элемент
 */
function deleteChildNodes() {
	parent.innerHTML = "";
}
/**
 * 2 способ Удалить каждого ребенка у родителя
 */
function deleteChildNodes1() {
	//Если нет первого дочернего элемента то список пустой
	while (!parent.firstChild) {
		parent.removeChild(node.lastChild);
	}
}

/**
 * 2 способ Удалить каждого ребенка у родителя
 */
function deleteChildNodes2() {
	parent.querySelectorAll("*").forEach((el) => el.remove());
}
