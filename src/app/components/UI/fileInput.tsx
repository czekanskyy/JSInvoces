'use client';

import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

const FileInput = () => {
  const [fileInput, setFileInput] = useState('');
  const handleFileInput = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    setFileInput(file.name);
  };

  return (
    <div className='flex flex-col gap-2 w-full col-span-6'>
      <label htmlFor='logo' className='text-sm font-medium'>
        Company logo
      </label>
      <div className='border border-dashed rounded p-4 flex flex-col items-center justify-center gap-1 text-sm'>
        <PhotoIcon className='w-10 text-gray-300' />
        <label
          htmlFor='file-upload'
          className='relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500'
        >
          <span>Select a file</span>
          <input type='file' id='file-upload' name='file-upload' className='sr-only' onInput={handleFileInput} />
        </label>
        <p className='text-xs text-gray-600'>PNG, JPG or WEBP</p>
        {fileInput && (
          <p className='text-sm text-gray-700 mt-2'>
            Uploaded file: <span className='font-semibold text-blue-600'>{fileInput}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default FileInput;
