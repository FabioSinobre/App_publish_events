import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './criarEventos.css';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import NavBar from '../../components/navbar';

function EventosCadastro() {

    const [msgTipo, setMsgTipo] = useState('erro');

    return (
        <>
            <NavBar />
            <div className="col-12 mt-4">
                <div className="row text-center">
                    <h3 className="mx-auto text-weitht-bolde">Novo Evento</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label>Titulo:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tipo de evento:</label>
                        <select className="form-control">
                            <option disabled selected value>-- seleciona uma opção --</option>
                            <option>festa</option>
                            <option>teatro</option>
                            <option>show</option>
                            <option>evento</option>
                            <option>curso</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descrição do evento:</label>
                        <textarea className="form-control" rows="4" />
                    </div>
                    <div className="form-gruop row ">
                        <div className="col-6">
                            <label>Data:</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input type="time" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Upload da Imagem:</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
                    </div>
                </form>
                <div className="msg-login text-center mt-2">
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Evento Publicado &#128526; </span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128546; </span>}
                </div>
            </div>
        </>
    )
}
export default EventosCadastro