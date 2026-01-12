'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { journalSchema } from '@/app/lib/schema';
import { BarLoader } from 'react-spinners';
import { Input } from "@/components/ui/input"
import { isLoading } from 'process';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOODS } from '@/app/lib/moods';

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
      <form className='space-y-2 mx-auto'>
        <h1 className="text-5xl md:text-6xl font-bold">Journal entry</h1>
        {isLoading && <BarLoader color="black" width="100%" />}

        <div className="space-y-2 mt-6 border-b pb-10">
          <label>Title</label>
          <Input {...register('title')} placeholder="Enter the title" className={'py-5 md:text-md ${errors.title ? "border-red-500" : ""}'} />
        </div>

        <div className='space-y-2'>
          <label>Your mood today?</label>
          <Controller
            name="mood"
            control={control}
            render={({ field }) => {
              return (
                <Select {...field}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a mood" />
                  </SelectTrigger>
                  <SelectContent>
              {Object.values(MOODS).map((mood) => {
                return (
                  <SelectItem key={mood.id} value={mood.id}>
                    <span className="flex items-center gap-2">
                      {mood.emoji} {mood.label}
                    </span>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
              )}}  />
        </div>
      </form>
    </div>
  );

};

export default JournalEntryPage;