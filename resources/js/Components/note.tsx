import { useForm, usePage } from "@inertiajs/react";
import { Select } from "antd";
import list from "./moduledata.json";
import { useState, useEffect } from "react";
import {toast } from 'react-toastify';


const { Option } = Select;
const Note = () => {
    let moduleOptions;

    const { auth } = usePage().props;
    const [semesname, setSemesname] = useState("");
    const [modulname, setModulname] = useState("");
    const { data, setData, post, processing } = useForm({
        semester: semesname,
        module: modulname
    });
    const [selectedSemester, setSelectedSemester] = useState(0);

    const semester = list.find((item) => item.id === "1");
    if (selectedSemester === 0) {
        moduleOptions = semester.semestre[selectedSemester].module.map(
            (module) => ({
                value: module.id,
                label: module.name,
            })
        );
    } else {
        moduleOptions = semester.semestre[selectedSemester - 1].module.map(
            (module) => ({
                value: module.id,
                label: module.name,
            })
        );
    }

    useEffect(() => {
        setData((currentData) => ({
            ...currentData,
            semester: semesname,
            module: modulname,
        }));
    }, [semesname, modulname]);

    const handelsemester = (e) => {
        setSelectedSemester(e.target.value);
        setSemesname(semester.semestre[e.target.value - 1].name);
    };

    const handelmodule = (e) => {
        setModulname(moduleOptions[e.target.value - 1].label);
    };
    function submit(e) {
        e.preventDefault();
        console.log(data)
        post("/correction_de_note");
        try{
            toast.success('submited');
        }catch{
            toast.error('failed');
        }
    }
    return (
        <div className="grid ">
            <form onSubmit={submit}>
                <h1 className="text-center text-white text-lg font-semibold">Sélect le semestre</h1>
                <select
                    value={selectedSemester}
                    onChange={handelsemester}
                    className="w-auto rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black"
                >
                    <option value="">Select a semester</option>
                    {semester.semestre.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                            {semester.name}
                        </option>
                    ))}
                </select>
                <h1 className="text-center text-white text-lg font-semibold">Choisir module</h1>
                <select
                    onChange={handelmodule}
                    className="w-auto rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black"
                >
                    <option value="">Select a module</option>
                    {moduleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <button
                    className=" bg-yellow-50 rounded w-28 p-2 shadow"
                    disabled={processing}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Note;
