console.log("basic class declaration")
class Dorathy{
    features(complexion,height){
        this.complexion= complexion;
        this.height= height;
    }
greet(){
    console.log('I am fair in $ {this.complexion}.');
}
}
const complexion= new Dorathy("Complexion, 5ft");
complexion.greet();


console.log("class with a method")
class Toyota{
    type(brand,model){
        this.brand= brand;
        this.model= model;
    }
    displayInfo(){
        return '${this.brand}${this.model}';
    }
}
const myToyota= new Toyota("Black", "Jeep");
console.log(myToyota.displayInfo());