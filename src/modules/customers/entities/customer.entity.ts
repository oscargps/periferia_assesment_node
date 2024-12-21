import { Model, DataTypes, Sequelize } from "sequelize";
import ConnectionDB from "../../core/services/db/db.service";

export interface ICustomer {
    id: number;
    fullName: string;
    identityDocument: string;
    email: string;
    dateOfBirth: Date;
    timeZone: string;
}

class Customer extends Model<ICustomer> {
    public id!: number;
    public fullName!: string;
    public identityDocument!: string;
    public email!: string;
    public dateOfBirth!: Date;
    public timeZone!: string;
}

const sequelize: Sequelize = ConnectionDB.getConnection();

Customer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        identityDocument: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true, 
            },
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        timeZone: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "customers",
        timestamps: false,
        underscored: true,
    }
);

export default Customer;
