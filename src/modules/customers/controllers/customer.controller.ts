import httpStatus from "http-status";
import { Request, Response } from "express";
import { ICustomer } from "../entities/customer.entity";
import CustomerService from "../services/customer.service";
var debug = require('debug')('periferia:customerController');

class CustomerController {

    public customerService: CustomerService;

    constructor(){
        this.customerService = new CustomerService();
    }

    public async getAllByName(req: Request, res: Response, next: any) {
        try {
            const customers = await customerControllerInstance.customerService.getAllCustomersByName()
            debug("CUSTOMER RESPONSE %o", customers);
            res.status(httpStatus.OK).json(customers);
        } catch (error: any) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ result: "FAIL TO GET CUSTOMERS" });
        }
    }

    public async create(req: Request, res: Response, next: any) {
        const data = req.body as ICustomer
        debug("CREATING NEW CUSTOMER %o", data);
        try {
            await customerControllerInstance.customerService.createCustomer(data)
            res.status(httpStatus.OK).json({ result: "customer created" });
        } catch (error: any) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ result: "FAIL TO CREATE CUSTOMER" });
        }
    }
}

const customerControllerInstance = new CustomerController();
export default customerControllerInstance;
