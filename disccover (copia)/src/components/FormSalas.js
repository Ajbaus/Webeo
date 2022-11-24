import '../styles/land_user.css'


function FormSalas(){
    return(
        <div className='formSalas'>
            <div className='row'>
                <div id='columnIzquierda' className='column'>
                    <h2 className='titles'>
                        Crear Sala
                    </h2>
                    <div className='form'>
                        <form action='sala-espera'>
                            <label className="items" for="Nombre">Nombre de la sala:</label><br></br>
                            <input className="items" type="text" id="Nombre" name="Nombre" /><br></br>
                            <label className='items' for="Codigo">Código de la sala:</label>
                            <input className="items" type="text" id="Codigo" name="Codigo" /><br></br>
                            <p></p>
                            <input className="items" type="checkbox" id="Sala Privada" name="Sala Privada"/><label className="items" for="Sala Privada">Sala privada</label><br></br>
                            <p></p>
                            <input className="buttons" type="submit" value="Crear" ></input>
                        </form>
                    </div>
                </div>
                <div id='columnDerecha' className="column">
                    <h2 class="titles">Unirse a una sala</h2>
                    <p>Puedes unirte a una sala ya creada a través de su código.</p>
                    <div className='form'>
                        <form action='sala-espera'>
                            <label className="items" for="Codigo">Código de la sala:</label><br />
                            <input className="items" type="text" id="Codigo" name="Codigo" /><br></br>
                            <p></p>
                            <input className="buttons" type="submit" value="Unirse a sala"></input>
                        </form>
                    </div>
                </div>

            </div>

        </div>
        

    )
}

export default FormSalas;