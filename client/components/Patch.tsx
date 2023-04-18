import { useState } from 'react'
import { Player } from '../../models/player'

interface Props {
  player: Player
  updateEvents: (events: Record<string, boolean>) => void
}

export default function Patch({ player, updateEvents }: Props) {
  const {
    progress: { events },
  } = player
  const [convoStage, setConvoStage] = useState(0)

  const handleQuestion = () => {
    setConvoStage(2)
    updateEvents({ metPatch: true })
  }

  return (
    <div className="character">
      <p>
        {events.metPatch ? 'Patch' : 'A witch in a pointy hat'} sits behind the
        Salon&apos;s counter, their hair slowly and subtly changing color...
      </p>
      {convoStage === 0 ? (
        <button className="action-text-button" onClick={() => setConvoStage(1)}>
          Talk to {events.metPatch ? 'Patch' : 'them'}.
        </button>
      ) : convoStage === 1 ? (
        <>
          {events.metPatch ? (
            <p className="npc-quote">
              Hello again {player.char_name}! What can I help you with today?
            </p>
          ) : (
            <p className="npc-quote">
              Hi there! I&apos;m Patch and this is my Salon. It&apos;s a
              pleasure to meet you!
            </p>
          )}
          <button className="action-text-button" onClick={handleQuestion}>
            How does this salon work?
          </button>
        </>
      ) : (
        <>
          <p className="player-quote">How does this Salon work?</p>
          <p className="npc-quote">
            Just stare into this Magic Mirror I made and focus on what you want
            to look like. Neat, huh!
          </p>
        </>
      )}
    </div>
  )
}
