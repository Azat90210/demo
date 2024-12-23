import { observer } from 'mobx-react-lite';
import { counterStore } from '@/store/counterStore';
import { PageLayout } from '@/components/layout/PageLayout';

const Home: React.FC = observer(() => {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl">Счетчик: {counterStore.count}</h1>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 mr-2"
            onClick={() => counterStore.increment()}
          >
            Увеличить
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2"
            onClick={() => counterStore.decrement()}
          >
            Уменьшить
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 ml-2"
            onClick={() => counterStore.reset()}
          >
            Обнулить
          </button>
        </div>
      </div>
    </PageLayout>
  );
});

export default Home;
