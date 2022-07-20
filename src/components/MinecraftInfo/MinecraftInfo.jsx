import React from 'react'

const MinecraftInfo = props => {
    const Style = {
        margin-top: '0',
        margin-bottom: '0'
    }

    return(
        <section style={Style} className="minecraft-intro">
            {props.children}
        </section>
    )
}

export default MinecraftInfo