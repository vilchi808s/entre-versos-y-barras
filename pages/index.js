import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Entre versos y barras</title>
        <meta name="description" content="Exploramos el significado detrás de cada verso. Análisis completo de letras con doble sentido, emociones y referencias culturales." />
        <meta name="keywords" content="letras, análisis, barras, rap, trap, doble sentido, poesía, canciones, significado" />
        <meta name="author" content="vilchi808s" />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Entre versos y barras</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
          Letras que dicen más de lo que suenan. Análisis profundo de cada línea, verso y emoción.
        </p>
        <button style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '0.5rem',
          border: 'none',
          backgroundColor: '#111',
          color: 'white',
          cursor: 'pointer'
        }}>
          Ver análisis
        </button>
      </main>
    </>
  );
}
