export interface PlayerInfo {
  char_name: string
  pronouns: string
  description: string
  user: string
}

export interface Player extends PlayerInfo {
  inventory: string[]
  location: string
  progress: Progress
  gold: number
}

export interface ActivePlayer {
  id: string
  name: string
  pronouns: string
  description: string
  location: string
}

export interface Progress {
  quests: Record<string, number>
  events: Record<string, boolean>
}
