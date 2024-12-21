import { Router } from "express";
import customerControllerInstance from "../controllers/customer.controller";
class CustomerRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.post("/new", customerControllerInstance.create);
    this.router.get("/all", customerControllerInstance.getAllByName);
    this.router.get("/allByAge", customerControllerInstance.getAllByAge);
    this.router.get("/ageAverageCustomers", customerControllerInstance.getAverageAge);
  }
}

const customerRouter = new CustomerRouter();
export default customerRouter.router;