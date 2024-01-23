import { Client, Account,ID } from "appwrite";
import appwriteConfig from '../appwriteConfig/appwriteConfig';

class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(appwriteConfig.appwriteEndpoint)
            .setProject(appwriteConfig.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // create account method
    async createAccount({email, password, name}){
        try {
            const user = await this.account.create(ID.unique, email, password, name);
            if (user) {
                //call another method
                return this.login({email, password});
            }else{
                return user;
            }
        } catch (error) {
            throw error;
        }

    }

    // login method
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    // get current user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }
    // logout method

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

}
const authService = new Authservice();
export default authService;