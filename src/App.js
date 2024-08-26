import Header from "./components/Header/Header"
import Lesson from "./pages/Lesson"
import data from "./helper/data.js"





function App() {

  return (

   <div>
    <Header/>
    <Lesson data={data}/>
   </div>
  )
}

export default App;
