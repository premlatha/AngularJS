mainApp.controller("studentController",function($scope) {
$scope.student={
    firstName:"Keerti",
    lastName:"Choudhari",
    fees:100,
    subjects:[
        {name:'Physics',marks:70},
        {name:'Chemistry',marks:80},
        {name:'Maths',marks:90},
        {name:'Science',marks:66}
    ],
    FullName:function(){
        var studentObject=$scope.student;
        return studentObject.firstName+" "+studentObject.lastName;
    }
};
});