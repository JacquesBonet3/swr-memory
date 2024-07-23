import { useState } from 'react';

import './App.css';
import { useCreateGameMutation, useGameResolveMutation } from './api/game.ts';
import { Game } from './components/Game.tsx';
import { EmptyGame, GameType } from './types/game.type.ts';

function App() {
  const { trigger: createGameMutation } = useCreateGameMutation();
  const { trigger: gameResolveMutation } = useGameResolveMutation();
  const [gameData, setGameData] = useState(EmptyGame);
  const handleCreate = async () => {
    const { data } = await createGameMutation<GameType>({ level: 'easy' });
    setGameData(data);
  };
  const handleResolve = async (positions: [number, number], id: string) => {
      const { data } = await gameResolveMutation<GameType>({ positions, _arg1: id });
      setGameData(data);
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div className="card">
        <button onClick={handleCreate}>Create a party</button>
      </div>
      {gameData && <Game {...gameData} onResolve={handleResolve} />}
    </>
  );
}

export default App;
