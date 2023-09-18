import React, { useState } from "react";
import { useNode } from "@craftjs/core";
import {FormControl, FormLabel, Slider, Button} from "@material-ui/core";
import axios from "axios";
import { defaultImage } from '../Builder';

const serverURL = 'http://127.0.0.1:8000';

export const Image = ({width, height, Url = defaultImage.url}) => {
    const { connectors: {connect, drag} } = useNode();

    return (
       <img ref={ref => connect(drag(ref))} src={Url} width={width + '%'} height={height + 'px'} style={{borderRadius:'25px'}} />
    )
}

const ImageSettings = () => {
    const { actions: {setProp}, props } = useNode((node) => ({
        props: node.data.props
    }));

    const [snackbarMessage, setSnackbarMessage] = useState();

    return (
        <>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Width</FormLabel>
                <Slider
                    value={props.width || 100}
                    step={1}
                    min={1}
                    max={100}
                    onChange={(_, value) => {
                        setProp(props => props.width = value);
                    }}
                />
            </FormControl>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">Height</FormLabel>
                <Slider
                    value={props.height || 200}
                    step={1}
                    min={1}
                    max={500}
                    onChange={(_, value) => {
                        setProp(props => props.height = value);
                    }}
                />
            </FormControl>
            <FormControl component="fieldset" style={{ marginBottom: "15px", width: '100%' }}>
                <Button variant="contained" component="label">Upload File
                    <input type="file" accept="image/png, image/gif, image/jpeg, image/jpg"  hidden onChange={(event) => {
                        if (!event.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) alert('"Please select only images"')
                        else {
                            let formData = new FormData()
                            let imageFile = event.target.files[0];
                            formData.append("image", imageFile);
                            axios.post(`${serverURL}/api/upload-builder-image`, formData).then((res) => setProp(props => props.Url = serverURL + '/' + res.data))
                        }
                    }} />
                </Button>
            </FormControl>
        </>
    )
}

Image.craft = {
    related: {
        settings: ImageSettings
    },
    props: {
        width: 100,
        height: 200,
        Url: 'http://127.0.0.1:8000/images/default-image.jpg',
    },
}
