import { useRouter } from 'next/router';

const RouteExemple3 = () => {
  const router = useRouter();
  return <h1>Exemplo de Rota: {router.query.username}</h1>;
};
export default RouteExemple3;
