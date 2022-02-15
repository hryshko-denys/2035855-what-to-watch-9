import MainComponent from '../main-component/main-component';

type DataType = {
  genre: string;
  year: number;
}

type AppProps = {
  data: DataType;
}

function App({ data }: AppProps): JSX.Element {
  return <MainComponent data={data} />;
}

export default App;
