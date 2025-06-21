export default function VersoExplicado({ verso, explicacion }) {
  return (
    <div className="border-b pb-4">
      <details className="cursor-pointer">
        <summary className="font-semibold text-lg">{verso}</summary>
        <p className="text-sm text-gray-500 mt-2">{explicacion}</p>
      </details>
    </div>
  );
}
