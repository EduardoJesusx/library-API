"use client"

import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Select from 'react-select'
import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('Campo 1 é obrigatório')
});

type FormData = z.infer<typeof schema>;

export default function NewBook() {
  const { register, handleSubmit, reset } = useForm<FormData>();


  const router = useRouter();
  
  async function onsubmit(data:FormData){
    try {
      console.log(data)
      const response = await api.post(`/authors`, data)

      const responseData = response.data;
      console.log('Resposta da API:', responseData);
      reset()
      router.push(`/authors/${responseData.id}`);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const fields = [
    {
      "name": "title",
      "type": "text"
    },
    {
      "name": "year",
      "type": "text"
    },
    {
      "name": "description",
      "type": "text"
    }
  ]
  
  
  async function getBookTypes(){
    const { data } = await api.get('/authors')
    return data
  }

  const bookTypesOptions = getBookTypes()
  console.log(bookTypesOptions)

  return(
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        {fields.map(({name, type}: any)=>(
          <>
            <label key={name} htmlFor={name}>{name}</label>
            <input key={type} {...register(name)} type={type} name={name}/>
          </>
          ))}
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}