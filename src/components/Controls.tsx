import React from 'react'

type ControlsProps = {
  width: number
  setWidth: (n: number) => void
  amount: number
  setAmount: (n: number) => void
}

export const Controls: React.FC<ControlsProps> = ({
  width,
  setWidth,
  amount,
  setAmount
}) => {
  return (
    <form>
      <div className='controls'>
        <div className='control-item'>
          <label>amount</label>
          <label>
            <input
              type='radio'
              value='1'
              checked={amount === 1}
              onChange={e => {
                setAmount(parseInt(e.target.value))
              }}
            />
            1
          </label>
          <label>
            <input
              type='radio'
              value='12'
              checked={amount === 12}
              onChange={e => {
                setAmount(parseInt(e.target.value))
              }}
            />
            12
          </label>
          <label>
            <input
              type='radio'
              value='13'
              checked={amount === 13}
              onChange={e => {
                setAmount(parseInt(e.target.value))
              }}
            />
            13
          </label>
        </div>
        <div className='control-item'>
          <label>width</label>
          <input
            type='range'
            min='400'
            max='1200'
            name='width'
            value={width}
            onChange={e => {
              setWidth(parseInt(e.target.value))
            }}
          />
        </div>
      </div>
    </form>
  )
}

export default Controls
