import React, { useState } from "react";
import ContentEditable from 'react-contenteditable';
import { useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import { SketchPicker } from 'react-color';

export const Text = ({text, fontSize, color, background, textAlign}) => {
    const { connectors: {connect, drag}, isActive, actions: {setProp} } = useNode((node) => ({
        isActive: node.events.selected
    }));

    const [editable, setEditable] = useState(false);

    return (
        <div
            ref={ref => connect(drag(ref))}
            onClick={e => setEditable(true)}
        >
            <ContentEditable
                disabled={!editable}
                html={text}
                onChange={e =>
                    setProp(props =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                    )
                }
                tagName="p"
                style={{fontSize: `${fontSize}px`, color: color, background: background, textAlign: textAlign}}
            />
        </div>
    )
}


const TextSettings = () => {
    const { actions: {setProp}, fontSize, textAlign } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        textAlign: node.data.props.textAlign
    }));

    const [colorPickerColor, setColorPickerColor] = useState("#37d67a");
    const [backgroundPickerColor, setBackgroundPickerColor] = useState("#37d67a");

    return (
        <>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Color</FormLabel>
                <SketchPicker
                    color={colorPickerColor}
                    onChange={(color) => {
                        setColorPickerColor(color.hex);
                        setProp(props => props.color = color.hex);
                    }}
                />
            </FormControl>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <FormLabel component="legend">Background</FormLabel>
                <SketchPicker
                    color={backgroundPickerColor}
                    onChange={(color) => {
                        setBackgroundPickerColor(color.hex);
                        setProp(props => props.background = color.hex);
                    }}
                />
            </FormControl>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Font size</FormLabel>
                <Slider
                    value={fontSize || 7}
                    step={7}
                    min={1}
                    max={50}
                    onChange={(_, value) => {
                        setProp(props => props.fontSize = value);
                    }}
                />
            </FormControl>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Text align</FormLabel>
                <RadioGroup value={textAlign} onChange={(e) => setProp(props => props.textAlign = e.target.value )}>
                    <FormControlLabel label="Left" value="left" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Center" value="center" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Right" value="right" control={<Radio size="small" color="primary" />} />
                </RadioGroup>
            </FormControl>
        </>
    )
}

Text.craft = {
    related: {
        settings: TextSettings
    },
    props: {
        text: "Hi",
        fontSize: 20,
        color: '#000',
        background: 'transparent',
        textAlign: 'left'
    },
}
