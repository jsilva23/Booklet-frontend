import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateAccountForm from '@/components/auth/create-account-form';
import LoginAccountForm from '@/components/auth/login-account-form';

export default async function Home() {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <Tabs defaultValue='create-account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='create-account'>Criar conta</TabsTrigger>
          <TabsTrigger value='login'>Login</TabsTrigger>
        </TabsList>
        <TabsContent value='create-account'>
          <CreateAccountForm />
        </TabsContent>
        <TabsContent value='login'>
          <LoginAccountForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
