import { BlueWordContainer } from "./blueWordElements";
import { useState } from 'react';
import Modal from 'react-modal'; // Assuming you are using react-modal

function BlueWordComponent({word, song: _song}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);
    const supabaseUrl = 'https://trlauvtqyqikookhwwzs.supabase.co/storage/v1/object/public/lyricimgs//';
    const sweaterUrl = 'https://trlauvtqyqikookhwwzs.supabase.co/storage/v1/object/public/sweater-images//';
    const imageLimit = 14;
    const sweaterLimit = 8;

    function getImage(num){
        return supabaseUrl + num + '.jpg';
    }
    function getSweaterImage(num){
        return sweaterUrl + num + '.jpg';
    }

    function getRandomImage() {
        switch (_song) {
            case 'sweater':
                return getSweaterImage(Math.floor(Math.random() * sweaterLimit));
        }
        return getImage(Math.floor(Math.random() * imageLimit));
    }

    const handleClick = () => {
        setImages([getRandomImage(), getRandomImage(), getRandomImage(), getRandomImage()]);
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
            <div onClick={handleClick} style={{cursor: 'pointer'}}>
                <BlueWordContainer>{word}</BlueWordContainer>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
                <div id='deck'>
                    <cards class="hideScroll">
                        <img src={images[0]} alt="🌊" />
                        <img src={images[1]} alt="🌊" />
                        <img src={images[2]} alt="🌊" />
                        <img src={images[3]} alt="🌊" />
                    </cards>
                </div>
            </Modal>
        </div>
    )
}

export default BlueWordComponent;