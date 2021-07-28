function myTest(value, another) {
    alert(value + another);
    return true;
}


class User {
    username = '';
    score =  0;
    constructor(username, score){
        console.log('creating new user');
        this.username = username;
        this.score = score;
    }

    addToScore() {
        this.score++;
        console.log(this.score);
        console.log(this);
    }
}

const user = new User('first user', 10);
user.addToScore();
user.addToScore();

