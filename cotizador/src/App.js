import React,{useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Content=styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContentForm=styled.div`
  background-color: #fff;
  padding: 3em;
`;
function App() {
  const [charge, setCharge] = useState(false);
  const [resume, setResume] = useState({
    quote: 0,
    data:{
      brand:'',
      plan:'',
      year:''
    }
  })
  const {data,quote}=resume;
  return (
    <Content>
      <Header tittle="Cotizador de seguros"/>
      <ContentForm>
        <Form
          setResume={setResume}
          setCharge={setCharge}
        />
        
        
        <Resume
          data={data}
        />

        {charge? <Spinner/>:null}

        {!charge?<Result
          quote={quote}
        />:null}
        
      </ContentForm>
    </Content>
  );
}

export default App;
