import { useState } from "react";
import list from "./moduledata.json";
import { useForm, usePage } from "@inertiajs/react";

const MyComponent = () => {

    const {auth} = usePage().props
    const { data, setData, post, processing } = useForm({
        name: auth.user.name,
        prenom: auth.user.prenom,
        appoge: auth.user.appoge,
        cne: auth.user.cne,
        cni: auth.user.cni,
    });
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const [selectedSemester, setSelectedSemester] = useState(1);

    const semester = list.find((item) => item.id === "8");
    const moduleOptions = semester.semestre[selectedSemester - 1].module.map(
        (module) => ({
            value: module.id,
            label: module.name,
        })
    );

    //   const handleCheckboxChange = (e) => {
    //     const checkboxValue = e.target.value;
    //     if (e.target.checked) {
    //       if (selectedCheckboxes.length < 3) {
    //         setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    //       }
    //     } else {
    //       setSelectedCheckboxes(
    //         selectedCheckboxes.filter((value) => value !== checkboxValue)
    //       );
    //     }
    //   }
    function submit(e) {
        console.log("hern");
    }

    return (
        <div className="grid place-items-center gap-4">
            <h1 className=" font-semibold text-lg">
                Choisir les module que vous voulez ajouter
            </h1>
            <form onSubmit={submit} className=" grid gap-2 place-items-center">
                <h1 className=" text-lg font-semibold">Sélect le semestre</h1>
                <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className=" w-auto rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black"
                >
                    {semester.semestre.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                            {semester.name}
                        </option>
                    ))}
                </select>
                <h1 className=" text-lg font-semibold">Sélect les module que vous voulez ajouter</h1>
                <div className=" grid grid-cols-3  gap-4">
                    {moduleOptions.map((option) => (
                        <label key={option.value}>
                            <input
                                type="checkbox"
                                value={option.value}
                                name={option.label}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
                <button
                    className=" bg-green-300 rounded-md w-32 h-8"
                    // disabled={processing}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MyComponent;
