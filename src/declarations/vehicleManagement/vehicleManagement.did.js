export const idlFactory = ({ IDL }) => {
  const Cars = IDL.Record({
    'engineNo' : IDL.Text,
    'dateCarBought' : IDL.Text,
    'mileageToDoService' : IDL.Float64,
    'plateNo' : IDL.Text,
    'addedBy' : IDL.Text,
    'statusOfCar' : IDL.Text,
    'audometerOnBuying' : IDL.Nat,
    'carName' : IDL.Text,
    'carType' : IDL.Text,
    'department' : IDL.Text,
  });
  const CarsAndAccounts = IDL.Record({
    'fuelCardType' : IDL.Text,
    'dateOfService' : IDL.Text,
    'costOfService' : IDL.Float64,
    'datePaidCarInsur' : IDL.Text,
    'zinaraEpiryDate' : IDL.Text,
    'datePaidInsur' : IDL.Text,
    'expiryDateOfInsur' : IDL.Text,
    'zinarPaymentsAmount' : IDL.Float64,
    'fuelCardPaymentDay' : IDL.Text,
    'zinaraPaymentDate' : IDL.Text,
    'email' : IDL.Text,
    'amountPaidofCarInsur' : IDL.Float64,
    'plateNo' : IDL.Text,
    'expiryDateOfRadioInsur' : IDL.Text,
    'amountPaidOfInsur' : IDL.Nat,
    'fuelCardAmount' : IDL.Float64,
  });
  const CarAndDriver = IDL.Record({
    'destination' : IDL.Text,
    'initialOdometerOnStartingJourney' : IDL.Float64,
    'email' : IDL.Text,
    'plateNo' : IDL.Text,
    'finalOdometerOnFinishingJourney' : IDL.Float64,
    'dateAndTime' : IDL.Text,
    'comments' : IDL.Text,
    'availabilty' : IDL.Bool,
    'purpose' : IDL.Text,
  });
  const Driver = IDL.Record({
    'ratings' : IDL.Float64,
    'email' : IDL.Text,
    'level' : IDL.Text,
    'experience' : IDL.Text,
    'licenseNo' : IDL.Text,
    'classLicense' : IDL.Nat,
  });
  const DriverAndAccountants = IDL.Record({
    'accountant' : IDL.Text,
    'signedBy' : IDL.Text,
    'purposeOfMoney' : IDL.Text,
    'amountGiven' : IDL.Float64,
    'driver' : IDL.Text,
  });
  const DriverAndHR = IDL.Record({
    'hr' : IDL.Text,
    'punishment' : IDL.Text,
    'judgement' : IDL.Text,
    'offense' : IDL.Float64,
    'driver' : IDL.Text,
  });
  const EmpsAndCar = IDL.Record({
    'supervisor' : IDL.Text,
    'status' : IDL.Text,
    'task' : IDL.Text,
    'deadLine' : IDL.Text,
    'importance' : IDL.Text,
    'employee' : IDL.Text,
  });
  const User = IDL.Record({
    'dob' : IDL.Text,
    'sex' : IDL.Text,
    'title' : IDL.Text,
    'contact' : IDL.Nat,
    'userHistory' : IDL.Text,
    'duty' : IDL.Text,
    'idNo' : IDL.Text,
    'name' : IDL.Text,
    'surname' : IDL.Text,
    'email' : IDL.Text,
    'addedBy' : IDL.Text,
    'address' : IDL.Text,
  });
  return IDL.Service({
    'addCar' : IDL.Func([Cars], [], []),
    'addCarAndAccountant' : IDL.Func([CarsAndAccounts], [], []),
    'addCarAndDriver' : IDL.Func([CarAndDriver], [], []),
    'addDriver' : IDL.Func([Driver], [], []),
    'addDriverAndAccountant' : IDL.Func([DriverAndAccountants], [], []),
    'addDriverAndHr' : IDL.Func([DriverAndHR], [], []),
    'addEmpAndCar' : IDL.Func([EmpsAndCar], [], []),
    'addUser' : IDL.Func([User], [], []),
    'getCarsAndAccountantsData' : IDL.Func(
        [],
        [IDL.Vec(CarsAndAccounts)],
        ['query'],
      ),
    'getCarsAndDriversData' : IDL.Func([], [IDL.Vec(CarAndDriver)], ['query']),
    'getCarsData' : IDL.Func([], [IDL.Vec(Cars)], ['query']),
    'getDriversAndAccountantsData' : IDL.Func(
        [],
        [IDL.Vec(DriverAndAccountants)],
        ['query'],
      ),
    'getDriversAndHRData' : IDL.Func([], [IDL.Vec(DriverAndHR)], ['query']),
    'getDriversData' : IDL.Func([], [IDL.Vec(Driver)], ['query']),
    'getEmpsAndDriversData' : IDL.Func([], [IDL.Vec(EmpsAndCar)], ['query']),
    'getUsersData' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'searchCarAndAccountantData' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(CarsAndAccounts)],
        [],
      ),
    'searchCarAndDriverData' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(CarAndDriver)],
        [],
      ),
    'searchCarData' : IDL.Func([IDL.Text], [IDL.Vec(Cars)], []),
    'searchDriverAnHrData' : IDL.Func([IDL.Text], [IDL.Vec(DriverAndHR)], []),
    'searchDriverAndAccountantData' : IDL.Func(
        [IDL.Text],
        [IDL.Vec(DriverAndAccountants)],
        [],
      ),
    'searchDriverData' : IDL.Func([IDL.Text], [IDL.Vec(Driver)], []),
    'searchEmpAndCarData' : IDL.Func([IDL.Text], [IDL.Vec(EmpsAndCar)], []),
    'searchUsersData' : IDL.Func([IDL.Text], [IDL.Vec(User)], []),
  });
};
export const init = ({ IDL }) => { return []; };
