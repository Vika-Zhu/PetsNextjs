import { useState, useEffect } from "react";

export function ModalUpload(handleFileChange:any, selectedFile:any, hendlerDrop:any, hendlerDrag:any, hendlerLeave:any, dragActive:any, previewImage:any, hendlerSubmit:any, handleModalToggle:any, uploadStatus:any) {

    return(   
        <div className="modal">
            <div className="modal__container">
                <div className="modal__content">
                    <button className="modal__close svg" onClick={handleModalToggle}></button>
                    <h2 className="modal__title">Upload a .jpg or .png Cat Image</h2>
                    <p className="modal__text">Any uploads must comply with the <a  href="https://thecatapi.com/privacy" target="_blank"  rel="noreferrer noopener" className="red-text">upload guidelines</a> or face deletion.</p>
                    <form className={`modal__upload-window upload__window ${dragActive ? "drag" : " "} ${uploadStatus === "error" ? "upload-error" : ""}`}
                        onDragEnter={hendlerDrag}
                        onDragOver={hendlerDrag}
                        onDragLeave={hendlerLeave}
                        onDrop={hendlerDrop}
                        >
                        {previewImage ? (
                            <div className="preview-image-container">
                                <img src={previewImage} alt="Preview" className="preview-image" />
                            </div>
                        ) : (
                            <label className="upload__window-instruction">
                                <span className="bold-text">Drag here </span>
                                <span>your file or </span>
                                <span className="bold-text">
                                    <input
                                        type="file"
                                        accept=".jpg, .jpeg, .png, .gif"
                                        multiple={false}
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                    Click here
                                </span>
                                <span> to upload</span>
                            </label>
                        )}
                    </form>

                    {selectedFile.length > 0 ? (
                        <p className="modal__text">Image File Name: {selectedFile[0]?.name}</p>
                    ) : (
                        <p className="modal__text">No file selected</p>
                    )}
                    {(selectedFile && uploadStatus !== 'error')&& (
                        <button className="upload__btn btn" onClick={hendlerSubmit}>UPLOAD PHOTO</button>
                    )}
                    {uploadStatus === 'success' && (
                        <div className="upload__status upload__status-success">Thanks for the Upload - Cat found!</div>
                    )}
                    {uploadStatus === 'error' && (
                        <div className="upload__status upload__status-error">No Cat found - try a different one</div>
                    )}
                </div>
            </div>
        </div>)
}


