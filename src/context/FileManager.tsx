import { createContext, useContext, useState, ReactNode } from "react";

interface IPicturesProps {
    file_path: string;
    file_type: string;
    id: number;
    name: string;
    type: string;
}

interface IVariationPicture {
    picture: IPicturesProps;
    id_variation: number;
    index: number;
}

interface PicturesContextType {
    images: IVariationPicture[];
    handleAddPictures: (picture: IPicturesProps, idVariation: number, index: number) => void;
    handleRemovePicture: (id: number) => void;
}

const PicturesContext = createContext<PicturesContextType | undefined>(undefined);

export const PicturesProvider = ({ children }: { children: ReactNode }) => {
    const [images, setImages] = useState<IVariationPicture[]>([]);

    const handleAddPictures = (picture: IPicturesProps, idVariation: number, indexV: number) => {
        const isValid = images.some(
            (item) => item.picture.id === picture.id && item.id_variation === idVariation
        );

        if (isValid) return;

        setImages((prevImages) => [...prevImages, { picture, id_variation: idVariation, index: indexV }]);
    };

    const handleRemovePicture = (id: number) => {
        setImages((prevImages) => prevImages.filter((item) => item.picture.id !== id));
    };

    return (
        <PicturesContext.Provider value={{ images, handleAddPictures, handleRemovePicture }}>
            {children}
        </PicturesContext.Provider>
    );
};

export const usePictures = () => {
    const context = useContext(PicturesContext);
    if (!context) {
        throw new Error("usePictures deve estar dentro de um PicturesProvider");
    }
    return context;
};
