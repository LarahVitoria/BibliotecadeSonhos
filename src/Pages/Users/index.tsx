/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Form,
  Fildset,
  Title,
  ContainerInformation,
  TitleModal,
} from "./style";
import {
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Button,
  IconButton,
  ButtonGroup,
  Container,
  Modal,
  TextField,
  MenuItem,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastfyError, toastfySuccess } from "../../Components/Toast";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import baseApi from "../../Services/Api/api";

interface User {
  id: number;
  nome_completo: string;
  email: string;
  ra: string;
  tipo: string;
}

const Users = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user, setUser] = useState<User[]>([]);
  const [id, setId] = useState("");
  const [nome_completo, setnome_completo] = useState("");
  const [email, setEmail] = useState("");
  const [ra, setRa] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [dialogDelete, setDialogDelete] = React.useState(false);

  const onDelete = (id: string) => {
    baseApi
      .delete(`users/${id}`)
      .then(() => {
        listUsers();
        handleCloseDialog();
        toastfySuccess("Usuário excluído com sucesso!");
        navigate("/livros");
      })
      .catch((error: any) => {
        toastfyError("Erro ao excluir usuário.");
        console.error("There was an error!", error);
      });
  };

  const listUsers = () => {
    baseApi
      .get(`users`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        toastfyError("Erro ao listar usuários.");
        console.error("There was an error!", error);
      });
  };

  const updateUsers = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      nome_completo,
      ra,
      email,
      senha,
      tipo,
    };
    baseApi
      .put(`users/${id}`, data)
      .then(() => {
        toastfySuccess("Usuário editado com sucesso!");
        listUsers();
        setIsLoading(false);
        handleCloseModal();
      })
      .catch((error: any) => {
        toastfyError("Erro ao editar usuário.");
        console.error("There was an error!", error);
        setIsLoading(false);
        handleCloseModal();
      });
  };

  function openModalAndSelectUser(id: number) {
    setModalEdit(true);
    baseApi.get(`users/${id}`).then((response) => {
      setId(response.data.id);
      setnome_completo(response.data.nome_completo);
      setEmail(response.data.email);
      setRa(response.data.ra);
      setSenha(response.data.senha);
      setTipo(response.data.tipo);
    });
  }

  const openDialogDelete = (id: number) => {
    setDialogDelete(true);
    setId(String(id));
  };

  const handleCloseModal = () => setModalEdit(false);

  const handleCloseDialog = () => setDialogDelete(false);

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <ContainerInformation>
        <div>
          <Title>Listagem de Usuários</Title>
        </div>
        <div>
          <Button
            variant="outlined"
            color="success"
            onClick={() => navigate("/cadastroUsuarios")}
            endIcon={<BsChevronDoubleRight />}
          >
            Cadastro de Usuários
          </Button>
        </div>
      </ContainerInformation>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="header_user">
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">RA</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((data) => {
              return (
                <TableRow hover role="checkbox" key={data.id} tabIndex={-1}>
                  <TableCell className="listagem_usuario" align="center">
                    {data.id}
                  </TableCell>
                  <TableCell className="listagem_usuario" align="center">
                    {data.nome_completo}
                  </TableCell>
                  <TableCell className="listagem_usuario" align="center">
                    {data.email}
                  </TableCell>
                  <TableCell className="listagem_usuario" align="center">
                    {data.ra}
                  </TableCell>
                  <TableCell className="listagem_usuario" align="center">
                    {data.tipo === "normal" ? "Normal" : "Admin"}
                  </TableCell>
                  <TableCell className="listagem_usuario" align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Tooltip title="Editar Usuário">
                        <IconButton
                          color="warning"
                          onClick={() => openModalAndSelectUser(data.id)}
                        >
                          <MdModeEdit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Deletar Usuário">
                        <IconButton
                          color="error"
                          onClick={() => openDialogDelete(data.id)}
                        >
                          <MdDeleteForever />
                        </IconButton>
                      </Tooltip>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
        }}
        open={modalEdit}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form onSubmit={updateUsers}>
          <Fildset>
            <div className="header">
              <TitleModal>Editar Usuário</TitleModal>
              {isMobile === true && (
                <IconButton color="success" onClick={handleCloseModal}>
                  <AiOutlineClose />
                </IconButton>
              )}
            </div>
            <TextField
              id="nome_completo"
              type={"text"}
              label="Nome Completo"
              variant="outlined"
              color="success"
              value={nome_completo}
              required
              onChange={(e) => setnome_completo(e.target.value)}
            />
            <TextField
              id="email"
              type={"email"}
              label="Email"
              variant="outlined"
              color="success"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="ra"
              
              label="RA"
              variant="outlined"
              color="success"
              value={ra}
              required
              onChange={(e) => setRa(e.target.value)}
            />
            <TextField
              onChange={(e) => setTipo(e.target.value)}
              label="Tipo"
              name="Tipo"
              required
              variant="outlined"
              select
              color="success"
              value={tipo}
            >
              <MenuItem key="Admin" color="success" value="admin">
                Administrador
              </MenuItem>
              <MenuItem key="Normal" color="success" value="normal">
                Normal
              </MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="outlined"
              color="success"
              size="large"
            >
              {isLoading ? <CircularProgress color="secondary" /> : "Editar"}
            </Button>
          </Fildset>
        </Form>
      </Modal>

      <Dialog open={dialogDelete} onClose={handleCloseDialog}>
        <DialogContent style={{ display: "flex", alignItems: "center" }}>
          <DialogContentText>
            Deseja realmente excluir este usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="success"
            onClick={handleCloseDialog}
          >
            Não
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => onDelete(id)}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Users;
