import './main.html';
import Events from "../collections";

  Template.evento.helpers({
    
    eventsCollection: () => {
        return Eventos.find({});
    }
});
  
  Template.evento.events({
    
  });


  Template.form.events({
    'submit': (event) => {
        event.preventDefault();
    var ev={
        nombre: event.target.name.value,
        descripción: event.target.desc.value,
        responsable: event.target.res.value,
        fechaInicio: event.target.date1.value,
        fechaFin: event.target.date2.value,
        ubicación: event.target.loc.value,

    }
Events.insert(ev);
    },
  });