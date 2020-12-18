import React from 'react'
import { Link, Magazine } from './Grid'

type CoverProps = {
  magazine: Magazine
  className: string
  width: number
  featured?: boolean
  links?: Link[]
}

export const Cover: React.FC<CoverProps> = ({
  magazine,
  className,
  width,
  links = [],
  featured = false
}) => {
  return (
    <div className={className}>
      <a href={`https://www.officer.com/magazine/${magazine.id}`}>
        <img
          style={{ width, height: (width / 8.5) * 11 }}
          src={magazine.image}
          alt={`${magazine.title} cover`}
        />
        {featured ? (
          <div className='featured-info' style={{ fontSize: width / 28 }}>
            <div className='featured-title'>{magazine.title}</div>
            <div className='btn-group'>
              {links.map(link => (
                <a href={link.url}>
                  <button className='btn'>{link.text}</button>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </a>
    </div>
  )
}

export default Cover
