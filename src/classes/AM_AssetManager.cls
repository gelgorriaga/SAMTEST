// @RestResource(urlMapping='/Assets/')
global with sharing class AM_AssetManager {
    AM_AssetManager() {}
	@RemoteAction
    global static String getAssets() {
        
        //Map templates
        Map<String,Object> asset = new Map<String,Object>{'asset'=>'','Assigned'=>0,'Not_Assigned'=>0,'Out_of_service'=>0};
        Map<String,Object> unassignedP = new Map<String,Object>{'asset'=>'Unassigned_Peripherals','Keyboard'=>0,'Mac charger'=>0,
            'Mouse' => 0, 'Network adapters'=>0,'Platronic headphones'=>0,'iPhone headphones'=>0};
                
        //get all assets registered     
        List<AM_Asset__c> results = [SELECT Name__c, AM_Type__c, AM_Out_of_Service__c, AM_Status__c ,AM_Location__r.Country__c FROM AM_Asset__c];
        
        //get all countries registered
        List<AM_Location__c> countries = [SELECT Country__c FROM AM_Location__c];
        
        //Map results
        Map<String,Object> country = new Map<String,Object>();
        
        for (AM_Location__c c : countries){
            
            //Initialize maps
            Map<String,Object> acomputer = new Map<string,Object>(asset);
            acomputer.put('asset', 'Computer');
            Map<String,Object> amobile = new Map<string,Object>(asset);
            amobile.put('asset', 'Mobile_Phone');
            Map<String,Object> aperipherals = new Map<string,Object>(unassignedP);
            //variables
            Integer totalc =0, totalm =0;
            for (AM_Asset__c r : results) {
                if (r.AM_Location__r.Country__c == c.Country__c) {
                    switch on r.AM_Type__c {
                        when 'Computer' {
                            totalc ++;
                            if(r.AM_Status__c == 'Assigned') { acomputer.put('Assigned',(Integer) acomputer.get('Assigned')+1); }
                            if(r.AM_Out_of_Service__c) { acomputer.put('Out_of_service',(Integer) acomputer.get('Out_of_service')+1); }
                        }
                        when 'Mobile Phone' {
                            totalm ++;
                            if(r.AM_Status__c == 'Assigned') { amobile.put('Assigned',(Integer) amobile.get('Assigned')+1); }
                            if(r.AM_Out_of_Service__c) { amobile.put('Out_of_service',(Integer) amobile.get('Out_of_service')+1); }
                        }
                        when else {
                            aperipherals.put(r.Name__c, (Integer) aperipherals.get(r.Name__c)+1);
                        }
                    }
                    
                }
            }
            acomputer.put('Not_Assigned', totalc - (Integer) acomputer.get('Assigned'));
            amobile.put('Not_Assigned', totalm - (Integer) amobile.get('Assigned'));
            country.put(c.Country__c,new List<Object>{acomputer, amobile, aperipherals});
        }
        //Log country json results
        System.debug(JSON.serialize(new Map<String,Object>{'country'=> country}));
        //return results
        RestContext.response.addHeader('Content-Type', 'application/json');
        return JSON.serialize(new Map<String,Object>{'country'=> country});
    }
}