import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo.es6';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
``