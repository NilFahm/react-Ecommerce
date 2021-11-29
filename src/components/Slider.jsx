import {useState} from "react"
import styled from "styled-components"
import ArrowLeftOutlined from "@material-ui/icons/ArrowLeftOutlined"
import ArrowRightOutlined from "@material-ui/icons/ArrowRightOutlined"
import { SliderItems } from "../data/data"

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius: 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition:1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    display:flex;
    align-items:center;
    height:100vh;
    width:100vw;
    background-color:#${props=>props.bg}
`
const ImageContainer = styled.div`
    flex:1;
    height:100%;
    position:relative;
    align-items:center;
    justify-content:center;
`
const Image = styled.img`
    height:80%;
    postition:absolute;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
    height:80%;
`

const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin:50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`
const test = styled.div``



const Slider = () => {
   const[slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1:2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SliderItems.map((item) => (<Slide key={item.id} bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img}></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>))}
                
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
