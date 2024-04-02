import "./App.css"
import { Uploader } from "uploader";
import { UploadButton, UploadDropzone } from "react-uploader";

const uploader = Uploader({
  apiKey: "free" // Get production API keys from Bytescale
});

const options = { multi: true };

const App = () => (

  // first

  // <UploadButton uploader={uploader}
  //   options={options}
  //   onComplete={files => console.log(files.map(x => x))}
  // >


  //   {({ onClick }) =>
  //     <button onClick={onClick}>
  //       Upload a file...
  //     </button>
  //   }


  // </UploadButton>


  // second

  <UploadDropzone uploader={uploader}
    options={options}
    onUpdate={files => console.log(files.map(x => x))}
    width="600px"
    height="375px" />

);

export default App;