import React from "react";
import styles from './App.module.css'
import './App.css'
import {
  Link,
  useLocation
} from "react-router-dom";
import { renderRoutes} from 'react-router-config'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <div>home!</div>,

  },
  {
    path: "/bubblegum",
    render: () => <div>bubblegum!</div>,
   
  },
  {
    path: "/shoelaces",
    render: () => <div>shoelaces!</div>,
 
  }
];

export default function App<Window>(props: Window) {
  let location = useLocation()
  return (
    <div className={styles.fill}>
      <ul className={styles.nav}>
        <li style={{ padding: '10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ padding: '10px' }}>
          <Link to="/bubblegum">Bubblegum</Link>
        </li>
        <li style={{ padding: '10px' }}>
          <Link to="/shoelaces">Shoelaces</Link>
        </li>
      </ul>

      <div className={styles.content}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            {/* <Switch location={location}>
              {
                routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))
              }
            </Switch> */}
            {
              renderRoutes(routes)
            }
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
