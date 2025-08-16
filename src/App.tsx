import React from 'react';
import PersonalDetailsForm from './components/PersonalDetailsForm';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Detalles Personales</h1>
      <fieldset>
        <legend>Formulario de Detalles Personales</legend>
        <PersonalDetailsForm />
      </fieldset>
    </div>
  );
};

export default App;