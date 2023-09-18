import React from "react";
import { Button as MaterialButton, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { useNode } from "@craftjs/core";

export const Button = ({size, variant, color, children, URL}) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <MaterialButton ref={ref => connect(drag(ref))} size={size} variant={variant} color={color} onClick={
            (e) => {
                if (window.location.protocol + "//" + window.location.host + window.location.pathname ===
                    window.location.protocol + "//" + window.location.host + "/buildArticle") {
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    window.location.href= URL;
                }
            }
        }>
            {children}
        </MaterialButton>
    )
}

const ButtonSettings = () => {
    const { actions: {setProp}, props } = useNode((node) => ({
        props: node.data.props
    }));

    return (
        <div>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Size</FormLabel>
                <RadioGroup value={props.size} onChange={(e) => setProp(props => props.size = e.target.value )}>
                    <FormControlLabel label="Small" value="small" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Medium" value="medium" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Large" value="large" control={<Radio size="small" color="primary" />} />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Variant</FormLabel>
                <RadioGroup value={props.variant} onChange={(e) => setProp(props => props.variant = e.target.value )}>
                    <FormControlLabel label="Text" value="text" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Outlined" value="outlined" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Contained" value="contained" control={<Radio size="small" color="primary" />} />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Color</FormLabel>
                <RadioGroup value={props.color} onChange={(e) => setProp(props => props.color = e.target.value )}>
                    <FormControlLabel label="Default" value="default" control={<Radio size="small" color="default" />} />
                    <FormControlLabel label="Primary" value="primary" control={<Radio size="small" color="primary" />} />
                    <FormControlLabel label="Secondary" value="secondary" control={<Radio size="small" color="primary" />} />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" style={{ marginBottom: "15px", width: '100%' }}>
                <TextField id="standard-basic" label="Button text" variant="standard" onChange={(e) => setProp(props => props.children = e.target.value )} />
            </FormControl>
            <FormControl component="fieldset" style={{ marginBottom: "15px", width: '100%' }}>
                <TextField id="standard-basic" label="URL" variant="standard" onChange={(e) => setProp(props => props.URL = e.target.value )} />
            </FormControl>
        </div>
    )
};

Button.craft = {
    related: {
        settings: ButtonSettings
    },
    props: {
        size: "small",
        variant: "contained",
        color: "primary",
        children: "Click me",
        URL: 'https://www.google.com/'
    },
}
