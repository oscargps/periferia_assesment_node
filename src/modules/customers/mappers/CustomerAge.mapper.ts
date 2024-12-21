import { ICustomer } from "../entities/customer.entity";
import { calculateAge } from "../helpers/CalculateAge.helper";
import { ICustomerAge } from "../models/CustomerAge.model";

class CustomerAgeMapper {


    map(customers: ICustomer[]): ICustomerAge[] {
        return customers.map(customer => ({
            fullName: customer.fullName,
            age: calculateAge(customer.dateOfBirth),
        })).sort((a, b) => a.age - b.age);
    }
}

const customerMapperInstance = new CustomerAgeMapper();
export default customerMapperInstance;