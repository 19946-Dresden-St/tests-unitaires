class ToDoList{
    constructor(){
        this.items = new Array();
    }

    addItem(item, user) {
        let uniqItem = true;

        for(const tmp of this.items) {
            if ( item.name == tmp.name ) {
                uniqItem = false;
            }
        }
        
        if (uniqItem && this.items.length<10 && (user.isEmailValid() && user.isPasswordValid() && user.isNameValid() && user.isAgeValid())) {

            if(this.items.length == 0){
                this.items.push(item);
            }else{
        
                let difference = Math.abs(item.date - this.items[this.items.length-1].date);
                let minutes = Math.floor((difference/1000)/60);
        
                //si la difference est supérieur à 30min
                if(minutes > 30){
                    this.items.push(item);
                }else{
                    return false;
                }
            }

            if (this.items.length == 8) {
                this.sendMail(user);
            }
            return true;
        }

        return false;
    }

    sendMail(user) {
        console.log("Envoi du mail à : " + user.email);
    }
}

module.exports = ToDoList;