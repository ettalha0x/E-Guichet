import React from "react";
// import MyCheckbox from "./checkbo";
import { Select } from 'antd';

function Addmodule() {
    function handleChange(value) {
        console.log(`Selected ${value}`);
      }

  return (
    <div className="grid place-items-center gap-2">
        <h1 className=" text-lg underline">select</h1>
      {/* <Select className=" w-32" defaultValue="semestre" onChange={handleChange}>
        <Option value="semestre">semestre</Option>
        <Option value="semestre - 2">semestre -2</Option>
      </Select>
        <h1 className=" text-lg underline">select</h1>
      <MyCheckbox module="module1" /> */}
      <button className=' bg-green-300 rounded-md w-32 h-8' type="submit">submit</button>
    </div>
  );
}

export default Addmodule;
