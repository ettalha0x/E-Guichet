import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {useTranslation} from 'react-i18next'
import All from '../Components/all'

export default function Dashboard({ auth }: PageProps) {

    const [t, i18n] = useTranslation();

return (
  <AuthenticatedLayout
    user={auth.user}
    t={t} i18n={i18n}
    header={<h2 className="font-semibold text-xl text-gray-600 leading-tight">Home</h2>}
  >
    <Head title="home" />

    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <All user={auth.user} t={t} i18n={i18n} />
      </div>
    </div>
  </AuthenticatedLayout>
);

}
