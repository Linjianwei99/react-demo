import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";
import { HashRouter, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

// 移动端列表弹性打开
export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <HashRouter>
          <Route path={["/:id", "/"]} component={Store} />
        </HashRouter>
      </AnimateSharedLayout>
    </div>
  );
}
