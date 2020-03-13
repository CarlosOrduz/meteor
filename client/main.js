import './main.html';
import Events from "../collections";

  Template.evento.helpers({
    
    eventsCollection: () => {
        return Eventos.find({});
    }
});
  
  Template.evento.events({
    'submit': (event) => {
        event.preventDefault();
console.log("ola")
    },
  });


  Template.form.events({
    'submit': (event) => {
        event.preventDefault();
    var ev={
        name: event.target.name.value,
        desc: event.target.desc.value,
        res: event.target.res.value,
        date1: event.target.date1.value,
        date2: event.target.date2.value,
        loc: event.target.loc.value,

    }
console.log(ev)
    },
  });