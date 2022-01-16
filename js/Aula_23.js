function logg( valor ) {
   console.log(valor);
}
let tBody = document.querySelector("table tbody");

let tr = document.createElement("tr");

let td1 = document.createElement("td");
td1.textContent = "Minha";
td1.textContent = " Tag " + td1.textContent;
td1.setAttribute("colspan", 1);

let td2 = document.createElement("td");
td2.textContent = "Tag";
td2.setAttribute("colspan", 2);

let texto = document.createTextNode(" --- Meu nó de Texto --- ");
td2.insertBefore(texto, td2.firstChild);

tr.appendChild(td1);
tr.appendChild(td2);
//tBody.appendChild(tr);
tBody.insertBefore(tr, tBody.firstChild);