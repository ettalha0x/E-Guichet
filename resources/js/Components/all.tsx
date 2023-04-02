import React from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import { Tabs } from "antd";
import Note from "./note";
import Addmodule from "./addmodule";

const { TabPane } = Tabs;

function Home() {
    return (
        <div className="grid">
            <div className=" bg-blue-300 rounded-t-md relative lg:text-center p-8">
                <div className=" lg:grid lg:grid-cols-3 flex gap-4">
                    <div className="grid gap-8">
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Nom :
                            </span>
                            <span>user.name</span>
                        </div>
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Prenom :
                            </span>
                            <span>user.preno;</span>
                        </div>
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Date/Lieu de naissance:
                            </span>
                            <span>user.naissance</span>
                        </div>
                    </div>
                    <div className="grid gap-8">
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Appoge :
                            </span>
                            <span>user.appoge</span>
                        </div>
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                CNE :
                            </span>
                            <span>user.cne;</span>
                        </div>
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                CIN :
                            </span>
                            <span>user.cin</span>
                        </div>
                    </div>
                    <div className="grid gap-8">
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Nom :
                            </span>
                            <span>user.name</span>
                        </div>
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Prenom :
                            </span>
                            <span>user.preno;</span>
                        </div>
                        <div className="grid lg:flex gap-4 lg:gap-8">
                            <span className=" font-semibold underline decoration-indigo-800">
                                Date/Lieu de naissance:
                            </span>
                            <span>user.naissance</span>
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
