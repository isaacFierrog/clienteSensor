const d = document;


const ajax = async({ url, data, method='POST' }) => {
    try{
        const res = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        const json = await res.json();

        if(!res.ok) throw { status: res.status, statusText: res.statusText };

        console.log(json);
    }catch(err){
        const mensaje = err.statusText || 'Ocurrio un error';
        console.log(`Error ${err.status}: ${mensaje}`);
    }
};

const crearSensor = () => {
    d.addEventListener('submit', e => {
        e.preventDefault();
        console.log('SUBMIT');
    });
};


const mostrarPanelSensores = selecBoton => {
    d.addEventListener('click', e => {
        if(!e.target.matches(selecBoton)) return;

        const panelSensores = d.querySelector('.sensores');
        panelSensores.classList.toggle('sensores--ocultar')
        console.log(panelSensores);
    });
}


d.addEventListener('DOMContentLoaded', e => {
    mostrarPanelSensores('.boton--sensores');
    crearSensor();
});