import { lazy, Suspense } from 'react'

const Fotos =lazy(() => import('./Fotos'))
const Titulo =lazy(() => import('./Titulo')) 
const Footer =lazy(() => import('./Footer'))

function App() {
  return (
    <div className="App container">
      <Suspense fallback={ <p>Carregando ...</p>}>
          <Titulo />
        </Suspense>
        <Suspense fallback={ <p>Carregando ...</p>}>
          <Fotos/>
        </Suspense>
        <Suspense fallback={ <p>Carregando ...</p>}>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;
