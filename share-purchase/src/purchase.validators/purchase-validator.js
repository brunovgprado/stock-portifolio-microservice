class PurchaseValidator{
    constructor(obj) {
        obj && Object.assign(this, obj);
        this.errorList = new Array();
    }

    validate(){
        validateInvestorId();
        validateSymbol();
        validatePrice();
        validateAmount();

        return this.errorList;
    }
    validateInvestorId(){
        if(this.InvestorId !== null || this.InvestorId !== '')
            this.errorList.push("Investor ID is mandatory");
    }  
    validateSymbol(){
        if(this.Symbol !== null || this.Symbol !== '')
            this.errorList.push("Symbol is mandatory");
    }
    validatePrice(){
        if(!this.Price > 0)
            this.errorList.push("Price must be higher than zero");
    }
    validateAmount(){
        if(!this.Amount > 0)
            this.errorList.push("Amount must be higher than zero");
    }
}
exports.PurchaseValidator = PurchaseValidator;