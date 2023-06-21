import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import blur from "../images/bbblurry1.svg";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div
                className="relative sm:flex sm:justify-center sm:items-center bg-blury bg-no-repeat bg-cover  min-h-screen bg-center "
                style={{ backgroundImage: `url(${blur})` }}
            >
                <div className=" bg-white/40 p-8 rounded-md grid gap-6 drop-shadow-2xl shadow-lg">
                    <h1 className=" text-3xl font-semibold">
                        Bienvenue dans votre propre espace
                    </h1>
                    <h2 className=" text-xl">
                        Vous pouvez gérer votre parcours académique simplement
                        dans un seul place
                    </h2>
                    <div className=" flex justify-around text-center">
                        <div className=" grid gap-4">
                    <h1 className=" text-lg font-semibold underline">continue veres le site</h1>
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href={route("login")}
                            className=" h-10 hover:scale-105 ease-in-out duration-150 flex justify-center items-center font-semibold text-gray-600 hover:text-gray-900 bg-transparent border border-gray-600 rounded"
                        >
                            Log in
                        </Link>
                    )}
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
