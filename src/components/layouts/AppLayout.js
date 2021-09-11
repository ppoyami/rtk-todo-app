import iphone from '@/img/iphone.png';

export default function AppLayout({ children }) {
  return (
    <div className="relative">
      <img src={iphone} alt="iphone" />
      <main className="absolute top-16 bottom-16 left-5 right-5 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
