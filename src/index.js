import "./styles.css";

const calculTabla = () => {
  const n = document.querySelector("#nr").value;
  let rez = "";
  for (let i = 1; i <= 10; i++) {
    rez += `${n} x ${i} = ${n * i}<br>`;
  }
  document.querySelector("#tabla").innerHTML = rez;
};

document.querySelector("#calcul").onclick = calculTabla;
