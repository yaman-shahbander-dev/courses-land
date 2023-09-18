import React from "react";
import { Text } from './Text';
import { Button } from './Button';
import { Container } from './Container';
import { ContainerSettings } from './Container';
import { ContainerDefaultProps } from './Container';
import { useNode, Element } from "@craftjs/core";

export const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
            <Element id="text" is="div" canvas>
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </Element>
            <Element id="buttons" is="div" canvas>
                <Button size="small" children="Learn more" variant="contained" color="primary" />
            </Element>
        </Container>
    )
}


export const CardTop = ({children}) => {
    const { connectors: {connect} } = useNode();
    return (
        <div ref={connect} className="text-only">
            {children}
        </div>
    )
}

CardTop.craft = {
    rules: {
        // Only accept Text
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
    }
}

export const CardBottom = ({children}) => {
    const { connectors: {connect} } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardBottom.craft = {
    rules: {
        // Only accept Text
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
    }
}


Card.craft = {
    related: {
        // Since Card has the same settings as Container, we'll just reuse ContainerSettings
        settings: ContainerSettings
    },
    props: ContainerDefaultProps
}
