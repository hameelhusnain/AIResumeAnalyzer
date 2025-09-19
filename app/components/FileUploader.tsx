import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'



const FileUploader = () => {
     const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className="w-full gradient-border">
          <input {...getInputProps()} />
      <div className='space-y-4 cursor-pointer'>
        <div className='mx-auto w-16 h-16 items-center justify-center'>
            <img src='./assets/public/icons/info.svg' alt='upload' className='size-20' />
        </div>
      </div>
    </div>
  )
}

export default FileUploader