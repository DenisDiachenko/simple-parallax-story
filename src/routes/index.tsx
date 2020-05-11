import React from "react";

import { Switch, Route, useLocation } from "react-router-dom";

import MainMenu from "../screens/MainMenu";
import Story from "../screens/Story";
import Preview from "../screens/Preview";

import { useTransition, animated } from "react-spring";

const Router = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    config: {
      duration: 400,
    },
    trail: 100,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div
          key={key}
          style={{ ...props, width: "100%", height: "100%" }}
        >
          <Switch location={location}>
            <Route exact path="/" component={MainMenu} />
            <Route path="/story/preview/:story" component={Preview} />
            <Route path="/story/:story/:stage" component={Story} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default Router;
