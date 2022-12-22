import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import EditDataModal from './Components/EditDataModal/EditDataModal';
import Inputs from './Components/Inputs/Inputs';
import Outputs from './Components/Outputs/Outputs';

function App() {

  const [selectors, setSelectors] = useState([])
  useEffect(() => {
      fetch('https://linkdin-task-server.vercel.app/selectors')
          .then(res => res.json())
          .then(data => {
              setSelectors(data)
          })
  }, [])
  const [modalData, setModalData] = useState({})

  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 className='text-center my-10 text-xl font-semibold text-white'>Please enter your name and pick the Sectors you are currently involved in.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20'>
        <Inputs selectors={selectors}></Inputs>
        <Outputs setModalData={setModalData}></Outputs>
      </div>


      {
        modalData &&
        <EditDataModal
            modalData={modalData}
            selectors={selectors}
          setModalData={setModalData}
        ></EditDataModal>
      }



      <Toaster></Toaster>
    </div>
  );
}


export default App;
