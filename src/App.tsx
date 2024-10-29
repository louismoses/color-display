import React from "react";
import Container from "./components/layouts/Container";
import Grid from "./components/layouts/Grid";
import GridItem from "./components/layouts/GridItem";
import ColorList from "./components/ColorList";
import ColorPreview from "./components/ColorPreview";

function App() {
    return (
        <>
            <Container>
                <h2 className="pl-4 font-semibold text-xl">Colors:</h2>
                <Grid>
                    <GridItem className="border max-h-screen overflow-auto">
                        <ColorList />
                    </GridItem>
                    <GridItem className="order-first md:order-last">
                        <ColorPreview />
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default App;
