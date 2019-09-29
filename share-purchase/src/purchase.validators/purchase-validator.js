class PurchaseValidator{
    constructor(obj) {
        obj && Object.assign(this, obj);
        this.errorList = new Array();
    }

    validate(){
        this._validateInvestorId();
        this._validateSymbol();
        this._validatePrice();
        this._validateAmount();        

        return this.errorList;
    }

    _validateInvestorId(){
        if(this.InvestorId === null || this.InvestorId === "" || this.Symbol === " ")
            this.errorList.push("Investor ID is mandatory");
    } 

    _validateSymbol(){
        if(this.Symbol === null || this.Symbol === "" || this.Symbol === " ")
            this.errorList.push("Symbol is mandatory");
    }

    _validatePrice(){
        if(!this.Price > 0)
            this.errorList.push("Price must be higher than zero");
    }

    _validateAmount(){
        if(!this.Amount > 0)
            this.errorList.push("Amount must be higher than zero");
    }
}
exports.PurchaseValidator = PurchaseValidator;