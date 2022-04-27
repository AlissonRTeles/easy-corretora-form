import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DispatcherService } from "./dispatcher.service";

@Injectable()
export class ApplicationDispatcherService {
    private INSURER_URI: string = ('https://test-apis.libertyseguros.com.br/cotador/auto/sandbox/v1/');

    constructor(private dispatcherService: DispatcherService) { }

    public getCotation = (): Observable<any> => {
        const url = `${this.INSURER_URI}cotation`;
        return this.dispatcherService.postAsync<any>(url, {
            "CalculateRequestAuto": {
                "BrokerProposalNumber": "",
                "SalesPartnerCode": "19",
                "StartDate": "2020-07-30",
                "EndDate": "2021-07-30",
                "CommissionPct": "15.0",
                "PolicyHolderIsEmployee": "F",
                "CommercialProductCode": "31111",
                "SalesStructure": {
                    "PublicIdNumber": "31002950888"
                },
                "Broker": {
                    "BrokerCode": "99005736",
                    "BrokerBranchCode": "0003",
                    "InternalBranchCode": "0116"
                },
                "CommissionParticipation": {
                    "BrokerCommission": [
                        {
                            "BrokerCode": "99005736",
                            "BrokerBranchCode": "0003",
                            "ParticipationPct": "100.0"
                        }
                    ]
                },
                "Vehicles": {
                    "Vehicle": [
                        {
                            "SequenceNumber": "1",
                            "ModelYear": "2018",
                            "ManufactureYear": "2018",
                            "Is0KM": "F",
                            "IsDealerOwnerVehicle": "F",
                            "ValueEstimationType": "R",
                            "SurchargeFactor": "0.00",
                            "HasLoJack": "F",
                            "LoJackCode": "",
                            "AdjustmentFactor": "1.00",
                            "ZipCode": "04175",
                            "CategoryCode": "10",
                            "FIPECode": "0044334",
                            "Fuel": "1",
                            "Plate": "",
                            "Chassis": "99ABJ68U4J4000187",
                            "IsRgnDiscSupported": "F",
                            "VehicleOwnerIsPolicyHolder": "T",
                            "UsageCode": "1",
                            "AdaptationCodes": {
                                "AdaptationCode": []
                            },
                            "PotentialDrivers": {
                                "PotentialDriver": [
                                    {
                                        "IsPolicyHolder": "T",
                                        "BirthDate": "1979-10-05",
                                        "PublicIdNumber": "85135710590",
                                        "Gender": "M",
                                        "Name": "TESTE SEGURADO",
                                        "IsDriver": "T",
                                        "DaysPerWeek": "3",
                                        "IsReferenceDriver": "T",
                                        "MaritalStatus": "S",
                                        "DriverType": "1",
                                        "IsIndividual": "T",
                                        "RelationalTypeCode": "0"
                                    },
                                    {
                                        "IsPolicyHolder": "T",
                                        "BirthDate": "1979-10-05",
                                        "PublicIdNumber": "85135710590",
                                        "Gender": "M",
                                        "Name": "TESTE SEGURADO",
                                        "IsDriver": "T",
                                        "DaysPerWeek": "3",
                                        "IsReferenceDriver": "T",
                                        "MaritalStatus": "S",
                                        "DriverType": "2",
                                        "IsIndividual": "T",
                                        "RelationalTypeCode": "1"
                                    },
                                    {
                                        "IsPolicyHolder": "T",
                                        "BirthDate": "1979-10-05",
                                        "PublicIdNumber": "85135710590",
                                        "Gender": "M",
                                        "Name": "TESTE SEGURADO",
                                        "IsDriver": "T",
                                        "DaysPerWeek": "3",
                                        "IsReferenceDriver": "T",
                                        "MaritalStatus": "S",
                                        "DriverType": "3",
                                        "IsIndividual": "T",
                                        "RelationalTypeCode": "1"
                                    }
                                ]
                            },
                            "ReferenceDriverProfile": {
                                "Question": [
                                    {
                                        "QuestionNumber": "143",
                                        "AnswerChoiceCode": "1324"
                                    },
                                    {
                                        "QuestionNumber": "147",
                                        "AnswerChoiceCode": "1351"
                                    },
                                    {
                                        "QuestionNumber": "148",
                                        "AnswerChoiceCode": "1353"
                                    },
                                    {
                                        "QuestionNumber": "149",
                                        "AnswerChoiceCode": "1357"
                                    },
                                    {
                                        "QuestionNumber": "150",
                                        "AnswerChoiceCode": "1361"
                                    }
                                ]
                            },
                            "VehicleCoverages": {
                                "VehicleCoverage": [
                                    {
                                        "CoverageReference": {
                                            "CoverageCode": "31001",
                                            "LineItemCode": "A01"
                                        },
                                        "InsuredAmount": "0.00",
                                        "OptionalPercentage": "0",
                                        "Deductible": {
                                            "Code": "10",
                                            "Level": "1.0"
                                        }
                                    },
                                    {
                                        "CoverageReference": {
                                            "CoverageCode": "53001",
                                            "LineItemCode": "A07"
                                        },
                                        "InsuredAmount": "100000.00",
                                        "OptionalPercentage": "0",
                                        "Deductible": {
                                            "Code": "0",
                                            "Level": "0.0"
                                        }
                                    },
                                    {
                                        "CoverageReference": {
                                            "CoverageCode": "53001",
                                            "LineItemCode": "A08"
                                        },
                                        "InsuredAmount": "100000.00",
                                        "OptionalPercentage": "0",
                                        "Deductible": {
                                            "Code": "0",
                                            "Level": "0.0"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        });
    }
    public getProposal = (): Observable<any> => {
        const url = `${this.INSURER_URI}proposal`;
        return this.dispatcherService.postAsync<any>(url, {
            "ValidateRequestAuto": {
                "CalculateRequestAuto": {
                    "BrokerProposalNumber": "5026202",
                    "SalesPartnerCode": "19",
                    "StartDate": "2020-07-30",
                    "EndDate": "2021-07-30",
                    "CommissionPct": "15.0",
                    "PolicyHolderIsEmployee": "F",
                    "CommercialProductCode": "31111",
                    "SalesStructure": {
                        "PublicIdNumber": "31002950888"
                    },
                    "Broker": {
                        "BrokerCode": "99005736",
                        "BrokerBranchCode": "0003",
                        "InternalBranchCode": "0116"
                    },
                    "CommissionParticipation": {
                        "BrokerCommission": [
                            {
                                "BrokerCode": "99005736",
                                "BrokerBranchCode": "0003",
                                "ParticipationPct": "100.0"
                            }
                        ]
                    },
                    "Vehicles": {
                        "Vehicle": [
                            {
                                "SequenceNumber": "1",
                                "ModelYear": "2018",
                                "ManufactureYear": "2018",
                                "Is0KM": "F",
                                "IsDealerOwnerVehicle": "F",
                                "ValueEstimationType": "R",
                                "SurchargeFactor": "0.00",
                                "HasLoJack": "F",
                                "LoJackCode": "",
                                "AdjustmentFactor": "1.00",
                                "ZipCode": "04175",
                                "CategoryCode": "10",
                                "FIPECode": "0044334",
                                "Fuel": "1",
                                "Plate": "DDD1231",
                                "Chassis": "99ABJ68U4J4000187",
                                "IsRgnDiscSupported": "F",
                                "VehicleOwnerIsPolicyHolder": "T",
                                "UsageCode": "1",
                                "AdaptationCodes": {
                                    "AdaptationCode": []
                                },
                                "PotentialDrivers": {
                                    "PotentialDriver": [
                                        {
                                            "IsPolicyHolder": "T",
                                            "BirthDate": "1979-10-05",
                                            "PublicIdNumber": "85135710590",
                                            "Gender": "M",
                                            "Name": "TESTE SEGURADO",
                                            "IsDriver": "T",
                                            "DaysPerWeek": "3",
                                            "IsReferenceDriver": "T",
                                            "MaritalStatus": "S",
                                            "DriverType": "1",
                                            "IsIndividual": "T",
                                            "RelationalTypeCode": "0"
                                        },
                                        {
                                            "IsPolicyHolder": "T",
                                            "BirthDate": "1979-10-05",
                                            "PublicIdNumber": "85135710590",
                                            "Gender": "M",
                                            "Name": "TESTE SEGURADO",
                                            "IsDriver": "T",
                                            "DaysPerWeek": "3",
                                            "IsReferenceDriver": "T",
                                            "MaritalStatus": "S",
                                            "DriverType": "2",
                                            "IsIndividual": "T",
                                            "RelationalTypeCode": "1"
                                        },
                                        {
                                            "IsPolicyHolder": "T",
                                            "BirthDate": "1979-10-05",
                                            "PublicIdNumber": "85135710590",
                                            "Gender": "M",
                                            "Name": "TESTE SEGURADO",
                                            "IsDriver": "T",
                                            "DaysPerWeek": "3",
                                            "IsReferenceDriver": "T",
                                            "MaritalStatus": "S",
                                            "DriverType": "3",
                                            "IsIndividual": "T",
                                            "RelationalTypeCode": "1"
                                        }
                                    ]
                                },
                                "ReferenceDriverProfile": {
                                    "Question": [
                                        {
                                            "QuestionNumber": "143",
                                            "AnswerChoiceCode": "1324"
                                        },
                                        {
                                            "QuestionNumber": "147",
                                            "AnswerChoiceCode": "1351"
                                        },
                                        {
                                            "QuestionNumber": "148",
                                            "AnswerChoiceCode": "1353"
                                        },
                                        {
                                            "QuestionNumber": "149",
                                            "AnswerChoiceCode": "1357"
                                        },
                                        {
                                            "QuestionNumber": "150",
                                            "AnswerChoiceCode": "1361"
                                        }
                                    ]
                                },
                                "VehicleCoverages": {
                                    "VehicleCoverage": [
                                        {
                                            "CoverageReference": {
                                                "CoverageCode": "31001",
                                                "LineItemCode": "A01"
                                            },
                                            "InsuredAmount": "0.00",
                                            "OptionalPercentage": "0",
                                            "Deductible": {
                                                "Code": "10",
                                                "Level": "1.0"
                                            }
                                        },
                                        {
                                            "CoverageReference": {
                                                "CoverageCode": "53001",
                                                "LineItemCode": "A07"
                                            },
                                            "InsuredAmount": "100000.00",
                                            "OptionalPercentage": "0",
                                            "Deductible": {
                                                "Code": "0",
                                                "Level": "0.0"
                                            }
                                        },
                                        {
                                            "CoverageReference": {
                                                "CoverageCode": "53001",
                                                "LineItemCode": "A08"
                                            },
                                            "InsuredAmount": "100000.00",
                                            "OptionalPercentage": "0",
                                            "Deductible": {
                                                "Code": "0",
                                                "Level": "0.0"
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                "CalculateResultAuto": {
                    "CalculationDate": "2020-07-30",
                    "QuoteType": "1",
                    "EndorsementType": "",
                    "TransientHashCode": "T",
                    "Version": "CTS.1.0.10520.0",
                    "ReferenceDate": "2020-07-30",
                    "BrokerProposalNumber": "5026202",
                    "NetTotalPremium": "2183.32",
                    "IsMinimumPremium": "F",
                    "ComercialDiscountSurcharge": "-11.76",
                    "Vehicles": {
                        "Vehicle": [
                            {
                                "SequenceNumber": "1",
                                "RegionalDiscountPct": "5.0",
                                "PromotionalDiscountPct": "0.0",
                                "PromotionalDiscountVlr": "0.0",
                                "HasPreinspection": "T",
                                "SurchargeFactor": "0.0",
                                "PartialLossFactor": "1.0",
                                "HasLoJack": "F",
                                "HasRestriction": "T",
                                "TotalProfileScore": "1.0",
                                "NetPremiumValue": "2183.32",
                                "UnusedPremiumValue": "0.00",
                                "IsReplacedVehicle": "F",
                                "ValueEstimationType": "R",
                                "VehicleCoverages": {
                                    "VehicleCoverage": [
                                        {
                                            "CoverageReference": {
                                                "CoverageCode": "31001",
                                                "LineItemCode": "A01"
                                            },
                                            "InsuredAmount": "46111.00",
                                            "HasDeductible": "T",
                                            "DeductibleValue": "3380.00",
                                            "OriginalDctblValue": "3380.00",
                                            "PremiumValue": "1457.15",
                                            "DiscountValue": "0.00",
                                            "HasMinimumPremium": "F",
                                            "AnnualPremiumValue": "1457.15",
                                            "TotalProfileScore": "10.0000",
                                            "Deductible": {
                                                "Code": "10",
                                                "Level": "1"
                                            }
                                        },
                                        {
                                            "CoverageReference": null,
                                            "HasDeductible": "F",
                                            "TotalProfileScore": "10.0000"
                                        },
                                        {
                                            "CoverageReference": {
                                                "CoverageCode": "53001",
                                                "LineItemCode": "A07"
                                            },
                                            "InsuredAmount": "100000.00",
                                            "HasDeductible": "F",
                                            "HasMinimumPremium": "F",
                                            "AnnualPremiumValue": "609.65",
                                            "TotalProfileScore": "10.0000"
                                        },
                                        {
                                            "CoverageReference": {
                                                "CoverageCode": "53001",
                                                "LineItemCode": "A08"
                                            },
                                            "InsuredAmount": "100000.00",
                                            "HasDeductible": "F",
                                            "HasMinimumPremium": "F",
                                            "AnnualPremiumValue": "116.52",
                                            "TotalProfileScore": "10.0000"
                                        }
                                    ]
                                },
                                "ReferenceDriverProfile": {
                                    "Question": [
                                        {
                                            "QuestionNumber": "143",
                                            "AnswerChoiceCode": "1324"
                                        },
                                        {
                                            "QuestionNumber": "147",
                                            "AnswerChoiceCode": "1351"
                                        },
                                        {
                                            "QuestionNumber": "148",
                                            "AnswerChoiceCode": "1353"
                                        },
                                        {
                                            "QuestionNumber": "149",
                                            "AnswerChoiceCode": "1357"
                                        },
                                        {
                                            "QuestionNumber": "150",
                                            "AnswerChoiceCode": "1361"
                                        },
                                        {
                                            "QuestionNumber": "141",
                                            "AnswerChoiceCode": "1266"
                                        },
                                        {
                                            "QuestionNumber": "146",
                                            "AnswerChoiceCode": "1339"
                                        },
                                        {
                                            "QuestionNumber": "142",
                                            "AnswerChoiceCode": "1289"
                                        },
                                        {
                                            "QuestionNumber": "145",
                                            "AnswerChoiceCode": "1336"
                                        },
                                        {
                                            "QuestionNumber": "155",
                                            "AnswerChoiceCode": "1263"
                                        }
                                    ]
                                },
                                "Restrictions": {
                                    "Restriction": [
                                        {
                                            "RestrictionType": "1",
                                            "Description": "De acordo com os dados preenchidos, a aceitação deste seguro ficará sujeita a Vistoria Prévia. Você receberá o código para realização da mesma ao enviar a proposta"
                                        }
                                    ]
                                },
                                "AdjustmentFactor": "1.00"
                            }
                        ]
                    },
                    "Installments": {
                        "Installment": [
                            {
                                "IsChosen": "T",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "2344.45",
                                "OtherPaymentAmount": "2344.45",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.45",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "1",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "1180.95",
                                "OtherPaymentAmount": "1180.95",
                                "Fee": "16.24",
                                "TaxValue": "162.33",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2361.90",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "2",
                                    "InterestPercent": "1.50",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "793.15",
                                "OtherPaymentAmount": "793.15",
                                "Fee": "32.60",
                                "TaxValue": "163.53",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2379.45",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "3",
                                    "InterestPercent": "1.50",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "599.27",
                                "OtherPaymentAmount": "599.27",
                                "Fee": "48.99",
                                "TaxValue": "164.74",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2397.08",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "4",
                                    "InterestPercent": "1.50",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "515.71",
                                "OtherPaymentAmount": "515.71",
                                "Fee": "218.07",
                                "TaxValue": "177.22",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2578.55",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "5",
                                    "InterestPercent": "5.00",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "439.90",
                                "OtherPaymentAmount": "439.90",
                                "Fee": "274.68",
                                "TaxValue": "181.40",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2639.40",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "6",
                                    "InterestPercent": "5.00",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "385.87",
                                "OtherPaymentAmount": "385.87",
                                "Fee": "332.15",
                                "TaxValue": "185.64",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2701.09",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "7",
                                    "InterestPercent": "5.00",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "350.81",
                                "OtherPaymentAmount": "350.81",
                                "Fee": "430.27",
                                "TaxValue": "192.88",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2806.48",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "8",
                                    "InterestPercent": "5.50",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "319.65",
                                "OtherPaymentAmount": "319.65",
                                "Fee": "495.77",
                                "TaxValue": "197.72",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2876.85",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "9",
                                    "InterestPercent": "5.50",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "294.81",
                                "OtherPaymentAmount": "294.81",
                                "Fee": "562.23",
                                "TaxValue": "202.62",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2948.10",
                                "PaymentType": {
                                    "PaymentPlanCode": "0050",
                                    "PaymentTypeCode": "FB",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "10",
                                    "InterestPercent": "5.50",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "2344.45",
                                "OtherPaymentAmount": "2344.45",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.45",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "1",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "1172.23",
                                "OtherPaymentAmount": "1172.23",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.46",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "2",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "781.48",
                                "OtherPaymentAmount": "781.48",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "3",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "586.11",
                                "OtherPaymentAmount": "586.11",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "4",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "468.89",
                                "OtherPaymentAmount": "468.89",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.45",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "5",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "390.75",
                                "OtherPaymentAmount": "390.75",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.50",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "6",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "334.92",
                                "OtherPaymentAmount": "334.92",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "7",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "293.06",
                                "OtherPaymentAmount": "293.06",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.48",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "8",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "260.49",
                                "OtherPaymentAmount": "260.49",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.41",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "9",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "234.44",
                                "OtherPaymentAmount": "234.44",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.40",
                                "PaymentType": {
                                    "PaymentPlanCode": "0071",
                                    "PaymentTypeCode": "DC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "10",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "2344.45",
                                "OtherPaymentAmount": "2344.45",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.45",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "1",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "F"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "1172.23",
                                "OtherPaymentAmount": "1172.23",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.46",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "2",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "781.48",
                                "OtherPaymentAmount": "781.48",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "3",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "586.11",
                                "OtherPaymentAmount": "586.11",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "4",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "468.89",
                                "OtherPaymentAmount": "468.89",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.45",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "5",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "390.75",
                                "OtherPaymentAmount": "390.75",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.50",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "6",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "334.92",
                                "OtherPaymentAmount": "334.92",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "7",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "293.06",
                                "OtherPaymentAmount": "293.06",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.48",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "8",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "260.49",
                                "OtherPaymentAmount": "260.49",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.41",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "9",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "234.44",
                                "OtherPaymentAmount": "234.44",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.40",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "10",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "213.13",
                                "OtherPaymentAmount": "213.13",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.43",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "11",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            },
                            {
                                "IsChosen": "F",
                                "IsChosenFB": "F",
                                "FirstPaymentAmount": "195.37",
                                "OtherPaymentAmount": "195.37",
                                "Fee": "0.00",
                                "TaxValue": "161.13",
                                "InterestValue": "0.0",
                                "TotalPremiumValue": "2344.44",
                                "PaymentType": {
                                    "PaymentPlanCode": "0072",
                                    "PaymentTypeCode": "CC",
                                    "IsFirstPayment": "T",
                                    "InstallmentNumber": "12",
                                    "InterestPercent": "0.00",
                                    "FirstPlaymentFB": "T"
                                }
                            }
                        ]
                    },
                    "TransactionMessages": {
                        "WarningMessages": {
                            "WarningMessage": [
                                "DESCONTO DE 10% Percentual de Desconto: 10%",
                                "De acordo com os dados preenchidos, a aceitação deste seguro ficará sujeita a Vistoria Prévia. Você receberá o código para realização da mesma ao enviar a proposta",
                                "As informações de CPF/CNPJ, placa e chassi são necessárias para a análise de aceitação do cálculo. Ao incluir ou alterar estes dados o valor do prêmio poderá ser alterado, assim como o parecer quanto à aceitação.",
                                "Essa cotação tem validade até o dia 19/08/2020",
                                "A Cia. realizou alterações nos pacotes de Assist. 24 Horas. Confira o plano contratado e para maiores detalhes consulte as Condições Gerais deste produto.",
                                "Erro ao adicionar informações complementares do cálculo."
                            ]
                        }
                    },
                    "NewPaymentForm": "F",
                    "CalculationDifference": "F"
                },
                "ProposalData": {
                    "Vehicles": {
                        "Vehicle": [
                            {
                                "InvoiceNumber": "1111",
                                "DealershipName": "DISPENSADA",
                                "LoJackNum": "",
                                "SequenceNumber": "1",
                                "Plate": "DDD1231",
                                "Chassis": "99ABJ68U4J4000187"
                            }
                        ]
                    },
                    "PolicyHolder": {
                        "Name": "TESTE SEGURADO",
                        "IsIndividual": "F",
                        "PublicIDNumber": "85135710590",
                        "ZipCode": "30550008",
                        "StreetType": "Rua",
                        "StreetName": "Rua Teste",
                        "StreetNumber": "999",
                        "StreetExtraInformation": "AP 1",
                        "DistrictName": "DONA CLARA",
                        "CityName": "Belo Horizonte",
                        "StateCode": "MG",
                        "TelephoneAreaCode": "31",
                        "TelephoneNumber": "999999999",
                        "TelephoneExtensionNumber": "",
                        "FaxAreaCode": "",
                        "FaxNumber": "",
                        "FaxExtensionNumber": "",
                        "DriverLicenseNumber": "",
                        "DriverLicenseType": "N",
                        "BirthDate": "",
                        "MaritalStatus": "M",
                        "EmailAddress": "teste@teste.com.br",
                        "CellPhoneAreaCode": "31",
                        "CellPhoneNumber": "999999999",
                        "BusinessType": "1096-1/00",
                        "IsInsuredForeing": "N",
                        "PassportNumber": "",
                        "ShippingCountry": "",
                        "PoliticallyExposedPerson": "N",
                        "RelationshipType": "",
                        "CadempNumber": "",
                        "Text": "",
                        "OccupationCode": "A2",
                        "RangeMonthlyIncomeCode": "1",
                        "PolicyHolderAccount": {
                            "DebitBankCode": "077",
                            "AgencyNumber": "0001",
                            "AgencyControlDigit": "",
                            "IsThirdAccountHolder": "T",
                            "CheckingAccountNumber": "827487",
                            "CheckingAccountControlDigit": "8"
                        },
                        "MailingAddress": {
                            "MailingAddressType": "4",
                            "ZipCode": "30550008",
                            "StreetType": "Rua",
                            "StreetName": "Rua Poruína",
                            "StreetNumber": "999",
                            "StreetExtraInformation": "AP 1",
                            "DistrictName": "DONA CLARA",
                            "CityName": "Belo Horizonte",
                            "StateCode": "MG"
                        }
                    },
                    "IsVirtualKit": "T",
                    "EilVirtualKit": "teste@teste.com.br",
                    "PaymentDayOfMonth": "9",
                    "ThirdAccountHolderName": "TESTE SEGURADO",
                    "ThirdPublicIdentification": "85135710590"
                }
            }
        });
    }
}