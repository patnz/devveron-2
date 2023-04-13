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
