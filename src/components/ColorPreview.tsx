import useColorStore from "../store/useColorStore";
import PreviewContainer from "./layouts/PreviewContainer";

const ColorPreview = () => {
    const { color } = useColorStore();

    const isColorSelected = color?.id === null;

    const getTextColor = (hexCode: string) => {
        const hex = hexCode.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "black" : "white";
    };
    const textColor =
        isColorSelected || !color?.hex_code
            ? "white"
            : getTextColor(color.hex_code);

    return (
        <>
            {isColorSelected ? (
                <PreviewContainer className="bg-black text-white">
                    <p>Please select a color</p>
                </PreviewContainer>
            ) : (
                <PreviewContainer
                    style={{
                        backgroundColor: `#${color?.hex_code}`,
                        color: textColor,
                    }}
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
