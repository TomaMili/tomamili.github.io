import AppLayout from "./ui/AppLayout";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  fas,
  faFilePdf,
  faDatabase,
  faN,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faGithub,
  faLinkedin,
  faFilePdf,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faDatabase,
  faN
);

function App() {
  return <AppLayout />;
}

export default App;
