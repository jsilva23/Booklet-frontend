'use client'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  fullName: z.string({
    required_error: 'O e-mail é obrigatório',
  }),
  email: z
    .string({
      required_error: 'O e-mail é obrigatório',
    })
    .email({
      message: 'Deve ser um e-mail válido',
    }),
  password: z
    .string({
      required_error: 'A senha é obrigatório',
    })
    .min(7, {
      message: 'A senha deve ter pelo menos 7 caracteres',
    })
    .max(12),
});

const CreateAccountForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  return (
    <div className='w-full flex flex-col justify-center items-center space-y-2'>
      <Form {...form}>
        <form className='w-full flex flex-col space-y-4'>
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder='Nome completo' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder='E-mail' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Senha' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>Criar conta como Autor</Button>
          <Button type='submit'>Criar conta como Leitor</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateAccountForm;
