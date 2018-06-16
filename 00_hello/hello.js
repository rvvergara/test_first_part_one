function hello(name,isGoodbye){
    if(!name) return "Hello!"
    else if(!isGoodbye) return "Hello, "+name+"!";
    else return "Goodbye, "+name+"!";
}