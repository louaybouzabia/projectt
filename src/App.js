import './App.css';
import Form from './Formm';

function App() {
  return (
    <div>
      

        <h1>Objective</h1>
             <h3 className='first'>In this checkpoint, we are going to make our first contact with React.</h3>
             
             <hr/>
             <hr/>

          <h1> Instructions </h1> 
          <h3 className='first'>Let’s start playing around with React.</h3>
          <ol>
            <li>Create a new React project.</li>
            <li>Add bootstrap to your project.</li>
            <li>Try to create a form using bootstrap.</li>
            <li>In case you meet any problems, take a look at these <a href = "https://reactjs.org/docs/getting-started.html">readings</a>  about React..</li>
            <li>Create a layout for the website.</li>
            <li> And Be creative! </li>
          </ol>
           
             
          <h3 className='first'>Before you start with react, you should follow these steps:</h3>
          <ol>
            <li>Install Node JS.</li>
            <li>Install Visual Studio Code.</li>
            <li>Create a folder and access it using the command line.</li>
            <li>Type “ code .” to open the folder in vscode.</li>
            
          </ol>
        <Form></Form>                   
      

    </div>
  
  );
}

export default App;
