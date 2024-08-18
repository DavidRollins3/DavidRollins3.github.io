function App() {

  const [user, setUser] = useState([])

  async function getData(username){
    try{
      const response = await fetch(`https://xatme.com/api/me/${username}`)
      const result = await response.json()
      setUser(result)
    }
    catch(err){
      console.log('Error: ', err)
    }
  }

  useEffect(() => {
    getData('tests')
  }, [])

  return (
    <div className="App">
      <Load load={user} />
      <Content data={user} />
    </div>
  );
}

export default App;
