'use client';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  // const reportSentry = async (error: Error) => {
  //   console.log('🚀🚀🚀 ~ reportSentry ~ error', error);
  //   await Sentry.captureException(error);
  // };

  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error('TOP LEVEL ERROR', error);
  //   reportSentry(error);
  // }, [error]);
  console.log(error);

  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center">
      <h1>Something wrong happened.</h1>
      <div
        onClick={() => reset()}
        className="mt-12 flex h-[36px] w-[130px] cursor-pointer items-center justify-center rounded-[20px] bg-[#343434]"
      >
        <p className="text-left text-sm text-white">try again</p>
      </div>
    </div>
  );
}
