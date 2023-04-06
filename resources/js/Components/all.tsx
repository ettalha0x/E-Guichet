import React, { useState } from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Note from "./note";
import Addmodule from "./addmodule";
import Document from "./demand_de_fichier";
import Error from "./info_error";
import { usePage } from "@inertiajs/react";

function Home() {
    const [modal, setModal] = useState(false);

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Demand de correction",
            children: <Note />,
        },
        {
            key: "2",
            label: `Ajouter des modules`,
            children: <Addmodule />,
        },
        {
            key: "3",
            label: `Demande des documents`,
            children: <Document />,
        },
    ];

    const { auth } = usePage().props;

    function handleModalChange(newModalValue) {
        setModal(newModalValue);
    }

    if (modal) {
        document.body.style.overflowY = 'hidden';
      }


    return (
        <>
            {modal && (
                <div
                    className="fixed w-screen h-screen top-0 right-0 left-0 bottom-0"
                    style={{ zIndex: 10 }}
                >
                    <div
                        onClick={() => handleModalChange(!modal)}
                        className=" fixed w-screen h-screen top-0 right-0 left-0 bottom-0 bg-[rgba(49,49,49,0.8)]"
                    ></div>
                    <Error modal={modal} onModalChange={handleModalChange} />
                </div>
            )}
            <div className="grid shadow">
                <div className=" bg-blue-300 rounded-t-md lg:text-center p-8">
                    <div className=" grid lg:grid-cols-3 grid-cols-2 gap-8">
                        <div className="grid gap-8">
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    Nom :
                                </span>
                                <span>{auth.user.name}</span>
                            </div>
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    Prenom :
                                </span>
                                <span>{auth.user.prenom}</span>
                            </div>
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    Date/Lieu de naissance:
                                </span>
                                <span>{auth.user.naissance}</span>
                            </div>
                        </div>
                        <div className="grid gap-8">
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    Appoge :
                                </span>
                                <span>{auth.user.email}</span>
                            </div>
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    CNE :
                                </span>
                                <span>{auth.user.cne}</span>
                            </div>
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    CNI :
                                </span>
                                <span>{auth.user.cni}</span>
                            </div>
                        </div>
                        <div className="grid gap-8">
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    Semestre :
                                </span>
                                <span>{auth.user.semestre}</span>
                            </div>
                            <div className="grid lg:flex gap-4 lg:gap-8">
                                <span className=" font-semibold underline decoration-indigo-800">
                                    fillier :
                                </span>
                                <span>{auth.user.fillier}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4 top-0 bottom-0 left-0 right-0">
                        <button
                            className="  text-red-500 text-2xl"
                            onClick={() => handleModalChange(!modal)}
                        >
                            <MdOutlineReportProblem />
                        </button>
                    </div>
                </div>
                <div className=" lg:px-8 px-4 pb-4 overflow-x-auto">
                    <Tabs
                        className=" flex flex-col"
                        defaultActiveKey="1"
                        items={items}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
