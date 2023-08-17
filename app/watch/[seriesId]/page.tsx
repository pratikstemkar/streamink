const Series = ({ params }: { params: { seriesId: string } }) => {
  return (
    <main className="flex flex-col items-center justify-center px-10 m-auto mt-5 space-y-5">
      <div className="w-full">{params.seriesId}</div>
    </main>
  );
};

export default Series;
