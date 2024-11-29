"use client";
import IframeResizer from "@iframe-resizer/react";
import { useCallback, useEffect, useState } from "react";
export interface HoverableProps {
  data: string;
}

const Iframe = ({ data }: HoverableProps) => {
  const [iFrameHeight, setIFrameHeight] = useState(300);

  const handleIframeMessage = useCallback((e) => {
    console.log("handleIframeMessage", e);
    if (e.data.height) {
      console.log("height", e.data.height);
      setIFrameHeight(e.data.height);
    }
  }, []);

  useEffect(() => {
    const checkIfIframeLoaded = () => {
      const iframe = document.getElementById("responsive-iframe");
      if (iframe) {
        // console.log("iframe", iframe);
        // attach eventlistener? get height?
      } else {
        window.setTimeout(checkIfIframeLoaded, 100);
      }
    };
    checkIfIframeLoaded();
    window.addEventListener("message", handleIframeMessage);
    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, [handleIframeMessage]);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  );
};

export default Iframe;

// // note that min-height:50vw. That makes this site fake-responsive as the height of the content changes as the width changes
// const iframeContent = `
// <!DOCTYPE html>
// <html style="margin:0">
// <title>HTML Tutorial</title>
// <body style="margin:0;width:100%;min-height:50vw;background-color:#82ccdd;color:white">
// <h1 style="margin:0;">This is a heading inside the iframe</h1>
// <p style="margin:0;">This is a paragraph. Note that min-height:50vw. That makes this site fake-responsive as the height of the iframe responds to changes in the width of the browser.</p>
// </body>
// </html>`

//   componentDidMount() {
//     this.checkIfIframeLoaded();
//   }

//   checkIfIframeLoaded = () => {
//     const iframe = document.getElementById('responsive-iframe');
//     const iframeDoc = iframe.contentDocument ||
//           iframe.contentWindow.document;

//     if (iframeDoc.readyState === 'complete' &&
//         iframeDoc.getElementsByTagName('body').length) {
//       this.onElementHeightChange(iframe, this.updateIframeHeight);
//       return;
//     }
//     window.setTimeout(this.checkIfIframeLoaded, 100);
//   }

//   onElementHeightChange = (el, callback) => {
//     let lastHeight = el.contentWindow.document.getElementsByTagName('body')[0].scrollHeight;
//     let newHeight;
//     (function run() {
//       let bodies = el.contentWindow.document.getElementsByTagName('body')
//       if (bodies.length) {
//         newHeight = bodies[0].scrollHeight;
//         console.log(lastHeight, newHeight)
//         if (lastHeight !== newHeight) {
//           callback(newHeight);
//         }
//       }

//       lastHeight = newHeight;
//       el.onElementHeightChangeTimer = setTimeout(run, 750);
//     })();
//   }

//   updateIframeHeight = (newHeight) => {
//     this.setState({ iframeHeight: newHeight });
//   }

//   render() {
//     const { iframeHeight } = this.state;
//     return (
//       <div className="container">
//         <div>
//           Let's embed this iframe below like it's part of our site! No double-scrolling
//         </div>
//         <div
//           className="iframe-container"
//           style={{
//             ...(iframeHeight
//               ? { height: iframeHeight }
//               : {}
//             )
//           }}
//         >
//           <iframe
//             id="responsive-iframe"
//             style={{
//               ...(iframeHeight
//                 ? { height: iframeHeight }
//                 : {}
//               )
//             }}
//             srcdoc={iframeContent}
//           >
//           </iframe>
//         </div>
//         <div>
//           Let's embed this iframe above like it's part of our site! No double-scrolling
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));
