import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estas son las opiniones: </h1>
        <Testimonio 
          nombre='Ricardo'
          pais='Chile'
          imagen='1'
          titulo='Ingenieria Informatica'
          empresa='Google'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ex nunc, ut dictum magna fringilla vel. Phasellus sollicitudin sollicitudin dictum. Curabitur faucibus magna magna, sit amet malesuada enim tincidunt non. Praesent tortor urna, pharetra a tincidunt eu, convallis vel nisl. Curabitur vel libero scelerisque, lacinia urna sit amet, sollicitudin sapien. Cras fringilla convallis diam non pretium. Etiam sed mattis risus, ac aliquam est. Nam viverra neque sed pellentesque consectetur. Duis eget faucibus ante, ac gravida massa.'
        /> 
        <Testimonio 
          nombre='Maria'
          pais='Italia'
          imagen=''
          titulo='Psicologia'
          empresa='UNAB'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ex nunc, ut dictum magna fringilla vel. Phasellus sollicitudin sollicitudin dictum. Curabitur faucibus magna magna, sit amet malesuada enim tincidunt non. Praesent tortor urna, pharetra a tincidunt eu, convallis vel nisl. Curabitur vel libero scelerisque, lacinia urna sit amet, sollicitudin sapien. Cras fringilla convallis diam non pretium. Etiam sed mattis risus, ac aliquam est. Nam viverra neque sed pellentesque consectetur. Duis eget faucibus ante, ac gravida massa.'
        /> 
        <Testimonio 
          nombre='Maria'
          pais='Italia'
          imagen='2'
          titulo='Psicologia'
          empresa='UNAB'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ex nunc, ut dictum magna fringilla vel. Phasellus sollicitudin sollicitudin dictum. Curabitur faucibus magna magna, sit amet malesuada enim tincidunt non. Praesent tortor urna, pharetra a tincidunt eu, convallis vel nisl. Curabitur vel libero scelerisque, lacinia urna sit amet, sollicitudin sapien. Cras fringilla convallis diam non pretium. Etiam sed mattis risus, ac aliquam est. Nam viverra neque sed pellentesque consectetur. Duis eget faucibus ante, ac gravida massa.'
        /> 
        <Testimonio 
          nombre='Maria'
          pais='Italia'
          imagen='1'
          titulo='Psicologia'
          empresa='UNAB'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ex nunc, ut dictum magna fringilla vel. Phasellus sollicitudin sollicitudin dictum. Curabitur faucibus magna magna, sit amet malesuada enim tincidunt non. Praesent tortor urna, pharetra a tincidunt eu, convallis vel nisl. Curabitur vel libero scelerisque, lacinia urna sit amet, sollicitudin sapien. Cras fringilla convallis diam non pretium. Etiam sed mattis risus, ac aliquam est. Nam viverra neque sed pellentesque consectetur. Duis eget faucibus ante, ac gravida massa.'
        /> 
        <Testimonio 
          nombre='Maria'
          pais='Italia'
          imagen='1'
          titulo='Psicologia'
          empresa='UNAB'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt ex nunc, ut dictum magna fringilla vel. Phasellus sollicitudin sollicitudin dictum. Curabitur faucibus magna magna, sit amet malesuada enim tincidunt non. Praesent tortor urna, pharetra a tincidunt eu, convallis vel nisl. Curabitur vel libero scelerisque, lacinia urna sit amet, sollicitudin sapien. Cras fringilla convallis diam non pretium. Etiam sed mattis risus, ac aliquam est. Nam viverra neque sed pellentesque consectetur. Duis eget faucibus ante, ac gravida massa.'
        /> 
      </div>
      
    </div>
  );
}

export default App;
