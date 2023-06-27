"use client"

import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('Campo 1 é obrigatório')
});

type FormData = z.infer<typeof schema>;

export default function NewAuthor() {
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

  return(
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor="name">Teste</label>
        <input {...register(`name`)} type="text" name='name'/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}