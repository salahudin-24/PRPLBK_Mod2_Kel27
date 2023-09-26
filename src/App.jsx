import React from 'react';
import './App.css';
import ReactJSX from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <div className="Components">
          <CompAndProps bgColor1="#7ff5d7" 
                        bgColor2="#f57f7f"
                        bgColor3="#f57ff3"
                        bgColor4="#f5a47f"/>
      
          <form action="">
            <TextInput border="green" placeholder="Nama" />
            <Button background="black">Kirim</Button>
          </form>
        </div>
      </header>
    </div>
  );
}
export default App;