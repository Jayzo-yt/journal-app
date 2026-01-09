'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const JournalEntryPage = () => {
  return (
    <div className='py-8'>
      <form>
        <h1 className="text-5xl md:text-6xl font-bold">Journal entry</h1>
      </form>
    </div>
  );

};

export default JournalEntryPage;