'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';

import styles from './imagepicker.module.css';

const ImagePicker = ({ label, name }) => {
  const [chosenImage, setChosenImage] = useState();
  const imgRef = useRef<HTMLImageElement>(null);

  const handleBtnClick = () => {
    imgRef.current && imgRef.current.click();
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setChosenImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setChosenImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!chosenImage && <p>No image selected</p>}
          {chosenImage && (
            <Image src={chosenImage} alt="Image selected to be uploaded" fill />
          )}
        </div>
        <input
          ref={imgRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png image/jpg"
          name={name}
          onChange={handleImgChange}
          required
        />
        <button
          onClick={handleBtnClick}
          className={styles.button}
          type="button"
        >
          Choose an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
