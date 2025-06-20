import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Entre versos y barras</h1>
      <p>Letras que dicen más de lo que suenan. Análisis profundo de cada línea, verso y emoción.</p>

      <Link href="/Talking">
        <button style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          marginTop: '1rem',
          cursor: 'pointer'
        }}>
          Ver análisis de “Talking”
        </button>
      </Link>
    </main>
  );
}
