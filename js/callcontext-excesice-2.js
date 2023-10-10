//the regular function is called in forEach have 'this' refer to window, not the group object,
//so, forEach Function have to bind to group first

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
            }.bind(this));
    }
};
group.showList();