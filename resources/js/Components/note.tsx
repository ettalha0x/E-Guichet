import { useForm, usePage } from "@inertiajs/react";
import { Select } from "antd";
import list from "./moduledata.json";
import { useState, useEffect } from "react";
import {toast } from 'react-toastify';
import mails from "./email_list.json";



const { Option } = Select;
const Note = ({ t, i18n }) => {
    let moduleOptions;

    const { auth } = usePage().props;
    const [semesname, setSemesname] = useState("");
    const [modulname, setModulname] = useState("");
    const mail = mails.find((item) => item.name === auth.user.fillier);
    const { data, setData, post, processing , reset} = useForm({
        semester: semesname,
        module: modulname,
        receiver1 : mail?.email[0],
        receiver2 : mail?.email[1] || null
    });
    const [selectedSemester, setSelectedSemester] = useState(0);
    const semester = list.find((item) => item.name === auth.user.fillier);
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
        post("/correction_de_note", {
            onSuccess: (response) => {
                reset();
                if (response.props.status === 'success') {
                    toast.success(response.props.message);
                } else {
                    toast.error(response.props.message);
                  }
              },
              onError: (error) => {
                console.log(error);
                toast.error('Error');
              },
            });
    }
    return (
        <div className="grid">
            <form onSubmit={submit} className="grid gap-4">
                <h1 className="text-center text-white text-lg font-semibold">{t('selecte la semestre')}</h1>
                <select
                    value={selectedSemester}
                    onChange={handelsemester}
                    className="w-52 rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black"
                >
                    <option value="">Select a semester</option>
                    {semester.semestre.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                            {semester.name}
                        </option>
                    ))}
                </select>
                <h1 className="text-center text-white text-lg font-semibold">{t('Choisir module')}</h1>
                <select
                    onChange={handelmodule}
                    className="w-52 rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black"
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
                    {t('submit')}
                </button>
            </form>
        </div>
    );
};
export default Note;
