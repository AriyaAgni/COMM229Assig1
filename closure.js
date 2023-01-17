function parent() {
    const message='Hello Keerthi!';

    function child(){
        alert(message);
    }
    return child();
    
}
parent();
// const child() =parent();
// child() ;
