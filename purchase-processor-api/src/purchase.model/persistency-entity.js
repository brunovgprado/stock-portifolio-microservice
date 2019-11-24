class PersistencyEntity{
    constructor(){
        this.TableName = "";
        this.Item = {
            InvestorId: "",
            PurchaseId: "",
            Symbol: "",
            Price: 0.0,
            Amount: 0,
            OperationRate: 0.0,
            Status: ""
        };
    }
}
exports.PersistencyEntity = PersistencyEntity;