import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    const getColors = async (): Promise<ColorResponse> => {
        const response = await axios.get(
            "https://api.prolook.com/api/colors/prolook"
        );
        console.log(response);
        return response.data?.colors;
    };

    const {
        data: colors,
        isLoading,
    }: { data: ColorList[] | undefined; isLoading: boolean } = useQuery({
        queryKey: ["colors"],
        queryFn: getColors,
    });

    const colorPreview = (color: ColorList) => {
        console.log(color);
    };

    return (
        <>
            {isLoading ? (
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
