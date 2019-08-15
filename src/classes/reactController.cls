global with sharing class reactController {
    public reactController() {}

    @RemoteAction
     global static String hello(integer times){
       
   String json = '{'+
		'	\"country\": {'+
		'		\"Paraguay\": [{'+
		'				\"asset\": \"Computer\",'+
		'				\"Assigned\": 1,'+
		'				\"Not_Assigned\": 2,'+
		'				\"Out_of_service\": 3'+
		'			},'+
		'			{'+
		'				\"asset \": \"Mobile_Phone\",'+
		'				\"Assigned\": 1,'+
		'				\"Not_Assigned\": 2,'+
		'				\"Out_of_service\": 3'+
		'			},'+
		'			{'+
		'				\"asset\": \"Unassigned_Peripherals\",'+
		'				\"Keyboard\": 1,'+
		'				\"Mac charger\": 1,'+
		'				\"Mouse\": 1,'+
		'				\"Network adapters\": 1,'+
		'				\"Platronic headphones\": 1,'+
		'				\"iPhone headphones\": 1'+
		'			}'+
		'		],'+
		'		\"Peru\": [{'+
		'				\"asset\": \"Computer\",'+
		'				\"Assigned\": 4,'+
		'				\"Not_Assigned\": 5,'+
		'				\"Out_of_service\": 6'+
		'			},'+
		'			{'+
		'				\"asset \": \"Mobile_Phone\",'+
		'				\"Assigned\": 4,'+
		'				\"Not_Assigned\": 5,'+
		'				\"Out_of_service\": 6'+
		'			},'+
		'			{'+
		'				\"asset\": \"Unassigned_Peripherals\",'+
		'				\"Keyboard\": 2,'+
		'				\"Maccharger\": 2,'+
		'				\"Mouse\": 2,'+
		'				\"Network adapters\": 2,'+
		'				\"Platronic headphones\": 2,'+
		'				\"iPhone headphones\": 2'+
		'			}'+
		'		],'+
		'		\"Uruguay\": [{'+
		'				\"asset\": \"Computer\",'+
		'				\"Assigned\": 7,'+
		'				\"Not_Assigned\": 8,'+
		'				\"Out_of_service\": 9'+
		'			},'+
		'			{'+
		'				\"asset \": \"Mobile_Phone\",'+
		'				\"Assigned\": 7,'+
		'				\"Not_Assigned\": 8,'+
		'				\"Out_of_service\": 9'+
		'			},'+
		'			{'+
		'				\"asset\": \"Unassigned_Peripherals\",'+
		'				\"Keyboard\": 1,'+
		'				\"Mac charger\": 2,'+
		'				\"Mouse\": 3,'+
		'				\"Network adapters\": 4,'+
		'				\"Platronic headphones\": 5,'+
		'				\"iPhone headphones\": 6'+
		'			}'+
		'		]'+
		'	}'+
		'}';
            return json;
      
    }
}