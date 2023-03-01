import JoinGame from './components/Home/components/joinGame/JoinGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Provider } from "react-redux"; 
import store from './store';
import React from 'react';

function App() {
  return (
    <Provider store={store}> 
      <BrowserRouter store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id_game" element={<JoinGame/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
