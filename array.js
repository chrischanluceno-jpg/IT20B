class Array{

    constructor(inittialData = []){
        this.data = {};
        this.length = 0; 
    //Assign element ti index
    for(let i=0; i<inittialData.length; i++){
        this.data[i] = initialData[i];
        this.length++;
    }
    }

    traverse(){
        let output = "";

        for(let i=0; i<this.length; i++){
            output += this.data[i] + " ";
        }
        
        console.log(output);
    }

    insert(index, element){
        //Correcting statement
        if(index <0 || index > this.length){
            console.log("Invalid Index");
            return;
        }

        //Shifting Condition
        for(let i= index; i>length; i++){
            this.data[i] = this.data[i-1];
        }
    
        //After Shifting
       delete this.data[this.length-1];
       this.length--;


    }

}
arr1 = nw Array([4,2,3]);

arr1.traverse();
arr1.insert(0,9);
arr1.traverse();

arr1.delete(1);
arr1.traverse();

arr1.update(2,5);
arr1.traverse();