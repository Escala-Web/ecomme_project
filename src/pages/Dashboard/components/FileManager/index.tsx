import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Container } from "./styles";
import { FolderAdd } from "./ui/FolderAdd";
import { CircularProgress, List } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { FcFile, FcFolder } from "react-icons/fc";
import { useFolder } from "../../../../hooks/FileManger/useFolder";
import { IFoldersContentResponse } from "../../../../types/IFolders";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 1440,
	height: 700,
	bgcolor: "background.paper",
	border: "2px solid #414141",
	boxShadow: 24,
	borderRadius: 4,
	p: 4,
};

export const FileManager = () => {
	const [open, setOpen] = React.useState(false);
	const [currentPath, setCurrentPath] = React.useState("root");
	const [id_folder, setId_folder] = React.useState(1);
	const [folderHistory, setFolderHistory] = React.useState<number[]>([1]);

	const { findAllFolders } = useFolder();
	const { data, isPending, error, mutate } = findAllFolders;

	const handleOpen = () => setOpen(true);

	const handleClose = () => {
		setCurrentPath("root");
		setFolderHistory([1]);
		setOpen(false);
	};

	const openFolder = (folderName: string, id: number) => {
		setCurrentPath(folderName);
		setId_folder(id);
		setFolderHistory((prevHistory) => [...prevHistory, id]);
	};

	const goBack = () => {
		if (folderHistory.length > 1) {
			const newHistory = [...folderHistory];
			newHistory.pop();
			const previousFolderId = newHistory[newHistory.length - 1];
			setFolderHistory(newHistory);
			setId_folder(previousFolderId);
			setCurrentPath(
				previousFolderId === 1 ? "root" : previousFolderId.toString()
			);
			
		}
	};


	React.useEffect(() => {
		mutate({
			parent_id: id_folder,
			is_thash: false,
		});
	}, [id_folder, mutate]);

	if (error) return <div>Erro ao carregar as pastas!</div>;

	const currentContent = data?.content?.filter((item: any) => {

		if (currentPath === "root") {
			return true;
		} else {
			return item.name.startsWith(currentPath);
		}
	});

	return (
		<>
			<Button
				variant="contained"
				onClick={handleOpen}
				sx={{ marginTop: "1rem" }}
			>
				Gerenciador de media
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Container>
						<div className="container_header">
							<h4>Gerenciador de Mídia</h4>
							<div className="actions">
								<FolderAdd idFolder={id_folder}/>
							</div>
						</div>
						<div className="container_file_manager">
							<div className="header_file_manager">
								<p>Arquivos</p>
							</div>

							<List className="folder_container">
								{isPending ? (
									""
								) : (
									<div className="info">
										{currentPath !== "root" && (
											<Button onClick={goBack} startIcon={<FaArrowLeft />}>
												Voltar
											</Button>
										)}
										<p>{currentPath === "root" ? "Arquivos" : currentPath}</p>
									</div>
								)}

								<div className="folder_list" style={{ marginTop: "2rem" }}>
									{isPending ? (
										<div className="container_loading">
											<CircularProgress size="4rem" />
										</div>
									) : (
										<>
											{currentContent?.map((item: IFoldersContentResponse) =>
												item.type === "folder" ? (
													<div
														className="card_media"
														key={item.id}
														onClick={() => openFolder(item.name, item.id)}
													>
														<FcFolder />
														<p>{item.name}</p>
													</div>
												) : (
													<div className="card_media" key={item.id}>
														<FcFile />
														<p>{item.name}</p>
													</div>
												)
											)}
										</>
									)}
								</div>
							</List>
						</div>
					</Container>
				</Box>
			</Modal>
		</>
	);
};
