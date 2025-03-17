import { BlueWordContainer } from "./blueWordElements";
import { useState } from 'react';
import Modal from 'react-modal'; // Assuming you are using react-modal

function BlueWordComponent({word}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);
    const supabaseUrl = 'https://trlauvtqyqikookhwwzs.supabase.co/storage/v1/object/public/lyricimgs//';
    const imageLimit = 14;

    function getImage(num){
        return supabaseUrl+num+'.jpg';
    }

    function getRandomImage() {
        return getImage(Math.floor(Math.random() * imageLimit));
    }

    const handleClick = () => {
        setImages([getRandomImage(), getRandomImage()]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const customStyles = {
        content: {
            maxWidth: '400px',
            margin: 'auto',
            backgroundColor: 'transparent',
            border: 'none',
            overflow: 'visible'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
		a: {
			display: 'none'
		}
    };

    return (
        <div style={{display: 'inline-block'}}>
            <div onClick={handleClick}>
				<BlueWordContainer>{word}</BlueWordContainer>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
                <div>
                    <img src={getRandomImage()} alt="🌊" />
                    <img src={getRandomImage()} alt="🌊" />
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default BlueWordComponent;