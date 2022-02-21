let item = document.querySelector(".item");
let it = item[0].document.querySelector("li");

let content = document.querySelector(".content");
let con = document.querySelector("div");

for (let i = 0; i < it.length; i++) {
    it[i].onclick = function () {
        for (let j = 0; j < it.length; j++) {
            it[j].className = '';
            con[j].style.display = "none";
        }
        this.className = 'active';
        it[i].index = i;
        con[j].style.display = "block";
    }
}