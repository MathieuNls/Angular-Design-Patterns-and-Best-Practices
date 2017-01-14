export class MySingleton{
	
	//The constructor is private so we 
	//can't do let singleton:MySingleton = new MySingleton();
	private static instance:MySingleton = new MySingleton();

	private constructor(){

	}

	public static getInstance():MySingleton{

        return MySingleton.instance;
	}

    public doStuff():void{
        console.log("stuff");
    }

}