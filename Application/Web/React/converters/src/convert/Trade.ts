//#region types

type ChargeSegments = {
    /**
     * @summary sum of buy price and sell price into quantity
     * @template (buyValue + sellValue) * quantity
     */
    Turnover: number,
    /**
     * @summary
     */
    Brokerage: number,
    /**
     * @name SecuritiesTransactionTaxTotal
     * @summary
     */
    STTTotal: number,
    /**
     * @summary
     */
    ExchangeTransactionCharge: number,
    /**
     * @summary
     */
    ClearingCharge: number,
    /**
     * @name GoodsAndServicesTax
     * @summary
     */
    GST: number,
    /**
     * @name SecuritiesAndExchangeBoardOfIndiaCharges
     * @summary
     */
    SEBICharges: number,
    /**
     * @summary
     */
    StampDuty: number,
    /**
     * @summary
     */
    TotalTaxAndCharges: number,
    /**
     * @summary
     */
    PointsToBreakeven: number,
    /**
     * @summary
     */
    NetProfitAndLose: number
};

//#endregion

//#region classes

export class BestBrokarage {

    //#region private functions

    //#region zerodha

    private static brokerageBuy = (buyPrice: number, quantity: number) => +(Math.min(20, buyPrice * quantity * 0.0003).toFixed(2));

    private static brokerageSell = (sellPrice: number, quantity: number) => +(Math.min(20, sellPrice * quantity * 0.0003).toFixed(2));

    private static intraDay = (buyPrice: number, sellPrice: number, quantity: number): ChargeSegments => {
        const Turnover = (buyPrice + sellPrice) * quantity;
        const Brokerage = +(BestBrokarage.brokerageBuy(buyPrice, quantity) + BestBrokarage.brokerageSell(sellPrice, quantity)).toFixed(2);
        const STTTotal = Math.round(+((sellPrice * quantity) * 0.00025).toFixed(2));
        const ExchangeTransactionCharge = +(0.0000345 * Turnover).toFixed(2);
        const ClearingCharge = 0;
        const GST = +(0.18 * (Brokerage + ExchangeTransactionCharge)).toFixed(2);
        const SEBICharges = +(Turnover * 0.000001).toFixed(2);
        const StampDuty = +((buyPrice * quantity) * 0.00003).toFixed(2);
        const TotalTaxAndCharges = +(Brokerage + STTTotal + ExchangeTransactionCharge + GST + SEBICharges + StampDuty).toFixed(2);
        const PointsToBreakeven = +(TotalTaxAndCharges / quantity).toFixed(2);
        const NetProfitAndLose = +(((sellPrice - buyPrice) * quantity) - TotalTaxAndCharges).toFixed(2);
        return ({
            Turnover,
            Brokerage,
            STTTotal,
            ExchangeTransactionCharge,
            ClearingCharge,
            GST,
            SEBICharges,
            StampDuty,
            TotalTaxAndCharges,
            PointsToBreakeven: isNaN(PointsToBreakeven) ? 0 : PointsToBreakeven,
            NetProfitAndLose
        });
    }

    private static deliveryEquity = (buyPrice: number, sellPrice: number, quantity: number): ChargeSegments => {
        const Turnover = (buyPrice + sellPrice) * quantity;
        const Brokerage = 0;
        const STTTotal = Math.round(+((Turnover * 0.001)).toFixed(2));
        const ExchangeTransactionCharge = +(0.0000345 * Turnover).toFixed(2);
        const ClearingCharge = +(0).toFixed(2);
        const GST = +(0.18 * (Brokerage + ExchangeTransactionCharge)).toFixed(2);
        const SEBICharges = +(Turnover * 0.000001).toFixed(2);
        const StampDuty = +(buyPrice * quantity * 0.00015).toFixed(2);
        const TotalTaxAndCharges = +(Brokerage + STTTotal + ExchangeTransactionCharge + ClearingCharge + GST + SEBICharges + StampDuty).toFixed(2);
        const PointsToBreakeven = +(TotalTaxAndCharges / quantity).toFixed(2);
        const NetProfitAndLose = +(((sellPrice - buyPrice) * quantity) - TotalTaxAndCharges).toFixed(2);
        return ({
            Turnover,
            Brokerage,
            STTTotal,
            ExchangeTransactionCharge,
            ClearingCharge,
            GST,
            SEBICharges,
            StampDuty,
            TotalTaxAndCharges,
            PointsToBreakeven: isNaN(PointsToBreakeven) ? 0 : PointsToBreakeven,
            NetProfitAndLose
        });
    }

    private static foFutures = (buyPrice: number, sellPrice: number, quantity: number, nse: boolean = false): ChargeSegments => {
        const Turnover = (buyPrice + sellPrice) * quantity;
        const Brokerage = +(BestBrokarage.brokerageBuy(buyPrice, quantity) + BestBrokarage.brokerageSell(sellPrice, quantity)).toFixed(2);
        const STTTotal = Math.round(+(sellPrice * quantity * 0.0001).toFixed(2));
        const ExchangeTransactionCharge = +(nse ? (0.00002 * Turnover) : 0).toFixed(2);
        const ClearingCharge = +(0).toFixed(2);
        const GST = +(0.18 * (Brokerage + ExchangeTransactionCharge)).toFixed(2);
        const SEBICharges = +(Turnover * 0.000001).toFixed(2);
        const StampDuty = +(buyPrice * quantity * 0.00002).toFixed(2);
        const TotalTaxAndCharges = +(Brokerage + STTTotal + ExchangeTransactionCharge + GST + SEBICharges + StampDuty).toFixed(2);
        const PointsToBreakeven = +(TotalTaxAndCharges / quantity).toFixed(2);
        const NetProfitAndLose = +(((sellPrice - buyPrice) * quantity) - TotalTaxAndCharges).toFixed(2);
        return ({
            Turnover,
            Brokerage,
            STTTotal,
            ExchangeTransactionCharge,
            ClearingCharge,
            GST,
            SEBICharges,
            StampDuty,
            TotalTaxAndCharges,
            PointsToBreakeven: isNaN(PointsToBreakeven) ? 0 : PointsToBreakeven,
            NetProfitAndLose
        });
    }

    private static foOptions = (buyPrice: number, sellPrice: number, quantity: number, nse: boolean = false): ChargeSegments => {
        const Turnover = (buyPrice + sellPrice) * quantity;
        const Brokerage = +(BestBrokarage.brokerageBuy(buyPrice, quantity) + BestBrokarage.brokerageSell(sellPrice, quantity)).toFixed(2);
        const STTTotal = Math.round(+(sellPrice * quantity * 0.0005).toFixed(2));
        const ExchangeTransactionCharge = +(nse ? (0.00053 * Turnover) : 0).toFixed(2);
        const ClearingCharge = +(0).toFixed(2);
        const GST = +(0.18 * (Brokerage + ExchangeTransactionCharge)).toFixed(2);
        const SEBICharges = +(Turnover * 0.000001).toFixed(2);
        const StampDuty = +(buyPrice * quantity * 0.00003).toFixed(2);
        const TotalTaxAndCharges = +(Brokerage + STTTotal + ExchangeTransactionCharge + GST + SEBICharges + StampDuty).toFixed(2);
        const PointsToBreakeven = +(TotalTaxAndCharges / quantity).toFixed(2);
        const NetProfitAndLose = +(((sellPrice - buyPrice) * quantity) - TotalTaxAndCharges).toFixed(2);
        return ({
            Turnover,
            Brokerage,
            STTTotal,
            ExchangeTransactionCharge,
            ClearingCharge,
            GST,
            SEBICharges,
            StampDuty,
            TotalTaxAndCharges,
            PointsToBreakeven: isNaN(PointsToBreakeven) ? 0 : PointsToBreakeven,
            NetProfitAndLose
        });
    }

    //#endregion

    //#endregion

    //#region static functions

    static zerodha = (buyPrice: number, sellPrice: number, quantity: number, nse: boolean = false) => ({
        intraDay: BestBrokarage.intraDay(buyPrice, sellPrice, quantity),
        deliveryEquity: BestBrokarage.deliveryEquity(buyPrice, sellPrice, quantity),
        foFutures: BestBrokarage.foFutures(buyPrice, sellPrice, quantity, nse),
        foOptions: BestBrokarage.foOptions(buyPrice, sellPrice, quantity, nse)
    });

    static angelBroking = (): ChargeSegments => ({
        Brokerage: 0,
        ClearingCharge: 0,
        ExchangeTransactionCharge: 0,
        GST: 0,
        NetProfitAndLose: 0,
        PointsToBreakeven: 0,
        SEBICharges: 0,
        STTTotal: 0,
        StampDuty: 0,
        TotalTaxAndCharges: 0,
        Turnover: 0
    });

    static aliceBlue = (): ChargeSegments => ({
        Brokerage: 0,
        ClearingCharge: 0,
        ExchangeTransactionCharge: 0,
        GST: 0,
        NetProfitAndLose: 0,
        PointsToBreakeven: 0,
        SEBICharges: 0,
        STTTotal: 0,
        StampDuty: 0,
        TotalTaxAndCharges: 0,
        Turnover: 0
    });

    static upStocks = (): ChargeSegments => ({
        Brokerage: 0,
        ClearingCharge: 0,
        ExchangeTransactionCharge: 0,
        GST: 0,
        NetProfitAndLose: 0,
        PointsToBreakeven: 0,
        SEBICharges: 0,
        STTTotal: 0,
        StampDuty: 0,
        TotalTaxAndCharges: 0,
        Turnover: 0
    });

    //#endregion

}

//#endregion