import { useForm, usePage } from '@inertiajs/react';
import { Select } from 'antd';


const { Option } = Select;
function Note() {
    const {auth} = usePage().props;

    const { data, setData, post, processing } = useForm({
        name : auth.user.name,
        prenom : auth.user.prenom,
        appoge : auth.user.appoge,
        cne : auth.user.cne,
        cni : auth.user.cni,
    })

    function submit(e) {
        e.preventDefault()
        post('/note')
      }
  return (
    <div className='grid place-items-center gap-2 text-center'>
        <h1 className=' font-semibold text-lg'>Choisir les module que vous voulez le rectifier</h1>
        <form onSubmit={submit} className=' grid gap-2'>
            <h1>Sélect le semestre</h1>
            <select className='w-32 h-8 rounded focus:outline-none focus:border focus:border-transparent focus:ring-1 focus:ring-black' name="" id=""></select>
            <h1>Choisir le(s) module</h1>
            <div className=' grid grid-cols-4 gap-2'>
                <label htmlFor="">

                <input className=' rounded' type="checkbox" name="" id="" />
                </label>
            </div>
        <button className=' bg-green-300 rounded-md w-32 h-8' disabled={processing} type="submit">Submit</button>
        </form>
    </div>
  );
}
export default Note;
