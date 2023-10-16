document.addEventListener('DOMContentLoaded',function(){
  let idprotexto=document.getElementById('protexto');
  let idIAtexto=document.getElementById('IAtexto');
  let idBigtexto=document.getElementById('bigdatatexto');
  let idsegurança=document.getElementById('segurançatexto');
  
  let imgid1=document.getElementById('proimg');
  let imgid2=document.getElementById('IAimg');
  let imgid3=document.getElementById('bigdataimg');
  let imgid4=document.getElementById('segurançaimg');


  let idsvg1=localStorage.getItem('svgClicado');
  let contagem1=localStorage.getItem('contador1');
  let contagem2=localStorage.getItem('contador2');
  let contagem3=localStorage.getItem('contador3');
  let contagem4=localStorage.getItem('contador4');
  

let visucont=document.getElementById('contagem');
let visucont2=document.getElementById('contagem2');
let visucont3=document.getElementById('contagem3');
let visucont4=document.getElementById('contagem4');


let d=document.getElementById('dat1');
let d2=document.getElementById('dat3');
let d3=document.getElementById('dat4');
let d4=document.getElementById('dat5');


  if(idsvg1==="olho"){
    
    idprotexto.innerHTML="Programação é a arte e a ciência de criar instruções que podem ser executadas por um computador ou outro dispositivo eletrônico.<br>Programação envolve o uso de uma ou mais linguagens de programação, que são sistemas formais de símbolos e regras que permitem expressar algoritmos, que são sequências finitas e bem definidas de passos para resolver um problema ou realizar uma tarefa.Programação pode ser usada para diversos fins, como desenvolver aplicativos, jogos, sites, sistemas operacionais, inteligência artificial, robótica, etc.Programação também pode ser uma forma de expressão criativa, arte, diversão e aprendizado.Programação requer lógica, raciocínio, criatividade e atenção aos detalhes.Programação pode ser feita individualmente ou em equipe, e pode seguir diferentes paradigmas, como imperativo, declarativo, funcional, orientado a objetos, etc.Programação é uma habilidade cada vez mais importante e demandada no mundo atual.";
  imgid1.src="Imagens/programação pagina2.png";
  visucont.innerHTML=contagem1;
  d4.innerHTML=localStorage.getItem('data1');
  document.getElementById('cp').innerHTML="#codenewbie";
document.getElementById('IAimg').style.display='none';  
document.getElementById('bigdataimg').style.display='none';  
document.getElementById('segurançaimg').style.display='none';  
document.querySelector('.imagens').style.display='none';
document.querySelector('.visualização1').innerHTML='Visualizações:';
}
  
  else if(idsvg1==="olho2"){
  
  idIAtexto.innerHTML="Inteligência artificial é um campo da ciência da computação que se dedica ao estudo e ao desenvolvimento de sistemas e algoritmos capazes de reproduzir o comportamento e o pensamento humano na tomada de decisão e execução de tarefas. Essas tarefas incluem aprendizado, raciocínio, percepção, compreensão e geração de linguagem natural, reconhecimento de voz e imagem, tomada de decisão e resolução de problemas complexos.<br>A inteligência artificial funciona por meio da coleta e da análise de um grande volume de dados, seguido da identificação de padrões nesse conjunto de informações. Com esse processo, que geralmente se dá mediante a utilização de algoritmos pré-programados, o software consegue tomar decisões e realizar tarefas de maneira autônoma. Existem diferentes métodos e técnicas para implementar a inteligência artificial, como o machine learning e o deep learning.<br>A inteligência artificial tem sido aplicada em diversas áreas e situações, como assistentes virtuais, veículos autônomos, análise de dados, medicina, finanças.";
  imgid2.src="Imagens/IA pagina 2.jpg"; 
  visucont2.innerHTML=contagem2;
  d3.innerHTML=localStorage.getItem('data2');
  document.getElementById('ci').innerHTML="#maquina";
  document.getElementById('proimg').style.display='none';  
  document.getElementById('bigdataimg').style.display='none';  
  document.getElementById('segurançaimg').style.display='none'; 
  document.querySelector('.imagens').style.display='none';
  document.querySelector('.visualização2').innerHTML='Visualizações:';

}
  
else if (idsvg1==="olho3"){
  idBigtexto.innerHTML="Big data é um termo que se refere ao conjunto de dados que são muito grandes, complexos ou rápidos para serem processados por métodos tradicionais.<br>Big data pode ser usado para extrair informações valiosas, como padrões, tendências, preferências e comportamentos, que podem ajudar na tomada de decisões estratégicas e na resolução de problemas.<br>Big data pode ser aplicado em diversas áreas e setores, como negócios, saúde, educação, segurança, entretenimento e muito mais.<br>Big data é uma área em constante evolução e que oferece muitas oportunidades para quem sabe aproveitá-la. Para isso, é preciso contar com tecnologias adequadas para armazenar, processar e analisar os dados, como plataformas em nuvem, bancos de dados distribuídos, sistemas paralelos e algoritmos inteligentes.<br>Além disso, é preciso ter profissionais qualificados para lidar com o big data.";
  imgid3.src="Imagens/Big Data pagina 2.jpg";
  visucont3.innerHTML=contagem3;
  d2.innerHTML=localStorage.getItem('data3');
  document.getElementById('cb').innerHTML="#ciênciadedados";
  document.getElementById('IAimg').style.display='none';  
  document.getElementById('proimg').style.display='none';  
  document.getElementById('segurançaimg').style.display='none'; 
  document.querySelector('.imagens').style.display='none';
  document.querySelector('.visualização3').innerHTML='Visualizações:';

}
  
 else if(idsvg1==="olho4"){
  idsegurança.innerHTML=" <strong>Importância da Segurança da Informação</strong><br><br>"+

  "A segurança da informação é essencial para proteger a privacidade e a propriedade intelectual das pessoas e das organizações. Com o aumento da digitalização, mais dados estão sendo armazenados online, tornando a segurança da informação mais importante do que nunca.<br><br>"+
  
  " <strong> Princípios da Segurança da Informação </strong><br><br>"+
  
  "Os princípios fundamentais da segurança da informação incluem confidencialidade, integridade e disponibilidade, muitas vezes referidos como o “Triângulo CIA”. A confidencialidade garante que as informações sejam acessíveis apenas por pessoas autorizadas, a integridade garante que as informações sejam precisas e completas, e a disponibilidade garante que as informações estejam sempre acessíveis quando necessário.<br><br>"+
  
  " <strong>Ameaças à Segurança da Informação</strong><br><br>"+
  
  "As ameaças à segurança da informação podem vir de várias fontes, incluindo ataques cibernéticos, desastres naturais e erros humanos. Os ataques cibernéticos, como phishing, malware e ransomware, são especialmente prevalentes.<br><br>"+
  
  "<strong> Medidas de Segurança da Informação </strong><br><br>"+
  
  "Existem várias medidas que podem ser tomadas para melhorar a segurança da informação. Isso inclui o uso de firewalls e software antivírus, a implementação de autenticação de dois fatores, a realização regular de backups de dados e a educação dos funcionários sobre as melhores práticas de segurança.<br><br>"+
  
  "<strong> O Futuro da Segurança da Informação </strong><br><br>"+
  
  "À medida que a tecnologia continua a evoluir, também o fazem as ameaças à segurança da informação. Portanto, é crucial estar sempre atualizado sobre as últimas tendências e desenvolvimentos em segurança da informação.";
  imgid4.src="Imagens/segurança da informação pagina 2.jpg";
  visucont4.innerHTML=contagem4;
  d.innerHTML=localStorage.getItem('data4');
  document.getElementById('cs').innerHTML="#cibersegurança";
  document.getElementById('IAimg').style.display='none';  
  document.getElementById('bigdataimg').style.display='none';  
  document.getElementById('proimg').style.display='none'; 
  document.querySelector('.imagens').style.display='none';
  document.querySelector('.visualização4').innerHTML='Visualizações:';

};


});

document.addEventListener('DOMContentLoaded',function(){
let menu=document.querySelector('.menu');

menu.addEventListener('click',function voltar(){

window.location.href="http://127.0.0.1:5501/blog.html";

});

});




  
 



document.addEventListener('DOMContentLoaded',function(){
  let idprotexto=document.querySelector('.textoMenu');
  let idIAtexto=document.querySelector('.textoMenu2');
  let idBigtexto=document.querySelector('.textoMenu3');
  let idsegurança=document.querySelector('.textoMenu4');
  
  let imgid1=document.querySelector('.imagem1');
  let imgid2=document.querySelector('.imagem2');
  let imgid3=document.querySelector('.imagem3');
  let imgid4=document.querySelector('.imagem4');


  let idsvg1=localStorage.getItem('menu');
  let contagem1=localStorage.getItem('contador1');
  let contagem2=localStorage.getItem('contador2');
  let contagem3=localStorage.getItem('contador3');
  let contagem4=localStorage.getItem('contador4');
  

let visucont=document.querySelector('.visu2');



let d=document.getElementById('dat2');

  if(idsvg1==="menu1"){
  idprotexto.innerHTML="Programação é a arte de criar programas de computador que realizam tarefas específicas.Para isso, é preciso usar linguagens de programação, que são formas de se comunicar com as máquinas.<br> A programação é essencial para o desenvolvimento de tecnologias que facilitam a vida das pessoas e transformam o mundo digital.";
  imgid1.src="Imagens/card1.webp";
  visucont.innerHTML=contagem1;
  d.innerHTML=localStorage.getItem('data1');
  document.querySelector('.caractere1').innerHTML="#codenewbie";
document.querySelector('.caractere1').style.color='blue';
  document.querySelector('.categoria1').innerHTML="Programação";  
  document.querySelector('.categoria1').style.color='blue';  
document.getElementById('conteudo').style.display='none';
document.querySelector('.vi').innerHTML='Visualizações:';
}
  
  else if(idsvg1==="menu2"){
  
  idIAtexto.innerHTML="Inteligência artificial é a capacidade de criar dispositivos e programas que simulam o comportamento e o raciocínio humano. Para isso, eles usam grandes volumes de dados e algoritmos que buscam padrões e soluções. A inteligência artificial pode ser aplicada em diversas áreas, como saúde, educação, segurança e entretenimento.";
  imgid2.src="Imagens/card2.jpg"; 
  visucont.innerHTML=contagem2;
  d.innerHTML=localStorage.getItem('data2');
  document.querySelector('.caractere2').innerHTML="#maquina";
document.querySelector('.caractere2').style.color='blue';
  document.querySelector('.categoria2').innerHTML="Inteligência Artificial";  
  document.querySelector('.categoria2').style.color='blue';  
  document.getElementById('conteudo').style.display='none';
  document.querySelector('.vi').innerHTML='Visualizações:';

}
  
else if (idsvg1==="menu3"){
  idBigtexto.innerHTML="Big data é uma tecnologia que permite coletar, armazenar e analisar grandes volumes de dados de diferentes fontes e formatos, com alta velocidade e variedade. O objetivo do big data é extrair valor e insights desses dados, que podem ser usados para apoiar a tomada de decisões, a inovação, a eficiência e a competitividade nos negócios.";
  imgid3.src="Imagens/card3.jpg";
  visucont.innerHTML=contagem3;
  d.innerHTML=localStorage.getItem('data3');
  document.querySelector('.caractere3').innerHTML="#ciênciadedados";
  document.querySelector('.caractere3').style.color='blue';  
  document.querySelector('.categoria3').innerHTML="Big Data";  
  document.querySelector('.categoria3').style.color='blue';  
  document.getElementById('conteudo').style.display='none';
  document.querySelector('.vi').innerHTML='Visualizações:';

}
  
 else if(idsvg1==="menu4"){
  idsegurança.innerHTML="Segurança da informação é um conjunto de ações e estratégias para proteger dados e informações sigilosas de possíveis violações ou ataques. A segurança da informação visa garantir a confidencialidade, a disponibilidade, a autenticidade, a integridade e a legalidade dos dados, tanto em ambientes corporativos quanto pessoais.";
  imgid4.src="Imagens/card4.jpg";
  visucont.innerHTML=contagem4;
  d.innerHTML=localStorage.getItem('data4');
  document.querySelector('.caractere4').innerHTML="#cibersegurança";
  document.querySelector('.caractere4').style.color='blue';  
  document.querySelector('.categoria4').innerHTML="Segurança da Informação";  
  document.querySelector('.categoria4').style.color='blue';  
  document.getElementById('conteudo').style.display='none';
  document.querySelector('.vi').innerHTML='Visualizações:';

};


});