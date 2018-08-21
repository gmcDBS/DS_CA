var App = new Vue({
    el: "#root",
    data: function () {
        return {
            name: "Dis Time",
            userId: "",
            workDate: "",
            hoursWorked: "",
            temp: "",
            buttonDisabled: "true"
        }
    },
    methods: {
        onSubmit: function() {
            // DO Something
        },
        isButtonDisabled: function () {

            if (this.userId.length > 0 || this.workDate.length > 0 || this.hoursWorked.length > 0) {
                return false;
            } else {
                return true;
            }
        },
        postTimeKeep: function (e) {
            var timKeepUrl = "http://localhost:3005/timekeep/";
            e.preventDefault();
            axios.post(timKeepUrl, {
                    "userId": this.userId,
                    "workDate": this.workDate,
                    "workHours": this.hoursWorked,
                    "createDate": new Date()
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error.response);
                });
        },
        test: function (e) {
            e.preventDefault();
            console.log("user id: " + this.userId + " work date: " + this.workDate + " hours worked: " + this.hoursWorked);
        }
    }
})
