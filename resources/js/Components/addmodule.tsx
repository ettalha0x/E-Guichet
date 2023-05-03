import { useState } from "react";
import list from "./moduledata.json";
import { useForm, usePage } from "@inertiajs/react";
import {toast } from 'react-toastify';

const MyComponent = () => {
    const { auth } = usePage().props;
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [checkedCount, setCheckedCount] = useState(0);
    const maxcheck = 3;
    const [selectedSemester, setSelectedSemester] = useState(1);

    const semester = list.find((item) => item.id === "1");
    const moduleOptions = semester.semestre[selectedSemester - 1].module.map(
        (module) => ({
            value: module.id,
            label: module.name,
        })
        );

        const { data, setData, post, processing } = useForm({
            modules : []
        });
        function handleCheckboxChange(e) {
            const checkboxLabel = e.target.name;
            if (e.target.checked) {
              if (selectedCheckboxes.length < maxcheck) {
                setSelectedCheckboxes([...selectedCheckboxes, checkboxLabel]);
                setData({ ...data, modules: [...selectedCheckboxes, checkboxLabel] });
              } else {
                e.target.checked = false;
              }
            } else {
              setSelectedCheckboxes(
                selectedCheckboxes.filter((label) => label !== checkboxLabel)
              );
              setData({ ...data, modules: selectedCheckboxes.filter((label) => label !== checkboxLabel) });
            }
          }


    function submit(e) {
        e.preventDefault();
        console.log("Selected checkboxes: ", selectedCheckboxes);
        post("/Add_modules");
        try{
            toast.success('submited');
        }catch{
            toast.error('failed')
        }
    }

    return (
        <div className="grid gap-4">
            <form onSubmit={submit} className=" grid gap-4">
                <h1 className=" text-center text-white text-lg font-semibold">Sélect le semestre</h1>
                <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className=" w-52 rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black"
                >
                    {semester.semestre.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                            {semester.name}
                        </option>
                    ))}
                </select>
                <h1 className=" text-white text-center text-lg font-semibold">
                    Sélect les module que vous voulez ajouter
                </h1>
                <div className=" text-center grid grid-cols-3  gap-4">
                    {moduleOptions.map((option) => (
                        <label key={option.value}>
                            <input
                            className=" rounded focus:ring-0"
                                type="checkbox"
                                value={option.value}
                                name={option.label}
                                checked={selectedCheckboxes.includes(
                                    option.label
                                )}
                                onChange={handleCheckboxChange}
                                disabled={
                                    selectedCheckboxes.length >= maxcheck &&
                                    !selectedCheckboxes.includes(option.label)
                                }
                            /> <br />
                            {option.label}
                        </label>
                    ))}
                </div>
                <button
                    className=" bg-[#C5CCFF] rounded w-28 p-2 shadow"
                    disabled={processing}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MyComponent;
