import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useColorStore from "../store/useColorStore";
import Button from "./Button";

type ColorList = {
    color_code: string;
    hex_code: string;
    id: number;
    name: string;
};

interface ColorResponse {
    colors: ColorList[];
}

const ColorList = () => {
    //Fetch colors
    const getColors = async (): Promise<ColorResponse> => {
        const response = await axios.get(
            "https://api.rolook.com/api/colors/prolook"
        );
        return response.data?.colors;
    };

    const {
        data: colors,
        isLoading: isFetchingColors,
        isError: isErrorFetchingColors,
    }: {
        data: ColorList[] | undefined;
        isLoading: boolean;
        isError: boolean;
    } = useQuery({
        queryKey: ["colors"],
        queryFn: getColors,
    });

    // set color to preview
    const { setColor } = useColorStore();
    const colorPreview = (color: ColorList) => {
        setColor(color);
    };

    return (
        <>
            {isErrorFetchingColors ? (
                <p className="p-3">Error fetching colors</p>
            ) : null}

            {isFetchingColors ? (
                <p className="p-3">Loading...</p>
            ) : (
                <div>
                    {colors?.map((color: ColorList) => (
                        <div
                            key={color.id}
                            className="p-3 border-b flex justify-between items-center"
                        >
                            <p className="pl-2">{color.name}</p>
                            <Button
                                className="bg-blue-500 border-blue-300 text-white"
                                onClick={() => colorPreview(color)}
                            >
                                Preview
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ColorList;
