import { useState } from "react";
import list from "./moduledata.json";
import { useForm, usePage } from "@inertiajs/react";

const MyComponent = () => {
    const { auth } = usePage().props;
    const { data, setData, post, processing } = useForm({
        name: auth.user.name,
        prenom: auth.user.prenom,
        appoge: auth.user.appoge,
        cne: auth.user.cne,
        cni: auth.user.cni,
    });
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [checkedCount, setCheckedCount] = useState(0);
    const maxcheck = 3;
    const [selectedSemester, setSelectedSemester] = useState(1);

    const semester = list.find((item) => item.id === "8");
    const moduleOptions = semester.semestre[selectedSemester - 1].module.map(
        (module) => ({
            value: module.id,
            label: module.name,
        })
    );

    function handleCheckboxChange(e) {
        const checkboxLabel = e.target.name;
        if (e.target.checked) {
            if (selectedCheckboxes.length < maxcheck) {
                setSelectedCheckboxes([...selectedCheckboxes, checkboxLabel]);
            } else {
                e.target.checked = false;
            }
        } else {
            setSelectedCheckboxes(
                selectedCheckboxes.filter((label) => label !== checkboxLabel)
            );
        }
    }

    function submit(e) {
        console.log("hern");
        e.preventDefault();
        console.log("Selected checkboxes: ", selectedCheckboxes);
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
                <h1 className=" text-lg font-semibold">
                    Sélect les module que vous voulez ajouter
                </h1>
                <div className=" grid grid-cols-3  gap-4">
                    {moduleOptions.map((option) => (
                        <label key={option.value}>
                            <input
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
