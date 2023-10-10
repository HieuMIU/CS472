//the regular funtion askPassword call loginOk or loginFail, so 'this' refer to window, not refer to the user now
//So, we bind user.loginOk and user.loginFail to user when call function askPassword
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") {
        ok();
    } else {
        fail();
    }
}

let user = {
    name: "John",
    loginOk() {
        alert(this.name + " logged in");
    },

    loginFail() {
        alert(this.name + " failed to log in");
    }
};
//bind
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//call
askPassword(() => user.loginOk.call(user),() => user.loginFail.call(user));
//apply
askPassword(() => user.loginOk.apply(user),() => user.loginFail.apply(user));
//wrapper
let userWrapper = {
    name: "John",
    loginOk() {
        let self = this;
        alert(self.name + " logged in");
    },

    loginFail() {
        let self = this;
        alert(self.name + " failed to log in");
    }
};

askPassword(function() { userWrapper.loginOk() }, function() { userWrapper.loginFail() });