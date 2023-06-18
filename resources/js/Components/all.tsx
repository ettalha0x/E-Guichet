import React, { useState, useEffect } from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Note from "./note";
import Addmodule from "./addmodule";
import Document from "./demand_de_fichier";
import Error from "./info_error";
import { usePage } from "@inertiajs/react";
import photo from "../images/undraw_online_test_re_kyfx.svg";
import { FaUserGraduate } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { IoDocuments } from "react-icons/io5";
import { HiCheckCircle } from "react-icons/hi";

function Home({ t, i18n }) {
    const [modal, setModal] = useState(false);
    // const [lang, setLang] = useState("fr");

    useEffect(() => {
        const rootDiv = document.getElementById('all');
        if (rootDiv) {
          rootDiv.dir = i18n.dir();
        }
      }, [i18n.language]);

    const [profile, setprofile] = useState(false);
    const [module, setmodule] = useState(false);
    const [note, setnote] = useState(false);
    const [doc, setdoc] = useState(false);

    const { auth } = usePage().props;

    function handleModalChange(newModalValue) {
        setModal(newModalValue);
    }

    function handelProfile(){
        setprofile(!profile);
        setmodule(false);
        setnote(false);
        setdoc(false);
    }

    function handelModule(){
        setprofile(false);
        setmodule(!module);
        setnote(false);
        setdoc(false);
    }

    function handelNote(){
        setprofile(false);
        setmodule(false);
        setnote(!note);
        setdoc(false);
    }

    function handelDoc(){
        setprofile(false);
        setmodule(false);
        setnote(false);
        setdoc(!doc);
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

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      const today = new Date().toLocaleDateString(t('dayl'), options);
    return (
        <div id="all">
            {modal && (
                <div
                    className="fixed w-screen h-screen top-0 right-0 left-0 bottom-0"
                    style={{ zIndex: 10 }}
                >
                    <div
                        onClick={() => handleModalChange(!modal)}
                        className=" fixed w-screen h-screen top-0 right-0 left-0 bottom-0 bg-[rgba(49,49,49,0.8)]"
                    ></div>
                    <Error t={t} i18n={i18n} modal={modal} onModalChange={handleModalChange} />
                </div>
            )}
            <div className="">
                <div className="flex flex-wrap justify-around bg-[{photo}]">
                    <div className="md:bg-gradient-to-r rtl:bg-gradient-to-l bg-gradient-to-b from-gray-200 p-12  grid gap-8">
                        <h1 className=" font-semibold text-3xl">
                            <span>
                                {t('welcome')} <br />
                            </span>
                            <span className="text-blue-500">
                                {auth.user.name}
                            </span>
                        </h1>
                        <h2>{t('day')} {today} </h2>
                    </div>
                    <img className="w-64" src={photo} alt="" />
                </div>
                <div className="p-8 rounded shadow bg-slate-200 mt-4">
                    <h1 className=" font-semibold text-2xl text-red-500">{t('remarque')}</h1>
                    <ul className=" list-disc font-semibold">
                        <li>{t('remarque1')}</li>
                        <li>{t('remarque2')}</li>
                        <li>{t('remarque3')}</li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-8 justify-around mt-8 h-auto">
                    <div className="grid gap-4">
                        <button
                            className={`aa bg-[#C5CCFF] h-40 w-64 shadow-lg rounded text-center flex flex-col justify-center items-center relative`}
                            onClick={handelProfile}
                        >
                            <div className="flex justify-center items-center text-2xl bg-white rounded-full w-11 h-11 mb-2">
                                <FaUserGraduate className="text-3xl text-[#C5CCFF]" />
                            </div>
                            <span className="font-semibold">
                                {t('perosnal inf')}
                            </span>
                            {!profile &&(
                            <span className="triangle"></span>
                            )}
                        </button>
                        {profile && (
                            <div className="first shadow-lg grid gap-4 w-64 bg-[#C5CCFF] p-6 rounded relative animate__fadeIn">
                                <span className="card_triangle"></span>
                                <h1 className=" font-semibold text-blue-800">
                                    {auth.user.name.toUpperCase()}{" "}
                                    {auth.user.prenom.toUpperCase()}
                                </h1>
                                <h1>
                                    <span className=" font-semibold">
                                    {t('date de naissance')} :{" "}
                                    </span>
                                    <span>{auth.user.naissance}</span>
                                </h1>
                                <h1>
                                    <span className="font-semibold">
                                        {t('appoge')} :{" "}
                                    </span>
                                    <span>{auth.user.email}</span>
                                </h1>
                                <h1>
                                    <span className="font-semibold">
                                        {t("cne")} :{" "}
                                    </span>
                                    <span>{auth.user.cne} </span>
                                </h1>
                                <h1>
                                    <span className=" font-semibold">
                                        {t('cni')} :{" "}
                                    </span>
                                    <span>{auth.user.cni} </span>
                                </h1>
                                <h1>
                                    <span className=" font-semibold">
                                        {t("telephone")} :{" "}
                                    </span>
                                    <span>{auth.user.telephone} </span>
                                </h1>
                                <h1>
                                    <span className=" font-semibold">
                                        {t('fillier')} :{" "}
                                    </span>
                                    <span>{auth.user.fillier}</span>
                                </h1>
                                <button className="bg-blue-800 text-white rounded w-28 p-2 shadow" onClick={() => handleModalChange(!modal)}>
                                    {t("error")}
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="grid gap-4">
                        <button
                            className={`bb bg-[#0C5AFF] h-40 w-64 shadow-lg rounded text-center flex flex-col justify-center items-center relative`}
                            onClick={handelModule}
                        >
                            <div className="flex justify-center items-center text-2xl bg-white rounded-full w-11 h-11 mb-2">
                                <BiAddToQueue className="text-3xl text-[#0C5AFF]" />
                            </div>
                            <span className="font-semibold">
                                {t('addmodule')}
                            </span>
                            {!module && (
                            <span className="triangle"></span>
                            )}
                        </button>
                        {module && (
                            <div className="second  shadow-lg grid gap-4 w-64 bg-[#0C5AFF] p-6 rounded relative animate__fadeIn">
                                <span className="card_triangle"></span>
                                <Addmodule t={t} i18n={i18n}  />
                            </div>
                        )}
                    </div>
                    <div className="grid gap-4">
                        <button
                            className={`cc bg-[#008660] h-40 w-64 shadow-lg rounded text-center flex flex-col justify-center items-center relative`}
                            onClick={handelNote}
                        >
                            <div className="flex justify-center items-center text-2xl bg-white rounded-full w-11 h-11 mb-2">
                                <HiCheckCircle className="text-3xl text-[#008660]" />
                            </div>
                            <span className="font-semibold">
                                {t('note')}
                            </span>
                            {!note && (
                            <span className="triangle"></span>
                            )}
                        </button>
                        {note && (
                            <div className="third grid  shadow-lg gap-4 w-64 bg-[#008660] p-6 rounded relative animate__fadeIn">
                                <span className="card_triangle"></span>
                                <Note t={t} i18n={i18n}  />
                            </div>
                        )}
                    </div>
                    <div className="grid gap-4">
                        <button
                            className={`bg-[#FF3457] h-40 w-64 shadow-lg rounded text-center flex flex-col justify-center items-center relative `}
                            onClick={handelDoc}
                        >
                            <div className="flex justify-center items-center text-2xl bg-white rounded-full w-11 h-11 mb-2">
                                <IoDocuments className="text-3xl text-[#FF3457]" />
                            </div>
                            <span className="font-semibold">
                                {t('document')}
                            </span>
                            {!doc && (
                            <span className="triangle"></span>
                            )}
                        </button>
                        {doc && (
                            <div className="last grid gap-4 w-64 bg-[#FF3457] p-6 rounded relative animate__fadeIn">
                                <span className="card_triangle"></span>
                                <Document t={t} i18n={i18n}  />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
