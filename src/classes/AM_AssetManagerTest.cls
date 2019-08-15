@isTest
public class AM_AssetManagerTest {
	@isTest static void testGetAssets() {
        createTestRecord();
        // Set up a test request
        RestRequest request = new RestRequest();
        request.requestUri = 'https://cs63.lightning.force.com/services/apexrest/Assets/';
        request.httpMethod = 'GET';
        RestContext.request = request;
        // Call the method to test
        Test.startTest();
        AM_AssetManager.getAssets();
        Test.stopTest();
    }
    static void createTestRecord() {
        // Create test record
        AM_Location__c country = new AM_Location__c(Country__c ='Perú');
        insert country;
        AM_Asset__c asset = new AM_Asset__c(Name__c ='Computer', AM_Type__c='Computer', AM_Location__c=country.Id);
        insert asset;
        AM_Asset__c asset2 = new AM_Asset__c(Name__c ='Mobile Phone', AM_Type__c='Mobile Phone', AM_Location__c=country.Id);
        insert asset2;
        AM_Asset__c asset3 = new AM_Asset__c(Name__c ='Keyboard', AM_Type__c='Peripherals', AM_Location__c=country.Id);
        insert asset3;
    } 
}