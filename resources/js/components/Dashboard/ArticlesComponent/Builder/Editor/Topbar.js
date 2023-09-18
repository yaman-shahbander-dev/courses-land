import React, { useState, useEffect } from "react";
import { Box, FormControlLabel, Switch, Grid, Button as MaterialButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useEditor } from "@craftjs/core";
import swal from 'sweetalert';
import axios from "axios";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';
import {Snackbar} from "@material-ui/core";
import { Container } from '../User/Container';
import { Card } from "../User/Card";
import { Button } from '../User/Button';
import { Text } from '../User/Text';
import { Image } from '../User/Image';

const serverURL = 'http://127.0.0.1:8000';

export const Topbar = () => {
    const { actions, query, enabled } = useEditor((state) => ({
        enabled: state.options.enabled
    }));

    const [snackbarMessage, setSnackbarMessage] = useState();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [stateToLoad, setStateToLoad] = useState(null);
    const [selectedContent, setSelectedContents] = useState(null);

    useEffect(() => {
        const windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl);
        if (params.get('id') !== null) {
            setSelectedContents(params.get('id'));
            axios.get(`${serverURL}/api/content-has-builder-state`, {
                params : {
                    id: params.get('id')
                }
            }).then((res) => {
                if (res.data.builder_state !== null) {
                    setStateToLoad(res.data.builder_state)
                    const json = lz.decompress(lz.decodeBase64(res.data.builder_state));
                    actions.deserialize(json);
                }
            })
        }
    }, [])

    return (
        <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
            <Grid container alignItems="center">
                <Grid item xs>
                    <FormControlLabel
                        control={<Switch checked={enabled} onChange={(_, value) => actions.setOptions(options => options.enabled = value)} />}
                        label="Enable"
                    />
                </Grid>
                <Grid item>
                    <MaterialButton
                        className="copy-state-btn"
                        size="small"
                        variant="outlined"
                        color="secondary"
                        onClick={() => {
                        const json = query.serialize();
                        let parsedJSON = JSON.parse(json);
                        let state = lz.encodeBase64(lz.compress(json))
                        copy(state);
                        setSnackbarMessage("State copied to clipboard")
                        setTimeout(() => {
                            let tags = []; let reactElements = [];
                            reactElements = getBuilderNodes(parsedJSON.ROOT, parsedJSON);
                            tags = generateHTML(reactElements, [], 'mizbun-builder')
                            setStateToLoad(state)
                            document.getElementById("mizbun-section").remove();
                            setTimeout(() => {
                                let formData = new FormData()
                                formData.append("id", selectedContent);
                                formData.append("state", state);
                                formData.append("tags", tags.outerHTML);
                                axios.post(`${serverURL}/api/store-builder-state-tags`, formData).then((res) => {
                                    if (res.status === 200 && res.data === 1)
                                        swal("Good job!", "Content has been saved successfully!", "success")
                                    else
                                        swal("Error!", "Something bad happened!", "error");
                                    }
                                )
                            }, 1000)
                        }, 1000)
                    }}
                        > Copy current state
                </MaterialButton>
                <Dialog
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    fullWidth
                    maxWidth="md"
                >
                    <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
                    <DialogContent>
                        <TextField
                            multiline
                            fullWidth
                            placeholder='Paste the contents that was copied from the "Copy Current State" button'
                            size="small"
                            value={stateToLoad || ''}
                            onChange={e => setStateToLoad(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <MaterialButton onClick={() => setDialogOpen(false)} color="primary">
                            Cancel
                        </MaterialButton>
                        <MaterialButton
                            onClick={() => {
                                setDialogOpen(false);
                                const json = lz.decompress(lz.decodeBase64(stateToLoad));
                                actions.deserialize(json);
                                setSnackbarMessage("State loaded")
                            }}
                            color="primary"
                            autoFocus
                        >
                            Load
                        </MaterialButton>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    autoHideDuration={1000}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={!!snackbarMessage}
                    onClose={() => setSnackbarMessage(null)}
                    message={<span>{snackbarMessage}</span>}
                />
                </Grid>
            </Grid>
        </Box>
    )
};

const getBuilderNodes = (node, data) => {
    let typeName = "";
    if (typeof node.type === "object") {
        typeName = node.type.resolvedName;
    } else {
        typeName = node.type;
    }

    const Children = node.nodes.map((x, index) => {
        return getBuilderNodes(data[x], data);
    });

    switch (typeName) {
        case "Container":
            return <Container key={(Math.random() + 1).toString(36).substring(2)} {...node.props}>{Children}</Container>;
        case "Text":
            return <Text key={(Math.random() + 1).toString(36).substring(2)} {...node.props} />;
        case "Button":
            return <Button key={(Math.random() + 1).toString(36).substring(2)} {...node.props} />;
        case "Card":
            return <Card key={(Math.random() + 1).toString(36).substring(2)} {...node.props} />;
        case "Image":
            return <Image key={(Math.random() + 1).toString(36).substring(2)} {...node.props} />;
    }
}

const generateHTML = (tree, tags, divId) => {
    if (tree.type.name === 'Container' && tags.length === 0) {
        let section = document.createElement("section");
        section.style.cssText = 'display:none'
        section.setAttribute('id', 'mizbun-section');
        let div = document.createElement("div");
        div.style.cssText = 'background-color:'+ tree.props.background + ';padding:' + tree.props.padding + 'px; margin: 5px 0px;'
        div.setAttribute('id', 'mizbun-builder')
        div.setAttribute('class', 'parent')
        section.appendChild(div)
        tags = div
        document.body.appendChild(section)

        if (tree.props.children.length > 0)
            tree.props.children.map((x, index) => generateHTML(tree.props.children[index], tags, 'mizbun-builder'))

    } else if (tree.type.name === 'Container') {
        let randomId = (Math.random() + 1).toString(36).substring(2);
        let div = document.createElement("div")
        div.style.cssText = 'background-color:'+ tree.props.background + ';padding:' + tree.props.padding + 'px; margin: 5px 0px;'
        div.setAttribute('id', randomId)
        div.setAttribute('class', 'parent')
        tags.appendChild(div)
        document.getElementById(divId).appendChild(div)

        if (tree.props.children.length > 0)
            tree.props.children.map((x, index) => generateHTML(tree.props.children[index], tags, randomId))
    }

    if (tree.type.name === 'Text') {
        let h1 = document.createElement('h1');
        h1.style.cssText = 'background-color:'+ tree.props.background + ';color:'+ tree.props.color + ';font-size:'+ tree.props.fontSize + 'px; text-align:'+ tree.props.textAlign + ';font-weight: 500; margin:11px; padding:0;';
        h1.innerHTML = tree.props.text;
        divId === 'mizbun-builder' ? tags.appendChild(h1) : document.getElementById(divId).appendChild(h1)
    }

    if (tree.type.name === "Button") {
        let a = document.createElement('a');
        a.style.cssText = 'min-width: 64px; box-sizing: border-box; cursor: pointer; font-family: "Roboto", "Helvetica", "Arial", sans-serif; font-weight: 500; line-height: 1.75; border-radius: 4px; letter-spacing: 0.02857em; text-transform: uppercase; text-decoration: none; display: inline-block; text-align: center;'

        if (tree.props.size === 'small')
            a.style.cssText += 'font-size: 0.8125rem; padding: 4px 5px;'
        else if (tree.props.size === 'medium')
            a.style.cssText += 'font-size: 0.875rem; padding: 6px 16px;'
        else // for large size
            a.style.cssText += 'font-size: 0.9375rem; padding: 8px 22px;'

        if (tree.props.variant === 'outlined') {
            if (tree.props.color === "primary")
                a.style.cssText += 'border: 1px solid rgba(63, 81, 181, 0.5);color: #3f51b5; background-color: transparent;'
            else if (tree.props.color === "secondary")
                a.style.cssText += 'border: 1px solid rgba(245, 0, 87, 0.5);color: #f50057; background-color: transparent;'
            else // for default color
                a.style.cssText += 'border: 1px solid rgba(0, 0, 0, 0.23);color: rgba(0, 0, 0, 0.23); background-color: transparent;'
        }
        else if (tree.props.variant === 'text') {
            if (tree.props.color === "primary")
                a.style.cssText += 'border: none;color: #3f51b5; background-color: transparent;'
            else if (tree.props.color === "secondary")
                a.style.cssText += 'border: none;color: #f50057; background-color: transparent;'
            else // for default color
                a.style.cssText += 'border: 1px solid rgba(0, 0, 0, 0.23);color: rgba(0, 0, 0, 0.23); background-color: transparent;'
        }
        else { // for contained variant
            if (tree.props.color === "primary")
                a.style.cssText += 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%); background-color: #3f51b5; color: #fff; border:none'
            else if (tree.props.color === "secondary")
                a.style.cssText += 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%); background-color: #f50057; color: #fff; border:none'
            else // for default color
                a.style.cssText += 'box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%); background-color: #e0e0e0; color: rgba(0, 0, 0, 0.87); border:none'
        }

        a.innerHTML = tree.props.children;
        a.href = tree.props.URL;
        divId === 'mizbun-builder' ? tags.appendChild(a) : document.getElementById(divId).appendChild(a)
    }

    if (tree.type.name === 'Image') {
        let image = document.createElement('img');
        image.style.cssText = 'width:'+tree.props.width + '%; height:'+ tree.props.height + 'px; background-image:url('+tree.props.Url+');' + ' border-radius: 25px; background-position: center; background-repeat: no-repeat; background-size: cover;'
        divId === 'mizbun-builder' ? tags.appendChild(image) : document.getElementById(divId).appendChild(image)
    }

    return tags;
}
