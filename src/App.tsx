import { useState, useEffect } from "react";

import { Loading } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [flag, setFlag] = useState<string>("");

  // function handleTypeWriter(array: any[]) {
  //   setFlag("");
  //   for (let i = 0; i < array.length; i++) {
  //     setTimeout(() => {
  //       setFlag((prevFlag) => prevFlag + array[i]);
  //     }, i * 500);
  //   }
  // }

  // function handleTypeWriter(array: any[]) {
  //   setFlag("");
  //   let i = 0;
  //   const interval = 500; // milliseconds

  //   function processNext() {
  //     console.log(array[i]);
  //     if (i < array.length - 1) {
  //       setFlag((prevFlag) => prevFlag + array[i]);
  //       setTimeout(processNext, interval);
  //       i++;
  //     }
  //   }

  //   // Start processing
  //   processNext();
  // }

  function handleTypeWriter(array: any[]) {
    setFlag(""); // Clear the flag

    function processNext(i: number) {
      if (i < array.length) {
        // if (i === array.length - 1) {
        //   setIsLoading(false); // Set loading to false
        // }
        setFlag((prevFlag) => prevFlag + array[i]); // Update the state
        setTimeout(() => processNext(i + 1), 500); // Call recursively with the next index
      } else {
        setIsLoading(false); // Set loading to false when finished
      }
    }

    // Start processing from index 0
    processNext(0);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6d7573"
    )
      .then((response) => response.text())
      .then((responseText) => {
        // console.log(responseText); // Output: The response body as a string
        handleTypeWriter(responseText.split(""));
        // handleTypeWriter(["d", "e", "f"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="">
      <h1 className="text-center mt-2 text-3xl font-semibold tracking-wide">
        Challenge Flag
      </h1>
      {/* {isLoading && <div className="mx-auto">{loading(isLoading)}</div>} */}
      {isLoading && <Loading loading={isLoading} />}
      <div
        className="text-center py-4 text-2xl"
        style={{ fontFamily: '"Special Elite", system-ui' }}
      >
        {flag}
      </div>
    </div>
  );
}

export default App;

// // Experiments and learning the concepts to solve the challenge

// // const rampChar = document.getElementsByClassName("ramp char")
// // let array = []
// // for (let i = 0; i < rampChar.length; i++) {
// // array.push(rampChar[i].getAttribute("value"))
// // }
// // console.log(array)
// // const string = array.join('')
// // console.log(string)

// // const ramp = document.getElementsByClassName("ramp")

// // const exactMatches = [];
// // for (let i = 0; i < elements.length; i++) {
// // const classNames = elements[i].className.split(' ');
// // (classNames.length === 1 && classNames[0] === 'ramp') {
// // exactMatches.push(elements[i]);
// // }
// // }
// // console.log(exactMatches);

// // let array = []
// // for (let i = 0; i < exactMatches.length; i++) {
// // array.push(exactMatches[i].getAttribute("value"))
// // }
// // console.log(array)
// // const string = array.join('')
// // console.log(string)

// //  Original working code pre refactor

// const html = document.documentElement;

// const matches = [];
// const ramp = document.getElementsByClassName("ramp");

// for (let i = 0; i < ramp.length; i++) {
//   const node1 = ramp[i];
//   if (node1.tagName === "CODE") {
//     // console.log("yes");
//     // console.log(node1)
//     for (let i = 0; i < node1.childNodes.length; i++) {
//       const node2 = node1.childNodes[i];
//       if (node2.tagName === "DIV") {
//         // console.log("yes");
//         // console.log(node2);
//         for (let i = 0; i < node2.childNodes.length; i++) {
//           const node3 = node2.childNodes[i];
//           if (node3.tagName === "SPAN") {
//             // console.log("yes");
//             // console.log(node3);
//             for (let i = 0; i < node3.childNodes.length; i++) {
//               const node4 = node3.childNodes[i];
//               if (node4.tagName === "I") {
//                 console.log("yes");
//                 // console.log(node4);
//                 // matches.push(node4);
//                 matches.push(node4.getAttribute("value"));
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// console.log(matches.join(""));

// //  Refactored code

// const matches2 = [];
// const rampElements = document.querySelectorAll(".ramp");

// for (const ramp of rampElements) {
//   if (ramp.tagName === "CODE") {
//     for (const div of ramp.querySelectorAll("div")) {
//       for (const span of div.querySelectorAll("span")) {
//         for (const italic of span.querySelectorAll("i")) {
//           matches2.push(italic.getAttribute("value"));
//         }
//       }
//     }
//   }
// }

// console.log(matches2.join(""));

// //  Discarded useless code

// //  const node3 = node2[0].childNodes;
// //  console.log(node3);

// //  if (node1.tagName === "CODE") {
// //      const node2 = node1.childNodes;
// //      if (node2.length === 1 && node2[0].tagName === "DIV") {
// //          const node3 = node2[0].childNodes;
// //          if (node3.length === 1 && node3[0].tagName === "SPAN") {
// //              const node4 = node3[0].childNodes;
// //              console.log(node4);
// //          }
// //      }
// //  }

// //  if (node4.length === 1 && node4[0] === "I") {
// //      console.log("yes");
// //  }
