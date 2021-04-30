import React from 'react';
// import * as React from "react";
import './App.css';
import { motion,AnimateSharedLayout,AnimatePresence } from "framer-motion"


// function App() {
//   return (
//     <div className="App">
//       <motion.div
//   drag="x"
//   dragConstraints={{ left: -100, right: 100 }}
// />
//     </div>
//   );
// }





// class App extends React.Component {
//   // constructor(props) {
//   //     super(props);
//   // }
//   render() {
//     return (
//       <div>
//         <motion.div animate={{ opacity: 1 ? 1 : 0 }} />
//       </div>
//     )
//   }
// }

export const App = () => {
  return (
    <div className="example-container">

{/* const [selectedId, setSelectedId] = useState(null)
 
      <AnimateSharedLayout type="crossfade">
        {items.map(item => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
        
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedIdentifier}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout> */}
      {/* <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      /> */}

      {/* <motion.div animate={{ scale: 0.5 }} /> */}

      {/* <motion.div drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      /> */}
    </div>
  )
  
  
}

// export default App;
