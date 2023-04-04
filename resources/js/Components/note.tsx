import { Select } from 'antd';

const { Option } = Select;

function Note() {
  function handleChange(value) {
    console.log(`Selected ${value}`);
  }

  return (
    <div className='grid place-items-center gap-2'>
    <h1 className=' underline text-lg'>semestre</h1>
    <Select className=' w-32' defaultValue="semestre" onChange={handleChange}>
      <Option value="semestre">selecte</Option>
      <Option value="semestre - 2">semestre -2</Option>
    </Select>
        <h1 className=' underline text-lg'>module</h1>
    <Select className=' w-32' defaultValue="module1" onChange={handleChange}>
      <Option value="module1">module1</Option>
      <Option value="module2">module2</Option>
      <Option value="module3">module3</Option>
      <Option value="module4">module4</Option>
    </Select>
    <button className=' bg-green-300 rounded-md w-32 h-8' type="submit">submit</button>
    </div>
  );
}
export default Note;
