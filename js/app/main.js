requirejs(["./tmpl","./jquery","./app/model","./app/view","./app/controller"], function() {

    
    var firstToDoList = ['buy milk', 'feed cat', 'sell cat', 'go dancing','drink vodka'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});