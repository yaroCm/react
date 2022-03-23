export const Error = ({ error }: { error: string }) => {
  return (
    <p className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-10 rounded-md'>
      {error}
    </p>
  );
};
