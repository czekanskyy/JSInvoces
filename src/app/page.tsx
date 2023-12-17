import A4 from './components/a4';
import DataForm from './components/dataForm';

const Home = () => {
  return (
    <main className='flex flex-col 2xl:flex-row 2xl:h-screen items-center gap-y-4 pb-4 2xl:p-0'>
      <DataForm />
      <section className='2xl:w-1/2 h-full flex flex-col items-center justify-center gap-6'>
        <A4></A4>
        <div className='w-[21cm] flex justify-between'>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md transition-all hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]'>Reset</button>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-md transition-all hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]'>Download</button>
        </div>
      </section>
      <p className='fixed bottom-4 right-4 text-gray-400'>&copy; Dominik Czekański 2023</p>
    </main>
  );
};

export default Home;
