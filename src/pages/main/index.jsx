import React, { useState } from 'react';
import { Container } from './style';
import logo from '../../assets/img/undraw_fashion_photoshoot_mtq8.svg';
import likeWhite from '../../assets/img/icons8-like-64.png';
import likeGreen from '../../assets/img/icons8-like-64-green.png';
import dislikeWhite from '../../assets/img/icons8-dislike-64.png';
import dislikeRed from '../../assets/img/icons8-dislike-64-red.png';
import Header from '../../components/header';
import { Green, Red, White } from '../../components/UI/variables';

const MainContent = () => {

    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    const handleLike = () => {
        if(dislike){
            setDislike(false)
            setLike(true)
        }else{
            setLike(true)
        }
    }
    const handleDislike = () => {
        if(like){
            setLike(false)
            setDislike(true)
        }else{
            setDislike(true)
        }
    }

    return(
        <Container>
            <Header />
            <div id='home'>
                <h1>Digital Photography</h1>
                <img src={logo} alt="logo" />
            </div>
            <div className='video-container' id='video'>
                <iframe src="https://www.youtube.com/embed/zxi-TFE3hfk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div>
                    <figure>
                        {like ? 
                            <img src={likeGreen} alt="like" onClick={handleLike}/>
                        :
                            <img src={likeWhite} alt="like" onClick={handleLike}/>
                        }
                        <figcaption className='like' style={{color:`${like ? Green : White}`}}>
                            Like
                        </figcaption>
                    </figure>  
                    <figure>
                        {dislike ?
                            <img src={dislikeRed} alt="dislike" onClick={handleDislike}/>
                        :
                            <img src={dislikeWhite} alt="dislike" onClick={handleDislike}/>
                        }
                        <figcaption className='dislike' style={{color:`${dislike ? Red : White}`}}>
                            Dislike
                        </figcaption>
                    </figure>
                </div>     
            </div>
        </Container>
    )
}

export default MainContent;