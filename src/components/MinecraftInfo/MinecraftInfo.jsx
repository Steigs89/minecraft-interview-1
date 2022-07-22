import React from 'react';

const MinecraftInfo = props => {
    const Style = {
        margintop: '0',
        marginbottom: '0'
    }

    return(
        <section style={Style} className="minecraft-intro">
            {props.children}
        </section>
    )
}

export default MinecraftInfo;