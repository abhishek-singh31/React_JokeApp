import React from "react"
import Joke from "./components/Joke"
const jokes=[
  {
    "Setup": "I got my daughter a fridge for her birthday.",
    "Punchline": "I can't wait to see her face light up when she opens it."
  },

  {
    "Setup": "How did the hacker escape the police?",
    "Punchline": "He just ransomware!"
  },

  {
    "Setup": "Why don't pirates travel on mountain roads?",
    "Punchline": "Scurvy."
  },

  {
    "Setup": "Why do bees stay in the hive in the winter?",
    "Punchline": "Swarm!"
  },

  {
    "Setup": "What's the best thing about Switzerland?",
    "Punchline": "I don't know, but the flag is a big plus!"
  }
]
function App() {
  return (
    <div>
      <h1>Some Jokes</h1>
      <Joke setup={jokes[0].Setup} punchline={jokes[0].Punchline}/>
      <Joke setup={jokes[1].Setup} punchline={jokes[1].Punchline}/>
      <Joke setup={jokes[2].Setup} punchline={jokes[2].Punchline}/>
      <Joke setup={jokes[3].Setup} punchline={jokes[3].Punchline}/>
      <Joke setup={jokes[4].Setup} punchline={jokes[4].Punchline}/>  
    </div>
  );
}

export default App;
