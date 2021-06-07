import React from "react";
import {Box, Button, Container, makeStyles, Typography} from "@material-ui/core";
import {ArrowDropUp, ExpandLess, ExpandMore, Visibility, VisibilityOff} from "@material-ui/icons";
import AnimateHeight from 'react-animate-height';
import {Alert} from "@material-ui/lab";
import styles from "./styles"

const useStyles = makeStyles(styles);

const Portfolio = () => {
    const classes = useStyles();
    const [portfolioOpen, setPortfolioOpen] = React.useState(false);
    const [hideBalance, setHideBalance] = React.useState(false);

    const BlurredText = ({value}) => {
        return (
            <Typography variant={"h2"} className={hideBalance ? classes.blurred : ''}>{value}</Typography>
        );
    }

    return (
        <Box className={classes.portfolio}>
            <Container maxWidth="xl">
                <Box display={"flex"} className={[portfolioOpen ? classes.opened : '', classes.mobileFix].join(' ')}>
                    <Box className={classes.balance}>
                        <Button onClick={() => {setHideBalance(!hideBalance)}}>{hideBalance ? (<React.Fragment><VisibilityOff /> Show</React.Fragment>) : (<React.Fragment><Visibility /> Hide</React.Fragment>)} balance</Button>
                    </Box>
                    <Box>
                        <Typography variant={"h1"}>Portfolio</Typography>
                    </Box>
                    <Box>
                        <Box display={"flex"}>
                            <Box pt={1} pb={1} pl={5}>
                                <BlurredText value={"$1.123"} />
                                <Typography>Deposited</Typography>
                                <Typography variant={"body2"}> <ArrowDropUp /> 0.59% 1w</Typography>
                            </Box>
                            <Box pt={1} pb={1} pl={5}>
                                <BlurredText value={"$0"} />
                                <Typography>Total yield</Typography>
                                <Typography variant={"body2"}> <ArrowDropUp /> 0.59% 1w</Typography>
                            </Box>
                            <Box pt={1} pb={1} pl={5}>
                                <BlurredText value={"$0"} />
                                <Typography>Daily yield</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <AnimateHeight duration={ 500 } height={ portfolioOpen ? 'auto' : 0 }>
                    <Box>
                        <Alert severity="info" >No vaults found for this portfolio.</Alert>
                    </Box>
                </AnimateHeight>
                <Box display="flex">
                    <Box m="auto">
                        <Button className={classes.toggler} onClick={() => {setPortfolioOpen(!portfolioOpen)}}>{portfolioOpen ? (<ExpandLess />) : (<ExpandMore />)}</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Portfolio;
