"use client"

import { Header } from '@/components/Header';
import NewBook from '@/components/form_new_author';
import { useForm } from 'react-hook-form';

export default function new_book() {
  
  const { handleSubmit } = useForm()
  

  return(
    <div>
      <Header />
      <NewBook />
    </div>
  )
}