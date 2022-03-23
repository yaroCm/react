import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { PatientList } from './components/PatientList';

export interface Patient {
  id: number;
  name: string;
  owner: string;
  mail: string;
  date: string;
  symptoms: string;
}
export const initialPatient = {
  id: 0,
  name: '',
  owner: '',
  mail: '',
  date: '',
  symptoms: '',
};

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [patient, setPatient] = useState<Patient>(initialPatient);

  useEffect(() => {
    const obtainLS = () => {
      const item = localStorage.getItem('patients') ?? '';
      if (item !== '') setPatients(JSON.parse(item));
    };
    obtainLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id: number) => {
    const newPatients = patients.filter(
      (patientState) => patientState.id !== id
    );
    setPatients(newPatients);
  };
  return (
    <div className='container	mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Form
          patient={patient}
          patients={patients}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
