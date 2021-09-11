export default function TodoList({ children }) {
  return (
    <ul className="w-full flex flex-col items-start overflow-y-auto">
      {children}
    </ul>
  );
}
