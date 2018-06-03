import React, { Component } from 'react';
import SimpleComponent from './SimpleComponent';

const App = () => (
  <section>
    <SimpleComponent title="Primer capítulo del curso de React">
      <p>Mediante las propiedades "prop" definimos cómo se debe mostrar nuestro componente</p>
      <p>El contenido pasa como prop "children"</p>
    </SimpleComponent>
    <SimpleComponent title="Segundo capítulo del curso de React">
      <ul>
        <li>No es necesario que el contenido siga la misma estructura</li>
        <li>
          Hay algunas palabras reservadas en JS, entre ellas, por lo que en JSX, el atributo
          equivalente es
        </li>
      </ul>
    </SimpleComponent>
  </section>
);

export default App;
