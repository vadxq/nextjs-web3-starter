import LayoutLink from '@/components/layout/link';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{params.id}</h1>
      <LayoutLink href={'/' + new Date().toISOString()}>next</LayoutLink>
    </div>
  );
}
