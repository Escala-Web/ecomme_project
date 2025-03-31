import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Container } from "./styles";
import { FolderAdd } from "./ui/FolderAdd";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FaFile, FaArrowLeft } from "react-icons/fa";
import { FcFile, FcFolder } from "react-icons/fc";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1440,
    height: 700,
    bgcolor: 'background.paper',
    border: '2px solid #414141',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
};

export const FileManager = () => {

    const [open, setOpen] = React.useState(false);
    const [currentPath, setCurrentPath] = React.useState("root");

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setCurrentPath("root");
        setOpen(false);
    };

    const openFolder = (folderName: string) => {
        setCurrentPath(folderName);
    };

    const goBack = () => {
        if (currentPath === "root") return;
        const pathSegments = currentPath.split("/");
        pathSegments.pop();
        setCurrentPath(pathSegments.join("/") || "root");
    };

    const initialFiles = {
        root: {
            folders: ["Projetos", "Imagens", "Documentos"],
            files: ["leia-me.txt", "notas.docx"],
        },
        Projetos: {
            folders: ["React", "NodeJS"],
            files: ["projeto1.zip", "projeto2.zip"],
        },
        Imagens: {
            folders: [],
            files: ["foto1.png", "foto2.jpg"],
        },
        Documentos: {
            folders: ["Contratos"],
            files: ["resumo.pdf", "relatorio.xlsx"],
        },
        React: {
            folders: [],
            files: ["app.js", "index.html"],
        },
        NodeJS: {
            folders: [],
            files: ["server.js", "package.json"],
        },
        Contratos: {
            folders: [],
            files: ["contrato1.pdf", "contrato2.docx"],
        },
    };

    return (
        <>

            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Container>
                            <div className='container_header'>
                                <h4>Gerenciador de Media</h4>
                                <div className='actions'>
                                    <FolderAdd />
                                </div>
                            </div>
                            <div className="container_file_manager">
                                <div className="header_file_manager">
                                    <p>Arquivos</p>
                                </div>

                                <List className="folder_container">

                                    <div className="info">
                                        {currentPath !== "root" && (
                                            <Button onClick={goBack} startIcon={<FaArrowLeft />}>
                                                Voltar
                                            </Button>
                                        )}
                                        <p>{currentPath === "root" ? "Arquivos" : currentPath}</p>
                                    </div>

                                    <div className="folder_list">
                                        {initialFiles[currentPath]?.folders.map((folder) => (
                                            <div className="card_media" key={folder} onClick={() => openFolder(folder)}>
                                                <FcFolder />
                                                <p>{folder}</p>
                                            </div>
                                        ))}

                                        {initialFiles[currentPath]?.files.map((file) => (
                                            <div className="card_media" key={file} >
                                                <FcFile />
                                                <p>{file}</p>
                                            </div>
                                        ))}
                                    </div>
                                </List>
                            </div>
                        </Container>
                    </Box>
                </Modal>
            </div>

        </>
    )

}