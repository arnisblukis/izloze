const vardi=['Kristaps Celms','Marta Puķe','Leonīds Āpsis','Laura Bērziņa','Markuss Kļava'];
const balvas=['Dators','Telefons','Automašīna','Ceļojums','Planšetdators'];
const naudaKopa=1000000;// izlozes kopējā summa
let uzvaretajuSkaits=5;
let rand= Math.random()*5;
rand= Math.floor(rand);// noapaļo skaitli uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus
for (let i=0; i<uzvaretajuSkaits; i++){
    let rand=Math.random()* vardi.length;
    rand=Math.floor(rand);// noapaļo uz leju


    let uzvaretajs=vardi[rand];// izvada konsolē
    let laimesti=balvas[rand];

    rindas.innerHTML += `
    <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    <td>${laimesti}</td>
    </tr>`
}