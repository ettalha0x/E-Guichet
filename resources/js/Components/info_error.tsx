import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

function info_error(props) {
    function handleClick() {
        props.onModalChange(!props.modal);
    }

    const { auth } = usePage().props;
    const [modifiernom, setModifiernom] = useState(false);
    const [modifierprenom, setModifierprenom] = useState(false);
    const [modifiercne, setModifiercne] = useState(false);
    const [modifiercni, setModifiercni] = useState(false);
    const [modifierdatedenaissance, setModifierdatedenaissance] =
        useState(false);
    const { data, setData, post, processing } = useForm({
        name: auth.user.name,
        prenom: auth.user.prenom,
        cne: auth.user.cne,
        cni: auth.user.cni,
        naissance: auth.user.naissance,
        newname: "",
        newprenom: "",
        newcne: "",
        newcni: "",
        newdate: "",
    });
    function submit(e) {
        e.preventDefault();
        // post("/error");
        console.log(data);
    }
    return (
        <div className=" shadow max-sm:w-full shadow-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/75 p-8 rounded">
            <h1 className=" font-semibold text-xl text-center mb-4">
                Signaler une erreur dans vos informations
            </h1>
            <div className=" grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        Nom:
                        <input
                            onChange={(e) => setModifiernom(e.target.checked)}
                            className="rounded"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        Prenom:
                        <input
                            onChange={(e) =>
                                setModifierprenom(e.target.checked)
                            }
                            className="rounded"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        Cne:
                        <input
                            onChange={(e) => setModifiercne(e.target.checked)}
                            className="rounded"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        Cni:
                        <input
                            onChange={(e) => setModifiercni(e.target.checked)}
                            className="rounded"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        Date de naissance:
                        <input
                            onChange={(e) =>
                                setModifierdatedenaissance(e.target.checked)
                            }
                            className="rounded"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
            </div>
            <form onSubmit={submit} className=" grid gap-4 place-items-center">
                <h1 className=" font-semibold">
                    saisir le correct valeur pour votre information :
                </h1>
                <div className=" grid grid-cols-2 gap-4">
                    {modifiernom && (
                        <label htmlFor="">
                            Nom: <br />
                            <input
                            value={data.newname} onChange={e => setData('newname', e.target.value)}
                                className=" rounded md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifierprenom && (
                        <label htmlFor="">
                            prenom: <br />
                            <input
                            value={data.newprenom} onChange={e => setData('newprenom', e.target.value)}
                                className=" rounded md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifiercne && (
                        <label htmlFor="">
                            cne: <br />
                            <input
                            value={data.newcne} onChange={e => setData('newcne', e.target.value)}
                                className=" rounded md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifiercni && (
                        <label htmlFor="">
                            cni: <br />
                            <input
                            value={data.newcni} onChange={e => setData('newcni', e.target.value)}
                                className=" rounded md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifierdatedenaissance && (
                        <label htmlFor="">
                            date de naissance: <br />
                            <input
                            value={data.newdate} onChange={e => setData('newdate', e.target.value)}
                                className=" rounded md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                </div>
                <button
                    className=" bg-green-300 rounded-md w-32 h-8"
                    disabled={processing}
                    type="submit"
                >
                    Submit
                </button>
            </form>
            <button
                className=" absolute top-2 right-2 text-xl w-10 hover:bg-slate-500/40 rounded p-2 transition hover:ease-in-out ease-in-out duration-300"
                onClick={handleClick}
            >
                X
            </button>
            {/* <h1 className=" text-red-700">NOTE : VOTRE MODFICITAION </h1> */}
        </div>
    );
}

export default info_error;
