import LayoutLink from '@/components/layout/link';

type PageProps = {
  params: {
    id: string;
  };
};

// fetch data demo
// async function getData() {
//   try {
//     // cache 10s
//     const res = await fetch('http://127.0.0.1:3000/api/post', {
//       next: { revalidate: 10 }
//     });
//     return res.json();
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

export default async function Page({ params }: PageProps) {
  // const data = await getData();
  return (
    <div className="w-full space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{params.id}</h1>
      <LayoutLink href={'/' + new Date().toISOString()}>next</LayoutLink>
    </div>
  );
}
