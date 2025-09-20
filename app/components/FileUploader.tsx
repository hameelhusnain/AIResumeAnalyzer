import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
}


const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
     const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] || null;

    onFileSelect?.(file);
  }, [onFileSelect])
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    onDrop, 
    multiple:false, 
    accept: {'text/pdf': ['.pdf']},
    maxSize: 20 * 1024 * 1024});

    const file = acceptedFiles.length > 0 ? acceptedFiles[0] : null;
  return (
    <div className="w-full gradient-border">
          <input {...getInputProps()} />
      <div className='space-y-4 cursor-pointer'>
        <div className='mx-auto w-16 h-16 items-center justify-center'>
            <img src='./assets/public/icons/info.svg' alt='upload' className='size-20' />
        </div>
        {file ? (
          <div className='text-center'>
            <p className='tetx-lg text-gray-700 font-medium truncate'>
              {file.name}
            </p>
            <p className='text-sm text-gray-500'>
              {formatSize(file.size)}
            </p>
          </div>
        ) : (
          <div>
            <p className='text-lg text-gray-500'>
              <span className='font-semibold'>
                Click to upload 
              </span> or Drag and Drop
            </p>
            <p className='text-lg text-gray-500'>PDF (max 20MB)</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileUploader