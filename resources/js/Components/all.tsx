import React from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import { Tabs } from "antd";
import Note from "./note";
import Addmodule from "./addmodule";
import { usePage } from '@inertiajs/react';

const { TabPane } = Tabs;

function Home() {
    const { auth } = usePage().props
    return (
        <div className="grid">
            <div className=" bg-blue-300 rounded-t-md relative lg:text-center p-8">
                <div className=" lg:grid lg:grid-cols-3 flex gap-4">
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
                <div className="flex justify-end mt-4">
                    <button className="  text-red-500 text-2xl">
                        <MdOutlineReportProblem />
                    </button>
                </div>
            </div>
            <div className=" container px-8">
                <Tabs defaultActiveKey="1" id="mytab" className=" container">
                    <TabPane
                        tab={<span className=" text-black">correction</span>}
                        key="1"
                    >
                        <Note />
                    </TabPane>
                    <TabPane
                        tab={<span className=" text-black">ajouter</span>}
                        key="2"
                    >
                        <Addmodule />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Home;
