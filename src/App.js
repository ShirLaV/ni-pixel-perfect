
import { useState } from 'react';
import { Modal } from './cmps/Modal';
import { Screen } from './cmps/Screen';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      {isModalOpen &&
        <>
          <Screen />
          <Modal onClose={toggleModal} />
        </>
      }
    </div>
  );
}

export default App;
