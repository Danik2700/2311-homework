import './App.css'
import "./index.css"
import Header from './components/header/index'
import Post from './components/post/index'

const post = [
  {
    id:1,
    word:"Hello,world!"
  }
];

const post2 =[
  {
    id : 2,
    name: "Authors",
    title: "Topics",
    numberDate: "7",
    month: "july"
  }
];



function App() {
  return (
    <div className="body">
    {
      post.map(item => <Header key={item.id} word={item.word}/>)
    },
    
    {
      post2.map(item => <Post key={item.id}
        name={item.name}
        title={item.title}
        numberDate={item.numberDate}
        month={item.month}/>)
    }


    
  
    </div>
  );
}

export default App;