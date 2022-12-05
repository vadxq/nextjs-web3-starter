type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{params.id}</h1>
    </div>
  );
}
