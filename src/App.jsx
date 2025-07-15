import useStore from './store'

function App() {
  const bears = useStore(state => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  const removeAllBears = useStore((state) => state.removeAllBears)
  const updateBears = useStore((state) => state.updateBears)

  return (
    <div>
      Total Bears: {bears}
      <br />
      <button onClick={increasePopulation}>Add a Bear</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
      <button onClick={() => updateBears(20)}>Update Bears</button>
    </div>
  )
}

export default App
