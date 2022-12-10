export default class AuthenticationService {
static isAuthenticated = false;


static login(){
    let bool = localStorage.getItem('bool')
    if(bool === "true"){
        bool = true
    }else{
        bool = false
    }
    console.log(bool)

  const isAuthenticated = (bool)

  return promise( resolve => {
    setTimeout(() =>{
      this.isAuthenticated = isAuthenticated
      resolve (true)
    }, 500)

     /**
   *  return new Promise( resolve => {
      this.isAuthenticated = isAuthenticated
      resolve (isAuthenticated)
  })
   */
  })
}






}