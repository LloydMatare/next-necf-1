import { connectToDB } from '@/lib/connectToDB'
import Hero from '@/models/(home)/hero'
import React from 'react'
import ImageSlider from './imageSlider'

export async function loadHero() {
  await connectToDB()
  const heros = await Hero.find()
  return heros
}


async function MainHero() {

  const heros = await loadHero()

  console.log(heros);

  const hero = heros

  const slides = [
    {
      image: hero[0]?.image,
      title: hero[0]?.title,
      description: hero[0]?.description
    },
    {
      image: hero[1]?.image,
      title: hero[1]?.title,
      description: hero[1]?.description
    },
    {
      image: hero[2]?.image,
      title: hero[2]?.title,
      description: hero[2]?.description
    },
    {
      image: hero[3]?.image,
      title: hero[3]?.title,
      description: hero[3]?.description
    },
  ]
    .filter((s) => Boolean(s?.image) && Boolean(s?.title));



  return (
    <div className="relative">

      {/* {
        heros.map((hero: any) => (
          <ImageSlider
            key={hero._id}
            images={hero.image}
          />
        ))
      } */}

      <ImageSlider slides={slides} />

    </div>
  )
}

export default MainHero
