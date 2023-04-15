import React, { useState } from "react";
import { usePage, useForm } from "@inertiajs/react";
import {toast } from 'react-toastify';


function Fichier() {
    const { auth } = usePage().props;

    const { data, setData, post , processing } = useForm({
        name : auth.user.name,
        prenom : auth.user.prenom,
        cne : auth.user.cne,
        cni : auth.user.cni,
        appoge : auth.user.email,
        scolarite: false,
        relevedenote: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/document",data)
        .then(() => {
            console.log('done');
            setData("scolarite", false);
            setData("relevedenote", false);
        });
        try{
            toast.success('submited');
        }catch{
            toast.error('failed');
        }
    }

    return (
        <div className="grid place-items-center gap-4">
            <h1 className=" font-semibold text-lg">Choisir type de document</h1>
            <form onSubmit={handleSubmit} className=" grid gap-4">
                    <label htmlFor="option1">scolarite:
                    <input
                    className=" ml-[4.3rem] rounded focus:ring-0"
                    type="checkbox"
                    checked={data.scolarite}
                    name="selected_documents[]" value="scolarite"
                    onChange={(e) => setData("scolarite", e.target.checked)}
                    />
                    </label>
                    <label htmlFor="option2">releve de note:
                    <input
                    className="ml-8 rounded focus:ring-0"
                    type="checkbox"
                    name="selected_documents[]" value="relevedenote"
                    checked={data.relevedenote}
                    onChange={(e) =>
                        setData("relevedenote", e.target.checked)
                    }
                    />
                    </label>
                <button className=' bg-green-300 rounded-md w-32 h-8' disabled={processing} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Fichier;
