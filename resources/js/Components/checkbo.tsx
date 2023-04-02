import { Checkbox } from 'antd';

function MyCheckbox(props) {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Checkbox onChange={onChange}>{props.module}</Checkbox>
    
  );
}

export default MyCheckbox;