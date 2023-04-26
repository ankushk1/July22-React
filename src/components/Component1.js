import {useSelector} from 'react-redux';

const Component1 = ({propVal, changeState}) => {


  const globalStateCounter = useSelector((state) => state.counter);
  console.log(globalStateCounter);

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
