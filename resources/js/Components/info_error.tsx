import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import {toast } from 'react-toastify';


function info_error({ t, i18n, modal, onModalChange }) {
    function handleClick() {
      onModalChange(!modal);
    }

    const { auth } = usePage().props;
    const [modifiernom, setModifiernom] = useState(false);
    const [modifierprenom, setModifierprenom] = useState(false);
    const [modifiercne, setModifiercne] = useState(false);
    const [modifiercni, setModifiercni] = useState(false);
    const [modifierdatedenaissance, setModifierdatedenaissance] =
        useState(false);
    const { data, setData, post, processing , reset} = useForm({
        newname: "",
        newprenom: "",
        newcne: "",
        newcni: "",
        newdate: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/correction_de_donnees", {
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
        <div className=" shadow max-sm:w-full shadow-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/75 p-8 rounded">
            <h1 className=" font-semibold text-xl text-center mb-4">
                {t('msg')}
            </h1>
                <h1 className=" font-semibold">
                    {t('instruction')}
                </h1>
            <div className=" grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        {t('nom')}:
                        <input
                            onChange={(e) => setModifiernom(e.target.checked)}
                            className="rounded focus:ring-0"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        {t('prenom')}:
                        <input
                            onChange={(e) =>
                                setModifierprenom(e.target.checked)
                            }
                            className="rounded focus:ring-0"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        {t("cne")}:
                        <input
                            onChange={(e) => setModifiercne(e.target.checked)}
                            className="rounded focus:ring-0"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="flex  justify-between">
                        {t("cni")}:
                        <input
                            onChange={(e) => setModifiercni(e.target.checked)}
                            className="rounded focus:ring-0"
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
                            className="rounded focus:ring-0"
                            type="checkbox"
                            name=""
                            id=""
                        />
                    </label>
                </div>
            </div>
            <form onSubmit={submit} className=" grid gap-4 place-items-center">
                <div className=" grid grid-cols-2 gap-4">
                    {modifiernom && (
                        <label htmlFor="">
                            {t('nom')}: <br />
                            <input
                            value={data.newname} onChange={e => setData('newname', e.target.value)}
                                className=" rounded focus:ring-0 md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifierprenom && (
                        <label htmlFor="">
                            {t('prenom')}: <br />
                            <input
                            value={data.newprenom} onChange={e => setData('newprenom', e.target.value)}
                                className=" rounded focus:ring-0 md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifiercne && (
                        <label htmlFor="">
                            {t('cne')}: <br />
                            <input
                            value={data.newcne} onChange={e => setData('newcne', e.target.value)}
                                className=" rounded focus:ring-0 md:w-74 w-32"
                                type="text"
                                name=""
                                id=""
                            />
                        </label>
                    )}
                    {modifiercni && (
                        <label htmlFor="">
                            {t("cni")}: <br />
                            <input
                            value={data.newcni} onChange={e => setData('newcni', e.target.value)}
                                className=" rounded focus:ring-0 md:w-74 w-32"
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
                                className=" rounded focus:ring-0 md:w-74 w-32"
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
                    {t('submit')}
                </button>
            </form>
            <h1 className=" font-serif text-red-700 text-sm">{t("warning")}</h1>
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
