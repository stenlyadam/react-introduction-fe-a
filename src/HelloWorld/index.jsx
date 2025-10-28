import HelloMoon from "../HelloMoon";
//Tipe data props adalah Object

const HelloWorld = ({ text }) => {
  return (
    <>
      <div className="text-[25px] bg-red-500 m-10 p-10 font-serif">
        {text}
        <HelloMoon />
      </div>
    </>
  );
};

export default HelloWorld;
