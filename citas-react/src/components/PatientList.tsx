import { Patient } from '../App';
import { PatientDiv } from './PatientDiv';

export const PatientList = ({
  patients,
  setPatient,
  deletePatient,
}: {
  patients: Patient[];
  setPatient: (patient: Patient) => void;
  deletePatient: (id: number) => void;
}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {patients.length > 0 ? (
        <>
          <h2 className='font-black text-center text-3xl'>Patient List</h2>
          <p className='text-lg mt-5 mb-10 text-center'>
            Manage your{' '}
            <span className='text-teal-400 font-bold'>Patients and Dates</span>
          </p>
          <div className='h-screen overflow-scroll'>
            {patients.map((patient) => (
              <PatientDiv
                patient={patient}
                key={patient.id}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-center text-3xl'>No patients</h2>
          <p className='text-lg mt-5 mb-10 text-center'>
            Start adding your{' '}
            <span className='text-teal-400 font-bold'>Patients and Dates</span>
          </p>
        </>
      )}
    </div>
  );
};
