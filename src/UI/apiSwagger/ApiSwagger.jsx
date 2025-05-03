import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import ImageAdd from "../../assets/image/Rectangle 222.png"
import ImageRi from "../../assets/image/ri_image-add-fill.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ApiSwagger = () => {
    const [photo, setPhoto] = useState([]);
    const [activeModalId, setActiveModalId] = useState(null);
    const [editPhotoId, setEditPhotoId] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        if (photo.length < 3) {
            setEditPhotoId(null);
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64Data = reader.result;

            if (editPhotoId !== null) {
                const updatedPhotos = photo.map(item =>
                    item.id === editPhotoId ? { ...item, photo: base64Data } : item
                );
                setPhoto(updatedPhotos);
                setEditPhotoId(null);
            } else {
                const newPhoto = {
                    id: Date.now(),
                    photo: base64Data
                };
                setPhoto([...photo, newPhoto]);
            }
        };

        reader.readAsDataURL(file);
        e.target.value=""
    };

    const openModal = (id) => {
        setActiveModalId(id);
    };

    const closeModal = () => {
        setActiveModalId(null);
    };

    const deletePhotoById = (id) => {
        setPhoto(photo.filter(el => el.id !== id));
        setActiveModalId(null);
    };

    return (
        <div>
            <PhotoMap>
                {photo.map((el) => (
                    <Wrapper key={el.id}>
                        <img src={ImageAdd} alt="" />
                        <MoreVertIcon
                            onClick={() => openModal(el.id)}
                            style={{ position: "relative", bottom: "9em", left: "-45px", cursor: "pointer" }}
                        />
                        <ImageMap src={el.photo} alt="uploaded" />
                        {activeModalId === el.id && (
                            <ButtonRow>
                                <EditButton onClick={() => {
                                    setEditPhotoId(el.id);
                                    fileInputRef.current.click();
                                }}>
                                    Изменить
                                </EditButton>
                                <DeleteButton onClick={() => deletePhotoById(el.id)}>
                                    Удалить
                                </DeleteButton>
                                <ButtonDate onClick={closeModal}>
                                    Отмена
                                </ButtonDate>
                            </ButtonRow>
                        )}
                    </Wrapper>
                ))}

                {photo.length < 3 && (
                    <Wrapper>
                        <img src={ImageAdd} alt="" />
                        <CenterImage onClick={handleImageClick} src={ImageRi} alt="" />
                    </Wrapper>
                )}

                <HiddenInput
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </PhotoMap>
        </div>
    );
};

export default ApiSwagger;

// Styled components
const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    flex-direction: column;
    gap: 10px;
    left: 5em;
    bottom: 130px;
    margin-left: 117px;
    width: 100px;
`;

const EditButton = styled.button`
    border: none;
    color: black;
    padding: 4px 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    width: 60px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #4681db;
    }
`;

const ButtonDate = styled.button`
    border: none;
    color: black;
    padding: 4px 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    width: 60px;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #0000009b;
    }
`;

const DeleteButton = styled.button`
    border: none;
    color: black;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #d9363e;
    }
`;

const PhotoMap = styled.div`
    display: flex;
    gap: 101px;
`;

const ImageMap = styled.img`
    width: 223px;
    height: 240px;
    position: absolute;
    top: 48%;
    left: 43%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
`;

const CenterImage = styled.img`
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

const HiddenInput = styled.input`
    display: none;
`;
