import React, { useEffect, useState } from 'react'
import Cover from './Cover'
import '../App.css'

export type Link = {
  text: string
  url: string
}

export type Magazine = {
  id: string
  title: string
  image: string
}

type GridProps = {
  magazines: Magazine[]
  amount: number
  width: number
}

export const Grid: React.FC<GridProps> = ({ magazines, amount, width }) => {
  const [gridMags, setGridMags] = useState<Magazine[]>([])
  const [gridWidth, setGridWidth] = useState(0)
  const [coverMag, setCoverMag] = useState<Magazine | null>()
  const [coverWidth, setCoverWidth] = useState(0)

  useEffect(() => {
    if (amount === 1) {
      setGridMags([])
      setCoverMag(magazines[0])
      setCoverWidth(width)
    }
    if (amount === 12) {
      setCoverMag(null)
      setGridMags(magazines.slice(0, 12))
      setGridWidth(width)
    }
    if (amount === 13) {
      setCoverMag(magazines[0])
      setCoverWidth(width * 0.4)
      setGridMags(magazines.slice(1, 13))
      setGridWidth(width * 0.575)
    }
  }, [amount, magazines, width])

  return (
    <div className='issues-container' style={{ width }}>
      {coverMag ? (
        <div className='issues-feature' style={{ width: coverWidth }}>
          <Cover
            featured={true}
            magazine={coverMag}
            className='issues-featured-cover'
            width={coverWidth}
            links={[
              { text: 'Subscribe', url: 'https://officer.com' },
              { text: 'Digital Edition', url: 'https://officer.com' },
              { text: 'Archives', url: 'https://officer.com' },
              { text: 'Renewal', url: 'https://officer.com' }
            ]}
          />
        </div>
      ) : null}
      {gridMags.length > 0 ? (
        <div
          className='issues-grid'
          style={{ width: gridWidth, gap: gridWidth / 35 }}
        >
          {gridMags.map(m => (
            <Cover
              magazine={m}
              className='issues-cover'
              width={(gridWidth / 35) * 8}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Grid
