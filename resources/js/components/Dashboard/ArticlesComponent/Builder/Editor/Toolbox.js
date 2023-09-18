import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import { Element, useEditor } from "@craftjs/core";
import { Container } from '../User/Container';
import { Button } from '../User/Button';
import { Text } from '../User/Text';
import { Image } from '../User/Image';

export const Toolbox = () => {
    const { connectors, query } = useEditor();
    return (
        <Box px={2} py={2}>
            <Grid container direction="column"  alignItems="center" justifyContent="center" spacing={1}>
                <Box pb={2}>
                    <Typography>Drag to add</Typography>
                </Box>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Button size="small" children="Click me" variant="contained" color="primary" />)} variant="contained">Button</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Text text="Hi world" />)} variant="contained">Text</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Container</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Image width={100} height={200} Url={'https://kravmaganewcastle.com.au/wp-content/uploads/2017/04/default-image-620x600.jpg'} />)} variant="contained">Image</MaterialButton>
                </Grid>
            </Grid>
        </Box>
    )
}
