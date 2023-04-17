export interface PlayerInfo {
  char_name: string
  pronouns: string
  description: string
  user: string
}

export interface Player extends PlayerInfo {
  inventory: string[]
  location: string
  progress: any
  gold: number
}

export interface ActivePlayer {
  id: string
  name: string
  pronouns: string
  description: string
  location: string
}
