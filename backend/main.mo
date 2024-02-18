import Array "mo:base/Array";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Nat "mo:base/Nat";
import Float "mo:base/Float";

actor {
  type Cars = { engineNo:Text; 
                dateCarBought:Text; 
                mileageToDoService:Float; 
                plateNo:Text; 
                addedBy:Text; 
                statusOfCar:Text; 
                audometerOnBuying:Float; 
                carName:Text; 
                carType:Text; 
                department:Text
    };
    stable var carsData : [Cars] = [];
    
    
    type DriverAndHR = {
      hr:Text; 
      punishment:Text; 
      judgement:Text; 
      offense:Float; 
      driver:Text
    };
    stable var driversAndHRData : [DriverAndHR] = [];
    type CarAndDriver = {
      destination:Text; 
      initialOdometerOnStartingJourney:Float; 
      email:Text; 
      plateNo:Text; 
      finalOdometerOnFinishingJourney:Float; 
      dateAndTime:Text; 
      comments:Text; 
      purpose:Text
    };
    stable var carsAndDriversData : [CarAndDriver] = [];
    type Driver = {
      ratings:Float; 
      email:Text; 
      level:Text; 
      experience:Text; 
      licenseNo:Text; 
      classLicense:Nat
    };
    stable var driversData : [Driver] = [];
    type EmpsAndCar = {
      supervisor:Text; 
      status:Text; 
      tasks:Text; 
      employee:Text;
      importance:Text
    };
    stable var empsAndCarData : [EmpsAndCar] = [];
    type User = {
      dob:Text; 
      sex:Text; 
      title:Text; 
      contact:Nat; 
      userHistory:Text; 
      duty:Text; 
      idNo:Text; 
      name:Text; 
      surname:Text; 
      email:Text; 
      addedBy:Text; 
      address:Text
    };
    stable var userData : [User] = [];
    type CarsAndInsurance = {
      email:Text; 
      plateNo:Text;
      datePaidCarInsur:Text; 
      amountPaidOfInsur:Nat;
      expiryDateOfRadioInsur:Text; 
      datePaidRadioInsur:Text; 
      expiryDateOfInsur:Text; 
      amountPaidOfRadioInsur:Float; 
       
    };
    stable var carsAndInsuranceData : [CarsAndInsurance] = [];
    type CarsAndService = {
      email:Text; 
      plateNo:Text;
      dateOfService:Text; 
      costOfService:Float; 
      servicedAt:Text
    };
    stable var carsAndServiceData : [CarsAndService] = [];
    type CarsAndFuel = {
      email:Text;
      plateNo:Text; 
      fuelCardPaymentDay:Text; 
      fuelCardType:Text;
      fuelCardAmount:Float;
    };
    stable var carsAndFuelData : [CarsAndFuel] = [];
    type CarsAndZinara = {
      email:Text; 
      plateNo:Text; 
      zinaraPaymentDate:Text;
      zinaraExpiryDate:Text;
      zinarPaymentsAmount:Float;  
    };
    stable var carsAndZinaraData : [CarsAndZinara] = [];
    type DriverAndAccountants = {
      accountant:Text; 
      signedBy:Text; 
      purposeOfMoney:Text; 
      amountGiven:Float; 
      driver:Text
    };
    stable var driversAndAccountsData : [DriverAndAccountants] = [];
  public func searchCarData(value : Text) : async [Cars] {
    var results : [Cars] = [];
    let len = Array.size(carsData);
    for(i in Iter.range(0, len - 1)){
      if(carsData[i].plateNo == value){
        var search : Cars = carsData[i];
        results := Array.append<Cars>(results, [search]);
      }
    };
    return results;
  };
  public func searchCarAndInsuranceData(value : Text) : async [CarsAndInsurance] {
    var results : [CarsAndInsurance] = [];
    let len = Array.size(carsAndInsuranceData);
    for(i in Iter.range(0, len - 1)){
      if(carsAndInsuranceData[i].plateNo == value){
        var search : CarsAndInsurance = carsAndInsuranceData[i];
        results := Array.append<CarsAndInsurance>(results, [search]);
      }
    };
    return results;
  };
  public func searchCarAndServiceData(value : Text) : async [CarsAndService] {
    var results : [CarsAndService] = [];
    let len = Array.size(carsAndServiceData);
    for(i in Iter.range(0, len - 1)){
      if(carsAndServiceData[i].plateNo == value){
        var search : CarsAndService = carsAndServiceData[i];
        results := Array.append<CarsAndService>(results, [search]);
      }
    };
    return results;
  };
  public func searchCarAndFuelData(value : Text) : async [CarsAndFuel] {
    var results : [CarsAndFuel] = [];
    let len = Array.size(carsAndFuelData);
    for(i in Iter.range(0, len - 1)){
      if(carsAndFuelData[i].plateNo == value){
        var search : CarsAndFuel = carsAndFuelData[i];
        results := Array.append<CarsAndFuel>(results, [search]);
      }
    };
    return results;
  };
  public func searchCarAndZinaraData(value : Text) : async [CarsAndZinara] {
    var results : [CarsAndZinara] = [];
    let len = Array.size(carsAndZinaraData);
    for(i in Iter.range(0, len - 1)){
      if(carsAndZinaraData[i].plateNo == value){
        var search : CarsAndZinara = carsAndZinaraData[i];
        results := Array.append<CarsAndZinara>(results, [search]);
      }
    };
    return results;
  };
  public func searchDriverAndAccountantData(value : Text) : async [DriverAndAccountants] {
    var results : [DriverAndAccountants] = [];
    let len = Array.size(driversAndAccountsData);
    for(i in Iter.range(0, len - 1)){
      if(driversAndAccountsData[i].accountant == value){
        var search : DriverAndAccountants = driversAndAccountsData[i];
        results := Array.append<DriverAndAccountants>(results, [search]);
      }
    };
    return results;
  };
  public func searchDriverAnHrData(value : Text) : async [DriverAndHR] {
    var results : [DriverAndHR] = [];
    let len = Array.size(driversAndHRData);
    for(i in Iter.range(0, len - 1)){
      if(driversAndHRData[i].driver == value){
        var search : DriverAndHR = driversAndHRData[i];
        results := Array.append<DriverAndHR>(results, [search]);
      }
    };
    return results;
  };
  public func searchCarAndDriverData(value : Text) : async [CarAndDriver] {
    var results : [CarAndDriver] = [];
    let len = Array.size(carsAndDriversData);
    for(i in Iter.range(0, len - 1)){
      if(carsAndDriversData[i].email == value){
        var search : CarAndDriver = carsAndDriversData[i];
        results := Array.append<CarAndDriver>(results, [search]);
      }
    };
    return results;
  };
  public func searchDriverData(value : Text) : async [Driver] {
    var results : [Driver] = [];
    let len = Array.size(driversData);
    for(i in Iter.range(0, len - 1)){
      if(driversData[i].email == value){
        var search : Driver = driversData[i];
        results := Array.append<Driver>(results, [search]);
      }
    };
    return results;
  };
  public func searchEmpAndCarData(value : Text) : async [EmpsAndCar] {
    var results : [EmpsAndCar] = [];
    let len = Array.size(empsAndCarData);
    for(i in Iter.range(0, len - 1)){
      if(empsAndCarData[i].employee == value){
        var search : EmpsAndCar = empsAndCarData[i];
        results := Array.append<EmpsAndCar>(results, [search]);
      }
    };
    return results;
  };
  public func searchUsersData(value : Text) : async [User] {
    var results : [User] = [];
    let len = Array.size(userData);
    for(i in Iter.range(0, len - 1)){
      if(userData[i].email == value){
        var search : User = userData[i];
        results := Array.append<User>(results, [search]);
      }
    };
    return results;
  };
  public func addCarsAndInsurance(carInsur : CarsAndInsurance) : async () {
    carsAndInsuranceData := Array.append<CarsAndInsurance>(carsAndInsuranceData,[carInsur]);
  };
  public func addCarAndService(carService : CarsAndService) : async () {
    carsAndServiceData := Array.append<CarsAndService>(carsAndServiceData,[carService]);
  };
  public func addCarAndFuel(carFuel : CarsAndFuel) : async () {
    carsAndFuelData := Array.append<CarsAndFuel>(carsAndFuelData,[carFuel]);
  };
  public func addCarAndZanara(carZinara : CarsAndZinara) : async () {
    carsAndZinaraData := Array.append<CarsAndZinara>(carsAndZinaraData,[carZinara]);
  };
  public func addCar(car : Cars) : async () {
    carsData := Array.append<Cars>(carsData,[car]);
  };
  // public func addCarAndAccountant(carAndAccount : CarsAndAccounts) : async () {
  //   carsAndAccountsData := Array.append<CarsAndAccounts>(carsAndAccountsData,[carAndAccount]);
  // };
  public func addDriverAndAccountant(driverAndAccount : DriverAndAccountants) : async () {
    driversAndAccountsData := Array.append<DriverAndAccountants>(driversAndAccountsData,[driverAndAccount]);
  };
  public func addDriverAndHr(driverAndHr : DriverAndHR) : async () {
    driversAndHRData := Array.append<DriverAndHR>(driversAndHRData,[driverAndHr]);
  };
  public func addCarAndDriver(carAndDriver : CarAndDriver) : async () {
    carsAndDriversData := Array.append<CarAndDriver>(carsAndDriversData,[carAndDriver]);
  };
  public func addDriver(driver : Driver) : async () {
    driversData := Array.append<Driver>(driversData,[driver]);
  };
  public func addEmpAndCar(empAndCar : EmpsAndCar) : async () {
    empsAndCarData := Array.append<EmpsAndCar>(empsAndCarData,[empAndCar]);
  };
  public func addUser(user : User) : async () {
    userData := Array.append<User>(userData,[user]);
  };
  public query func getCarsAndInsuranceData() : async [CarsAndInsurance] {
    return carsAndInsuranceData;
  };
  public query func getCarsAndServiceData() : async [CarsAndService] {
    return carsAndServiceData;
  };
  public query func getCarsAndFuelData() : async [CarsAndFuel] {
    return carsAndFuelData;
  };
  public query func getCarsAndZinaraData() : async [CarsAndZinara] {
    return carsAndZinaraData;
  };
  public query func getCarsData() : async [Cars] {
    return carsData;
  };
  // public query func getCarsAndAccountantsData() : async [CarsAndAccounts] {
  //   return carsAndAccountsData;
  // };
  public query func getDriversAndAccountantsData() : async [DriverAndAccountants] {
    return driversAndAccountsData;
  };
  public query func getDriversAndHRData() : async [DriverAndHR] {
    return driversAndHRData;
  };
  public query func getCarsAndDriversData() : async [CarAndDriver] {
    return carsAndDriversData;
  };
  public query func getDriversData() : async [Driver] {
    return driversData;
  };
  public query func getEmpsAndDriversData() : async [EmpsAndCar] {
    return empsAndCarData;
  };
  public query func getUsersData() : async [User] {
    return userData;
  };

};

