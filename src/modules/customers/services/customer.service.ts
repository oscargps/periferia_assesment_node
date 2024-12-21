import Customer, { ICustomer } from "../entities/customer.entity";

var debug = require('debug')('periferia:customerService');


class CustomerService {


    public async createCustomer(dataCustomer: ICustomer): Promise<any> {
        try {
            await Customer.create(dataCustomer);
        } catch (error: any) {
            debug("FAIL TO CREATE CUSTOMER, ERROR:", error)
            throw new Error(error)
        }
    }
}

export default CustomerService;
