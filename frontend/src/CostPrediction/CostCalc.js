export default function calculateCost(untapped_area) {
    // Fixed costs per unit hectare
    const LABOUR_COSTS_HECTARE = 20000;
    const STORAGE_COSTS_HECTARE = 4000;
    const MACHINERY_OPERATION_COSTS_HECTARE = 12000;
    const SUPERVISION_CHARGES_HECTARE = 15000;
    const LAND_MOPPING_COSTS_HECTARE = 10000;
    const BIOMASS_PROCESSING_COSTS_HECTARE = 15000;
    const MONITORING_COSTS_HECTARE = 6000;
    const RESTORATION_COSTS_HECTARE = 20000;
    const OVERHEAD_AND_MANAGEMENT_COSTS_HECTARE = 10000;
    const INCOME_GENERATION_HECTARE = 12500;
    
    // Conversion factor from hectare to square feet
    const HECTARE_TO_SQUARE_FEET = 107639.1;
    
    // Fixed costs per square foot
    const LABOUR_COSTS = LABOUR_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const STORAGE_COSTS = STORAGE_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const MACHINERY_OPERATION_COSTS = MACHINERY_OPERATION_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const SUPERVISION_CHARGES = SUPERVISION_CHARGES_HECTARE / HECTARE_TO_SQUARE_FEET;
    const LAND_MOPPING_COSTS = LAND_MOPPING_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const BIOMASS_PROCESSING_COSTS = BIOMASS_PROCESSING_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const MONITORING_COSTS = MONITORING_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const RESTORATION_COSTS = RESTORATION_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const OVERHEAD_AND_MANAGEMENT_COSTS = OVERHEAD_AND_MANAGEMENT_COSTS_HECTARE / HECTARE_TO_SQUARE_FEET;
    const INCOME_GENERATION = INCOME_GENERATION_HECTARE / HECTARE_TO_SQUARE_FEET;
    const labourCosts = LABOUR_COSTS * untapped_area;
    const storageCosts = STORAGE_COSTS * untapped_area;
    const machineryOperationCosts = MACHINERY_OPERATION_COSTS * untapped_area;
    const supervisionCharges = SUPERVISION_CHARGES * untapped_area;
    const landMoppingCosts = LAND_MOPPING_COSTS * untapped_area;
    const biomassProcessingCosts = BIOMASS_PROCESSING_COSTS * untapped_area;
    const monitoringCosts = MONITORING_COSTS * untapped_area;
    const restorationCosts = RESTORATION_COSTS * untapped_area;
    const overheadAndManagementCosts = OVERHEAD_AND_MANAGEMENT_COSTS * untapped_area;
    const incomeGeneration = INCOME_GENERATION * untapped_area;

    const totalCosts = labourCosts + storageCosts + machineryOperationCosts + supervisionCharges +
        landMoppingCosts + biomassProcessingCosts + monitoringCosts + restorationCosts +
        overheadAndManagementCosts;

    const totalIncome = incomeGeneration;

    const netCost = totalCosts - totalIncome;
    const costPerSquareFoot = netCost / untapped_area;
    const averageYieldPerSquareFoot = 1000 / HECTARE_TO_SQUARE_FEET; // in kilograms
    const costPerKilogram = costPerSquareFoot / averageYieldPerSquareFoot;

    return netCost;
}
