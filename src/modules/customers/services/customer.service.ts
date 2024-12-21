import Customer, { ICustomer } from "../entities/customer.entity";
import customerMapperInstance from "../mappers/customerAge.mapper";

var debug = require('debug')('periferia:customerService');


class CustomerService {

    public async getAllCustomersByName() {
        try {
            debug('GETING ALL CUSTOMERS');
            return await Customer.findAll({
                order:["full_name"]
            });
        } catch (error: any) {
            debug("FAIL TO GET CUSTOMERS, ERROR:", error)
            throw new Error(error);
        }
    }

    public async createCustomer(dataCustomer: ICustomer): Promise<any> {
        try {
            await Customer.create(dataCustomer);
        } catch (error: any) {
            debug("FAIL TO CREATE CUSTOMER, ERROR:", error)
            throw new Error(error)
        }
    }

    public async getAllByAge() {
        try {
            debug('GETING ALL CUSTOMERS BY AGE');
            const customers =  await Customer.findAll();
            return customerMapperInstance.map(customers)
        } catch (error: any) {
            debug("FAIL TO GET CUSTOMERS, ERROR:", error)
            throw new Error(error);
        }
    }
}

export default CustomerService;
