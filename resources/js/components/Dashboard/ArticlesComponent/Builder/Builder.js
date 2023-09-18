import React from "react";
import { Typography, Paper, Grid } from '@material-ui/core';
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from "./Editor/Toolbox";
import { SettingsPanel } from './Editor/SettingsPanel';
import { Topbar } from "./Editor/Topbar";
import { Container } from "./User/Container";
import { Card, CardTop, CardBottom } from './User/Card';
import { Button } from "./User/Button";
import { Text } from "./User/Text";
import { Image } from "./User/Image";
import { Link } from "react-router-dom";
import { defaultImage } from './Config';

const Builder = () => {
    return (
        <div style={{margin: "0 auto", width: "1000px"}}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
             }}>
                <Link style={{ margin: '3px 25px' }} to='/articles'>Back</Link>
                <Typography variant="h5" align="center">Courses-land Article Builder</Typography>
            </div>
            <Editor resolver={{Card, CardTop, CardBottom, Button, Text, Container, Image}}>
                <Topbar />
                <Grid container spacing={3} style={{paddingTop: "10px"}}>
                    <Grid item xs>
                        <Frame>
                            <Element is={Container} padding={5} background="#eee" canvas> // Canvas Node of type Container, droppable
                                <Button size="small" children="Click me" variant="contained" color="primary" />
                                <Text text="Hi world!" fontSize={20} />
                                <Image Url={defaultImage.url} width={100} height={200}  />
                                <Element is={Container} padding={2} background="#999" canvas> // Canvas Node of type Container, droppable and draggable
                                    <Text size="small" text="It's me again!" />
                                </Element>
                            </Element>
                        </Frame>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>
                            <Toolbox />
                            <SettingsPanel />
                        </Paper>
                    </Grid>
                </Grid>
            </Editor>
        </div>
    )
}

export default Builder;
