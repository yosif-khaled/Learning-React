import React, { useContext } from "react";
import { fNameContext, lNameContext } from "../../App";

const ComponentF = () => {
  const fName = useContext(fNameContext)
  const lName = useContext(lNameContext)
  return (
    <div>
      {fName} - {lName}
    </div>
    // Old Way
    // <div>
    //   <fNameContext.Consumer>
    //     {(fName) => {
    //       return (
    //         <lNameContext.Consumer>
    //           {(lName) => {
    //             return (
    //               <div>
    //                 {fName} - {lName}
    //               </div>
    //             );
    //           }}
    //         </lNameContext.Consumer>
    //       );
    //     }}
    //   </fNameContext.Consumer>
    // </div>
  );
};

export default ComponentF;
