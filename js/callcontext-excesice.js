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
}

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
