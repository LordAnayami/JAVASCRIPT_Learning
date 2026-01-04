import { useRef } from "react";

import Input from "./components/Input.tsx";
import Form, { type FormHandle } from "./components/Form.tsx";
import Button from "./components/Button.tsx";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;

// import { useRef } from "react";

// import Input from "./components/Input.tsx";

// function App() {
//   const input = useRef<HTMLInputElement>(null);

//   return (
//     <main>
//       <Input label="Test" id="test" ref={input} />
//     </main>
//   );
// }

// export default App;

// import Button from "./components/Button.tsx";
// import Container from "./components/Container.tsx";

// function App() {
//   return (
//     <main>
//       <Container as={Button}>Click me</Container>
//     </main>
//   );
// }

// export default App;

// import Button from "./components/Button.tsx";

// function App() {
//   return (
//     <main>
//       <p>
//         <Button el="button">A Button</Button>
//       </p>
//       <p>
//         <Button el="anchor" href="https://google.com">
//           A Link
//         </Button>
//       </p>
//     </main>
//   );
// }

// export default App;

// import Input from "./components/Input.tsx";

// function App() {
//   return (
//     <main>
//       <Input id="name" label="Your name" type="text" />
//       <Input id="age" label="Your age" type="number" />
//     </main>
//   );
// }

// export default App;
