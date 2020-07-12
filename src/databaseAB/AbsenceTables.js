import React from "react";
import { OverlayTrigger, Spinner } from "react-bootstrap";
import {
  FaInfoCircle,
  FaEdit,
  FaTrashAlt,
  FaTrash,
  FaRegTrashAlt,
} from "react-icons/fa";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

const Tables = (props) => {
  const style = {
    padding: "0 2em",
    textRendering: "optimizeLegibility",
    color: "#444",
    background: "#eee",
  };

  const defaultImage = require("../layout/img/site/no-image-available-icon-6.jpg");

  const renderTooltip = (images, name) => (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        padding: "10px 10px",
        color: "white",
        borderRadius: 5,
      }}
    >
      <img
        src={images === null ? defaultImage : images}
        width="375"
        height="250"
        alt=""
      />
    </div>
  );

  const imagelll = require("../layout/img/site/code-coder-coding-270348.jpg");

  return (
    <>
      <Card className="shadow">
        <CardHeader className="border-0">
          <Row className="align-items-center">
            <div className="col">
              <h3 className="mb-0">Registro de Ausencias</h3>
            </div>
            {/* <div className="col text-right">
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="sm"
              >
                See all
              </Button>
            </div> */}
          </Row>
        </CardHeader>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Trabajador</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Motivo</th>
              <th scope="col">Fecha Inicio</th>
              <th scope="col">Fecha Fin</th>
              <th scope="col">CIIE10</th>
              <th scope="col">Observacion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {props.list.length === 0 ? (
              <tr>
                <td colSpan="6">There is no records yet</td>
              </tr>
            ) : (
              props.list.map((record) => (
                <tr key={record.id}>
                  {/* <OverlayTrigger
                placement="right-end"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip(record.images, record.name)}
            >
              <td>
                <img
                    src={
                      record.images === null ?
                        defaultImage
                      :
                      record.images
                      }
                    width='60'
                    height='40'
                    alt=''
                />
              </td>
            </OverlayTrigger> */}
                  <td>{record.employee.enterprise}</td>
                  <td>{record.employee.name}</td>
                  <td>{record.employee.cc}</td>
                  <td>{record.reason}</td>
                  <td>{record.ini_date}</td>
                  <td>{record.end_date}</td>
                  <td>{record.ciie10}</td>
                  <td>{record.observation}</td>
                  <td>
                    <Button
                      className="mr-2 "
                      variant="info"
                      onClick={() => props.handleOnClick(record)}
                      disabled
                    >
                      <FaInfoCircle />
                    </Button>
                    <Button
                      className="mr-2 "
                      variant="warning"
                      onClick={() => props.handleData(record)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => props.handleDelete(record.id)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default Tables;