import connection from './connection'
import { Player, PlayerInfo } from '../../models/player'

export function addPlayer(
  player: PlayerInfo,
  db = connection
): Promise<Player> {
  return db('players')
    .insert(player)
    .then(() => ({
      ...player,
      gold: 20,
      location: 'town-square',
      progress: { quests: {}, events: {} },
      inventory: ['Ruby', 'Pocketknife'],
    }))
}

export function getPlayer(
  user: string,
  db = connection
): Promise<Player | undefined> {
  return db('players')
    .select()
    .where({ user })
    .then((result) => {
      switch (result.length) {
        case 0:
          return undefined
        case 1: {
          const [player] = result
          console.log(player)
          return {
            ...player,
            inventory: JSON.parse(player.inventory),
            progress: JSON.parse(player.progress),
          }
        }
        default:
          throw Error('Multiple players found')
      }
    })
}

// export function getPlayerProfiles(
//   users: string[],
//   db = connection
// ): Promise<PlayerInfo[]> {
//   return db('players')
//     .select('user', 'char_name', 'pronouns', 'description')
//     .whereIn('user', users)
// }

export function updatePlayer(player: Player, db = connection) {
  const dbPlayer = {
    ...player,
    inventory: JSON.stringify(player.inventory),
    progress: JSON.stringify(player.progress),
  }
  return db('players').update(dbPlayer).where('user', dbPlayer.user)
}
