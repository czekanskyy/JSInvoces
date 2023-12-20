import DataForm from './components/dataForm';

const Home = () => {
  return (
    <main className='grid place-content-center p-8'>
      <DataForm />
      <p className='fixed bottom-4 right-4 text-gray-400'>&copy; Dominik Czekański 2023</p>
    </main>
  );
};

export default Home;
