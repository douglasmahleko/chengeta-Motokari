import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CarAndDriver {
  'destination' : string,
  'initialOdometerOnStartingJourney' : number,
  'email' : string,
  'plateNo' : string,
  'finalOdometerOnFinishingJourney' : number,
  'dateAndTime' : string,
  'comments' : string,
  'availabilty' : boolean,
  'purpose' : string,
}
export interface Cars {
  'engineNo' : string,
  'dateCarBought' : string,
  'mileageToDoService' : number,
  'plateNo' : string,
  'addedBy' : string,
  'statusOfCar' : string,
  'audometerOnBuying' : bigint,
  'carName' : string,
  'carType' : string,
  'department' : string,
}
export interface CarsAndAccounts {
  'fuelCardType' : string,
  'dateOfService' : string,
  'costOfService' : number,
  'datePaidCarInsur' : string,
  'zinaraEpiryDate' : string,
  'datePaidInsur' : string,
  'expiryDateOfInsur' : string,
  'zinarPaymentsAmount' : number,
  'fuelCardPaymentDay' : string,
  'zinaraPaymentDate' : string,
  'email' : string,
  'amountPaidofCarInsur' : number,
  'plateNo' : string,
  'expiryDateOfRadioInsur' : string,
  'amountPaidOfInsur' : bigint,
  'fuelCardAmount' : number,
}
export interface Driver {
  'ratings' : number,
  'email' : string,
  'level' : string,
  'experience' : string,
  'licenseNo' : string,
  'classLicense' : bigint,
}
export interface DriverAndAccountants {
  'accountant' : string,
  'signedBy' : string,
  'purposeOfMoney' : string,
  'amountGiven' : number,
  'driver' : string,
}
export interface DriverAndHR {
  'hr' : string,
  'punishment' : string,
  'judgement' : string,
  'offense' : number,
  'driver' : string,
}
export interface EmpsAndCar {
  'supervisor' : string,
  'status' : string,
  'task' : string,
  'deadLine' : string,
  'importance' : string,
  'employee' : string,
}
export interface User {
  'dob' : string,
  'sex' : string,
  'title' : string,
  'contact' : bigint,
  'userHistory' : string,
  'duty' : string,
  'idNo' : string,
  'name' : string,
  'surname' : string,
  'email' : string,
  'addedBy' : string,
  'address' : string,
}
export interface _SERVICE {
  'addCar' : ActorMethod<[Cars], undefined>,
  'addCarAndAccountant' : ActorMethod<[CarsAndAccounts], undefined>,
  'addCarAndDriver' : ActorMethod<[CarAndDriver], undefined>,
  'addDriver' : ActorMethod<[Driver], undefined>,
  'addDriverAndAccountant' : ActorMethod<[DriverAndAccountants], undefined>,
  'addDriverAndHr' : ActorMethod<[DriverAndHR], undefined>,
  'addEmpAndCar' : ActorMethod<[EmpsAndCar], undefined>,
  'addUser' : ActorMethod<[User], undefined>,
  'getCarsAndAccountantsData' : ActorMethod<[], Array<CarsAndAccounts>>,
  'getCarsAndDriversData' : ActorMethod<[], Array<CarAndDriver>>,
  'getCarsData' : ActorMethod<[], Array<Cars>>,
  'getDriversAndAccountantsData' : ActorMethod<[], Array<DriverAndAccountants>>,
  'getDriversAndHRData' : ActorMethod<[], Array<DriverAndHR>>,
  'getDriversData' : ActorMethod<[], Array<Driver>>,
  'getEmpsAndDriversData' : ActorMethod<[], Array<EmpsAndCar>>,
  'getUsersData' : ActorMethod<[], Array<User>>,
  'searchCarAndAccountantData' : ActorMethod<[string], Array<CarsAndAccounts>>,
  'searchCarAndDriverData' : ActorMethod<[string], Array<CarAndDriver>>,
  'searchCarData' : ActorMethod<[string], Array<Cars>>,
  'searchDriverAnHrData' : ActorMethod<[string], Array<DriverAndHR>>,
  'searchDriverAndAccountantData' : ActorMethod<
    [string],
    Array<DriverAndAccountants>
  >,
  'searchDriverData' : ActorMethod<[string], Array<Driver>>,
  'searchEmpAndCarData' : ActorMethod<[string], Array<EmpsAndCar>>,
  'searchUsersData' : ActorMethod<[string], Array<User>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
