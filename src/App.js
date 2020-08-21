import React, { useRef, useEffect, useState } from 'react';
import style from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Loading from './components/loading/Loading';

function App() {
  const appRef = null;
  const cursorRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
      <div className={`${style.App} ${isLoading ? 'loading' : ''} ${isLoaded ? 'loaded' : ''}`} ref={appRef}>
        <Loading page={appRef} setIsLoading={setIsLoading} setIsLoaded={setIsLoaded} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/skill' component={Skill} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
      <div className={style.Cursor} ref={cursorRef}></div>
    </Router>
  );
}

export default App;
