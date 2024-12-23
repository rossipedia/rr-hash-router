import { useLoaderData } from 'react-router';

export function loader() {
  return {
    name: 'Home',
  };
}

export function Component() {
  const { name } = useLoaderData<typeof loader>();
  return <div>{name}</div>;
}
