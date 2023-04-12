export interface PlayerInfo extends PublicPlayerInfo {
  user: string
}

export interface PublicPlayerInfo {
  char_name: string
  pronouns: string
  description: string
}

export interface Player extends PlayerInfo {
  inventory: string[]
  progress: any
}
