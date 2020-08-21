import React, { useRef, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.left = x + 'px';
      cursorRef.current.style.top = y + 'px';
    }
    window.addEventListener('mousemove', editCursor);

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div style={{ cursor: 'none' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
      <div className='cursor' ref={cursorRef}></div>
    </Router>
  );
}

export default App;
