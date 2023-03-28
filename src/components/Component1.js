
const Component1 = ({propVal, changeState}) => {


  const onClickChange = () => {
    changeState("New value")
  }
  return (
    <>
      <div>{propVal}</div>
      <button onClick={onClickChange}>Click</button>
    </>
  );
};

export default Component1;
