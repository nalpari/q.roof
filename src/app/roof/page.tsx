'use client'

import Hero from '@/components/Hero'
import Roof from '@/components/Roof'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function roofPage() {
  const NoSSRComponent = dynamic(() => import('@/components/Roof'), {
    ssr: false,
  })

  const [shapes, setShapes] = useState<IShape[]>([])

  const addShape = () => {
    setShapes([
      ...shapes,
      {
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: 'white',
        stroke: 'black',
        id: uuidv4(),
      },
    ])
  }

  useEffect(() => {
    console.log(shapes)
  }, [shapes])

  interface IShape {
    x: number
    y: number
    width: number
    height: number
    fill: string
    stroke: string
    id: string
  }

  interface IShapeProps {
    shapes: IShape[]
    setShapes: React.Dispatch<React.SetStateAction<IShape[]>>
  }

  const shapeProps: IShapeProps = {
    shapes,
    setShapes,
  }

  return (
    <>
      <Hero title="Drawing on canvas 2D Roof" />
      <div>
        <button
          className="w-30 mx-2 p-2 rounded bg-blue-500 text-white"
          onClick={addShape}
        >
          ADD BOX
        </button>
      </div>
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4 m-4 border">
        <Roof props={shapeProps} />
      </div>
    </>
  )
}
