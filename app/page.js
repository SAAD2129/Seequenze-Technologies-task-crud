'use client'
import Card from '@/components/Card'
import DashboardLayout from '@/layout/DashboardLayout'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Home() {
  const [images, setImages] = useState([])
  const getImage = async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    console.log(data)
    setImages(data)

  }
  useEffect(() => {
    getImage()
  }, [])
  return (
    <DashboardLayout>
      <div className=" w-full py-8 px-12">
        <div className="grid grid-cols-12 gap-8">

          {images?.map(image => {
            return <Card key={image.id} author={image.author} url={image.download_url} />
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
