import React, { useState } from "react";
import { usePage, useForm } from "@inertiajs/react";
import {toast } from 'react-toastify';


function Fichier({ t, i18n }) {
    const { auth } = usePage().props;

    const { data, setData, post , processing , reset} = useForm({
        name : auth.user.name,
        prenom : auth.user.prenom,
        cne : auth.user.cne,
        cni : auth.user.cni,
        appoge : auth.user.email,
        scolarite: false,
        relevedenote: false,
    });

    function handleSubmit(e) {
        if (!data.scolarite && !data.relevedenote) {
            toast.error('Veuillez choisir au moins un document');
            e.preventDefault();
            return;
        }
        e.preventDefault();
        post("/document", {
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
        <div className="grid text-white place-items-center gap-4">
            <h1 className="  text-center font-semibold text-lg">{t('Choisir type de document')}</h1>
            <form onSubmit={handleSubmit} className=" grid gap-4">
                    <label htmlFor="option1">{t('scolarite')}:
                    <input
                    className=" ml-[4.3rem] rounded focus:ring-0"
                    type="checkbox"
                    checked={data.scolarite}
                    name="selected_documents[]" value="scolarite"
                    onChange={(e) => setData("scolarite", e.target.checked)}
                    />
                    </label>
                    <label htmlFor="option2">{t('releve de note')}:
                    <input
                    className="ml-8 rtl:mr-4 rounded focus:ring-0"
                    type="checkbox"
                    name="selected_documents[]" value="relevedenote"
                    checked={data.relevedenote}
                    onChange={(e) =>
                        setData("relevedenote", e.target.checked)
                    }
                    />
                    </label>
                <button className=' bg-[#F3EED9] text-black rounded w-28 p-2 shadow' disabled={processing} type="submit">{t('submit')}</button>
            </form>
        </div>
    );
}

export default Fichier;
