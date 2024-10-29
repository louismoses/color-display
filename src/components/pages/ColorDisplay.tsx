import Container from "../layouts/Container";
import Grid from "../layouts/Grid";
import GridItem from "../layouts/GridItem";
import ColorList from "../ColorList";
import ColorPreview from "../ColorPreview";

const ColorDisplay = () => {
    return (
        <>
            <Container>
                <h2 className="pl-4 font-semibold text-xl">Colors:</h2>
                <Grid>
                    <GridItem className="border max-h-screen overflow-auto">
                        <ColorList />
                    </GridItem>
                    <GridItem className="order-first lg:order-last">
                        <ColorPreview />
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
};

export default ColorDisplay;
