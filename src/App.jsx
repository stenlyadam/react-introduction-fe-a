//Component adalah function yg return JSX
//JSX hanya boleh memiliki 1 parent element
import HelloWorld from "./HelloWorld";

const App = () => {
  let hello = "Hello World";
  return (
    <>
      <div className="text-[50px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld text="This is a child component 1" />
      <HelloWorld text="This is a child component 2" />
      <HelloWorld text="This is a child component 3" />
    </>
  );
};

export default App;
