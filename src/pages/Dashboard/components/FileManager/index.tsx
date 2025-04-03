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
import {
	IFolderResponse,
	IFoldersContentResponse,
} from "../../../../types/IFolders";
import { Setting } from "./ui/Setting";
import { useFiles } from "../../../../hooks/FileManger/useFiles";
import { IoClose } from "react-icons/io5";
import { URL_HOST } from "../../../../config/configUrl";
import { toast } from "react-toastify";
import { LuRefreshCcw } from "react-icons/lu";
import { usePictures } from "../../../../context/FileManager";


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

interface FileManagerProps {
	id: number,
	title: string,
	indexV: number
}
export const FileManager = ({ id: idVariation, title, indexV }: FileManagerProps) => {

	parseInt(idVariation)

	const [open, setOpen] = React.useState(false);
	const [currentPath, setCurrentPath] = React.useState("root");
	const [id_folder, setId_folder] = React.useState(1);
	const [folderHistory, setFolderHistory] = React.useState<number[]>([1]);
	const [isPageFile, setIsPageFile] = React.useState<boolean>(false);

	const modalRef = React.useRef<HTMLDivElement | null>(null);

	const { findAllFolders } = useFolder();
	const { data, isPending, error, mutate } = findAllFolders;

	const { createFile } = useFiles();

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
			is_trash: isPageFile,
		});
	}, [id_folder, mutate, isPageFile]);

	if (error) return <div>Erro ao carregar as pastas!</div>;

	const currentContent: IFolderResponse = data?.content?.filter(
		(item: IFoldersContentResponse) => {
			if (currentPath === "root") {
				return true;
			} else {
				return item.id;
			}
		}
	);

	React.useEffect(() => {
		const handleContextMenu: any = (e: React.MouseEvent) => {
			e.preventDefault();
		};

		const modalElement = modalRef.current;

		if (modalElement) {
			modalElement.addEventListener("contextmenu", handleContextMenu);
		}

		return () => {
			if (modalElement) {
				modalElement.removeEventListener("contextmenu", handleContextMenu);
			}
		};
	}, []);

	const handleAddFiles = (): void => {
		const fileInput: HTMLInputElement = document.createElement("input");
		fileInput.type = "file";
		fileInput.multiple = true;

		fileInput.click();

		fileInput.addEventListener("change", (event: Event): void => {
			const target = event.target as HTMLInputElement;
			const files: FileList | null = target.files;

			if (files) {
				const formData: FormData = new FormData();

				formData.append("id_folder", id_folder.toString());

				Array.from(files).forEach((file: File) => {
					formData.append("files[]", file);
				});

				createFile.mutate(formData);
			} else {
				console.log("Nenhum arquivo selecionado");
			}
		});
	};

	const { images, handleAddPictures } = usePictures();


	return (
		<>
			<Button
				variant="contained"
				onClick={handleOpen}
				sx={{ marginTop: ".4rem" }}
			>
				{title}
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
								<FolderAdd idFolder={id_folder} />
								<span><LuRefreshCcw /></span>
								<span onClick={handleAddFiles}>Upload de arquivos</span>
							</div>
						</div>
						<div ref={modalRef} className="container_file_manager">
							<div className="header_file_manager">
								<p onClick={() => setIsPageFile(false)}>Arquivos</p>
								<p onClick={() => setIsPageFile(true)}>Lixeira</p>
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
											{currentContent?.map((item: IFoldersContentResponse) => (
												<>
													{item.type === "folder" ? (
														<div className="card">
															<div
																className="card_media"
																key={item.id}
																onDoubleClick={() =>
																	openFolder(item.name, item.id)
																}
															>
																<FcFolder />
																<p>{item.name}</p>
															</div>
															<Setting
																idFolder={item.id}
																isPageFile={isPageFile}
															/>
														</div>
													) : (
														<div className="cart" onClick={() => handleAddPictures(item, idVariation, indexV)}>
															<div className="card_media" key={item.id}>
																<FcFile />
																<p>{item.name}</p>
															</div>
														</div>
													)}
												</>
											))}
										</>
									)}
								</div>
							</List>
							<div className="container_image_select">
								<div className="info_select">
									<div>
									<p>Imagens selecionadas</p>
									<div className="folder_list" style={{ width: '320px', marginTop: '2rem' }}>
										{images?.map((img) => (
										<div className="card" key={img.picture.id}>
											<div className="card_media" >
												<img src={`${URL_HOST}${img.picture.file_path}`} alt="" />
												<p>{img.picture.name}</p>
											</div>
											<span className="close" onClick={() => handleRemovePicture(img.picture.id)}>
												<IoClose />
											</span>
										</div>

										))}
										
									</div>
									</div>
									<Button onClick={() => {
										setCurrentPath("root");
										setFolderHistory([1]);
										setOpen(false);
										toast.success('Imagens adicionada com sucesso')
									}} variant="contained">Adicionar</Button>
								</div>
							</div>
						</div>
					</Container>
				</Box>
			</Modal>
		</>
	);
};
