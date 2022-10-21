import Five from "./Five";

const Cfive = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/pattern-background-desktop.svg")`,
      }}
      className=" bg-order-blue h-screen w-screen flex items-center bg-repeat-x bg-top justify-center"
    >
      <Five />
    </div>
  );
};

export default Cfive;
