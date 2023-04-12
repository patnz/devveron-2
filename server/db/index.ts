import connection from './connection'
import { Player, PlayerInfo } from '../../models/player'

export function addPlayer(
  player: PlayerInfo,
  db = connection
): Promise<Player> {}
