'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { journalSchema } from '@/app/lib/schema';
import { BarLoader } from 'react-spinners';
import { Input } from "@/components/ui/input"
import { isLoading } from 'process';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const JournalEntryPage = () => {

  const { register, handleSubmit,control,formState:{errors}} = useForm({
    resolver : zodResolver(journalSchema),
    defaultValues: {
      title: '',
      content: '',
      mood: '',
      collectionId: '',
    },
  });

  return (
    <div className='py-8'>
      <form>
        <h1 className="text-5xl md:text-6xl font-bold">Journal entry</h1>
        {isLoading && <BarLoader color="black" width="100%" />}

        <div className="space-y-2 mt-6 border-b pb-10">
          <label>Title</label>
          <Input {...register('title')} placeholder="Enter the title" className={'py-5 md:text-md ${errors.title ? "border-red-500" : ""}'} />
        </div>

        <div>
          <label>What you gonna write about today?</label>
          <ReactQuill
            theme="snow"
            className='mt-2 h-96'
            {...register('content')}
            placeholder="Write your journal entry here..."
          />
        </div>

      </form>
    </div>
  );

};

export default JournalEntryPage;