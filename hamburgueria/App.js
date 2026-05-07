window.alert("🍔 Bem-vindo à Hamburgueria D.E!");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("⚠ Preencha todos os campos!");
  } else {
    alert(`✅ Obrigado pelo contato, ${nome}!`);

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    formulario.reset();
  }
});

const links = document.querySelectorAll(".navegacao a");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "yellow";
    link.style.transition = "0.3s";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "white";
  });
});

const horario = new Date().getHours();

if (horario >= 11 && horario <= 23) {
  console.log("🍔 Hamburgueria aberta!");
} else {
  console.log("❌ Hamburgueria fechada!");
}

const botaoTopo = document.createElement("button");

botaoTopo.innerText = "⬆ Topo";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "10px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.backgroundColor = "#ff9900";
botaoTopo.style.color = "#fff";

document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const hamburgueres = document.querySelectorAll(".item-cardapio");

console.log(`🍔 Temos ${hamburgueres.length} hambúrgueres no cardápio!`);