import DataForm from './components/dataForm';

const Home = () => {
  return (
    <main className='flex min-h-screen items-center justify-around p-24'>
      <DataForm />
      <section className='flex flex-col bg-white p-12 rounded-lg shadow gap-4'>asda</section>
      <p className='fixed bottom-4 right-4 text-gray-400'>&copy; Dominik Czekański 2023</p>
    </main>
  );
};

export default Home;
