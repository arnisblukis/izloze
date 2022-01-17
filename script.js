const vardi=['Kristaps Celms','Marta Puķe','Leonīds Āpsis','Laura Bērziņa','Markuss Kļava'];
const balvas=['Dators','Telefons','Automašīna','Ceļojums','Planšetdators'];
const naudaKopa=1000000;// izlozes kopējā summa
let uzvaretajuSkaits=5;
let rand= Math.random()*10;
rand= Math.floor(rand);// noapaļo skaitli uz leju
console.log(vardi[rand]);//izvada konsolē nejauši izvēlētus vārdus