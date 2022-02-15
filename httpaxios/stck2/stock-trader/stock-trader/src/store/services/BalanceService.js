import connection from "./httpcomons"

class BalanceService {
    get(){        
        return connection.get('/stocktrader/todaysBalance.json')
    }
}
export default new BalanceService()