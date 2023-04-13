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
      gold: 0,
      location: 'town-square',
      progress: {},
      inventory: [],
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
          return {
            ...player,
            inventory: JSON.parse(player.location),
            progress: JSON.parse(player.process),
          }
        }
        default:
          throw Error('Multiple players found')
      }
    })
}

export function getPlayerProfiles(
  users: string[],
  db = connection
): Promise<PlayerInfo[]> {
  return db('players')
    .select('user', 'char_name', 'pronouns', 'description')
    .whereIn('user', users)
}

export function updatePlayer(player: Player | PlayerInfo, db = connection) {
  return db('players').update(player).where('user', player.user)
}
