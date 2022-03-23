import { useEffect, useState } from 'react';
import { initialPatient, Patient } from '../App';
import { Error } from './Error';

interface PropsSubmit {
  preventDefault: () => void;
}
interface PropsForm {
  patients: Patient[];
  patient: Patient;
  setPatient: (value: Patient) => void;
  setPatients: (value: Patient[]) => void;
}
export const Form = ({
  patients,
  patient,
  setPatient,
  setPatients,
}: PropsForm) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [mail, setMail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setMail(patient.mail);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const handleSubmit = (e: PropsSubmit) => {
    setError(false);
    e.preventDefault();
    if ([name, owner, mail, date, symptoms].includes('')) {
      setError(true);
      return;
    }
    const ObjPatient: Patient = {
      id: 0,
      name: name,
      owner: owner,
      mail: mail,
      date: date,
      symptoms: symptoms,
    };
    if (patient.id) {
      ObjPatient.id = patient.id;
      const patientsUpdate = patients.map((patientState) =>
        patientState.id === patient.id ? ObjPatient : patientState
      );
      setPatients(patientsUpdate);
      setPatient(initialPatient);
    } else {
      ObjPatient.id = Date.now();
      setPatients([...patients, ObjPatient]);
    }

    setName('');
    setOwner('');
    setMail('');
    setDate('');
    setSymptoms('');
  };
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Follow of Patients</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Add pacients and{' '}
        <span className='text-teal-400 font-bold'>manage them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md roundex-lg py-10 px-5 mb-10'
      >
        {error && <Error error={'Todos los campos son obligatorios '} />}
        <div className='mb-5'>
          <label htmlFor='name' className='block text-gray uppercase font-bold'>
            Name of the pet
          </label>
          <input
            id='name'
            type='text'
            placeholder='Name of the pet'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='owner'
            className='block text-gray uppercase font-bold'
          >
            Name of the owner
          </label>
          <input
            id='owner'
            type='text'
            placeholder='Name of the owner'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray uppercase font-bold'
          >
            E-mail
          </label>
          <input
            id='email'
            type='email'
            placeholder='E-mail'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='date' className='block text-gray uppercase font-bold'>
            Date
          </label>
          <input
            id='date'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='symptoms'
            className='block text-gray uppercase font-bold'
          >
            Symptoms
          </label>
          <textarea
            id='symptoms'
            placeholder='Describe the symptoms'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <input
            type='submit'
            value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
            className='text-white w-full p-3 bg-teal-600 uppercase font-bold hover:bg-teal-700 cursor-pointer transition-colors'
          />
        </div>
      </form>
    </div>
  );
};
