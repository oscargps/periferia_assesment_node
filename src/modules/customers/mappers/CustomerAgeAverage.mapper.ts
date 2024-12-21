import { ICustomerAge, ICustomerAgeAverage } from "../models/CustomerAge.model";

class CustomerAgeAverageMapper {


    map(customers: ICustomerAge[]): ICustomerAgeAverage {
        const totalAge = customers.reduce((sum, customer) => sum + customer.age, 0);
        const ageAverage = customers.length > 0 ? totalAge / customers.length : 0;
        return {
            customerCount: customers.length,
            ageAverage
        }
    }
}

const customerAgeAverageMapperInstance = new CustomerAgeAverageMapper();
export default customerAgeAverageMapperInstance;