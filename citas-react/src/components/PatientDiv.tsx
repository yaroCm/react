import { Patient } from '../App';

export const PatientDiv = ({
  patient,
  setPatient,
  deletePatient,
}: {
  patient: Patient;
  setPatient: (patient: Patient) => void;
  deletePatient: (id: number) => void;
}) => {
  const { id, name, owner, mail, date, symptoms } = patient;
  const handleDelete = () => {
    const repond = confirm('Do you want to delete this patient ?');
    if (repond) deletePatient(id);
  };
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-grey-700 uppercase'>
        Name: <span className='font-normal normal-case'>{name}</span>
      </p>
      <p className='font-bold mb-3 text-grey-700 uppercase'>
        Owner: <span className='font-normal normal-case'>{owner}</span>
      </p>
      <p className='font-bold mb-3 text-grey-700 uppercase'>
        E-mail: <span className='font-normal normal-case'>{mail}</span>
      </p>
      <p className='font-bold mb-3 text-grey-700 uppercase'>
        Date: <span className='font-normal normal-case'>{date}</span>
      </p>
      <p className='font-bold mb-3 text-grey-700 uppercase'>
        Symptoms: <span className='font-normal normal-case'>{symptoms}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button
          onClick={() => setPatient(patient)}
          className='py-2 px-10 bg-teal-400 text-white uppercase rounded-lg hover:bg-teal-600 '
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className='py-2 px-10 bg-red-400 text-white uppercase rounded-lg hover:bg-red-600 '
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
