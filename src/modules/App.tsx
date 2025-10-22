// src/modules/App.tsx
import { Banner } from './Banner'
import { CardsGrid } from './CardsGrid'
import { PromoBanner } from './PromoBanner'
import { CardsGridBottom } from './CardsGridBottom'

export default function App() {
  return (
    <main>
      <Banner />          {/* 1. верхний баннер */}
      <CardsGrid />       {/* 2. первая сетка карточек */}
      <PromoBanner />     {/* 3. чёрный баннер */}
      <CardsGridBottom /> {/* 4. вторая сетка карточек */}
    </main>
  )
}
