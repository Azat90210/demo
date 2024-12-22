import { PageLayout } from '../../components/layout/PageLayout'
import { useCounter } from '../../hooks/useCounter'

const Home: React.FC = () => {
  const { count, incrementCounter, decrementCounter } = useCounter()

  return (

    <PageLayout>  
			<div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
				<h1 className="text-4xl">Счетчик: {count}</h1>
				<div className="mt-4">
					<button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={incrementCounter}>
						Увеличить
					</button>
					<button className="bg-red-500 text-white px-4 py-2" onClick={decrementCounter}>
						Уменьшить
					</button>
				</div>
			</div>
		</PageLayout>
  )
}

export default Home
