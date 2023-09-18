import React, { useState } from "react";
import { Paper, FormControl, FormLabel, Slider } from "@material-ui/core";
import { SketchPicker } from 'react-color';
import { useNode } from "@craftjs/core";

export const Container = ({background, padding = 0, children}) => {
    const { connectors: {connect, drag} } = useNode();
    return (
        <Paper ref={ref=> connect(drag(ref))} style={{ margin: "5px 0", background, padding: `${padding}px` }}>
            {children}
        </Paper>
    )
}

export const ContainerSettings = () => {
    const { background, padding, actions: {setProp} } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding
    }));

    const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

    return (
        <div>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Background</FormLabel>
                <SketchPicker
                    color={blockPickerColor}
                    onChange={(color) => {
                        setBlockPickerColor(color.hex);
                        setProp(props => props.background = color.hex);
                    }}
                />
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Padding</FormLabel>
                <Slider value={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
            </FormControl>
        </div>
    )
}

export const ContainerDefaultProps = {
    background : "#ffffff",
    padding: 3
};

Container.craft = {
    related: {
        settings: ContainerSettings
    },
    props: ContainerDefaultProps
}
