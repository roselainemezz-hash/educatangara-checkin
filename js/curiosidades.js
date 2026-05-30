const curiosidades = [

{
  categoria:"⚖️ LEGISLAÇÃO",
  texto:"A formação continuada dos profissionais da educação é incentivada pela legislação educacional brasileira."
},

{
  categoria:"📚 FORMAÇÃO",
  texto:"A formação continuada contribui para a valorização profissional e para o aperfeiçoamento das práticas pedagógicas."
},

{
  categoria:"🏫 REDE MUNICIPAL",
  texto:"As formações internas realizadas em sua unidade escolar também fazem parte da sua trajetória formativa."
},

{
  categoria:"📜 CERTIFICADOS",
  texto:"Os certificados das formações concluídas ficam disponíveis para consulta em seu perfil no EducaTangará."
},

{
  categoria:"⚖️ LEI 163/2012",
  texto:"A Lei Complementar nº 163/2012 organiza a carreira dos profissionais da educação do município de Tangará da Serra."
},

{
  categoria:"🎓 DESENVOLVIMENTO",
  texto:"Toda formação concluída representa uma oportunidade de crescimento pessoal e profissional."
}

];

let indiceAtual = 0;

function trocarCuriosidade(){

  const categoria =
    document.getElementById(
      "categoria"
    );

  const texto =
    document.getElementById(
      "texto"
    );

  categoria.classList.add("fade");
  texto.classList.add("fade");

  setTimeout(()=>{

    indiceAtual =
      Math.floor(
        Math.random() *
        curiosidades.length
      );

    categoria.innerHTML =
      curiosidades[indiceAtual].categoria;

    texto.innerHTML =
      curiosidades[indiceAtual].texto;

    categoria.classList.remove("fade");
    texto.classList.remove("fade");

  },600);

}

trocarCuriosidade();

setInterval(
  trocarCuriosidade,
  15000
);
