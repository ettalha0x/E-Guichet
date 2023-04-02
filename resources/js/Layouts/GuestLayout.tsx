import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className=" flex justify-center mt-6 drop-shadow-md shadow-lg">
                <div className=" bg-gradient-to-b from-blue-400 to-blue-900 rounded-l-lg w-28 bg-fill"></div>
                <div className="w-full sm:max-w-md px-6 py-4  overflow-hidden sm:rounded-r-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
