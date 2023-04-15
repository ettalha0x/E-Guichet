import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const originalOverflow = document.body.style.overflowY;

        if (modal) {
            document.body.style.overflowY = "hidden";
        }

        return () => {
            document.body.style.overflowY = originalOverflow;
        };
    }, [modal]);

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
            <div className="grid">
                <h1 className=" text-3xl text-center pb-8">
                    Personal information
                </h1>
                <div className=" text-white grid place-content-center rounded shadow-md bg-gradient-to-br from-blue-400 to-blue-900 bg-opacity-40 pt-8">
                    <div className=" lg:flex lg:gap-16">
                        <div className="flex gap-4 w-[80%] lg:w-[100%] ">
                            <div className="grid w-[80%] lg:w-[100%] ">
                                <label htmlFor="">Nom :</label>
                                <input
                                    className=" max-sm:h-8 rounded-md shadow text-black"
                                    type="text"
                                    disabled
                                    value={auth.user.name}
                                />
                            </div>
                            <div className="grid w-[80%] lg:w-[100%] ">
                                <label className="flex justify-end" htmlFor="">
                                    : الإسم الشخصي
                                </label>
                                <input
                                    className=" max-sm:h-8 rounded-md shadow text-black"
                                    type="text"
                                    disabled
                                    value={auth.user.name}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 w-[80%] lg:w-[100%] ">
                            <div className="grid w-[80%] lg:w-[100%] ">
                                <label htmlFor="">Prenom :</label>
                                <input
                                    className=" max-sm:h-8 rounded-md shadow text-black"
                                    type="text"
                                    disabled
                                    value={auth.user.prenom}
                                />
                            </div>
                            <div className="grid w-[80%] lg:w-[100%] ">
                                <label className="flex justify-end" htmlFor="">
                                    : الإسم العائلي
                                </label>
                                <input
                                    className=" max-sm:h-8 rounded-md shadow text-black"
                                    type="text"
                                    disabled
                                    value={auth.user.prenom}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 lg:gap-16 w-[80%] lg:w-[100%] ">
                        <div className="grid w-[80%] lg:w-[100%] ">
                            <label htmlFor="">Cni :</label>
                            <input
                                className=" max-sm:h-8 rounded-md shadow text-black"
                                type="text"
                                disabled
                                value={auth.user.cni}
                            />
                        </div>
                        <div className="grid w-[80%] lg:w-[100%] ">
                            <label className="" htmlFor="">
                                Cne :
                            </label>
                            <input
                                className=" max-sm:h-8 rounded-md shadow text-black"
                                type="text"
                                disabled
                                value={auth.user.cne}
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 lg:gap-16 w-[80%] lg:w-[100%] ">
                        <div className="grid w-[80%] lg:w-[100%] ">
                            <label htmlFor="">Appoge :</label>
                            <input
                                className=" max-sm:h-8 rounded-md shadow text-black"
                                type="text"
                                disabled
                                value={auth.user.email}
                            />
                        </div>
                        <div className="grid w-[80%] lg:w-[100%] ">
                            <label className="" htmlFor="">
                                Semestre
                            </label>
                            <input
                                className=" max-sm:h-8 rounded-md shadow text-black"
                                type="text"
                                disabled
                                value={auth.user.semestre}
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 lg:gap-16 w-[80%] lg:w-[100%] ">
                        <div className="grid w-[80%] lg:w-[100%] ">
                            <label htmlFor="">fillier :</label>
                            <input
                                className=" max-sm:h-8 rounded-md shadow text-black"
                                type="text"
                                disabled
                                value={auth.user.fillier}
                            />
                        </div>
                        <div className="grid w-[80%] lg:w-[100%] ">
                            <label className="" htmlFor="">
                                email accadimic :
                            </label>
                            <input
                                className=" max-sm:h-8 rounded-md shadow text-black"
                                type="text"
                                disabled
                                value={auth.user.acadimicemail}
                            />
                        </div>
                    </div>

                    <div className="flex p-10 justify-end">
                        <button
                            title="tu as un error dans votre info"
                            className="  text-red-500 text-2xl"
                            onClick={() => handleModalChange(!modal)}
                        >
                            <MdOutlineReportProblem />
                        </button>
                    </div>
                </div>
                {/* </div> */}
                <h1 className=" text-3xl text-center p-8">Services</h1>
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
