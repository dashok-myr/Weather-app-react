import React, { Component } from 'react'
import StarfieldAnimation from 'react-starfield-animation'
import stars from "./stars.jpg"

class HeroBackground extends Component {
    render() {
        return (
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${stars}`,
                    backgroundSize: 'stretch',
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                numParticles={400}
            />


        )
    }
}

export default HeroBackground
