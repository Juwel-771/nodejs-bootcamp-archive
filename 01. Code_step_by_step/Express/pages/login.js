export default function login(){
    return `<form action="/submit" method="post">
            <input type="text" placeholder="Enter your name" name/>
            <br>
            <br>
            <input type="email" placeholder="Enter your email" />
            <br>
            <br>
            <input type="password" placeholder="Enter your password" />
            <br>
            <br>
            <button>Login</button>
        </form>`
}