class PurchaseValidator{
    constructor() {
        this.errorList = new Array();				
    }

    validate(obj){
        obj = (typeof obj !== "object") ? {} : obj;

        this._validateInvestorId(obj.InvestorId);
        this._validateSymbol(obj.Symbol);
        this._validatePrice(obj.Price);
        this._validateAmount(obj.Amount);        

        return this.errorList;
    }

    isValid(){
        return this.errorList.length === 0;
    }

    _validateInvestorId(InvestorId){
        if(InvestorId === null || InvestorId === "" || InvestorId === " ")
            this.errorList.push("Investor ID is mandatory");
    } 

    _validateSymbol(Symbol){
        if(Symbol === null || Symbol === "" || Symbol === " ")
            this.errorList.push("Symbol is mandatory");
    }

    _validatePrice(Price){
        if(!Price > 0)
            this.errorList.push("Price must be higher than zero");
    }

    _validateAmount(Amount){
        if(!Amount > 0)
            this.errorList.push("Amount must be higher than zero");
    }
}
exports.PurchaseValidator = PurchaseValidator;