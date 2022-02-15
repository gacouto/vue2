class StocksService {
    getAll(){
        return this._vm.$http.get('/stocktrader/stocks.json')
    }
}
export default new StocksService()