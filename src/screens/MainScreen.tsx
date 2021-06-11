import { useRecentlyPlayedTracks } from 'api/spotify/player'

const MainScreen = (): JSX.Element => {
  const { data } = useRecentlyPlayedTracks()

  return (
    <div>
      MainScreen
      {JSON.stringify(data)}
    </div>
  )
}

export { MainScreen }
