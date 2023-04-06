import { useForm, usePage } from "@inertiajs/react";
import React from "react";

function info_error(props) {
    function handleClick() {
        props.onModalChange(!props.modal);
    }

    const { auth } = usePage().props;
    const { data, setData, post, processing } = useForm({
        name: auth.user.name,
        prenom: auth.user.prenom,
        cne: auth.user.cne,
        cni: auth.user.cni,
        appoge: auth.user.appoge,
    });
    function submit(e) {
        e.preventDefault();
        post("/error");
    }
    return (
        <div className=" shadow max-sm:w-full shadow-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/75 p-8 rounded">
            <h1 className=" font-semibold text-xl text-center mb-4 mt-4">
                Signaler une erreur dans vos informations
            </h1>
            <form onSubmit={submit} className=" grid gap-4 place-items-center">
                <div className=" grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="" className="flex  justify-between">
                            Nom:
                            <input
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
                                className="rounded"
                                type="checkbox"
                                name=""
                                id=""
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className="flex  justify-between">
                            Appoge:
                            <input
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
                                className="rounded"
                                type="checkbox"
                                name=""
                                id=""
                            />
                        </label>
                    </div>
                </div>
                <h1 className=" font-semibold">
                    saisir le correct valeur pour chaque que vous selecte :
                </h1>
                <input className=" rounded w-full" type="text" name="" id="" />
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
        </div>
    );
}

export default info_error;
