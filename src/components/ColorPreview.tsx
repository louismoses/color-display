import useColorStore from "../store/useColorStore";
import PreviewContainer from "./layouts/PreviewContainer";

const ColorPreview = () => {
    const { color } = useColorStore();

    const isColorSelected = color?.id === null;

    return (
        <>
            {isColorSelected ? (
                <PreviewContainer className="bg-black text-white">
                    <p>Please select a color</p>
                </PreviewContainer>
            ) : (
                <PreviewContainer
                    style={{ backgroundColor: `#${color?.hex_code}` }}
                >
                    <p>Name: {color?.name}</p>
                    <p>Hex: {color?.hex_code}</p>
                    <p>Color Code: {color?.color_code}</p>
                </PreviewContainer>
            )}
        </>
    );
};

export default ColorPreview;
