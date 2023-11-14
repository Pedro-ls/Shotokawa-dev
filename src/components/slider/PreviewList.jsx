import React from 'react';

const PreviewList = ({ images, activeIndex, onPreviewClick }) => {
  return (
    <div className="preview-list">
      {images.map((image, index) => (
        <div
          key={index}
          className={`preview-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => onPreviewClick(index)}
        >
          <img src={image} alt={`Preview ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PreviewList;
