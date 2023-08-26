
import React from 'react';
import './index.css'
import Navbar from './Navbar';
import Moviescomponent from './Moviescomponent';
export default function Movies() {
    return (
        <>
       <Navbar/>
        <h1 className="heading_style">Top Netflix Movies</h1>
      <h2 className="heading2">Sit back and Enjoy the best movies & web series of all time. </h2>
      <Moviescomponent img="https://th.bing.com/th/id/OIP.xX9hWMhHRY_hqDpUhx72KAHaJ4?pid=ImgDet&rs=1"
        link="https://www.netflix.com/in/title/80192098" title="Money Heist" />
      <Moviescomponent img="https://th.bing.com/th/id/OIP.H3pK1GeRRxQd9xPW7UyDewHaKj?pid=ImgDet&rs=1"
        link="https://www.netflix.com/in/title/70184054" title="Johnny English" />
      <Moviescomponent img="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/12/Uncharted-poster.jpg" link="https://www.netflix.com/in/title/81199140" title="Uncharted" />
      <Moviescomponent img="https://media.movieassets.com/static/images/items/movies/posters/a8f2bbff431495ac22320455109744e8.jpg" link="https://www.netflix.com/in/title/70131314" title="Inception" />
      <Moviescomponent img="https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg" link="https://www.netflix.com/in/title/70305903" title="Interstellar" />
      <Moviescomponent img="https://th.bing.com/th/id/OIP.aFqTeDi0c5zKZr0FcvhvmQHaKe?pid=ImgDet&rs=1" link="https://www.netflix.com/in/title/80057281" title="Stranger Things" />
        </>
    );
}









