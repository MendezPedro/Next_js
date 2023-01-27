import Head from 'next/head'
import Image from 'next/image'



export default function Home({game}) {
  return (
    <div
    title="Home | desafío Latam"
    description="Descripción de Desafío Latam"
    >
      
      <div>
          {
            game.map(gam => (
              <div key={gam.id}>
                <h4>{gam.title}</h4>
                <img src={gam.thumbnail} alt="" />
                <p>{gam.short_description}</p>
                <a href={gam.game_url}>{gam.game_url}</a>
              </div>
            ))
          }
      </div>

    </div>
  )
}


export const getServerSideProps = async (context)=>{
  const res = await fetch("https://www.freetogame.com/api/games")
  const games = await res.json()

  return {
    
    props:{
      game : games
    }
  }
}
